/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var printer_Printer = require("../printer/Printer");
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
  this.externalPrintJobId = undefined;
  this.printer = undefined;
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

/**
* Set the field value
* External print job ID assigned to this request
*
* @memberof remotemessage.ImagePrintMessage
* @param {String} externalPrintJobId 
*/
ImagePrintMessage.prototype.setExternalPrintJobId = function(externalPrintJobId) {
  this.externalPrintJobId = externalPrintJobId;
};

/**
* Get the field value
* External print job ID assigned to this request
* @memberof remotemessage.ImagePrintMessage
* @return {String} 
*/
ImagePrintMessage.prototype.getExternalPrintJobId = function() {
  return this.externalPrintJobId;
};

/**
* Set the field value
* Printer to which the print job should be routed.
*
* @memberof remotemessage.ImagePrintMessage
* @param {printer.Printer} printer 
*/
ImagePrintMessage.prototype.setPrinter = function(printer) {
  this.printer = printer;
};

/**
* Get the field value
* Printer to which the print job should be routed.
* @memberof remotemessage.ImagePrintMessage
* @return {printer.Printer} 
*/
ImagePrintMessage.prototype.getPrinter = function() {
  return this.printer;
};

ImagePrintMessage._meta_ =  {fields:  {}};
ImagePrintMessage._meta_._class_ =  ImagePrintMessage;
ImagePrintMessage._meta_._superMeta_ = remotemessage_Message._meta_;
ImagePrintMessage._meta_.fields["png"] = {};
ImagePrintMessage._meta_.fields["png"].type = Object;
ImagePrintMessage._meta_.fields["urlString"] = {};
ImagePrintMessage._meta_.fields["urlString"].type = String;
ImagePrintMessage._meta_.fields["externalPrintJobId"] = {};
ImagePrintMessage._meta_.fields["externalPrintJobId"].type = String;
ImagePrintMessage._meta_.fields["printer"] = {};
ImagePrintMessage._meta_.fields["printer"].type = printer_Printer;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ImagePrintMessage;
}
