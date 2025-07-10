import * as pulumi from "@pulumi/pulumi";
export declare class Global extends pulumi.CustomResource {
    /**
     * Get an existing Global resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlobalState, opts?: pulumi.CustomResourceOptions): Global;
    /**
     * Returns true if the given object is an instance of Global.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Global;
    /**
     * CA base directory
     */
    readonly caBase: pulumi.Output<string | undefined>;
    /**
     * Chroot directory
     */
    readonly chroot: pulumi.Output<string | undefined>;
    /**
     * CPU set
     */
    readonly cpuSet: pulumi.Output<string | undefined>;
    /**
     * Certificate base directory
     */
    readonly crtBase: pulumi.Output<string | undefined>;
    /**
     * Run in daemon mode
     */
    readonly daemon: pulumi.Output<boolean | undefined>;
    readonly globalId: pulumi.Output<string>;
    /**
     * Group name
     */
    readonly group: pulumi.Output<string | undefined>;
    /**
     * Master worker mode
     */
    readonly masterWorker: pulumi.Output<boolean | undefined>;
    /**
     * Maximum CPU usage in percent
     */
    readonly maxcompcpuusage: pulumi.Output<number | undefined>;
    /**
     * Maximum number of connections
     */
    readonly maxconn: pulumi.Output<number | undefined>;
    /**
     * Maximum number of pipes
     */
    readonly maxpipes: pulumi.Output<number | undefined>;
    /**
     * Maximum number of SSL connections
     */
    readonly maxsslconn: pulumi.Output<number | undefined>;
    /**
     * Number of processes
     */
    readonly nbproc: pulumi.Output<number | undefined>;
    /**
     * Number of threads
     */
    readonly nbthread: pulumi.Output<number | undefined>;
    /**
     * PID file
     */
    readonly pidfile: pulumi.Output<string | undefined>;
    /**
     * Process name
     */
    readonly process: pulumi.Output<string | undefined>;
    /**
     * SSL default bind ciphers
     */
    readonly sslDefaultBindCiphers: pulumi.Output<string | undefined>;
    /**
     * SSL default bind options
     */
    readonly sslDefaultBindOptions: pulumi.Output<string | undefined>;
    /**
     * Stats maximum number of connections
     */
    readonly statsMaxconn: pulumi.Output<number | undefined>;
    /**
     * Stats timeout
     */
    readonly statsTimeout: pulumi.Output<number | undefined>;
    /**
     * Ulimit number
     */
    readonly ulimitN: pulumi.Output<number | undefined>;
    /**
     * User name
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a Global resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GlobalArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Global resources.
 */
export interface GlobalState {
    /**
     * CA base directory
     */
    caBase?: pulumi.Input<string>;
    /**
     * Chroot directory
     */
    chroot?: pulumi.Input<string>;
    /**
     * CPU set
     */
    cpuSet?: pulumi.Input<string>;
    /**
     * Certificate base directory
     */
    crtBase?: pulumi.Input<string>;
    /**
     * Run in daemon mode
     */
    daemon?: pulumi.Input<boolean>;
    globalId?: pulumi.Input<string>;
    /**
     * Group name
     */
    group?: pulumi.Input<string>;
    /**
     * Master worker mode
     */
    masterWorker?: pulumi.Input<boolean>;
    /**
     * Maximum CPU usage in percent
     */
    maxcompcpuusage?: pulumi.Input<number>;
    /**
     * Maximum number of connections
     */
    maxconn?: pulumi.Input<number>;
    /**
     * Maximum number of pipes
     */
    maxpipes?: pulumi.Input<number>;
    /**
     * Maximum number of SSL connections
     */
    maxsslconn?: pulumi.Input<number>;
    /**
     * Number of processes
     */
    nbproc?: pulumi.Input<number>;
    /**
     * Number of threads
     */
    nbthread?: pulumi.Input<number>;
    /**
     * PID file
     */
    pidfile?: pulumi.Input<string>;
    /**
     * Process name
     */
    process?: pulumi.Input<string>;
    /**
     * SSL default bind ciphers
     */
    sslDefaultBindCiphers?: pulumi.Input<string>;
    /**
     * SSL default bind options
     */
    sslDefaultBindOptions?: pulumi.Input<string>;
    /**
     * Stats maximum number of connections
     */
    statsMaxconn?: pulumi.Input<number>;
    /**
     * Stats timeout
     */
    statsTimeout?: pulumi.Input<number>;
    /**
     * Ulimit number
     */
    ulimitN?: pulumi.Input<number>;
    /**
     * User name
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Global resource.
 */
export interface GlobalArgs {
    /**
     * CA base directory
     */
    caBase?: pulumi.Input<string>;
    /**
     * Chroot directory
     */
    chroot?: pulumi.Input<string>;
    /**
     * CPU set
     */
    cpuSet?: pulumi.Input<string>;
    /**
     * Certificate base directory
     */
    crtBase?: pulumi.Input<string>;
    /**
     * Run in daemon mode
     */
    daemon?: pulumi.Input<boolean>;
    globalId?: pulumi.Input<string>;
    /**
     * Group name
     */
    group?: pulumi.Input<string>;
    /**
     * Master worker mode
     */
    masterWorker?: pulumi.Input<boolean>;
    /**
     * Maximum CPU usage in percent
     */
    maxcompcpuusage?: pulumi.Input<number>;
    /**
     * Maximum number of connections
     */
    maxconn?: pulumi.Input<number>;
    /**
     * Maximum number of pipes
     */
    maxpipes?: pulumi.Input<number>;
    /**
     * Maximum number of SSL connections
     */
    maxsslconn?: pulumi.Input<number>;
    /**
     * Number of processes
     */
    nbproc?: pulumi.Input<number>;
    /**
     * Number of threads
     */
    nbthread?: pulumi.Input<number>;
    /**
     * PID file
     */
    pidfile?: pulumi.Input<string>;
    /**
     * Process name
     */
    process?: pulumi.Input<string>;
    /**
     * SSL default bind ciphers
     */
    sslDefaultBindCiphers?: pulumi.Input<string>;
    /**
     * SSL default bind options
     */
    sslDefaultBindOptions?: pulumi.Input<string>;
    /**
     * Stats maximum number of connections
     */
    statsMaxconn?: pulumi.Input<number>;
    /**
     * Stats timeout
     */
    statsTimeout?: pulumi.Input<number>;
    /**
     * Ulimit number
     */
    ulimitN?: pulumi.Input<number>;
    /**
     * User name
     */
    user?: pulumi.Input<string>;
}
