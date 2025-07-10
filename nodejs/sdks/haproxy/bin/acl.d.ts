import * as pulumi from "@pulumi/pulumi";
export declare class Acl extends pulumi.CustomResource {
    /**
     * Get an existing Acl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AclState, opts?: pulumi.CustomResourceOptions): Acl;
    /**
     * Returns true if the given object is an instance of Acl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Acl;
    readonly aclId: pulumi.Output<string>;
    /**
     * The criterion of the acl
     */
    readonly criterion: pulumi.Output<string>;
    /**
     * The index of the acl in the parent object starting at 0
     */
    readonly index: pulumi.Output<number>;
    /**
     * The name of the acl. It must be unique and cannot be changed.
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
     * The value of the acl.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a Acl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AclArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Acl resources.
 */
export interface AclState {
    aclId?: pulumi.Input<string>;
    /**
     * The criterion of the acl
     */
    criterion?: pulumi.Input<string>;
    /**
     * The index of the acl in the parent object starting at 0
     */
    index?: pulumi.Input<number>;
    /**
     * The name of the acl. It must be unique and cannot be changed.
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
     * The value of the acl.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Acl resource.
 */
export interface AclArgs {
    aclId?: pulumi.Input<string>;
    /**
     * The criterion of the acl
     */
    criterion: pulumi.Input<string>;
    /**
     * The index of the acl in the parent object starting at 0
     */
    index: pulumi.Input<number>;
    /**
     * The name of the acl. It must be unique and cannot be changed.
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
     * The value of the acl.
     */
    value: pulumi.Input<string>;
}
