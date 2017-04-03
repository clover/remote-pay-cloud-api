/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_ResultStatus = require("../remotepay/ResultStatus");

/**
* @constructor
* @memberof remotepay
*/
var ResultStatusEnum = function() {
  this._class_ = ResultStatusEnum;
  this.status = undefined;
};


/**
* Set the field value
* @memberof remotepay.ResultStatusEnum
* @param {remotepay.ResultStatus} status 
*/
ResultStatusEnum.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotepay.ResultStatusEnum
* @return {remotepay.ResultStatus} 
*/
ResultStatusEnum.prototype.getStatus = function() {
  return this.status;
};

/**
* @memberof remotepay.ResultStatusEnum
* @private
*/
ResultStatusEnum.prototype.getMetaInfo = function(fieldName) {
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

ResultStatusEnum.prototype.toString = function() {
  return JSON.stringify(this);
};

ResultStatusEnum._meta_ =  {fields:  {}};
ResultStatusEnum._meta_._class_ =  ResultStatusEnum;
ResultStatusEnum._meta_.fields["status"] = {};
ResultStatusEnum._meta_.fields["status"].type = remotepay_ResultStatus;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ResultStatusEnum;
}

