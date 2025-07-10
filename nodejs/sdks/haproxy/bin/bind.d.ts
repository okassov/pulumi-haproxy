import * as pulumi from "@pulumi/pulumi";
export declare class Bind extends pulumi.CustomResource {
    /**
     * Get an existing Bind resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BindState, opts?: pulumi.CustomResourceOptions): Bind;
    /**
     * Returns true if the given object is an instance of Bind.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Bind;
    /**
     * The address of the bind
     */
    readonly address: pulumi.Output<string>;
    readonly bindId: pulumi.Output<string>;
    /**
     * The group of the bind
     */
    readonly group: pulumi.Output<string | undefined>;
    /**
     * The max connections of the bind
     */
    readonly maxconn: pulumi.Output<number | undefined>;
    /**
     * http, tcp
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
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
     * The port of the bind
     */
    readonly port: pulumi.Output<number>;
    /**
     * The user of the bind
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a Bind resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BindArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Bind resources.
 */
export interface BindState {
    /**
     * The address of the bind
     */
    address?: pulumi.Input<string>;
    bindId?: pulumi.Input<string>;
    /**
     * The group of the bind
     */
    group?: pulumi.Input<string>;
    /**
     * The max connections of the bind
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
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
     * The port of the bind
     */
    port?: pulumi.Input<number>;
    /**
     * The user of the bind
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Bind resource.
 */
export interface BindArgs {
    /**
     * The address of the bind
     */
    address: pulumi.Input<string>;
    bindId?: pulumi.Input<string>;
    /**
     * The group of the bind
     */
    group?: pulumi.Input<string>;
    /**
     * The max connections of the bind
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
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
     * The port of the bind
     */
    port: pulumi.Input<number>;
    /**
     * The user of the bind
     */
    user?: pulumi.Input<string>;
}
