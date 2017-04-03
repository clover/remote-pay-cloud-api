/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var base_Challenge = require("../base/Challenge");
var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var ConfirmPaymentRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = ConfirmPaymentRequest;
  this.payment = undefined;
  this.challenges = undefined;
};

ConfirmPaymentRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
ConfirmPaymentRequest.prototype.constructor = ConfirmPaymentRequest;

/**
* Set the field value
* A payment that is being challenged
*
* @memberof remotepay.ConfirmPaymentRequest
* @param {payments.Payment} payment 
*/
ConfirmPaymentRequest.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment that is being challenged
* @memberof remotepay.ConfirmPaymentRequest
* @return {payments.Payment} 
*/
ConfirmPaymentRequest.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* The challenges for the payment.
*
* @memberof remotepay.ConfirmPaymentRequest
* @param {Array.<base.Challenge>} challenges An array of 
*/
ConfirmPaymentRequest.prototype.setChallenges = function(challenges) {
  this.challenges = challenges;
};

/**
* Get the field value
* The challenges for the payment.
* @memberof remotepay.ConfirmPaymentRequest
* @return {Array.<base.Challenge>} An array of 
*/
ConfirmPaymentRequest.prototype.getChallenges = function() {
  return this.challenges;
};

ConfirmPaymentRequest._meta_ =  {fields:  {}};
ConfirmPaymentRequest._meta_._class_ =  ConfirmPaymentRequest;
ConfirmPaymentRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
ConfirmPaymentRequest._meta_.fields["payment"] = {};
ConfirmPaymentRequest._meta_.fields["payment"].type = payments_Payment;
ConfirmPaymentRequest._meta_.fields["challenges"] = {};
ConfirmPaymentRequest._meta_.fields["challenges"].type = Array;
ConfirmPaymentRequest._meta_.fields["challenges"].elementType = base_Challenge;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ConfirmPaymentRequest;
}

