import * as pulumi from "@pulumi/pulumi";
import * as haproxy from "@pulumi/haproxy";
import * as command from "@pulumi/command";


export interface CustomBindParamsArgs {
    acceptProxy: boolean;
}

export interface CustomServerArgs extends Omit<haproxy.ServerArgs, "address" | "parentName" | "parentType"> {
    ip: string;
}

export interface CustomFrontendArgs extends Omit<haproxy.FrontendArgs, "backend"> {}

export interface CustomBindArgs extends Omit<haproxy.BindArgs, "parentName" | "parentType"> {}

export interface HAProxyApiParams {
    apiAddress: string;
    apiPort: string;
    apiPassword: string;
}

export interface HAProxyArgs {
    apiConfig: HAProxyApiParams;
    backend: haproxy.BackendArgs;
    servers: CustomServerArgs[];
    frontend: CustomFrontendArgs;
    bind: CustomBindArgs;
    customBindParams?: CustomBindParamsArgs;
}

export class HAProxy extends pulumi.ComponentResource {

    public readonly backend: haproxy.Backend;
    public readonly servers: haproxy.Server[];
    public readonly frontend: haproxy.Frontend;
    public readonly bind: haproxy.Bind;

    constructor(name: string, args: HAProxyArgs, opts?: pulumi.ComponentResourceOptions) {
        super("okassov:haproxy", name, {}, opts);

        const provOpts: pulumi.CustomResourceOptions = { parent: this, provider: opts?.provider };

        /* Create HAProxy Backend */
        this.backend = new haproxy.Backend(`backend-${name}`, {
            name: name,
            ...args.backend
        }, provOpts);

        /* Create HAProxy Backend Servers */
        args.servers.forEach(server => {
            new haproxy.Server(`backendServer-${name}-${server.ip.replace(/\./g, "-")}`, {
                name:        server.name,
                address:     server.ip,
                parentName:  this.backend.name,
                parentType:  "backend",
                ...server
            }, { ...provOpts, parent: this.backend, dependsOn: this.backend });
        });

        /* Create HAProxy Frontend */
        this.frontend = new haproxy.Frontend(`frontend-${name}`, {
            name: name,
            backend: this.backend.name,
            ...args.frontend
        }, { ...provOpts, dependsOn: this.backend });

        /* Create HAProxy Frontend Bind */
        this.bind = new haproxy.Bind(`bind-${name}`, {
            name: name,
            parentName: this.frontend.name,
            parentType: "frontend",
            ...args.bind
        }, { ...provOpts, parent: this.frontend, dependsOn: this.frontend });

        /* Create HAProxy Bind custom Accept-Proxy param */
        if (args.customBindParams?.acceptProxy) {
            new command.local.Command(`${name}-bindAcceptProxy`, {
                create: pulumi.interpolate`#!/usr/bin/env bash
                    set -euo pipefail

                    AUTH="admin:${args.apiConfig.apiPassword}"
                    HOST="${args.apiConfig.apiAddress}"
                    PORT="${args.apiConfig.apiPort}"

                    BIND="${this.bind.name}"
                    FRONT="${this.frontend.name}"
                    BIND_PORT="${this.bind.port}"
                    BIND_ADDR="${this.bind.address}"

                    VER=$(curl -sSf -u "$AUTH" "http://$HOST:$PORT/v2/services/haproxy/configuration/version")

                    PAYLOAD=$(cat <<EOF
                    {
                    "name": "$BIND",
                    "address": $BIND_ADDR,
                    "port": $BIND_PORT,
                    "accept_proxy": true
                    }
                    EOF
                    )

                    curl -u "$AUTH" -H "Content-Type: application/json" \
                        -X PUT -d "$PAYLOAD" \
                        "http://$HOST:$PORT/v2/services/haproxy/configuration/binds/$BIND?frontend=$FRONT&version=$VER" -v

                    curl -sSf -u "$AUTH" -X GET "http://$HOST:$PORT/v2/services/haproxy/reloads"
                    `,
            }, { ...provOpts, dependsOn: this.bind });
        }
    }
}

