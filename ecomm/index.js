
module.exports.ecomm = ecomm;
/**
* @namespace ecomm
*/
function ecomm() {}


ecomm.EcommerceIndicator = require("./EcommerceIndicator.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = ecomm;
}
    