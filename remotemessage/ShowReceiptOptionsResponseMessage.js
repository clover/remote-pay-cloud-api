/**
 * Manually edited
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var remotemessage_Message = require("../remotemessage/Message");

/**
 * @constructor
 * @augments remotemessage.Message
 * @memberof remotemessage
 */
var ShowReceiptOptionsResponseMessage = function() {
    remotemessage_Message.call(this);
    this._superClass_ = remotemessage_Message;
    this._class_ = ShowReceiptOptionsResponseMessage;
    this.setMethod(remotemessage_Method["SHOW_RECEIPT_OPTIONS_RESPONSE"]);
    this.status = undefined;
    this.reason = undefined;
};

ShowReceiptOptionsResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
ShowReceiptOptionsResponseMessage.prototype.constructor = ShowReceiptOptionsResponseMessage;

/**
 * Set the field value
 * May be populated when the operation fails.
 *
 * @memberof remotemessage.ShowReceiptOptionsResponseMessage
 * @param {String} reason
 */
ShowReceiptOptionsResponseMessage.prototype.setReason = function(reason) {
    this.reason = reason;
};

/**
 * Get the field value
 * May be populated when the operation fails.
 * @memberof remotemessage.ShowReceiptOptionsResponseMessage
 * @return {String}
 */
ShowReceiptOptionsResponseMessage.prototype.getReason = function() {
    return this.reason;
};

/**
 * Set the field value
 *
 * @memberof remotemessage.ShowReceiptOptionsResponseMessage
 * @param {remotemessage.ResultStatus} status
 */
ShowReceiptOptionsResponseMessage.prototype.setStatus = function(status) {
    this.status = status;
};

/**
 * Get the field value
 * @memberof remotemessage.ShowReceiptOptionsResponseMessage
 * @return {remotemessage.ResultStatus}
 */
ShowReceiptOptionsResponseMessage.prototype.getStatus = function() {
    return this.status;
};

ShowReceiptOptionsResponseMessage._meta_ =  {fields:  {}};
ShowReceiptOptionsResponseMessage._meta_._class_ =  ShowReceiptOptionsResponseMessage;
ShowReceiptOptionsResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
ShowReceiptOptionsResponseMessage._meta_.fields["status"] = {};
ShowReceiptOptionsResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
ShowReceiptOptionsResponseMessage._meta_.fields["reason"] = {};
ShowReceiptOptionsResponseMessage._meta_.fields["reason"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = ShowReceiptOptionsResponseMessage;
}

