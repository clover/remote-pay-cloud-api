/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof customers
*/
var Address = function() {
  this._class_ = Address;
  this.id = undefined;
  this.address1 = undefined;
  this.address2 = undefined;
  this.address3 = undefined;
  this.city = undefined;
  this.country = undefined;
  this.state = undefined;
  this.zip = undefined;
};


/**
* Set the field value
* @memberof customers.Address
* @param {String} id 
*/
Address.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} address1 
*/
Address.prototype.setAddress1 = function(address1) {
  this.address1 = address1;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getAddress1 = function() {
  return this.address1;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} address2 
*/
Address.prototype.setAddress2 = function(address2) {
  this.address2 = address2;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getAddress2 = function() {
  return this.address2;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} address3 
*/
Address.prototype.setAddress3 = function(address3) {
  this.address3 = address3;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getAddress3 = function() {
  return this.address3;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} city 
*/
Address.prototype.setCity = function(city) {
  this.city = city;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getCity = function() {
  return this.city;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} country 
*/
Address.prototype.setCountry = function(country) {
  this.country = country;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getCountry = function() {
  return this.country;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} state 
*/
Address.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getState = function() {
  return this.state;
};

/**
* Set the field value
* @memberof customers.Address
* @param {String} zip 
*/
Address.prototype.setZip = function(zip) {
  this.zip = zip;
};

/**
* Get the field value
* @memberof customers.Address
* @return {String} 
*/
Address.prototype.getZip = function() {
  return this.zip;
};

/**
* @memberof customers.Address
* @private
*/
Address.prototype.getMetaInfo = function(fieldName) {
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

Address.prototype.toString = function() {
  return JSON.stringify(this);
};

Address._meta_ =  {fields:  {}};
Address._meta_.fields["id"] = {};
Address._meta_.fields["id"].type = String;
Address._meta_.fields["address1"] = {};
Address._meta_.fields["address1"].type = String;
Address._meta_.fields["address2"] = {};
Address._meta_.fields["address2"].type = String;
Address._meta_.fields["address3"] = {};
Address._meta_.fields["address3"].type = String;
Address._meta_.fields["city"] = {};
Address._meta_.fields["city"].type = String;
Address._meta_.fields["country"] = {};
Address._meta_.fields["country"].type = String;
Address._meta_.fields["state"] = {};
Address._meta_.fields["state"].type = String;
Address._meta_.fields["zip"] = {};
Address._meta_.fields["zip"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Address;
}

