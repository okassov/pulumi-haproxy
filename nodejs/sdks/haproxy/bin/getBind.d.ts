import * as pulumi from "@pulumi/pulumi";
export declare function getBind(args: GetBindArgs, opts?: pulumi.InvokeOptions): Promise<GetBindResult>;
/**
 * A collection of arguments for invoking getBind.
 */
export interface GetBindArgs {
    id?: string;
    name: string;
    parentName: string;
    parentType: string;
}
/**
 * A collection of values returned by getBind.
 */
export interface GetBindResult {
    readonly id: string;
    readonly name: string;
    readonly parentName: string;
    readonly parentType: string;
}
export declare function getBindOutput(args: GetBindOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBindResult>;
/**
 * A collection of arguments for invoking getBind.
 */
export interface GetBindOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    parentName: pulumi.Input<string>;
    parentType: pulumi.Input<string>;
}
