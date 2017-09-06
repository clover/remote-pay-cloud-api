
module.exports.custom = custom;
/**
* @namespace custom
*/
function custom() {}


custom.CustomActivity = require("./CustomActivity.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = custom;
}
    