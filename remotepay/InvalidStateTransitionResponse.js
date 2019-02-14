/**
 *
 * Manually edited see https://jira.dev.clover.com/browse/SEMI-3243
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var remotepay_DeviceEventState = require("../remotepay/DeviceEventState");
var remotepay_ExternalDeviceStateData = require("../remotepay/ExternalDeviceStateData");


/**
 * @constructor
 * @memberof remotepay
 */
var InvalidStateTransitionResponse = function() {
    remotepay_BaseResponse.call(this);
    this._superClass_ = remotepay_BaseResponse;
    this._class_ = InvalidStateTransitionResponse;
    this.requestedTransition = undefined;
    this.state = undefined;
    this.data = undefined;
};

InvalidStateTransitionResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
InvalidStateTransitionResponse.prototype.constructor = InvalidStateTransitionResponse;

/**
 * Set the field value
 * Unique identifier
 *
 * @memberof remotepay.InvalidStateTransitionResponse
 * @param {string} requestedTransition
 */
InvalidStateTransitionResponse.prototype.setRequestedTransition = function(requestedTransition) {
    this.requestedTransition = requestedTransition;
};

/**
 * Get the field value
 * Unique identifier
 * @memberof remotepay.InvalidStateTransitionResponse
 * @return {string}
 */
InvalidStateTransitionResponse.prototype.getRequestedTransition = function() {
    return this.requestedTransition;
};

InvalidStateTransitionResponse.prototype.setState = function(state) {
    this.state = state;
};

InvalidStateTransitionResponse.prototype.getState = function() {
    return this.state;
};

InvalidStateTransitionResponse.prototype.setData = function(data) {
    this.data = data;
};

InvalidStateTransitionResponse.prototype.getData = function() {
    return this.data;
};

/**
 * @memberof remotepay.InvalidStateTransitionResponse
 * @private
 */
InvalidStateTransitionResponse.prototype.getMetaInfo = function(fieldName) {
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

InvalidStateTransitionResponse.prototype.toString = function() {
    return JSON.stringify(this);
};

InvalidStateTransitionResponse._meta_ =  {fields:  {}};
InvalidStateTransitionResponse._meta_._class_ =  InvalidStateTransitionResponse;
InvalidStateTransitionResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
InvalidStateTransitionResponse._meta_.fields["requestedTransition"] = {};
InvalidStateTransitionResponse._meta_.fields["requestedTransition"].type = String;
InvalidStateTransitionResponse._meta_.fields["state"] = {};
InvalidStateTransitionResponse._meta_.fields["state"].type = remotepay_DeviceEventState;
InvalidStateTransitionResponse._meta_.fields["data"] = {};
InvalidStateTransitionResponse._meta_.fields["data"].type = remotepay_ExternalDeviceStateData;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = InvalidStateTransitionResponse;
}

