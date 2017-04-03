/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var PairingCodeMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = PairingCodeMessage;
  this.setMethod(remotemessage_Method["PAIRING_CODE"]);
  this.pairingCode = undefined;
};

PairingCodeMessage.prototype = Object.create(remotemessage_Message.prototype);
PairingCodeMessage.prototype.constructor = PairingCodeMessage;

/**
* Set the field value
* The pairing code to display.
*
* @memberof remotemessage.PairingCodeMessage
* @param {String} pairingCode 
*/
PairingCodeMessage.prototype.setPairingCode = function(pairingCode) {
  this.pairingCode = pairingCode;
};

/**
* Get the field value
* The pairing code to display.
* @memberof remotemessage.PairingCodeMessage
* @return {String} 
*/
PairingCodeMessage.prototype.getPairingCode = function() {
  return this.pairingCode;
};

PairingCodeMessage._meta_ =  {fields:  {}};
PairingCodeMessage._meta_._class_ =  PairingCodeMessage;
PairingCodeMessage._meta_._superMeta_ = remotemessage_Message._meta_;
PairingCodeMessage._meta_.fields["pairingCode"] = {};
PairingCodeMessage._meta_.fields["pairingCode"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PairingCodeMessage;
}

