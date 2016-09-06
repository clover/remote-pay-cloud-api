/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof remotepay
*/
var Img = function() {
  this._class_ = Img;
  this.src = undefined;
  this.width = undefined;
  this.height = undefined;
};


/**
* Set the field value
* The url to the image if available
*
* @memberof remotepay.Img
* @param {String} src 
*/
Img.prototype.setSrc = function(src) {
  this.src = src;
};

/**
* Get the field value
* The url to the image if available
* @memberof remotepay.Img
* @return {String} 
*/
Img.prototype.getSrc = function() {
  return this.src;
};

/**
* Set the field value
* The width of the image if available
*
* @memberof remotepay.Img
* @param {Number} width must be a long integer
*/
Img.prototype.setWidth = function(width) {
  this.width = width;
};

/**
* Get the field value
* The width of the image if available
* @memberof remotepay.Img
* @return {Number} must be a long integer
*/
Img.prototype.getWidth = function() {
  return this.width;
};

/**
* Set the field value
* The height of the image if available
*
* @memberof remotepay.Img
* @param {Number} height must be a long integer
*/
Img.prototype.setHeight = function(height) {
  this.height = height;
};

/**
* Get the field value
* The height of the image if available
* @memberof remotepay.Img
* @return {Number} must be a long integer
*/
Img.prototype.getHeight = function() {
  return this.height;
};

/**
* @memberof remotepay.Img
* @private
*/
Img.prototype.getMetaInfo = function(fieldName) {
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

Img.prototype.toString = function() {
  return JSON.stringify(this);
};

Img._meta_ =  {fields:  {}};
Img._meta_.fields["src"] = {};
Img._meta_.fields["src"].type = String;
Img._meta_.fields["width"] = {};
Img._meta_.fields["width"].type = Number;
Img._meta_.fields["height"] = {};
Img._meta_.fields["height"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Img;
}

