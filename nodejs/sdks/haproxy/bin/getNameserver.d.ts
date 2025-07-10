import * as pulumi from "@pulumi/pulumi";
export declare function getNameserver(args: GetNameserverArgs, opts?: pulumi.InvokeOptions): Promise<GetNameserverResult>;
/**
 * A collection of arguments for invoking getNameserver.
 */
export interface GetNameserverArgs {
    id?: string;
    name: string;
    resolver: string;
}
/**
 * A collection of values returned by getNameserver.
 */
export interface GetNameserverResult {
    readonly id: string;
    readonly name: string;
    readonly resolver: string;
}
export declare function getNameserverOutput(args: GetNameserverOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNameserverResult>;
/**
 * A collection of arguments for invoking getNameserver.
 */
export interface GetNameserverOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resolver: pulumi.Input<string>;
}
