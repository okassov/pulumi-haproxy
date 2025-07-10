import * as pulumi from "@pulumi/pulumi";
export declare function getUserlist(args: GetUserlistArgs, opts?: pulumi.InvokeOptions): Promise<GetUserlistResult>;
/**
 * A collection of arguments for invoking getUserlist.
 */
export interface GetUserlistArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getUserlist.
 */
export interface GetUserlistResult {
    readonly id: string;
    readonly name: string;
}
export declare function getUserlistOutput(args: GetUserlistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserlistResult>;
/**
 * A collection of arguments for invoking getUserlist.
 */
export interface GetUserlistOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
