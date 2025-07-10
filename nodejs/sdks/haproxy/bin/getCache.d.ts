import * as pulumi from "@pulumi/pulumi";
export declare function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult>;
/**
 * A collection of arguments for invoking getCache.
 */
export interface GetCacheArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getCache.
 */
export interface GetCacheResult {
    readonly id: string;
    readonly name: string;
}
export declare function getCacheOutput(args: GetCacheOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCacheResult>;
/**
 * A collection of arguments for invoking getCache.
 */
export interface GetCacheOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
