/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Authorization = require("../payments/Authorization");
var order_Discount = require("../order/Discount");
var onlineorder_OnlineOrder = require("../onlineorder/OnlineOrder");
var order_PaymentState = require("../order/PaymentState");
var base_ServiceCharge = require("../base/ServiceCharge");
var payments_Refund = require("../payments/Refund");
var payments_Credit = require("../payments/Credit");
var customers_Customer = require("../customers/Customer");
var order_PrintGroup = require("../order/PrintGroup");
var order_PayType = require("../order/PayType");
var order_LineItem = require("../order/LineItem");
var order_PaymentState = require("../order/PaymentState");
var order_OrderType = require("../order/OrderType");
var payments_Payment = require("../payments/Payment");
var base_Reference = require("../base/Reference");

/** The Order object is at the core of Clover’s transaction data. Almost every transaction either creates or updates an Order. When an order is created or updated via one of the Clover SDKs, the order data is automatically synchronized between the Clover Server and the merchant’s Clover devices. */
/**
* @constructor
* @memberof order
*/
var Order = function() {
  this._class_ = Order;
  this.id = undefined;
  this.currency = undefined;
  this.customerId = undefined;
  this.customerUuid = undefined;
  this.orderTypeId = undefined;
  this.customers = undefined;
  this.employee = undefined;
  this.total = undefined;
  this.externalReferenceId = undefined;
  this.unpaidBalance = undefined;
  this.paymentState = undefined;
  this.title = undefined;
  this.note = undefined;
  this.orderType = undefined;
  this.taxRemoved = false;
  this.isVat = undefined;
  this.state = undefined;
  this.manualTransaction = undefined;
  this.groupLineItems = undefined;
  this.testMode = undefined;
  this.payType = undefined;
  this.createdTime = undefined;
  this.clientCreatedTime = undefined;
  this.modifiedTime = undefined;
  this.deletedTimestamp = undefined;
  this.serviceCharge = undefined;
  this.discounts = undefined;
  this.lineItems = undefined;
  this.payments = undefined;
  this.refunds = undefined;
  this.credits = undefined;
  this.voids = undefined;
  this.preAuths = undefined;
  this.device = undefined;
  this.authorizations = undefined;
  this.merchant = undefined;
  this.onlineOrder = undefined;
  this.printGroups = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof order.Order
* @param {String} id 
*/
Order.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof order.Order
* @return {String} 
*/
Order.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Currency of this order. For example, "USD"
*
* @memberof order.Order
* @param {String} currency 
*/
Order.prototype.setCurrency = function(currency) {
  this.currency = currency;
};

/**
* Get the field value
* Currency of this order. For example, "USD"
* @memberof order.Order
* @return {String} 
*/
Order.prototype.getCurrency = function() {
  return this.currency;
};

/**
* Set the field value
* @memberof order.Order
* @param {Number} customerId must be a long integer
*/
Order.prototype.setCustomerId = function(customerId) {
  this.customerId = customerId;
};

/**
* Get the field value
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getCustomerId = function() {
  return this.customerId;
};

/**
* Set the field value
* @memberof order.Order
* @param {String} customerUuid 
*/
Order.prototype.setCustomerUuid = function(customerUuid) {
  this.customerUuid = customerUuid;
};

/**
* Get the field value
* @memberof order.Order
* @return {String} 
*/
Order.prototype.getCustomerUuid = function() {
  return this.customerUuid;
};

/**
* Set the field value
* @memberof order.Order
* @param {Number} orderTypeId must be a long integer
*/
Order.prototype.setOrderTypeId = function(orderTypeId) {
  this.orderTypeId = orderTypeId;
};

/**
* Get the field value
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getOrderTypeId = function() {
  return this.orderTypeId;
};

/**
* Set the field value
* List of customers associated with this order.
*
* @memberof order.Order
* @param {Array.<customers.Customer>} customers An array of 
*/
Order.prototype.setCustomers = function(customers) {
  this.customers = customers;
};

/**
* Get the field value
* List of customers associated with this order.
* @memberof order.Order
* @return {Array.<customers.Customer>} An array of 
*/
Order.prototype.getCustomers = function() {
  return this.customers;
};

/**
* Set the field value
* The employee who took this order
*
* @memberof order.Order
* @param {Null|base.Reference} employee 
*/
Order.prototype.setEmployee = function(employee) {
  this.employee = employee;
};

/**
* Get the field value
* The employee who took this order
* @memberof order.Order
* @return {Null|base.Reference} 
*/
Order.prototype.getEmployee = function() {
  return this.employee;
};

/**
* Set the field value
* Total price of the order in cents
*
* @memberof order.Order
* @param {Null|Number} total must be a long integer
*/
Order.prototype.setTotal = function(total) {
  this.total = total;
};

/**
* Get the field value
* Total price of the order in cents
* @memberof order.Order
* @return {Null|Number} must be a long integer
*/
Order.prototype.getTotal = function() {
  return this.total;
};

/**
* Set the field value
* External reference id if present in the order
*
* @memberof order.Order
* @param {Null|String} externalReferenceId 
*/
Order.prototype.setExternalReferenceId = function(externalReferenceId) {
  this.externalReferenceId = externalReferenceId;
};

/**
* Get the field value
* External reference id if present in the order
* @memberof order.Order
* @return {Null|String} 
*/
Order.prototype.getExternalReferenceId = function() {
  return this.externalReferenceId;
};

/**
* Set the field value
* The net of orders with payment minus the amount collected. Includes refunds, manual refunds, tax, tip, service charge, non-revenue items, paid gift card activations and loads and discounts
*
* @memberof order.Order
* @param {Null|Number} unpaidBalance must be a long integer
*/
Order.prototype.setUnpaidBalance = function(unpaidBalance) {
  this.unpaidBalance = unpaidBalance;
};

/**
* Get the field value
* The net of orders with payment minus the amount collected. Includes refunds, manual refunds, tax, tip, service charge, non-revenue items, paid gift card activations and loads and discounts
* @memberof order.Order
* @return {Null|Number} must be a long integer
*/
Order.prototype.getUnpaidBalance = function() {
  return this.unpaidBalance;
};

/**
* Set the field value
* Is this order paid or not?
*
* @memberof order.Order
* @param {Null|order.PaymentState} paymentState 
*/
Order.prototype.setPaymentState = function(paymentState) {
  this.paymentState = paymentState;
};

/**
* Get the field value
* Is this order paid or not?
* @memberof order.Order
* @return {Null|order.PaymentState} 
*/
Order.prototype.getPaymentState = function() {
  return this.paymentState;
};

/**
* Set the field value
* @memberof order.Order
* @param {Null|String} title 
*/
Order.prototype.setTitle = function(title) {
  this.title = title;
};

/**
* Get the field value
* @memberof order.Order
* @return {Null|String} 
*/
Order.prototype.getTitle = function() {
  return this.title;
};

/**
* Set the field value
* An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps
*
* @memberof order.Order
* @param {Null|String} note 
*/
Order.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps
* @memberof order.Order
* @return {Null|String} 
*/
Order.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* @memberof order.Order
* @param {Null|order.OrderType} orderType 
*/
Order.prototype.setOrderType = function(orderType) {
  this.orderType = orderType;
};

/**
* Get the field value
* @memberof order.Order
* @return {Null|order.OrderType} 
*/
Order.prototype.getOrderType = function() {
  return this.orderType;
};

/**
* Set the field value
* If true then this order should not have taxes applied to it
*
* @memberof order.Order
* @param {Boolean} taxRemoved 
*/
Order.prototype.setTaxRemoved = function(taxRemoved) {
  this.taxRemoved = taxRemoved;
};

/**
* Get the field value
* If true then this order should not have taxes applied to it
* @memberof order.Order
* @return {Boolean} 
*/
Order.prototype.getTaxRemoved = function() {
  return this.taxRemoved;
};

/**
* Set the field value
* This order was created by merchant with VAT enabled.
*
* @memberof order.Order
* @param {Boolean} isVat 
*/
Order.prototype.setIsVat = function(isVat) {
  this.isVat = isVat;
};

/**
* Get the field value
* This order was created by merchant with VAT enabled.
* @memberof order.Order
* @return {Boolean} 
*/
Order.prototype.getIsVat = function() {
  return this.isVat;
};

/**
* Set the field value
* A String generally describing the state of the Order. When creating an Order, the value must be manually set to "open". If no value is set, the state defaults to null, which indicates an unfinished Order. An unfinished order is not displayed in user interfaces and can only be retrieved by its id. Non-null values such as "open" and "locked" are not checked or enforced by the server. Therefore, these values should not be used to make any logical decisions about the Order.
*
* @memberof order.Order
* @param {Null|String} state 
*/
Order.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* A String generally describing the state of the Order. When creating an Order, the value must be manually set to "open". If no value is set, the state defaults to null, which indicates an unfinished Order. An unfinished order is not displayed in user interfaces and can only be retrieved by its id. Non-null values such as "open" and "locked" are not checked or enforced by the server. Therefore, these values should not be used to make any logical decisions about the Order.
* @memberof order.Order
* @return {Null|String} 
*/
Order.prototype.getState = function() {
  return this.state;
};

/**
* Set the field value
* Whether this order represents a manual transaction. A manual transaction is a transaction that has an arbitrary amount defined and is not associated with any inventory items. For example, the Clover Sale App and Clover Manual Transaction App create manual transactions. A manual transactions will have a single associated line item to hold the sale amount, but the generated receipt will display this differently to indicate that it is not considered a typical order with inventory items.
*
* @memberof order.Order
* @param {Boolean} manualTransaction 
*/
Order.prototype.setManualTransaction = function(manualTransaction) {
  this.manualTransaction = manualTransaction;
};

/**
* Get the field value
* Whether this order represents a manual transaction. A manual transaction is a transaction that has an arbitrary amount defined and is not associated with any inventory items. For example, the Clover Sale App and Clover Manual Transaction App create manual transactions. A manual transactions will have a single associated line item to hold the sale amount, but the generated receipt will display this differently to indicate that it is not considered a typical order with inventory items.
* @memberof order.Order
* @return {Boolean} 
*/
Order.prototype.getManualTransaction = function() {
  return this.manualTransaction;
};

/**
* Set the field value
* Whether similar line items should be grouped together on the receipt that this order generates. Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
*
* @memberof order.Order
* @param {Boolean} groupLineItems 
*/
Order.prototype.setGroupLineItems = function(groupLineItems) {
  this.groupLineItems = groupLineItems;
};

/**
* Get the field value
* Whether similar line items should be grouped together on the receipt that this order generates. Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
* @memberof order.Order
* @return {Boolean} 
*/
Order.prototype.getGroupLineItems = function() {
  return this.groupLineItems;
};

/**
* Set the field value
* Whether this order was created in test mode. Payments made against test orders are not processed. Test mode orders can be deleted from the Orders App on the merchant's device or web dashboard (https://www.clover.com/orders/m/{mId}/orders). They will also be deleted when the device sends a POST to the /v2/merchant/{mId}/orders/delete_all_tests endpoint.
*
* @memberof order.Order
* @param {Boolean} testMode 
*/
Order.prototype.setTestMode = function(testMode) {
  this.testMode = testMode;
};

/**
* Get the field value
* Whether this order was created in test mode. Payments made against test orders are not processed. Test mode orders can be deleted from the Orders App on the merchant's device or web dashboard (https://www.clover.com/orders/m/{mId}/orders). They will also be deleted when the device sends a POST to the /v2/merchant/{mId}/orders/delete_all_tests endpoint.
* @memberof order.Order
* @return {Boolean} 
*/
Order.prototype.getTestMode = function() {
  return this.testMode;
};

/**
* Set the field value
* Possible values: SPLIT_GUEST, SPLIT_ITEM, SPLIT_CUSTOM, FULL. During the payment flow, if the user chooses to split the payment for this order, this field will be set to one of the SPLIT_* values to indicate how the full amount should be split. If the user chooses to pay for the order in full with one payment, then this field will be FULL.
*
* @memberof order.Order
* @param {order.PayType} payType 
*/
Order.prototype.setPayType = function(payType) {
  this.payType = payType;
};

/**
* Get the field value
* Possible values: SPLIT_GUEST, SPLIT_ITEM, SPLIT_CUSTOM, FULL. During the payment flow, if the user chooses to split the payment for this order, this field will be set to one of the SPLIT_* values to indicate how the full amount should be split. If the user chooses to pay for the order in full with one payment, then this field will be FULL.
* @memberof order.Order
* @return {order.PayType} 
*/
Order.prototype.getPayType = function() {
  return this.payType;
};

/**
* Set the field value
* Creation timestamp
*
* @memberof order.Order
* @param {Number} createdTime must be a long integer
*/
Order.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Creation timestamp
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* The time at which the client created this order
*
* @memberof order.Order
* @param {Number} clientCreatedTime must be a long integer
*/
Order.prototype.setClientCreatedTime = function(clientCreatedTime) {
  this.clientCreatedTime = clientCreatedTime;
};

/**
* Get the field value
* The time at which the client created this order
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getClientCreatedTime = function() {
  return this.clientCreatedTime;
};

/**
* Set the field value
* Last modified time of the order
*
* @memberof order.Order
* @param {Number} modifiedTime must be a long integer
*/
Order.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Last modified time of the order
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* @memberof order.Order
* @param {Number} deletedTimestamp must be a long integer
*/
Order.prototype.setDeletedTimestamp = function(deletedTimestamp) {
  this.deletedTimestamp = deletedTimestamp;
};

/**
* Get the field value
* @memberof order.Order
* @return {Number} must be a long integer
*/
Order.prototype.getDeletedTimestamp = function() {
  return this.deletedTimestamp;
};

/**
* Set the field value
* Optional service charge (gratuity) applied to this order
*
* @memberof order.Order
* @param {Null|base.ServiceCharge} serviceCharge 
*/
Order.prototype.setServiceCharge = function(serviceCharge) {
  this.serviceCharge = serviceCharge;
};

/**
* Get the field value
* Optional service charge (gratuity) applied to this order
* @memberof order.Order
* @return {Null|base.ServiceCharge} 
*/
Order.prototype.getServiceCharge = function() {
  return this.serviceCharge;
};

/**
* Set the field value
* Amount or percentage discounts applied to the order subtotal. To retrieve discounts applied to individual items, use the Get all line items for an order endpoint with the discounts field expanded (v3/merchants/{mId}/orders/{orderId}/line_items?expand=discounts).
*
* @memberof order.Order
* @param {Array.<order.Discount>} discounts An array of 
*/
Order.prototype.setDiscounts = function(discounts) {
  this.discounts = discounts;
};

/**
* Get the field value
* Amount or percentage discounts applied to the order subtotal. To retrieve discounts applied to individual items, use the Get all line items for an order endpoint with the discounts field expanded (v3/merchants/{mId}/orders/{orderId}/line_items?expand=discounts).
* @memberof order.Order
* @return {Array.<order.Discount>} An array of 
*/
Order.prototype.getDiscounts = function() {
  return this.discounts;
};

/**
* Set the field value
* Line items associated with this order
*
* @memberof order.Order
* @param {Array.<order.LineItem>} lineItems An array of 
*/
Order.prototype.setLineItems = function(lineItems) {
  this.lineItems = lineItems;
};

/**
* Get the field value
* Line items associated with this order
* @memberof order.Order
* @return {Array.<order.LineItem>} An array of 
*/
Order.prototype.getLineItems = function() {
  return this.lineItems;
};

/**
* Set the field value
* Payments that were made for this order. If multiple payments were made, then the payType field should reflect the method used to split the total amount.
*
* @memberof order.Order
* @param {Array.<payments.Payment>} payments An array of 
*/
Order.prototype.setPayments = function(payments) {
  this.payments = payments;
};

/**
* Get the field value
* Payments that were made for this order. If multiple payments were made, then the payType field should reflect the method used to split the total amount.
* @memberof order.Order
* @return {Array.<payments.Payment>} An array of 
*/
Order.prototype.getPayments = function() {
  return this.payments;
};

/**
* Set the field value
* Refunds that were made for this order
*
* @memberof order.Order
* @param {Array.<payments.Refund>} refunds An array of 
*/
Order.prototype.setRefunds = function(refunds) {
  this.refunds = refunds;
};

/**
* Get the field value
* Refunds that were made for this order
* @memberof order.Order
* @return {Array.<payments.Refund>} An array of 
*/
Order.prototype.getRefunds = function() {
  return this.refunds;
};

/**
* Set the field value
* Credits associated with this order.
*
* @memberof order.Order
* @param {Array.<payments.Credit>} credits An array of 
*/
Order.prototype.setCredits = function(credits) {
  this.credits = credits;
};

/**
* Get the field value
* Credits associated with this order.
* @memberof order.Order
* @return {Array.<payments.Credit>} An array of 
*/
Order.prototype.getCredits = function() {
  return this.credits;
};

/**
* Set the field value
* Voided payments associated with this order
*
* @memberof order.Order
* @param {Array.<payments.Payment>} voids An array of 
*/
Order.prototype.setVoids = function(voids) {
  this.voids = voids;
};

/**
* Get the field value
* Voided payments associated with this order
* @memberof order.Order
* @return {Array.<payments.Payment>} An array of 
*/
Order.prototype.getVoids = function() {
  return this.voids;
};

/**
* Set the field value
* Pre-authorizations associated with this order
*
* @memberof order.Order
* @param {Array.<payments.Payment>} preAuths An array of 
*/
Order.prototype.setPreAuths = function(preAuths) {
  this.preAuths = preAuths;
};

/**
* Get the field value
* Pre-authorizations associated with this order
* @memberof order.Order
* @return {Array.<payments.Payment>} An array of 
*/
Order.prototype.getPreAuths = function() {
  return this.preAuths;
};

/**
* Set the field value
* Device which created the order, a 128-bit UUID, not a normal base-13 Clover ID.
*
* @memberof order.Order
* @param {base.Reference|Null} device 
*/
Order.prototype.setDevice = function(device) {
  this.device = device;
};

/**
* Get the field value
* Device which created the order, a 128-bit UUID, not a normal base-13 Clover ID.
* @memberof order.Order
* @return {base.Reference|Null} 
*/
Order.prototype.getDevice = function() {
  return this.device;
};

/**
* Set the field value
* Card authorizations associated with this order
*
* @memberof order.Order
* @param {Array.<payments.Authorization>} authorizations An array of 
*/
Order.prototype.setAuthorizations = function(authorizations) {
  this.authorizations = authorizations;
};

/**
* Get the field value
* Card authorizations associated with this order
* @memberof order.Order
* @return {Array.<payments.Authorization>} An array of 
*/
Order.prototype.getAuthorizations = function() {
  return this.authorizations;
};

/**
* Set the field value
* @memberof order.Order
* @param {base.Reference} merchant 
*/
Order.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof order.Order
* @return {base.Reference} 
*/
Order.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* @memberof order.Order
* @param {Null|onlineorder.OnlineOrder} onlineOrder 
*/
Order.prototype.setOnlineOrder = function(onlineOrder) {
  this.onlineOrder = onlineOrder;
};

/**
* Get the field value
* @memberof order.Order
* @return {Null|onlineorder.OnlineOrder} 
*/
Order.prototype.getOnlineOrder = function() {
  return this.onlineOrder;
};

/**
* Set the field value
* Print groups for line items of this order.
*
* @memberof order.Order
* @param {Array.<order.PrintGroup>} printGroups An array of 
*/
Order.prototype.setPrintGroups = function(printGroups) {
  this.printGroups = printGroups;
};

/**
* Get the field value
* Print groups for line items of this order.
* @memberof order.Order
* @return {Array.<order.PrintGroup>} An array of 
*/
Order.prototype.getPrintGroups = function() {
  return this.printGroups;
};

/**
* @memberof order.Order
* @private
*/
Order.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

Order.prototype.toString = function() {
  return JSON.stringify(this);
};

Order._meta_ =  {fields:  {}};
Order._meta_._class_ =  Order;
Order._meta_.fields["id"] = {};
Order._meta_.fields["id"].type = String;
Order._meta_.fields["currency"] = {};
Order._meta_.fields["currency"].type = String;
Order._meta_.fields["customerId"] = {};
Order._meta_.fields["customerId"].type = Number;
Order._meta_.fields["customerUuid"] = {};
Order._meta_.fields["customerUuid"].type = String;
Order._meta_.fields["orderTypeId"] = {};
Order._meta_.fields["orderTypeId"].type = Number;
Order._meta_.fields["customers"] = {};
Order._meta_.fields["customers"].type = Array;
Order._meta_.fields["customers"].elementType = customers_Customer;
Order._meta_.fields["employee"] = {};
Order._meta_.fields["employee"].type = base_Reference;
Order._meta_.fields["total"] = {};
Order._meta_.fields["total"].type = Number;
Order._meta_.fields["externalReferenceId"] = {};
Order._meta_.fields["externalReferenceId"].type = String;
Order._meta_.fields["unpaidBalance"] = {};
Order._meta_.fields["unpaidBalance"].type = Number;
Order._meta_.fields["paymentState"] = {};
Order._meta_.fields["paymentState"].type = order_PaymentState;
Order._meta_.fields["title"] = {};
Order._meta_.fields["title"].type = String;
Order._meta_.fields["note"] = {};
Order._meta_.fields["note"].type = String;
Order._meta_.fields["orderType"] = {};
Order._meta_.fields["orderType"].type = order_OrderType;
Order._meta_.fields["taxRemoved"] = {};
Order._meta_.fields["taxRemoved"].type = Boolean;
Order._meta_.fields["isVat"] = {};
Order._meta_.fields["isVat"].type = Boolean;
Order._meta_.fields["state"] = {};
Order._meta_.fields["state"].type = String;
Order._meta_.fields["manualTransaction"] = {};
Order._meta_.fields["manualTransaction"].type = Boolean;
Order._meta_.fields["groupLineItems"] = {};
Order._meta_.fields["groupLineItems"].type = Boolean;
Order._meta_.fields["testMode"] = {};
Order._meta_.fields["testMode"].type = Boolean;
Order._meta_.fields["payType"] = {};
Order._meta_.fields["payType"].type = order_PayType;
Order._meta_.fields["createdTime"] = {};
Order._meta_.fields["createdTime"].type = Number;
Order._meta_.fields["clientCreatedTime"] = {};
Order._meta_.fields["clientCreatedTime"].type = Number;
Order._meta_.fields["modifiedTime"] = {};
Order._meta_.fields["modifiedTime"].type = Number;
Order._meta_.fields["deletedTimestamp"] = {};
Order._meta_.fields["deletedTimestamp"].type = Number;
Order._meta_.fields["serviceCharge"] = {};
Order._meta_.fields["serviceCharge"].type = base_ServiceCharge;
Order._meta_.fields["discounts"] = {};
Order._meta_.fields["discounts"].type = Array;
Order._meta_.fields["discounts"].elementType = order_Discount;
Order._meta_.fields["lineItems"] = {};
Order._meta_.fields["lineItems"].type = Array;
Order._meta_.fields["lineItems"].elementType = order_LineItem;
Order._meta_.fields["payments"] = {};
Order._meta_.fields["payments"].type = Array;
Order._meta_.fields["payments"].elementType = payments_Payment;
Order._meta_.fields["refunds"] = {};
Order._meta_.fields["refunds"].type = Array;
Order._meta_.fields["refunds"].elementType = payments_Refund;
Order._meta_.fields["credits"] = {};
Order._meta_.fields["credits"].type = Array;
Order._meta_.fields["credits"].elementType = payments_Credit;
Order._meta_.fields["voids"] = {};
Order._meta_.fields["voids"].type = Array;
Order._meta_.fields["voids"].elementType = payments_Payment;
Order._meta_.fields["preAuths"] = {};
Order._meta_.fields["preAuths"].type = Array;
Order._meta_.fields["preAuths"].elementType = payments_Payment;
Order._meta_.fields["device"] = {};
Order._meta_.fields["device"].type = base_Reference;
Order._meta_.fields["authorizations"] = {};
Order._meta_.fields["authorizations"].type = Array;
Order._meta_.fields["authorizations"].elementType = payments_Authorization;
Order._meta_.fields["merchant"] = {};
Order._meta_.fields["merchant"].type = base_Reference;
Order._meta_.fields["onlineOrder"] = {};
Order._meta_.fields["onlineOrder"].type = onlineorder_OnlineOrder;
Order._meta_.fields["printGroups"] = {};
Order._meta_.fields["printGroups"].type = Array;
Order._meta_.fields["printGroups"].elementType = order_PrintGroup;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Order;
}
