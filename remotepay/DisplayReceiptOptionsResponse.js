/**
 *
 * Manually edited see https://jira.dev.clover.com/browse/SSDK-506
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var remotepay_ResultStatus = require("../remotepay/ResultStatus");


/**
 * @constructor
 * @memberof remotepay
 */
var DisplayReceiptOptionsResponse = function() {
    remotepay_BaseResponse.call(this);
    this._superClass_ = remotepay_BaseResponse;
    this._class_ = DisplayReceiptOptionsResponse;
    this.resultStatus = undefined;
};

DisplayReceiptOptionsResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
DisplayReceiptOptionsResponse.prototype.constructor = DisplayReceiptOptionsResponse;

/**
 * Set the field value
 * Unique identifier
 *
 * @memberof remotepay.DisplayReceiptOptionsResponse
 * @param {ResultStatus} resultStatus
 */
DisplayReceiptOptionsResponse.prototype.setResultStatus = function(resultStatus) {
    this.resultStatus = resultStatus;
};

/**
 * Get the field value
 * Unique identifier
 * @memberof remotepay.DisplayReceiptOptionsResponse
 * @return {ResultStatus}
 */
DisplayReceiptOptionsResponse.prototype.getResultStatus = function() {
    return this.resultStatus;
};

/**
 * @memberof remotepay.DisplayReceiptOptionsResponse
 * @private
 */
DisplayReceiptOptionsResponse.prototype.getMetaInfo = function(fieldName) {
    var curclass = this._class_;
    do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
            return fieldMetaInfo;
        }
        if(curclass._meta_._superMeta_) {
            curclass = curclass._meta_._superMeta_._class_;
        } else {
            curclass = null;
        }
    } while(curclass);
    return null;
};

DisplayReceiptOptionsResponse.prototype.toString = function() {
    return JSON.stringify(this);
};

DisplayReceiptOptionsResponse._meta_ =  {fields:  {}};
DisplayReceiptOptionsResponse._meta_._class_ =  DisplayReceiptOptionsResponse;
DisplayReceiptOptionsResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
DisplayReceiptOptionsResponse._meta_.fields["resultStatus"] = {};
DisplayReceiptOptionsResponse._meta_.fields["resultStatus"].type = remotepay_ResultStatus;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = DisplayReceiptOptionsResponse;
}

