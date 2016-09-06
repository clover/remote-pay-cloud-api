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
var CloseoutRequestMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = CloseoutRequestMessage;
  this.setMethod(remotemessage_Method["CLOSEOUT_REQUEST"]);
  this.allowOpenTabs = undefined;
  this.batchId = undefined;
};

CloseoutRequestMessage.prototype = Object.create(remotemessage_Message.prototype);
CloseoutRequestMessage.prototype.constructor = CloseoutRequestMessage;

/**
* Set the field value
* If true then open tabs can still be closed out.
*
* @memberof remotemessage.CloseoutRequestMessage
* @param {Boolean} allowOpenTabs 
*/
CloseoutRequestMessage.prototype.setAllowOpenTabs = function(allowOpenTabs) {
  this.allowOpenTabs = allowOpenTabs;
};

/**
* Get the field value
* If true then open tabs can still be closed out.
* @memberof remotemessage.CloseoutRequestMessage
* @return {Boolean} 
*/
CloseoutRequestMessage.prototype.getAllowOpenTabs = function() {
  return this.allowOpenTabs;
};

/**
* Set the field value
* Reserved for future use.  Specifies the batch to close.
*
* @memberof remotemessage.CloseoutRequestMessage
* @param {String} batchId 
*/
CloseoutRequestMessage.prototype.setBatchId = function(batchId) {
  this.batchId = batchId;
};

/**
* Get the field value
* Reserved for future use.  Specifies the batch to close.
* @memberof remotemessage.CloseoutRequestMessage
* @return {String} 
*/
CloseoutRequestMessage.prototype.getBatchId = function() {
  return this.batchId;
};

CloseoutRequestMessage._meta_ =  {fields:  {}};
CloseoutRequestMessage._meta_.fields["allowOpenTabs"] = {};
CloseoutRequestMessage._meta_.fields["allowOpenTabs"].type = Boolean;
CloseoutRequestMessage._meta_.fields["batchId"] = {};
CloseoutRequestMessage._meta_.fields["batchId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CloseoutRequestMessage;
}

