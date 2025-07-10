import * as pulumi from "@pulumi/pulumi";
export declare class Nameserver extends pulumi.CustomResource {
    /**
     * Get an existing Nameserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NameserverState, opts?: pulumi.CustomResourceOptions): Nameserver;
    /**
     * Returns true if the given object is an instance of Nameserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Nameserver;
    /**
     * The address of the Nameserver
     */
    readonly address: pulumi.Output<string>;
    /**
     * The name of the Nameserver. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    readonly nameserverId: pulumi.Output<string>;
    /**
     * The port of the Nameserver
     */
    readonly port: pulumi.Output<number>;
    /**
     * The resolver of the Nameserver
     */
    readonly resolver: pulumi.Output<string>;
    /**
     * Create a Nameserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NameserverArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Nameserver resources.
 */
export interface NameserverState {
    /**
     * The address of the Nameserver
     */
    address?: pulumi.Input<string>;
    /**
     * The name of the Nameserver. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    nameserverId?: pulumi.Input<string>;
    /**
     * The port of the Nameserver
     */
    port?: pulumi.Input<number>;
    /**
     * The resolver of the Nameserver
     */
    resolver?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Nameserver resource.
 */
export interface NameserverArgs {
    /**
     * The address of the Nameserver
     */
    address: pulumi.Input<string>;
    /**
     * The name of the Nameserver. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    nameserverId?: pulumi.Input<string>;
    /**
     * The port of the Nameserver
     */
    port: pulumi.Input<number>;
    /**
     * The resolver of the Nameserver
     */
    resolver: pulumi.Input<string>;
}
