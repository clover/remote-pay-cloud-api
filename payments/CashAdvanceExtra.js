/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_CashAdvanceCustomerIdentification = require("../payments/CashAdvanceCustomerIdentification");

/**
* @constructor
* @memberof payments
*/
var CashAdvanceExtra = function() {
  this._class_ = CashAdvanceExtra;
  this.cashAdvanceSerialNum = undefined;
  this.cashAdvanceCustomerIdentification = undefined;
};


/**
* Set the field value
* @memberof payments.CashAdvanceExtra
* @param {String} cashAdvanceSerialNum 
*/
CashAdvanceExtra.prototype.setCashAdvanceSerialNum = function(cashAdvanceSerialNum) {
  this.cashAdvanceSerialNum = cashAdvanceSerialNum;
};

/**
* Get the field value
* @memberof payments.CashAdvanceExtra
* @return {String} 
*/
CashAdvanceExtra.prototype.getCashAdvanceSerialNum = function() {
  return this.cashAdvanceSerialNum;
};

/**
* Set the field value
* @memberof payments.CashAdvanceExtra
* @param {payments.CashAdvanceCustomerIdentification} cashAdvanceCustomerIdentification 
*/
CashAdvanceExtra.prototype.setCashAdvanceCustomerIdentification = function(cashAdvanceCustomerIdentification) {
  this.cashAdvanceCustomerIdentification = cashAdvanceCustomerIdentification;
};

/**
* Get the field value
* @memberof payments.CashAdvanceExtra
* @return {payments.CashAdvanceCustomerIdentification} 
*/
CashAdvanceExtra.prototype.getCashAdvanceCustomerIdentification = function() {
  return this.cashAdvanceCustomerIdentification;
};

/**
* @memberof payments.CashAdvanceExtra
* @private
*/
CashAdvanceExtra.prototype.getMetaInfo = function(fieldName) {
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

CashAdvanceExtra.prototype.toString = function() {
  return JSON.stringify(this);
};

CashAdvanceExtra._meta_ =  {fields:  {}};
CashAdvanceExtra._meta_._class_ =  CashAdvanceExtra;
CashAdvanceExtra._meta_.fields["cashAdvanceSerialNum"] = {};
CashAdvanceExtra._meta_.fields["cashAdvanceSerialNum"].type = String;
CashAdvanceExtra._meta_.fields["cashAdvanceCustomerIdentification"] = {};
CashAdvanceExtra._meta_.fields["cashAdvanceCustomerIdentification"].type = payments_CashAdvanceCustomerIdentification;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CashAdvanceExtra;
}
