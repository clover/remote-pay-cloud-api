/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_TxStartResponseResult = require("../remotemessage/TxStartResponseResult");
var order_Order = require("../order/Order");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var TxStartResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = TxStartResponseMessage;
  this.setMethod(remotemessage_Method["TX_START_RESPONSE"]);
  this.success = undefined;
  this.order = undefined;
  this.externalPaymentId = undefined;
  this.result = undefined;
};

TxStartResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
TxStartResponseMessage.prototype.constructor = TxStartResponseMessage;

/**
* Set the field value
* Deprecated
*
* @memberof remotemessage.TxStartResponseMessage
* @param {Boolean} success 
*/
TxStartResponseMessage.prototype.setSuccess = function(success) {
  this.success = success;
};

/**
* Get the field value
* Deprecated
* @memberof remotemessage.TxStartResponseMessage
* @return {Boolean} 
*/
TxStartResponseMessage.prototype.getSuccess = function() {
  return this.success;
};

/**
* Set the field value
* The order
*
* @memberof remotemessage.TxStartResponseMessage
* @param {order.Order} order 
*/
TxStartResponseMessage.prototype.setOrder = function(order) {
  this.order = order;
};

/**
* Get the field value
* The order
* @memberof remotemessage.TxStartResponseMessage
* @return {order.Order} 
*/
TxStartResponseMessage.prototype.getOrder = function() {
  return this.order;
};

/**
* Set the field value
* The external id provided in the initiating pay intent
*
* @memberof remotemessage.TxStartResponseMessage
* @param {String} externalPaymentId 
*/
TxStartResponseMessage.prototype.setExternalPaymentId = function(externalPaymentId) {
  this.externalPaymentId = externalPaymentId;
};

/**
* Get the field value
* The external id provided in the initiating pay intent
* @memberof remotemessage.TxStartResponseMessage
* @return {String} 
*/
TxStartResponseMessage.prototype.getExternalPaymentId = function() {
  return this.externalPaymentId;
};

/**
* Set the field value
* @memberof remotemessage.TxStartResponseMessage
* @param {remotemessage.TxStartResponseResult} result 
*/
TxStartResponseMessage.prototype.setResult = function(result) {
  this.result = result;
};

/**
* Get the field value
* @memberof remotemessage.TxStartResponseMessage
* @return {remotemessage.TxStartResponseResult} 
*/
TxStartResponseMessage.prototype.getResult = function() {
  return this.result;
};

TxStartResponseMessage._meta_ =  {fields:  {}};
TxStartResponseMessage._meta_.fields["success"] = {};
TxStartResponseMessage._meta_.fields["success"].type = Boolean;
TxStartResponseMessage._meta_.fields["order"] = {};
TxStartResponseMessage._meta_.fields["order"].type = order_Order;
TxStartResponseMessage._meta_.fields["externalPaymentId"] = {};
TxStartResponseMessage._meta_.fields["externalPaymentId"].type = String;
TxStartResponseMessage._meta_.fields["result"] = {};
TxStartResponseMessage._meta_.fields["result"].type = remotemessage_TxStartResponseResult;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TxStartResponseMessage;
}

