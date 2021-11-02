/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @memberof remotepay
*/
var PrintPaymentMerchantCopyReceiptMessage = function() {
  this._class_ = PrintPaymentMerchantCopyReceiptMessage;
  this.payment = undefined;
};


/**
* Set the field value
* @memberof remotepay.PrintPaymentMerchantCopyReceiptMessage
* @param {payments.Payment} payment 
*/
PrintPaymentMerchantCopyReceiptMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* @memberof remotepay.PrintPaymentMerchantCopyReceiptMessage
* @return {payments.Payment} 
*/
PrintPaymentMerchantCopyReceiptMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* @memberof remotepay.PrintPaymentMerchantCopyReceiptMessage
* @private
*/
PrintPaymentMerchantCopyReceiptMessage.prototype.getMetaInfo = function(fieldName) {
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

PrintPaymentMerchantCopyReceiptMessage.prototype.toString = function() {
  return JSON.stringify(this);
};

PrintPaymentMerchantCopyReceiptMessage._meta_ =  {fields:  {}};
PrintPaymentMerchantCopyReceiptMessage._meta_._class_ =  PrintPaymentMerchantCopyReceiptMessage;
PrintPaymentMerchantCopyReceiptMessage._meta_.fields["payment"] = {};
PrintPaymentMerchantCopyReceiptMessage._meta_.fields["payment"].type = payments_Payment;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PrintPaymentMerchantCopyReceiptMessage;
}
