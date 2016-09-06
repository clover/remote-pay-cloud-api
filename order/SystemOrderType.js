/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof order
*/
var SystemOrderType = function() {
  this._class_ = SystemOrderType;
  this.id = undefined;
  this.labelKey = undefined;
  this.isQsr = undefined;
  this.isFsr = undefined;
  this.isRetail = undefined;
};


/**
* Set the field value
* Unqiue identifier
*
* @memberof order.SystemOrderType
* @param {String} id 
*/
SystemOrderType.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unqiue identifier
* @memberof order.SystemOrderType
* @return {String} 
*/
SystemOrderType.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Label Key
*
* @memberof order.SystemOrderType
* @param {String} labelKey 
*/
SystemOrderType.prototype.setLabelKey = function(labelKey) {
  this.labelKey = labelKey;
};

/**
* Get the field value
* Label Key
* @memberof order.SystemOrderType
* @return {String} 
*/
SystemOrderType.prototype.getLabelKey = function() {
  return this.labelKey;
};

/**
* Set the field value
* Is for quick service restraunts?
*
* @memberof order.SystemOrderType
* @param {Boolean} isQsr 
*/
SystemOrderType.prototype.setIsQsr = function(isQsr) {
  this.isQsr = isQsr;
};

/**
* Get the field value
* Is for quick service restraunts?
* @memberof order.SystemOrderType
* @return {Boolean} 
*/
SystemOrderType.prototype.getIsQsr = function() {
  return this.isQsr;
};

/**
* Set the field value
* Is for full service restraunts?
*
* @memberof order.SystemOrderType
* @param {Boolean} isFsr 
*/
SystemOrderType.prototype.setIsFsr = function(isFsr) {
  this.isFsr = isFsr;
};

/**
* Get the field value
* Is for full service restraunts?
* @memberof order.SystemOrderType
* @return {Boolean} 
*/
SystemOrderType.prototype.getIsFsr = function() {
  return this.isFsr;
};

/**
* Set the field value
* Is for retail stores?
*
* @memberof order.SystemOrderType
* @param {Boolean} isRetail 
*/
SystemOrderType.prototype.setIsRetail = function(isRetail) {
  this.isRetail = isRetail;
};

/**
* Get the field value
* Is for retail stores?
* @memberof order.SystemOrderType
* @return {Boolean} 
*/
SystemOrderType.prototype.getIsRetail = function() {
  return this.isRetail;
};

/**
* @memberof order.SystemOrderType
* @private
*/
SystemOrderType.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

SystemOrderType.prototype.toString = function() {
  return JSON.stringify(this);
};

SystemOrderType._meta_ =  {fields:  {}};
SystemOrderType._meta_.fields["id"] = {};
SystemOrderType._meta_.fields["id"].type = String;
SystemOrderType._meta_.fields["labelKey"] = {};
SystemOrderType._meta_.fields["labelKey"].type = String;
SystemOrderType._meta_.fields["isQsr"] = {};
SystemOrderType._meta_.fields["isQsr"].type = Boolean;
SystemOrderType._meta_.fields["isFsr"] = {};
SystemOrderType._meta_.fields["isFsr"].type = Boolean;
SystemOrderType._meta_.fields["isRetail"] = {};
SystemOrderType._meta_.fields["isRetail"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SystemOrderType;
}

