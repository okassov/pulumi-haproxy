// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Bind extends pulumi.CustomResource {
    /**
     * Get an existing Bind resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BindState, opts?: pulumi.CustomResourceOptions): Bind {
        return new Bind(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'haproxy:index/bind:Bind';

    /**
     * Returns true if the given object is an instance of Bind.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bind {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bind.__pulumiType;
    }

    /**
     * The address of the bind
     */
    public readonly address!: pulumi.Output<string>;
    public readonly bindId!: pulumi.Output<string>;
    /**
     * The group of the bind
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * The max connections of the bind
     */
    public readonly maxconn!: pulumi.Output<number | undefined>;
    /**
     * http, tcp
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the parent object
     */
    public readonly parentName!: pulumi.Output<string>;
    /**
     * The type of the parent object
     */
    public readonly parentType!: pulumi.Output<string>;
    /**
     * The port of the bind
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * The user of the bind
     */
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a Bind resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BindArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BindArgs | BindState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BindState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["bindId"] = state ? state.bindId : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["maxconn"] = state ? state.maxconn : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentName"] = state ? state.parentName : undefined;
            resourceInputs["parentType"] = state ? state.parentType : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as BindArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.parentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentName'");
            }
            if ((!args || args.parentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentType'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["bindId"] = args ? args.bindId : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["maxconn"] = args ? args.maxconn : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentName"] = args ? args.parentName : undefined;
            resourceInputs["parentType"] = args ? args.parentType : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bind.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Bind resources.
 */
export interface BindState {
    /**
     * The address of the bind
     */
    address?: pulumi.Input<string>;
    bindId?: pulumi.Input<string>;
    /**
     * The group of the bind
     */
    group?: pulumi.Input<string>;
    /**
     * The max connections of the bind
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the parent object
     */
    parentName?: pulumi.Input<string>;
    /**
     * The type of the parent object
     */
    parentType?: pulumi.Input<string>;
    /**
     * The port of the bind
     */
    port?: pulumi.Input<number>;
    /**
     * The user of the bind
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Bind resource.
 */
export interface BindArgs {
    /**
     * The address of the bind
     */
    address: pulumi.Input<string>;
    bindId?: pulumi.Input<string>;
    /**
     * The group of the bind
     */
    group?: pulumi.Input<string>;
    /**
     * The max connections of the bind
     */
    maxconn?: pulumi.Input<number>;
    /**
     * http, tcp
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the bind. It must be unique and cannot be changed.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the parent object
     */
    parentName: pulumi.Input<string>;
    /**
     * The type of the parent object
     */
    parentType: pulumi.Input<string>;
    /**
     * The port of the bind
     */
    port: pulumi.Input<number>;
    /**
     * The user of the bind
     */
    user?: pulumi.Input<string>;
}
