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
var SignatureRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = SignatureRequest;
  this.acknowledgementMessage = undefined;
};

SignatureRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
SignatureRequest.prototype.constructor = SignatureRequest;

/**
* Set the field value
* @memberof remotepay.SignatureRequest
* @param {String} acknowledgementMessage 
*/
SignatureRequest.prototype.setAcknowledgementMessage = function(acknowledgementMessage) {
  this.acknowledgementMessage = acknowledgementMessage;
};

/**
* Get the field value
* @memberof remotepay.SignatureRequest
* @return {String} 
*/
SignatureRequest.prototype.getAcknowledgementMessage = function() {
  return this.acknowledgementMessage;
};

SignatureRequest._meta_ =  {fields:  {}};
SignatureRequest._meta_._class_ =  SignatureRequest;
SignatureRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
SignatureRequest._meta_.fields["acknowledgementMessage"] = {};
SignatureRequest._meta_.fields["acknowledgementMessage"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SignatureRequest;
}

