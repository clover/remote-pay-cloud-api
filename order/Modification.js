/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");
var inventory_Modifier = require("../inventory/Modifier");

/** Snapshot of a line item modifier at the time that the order was placed. */
/**
* @constructor
* @memberof order
*/
var Modification = function() {
  this._class_ = Modification;
  this.id = undefined;
  this.lineItemRef = undefined;
  this.name = undefined;
  this.alternateName = undefined;
  this.amount = undefined;
  this.modifier = undefined;
};


/**
* Set the field value
* @memberof order.Modification
* @param {String} id 
*/
Modification.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof order.Modification
* @return {String} 
*/
Modification.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The line item with which the modification is associated
*
* @memberof order.Modification
* @param {base.Reference} lineItemRef 
*/
Modification.prototype.setLineItemRef = function(lineItemRef) {
  this.lineItemRef = lineItemRef;
};

/**
* Get the field value
* The line item with which the modification is associated
* @memberof order.Modification
* @return {base.Reference} 
*/
Modification.prototype.getLineItemRef = function() {
  return this.lineItemRef;
};

/**
* Set the field value
* the name of the modifier when it was applied
*
* @memberof order.Modification
* @param {String} name 
*/
Modification.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* the name of the modifier when it was applied
* @memberof order.Modification
* @return {String} 
*/
Modification.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* @memberof order.Modification
* @param {String} alternateName 
*/
Modification.prototype.setAlternateName = function(alternateName) {
  this.alternateName = alternateName;
};

/**
* Get the field value
* @memberof order.Modification
* @return {String} 
*/
Modification.prototype.getAlternateName = function() {
  return this.alternateName;
};

/**
* Set the field value
* the additional cost of the modifier when it was applied
*
* @memberof order.Modification
* @param {Number} amount must be a long integer
*/
Modification.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* the additional cost of the modifier when it was applied
* @memberof order.Modification
* @return {Number} must be a long integer
*/
Modification.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* The modifier object.  Values from the Modifier are copied to the Modification at the time that the order is placed.  Modifier values may change after the modification is created.
*
* @memberof order.Modification
* @param {inventory.Modifier} modifier 
*/
Modification.prototype.setModifier = function(modifier) {
  this.modifier = modifier;
};

/**
* Get the field value
* The modifier object.  Values from the Modifier are copied to the Modification at the time that the order is placed.  Modifier values may change after the modification is created.
* @memberof order.Modification
* @return {inventory.Modifier} 
*/
Modification.prototype.getModifier = function() {
  return this.modifier;
};

/**
* @memberof order.Modification
* @private
*/
Modification.prototype.getMetaInfo = function(fieldName) {
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

Modification.prototype.toString = function() {
  return JSON.stringify(this);
};

Modification._meta_ =  {fields:  {}};
Modification._meta_.fields["id"] = {};
Modification._meta_.fields["id"].type = String;
Modification._meta_.fields["lineItemRef"] = {};
Modification._meta_.fields["lineItemRef"].type = base_Reference;
Modification._meta_.fields["name"] = {};
Modification._meta_.fields["name"].type = String;
Modification._meta_.fields["alternateName"] = {};
Modification._meta_.fields["alternateName"].type = String;
Modification._meta_.fields["amount"] = {};
Modification._meta_.fields["amount"].type = Number;
Modification._meta_.fields["modifier"] = {};
Modification._meta_.fields["modifier"].type = inventory_Modifier;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Modification;
}

