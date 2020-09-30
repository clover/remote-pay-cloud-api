
module.exports.loyalty = loyalty;
/**
* @namespace loyalty
*/
function loyalty() {}


loyalty.CustomerProvidedDataResponse = require("./CustomerProvidedDataResponse");
loyalty.CustomerProvidedDataResponseType = require("./CustomerProvidedDataResponseType");
loyalty.LoyaltyDataConfig = require("./LoyaltyDataConfig.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = loyalty;
}
    