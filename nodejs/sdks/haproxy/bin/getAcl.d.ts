import * as pulumi from "@pulumi/pulumi";
export declare function getAcl(args: GetAclArgs, opts?: pulumi.InvokeOptions): Promise<GetAclResult>;
/**
 * A collection of arguments for invoking getAcl.
 */
export interface GetAclArgs {
    id?: string;
    index?: number;
    name: string;
    parentName: string;
    parentType: string;
}
/**
 * A collection of values returned by getAcl.
 */
export interface GetAclResult {
    readonly id: string;
    readonly index?: number;
    readonly name: string;
    readonly parentName: string;
    readonly parentType: string;
}
export declare function getAclOutput(args: GetAclOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAclResult>;
/**
 * A collection of arguments for invoking getAcl.
 */
export interface GetAclOutputArgs {
    id?: pulumi.Input<string>;
    index?: pulumi.Input<number>;
    name: pulumi.Input<string>;
    parentName: pulumi.Input<string>;
    parentType: pulumi.Input<string>;
}
