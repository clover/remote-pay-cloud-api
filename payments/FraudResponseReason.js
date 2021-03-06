/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_FraudResponseAction = require("../payments/FraudResponseAction");

/**
* @constructor
* @memberof payments
*/
var FraudResponseReason = function() {
  this._class_ = FraudResponseReason;
  this.action = undefined;
  this.ruleTriggered = undefined;
  this.reason = undefined;
};


/**
* Set the field value
* @memberof payments.FraudResponseReason
* @param {payments.FraudResponseAction} action 
*/
FraudResponseReason.prototype.setAction = function(action) {
  this.action = action;
};

/**
* Get the field value
* @memberof payments.FraudResponseReason
* @return {payments.FraudResponseAction} 
*/
FraudResponseReason.prototype.getAction = function() {
  return this.action;
};

/**
* Set the field value
* Rule that triggered this action
*
* @memberof payments.FraudResponseReason
* @param {String} ruleTriggered 
*/
FraudResponseReason.prototype.setRuleTriggered = function(ruleTriggered) {
  this.ruleTriggered = ruleTriggered;
};

/**
* Get the field value
* Rule that triggered this action
* @memberof payments.FraudResponseReason
* @return {String} 
*/
FraudResponseReason.prototype.getRuleTriggered = function() {
  return this.ruleTriggered;
};

/**
* Set the field value
* Human readable reason associated with the rule
*
* @memberof payments.FraudResponseReason
* @param {String} reason 
*/
FraudResponseReason.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Human readable reason associated with the rule
* @memberof payments.FraudResponseReason
* @return {String} 
*/
FraudResponseReason.prototype.getReason = function() {
  return this.reason;
};

/**
* @memberof payments.FraudResponseReason
* @private
*/
FraudResponseReason.prototype.getMetaInfo = function(fieldName) {
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

FraudResponseReason.prototype.toString = function() {
  return JSON.stringify(this);
};

FraudResponseReason._meta_ =  {fields:  {}};
FraudResponseReason._meta_._class_ =  FraudResponseReason;
FraudResponseReason._meta_.fields["action"] = {};
FraudResponseReason._meta_.fields["action"].type = payments_FraudResponseAction;
FraudResponseReason._meta_.fields["ruleTriggered"] = {};
FraudResponseReason._meta_.fields["ruleTriggered"].type = String;
FraudResponseReason._meta_.fields["reason"] = {};
FraudResponseReason._meta_.fields["reason"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = FraudResponseReason;
}

