# HAProxy Module for Pulumi

> **A thin, opinionated wrapper around the `@pulumi/haproxy` provider that builds the whole chain _Backend → Servers → Frontend → Bind_ in one line of code.**

---

## Features

* **One component, four resources** – create a complete HAProxy chain at once.  
* **Zero boilerplate** – automatic names, dependency ordering and outputs.  
* **Day-2 tuning** – optional patch step that toggles `accept-proxy` via the Data-Plane API.  
* **100 % provider args** – pass native `haproxy.*Args`; nothing is re-invented.

---

## Installation

```bash
npm install --save "@okassov/pulumi-haproxy"
# or
yarn add "@okassov/pulumi-haproxy"
```

---

## Prerequisites

| Tool              | Min&nbsp;Version | Notes                                                    |
|-------------------|-----------------:|----------------------------------------------------------|
| Node.js           | 14.x             | Tested up to 20.x                                        |
| Pulumi CLI        | 3.x              |                                                          |
| HAProxy           | 2.4              | Data-Plane API must be enabled (e.g. `:5555`)            |
| `@pulumi/haproxy` | 0.3.0            | Or newer                                                 |

---

## Data-Plane API config (only if you patch `accept-proxy`)

```bash
pulumi config set haproxy:username admin
pulumi config set haproxy:password S3cr3t --secret
pulumi config set haproxy:address 10.129.51.140
pulumi config set haproxy:port    5555
```

---

## Quick start

```ts
import * as pulumi from "@pulumi/pulumi";
import { HAProxy } from "@okassov/pulumi-haproxy";

const masters = [
  { name: "k8s-m1", ip: "10.0.0.11", port: 6443 },
  { name: "k8s-m2", ip: "10.0.0.12", port: 6443 },
  { name: "k8s-m3", ip: "10.0.0.13", port: 6443 },
];

const kubeApi = new HAProxy("kube-api", {
  /* Data-Plane API creds — required only when acceptProxy=true */
  apiConfig: {
    apiAddress: "10.129.51.140",
    apiPort:    "5555",
    apiPassword: pulumi.secret("S3cr3t"),
  },

  backend: {
    mode: "tcp",
    balances: [{ algorithm: "roundrobin" }],
    timeoutConnect: "5s",
    timeoutClient:  "30s",
    timeoutServer:  "30s",
  },

  servers: masters,

  frontend: {
    mode:  "tcp",
    tcplog: true,
  },

  bind: {
    address: "0.0.0.0",
    port:    6443,
  },

  customBindParams: { acceptProxy: true },
});
```

### Stack outputs

| Output            | Description                      |
|-------------------|----------------------------------|
| `backendName`     | HAProxy backend name             |
| `frontendName`    | HAProxy frontend name            |
| `bindAddr`/`Port` | Listening address and port       |

---

## Component arguments

| Field              | Type                         | Required | Description                                                         |
|--------------------|------------------------------|:--------:|---------------------------------------------------------------------|
| `apiConfig`        | `HAProxyApiParams`           | *\*¹*   | Data-Plane API details; needed only when `customBindParams` used    |
| `backend`          | `haproxy.BackendArgs`        | ✔        | Any backend parameters supported by the provider                    |
| `servers`          | `CustomServerArgs[]`         | ✔        | One element per upstream node                                       |
| `frontend`         | `CustomFrontendArgs`         | ✔        | Extra frontend options (ACLs, SSL, logs, …)                         |
| `bind`             | `CustomBindArgs`             | ✔        | Bind address, port and other `BindArgs` fields                      |
| `customBindParams` | `{ acceptProxy: boolean }`   | ✖        | Day-2 patch to enable PROXY protocol on the bind                    |

*\*¹ Required only when `customBindParams.acceptProxy` is `true`.*

---

## Advanced

* **TLS termination** – attach certificates in `bind.ssl` or create a dedicated HTTPS frontend.  
* **Health checks** – override per-server `check*` fields.  
* **Dynamic ACL routing** – extend `frontend` with your own `use_backend` rules.

---

## Roadmap

- [ ] Multiple binds per frontend  
- [ ] Built-in ACL helpers (`use_backend` on SNI / path)  
- [ ] Prom