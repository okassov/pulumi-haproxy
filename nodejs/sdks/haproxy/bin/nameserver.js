"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nameserver = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Nameserver extends pulumi.CustomResource {
    /**
     * Get an existing Nameserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Nameserver(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Nameserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nameserver.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameserverId"] = state ? state.nameserverId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["resolver"] = state ? state.resolver : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.resolver === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resolver'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameserverId"] = args ? args.nameserverId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resolver"] = args ? args.resolver : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Nameserver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Nameserver = Nameserver;
/** @internal */
Nameserver.__pulumiType = 'haproxy:index/nameserver:Nameserver';
//# sourceMappingURL=nameserver.js.map