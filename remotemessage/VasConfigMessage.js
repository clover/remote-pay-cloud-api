/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var payments_VasConfig = require("../payments/VasConfig");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var VasConfigMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = VasConfigMessage;
  this.setMethod(remotemessage_Method["VAS_CONFIG"]);
  this.config = undefined;
};

VasConfigMessage.prototype = Object.create(remotemessage_Message.prototype);
VasConfigMessage.prototype.constructor = VasConfigMessage;

/**
* Set the field value
* A VAS configuration
*
* @memberof remotemessage.VasConfigMessage
* @param {payments.VasConfig} config 
*/
VasConfigMessage.prototype.setConfig = function(config) {
  this.config = config;
};

/**
* Get the field value
* A VAS configuration
* @memberof remotemessage.VasConfigMessage
* @return {payments.VasConfig} 
*/
VasConfigMessage.prototype.getConfig = function() {
  return this.config;
};

VasConfigMessage._meta_ =  {fields:  {}};
VasConfigMessage._meta_._class_ =  VasConfigMessage;
VasConfigMessage._meta_._superMeta_ = remotemessage_Message._meta_;
VasConfigMessage._meta_.fields["config"] = {};
VasConfigMessage._meta_.fields["config"].type = payments_VasConfig;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VasConfigMessage;
}

