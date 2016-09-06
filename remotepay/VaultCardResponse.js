/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var VaultCardResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = VaultCardResponse;
  this.card = undefined;
};

VaultCardResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
VaultCardResponse.prototype.constructor = VaultCardResponse;

/**
* Set the field value
* The card that was vaulted.
*
* @memberof remotepay.VaultCardResponse
* @param {payments.VaultedCard} card 
*/
VaultCardResponse.prototype.setCard = function(card) {
  this.card = card;
};

/**
* Get the field value
* The card that was vaulted.
* @memberof remotepay.VaultCardResponse
* @return {payments.VaultedCard} 
*/
VaultCardResponse.prototype.getCard = function() {
  return this.card;
};

VaultCardResponse._meta_ =  {fields:  {}};
VaultCardResponse._meta_.fields["card"] = {};
VaultCardResponse._meta_.fields["card"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VaultCardResponse;
}

