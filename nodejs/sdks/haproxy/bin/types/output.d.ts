export interface BackendBalance {
    /**
     * The algorithm of the balance.
     */
    algorithm?: string;
}
export interface BackendForwardfor {
    /**
     * The enabled of the forwardfor.
     */
    enabled?: boolean;
}
export interface BackendHttpchkParam {
    /**
     * The method of the httpchk_params.
     */
    method?: string;
    /**
     * The uri of the httpchk_params.
     */
    uri?: string;
    /**
     * The version of the httpchk_params.
     */
    version?: string;
}
export interface FrontendCompression {
    /**
     * The algorithms of the compression.
     */
    algorithms?: string[];
    /**
     * The offload of the compression.
     */
    offload?: boolean;
    /**
     * The types of the compression.
     */
    types?: string[];
}
export interface FrontendForwardfor {
    /**
     * The enabled of the forwardfor.
     */
    enabled?: boolean;
    /**
     * The except of the forwardfor.
     */
    except?: string;
    /**
     * The header of the forwardfor.
     */
    header?: string;
    /**
     * The ifnone of the forwardfor.
     */
    ifnone?: boolean;
}
