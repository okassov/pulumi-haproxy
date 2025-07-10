import * as pulumi from "@pulumi/pulumi";
export declare class Resolvers extends pulumi.CustomResource {
    /**
     * Get an existing Resolvers resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResolversState, opts?: pulumi.CustomResourceOptions): Resolvers;
    /**
     * Returns true if the given object is an instance of Resolvers.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Resolvers;
    /**
     * The Accepted Payload Size of the Resolvers.
     */
    readonly acceptedPayloadSize: pulumi.Output<number | undefined>;
    /**
     * The hold NX of the Resolvers.
     */
    readonly holdNx: pulumi.Output<number | undefined>;
    /**
     * The hold other of the Resolvers.
     */
    readonly holdOther: pulumi.Output<number | undefined>;
    /**
     * The hold refused of the Resolvers.
     */
    readonly holdRefused: pulumi.Output<number | undefined>;
    /**
     * The hold timeout of the Resolvers.
     */
    readonly holdTimeout: pulumi.Output<number | undefined>;
    /**
     * The hold valid of the Resolvers.
     */
    readonly holdValid: pulumi.Output<number | undefined>;
    /**
     * The name of the Resolvers. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The pasre-resolv-conf of the Resolvers. it could be true or false
     */
    readonly parseResolvConf: pulumi.Output<boolean | undefined>;
    /**
     * The retries of the Resolvers.
     */
    readonly resolveRetries: pulumi.Output<number | undefined>;
    readonly resolversId: pulumi.Output<string>;
    /**
     * The timeout resolve of the Resolvers.
     */
    readonly timeoutResolve: pulumi.Output<number | undefined>;
    /**
     * The timeout retry of the Resolvers.
     */
    readonly timeoutRetry: pulumi.Output<number | undefined>;
    /**
     * Create a Resolvers resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResolversArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Resolvers resources.
 */
export interface ResolversState {
    /**
     * The Accepted Payload Size of the Resolvers.
     */
    acceptedPayloadSize?: pulumi.Input<number>;
    /**
     * The hold NX of the Resolvers.
     */
    holdNx?: pulumi.Input<number>;
    /**
     * The hold other of the Resolvers.
     */
    holdOther?: pulumi.Input<number>;
    /**
     * The hold refused of the Resolvers.
     */
    holdRefused?: pulumi.Input<number>;
    /**
     * The hold timeout of the Resolvers.
     */
    holdTimeout?: pulumi.Input<number>;
    /**
     * The hold valid of the Resolvers.
     */
    holdValid?: pulumi.Input<number>;
    /**
     * The name of the Resolvers. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The pasre-resolv-conf of the Resolvers. it could be true or false
     */
    parseResolvConf?: pulumi.Input<boolean>;
    /**
     * The retries of the Resolvers.
     */
    resolveRetries?: pulumi.Input<number>;
    resolversId?: pulumi.Input<string>;
    /**
     * The timeout resolve of the Resolvers.
     */
    timeoutResolve?: pulumi.Input<number>;
    /**
     * The timeout retry of the Resolvers.
     */
    timeoutRetry?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Resolvers resource.
 */
export interface ResolversArgs {
    /**
     * The Accepted Payload Size of the Resolvers.
     */
    acceptedPayloadSize?: pulumi.Input<number>;
    /**
     * The hold NX of the Resolvers.
     */
    holdNx?: pulumi.Input<number>;
    /**
     * The hold other of the Resolvers.
     */
    holdOther?: pulumi.Input<number>;
    /**
     * The hold refused of the Resolvers.
     */
    holdRefused?: pulumi.Input<number>;
    /**
     * The hold timeout of the Resolvers.
     */
    holdTimeout?: pulumi.Input<number>;
    /**
     * The hold valid of the Resolvers.
     */
    holdValid?: pulumi.Input<number>;
    /**
     * The name of the Resolvers. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The pasre-resolv-conf of the Resolvers. it could be true or false
     */
    parseResolvConf?: pulumi.Input<boolean>;
    /**
     * The retries of the Resolvers.
     */
    resolveRetries?: pulumi.Input<number>;
    resolversId?: pulumi.Input<string>;
    /**
     * The timeout resolve of the Resolvers.
     */
    timeoutResolve?: pulumi.Input<number>;
    /**
     * The timeout retry of the Resolvers.
     */
    timeoutRetry?: pulumi.Input<number>;
}
