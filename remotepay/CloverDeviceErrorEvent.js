/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_DeviceErrorEventCode = require("../remotepay/DeviceErrorEventCode");
var remotepay_ErrorType = require("../remotepay/ErrorType");

/**
* @constructor
* @memberof remotepay
*/
var CloverDeviceErrorEvent = function() {
  this._class_ = CloverDeviceErrorEvent;
  this.message = undefined;
  this.code = undefined;
  this.type = undefined;
};


/**
* Set the field value
* Description of the error.
*
* @memberof remotepay.CloverDeviceErrorEvent
* @param {String} message 
*/
CloverDeviceErrorEvent.prototype.setMessage = function(message) {
  this.message = message;
};

/**
* Get the field value
* Description of the error.
* @memberof remotepay.CloverDeviceErrorEvent
* @return {String} 
*/
CloverDeviceErrorEvent.prototype.getMessage = function() {
  return this.message;
};

/**
* Set the field value
* @memberof remotepay.CloverDeviceErrorEvent
* @param {remotepay.DeviceErrorEventCode} code 
*/
CloverDeviceErrorEvent.prototype.setCode = function(code) {
  this.code = code;
};

/**
* Get the field value
* @memberof remotepay.CloverDeviceErrorEvent
* @return {remotepay.DeviceErrorEventCode} 
*/
CloverDeviceErrorEvent.prototype.getCode = function() {
  return this.code;
};

/**
* Set the field value
* @memberof remotepay.CloverDeviceErrorEvent
* @param {remotepay.ErrorType} type 
*/
CloverDeviceErrorEvent.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* @memberof remotepay.CloverDeviceErrorEvent
* @return {remotepay.ErrorType} 
*/
CloverDeviceErrorEvent.prototype.getType = function() {
  return this.type;
};

/**
* @memberof remotepay.CloverDeviceErrorEvent
* @private
*/
CloverDeviceErrorEvent.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

CloverDeviceErrorEvent.prototype.toString = function() {
  return JSON.stringify(this);
};

CloverDeviceErrorEvent._meta_ =  {fields:  {}};
CloverDeviceErrorEvent._meta_.fields["message"] = {};
CloverDeviceErrorEvent._meta_.fields["message"].type = String;
CloverDeviceErrorEvent._meta_.fields["code"] = {};
CloverDeviceErrorEvent._meta_.fields["code"].type = remotepay_DeviceErrorEventCode;
CloverDeviceErrorEvent._meta_.fields["type"] = {};
CloverDeviceErrorEvent._meta_.fields["type"].type = remotepay_ErrorType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CloverDeviceErrorEvent;
}

