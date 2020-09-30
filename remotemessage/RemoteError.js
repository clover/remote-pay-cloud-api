/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/** Errors that are encountered that cannot be recovered from are passed using this class.  This is intended to be used to aid integrators and Clover support in troubleshooting systems integration with devices. */
/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RemoteError = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RemoteError;
  this.setMethod(remotemessage_Method["REMOTE_ERROR"]);
  this.errorDetail = undefined;
  this.errorMessage = undefined;
  this.errorCode = undefined;
};

RemoteError.prototype = Object.create(remotemessage_Message.prototype);
RemoteError.prototype.constructor = RemoteError;

/**
* Set the field value
* Detailed information on the error.  This is engineering information for troubleshooting.
*
* @memberof remotemessage.RemoteError
* @param {String|Null} errorDetail 
*/
RemoteError.prototype.setErrorDetail = function(errorDetail) {
  this.errorDetail = errorDetail;
};

/**
* Get the field value
* Detailed information on the error.  This is engineering information for troubleshooting.
* @memberof remotemessage.RemoteError
* @return {String|Null} 
*/
RemoteError.prototype.getErrorDetail = function() {
  return this.errorDetail;
};

/**
* Set the field value
* A concise description of the error (fixme: the value 13 is suspicious)
*
* @memberof remotemessage.RemoteError
* @param {String} errorMessage 
*/
RemoteError.prototype.setErrorMessage = function(errorMessage) {
  this.errorMessage = errorMessage;
};

/**
* Get the field value
* A concise description of the error (fixme: the value 13 is suspicious)
* @memberof remotemessage.RemoteError
* @return {String} 
*/
RemoteError.prototype.getErrorMessage = function() {
  return this.errorMessage;
};

/**
* Set the field value
* If available, the code for the error encountered.
*
* @memberof remotemessage.RemoteError
* @param {Number|Null} errorCode must be a long integer, 
*/
RemoteError.prototype.setErrorCode = function(errorCode) {
  this.errorCode = errorCode;
};

/**
* Get the field value
* If available, the code for the error encountered.
* @memberof remotemessage.RemoteError
* @return {Number|Null} must be a long integer, 
*/
RemoteError.prototype.getErrorCode = function() {
  return this.errorCode;
};

RemoteError._meta_ =  {fields:  {}};
RemoteError._meta_._class_ =  RemoteError;
RemoteError._meta_._superMeta_ = remotemessage_Message._meta_;
RemoteError._meta_.fields["errorDetail"] = {};
RemoteError._meta_.fields["errorDetail"].type = String;
RemoteError._meta_.fields["errorMessage"] = {};
RemoteError._meta_.fields["errorMessage"].type = String;
RemoteError._meta_.fields["errorCode"] = {};
RemoteError._meta_.fields["errorCode"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RemoteError;
}

