/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");

/** Request to open the cash drawer. */
/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var OpenCashDrawerRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = OpenCashDrawerRequest;
  this.reason = undefined;
  this.deviceId = undefined;
};

OpenCashDrawerRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
OpenCashDrawerRequest.prototype.constructor = OpenCashDrawerRequest;

/**
* Set the field value
* Why the drawer is being opened.
*
* @memberof remotepay.OpenCashDrawerRequest
* @param {String} reason 
*/
OpenCashDrawerRequest.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Why the drawer is being opened.
* @memberof remotepay.OpenCashDrawerRequest
* @return {String} 
*/
OpenCashDrawerRequest.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* The ID of the drawer or attached printer.
*
* @memberof remotepay.OpenCashDrawerRequest
* @param {String|Null} deviceId 
*/
OpenCashDrawerRequest.prototype.setDeviceId = function(deviceId) {
  this.deviceId = deviceId;
};

/**
* Get the field value
* The ID of the drawer or attached printer.
* @memberof remotepay.OpenCashDrawerRequest
* @return {String|Null} 
*/
OpenCashDrawerRequest.prototype.getDeviceId = function() {
  return this.deviceId;
};

OpenCashDrawerRequest._meta_ =  {fields:  {}};
OpenCashDrawerRequest._meta_._class_ =  OpenCashDrawerRequest;
OpenCashDrawerRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
OpenCashDrawerRequest._meta_.fields["reason"] = {};
OpenCashDrawerRequest._meta_.fields["reason"].type = String;
OpenCashDrawerRequest._meta_.fields["deviceId"] = {};
OpenCashDrawerRequest._meta_.fields["deviceId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OpenCashDrawerRequest;
}

