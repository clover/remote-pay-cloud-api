/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var ImagePrintMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ImagePrintMessage;
  this.setMethod(remotemessage_Method["PRINT_IMAGE"]);
  this.png = undefined;
  this.urlString = undefined;
};

ImagePrintMessage.prototype = Object.create(remotemessage_Message.prototype);
ImagePrintMessage.prototype.constructor = ImagePrintMessage;

/**
* Set the field value
* An image serialized to a base64 encoded byte array
*
* @memberof remotemessage.ImagePrintMessage
* @param {Object} png Byte buffer
*/
ImagePrintMessage.prototype.setPng = function(png) {
  this.png = png;
};

/**
* Get the field value
* An image serialized to a base64 encoded byte array
* @memberof remotemessage.ImagePrintMessage
* @return {Object} Byte buffer
*/
ImagePrintMessage.prototype.getPng = function() {
  return this.png;
};

/**
* Set the field value
* The url of an image.  The url must be accessible from the Clover device.
*
* @memberof remotemessage.ImagePrintMessage
* @param {String} urlString 
*/
ImagePrintMessage.prototype.setUrlString = function(urlString) {
  this.urlString = urlString;
};

/**
* Get the field value
* The url of an image.  The url must be accessible from the Clover device.
* @memberof remotemessage.ImagePrintMessage
* @return {String} 
*/
ImagePrintMessage.prototype.getUrlString = function() {
  return this.urlString;
};

ImagePrintMessage._meta_ =  {fields:  {}};
ImagePrintMessage._meta_.fields["png"] = {};
ImagePrintMessage._meta_.fields["png"].type = Object;
ImagePrintMessage._meta_.fields["urlString"] = {};
ImagePrintMessage._meta_.fields["urlString"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ImagePrintMessage;
}

