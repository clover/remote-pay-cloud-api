/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof remotepay
*/
var DeviceInfo = function() {
  this._class_ = DeviceInfo;
  this.name = undefined;
  this.model = undefined;
  this.serial = undefined;
  this.supportsAcks = undefined;
  this.supportsVoidPaymentResponse = undefined;
};


/**
* Set the field value
* Name of the device (if entered)
*
* @memberof remotepay.DeviceInfo
* @param {String} name 
*/
DeviceInfo.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Name of the device (if entered)
* @memberof remotepay.DeviceInfo
* @return {String} 
*/
DeviceInfo.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* @memberof remotepay.DeviceInfo
* @param {String} model 
*/
DeviceInfo.prototype.setModel = function(model) {
  this.model = model;
};

/**
* Get the field value
* @memberof remotepay.DeviceInfo
* @return {String} 
*/
DeviceInfo.prototype.getModel = function() {
  return this.model;
};

/**
* Set the field value
* @memberof remotepay.DeviceInfo
* @param {String} serial 
*/
DeviceInfo.prototype.setSerial = function(serial) {
  this.serial = serial;
};

/**
* Get the field value
* @memberof remotepay.DeviceInfo
* @return {String} 
*/
DeviceInfo.prototype.getSerial = function() {
  return this.serial;
};

/**
* Set the field value
* If true, then the device supports acknowledgements.
*
* @memberof remotepay.DeviceInfo
* @param {Boolean} supportsAcks 
*/
DeviceInfo.prototype.setSupportsAcks = function(supportsAcks) {
  this.supportsAcks = supportsAcks;
};

/**
* Get the field value
* If true, then the device supports acknowledgements.
* @memberof remotepay.DeviceInfo
* @return {Boolean} 
*/
DeviceInfo.prototype.getSupportsAcks = function() {
  return this.supportsAcks;
};

/**
* Set the field value
* If true, then the device supports a void payment response.
*
* @memberof remotepay.DeviceInfo
* @param {Boolean} supportsVoidPaymentResponse 
*/
DeviceInfo.prototype.setSupportsVoidPaymentResponse = function(supportsVoidPaymentResponse) {
  this.supportsVoidPaymentResponse = supportsVoidPaymentResponse;
};

/**
* Get the field value
* If true, then the device supports a void payment response.
* @memberof remotepay.DeviceInfo
* @return {Boolean} 
*/
DeviceInfo.prototype.getSupportsVoidPaymentResponse = function() {
  return this.supportsVoidPaymentResponse;
};

/**
* @memberof remotepay.DeviceInfo
* @private
*/
DeviceInfo.prototype.getMetaInfo = function(fieldName) {
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

DeviceInfo.prototype.toString = function() {
  return JSON.stringify(this);
};

DeviceInfo._meta_ =  {fields:  {}};
DeviceInfo._meta_._class_ =  DeviceInfo;
DeviceInfo._meta_.fields["name"] = {};
DeviceInfo._meta_.fields["name"].type = String;
DeviceInfo._meta_.fields["model"] = {};
DeviceInfo._meta_.fields["model"].type = String;
DeviceInfo._meta_.fields["serial"] = {};
DeviceInfo._meta_.fields["serial"].type = String;
DeviceInfo._meta_.fields["supportsAcks"] = {};
DeviceInfo._meta_.fields["supportsAcks"].type = Boolean;
DeviceInfo._meta_.fields["supportsVoidPaymentResponse"] = {};
DeviceInfo._meta_.fields["supportsVoidPaymentResponse"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceInfo;
}

