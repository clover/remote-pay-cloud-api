/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var CustomActivityResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = CustomActivityResponse;
  this.payload = undefined;
  this.action = undefined;
};

CustomActivityResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
CustomActivityResponse.prototype.constructor = CustomActivityResponse;

/**
* Set the field value
* Response data for this activity
*
* @memberof remotepay.CustomActivityResponse
* @param {String} payload 
*/
CustomActivityResponse.prototype.setPayload = function(payload) {
  this.payload = payload;
};

/**
* Get the field value
* Response data for this activity
* @memberof remotepay.CustomActivityResponse
* @return {String} 
*/
CustomActivityResponse.prototype.getPayload = function() {
  return this.payload;
};

/**
* Set the field value
* The name of the action for this activity
*
* @memberof remotepay.CustomActivityResponse
* @param {String} action 
*/
CustomActivityResponse.prototype.setAction = function(action) {
  this.action = action;
};

/**
* Get the field value
* The name of the action for this activity
* @memberof remotepay.CustomActivityResponse
* @return {String} 
*/
CustomActivityResponse.prototype.getAction = function() {
  return this.action;
};

CustomActivityResponse._meta_ =  {fields:  {}};
CustomActivityResponse._meta_._class_ =  CustomActivityResponse;
CustomActivityResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
CustomActivityResponse._meta_.fields["payload"] = {};
CustomActivityResponse._meta_.fields["payload"].type = String;
CustomActivityResponse._meta_.fields["action"] = {};
CustomActivityResponse._meta_.fields["action"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CustomActivityResponse;
}

