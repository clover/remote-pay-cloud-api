/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_TransactionType = require("../remotepay/TransactionType");
var remotepay_TransactionRequest = require("../remotepay/TransactionRequest");

/** A authorization request */
/**
* @constructor
* @augments remotepay.TransactionRequest
* @memberof remotepay
*/
var AuthRequest = function() {
  remotepay_TransactionRequest.call(this);
  this._superClass_ = remotepay_TransactionRequest;
  this._class_ = AuthRequest;
  this.setType(remotepay_TransactionType["PAYMENT"]);
  this.tippableAmount = undefined;
  this.disableCashback = undefined;
  this.taxAmount = undefined;
  this.allowOfflinePayment = undefined;
  this.forceOfflinePayment = undefined;
  this.approveOfflinePaymentWithoutPrompt = undefined;
};

AuthRequest.prototype = Object.create(remotepay_TransactionRequest.prototype);
AuthRequest.prototype.constructor = AuthRequest;

/**
* Set the field value
* Total amount used when calculating tips
*
* @memberof remotepay.AuthRequest
* @param {Number|Null} tippableAmount must be a long integer, 
*/
AuthRequest.prototype.setTippableAmount = function(tippableAmount) {
  this.tippableAmount = tippableAmount;
};

/**
* Get the field value
* Total amount used when calculating tips
* @memberof remotepay.AuthRequest
* @return {Number|Null} must be a long integer, 
*/
AuthRequest.prototype.getTippableAmount = function() {
  return this.tippableAmount;
};

/**
* Set the field value
* Do not allow cash back
*
* @memberof remotepay.AuthRequest
* @param {Boolean|Null} disableCashback 
*/
AuthRequest.prototype.setDisableCashback = function(disableCashback) {
  this.disableCashback = disableCashback;
};

/**
* Get the field value
* Do not allow cash back
* @memberof remotepay.AuthRequest
* @return {Boolean|Null} 
*/
AuthRequest.prototype.getDisableCashback = function() {
  return this.disableCashback;
};

/**
* Set the field value
* Amount paid in tax
*
* @memberof remotepay.AuthRequest
* @param {Number|Null} taxAmount must be a long integer, 
*/
AuthRequest.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* Amount paid in tax
* @memberof remotepay.AuthRequest
* @return {Number|Null} must be a long integer, 
*/
AuthRequest.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* If true then offline payments can be accepted
*
* @memberof remotepay.AuthRequest
* @param {Boolean|Null} allowOfflinePayment 
*/
AuthRequest.prototype.setAllowOfflinePayment = function(allowOfflinePayment) {
  this.allowOfflinePayment = allowOfflinePayment;
};

/**
* Get the field value
* If true then offline payments can be accepted
* @memberof remotepay.AuthRequest
* @return {Boolean|Null} 
*/
AuthRequest.prototype.getAllowOfflinePayment = function() {
  return this.allowOfflinePayment;
};

/**
* Set the field value
* If true then payment will be taken offline, regardless of connection status
*
* @memberof remotepay.AuthRequest
* @param {Boolean|Null} forceOfflinePayment 
*/
AuthRequest.prototype.setForceOfflinePayment = function(forceOfflinePayment) {
  this.forceOfflinePayment = forceOfflinePayment;
};

/**
* Get the field value
* If true then payment will be taken offline, regardless of connection status
* @memberof remotepay.AuthRequest
* @return {Boolean|Null} 
*/
AuthRequest.prototype.getForceOfflinePayment = function() {
  return this.forceOfflinePayment;
};

/**
* Set the field value
* If true then offline payments will be approved without a prompt.  Currently must be true.
*
* @memberof remotepay.AuthRequest
* @param {Boolean|Null} approveOfflinePaymentWithoutPrompt 
*/
AuthRequest.prototype.setApproveOfflinePaymentWithoutPrompt = function(approveOfflinePaymentWithoutPrompt) {
  this.approveOfflinePaymentWithoutPrompt = approveOfflinePaymentWithoutPrompt;
};

/**
* Get the field value
* If true then offline payments will be approved without a prompt.  Currently must be true.
* @memberof remotepay.AuthRequest
* @return {Boolean|Null} 
*/
AuthRequest.prototype.getApproveOfflinePaymentWithoutPrompt = function() {
  return this.approveOfflinePaymentWithoutPrompt;
};

AuthRequest._meta_ =  {fields:  {}};
AuthRequest._meta_._class_ =  AuthRequest;
AuthRequest._meta_._superMeta_ = remotepay_TransactionRequest._meta_;
AuthRequest._meta_.fields["tippableAmount"] = {};
AuthRequest._meta_.fields["tippableAmount"].type = Number;
AuthRequest._meta_.fields["disableCashback"] = {};
AuthRequest._meta_.fields["disableCashback"].type = Boolean;
AuthRequest._meta_.fields["taxAmount"] = {};
AuthRequest._meta_.fields["taxAmount"].type = Number;
AuthRequest._meta_.fields["allowOfflinePayment"] = {};
AuthRequest._meta_.fields["allowOfflinePayment"].type = Boolean;
AuthRequest._meta_.fields["forceOfflinePayment"] = {};
AuthRequest._meta_.fields["forceOfflinePayment"].type = Boolean;
AuthRequest._meta_.fields["approveOfflinePaymentWithoutPrompt"] = {};
AuthRequest._meta_.fields["approveOfflinePaymentWithoutPrompt"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AuthRequest;
}

