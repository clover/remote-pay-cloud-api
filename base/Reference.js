/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof base
*/
var Reference = function() {
  this._class_ = Reference;
  this.id = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof base.Reference
* @param {String} id 
*/
Reference.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof base.Reference
* @return {String} 
*/
Reference.prototype.getId = function() {
  return this.id;
};

/**
* @memberof base.Reference
* @private
*/
Reference.prototype.getMetaInfo = function(fieldName) {
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

Reference.prototype.toString = function() {
  return JSON.stringify(this);
};

Reference._meta_ =  {fields:  {}};
Reference._meta_._class_ =  Reference;
Reference._meta_.fields["id"] = {};
Reference._meta_.fields["id"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Reference;
}

