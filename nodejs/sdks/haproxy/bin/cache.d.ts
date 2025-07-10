import * as pulumi from "@pulumi/pulumi";
export declare class Cache extends pulumi.CustomResource {
    /**
     * Get an existing Cache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CacheState, opts?: pulumi.CustomResourceOptions): Cache;
    /**
     * Returns true if the given object is an instance of Cache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cache;
    readonly cacheId: pulumi.Output<string>;
    /**
     * The max age of the Cache
     */
    readonly maxAge: pulumi.Output<number | undefined>;
    /**
     * The max object size of the Cache
     */
    readonly maxObjectSize: pulumi.Output<number | undefined>;
    /**
     * the max secondary entries of the Cache
     */
    readonly maxSecondaryEntries: pulumi.Output<number | undefined>;
    /**
     * The name of the Cache. It must be unique and cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The process vary of the Cache
     */
    readonly processVary: pulumi.Output<boolean | undefined>;
    /**
     * The total max size of the Cache
     */
    readonly totalMaxSize: pulumi.Output<number | undefined>;
    /**
     * Create a Cache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CacheArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cache resources.
 */
export interface CacheState {
    cacheId?: pulumi.Input<string>;
    /**
     * The max age of the Cache
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The max object size of the Cache
     */
    maxObjectSize?: pulumi.Input<number>;
    /**
     * the max secondary entries of the Cache
     */
    maxSecondaryEntries?: pulumi.Input<number>;
    /**
     * The name of the Cache. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The process vary of the Cache
     */
    processVary?: pulumi.Input<boolean>;
    /**
     * The total max size of the Cache
     */
    totalMaxSize?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Cache resource.
 */
export interface CacheArgs {
    cacheId?: pulumi.Input<string>;
    /**
     * The max age of the Cache
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The max object size of the Cache
     */
    maxObjectSize?: pulumi.Input<number>;
    /**
     * the max secondary entries of the Cache
     */
    maxSecondaryEntries?: pulumi.Input<number>;
    /**
     * The name of the Cache. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The process vary of the Cache
     */
    processVary?: pulumi.Input<boolean>;
    /**
     * The total max size of the Cache
     */
    totalMaxSize?: pulumi.Input<number>;
}
