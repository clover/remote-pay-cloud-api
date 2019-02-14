
module.exports.customers = customers;
/**
* @namespace customers
*/
function customers() {}


customers.Address = require("./Address");
customers.Card = require("./Card");
customers.Customer = require("./Customer");
customers.CustomerAssociationRequest = require("./CustomerAssociationRequest");
customers.CustomerInfo = require("./CustomerInfo");
customers.CustomerMetadata = require("./CustomerMetadata");
customers.EmailAddress = require("./EmailAddress");
customers.IdentityDocument = require("./IdentityDocument");
customers.PhoneNumber = require("./PhoneNumber");
customers.RemoteCustomer = require("./RemoteCustomer");
customers.TokenType = require("./TokenType.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = customers;
}
    