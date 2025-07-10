import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Backend extends pulumi.CustomResource {
    /**
     * Get an existing Backend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackendState, opts?: pulumi.CustomResourceOptions): Backend;
    /**
     * Returns true if the given object is an instance of Backend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Backend;
    /**
     * The adv_check of the backend. It must be one of the following: ssl-hello-chk, smtpchk, ldap-check, mysql-check,
     * pgsql-check, tcp-check, redis-check, httpchk
     */
    readonly advCheck: pulumi.Output<string | undefined>;
    readonly backendId: pulumi.Output<string>;
    /**
     * The balance of the backend.
     */
    readonly balances: pulumi.Output<outputs.BackendBalance[] | undefined>;
    /**
     * The check_cache of the backend.
     */
    readonly checkCache: pulumi.Output<boolean | undefined>;
    /**
     * The check_timeout of the backend.
     */
    readonly checkTimeout: pulumi.Output<number | undefined>;
    /**
     * The connect_timeout of the backend.
     */
    readonly connectTimeout: pulumi.Output<number | undefined>;
    /**
     * The forwardfor of the backend.
     */
    readonly forwardfors: pulumi.Output<outputs.BackendForwardfor[] | undefined>;
    /**
     * The http_connection_mode of the backend. It must be one of the following: http-keep-alive, httpclose, http-server-close
     */
    readonly httpConnectionMode: pulumi.Output<string | undefined>;
    /**
     * The httpchk_params of the backend.
     */
    readonly httpchkParams: pulumi.Output<outputs.BackendHttpchkParam[] | undefined>;
    /**
     * The mode of the backend. It must be one of the following: http or tcp
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the backend. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The queue_timeout of the backend.
     */
    readonly queueTimeout: pulumi.Output<number | undefined>;
    /**
     * The server_timeout of the backend.
     */
    readonly serverTimeout: pulumi.Output<number | undefined>;
    /**
     * The tarpit_timeout of the backend.
     */
    readonly tarpitTimeout: pulumi.Output<number | undefined>;
    /**
     * The tunnel_timeout of the backend.
     */
    readonly tunnelTimeout: pulumi.Output<number | undefined>;
    /**
     * Create a Backend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BackendArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Backend resources.
 */
export interface BackendState {
    /**
     * The adv_check of the backend. It must be one of the following: ssl-hello-chk, smtpchk, ldap-check, mysql-check,
     * pgsql-check, tcp-check, redis-check, httpchk
     */
    advCheck?: pulumi.Input<string>;
    backendId?: pulumi.Input<string>;
    /**
     * The balance of the backend.
     */
    balances?: pulumi.Input<pulumi.Input<inputs.BackendBalance>[]>;
    /**
     * The check_cache of the backend.
     */
    checkCache?: pulumi.Input<boolean>;
    /**
     * The check_timeout of the backend.
     */
    checkTimeout?: pulumi.Input<number>;
    /**
     * The connect_timeout of the backend.
     */
    connectTimeout?: pulumi.Input<number>;
    /**
     * The forwardfor of the backend.
     */
    forwardfors?: pulumi.Input<pulumi.Input<inputs.BackendForwardfor>[]>;
    /**
     * The http_connection_mode of the backend. It must be one of the following: http-keep-alive, httpclose, http-server-close
     */
    httpConnectionMode?: pulumi.Input<string>;
    /**
     * The httpchk_params of the backend.
     */
    httpchkParams?: pulumi.Input<pulumi.Input<inputs.BackendHttpchkParam>[]>;
    /**
     * The mode of the backend. It must be one of the following: http or tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the backend. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The queue_timeout of the backend.
     */
    queueTimeout?: pulumi.Input<number>;
    /**
     * The server_timeout of the backend.
     */
    serverTimeout?: pulumi.Input<number>;
    /**
     * The tarpit_timeout of the backend.
     */
    tarpitTimeout?: pulumi.Input<number>;
    /**
     * The tunnel_timeout of the backend.
     */
    tunnelTimeout?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Backend resource.
 */
export interface BackendArgs {
    /**
     * The adv_check of the backend. It must be one of the following: ssl-hello-chk, smtpchk, ldap-check, mysql-check,
     * pgsql-check, tcp-check, redis-check, httpchk
     */
    advCheck?: pulumi.Input<string>;
    backendId?: pulumi.Input<string>;
    /**
     * The balance of the backend.
     */
    balances?: pulumi.Input<pulumi.Input<inputs.BackendBalance>[]>;
    /**
     * The check_cache of the backend.
     */
    checkCache?: pulumi.Input<boolean>;
    /**
     * The check_timeout of the backend.
     */
    checkTimeout?: pulumi.Input<number>;
    /**
     * The connect_timeout of the backend.
     */
    connectTimeout?: pulumi.Input<number>;
    /**
     * The forwardfor of the backend.
     */
    forwardfors?: pulumi.Input<pulumi.Input<inputs.BackendForwardfor>[]>;
    /**
     * The http_connection_mode of the backend. It must be one of the following: http-keep-alive, httpclose, http-server-close
     */
    httpConnectionMode?: pulumi.Input<string>;
    /**
     * The httpchk_params of the backend.
     */
    httpchkParams?: pulumi.Input<pulumi.Input<inputs.BackendHttpchkParam>[]>;
    /**
     * The mode of the backend. It must be one of the following: http or tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the backend. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The queue_timeout of the backend.
     */
    queueTimeout?: pulumi.Input<number>;
    /**
     * The server_timeout of the backend.
     */
    serverTimeout?: pulumi.Input<number>;
    /**
     * The tarpit_timeout of the backend.
     */
    tarpitTimeout?: pulumi.Input<number>;
    /**
     * The tunnel_timeout of the backend.
     */
    tunnelTimeout?: pulumi.Input<number>;
}
