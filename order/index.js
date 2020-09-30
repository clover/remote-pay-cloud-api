
module.exports.order = order;
/**
* @namespace order
*/
function order() {}
order.operation = {}


order.ClientEventType = require("./ClientEventType");
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
order.LineItemTaxRates = require("./LineItemTaxRates");
order.Modification = require("./Modification");
order.Order = require("./Order");
order.OrderExpansion = require("./OrderExpansion");
order.OrderTaxRate = require("./OrderTaxRate");
order.OrderType = require("./OrderType");
order.OrderTypeCategory = require("./OrderTypeCategory");
order.OverrideInfo = require("./OverrideInfo");
order.PayType = require("./PayType");
order.PaymentState = require("./PaymentState");
order.PrintGroup = require("./PrintGroup");
order.PrintOrder = require("./PrintOrder");
order.PrintState = require("./PrintState");
order.SendReceiptRequest = require("./SendReceiptRequest");
order.SystemOrderType = require("./SystemOrderType");
order.VoidReason = require("./VoidReason");
order.VoidedLineItem = require("./VoidedLineItem");
order.operation.DiscountsAddedOperation = require("./operation/DiscountsAddedOperation");
order.operation.DiscountsDeletedOperation = require("./operation/DiscountsDeletedOperation");
order.operation.LineItemsAddedOperation = require("./operation/LineItemsAddedOperation");
order.operation.LineItemsDeletedOperation = require("./operation/LineItemsDeletedOperation");
order.operation.OrderDeletedOperation = require("./operation/OrderDeletedOperation.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = order;
}
    