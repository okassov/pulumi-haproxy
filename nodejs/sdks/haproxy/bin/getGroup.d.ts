import * as pulumi from "@pulumi/pulumi";
export declare function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupArgs {
    id?: string;
    name: string;
    userlist: string;
}
/**
 * A collection of values returned by getGroup.
 */
export interface GetGroupResult {
    readonly id: string;
    readonly name: string;
    readonly userlist: string;
}
export declare function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    userlist: pulumi.Input<string>;
}
