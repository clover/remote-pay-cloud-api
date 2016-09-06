/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_Refund = require("../payments/Refund");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var RefundPaymentResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = RefundPaymentResponse;
  this.refund = undefined;
};

RefundPaymentResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
RefundPaymentResponse.prototype.constructor = RefundPaymentResponse;

/**
* Set the field value
* The actual refund from the request
*
* @memberof remotepay.RefundPaymentResponse
* @param {payments.Refund} refund 
*/
RefundPaymentResponse.prototype.setRefund = function(refund) {
  this.refund = refund;
};

/**
* Get the field value
* The actual refund from the request
* @memberof remotepay.RefundPaymentResponse
* @return {payments.Refund} 
*/
RefundPaymentResponse.prototype.getRefund = function() {
  return this.refund;
};

RefundPaymentResponse._meta_ =  {fields:  {}};
RefundPaymentResponse._meta_.fields["refund"] = {};
RefundPaymentResponse._meta_.fields["refund"].type = payments_Refund;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RefundPaymentResponse;
}

