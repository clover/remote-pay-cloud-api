
module.exports.onlineorder = onlineorder;
/**
* @namespace onlineorder
*/
function onlineorder() {}


onlineorder.OnlineOrder = require("./OnlineOrder");
onlineorder.OnlineOrderCart = require("./OnlineOrderCart");
onlineorder.OnlineOrderCustomer = require("./OnlineOrderCustomer");
onlineorder.OnlineOrderProvider = require("./OnlineOrderProvider");
onlineorder.OrderState = require("./OrderState");
onlineorder.ProviderId = require("./ProviderId");
onlineorder.Reason = require("./Reason.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = onlineorder;
}
    