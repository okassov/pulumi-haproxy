import * as pulumi from "@pulumi/pulumi";
export declare function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult>;
/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerArgs {
    id?: string;
    name: string;
    parentName: string;
    parentType: string;
}
/**
 * A collection of values returned by getServer.
 */
export interface GetServerResult {
    readonly id: string;
    readonly name: string;
    readonly parentName: string;
    readonly parentType: string;
}
export declare function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerResult>;
/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    parentName: pulumi.Input<string>;
    parentType: pulumi.Input<string>;
}
