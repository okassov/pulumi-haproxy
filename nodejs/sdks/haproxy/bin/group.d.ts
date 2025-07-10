import * as pulumi from "@pulumi/pulumi";
export declare class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group;
    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Group;
    readonly groupId: pulumi.Output<string>;
    /**
     * The Groupname of the Group
     */
    readonly name: pulumi.Output<string>;
    /**
     * The userlist of the User
     */
    readonly userlist: pulumi.Output<string>;
    /**
     * The users of the Group
     */
    readonly users: pulumi.Output<string | undefined>;
    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    groupId?: pulumi.Input<string>;
    /**
     * The Groupname of the Group
     */
    name?: pulumi.Input<string>;
    /**
     * The userlist of the User
     */
    userlist?: pulumi.Input<string>;
    /**
     * The users of the Group
     */
    users?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    groupId?: pulumi.Input<string>;
    /**
     * The Groupname of the Group
     */
    name?: pulumi.Input<string>;
    /**
     * The userlist of the User
     */
    userlist: pulumi.Input<string>;
    /**
     * The users of the Group
     */
    users?: pulumi.Input<string>;
}
