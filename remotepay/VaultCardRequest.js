/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");

/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var VaultCardRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = VaultCardRequest;
  this.cardEntryMethods = undefined;
};

VaultCardRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
VaultCardRequest.prototype.constructor = VaultCardRequest;

/**
* Set the field value
* Allowed entry methods
*
* @memberof remotepay.VaultCardRequest
* @param {Number|Null} cardEntryMethods must be an integer, 
*/
VaultCardRequest.prototype.setCardEntryMethods = function(cardEntryMethods) {
  this.cardEntryMethods = cardEntryMethods;
};

/**
* Get the field value
* Allowed entry methods
* @memberof remotepay.VaultCardRequest
* @return {Number|Null} must be an integer, 
*/
VaultCardRequest.prototype.getCardEntryMethods = function() {
  return this.cardEntryMethods;
};

VaultCardRequest._meta_ =  {fields:  {}};
VaultCardRequest._meta_._class_ =  VaultCardRequest;
VaultCardRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
VaultCardRequest._meta_.fields["cardEntryMethods"] = {};
VaultCardRequest._meta_.fields["cardEntryMethods"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VaultCardRequest;
}

