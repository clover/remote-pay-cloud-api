/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof payments
*/
var PaymentTaxRate = function() {
  this._class_ = PaymentTaxRate;
  this.id = undefined;
  this.paymentRef = undefined;
  this.name = undefined;
  this.rate = undefined;
  this.isDefault = undefined;
  this.taxableAmount = undefined;
};


/**
* Set the field value
* @memberof payments.PaymentTaxRate
* @param {String} id 
*/
PaymentTaxRate.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof payments.PaymentTaxRate
* @return {String} 
*/
PaymentTaxRate.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The payment with which the payment tax rate is associated
*
* @memberof payments.PaymentTaxRate
* @param {base.Reference} paymentRef 
*/
PaymentTaxRate.prototype.setPaymentRef = function(paymentRef) {
  this.paymentRef = paymentRef;
};

/**
* Get the field value
* The payment with which the payment tax rate is associated
* @memberof payments.PaymentTaxRate
* @return {base.Reference} 
*/
PaymentTaxRate.prototype.getPaymentRef = function() {
  return this.paymentRef;
};

/**
* Set the field value
* @memberof payments.PaymentTaxRate
* @param {String} name 
*/
PaymentTaxRate.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* @memberof payments.PaymentTaxRate
* @return {String} 
*/
PaymentTaxRate.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* @memberof payments.PaymentTaxRate
* @param {Number} rate must be a long integer
*/
PaymentTaxRate.prototype.setRate = function(rate) {
  this.rate = rate;
};

/**
* Get the field value
* @memberof payments.PaymentTaxRate
* @return {Number} must be a long integer
*/
PaymentTaxRate.prototype.getRate = function() {
  return this.rate;
};

/**
* Set the field value
* @memberof payments.PaymentTaxRate
* @param {Boolean} isDefault 
*/
PaymentTaxRate.prototype.setIsDefault = function(isDefault) {
  this.isDefault = isDefault;
};

/**
* Get the field value
* @memberof payments.PaymentTaxRate
* @return {Boolean} 
*/
PaymentTaxRate.prototype.getIsDefault = function() {
  return this.isDefault;
};

/**
* Set the field value
* @memberof payments.PaymentTaxRate
* @param {Number} taxableAmount must be a long integer
*/
PaymentTaxRate.prototype.setTaxableAmount = function(taxableAmount) {
  this.taxableAmount = taxableAmount;
};

/**
* Get the field value
* @memberof payments.PaymentTaxRate
* @return {Number} must be a long integer
*/
PaymentTaxRate.prototype.getTaxableAmount = function() {
  return this.taxableAmount;
};

/**
* @memberof payments.PaymentTaxRate
* @private
*/
PaymentTaxRate.prototype.getMetaInfo = function(fieldName) {
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

PaymentTaxRate.prototype.toString = function() {
  return JSON.stringify(this);
};

PaymentTaxRate._meta_ =  {fields:  {}};
PaymentTaxRate._meta_._class_ =  PaymentTaxRate;
PaymentTaxRate._meta_.fields["id"] = {};
PaymentTaxRate._meta_.fields["id"].type = String;
PaymentTaxRate._meta_.fields["paymentRef"] = {};
PaymentTaxRate._meta_.fields["paymentRef"].type = base_Reference;
PaymentTaxRate._meta_.fields["name"] = {};
PaymentTaxRate._meta_.fields["name"].type = String;
PaymentTaxRate._meta_.fields["rate"] = {};
PaymentTaxRate._meta_.fields["rate"].type = Number;
PaymentTaxRate._meta_.fields["isDefault"] = {};
PaymentTaxRate._meta_.fields["isDefault"].type = Boolean;
PaymentTaxRate._meta_.fields["taxableAmount"] = {};
PaymentTaxRate._meta_.fields["taxableAmount"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PaymentTaxRate;
}

