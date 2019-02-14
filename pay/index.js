
module.exports.pay = pay;
/**
* @namespace pay
*/
function pay() {}


pay.CardFunction = require("./CardFunction");
pay.ErrorCode = require("./ErrorCode");
pay.GwTxResult = require("./GwTxResult");
pay.PaymentRequestCardDetails = require("./PaymentRequestCardDetails");
pay.ServiceCode1 = require("./ServiceCode1");
pay.ServiceCode2 = require("./ServiceCode2");
pay.ServiceCode3 = require("./ServiceCode3");
pay.TransactionData = require("./TransactionData");
pay.TxResult = require("./TxResult.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = pay;
}
    