import * as pulumi from "@pulumi/pulumi";
export interface BackendBalance {
    /**
     * The algorithm of the balance.
     */
    algorithm?: pulumi.Input<string>;
}
export interface BackendForwardfor {
    /**
     * The enabled of the forwardfor.
     */
    enabled?: pulumi.Input<boolean>;
}
export interface BackendHttpchkParam {
    /**
     * The method of the httpchk_params.
     */
    method?: pulumi.Input<string>;
    /**
     * The uri of the httpchk_params.
     */
    uri?: pulumi.Input<string>;
    /**
     * The version of the httpchk_params.
     */
    version?: pulumi.Input<string>;
}
export interface FrontendCompression {
    /**
     * The algorithms of the compression.
     */
    algorithms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The offload of the compression.
     */
    offload?: pulumi.Input<boolean>;
    /**
     * The types of the compression.
     */
    types?: pulumi.Input<pulumi.Input<string>[]>;
}
export interface FrontendForwardfor {
    /**
     * The enabled of the forwardfor.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The except of the forwardfor.
     */
    except?: pulumi.Input<string>;
    /**
     * The header of the forwardfor.
     */
    header?: pulumi.Input<string>;
    /**
     * The ifnone of the forwardfor.
     */
    ifnone?: pulumi.Input<boolean>;
}
