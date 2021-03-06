/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_ResponseCode = require("../remotepay/ResponseCode");

/**
* @constructor
* @memberof remotepay
*/
var ResponseCodeEnum = function() {
  this._class_ = ResponseCodeEnum;
  this.status = undefined;
};


/**
* Set the field value
* @memberof remotepay.ResponseCodeEnum
* @param {remotepay.ResponseCode} status 
*/
ResponseCodeEnum.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotepay.ResponseCodeEnum
* @return {remotepay.ResponseCode} 
*/
ResponseCodeEnum.prototype.getStatus = function() {
  return this.status;
};

/**
* @memberof remotepay.ResponseCodeEnum
* @private
*/
ResponseCodeEnum.prototype.getMetaInfo = function(fieldName) {
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

ResponseCodeEnum.prototype.toString = function() {
  return JSON.stringify(this);
};

ResponseCodeEnum._meta_ =  {fields:  {}};
ResponseCodeEnum._meta_._class_ =  ResponseCodeEnum;
ResponseCodeEnum._meta_.fields["status"] = {};
ResponseCodeEnum._meta_.fields["status"].type = remotepay_ResponseCode;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ResponseCodeEnum;
}

