
module.exports.merchant = merchant;
/**
* @namespace merchant
*/
function merchant() {}


merchant.TipSuggestion = require("./TipSuggestion.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = merchant;
}
    