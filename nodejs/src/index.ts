import * as pulumi from "@pulumi/pulumi";
import * as haproxy from "@pulumi/haproxy";
import * as command from "@pulumi/command";

/** Произвольные дополнительные поля для Bind */
export type CustomBindParams = Record<string, string | number | boolean>

export interface CustomServerArgs extends Omit<haproxy.ServerArgs,
  "address" | "parentName" | "parentType"> {
  ip: string
}

export interface CustomFrontendArgs extends Omit<haproxy.FrontendArgs, "backend"> {}
export interface CustomBindArgs     extends Omit<haproxy.BindArgs,     "parentName" | "parentType"> {}

export interface HAProxyApiParams {
  apiAddress : pulumi.Input<string>
  apiPort    : pulumi.Input<number | string>
  apiUsername: pulumi.Input<string>
  apiPassword: pulumi.Input<string>
}

export interface HAProxyServiceArgs {
  name: string

  backend : haproxy.BackendArgs
  servers : CustomServerArgs[]
  frontend: CustomFrontendArgs
  bind    : CustomBindArgs

  customBindParams?: CustomBindParams
}

export interface HAProxyStackArgs {
  apiConfig: HAProxyApiParams
  services : HAProxyServiceArgs[]
}

export class HAProxyStack extends pulumi.ComponentResource {
  private static providers  = new Map<string, haproxy.Provider>()
  private static lastForApi = new Map<string, pulumi.Resource>()

  constructor(name: string, args: HAProxyStackArgs, opts?: pulumi.ComponentResourceOptions) {
    super("okassov:haproxy:Stack", name, {}, opts)

    /* 1. Shared provider per API host:port */
    const apiKey = `${args.apiConfig.apiAddress}:${args.apiConfig.apiPort}`
    const resOpts: pulumi.CustomResourceOptions = { parent: this }

    let provider = HAProxyStack.providers.get(apiKey)
    if (!provider) {
      provider = new haproxy.Provider(`haproxy-${apiKey.replace(/[:.]/g, "-")}`, {
        url     : pulumi.interpolate`http://${args.apiConfig.apiAddress}:${args.apiConfig.apiPort}`,
        username: args.apiConfig.apiUsername,
        password: args.apiConfig.apiPassword,
      }, resOpts)
      HAProxyStack.providers.set(apiKey, provider)
    }

    let waitFor: pulumi.Resource | undefined = HAProxyStack.lastForApi.get(apiKey)

    const backends : pulumi.Output<string>[] = []
    const frontends: pulumi.Output<string>[] = []

    for (const svc of args.services) {
      const prefix = `${name}-${svc.name}`

      /* Backend */
      const backend = new haproxy.Backend(`backend-${prefix}`, {
        name: svc.name,
        ...svc.backend,
      }, {
        ...resOpts,
        provider,
        dependsOn: waitFor ? [waitFor] : undefined,
      })

      let prev: pulumi.Resource = backend
      for (const srv of svc.servers) {
        const sRes = new haproxy.Server(`backendServer-${prefix}-${srv.ip.replace(/\./g, "-")}`, {
          ...srv,
          address   : srv.ip,
          parentName: backend.name,
          parentType: "backend",
        }, {
          ...resOpts,
          provider,
          parent   : backend,
          dependsOn: prev,
        })
        prev = sRes
      }

      const frontend = new haproxy.Frontend(`frontend-${prefix}`, {
        name   : svc.name,
        backend: backend.name,
        ...svc.frontend,
      }, {
        ...resOpts,
        provider,
        dependsOn: prev,
      })

      const bind = new haproxy.Bind(`bind-${prefix}`, {
        name      : svc.name,
        parentName: frontend.name,
        parentType: "frontend",
        ...svc.bind,
      }, {
        ...resOpts,
        provider,
        parent   : frontend,
        dependsOn: frontend,
      })

      /* Optional custom params patch */
      let last: pulumi.Resource = bind
      if (svc.customBindParams && Object.keys(svc.customBindParams).length > 0) {
        const extraJson = Object.entries(svc.customBindParams)
          .map(([k, v]) => {
            const val = typeof v === "string" ? `\"${v}\"` : v
            return `\"${k}\": ${val}`
          })
          .join(", ")

        const cmd = new command.local.Command(`patch-bind-${prefix}`, {
          create: pulumi.interpolate`#!/usr/bin/env bash
            set -euo pipefail
            AUTH="${args.apiConfig.apiUsername}:${args.apiConfig.apiPassword}"
            HOST="${args.apiConfig.apiAddress}"
            PORT="${args.apiConfig.apiPort}"
            VER=$(curl -sSf -u "$AUTH" "http://$HOST:$PORT/v2/services/haproxy/configuration/version")
            curl -u "$AUTH" -H 'Content-Type: application/json' -X PUT \
                 -d '{"name":"${bind.name}","address":"${bind.address}","port":${bind.port}${extraJson ? ", " + extraJson : ""}}' \
                 "http://$HOST:$PORT/v2/services/haproxy/configuration/binds/${bind.name}?frontend=${frontend.name}&version=$VER"
          `,
        }, { parent: this, dependsOn: bind })
        last = cmd
      }

      /* update queue */
      waitFor = last
      backends .push(backend.name)
      frontends.push(frontend.name)
    }

    if (waitFor) HAProxyStack.lastForApi.set(apiKey, waitFor)

    this.registerOutputs({ backends, frontends })
  }
}