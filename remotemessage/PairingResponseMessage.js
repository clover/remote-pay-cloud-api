/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_PairingRequestMessage = require("../remotemessage/PairingRequestMessage");
var remotemessage_PairingState = require("../remotemessage/PairingState");

/**
* @constructor
* @augments remotemessage.PairingRequestMessage
* @memberof remotemessage
*/
var PairingResponseMessage = function() {
  remotemessage_PairingRequestMessage.call(this);
  this._superClass_ = remotemessage_PairingRequestMessage;
  this._class_ = PairingResponseMessage;
  this.setMethod(remotemessage_Method["PAIRING_RESPONSE"]);
  this.pairingState = undefined;
  this.millis = undefined;
};

PairingResponseMessage.prototype = Object.create(remotemessage_PairingRequestMessage.prototype);
PairingResponseMessage.prototype.constructor = PairingResponseMessage;

/**
* Set the field value
* The state of the pairing flow
*
* @memberof remotemessage.PairingResponseMessage
* @param {remotemessage.PairingState} pairingState 
*/
PairingResponseMessage.prototype.setPairingState = function(pairingState) {
  this.pairingState = pairingState;
};

/**
* Get the field value
* The state of the pairing flow
* @memberof remotemessage.PairingResponseMessage
* @return {remotemessage.PairingState} 
*/
PairingResponseMessage.prototype.getPairingState = function() {
  return this.pairingState;
};

/**
* Set the field value
* A timestamp of when the authentication token was obtained
*
* @memberof remotemessage.PairingResponseMessage
* @param {Number} millis must be a long integer
*/
PairingResponseMessage.prototype.setMillis = function(millis) {
  this.millis = millis;
};

/**
* Get the field value
* A timestamp of when the authentication token was obtained
* @memberof remotemessage.PairingResponseMessage
* @return {Number} must be a long integer
*/
PairingResponseMessage.prototype.getMillis = function() {
  return this.millis;
};

PairingResponseMessage._meta_ =  {fields:  {}};
PairingResponseMessage._meta_._class_ =  PairingResponseMessage;
PairingResponseMessage._meta_._superMeta_ = remotemessage_PairingRequestMessage._meta_;
PairingResponseMessage._meta_.fields["pairingState"] = {};
PairingResponseMessage._meta_.fields["pairingState"].type = remotemessage_PairingState;
PairingResponseMessage._meta_.fields["millis"] = {};
PairingResponseMessage._meta_.fields["millis"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PairingResponseMessage;
}

