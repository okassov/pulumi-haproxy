import * as pulumi from "@pulumi/pulumi";
export declare function getDefaults(args: GetDefaultsArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultsResult>;
/**
 * A collection of arguments for invoking getDefaults.
 */
export interface GetDefaultsArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getDefaults.
 */
export interface GetDefaultsResult {
    readonly id: string;
    readonly name: string;
}
export declare function getDefaultsOutput(args: GetDefaultsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDefaultsResult>;
/**
 * A collection of arguments for invoking getDefaults.
 */
export interface GetDefaultsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
