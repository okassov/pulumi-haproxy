import * as pulumi from "@pulumi/pulumi";
export declare function getResolvers(args: GetResolversArgs, opts?: pulumi.InvokeOptions): Promise<GetResolversResult>;
/**
 * A collection of arguments for invoking getResolvers.
 */
export interface GetResolversArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getResolvers.
 */
export interface GetResolversResult {
    readonly id: string;
    readonly name: string;
}
export declare function getResolversOutput(args: GetResolversOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetResolversResult>;
/**
 * A collection of arguments for invoking getResolvers.
 */
export interface GetResolversOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
