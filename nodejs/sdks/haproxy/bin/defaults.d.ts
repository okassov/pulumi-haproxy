import * as pulumi from "@pulumi/pulumi";
export declare class Defaults extends pulumi.CustomResource {
    /**
     * Get an existing Defaults resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultsState, opts?: pulumi.CustomResourceOptions): Defaults;
    /**
     * Returns true if the given object is an instance of Defaults.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Defaults;
    /**
     * The backlog of the defaults, it can be true or false
     */
    readonly backlog: pulumi.Output<number | undefined>;
    /**
     * The check timeout of the defaults
     */
    readonly checkTimeout: pulumi.Output<number | undefined>;
    /**
     * The client timeout of the defaults
     */
    readonly clientTimeout: pulumi.Output<number | undefined>;
    /**
     * The connect timeout of the defaults
     */
    readonly connectTimeout: pulumi.Output<number | undefined>;
    readonly defaultsId: pulumi.Output<string>;
    /**
     * The http keep alive timeout of the defaults
     */
    readonly httpKeepAliveTimeout: pulumi.Output<number | undefined>;
    /**
     * The http request timeout of the defaults
     */
    readonly httpRequestTimeout: pulumi.Output<number | undefined>;
    /**
     * The httplog of the defaults, it can be true or false
     */
    readonly httplog: pulumi.Output<boolean | undefined>;
    /**
     * The httpslog of the defaults, it can be true or false
     */
    readonly httpslog: pulumi.Output<boolean | undefined>;
    /**
     * The max connections of the defaults
     */
    readonly maxconn: pulumi.Output<number | undefined>;
    /**
     * http, tcp
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the defaults. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The queue timeout of the defaults
     */
    readonly queueTimeout: pulumi.Output<number | undefined>;
    /**
     * The retries of the defaults, it can be integer or null
     */
    readonly retries: pulumi.Output<number | undefined>;
    /**
     * The server fin timeout of the defaults
     */
    readonly serverFinTimeout: pulumi.Output<number | undefined>;
    /**
     * The server timeout of the defaults
     */
    readonly serverTimeout: pulumi.Output<number | undefined>;
    /**
     * The tcplog of the defaults, it can be true or false
     */
    readonly tcplog: pulumi.Output<boolean | undefined>;
    /**
     * Create a Defaults resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Defaults resources.
 */
export interface DefaultsState {
    /**
     * The backlog of the defaults, it can be true or false
     */
    backlog?: pulumi.Input<number>;
    /**
     * The check timeout of the defaults
     */
    checkTimeout?: pulumi.Input<number>;
    /**
     * The client timeout of the defaults
     */
    clientTimeout?: pulumi.Input<number>;
    /**
     * The connect timeout of the defaults
     */
    connectTimeout?: pulumi.Input<number>;
    defaultsId?: pulumi.Input<string>;
    /**
     * The http keep alive timeout of the defaults
     */
    httpKeepAliveTimeout?: pulumi.Input<number>;
    /**
     * The http request timeout of the defaults
     */
    httpRequestTimeout?: pulumi.Input<number>;
    /**
     * The httplog of the defaults, it can be true or false
     */
    httplog?: pulumi.Input<boolean>;
    /**
     * The httpslog of the defaults, it can be true or false
     */
    httpslog?: pulumi.Input<boolean>;
    /**
     * The max connections of the defaults
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the defaults. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The queue timeout of the defaults
     */
    queueTimeout?: pulumi.Input<number>;
    /**
     * The retries of the defaults, it can be integer or null
     */
    retries?: pulumi.Input<number>;
    /**
     * The server fin timeout of the defaults
     */
    serverFinTimeout?: pulumi.Input<number>;
    /**
     * The server timeout of the defaults
     */
    serverTimeout?: pulumi.Input<number>;
    /**
     * The tcplog of the defaults, it can be true or false
     */
    tcplog?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Defaults resource.
 */
export interface DefaultsArgs {
    /**
     * The backlog of the defaults, it can be true or false
     */
    backlog?: pulumi.Input<number>;
    /**
     * The check timeout of the defaults
     */
    checkTimeout?: pulumi.Input<number>;
    /**
     * The client timeout of the defaults
     */
    clientTimeout?: pulumi.Input<number>;
    /**
     * The connect timeout of the defaults
     */
    connectTimeout?: pulumi.Input<number>;
    defaultsId?: pulumi.Input<string>;
    /**
     * The http keep alive timeout of the defaults
     */
    httpKeepAliveTimeout?: pulumi.Input<number>;
    /**
     * The http request timeout of the defaults
     */
    httpRequestTimeout?: pulumi.Input<number>;
    /**
     * The httplog of the defaults, it can be true or false
     */
    httplog?: pulumi.Input<boolean>;
    /**
     * The httpslog of the defaults, it can be true or false
     */
    httpslog?: pulumi.Input<boolean>;
    /**
     * The max connections of the defaults
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the defaults. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The queue timeout of the defaults
     */
    queueTimeout?: pulumi.Input<number>;
    /**
     * The retries of the defaults, it can be integer or null
     */
    retries?: pulumi.Input<number>;
    /**
     * The server fin timeout of the defaults
     */
    serverFinTimeout?: pulumi.Input<number>;
    /**
     * The server timeout of the defaults
     */
    serverTimeout?: pulumi.Input<number>;
    /**
     * The tcplog of the defaults, it can be true or false
     */
    tcplog?: pulumi.Input<boolean>;
}
