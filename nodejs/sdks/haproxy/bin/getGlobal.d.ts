import * as pulumi from "@pulumi/pulumi";
export declare function getGlobal(args: GetGlobalArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalResult>;
/**
 * A collection of arguments for invoking getGlobal.
 */
export interface GetGlobalArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getGlobal.
 */
export interface GetGlobalResult {
    readonly id: string;
    readonly name: string;
}
export declare function getGlobalOutput(args: GetGlobalOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGlobalResult>;
/**
 * A collection of arguments for invoking getGlobal.
 */
export interface GetGlobalOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
