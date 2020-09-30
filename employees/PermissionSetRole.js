/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof employees
*/
var PermissionSetRole = function() {
  this._class_ = PermissionSetRole;
  this.id = undefined;
  this.role = undefined;
  this.permissionSet = undefined;
};


/**
* Set the field value
* Not a normal Clover ID
*
* @memberof employees.PermissionSetRole
* @param {String} id 
*/
PermissionSetRole.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Not a normal Clover ID
* @memberof employees.PermissionSetRole
* @return {String} 
*/
PermissionSetRole.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The role
*
* @memberof employees.PermissionSetRole
* @param {base.Reference} role 
*/
PermissionSetRole.prototype.setRole = function(role) {
  this.role = role;
};

/**
* Get the field value
* The role
* @memberof employees.PermissionSetRole
* @return {base.Reference} 
*/
PermissionSetRole.prototype.getRole = function() {
  return this.role;
};

/**
* Set the field value
* The role
*
* @memberof employees.PermissionSetRole
* @param {base.Reference} permissionSet 
*/
PermissionSetRole.prototype.setPermissionSet = function(permissionSet) {
  this.permissionSet = permissionSet;
};

/**
* Get the field value
* The role
* @memberof employees.PermissionSetRole
* @return {base.Reference} 
*/
PermissionSetRole.prototype.getPermissionSet = function() {
  return this.permissionSet;
};

/**
* @memberof employees.PermissionSetRole
* @private
*/
PermissionSetRole.prototype.getMetaInfo = function(fieldName) {
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

PermissionSetRole.prototype.toString = function() {
  return JSON.stringify(this);
};

PermissionSetRole._meta_ =  {fields:  {}};
PermissionSetRole._meta_._class_ =  PermissionSetRole;
PermissionSetRole._meta_.fields["id"] = {};
PermissionSetRole._meta_.fields["id"].type = String;
PermissionSetRole._meta_.fields["role"] = {};
PermissionSetRole._meta_.fields["role"].type = base_Reference;
PermissionSetRole._meta_.fields["permissionSet"] = {};
PermissionSetRole._meta_.fields["permissionSet"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PermissionSetRole;
}

