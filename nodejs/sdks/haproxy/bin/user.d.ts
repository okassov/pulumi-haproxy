import * as pulumi from "@pulumi/pulumi";
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * The groups of the User
     */
    readonly groups: pulumi.Output<string | undefined>;
    /**
     * The password of the User
     */
    readonly password: pulumi.Output<string>;
    /**
     * The secure password of the User
     */
    readonly securePassword: pulumi.Output<boolean | undefined>;
    readonly userId: pulumi.Output<string>;
    /**
     * The userlist of the User
     */
    readonly userlist: pulumi.Output<string>;
    /**
     * The username of the User
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The groups of the User
     */
    groups?: pulumi.Input<string>;
    /**
     * The password of the User
     */
    password?: pulumi.Input<string>;
    /**
     * The secure password of the User
     */
    securePassword?: pulumi.Input<boolean>;
    userId?: pulumi.Input<string>;
    /**
     * The userlist of the User
     */
    userlist?: pulumi.Input<string>;
    /**
     * The username of the User
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The groups of the User
     */
    groups?: pulumi.Input<string>;
    /**
     * The password of the User
     */
    password: pulumi.Input<string>;
    /**
     * The secure password of the User
     */
    securePassword?: pulumi.Input<boolean>;
    userId?: pulumi.Input<string>;
    /**
     * The userlist of the User
     */
    userlist: pulumi.Input<string>;
    /**
     * The username of the User
     */
    username: pulumi.Input<string>;
}
