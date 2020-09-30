/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var pay_PaymentRequestCardDetails = require("../pay/PaymentRequestCardDetails");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var BalanceInquiryResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = BalanceInquiryResponseMessage;
  this.setMethod(remotemessage_Method["BALANCE_INQUIRY_RESPONSE"]);
  this.status = undefined;
  this.reason = undefined;
  this.payment = undefined;
  this.cardDetails = undefined;
};

BalanceInquiryResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
BalanceInquiryResponseMessage.prototype.constructor = BalanceInquiryResponseMessage;

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @param {remotemessage.ResultStatus} status 
*/
BalanceInquiryResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @return {remotemessage.ResultStatus} 
*/
BalanceInquiryResponseMessage.prototype.getStatus = function() {
  return this.status;
};

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @param {String} reason 
*/
BalanceInquiryResponseMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @return {String} 
*/
BalanceInquiryResponseMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @param {payments.Payment} payment 
*/
BalanceInquiryResponseMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @return {payments.Payment} 
*/
BalanceInquiryResponseMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @param {pay.PaymentRequestCardDetails} cardDetails 
*/
BalanceInquiryResponseMessage.prototype.setCardDetails = function(cardDetails) {
  this.cardDetails = cardDetails;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryResponseMessage
* @return {pay.PaymentRequestCardDetails} 
*/
BalanceInquiryResponseMessage.prototype.getCardDetails = function() {
  return this.cardDetails;
};

BalanceInquiryResponseMessage._meta_ =  {fields:  {}};
BalanceInquiryResponseMessage._meta_._class_ =  BalanceInquiryResponseMessage;
BalanceInquiryResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
BalanceInquiryResponseMessage._meta_.fields["status"] = {};
BalanceInquiryResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
BalanceInquiryResponseMessage._meta_.fields["reason"] = {};
BalanceInquiryResponseMessage._meta_.fields["reason"].type = String;
BalanceInquiryResponseMessage._meta_.fields["payment"] = {};
BalanceInquiryResponseMessage._meta_.fields["payment"].type = payments_Payment;
BalanceInquiryResponseMessage._meta_.fields["cardDetails"] = {};
BalanceInquiryResponseMessage._meta_.fields["cardDetails"].type = pay_PaymentRequestCardDetails;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BalanceInquiryResponseMessage;
}

