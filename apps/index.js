
module.exports.apps = apps;
/**
* @namespace apps
*/
function apps() {}


apps.AppTracking = require("./AppTracking.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = apps;
}
    