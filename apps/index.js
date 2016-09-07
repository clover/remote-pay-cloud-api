module.exports.apps = apps;
/**
 * @namespace base
 */
function apps() {
}

apps.AppTracking = require("./AppTracking");
//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = apps;
}