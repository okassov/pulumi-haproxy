import * as pulumi from "@pulumi/pulumi";
export declare function getHealth(args: GetHealthArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthResult>;
/**
 * A collection of arguments for invoking getHealth.
 */
export interface GetHealthArgs {
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getHealth.
 */
export interface GetHealthResult {
    readonly health: boolean;
    readonly id: string;
    readonly name: string;
}
export declare function getHealthOutput(args: GetHealthOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHealthResult>;
/**
 * A collection of arguments for invoking getHealth.
 */
export interface GetHealthOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
