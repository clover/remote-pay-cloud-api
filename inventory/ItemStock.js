/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/** The class is used to update the item stock. */
/**
* @constructor
* @memberof inventory
*/
var ItemStock = function() {
  this._class_ = ItemStock;
  this.item = undefined;
  this.stockCount = undefined;
  this.quantity = undefined;
};


/**
* Set the field value
* Reference to an item
*
* @memberof inventory.ItemStock
* @param {base.Reference} item 
*/
ItemStock.prototype.setItem = function(item) {
  this.item = item;
};

/**
* Get the field value
* Reference to an item
* @memberof inventory.ItemStock
* @return {base.Reference} 
*/
ItemStock.prototype.getItem = function() {
  return this.item;
};

/**
* Set the field value
* DEPRECATED: use quantity instead
*
* @memberof inventory.ItemStock
* @param {Null|Number} stockCount must be a long integer
*/
ItemStock.prototype.setStockCount = function(stockCount) {
  this.stockCount = stockCount;
};

/**
* Get the field value
* DEPRECATED: use quantity instead
* @memberof inventory.ItemStock
* @return {Null|Number} must be a long integer
*/
ItemStock.prototype.getStockCount = function() {
  return this.stockCount;
};

/**
* Set the field value
* Current count of this item in stock
*
* @memberof inventory.ItemStock
* @param {Number} quantity must be a double
*/
ItemStock.prototype.setQuantity = function(quantity) {
  this.quantity = quantity;
};

/**
* Get the field value
* Current count of this item in stock
* @memberof inventory.ItemStock
* @return {Number} must be a double
*/
ItemStock.prototype.getQuantity = function() {
  return this.quantity;
};

/**
* @memberof inventory.ItemStock
* @private
*/
ItemStock.prototype.getMetaInfo = function(fieldName) {
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

ItemStock.prototype.toString = function() {
  return JSON.stringify(this);
};

ItemStock._meta_ =  {fields:  {}};
ItemStock._meta_._class_ =  ItemStock;
ItemStock._meta_.fields["item"] = {};
ItemStock._meta_.fields["item"].type = base_Reference;
ItemStock._meta_.fields["stockCount"] = {};
ItemStock._meta_.fields["stockCount"].type = Number;
ItemStock._meta_.fields["quantity"] = {};
ItemStock._meta_.fields["quantity"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ItemStock;
}

