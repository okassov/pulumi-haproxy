import * as pulumi from "@pulumi/pulumi";
export declare function getFrontend(args: GetFrontendArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontendResult>;
/**
 * A collection of arguments for invoking getFrontend.
 */
export interface GetFrontendArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getFrontend.
 */
export interface GetFrontendResult {
    readonly id: string;
    readonly name: string;
}
export declare function getFrontendOutput(args: GetFrontendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFrontendResult>;
/**
 * A collection of arguments for invoking getFrontend.
 */
export interface GetFrontendOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
