import * as pulumi from "@pulumi/pulumi";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    id?: string;
    userlist: string;
    username: string;
}
/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly id: string;
    readonly userlist: string;
    readonly username: string;
}
export declare function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    id?: pulumi.Input<string>;
    userlist: pulumi.Input<string>;
    username: pulumi.Input<string>;
}
