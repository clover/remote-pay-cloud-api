/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof customers
*/
var Card = function() {
  this._class_ = Card;
  this.id = undefined;
  this.first6 = undefined;
  this.last4 = undefined;
  this.firstName = undefined;
  this.lastName = undefined;
  this.expirationDate = undefined;
  this.cardType = undefined;
  this.token = undefined;
};


/**
* Set the field value
* @memberof customers.Card
* @param {String} id 
*/
Card.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} first6 
*/
Card.prototype.setFirst6 = function(first6) {
  this.first6 = first6;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getFirst6 = function() {
  return this.first6;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} last4 
*/
Card.prototype.setLast4 = function(last4) {
  this.last4 = last4;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getLast4 = function() {
  return this.last4;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} firstName 
*/
Card.prototype.setFirstName = function(firstName) {
  this.firstName = firstName;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getFirstName = function() {
  return this.firstName;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} lastName 
*/
Card.prototype.setLastName = function(lastName) {
  this.lastName = lastName;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getLastName = function() {
  return this.lastName;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} expirationDate 
*/
Card.prototype.setExpirationDate = function(expirationDate) {
  this.expirationDate = expirationDate;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getExpirationDate = function() {
  return this.expirationDate;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} cardType 
*/
Card.prototype.setCardType = function(cardType) {
  this.cardType = cardType;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getCardType = function() {
  return this.cardType;
};

/**
* Set the field value
* @memberof customers.Card
* @param {String} token 
*/
Card.prototype.setToken = function(token) {
  this.token = token;
};

/**
* Get the field value
* @memberof customers.Card
* @return {String} 
*/
Card.prototype.getToken = function() {
  return this.token;
};

/**
* @memberof customers.Card
* @private
*/
Card.prototype.getMetaInfo = function(fieldName) {
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

Card.prototype.toString = function() {
  return JSON.stringify(this);
};

Card._meta_ =  {fields:  {}};
Card._meta_.fields["id"] = {};
Card._meta_.fields["id"].type = String;
Card._meta_.fields["first6"] = {};
Card._meta_.fields["first6"].type = String;
Card._meta_.fields["last4"] = {};
Card._meta_.fields["last4"].type = String;
Card._meta_.fields["firstName"] = {};
Card._meta_.fields["firstName"].type = String;
Card._meta_.fields["lastName"] = {};
Card._meta_.fields["lastName"].type = String;
Card._meta_.fields["expirationDate"] = {};
Card._meta_.fields["expirationDate"].type = String;
Card._meta_.fields["cardType"] = {};
Card._meta_.fields["cardType"].type = String;
Card._meta_.fields["token"] = {};
Card._meta_.fields["token"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Card;
}

