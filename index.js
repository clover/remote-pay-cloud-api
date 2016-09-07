module.exports.sdk = sdk;
/**
 * @namespace base
 */
function sdk() {}

sdk.apps = require("./apps");
sdk.base = require("./base");
sdk.customers = require("./customers");
sdk.device = require("./device");
sdk.employees = require("./employees");
sdk.hours = require("./hours");
sdk.inventory = require("./inventory");
sdk.order = require("./order");
sdk.payments = require("./payments");
sdk.printer = require("./printer");
sdk.remotemessage = require("./remotemessage");
sdk.remotepay = require("./remotepay");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = sdk;
}