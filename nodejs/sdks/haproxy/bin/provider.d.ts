import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the haproxy package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * Haproxy Password
     */
    readonly password: pulumi.Output<string>;
    /**
     * Haproxy Host and Port
     */
    readonly url: pulumi.Output<string>;
    /**
     * Haproxy User
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Disable SSL certificate verification (default: false)
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * Haproxy Password
     */
    password: pulumi.Input<string>;
    /**
     * Haproxy Host and Port
     */
    url: pulumi.Input<string>;
    /**
     * Haproxy User
     */
    username: pulumi.Input<string>;
}
