/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
Type of additional charge. INTERAC is deprecated, use INTERAC_V2
* @memberof payments
* @enum {string}
*/
var AdditionalChargeType = {
  INTERAC : "INTERAC",
  CREDIT_SURCHARGE : "CREDIT_SURCHARGE",
  CONVENIENCE_FEE : "CONVENIENCE_FEE",
  INTERAC_V2 : "INTERAC_V2"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AdditionalChargeType;
}
