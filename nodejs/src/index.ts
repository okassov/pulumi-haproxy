import * as pulumi from "@pulumi/pulumi";
import * as haproxy from "@pulumi/haproxy";
import * as command from "@pulumi/command";

export interface CustomBindParamsArgs { acceptProxy: boolean }

export interface CustomServerArgs extends Omit<haproxy.ServerArgs,
  "address" | "parentName" | "parentType"> {
  ip: string;
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

  customBindParams?: CustomBindParamsArgs
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

    const apiKey = `${args.apiConfig.apiAddress}:${args.apiConfig.apiPort}`
    let provider = HAProxyStack.providers.get(apiKey)
    const resOpts: pulumi.CustomResourceOptions = { parent: this }

    if (!provider) {
      provider = new haproxy.Provider(`haproxy-${apiKey.replace(/[:.]/g, "-")}`, {
        url     : pulumi.interpolate`http://${args.apiConfig.apiAddress}:${args.apiConfig.apiPort}`,
        username: args.apiConfig.apiUsername,
        password: args.apiConfig.apiPassword,
      }, resOpts)
      HAProxyStack.providers.set(apiKey, provider)
    }

    /* очередь компонентов одного API */
    let waitFor: pulumi.Resource | undefined = HAProxyStack.lastForApi.get(apiKey)

    const backends : pulumi.Output<string>[] = []
    const frontends: pulumi.Output<string>[] = []

    for (const svc of args.services) {

      const backend = new haproxy.Backend(`backend-${svc.name}`, {
        name: svc.name,
        ...svc.backend,
      }, {
        ...resOpts,
        provider,
        dependsOn: waitFor ? [waitFor] : undefined,
      })

      let prev: pulumi.Resource = backend
      const servers: haproxy.Server[] = []
      for (const srv of svc.servers) {
        const sRes = new haproxy.Server(`backendServer-${svc.name}-${srv.ip.replace(/\./g, "-")}`, {
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
        servers.push(sRes)
        prev = sRes
      }

      const frontend = new haproxy.Frontend(`frontend-${svc.name}`, {
        name   : svc.name,
        backend: backend.name,
        ...svc.frontend,
      }, {
        ...resOpts,
        provider,
        dependsOn: prev,
      })

      const bind = new haproxy.Bind(`bind-${svc.name}`, {
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

      let last: pulumi.Resource = bind

      /* optional accept-proxy patch */
      if (svc.customBindParams?.acceptProxy) {
        const cmd = new command.local.Command(`patch-acceptProxy-${svc.name}`, {
          create: pulumi.interpolate`#!/usr/bin/env bash
            set -euo pipefail
            AUTH="${args.apiConfig.apiUsername}:${args.apiConfig.apiPassword}"
            HOST="${args.apiConfig.apiAddress}"
            PORT="${args.apiConfig.apiPort}"
            VER=$(curl -sSf -u "$AUTH" "http://$HOST:$PORT/v2/services/haproxy/configuration/version")
            curl -u "$AUTH" -H 'Content-Type: application/json' -X PUT \
                 -d '{"name": "${bind.name}", "address": "${bind.address}", "port": ${bind.port}, "accept_proxy":true}' \
                 "http://$HOST:$PORT/v2/services/haproxy/configuration/binds/${bind.name}?frontend=${frontend.name}&version=$VER"
          `,
        }, { parent: this, dependsOn: bind })
        last = cmd
      }

      waitFor = last // следующий service ждёт предыдущий
      backends.push(backend.name)
      frontends.push(frontend.name)
    }

    /* запоминаем финальный ресурс для очередного стека */
    if (waitFor) HAProxyStack.lastForApi.set(apiKey, waitFor)

    this.registerOutputs({
      backends ,
      frontends,
    })
  }
}