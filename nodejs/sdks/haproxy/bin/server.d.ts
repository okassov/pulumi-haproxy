import * as pulumi from "@pulumi/pulumi";
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * The address of the server
     */
    readonly address: pulumi.Output<string>;
    /**
     * To enable health check for the server.
     */
    readonly check: pulumi.Output<boolean | undefined>;
    /**
     * The fall value states that a server will be considered as failed after consecutive unsuccessful health checks.
     */
    readonly fall: pulumi.Output<number | undefined>;
    /**
     * The inter value is the time interval in milliseconds between two consecutive health checks.
     */
    readonly inter: pulumi.Output<number | undefined>;
    /**
     * The name of the server. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the parent object
     */
    readonly parentName: pulumi.Output<string>;
    /**
     * The type of the parent object
     */
    readonly parentType: pulumi.Output<string>;
    /**
     * The port of the server
     */
    readonly port: pulumi.Output<number>;
    /**
     * The rise value states that a server will be considered as operational after consecutive successful health checks.
     */
    readonly rise: pulumi.Output<number | undefined>;
    /**
     * To send a Proxy Protocol header to the backend server,
     */
    readonly sendProxy: pulumi.Output<boolean | undefined>;
    readonly serverId: pulumi.Output<string>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * The address of the server
     */
    address?: pulumi.Input<string>;
    /**
     * To enable health check for the server.
     */
    check?: pulumi.Input<boolean>;
    /**
     * The fall value states that a server will be considered as failed after consecutive unsuccessful health checks.
     */
    fall?: pulumi.Input<number>;
    /**
     * The inter value is the time interval in milliseconds between two consecutive health checks.
     */
    inter?: pulumi.Input<number>;
    /**
     * The name of the server. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the parent object
     */
    parentName?: pulumi.Input<string>;
    /**
     * The type of the parent object
     */
    parentType?: pulumi.Input<string>;
    /**
     * The port of the server
     */
    port?: pulumi.Input<number>;
    /**
     * The rise value states that a server will be considered as operational after consecutive successful health checks.
     */
    rise?: pulumi.Input<number>;
    /**
     * To send a Proxy Protocol header to the backend server,
     */
    sendProxy?: pulumi.Input<boolean>;
    serverId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The address of the server
     */
    address: pulumi.Input<string>;
    /**
     * To enable health check for the server.
     */
    check?: pulumi.Input<boolean>;
    /**
     * The fall value states that a server will be considered as failed after consecutive unsuccessful health checks.
     */
    fall?: pulumi.Input<number>;
    /**
     * The inter value is the time interval in milliseconds between two consecutive health checks.
     */
    inter?: pulumi.Input<number>;
    /**
     * The name of the server. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the parent object
     */
    parentName: pulumi.Input<string>;
    /**
     * The type of the parent object
     */
    parentType: pulumi.Input<string>;
    /**
     * The port of the server
     */
    port: pulumi.Input<number>;
    /**
     * The rise value states that a server will be considered as operational after consecutive successful health checks.
     */
    rise?: pulumi.Input<number>;
    /**
     * To send a Proxy Protocol header to the backend server,
     */
    sendProxy?: pulumi.Input<boolean>;
    serverId?: pulumi.Input<string>;
}
