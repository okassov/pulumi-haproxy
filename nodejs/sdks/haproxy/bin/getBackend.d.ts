import * as pulumi from "@pulumi/pulumi";
export declare function getBackend(args: GetBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetBackendResult>;
/**
 * A collection of arguments for invoking getBackend.
 */
export interface GetBackendArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getBackend.
 */
export interface GetBackendResult {
    readonly id: string;
    readonly name: string;
}
export declare function getBackendOutput(args: GetBackendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBackendResult>;
/**
 * A collection of arguments for invoking getBackend.
 */
export interface GetBackendOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
