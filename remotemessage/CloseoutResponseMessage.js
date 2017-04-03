/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var payments_Batch = require("../payments/Batch");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var CloseoutResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = CloseoutResponseMessage;
  this.setMethod(remotemessage_Method["CLOSEOUT_RESPONSE"]);
  this.reason = undefined;
  this.status = undefined;
  this.batch = undefined;
};

CloseoutResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
CloseoutResponseMessage.prototype.constructor = CloseoutResponseMessage;

/**
* Set the field value
* Detail information.
*
* @memberof remotemessage.CloseoutResponseMessage
* @param {String} reason 
*/
CloseoutResponseMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Detail information.
* @memberof remotemessage.CloseoutResponseMessage
* @return {String} 
*/
CloseoutResponseMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* The status of the request.
*
* @memberof remotemessage.CloseoutResponseMessage
* @param {remotemessage.ResultStatus} status 
*/
CloseoutResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* The status of the request.
* @memberof remotemessage.CloseoutResponseMessage
* @return {remotemessage.ResultStatus} 
*/
CloseoutResponseMessage.prototype.getStatus = function() {
  return this.status;
};

/**
* Set the field value
* The closeout info.
*
* @memberof remotemessage.CloseoutResponseMessage
* @param {payments.Batch} batch 
*/
CloseoutResponseMessage.prototype.setBatch = function(batch) {
  this.batch = batch;
};

/**
* Get the field value
* The closeout info.
* @memberof remotemessage.CloseoutResponseMessage
* @return {payments.Batch} 
*/
CloseoutResponseMessage.prototype.getBatch = function() {
  return this.batch;
};

CloseoutResponseMessage._meta_ =  {fields:  {}};
CloseoutResponseMessage._meta_._class_ =  CloseoutResponseMessage;
CloseoutResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
CloseoutResponseMessage._meta_.fields["reason"] = {};
CloseoutResponseMessage._meta_.fields["reason"].type = String;
CloseoutResponseMessage._meta_.fields["status"] = {};
CloseoutResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
CloseoutResponseMessage._meta_.fields["batch"] = {};
CloseoutResponseMessage._meta_.fields["batch"].type = payments_Batch;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CloseoutResponseMessage;
}

