
module.exports.loyalty = loyalty;
/**
 * @namespace loyalty
 */
function loyalty() {}


loyalty.CustomerProvidedDataResponse = require("./CustomerProvidedDataResponse.js");
loyalty.CustomerProvidedDataResponseType = require("./CustomerProvidedDataResponseType.js");
loyalty.LoyaltyDataConfig = require("./LoyaltyDataConfig.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = loyalty;
}