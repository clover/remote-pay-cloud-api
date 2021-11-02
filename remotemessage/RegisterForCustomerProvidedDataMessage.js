/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var loyalty_LoyaltyDataConfig = require("../loyalty/LoyaltyDataConfig");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RegisterForCustomerProvidedDataMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RegisterForCustomerProvidedDataMessage;
  this.setMethod(remotemessage_Method["REGISTER_FOR_CUST_DATA"]);
  this.configurations = undefined;
};

RegisterForCustomerProvidedDataMessage.prototype = Object.create(remotemessage_Message.prototype);
RegisterForCustomerProvidedDataMessage.prototype.constructor = RegisterForCustomerProvidedDataMessage;

/**
* Set the field value
* Configurations for the data we want to receive.
*
* @memberof remotemessage.RegisterForCustomerProvidedDataMessage
* @param {Array.<loyalty.LoyaltyDataConfig>} configurations An array of 
*/
RegisterForCustomerProvidedDataMessage.prototype.setConfigurations = function(configurations) {
  this.configurations = configurations;
};

/**
* Get the field value
* Configurations for the data we want to receive.
* @memberof remotemessage.RegisterForCustomerProvidedDataMessage
* @return {Array.<loyalty.LoyaltyDataConfig>} An array of 
*/
RegisterForCustomerProvidedDataMessage.prototype.getConfigurations = function() {
  return this.configurations;
};

RegisterForCustomerProvidedDataMessage._meta_ =  {fields:  {}};
RegisterForCustomerProvidedDataMessage._meta_._class_ =  RegisterForCustomerProvidedDataMessage;
RegisterForCustomerProvidedDataMessage._meta_._superMeta_ = remotemessage_Message._meta_;
RegisterForCustomerProvidedDataMessage._meta_.fields["configurations"] = {};
RegisterForCustomerProvidedDataMessage._meta_.fields["configurations"].type = Array;
RegisterForCustomerProvidedDataMessage._meta_.fields["configurations"].elementType = loyalty_LoyaltyDataConfig;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RegisterForCustomerProvidedDataMessage;
}
