import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Frontend extends pulumi.CustomResource {
    /**
     * Get an existing Frontend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FrontendState, opts?: pulumi.CustomResourceOptions): Frontend;
    /**
     * Returns true if the given object is an instance of Frontend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Frontend;
    /**
     * The accept invalid http request of the frontend.
     */
    readonly acceptInvalidHttpRequest: pulumi.Output<boolean | undefined>;
    /**
     * The name of the backend.
     */
    readonly backend: pulumi.Output<string>;
    /**
     * The backlog of the frontend.
     */
    readonly backlog: pulumi.Output<number | undefined>;
    /**
     * The compression of the frontend.
     */
    readonly compressions: pulumi.Output<outputs.FrontendCompression[] | undefined>;
    /**
     * The error log format of the frontend.
     */
    readonly errorLogFormat: pulumi.Output<string | undefined>;
    /**
     * The forwardfor of the frontend.
     */
    readonly forwardfors: pulumi.Output<outputs.FrontendForwardfor[] | undefined>;
    readonly frontendId: pulumi.Output<string>;
    /**
     * The http connection mode of the frontend. It can be one of the following values: httpclose, http-server-close,
     * http-keep-alive
     */
    readonly httpConnectionMode: pulumi.Output<string | undefined>;
    /**
     * The http keep alive timeout of the frontend.
     */
    readonly httpKeepAliveTimeout: pulumi.Output<number | undefined>;
    /**
     * The http request timeout of the frontend.
     */
    readonly httpRequestTimeout: pulumi.Output<number | undefined>;
    /**
     * The http use proxy header of the frontend.
     */
    readonly httpUseProxyHeader: pulumi.Output<boolean | undefined>;
    /**
     * The http log of the frontend.
     */
    readonly httplog: pulumi.Output<boolean | undefined>;
    /**
     * The https log of the frontend.
     */
    readonly httpslog: pulumi.Output<boolean | undefined>;
    /**
     * The log format of the frontend.
     */
    readonly logFormat: pulumi.Output<string | undefined>;
    /**
     * The log format sd of the frontend.
     */
    readonly logFormatSd: pulumi.Output<string | undefined>;
    /**
     * The max connection of the frontend.
     */
    readonly maxconn: pulumi.Output<number | undefined>;
    /**
     * The mode of the frontend. It can be one of the following values: http, tcp
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The monitor uri of the frontend.
     */
    readonly monitorUri: pulumi.Output<string | undefined>;
    /**
     * The name of the frontend. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The tcp log of the frontend.
     */
    readonly tcplog: pulumi.Output<boolean | undefined>;
    /**
     * Create a Frontend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FrontendArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Frontend resources.
 */
export interface FrontendState {
    /**
     * The accept invalid http request of the frontend.
     */
    acceptInvalidHttpRequest?: pulumi.Input<boolean>;
    /**
     * The name of the backend.
     */
    backend?: pulumi.Input<string>;
    /**
     * The backlog of the frontend.
     */
    backlog?: pulumi.Input<number>;
    /**
     * The compression of the frontend.
     */
    compressions?: pulumi.Input<pulumi.Input<inputs.FrontendCompression>[]>;
    /**
     * The error log format of the frontend.
     */
    errorLogFormat?: pulumi.Input<string>;
    /**
     * The forwardfor of the frontend.
     */
    forwardfors?: pulumi.Input<pulumi.Input<inputs.FrontendForwardfor>[]>;
    frontendId?: pulumi.Input<string>;
    /**
     * The http connection mode of the frontend. It can be one of the following values: httpclose, http-server-close,
     * http-keep-alive
     */
    httpConnectionMode?: pulumi.Input<string>;
    /**
     * The http keep alive timeout of the frontend.
     */
    httpKeepAliveTimeout?: pulumi.Input<number>;
    /**
     * The http request timeout of the frontend.
     */
    httpRequestTimeout?: pulumi.Input<number>;
    /**
     * The http use proxy header of the frontend.
     */
    httpUseProxyHeader?: pulumi.Input<boolean>;
    /**
     * The http log of the frontend.
     */
    httplog?: pulumi.Input<boolean>;
    /**
     * The https log of the frontend.
     */
    httpslog?: pulumi.Input<boolean>;
    /**
     * The log format of the frontend.
     */
    logFormat?: pulumi.Input<string>;
    /**
     * The log format sd of the frontend.
     */
    logFormatSd?: pulumi.Input<string>;
    /**
     * The max connection of the frontend.
     */
    maxconn?: pulumi.Input<number>;
    /**
     * The mode of the frontend. It can be one of the following values: http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The monitor uri of the frontend.
     */
    monitorUri?: pulumi.Input<string>;
    /**
     * The name of the frontend. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The tcp log of the frontend.
     */
    tcplog?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Frontend resource.
 */
export interface FrontendArgs {
    /**
     * The accept invalid http request of the frontend.
     */
    acceptInvalidHttpRequest?: pulumi.Input<boolean>;
    /**
     * The name of the backend.
     */
    backend: pulumi.Input<string>;
    /**
     * The backlog of the frontend.
     */
    backlog?: pulumi.Input<number>;
    /**
     * The compression of the frontend.
     */
    compressions?: pulumi.Input<pulumi.Input<inputs.FrontendCompression>[]>;
    /**
     * The error log format of the frontend.
     */
    errorLogFormat?: pulumi.Input<string>;
    /**
     * The forwardfor of the frontend.
     */
    forwardfors?: pulumi.Input<pulumi.Input<inputs.FrontendForwardfor>[]>;
    frontendId?: pulumi.Input<string>;
    /**
     * The http connection mode of the frontend. It can be one of the following values: httpclose, http-server-close,
     * http-keep-alive
     */
    httpConnectionMode?: pulumi.Input<string>;
    /**
     * The http keep alive timeout of the frontend.
     */
    httpKeepAliveTimeout?: pulumi.Input<number>;
    /**
     * The http request timeout of the frontend.
     */
    httpRequestTimeout?: pulumi.Input<number>;
    /**
     * The http use proxy header of the frontend.
     */
    httpUseProxyHeader?: pulumi.Input<boolean>;
    /**
     * The http log of the frontend.
     */
    httplog?: pulumi.Input<boolean>;
    /**
     * The https log of the frontend.
     */
    httpslog?: pulumi.Input<boolean>;
    /**
     * The log format of the frontend.
     */
    logFormat?: pulumi.Input<string>;
    /**
     * The log format sd of the frontend.
     */
    logFormatSd?: pulumi.Input<string>;
    /**
     * The max connection of the frontend.
     */
    maxconn?: pulumi.Input<number>;
    /**
     * The mode of the frontend. It can be one of the following values: http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The monitor uri of the frontend.
     */
    monitorUri?: pulumi.Input<string>;
    /**
     * The name of the frontend. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The tcp log of the frontend.
     */
    tcplog?: pulumi.Input<boolean>;
}
