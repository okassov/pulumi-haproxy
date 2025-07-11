"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameserverOutput = exports.getNameserver = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getNameserver(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("haproxy:index/getNameserver:getNameserver", {
        "id": args.id,
        "name": args.name,
        "resolver": args.resolver,
    }, opts, utilities.getPackage());
}
exports.getNameserver = getNameserver;
function getNameserverOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("haproxy:index/getNameserver:getNameserver", {
        "id": args.id,
        "name": args.name,
        "resolver": args.resolver,
    }, opts, utilities.getPackage());
}
exports.getNameserverOutput = getNameserverOutput;
//# sourceMappingURL=getNameserver.js.map