/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var base_PendingPaymentEntry = require("../base/PendingPaymentEntry");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RetrievePendingPaymentsResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RetrievePendingPaymentsResponseMessage;
  this.setMethod(remotemessage_Method["RETRIEVE_PENDING_PAYMENTS_RESPONSE"]);
  this.status = undefined;
  this.pendingPaymentEntries = undefined;
};

RetrievePendingPaymentsResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
RetrievePendingPaymentsResponseMessage.prototype.constructor = RetrievePendingPaymentsResponseMessage;

/**
* Set the field value
* The status of the result
*
* @memberof remotemessage.RetrievePendingPaymentsResponseMessage
* @param {remotemessage.ResultStatus} status 
*/
RetrievePendingPaymentsResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* The status of the result
* @memberof remotemessage.RetrievePendingPaymentsResponseMessage
* @return {remotemessage.ResultStatus} 
*/
RetrievePendingPaymentsResponseMessage.prototype.getStatus = function() {
  return this.status;
};

/**
* Set the field value
* The pending payments.
*
* @memberof remotemessage.RetrievePendingPaymentsResponseMessage
* @param {Array.<base.PendingPaymentEntry>} pendingPaymentEntries An array of 
*/
RetrievePendingPaymentsResponseMessage.prototype.setPendingPaymentEntries = function(pendingPaymentEntries) {
  this.pendingPaymentEntries = pendingPaymentEntries;
};

/**
* Get the field value
* The pending payments.
* @memberof remotemessage.RetrievePendingPaymentsResponseMessage
* @return {Array.<base.PendingPaymentEntry>} An array of 
*/
RetrievePendingPaymentsResponseMessage.prototype.getPendingPaymentEntries = function() {
  return this.pendingPaymentEntries;
};

RetrievePendingPaymentsResponseMessage._meta_ =  {fields:  {}};
RetrievePendingPaymentsResponseMessage._meta_._class_ =  RetrievePendingPaymentsResponseMessage;
RetrievePendingPaymentsResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
RetrievePendingPaymentsResponseMessage._meta_.fields["status"] = {};
RetrievePendingPaymentsResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
RetrievePendingPaymentsResponseMessage._meta_.fields["pendingPaymentEntries"] = {};
RetrievePendingPaymentsResponseMessage._meta_.fields["pendingPaymentEntries"].type = Array;
RetrievePendingPaymentsResponseMessage._meta_.fields["pendingPaymentEntries"].elementType = base_PendingPaymentEntry;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrievePendingPaymentsResponseMessage;
}

