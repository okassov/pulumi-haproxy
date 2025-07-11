# HAProxy Module for Pulumi [![npm version](https://badge.fury.io/js/%40okassov%2Fpulumi-haproxy.svg)](https://www.npmjs.com/package/%40okassov%2Fpulumi-haproxy) [![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://mozilla.org/MPL/2.0/)

> **Pulumi Component for managing HAProxy configuration through the HAProxy Data‑Plane API (DPA).**\
> Create *Backend → Servers → Frontend → Bind* chains declaratively – all in a single Pulumi resource.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Inputs](#inputs)
5. [Outputs](#outputs)
6. [Examples](#examples)
7. [License](#license)

## Features

- **Single call ⇒ complete service** – define *backend*, *servers*, *frontend* and *bind* in one object.
- **Multiple services in one stack** – pass an array of services; component guarantees a conflict‑free sequential apply.
- **Shared provider cache** – all component instances talking to the same DPA share one Pulumi provider instance.
- **Custom bind parameters** – send *any* additional JSON fields (e.g. `accept_proxy`, `ssl`, `maxconn`, …) without changing code.
- **Automatic name prefixing** – resource names are vendor‑prefixed with component name to avoid collisions across stacks.

## Installation

```bash
npm install @okassov/pulumi-haproxy
```

> Requires **Pulumi v3.115+** and Node 18+.

## Quick Start

```ts
import { HAProxyStack } from "@okassov/pulumi-haproxy";

const k8sNodes = [
  { name: "k8s-node-01", ip: "10.1.1.101" },
  { name: "k8s-node-02", ip: "10.1.1.102" },
  { name: "k8s-node-03", ip: "10.1.1.103" },
]

const haproxy = new HAProxyStack("ingress-gw", {
  apiConfig: {
    apiAddress : "10.1.1.100",
    apiPort    : 5555,
    apiUsername: "admin",
    apiPassword: pulumi.secret("super‑secret")
  },
  services: [
    {
      name: "http",
      backend : { mode: "tcp", balances: [{ algorithm: "roundrobin" }] },
      servers : k8sNodes.map(n => ({ name:n.name, ip:n.ip, port:30080, check:true, sendProxy:true })),
      frontend: { mode: "tcp", tcplog:true },
      bind    : { address:"0.0.0.0", port:80 },
      customBindParams: { accept_proxy:true }
    },
    {
      name: "https",
      backend : { mode: "tcp", balances: [{ algorithm: "roundrobin" }] },
      servers : k8sNodes.map(n => ({ name:n.name, ip:n.ip, port:30443, check:true, sendProxy:true })),
      frontend: { mode: "tcp", tcplog:true },
      bind    : { address:"0.0.0.0", port:443 },
      customBindParams: { accept_proxy:true, ssl:"enabled" }
    }
  ]
});
```

Run:

```bash
pulumi up
```

## Inputs

| Field             | Type                   | Required | Description                                |
| ----------------- | ---------------------- | -------- | ------------------------------------------ |
| `apiConfig`       | `HAProxyApiParams`     | **Yes**  | DPA connection credentials.                |
|   • `apiAddress`  | `string`               | Yes      | IP / DNS of HAProxy DPA.                   |
|   • `apiPort`     | `number\|string`       | Yes      | DPA port (usually `5555`).                 |
|   • `apiUsername` | `string`               | Yes      | HTTP‑basic user.                           |
|   • `apiPassword` | `string`               | Yes      | HTTP‑basic password (use `pulumi.secret`). |
| `services`        | `HAProxyServiceArgs[]` | **Yes**  | Array of service definitions.              |

**`HAProxyServiceArgs`**

| Field              | Type                                          | Required | Description                                        |
| ------------------ | --------------------------------------------- | -------- | -------------------------------------------------- |
| `name`             | `string`                                      | **Yes**  | Logical name; reused for backend & frontend.       |
| `backend`          | `haproxy.BackendArgs`                         | **Yes**  | Direct mapping to DPA backend args.                |
| `servers`          | `CustomServerArgs[]`                          | **Yes**  | Servers behind backend; `ip` instead of `address`. |
| `frontend`         | `CustomFrontendArgs`                          | **Yes**  | Frontend spec (without `backend`).                 |
| `bind`             | `CustomBindArgs`                              | **Yes**  | Bind spec (without `parentName` / `parentType`).   |
| `customBindParams` | `Record<string, string \| number \| boolean>` | No       | Arbitrary extra JSON fields added to bind patch.   |

## Outputs

| Field       | Type                      | Description                 |
| ----------- | ------------------------- | --------------------------- |
| `backends`  | `pulumi.Output<string>[]` | Names of created backends.  |
| `frontends` | `pulumi.Output<string>[]` | Names of created frontends. |

## Examples

### Minimal HTTP‐only

```ts
new HAProxyStack("api-edge", {
  apiConfig: {/* … */},
  services: [{
    name: "http",
    backend : { mode:"http" },
    servers : [{ name:"svc", ip:"10.0.0.10", port:8080 }],
    frontend: { mode:"http" },
    bind    : { address:"0.0.0.0", port:80 }
  }]
})
```

### TCP LB with custom params

```ts
new HAProxyStack("db-tcp", {
  apiConfig: {/* … */},
  services: [{
    name: "pgsql",
    backend : { mode:"tcp" },
    servers : dbNodes.map(n => ({ name:n.id, ip:n.ip, port:5432, check:true })),
    frontend: { mode:"tcp" },
    bind    : { address:"10.10.10.2", port:5432 },
    customBindParams: { accept_proxy:true, maxconn:2000 }
  }]
})
```

## License

Apache 2.0 – see [`LICENSE`](./LICENSE).
