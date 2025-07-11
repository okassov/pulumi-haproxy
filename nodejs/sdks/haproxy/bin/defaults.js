"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Defaults extends pulumi.CustomResource {
    /**
     * Get an existing Defaults resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Defaults(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Defaults.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Defaults.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["backlog"] = state ? state.backlog : undefined;
            resourceInputs["checkTimeout"] = state ? state.checkTimeout : undefined;
            resourceInputs["clientTimeout"] = state ? state.clientTimeout : undefined;
            resourceInputs["connectTimeout"] = state ? state.connectTimeout : undefined;
            resourceInputs["defaultsId"] = state ? state.defaultsId : undefined;
            resourceInputs["httpKeepAliveTimeout"] = state ? state.httpKeepAliveTimeout : undefined;
            resourceInputs["httpRequestTimeout"] = state ? state.httpRequestTimeout : undefined;
            resourceInputs["httplog"] = state ? state.httplog : undefined;
            resourceInputs["httpslog"] = state ? state.httpslog : undefined;
            resourceInputs["maxconn"] = state ? state.maxconn : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queueTimeout"] = state ? state.queueTimeout : undefined;
            resourceInputs["retries"] = state ? state.retries : undefined;
            resourceInputs["serverFinTimeout"] = state ? state.serverFinTimeout : undefined;
            resourceInputs["serverTimeout"] = state ? state.serverTimeout : undefined;
            resourceInputs["tcplog"] = state ? state.tcplog : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["backlog"] = args ? args.backlog : undefined;
            resourceInputs["checkTimeout"] = args ? args.checkTimeout : undefined;
            resourceInputs["clientTimeout"] = args ? args.clientTimeout : undefined;
            resourceInputs["connectTimeout"] = args ? args.connectTimeout : undefined;
            resourceInputs["defaultsId"] = args ? args.defaultsId : undefined;
            resourceInputs["httpKeepAliveTimeout"] = args ? args.httpKeepAliveTimeout : undefined;
            resourceInputs["httpRequestTimeout"] = args ? args.httpRequestTimeout : undefined;
            resourceInputs["httplog"] = args ? args.httplog : undefined;
            resourceInputs["httpslog"] = args ? args.httpslog : undefined;
            resourceInputs["maxconn"] = args ? args.maxconn : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queueTimeout"] = args ? args.queueTimeout : undefined;
            resourceInputs["retries"] = args ? args.retries : undefined;
            resourceInputs["serverFinTimeout"] = args ? args.serverFinTimeout : undefined;
            resourceInputs["serverTimeout"] = args ? args.serverTimeout : undefined;
            resourceInputs["tcplog"] = args ? args.tcplog : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Defaults.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Defaults = Defaults;
/** @internal */
Defaults.__pulumiType = 'haproxy:index/defaults:Defaults';
//# sourceMappingURL=defaults.js.map