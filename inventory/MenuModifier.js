/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof inventory
*/
var MenuModifier = function() {
  this._class_ = MenuModifier;
  this.id = undefined;
  this.modifier = undefined;
  this.merchantRef = undefined;
  this.price = undefined;
  this.name = undefined;
  this.description = undefined;
  this.imageFilename = undefined;
  this.enabled = undefined;
  this.createdTime = undefined;
  this.modifiedTime = undefined;
  this.deletedTime = undefined;
};


/**
* Set the field value
* Modifier id
*
* @memberof inventory.MenuModifier
* @param {String} id 
*/
MenuModifier.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Modifier id
* @memberof inventory.MenuModifier
* @return {String} 
*/
MenuModifier.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Reference to the modifier
*
* @memberof inventory.MenuModifier
* @param {base.Reference} modifier 
*/
MenuModifier.prototype.setModifier = function(modifier) {
  this.modifier = modifier;
};

/**
* Get the field value
* Reference to the modifier
* @memberof inventory.MenuModifier
* @return {base.Reference} 
*/
MenuModifier.prototype.getModifier = function() {
  return this.modifier;
};

/**
* Set the field value
* Reference to the merchant that created the item
*
* @memberof inventory.MenuModifier
* @param {base.Reference} merchantRef 
*/
MenuModifier.prototype.setMerchantRef = function(merchantRef) {
  this.merchantRef = merchantRef;
};

/**
* Get the field value
* Reference to the merchant that created the item
* @memberof inventory.MenuModifier
* @return {base.Reference} 
*/
MenuModifier.prototype.getMerchantRef = function() {
  return this.merchantRef;
};

/**
* Set the field value
* Modifier price
*
* @memberof inventory.MenuModifier
* @param {Number} price must be a long integer
*/
MenuModifier.prototype.setPrice = function(price) {
  this.price = price;
};

/**
* Get the field value
* Modifier price
* @memberof inventory.MenuModifier
* @return {Number} must be a long integer
*/
MenuModifier.prototype.getPrice = function() {
  return this.price;
};

/**
* Set the field value
* Customer facing modifier name
*
* @memberof inventory.MenuModifier
* @param {String} name 
*/
MenuModifier.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Customer facing modifier name
* @memberof inventory.MenuModifier
* @return {String} 
*/
MenuModifier.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Modifier description
*
* @memberof inventory.MenuModifier
* @param {String} description 
*/
MenuModifier.prototype.setDescription = function(description) {
  this.description = description;
};

/**
* Get the field value
* Modifier description
* @memberof inventory.MenuModifier
* @return {String} 
*/
MenuModifier.prototype.getDescription = function() {
  return this.description;
};

/**
* Set the field value
* Modifier image file path
*
* @memberof inventory.MenuModifier
* @param {String} imageFilename 
*/
MenuModifier.prototype.setImageFilename = function(imageFilename) {
  this.imageFilename = imageFilename;
};

/**
* Get the field value
* Modifier image file path
* @memberof inventory.MenuModifier
* @return {String} 
*/
MenuModifier.prototype.getImageFilename = function() {
  return this.imageFilename;
};

/**
* Set the field value
* Modifier enabled for menu
*
* @memberof inventory.MenuModifier
* @param {Boolean} enabled 
*/
MenuModifier.prototype.setEnabled = function(enabled) {
  this.enabled = enabled;
};

/**
* Get the field value
* Modifier enabled for menu
* @memberof inventory.MenuModifier
* @return {Boolean} 
*/
MenuModifier.prototype.getEnabled = function() {
  return this.enabled;
};

/**
* Set the field value
* Timestamp when the menu modifier was created
*
* @memberof inventory.MenuModifier
* @param {Number} createdTime must be a long integer
*/
MenuModifier.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Timestamp when the menu modifier was created
* @memberof inventory.MenuModifier
* @return {Number} must be a long integer
*/
MenuModifier.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* Timestamp when the menu modifier was last modified
*
* @memberof inventory.MenuModifier
* @param {Number} modifiedTime must be a long integer
*/
MenuModifier.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Timestamp when the menu modifier was last modified
* @memberof inventory.MenuModifier
* @return {Number} must be a long integer
*/
MenuModifier.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* Timestamp when menu modifier was last deleted
*
* @memberof inventory.MenuModifier
* @param {Number} deletedTime must be a long integer
*/
MenuModifier.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Timestamp when menu modifier was last deleted
* @memberof inventory.MenuModifier
* @return {Number} must be a long integer
*/
MenuModifier.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* @memberof inventory.MenuModifier
* @private
*/
MenuModifier.prototype.getMetaInfo = function(fieldName) {
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

MenuModifier.prototype.toString = function() {
  return JSON.stringify(this);
};

MenuModifier._meta_ =  {fields:  {}};
MenuModifier._meta_._class_ =  MenuModifier;
MenuModifier._meta_.fields["id"] = {};
MenuModifier._meta_.fields["id"].type = String;
MenuModifier._meta_.fields["modifier"] = {};
MenuModifier._meta_.fields["modifier"].type = base_Reference;
MenuModifier._meta_.fields["merchantRef"] = {};
MenuModifier._meta_.fields["merchantRef"].type = base_Reference;
MenuModifier._meta_.fields["price"] = {};
MenuModifier._meta_.fields["price"].type = Number;
MenuModifier._meta_.fields["name"] = {};
MenuModifier._meta_.fields["name"].type = String;
MenuModifier._meta_.fields["description"] = {};
MenuModifier._meta_.fields["description"].type = String;
MenuModifier._meta_.fields["imageFilename"] = {};
MenuModifier._meta_.fields["imageFilename"].type = String;
MenuModifier._meta_.fields["enabled"] = {};
MenuModifier._meta_.fields["enabled"].type = Boolean;
MenuModifier._meta_.fields["createdTime"] = {};
MenuModifier._meta_.fields["createdTime"].type = Number;
MenuModifier._meta_.fields["modifiedTime"] = {};
MenuModifier._meta_.fields["modifiedTime"].type = Number;
MenuModifier._meta_.fields["deletedTime"] = {};
MenuModifier._meta_.fields["deletedTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = MenuModifier;
}

