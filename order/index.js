
module.exports.order = order;
/**
* @namespace order
*/
function order() {}


order.CreateLineItemsRequest = require("./CreateLineItemsRequest");
order.CustomerIdMethod = require("./CustomerIdMethod");
order.Discount = require("./Discount");
order.DisplayDiscount = require("./DisplayDiscount");
order.DisplayLineItem = require("./DisplayLineItem");
order.DisplayModification = require("./DisplayModification");
order.DisplayOrder = require("./DisplayOrder");
order.DisplayPayment = require("./DisplayPayment");
order.FireOrder = require("./FireOrder");
order.HoursAvailable = require("./HoursAvailable");
order.LineItem = require("./LineItem");
order.Modification = require("./Modification");
order.Order = require("./Order");
order.OrderExpansion = require("./OrderExpansion");
order.OrderTaxRate = require("./OrderTaxRate");
order.OrderType = require("./OrderType");
order.OrderTypeCategory = require("./OrderTypeCategory");
order.PayType = require("./PayType");
order.SystemOrderType = require("./SystemOrderType");
order.VoidReason = require("./VoidReason");
order.VoidedLineItem = require("./VoidedLineItem.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = order;
}
    