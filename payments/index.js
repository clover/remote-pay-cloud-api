
module.exports.payments = payments;
/**
* @namespace payments
*/
function payments() {}


payments.AVSResult = require("./AVSResult");
payments.AccountType = require("./AccountType");
payments.AdditionalChargeAmount = require("./AdditionalChargeAmount");
payments.AdditionalChargeType = require("./AdditionalChargeType");
payments.AssociatedPayment = require("./AssociatedPayment");
payments.AssociatedPayments = require("./AssociatedPayments");
payments.AssociationType = require("./AssociationType");
payments.Authorization = require("./Authorization");
payments.Batch = require("./Batch");
payments.BatchCardTotal = require("./BatchCardTotal");
payments.BatchDetail = require("./BatchDetail");
payments.BatchRequest = require("./BatchRequest");
payments.BatchState = require("./BatchState");
payments.BatchTotalStats = require("./BatchTotalStats");
payments.BatchTotalType = require("./BatchTotalType");
payments.BatchTransactions = require("./BatchTransactions");
payments.BatchType = require("./BatchType");
payments.CVVResult = require("./CVVResult");
payments.CardEntryType = require("./CardEntryType");
payments.CardTransaction = require("./CardTransaction");
payments.CardTransactionState = require("./CardTransactionState");
payments.CardTransactionType = require("./CardTransactionType");
payments.CardType = require("./CardType");
payments.CardlessPaymentData = require("./CardlessPaymentData");
payments.CardlessPaymentDataType = require("./CardlessPaymentDataType");
payments.CardlessPaymentNetwork = require("./CardlessPaymentNetwork");
payments.CashAdvanceCustomerIdentification = require("./CashAdvanceCustomerIdentification");
payments.CashAdvanceExtra = require("./CashAdvanceExtra");
payments.Credit = require("./Credit");
payments.CreditRefund = require("./CreditRefund");
payments.CreditRefundResponse = require("./CreditRefundResponse");
payments.CreditRequest = require("./CreditRequest");
payments.CreditResponse = require("./CreditResponse");
payments.Currency = require("./Currency");
payments.CvmResult = require("./CvmResult");
payments.DCCInfo = require("./DCCInfo");
payments.DataEntryLocation = require("./DataEntryLocation");
payments.DeviceTotalStats = require("./DeviceTotalStats");
payments.DiscountApprover = require("./DiscountApprover");
payments.FailedBatchSettlement = require("./FailedBatchSettlement");
payments.GatewayTxState = require("./GatewayTxState");
payments.GatewayTxType = require("./GatewayTxType");
payments.GatewayTxs = require("./GatewayTxs");
payments.GermanInfo = require("./GermanInfo");
payments.GiftCard = require("./GiftCard");
payments.GiftCardResponse = require("./GiftCardResponse");
payments.GiftCardState = require("./GiftCardState");
payments.GiftCardTransaction = require("./GiftCardTransaction");
payments.IdType = require("./IdType");
payments.LineItemPayment = require("./LineItemPayment");
payments.Payment = require("./Payment");
payments.PaymentAttribute = require("./PaymentAttribute");
payments.PaymentResponse = require("./PaymentResponse");
payments.PaymentTaxRate = require("./PaymentTaxRate");
payments.Refund = require("./Refund");
payments.RefundRequest = require("./RefundRequest");
payments.RefundResponse = require("./RefundResponse");
payments.RegionalExtras = require("./RegionalExtras");
payments.Result = require("./Result");
payments.ReversalReason = require("./ReversalReason");
payments.SelectedService = require("./SelectedService");
payments.ServerTotalStats = require("./ServerTotalStats");
payments.ServiceChargeAmount = require("./ServiceChargeAmount");
payments.ServiceFeeRefundRequest = require("./ServiceFeeRefundRequest");
payments.ServiceFeeRequest = require("./ServiceFeeRequest");
payments.SignatureDisclaimer = require("./SignatureDisclaimer");
payments.Tag = require("./Tag");
payments.TaxableAmountRate = require("./TaxableAmountRate");
payments.TipMode = require("./TipMode");
payments.TokenRequest = require("./TokenRequest");
payments.TokenRequestType = require("./TokenRequestType");
payments.Transaction = require("./Transaction");
payments.TransactionInfo = require("./TransactionInfo");
payments.TransactionResult = require("./TransactionResult");
payments.TransactionSettings = require("./TransactionSettings");
payments.TxFormat = require("./TxFormat");
payments.TxType = require("./TxType");
payments.Type = require("./Type");
payments.VasConfig = require("./VasConfig");
payments.VasDataType = require("./VasDataType");
payments.VasDataTypeType = require("./VasDataTypeType");
payments.VasMode = require("./VasMode");
payments.VasPayload = require("./VasPayload");
payments.VasPayloadElement = require("./VasPayloadElement");
payments.VasPayloadResponse = require("./VasPayloadResponse");
payments.VasPayloadResponseType = require("./VasPayloadResponseType");
payments.VasProtocol = require("./VasProtocol");
payments.VasPushMode = require("./VasPushMode");
payments.VasResponseFormat = require("./VasResponseFormat");
payments.VasServiceProvider = require("./VasServiceProvider");
payments.VasSettings = require("./VasSettings");
payments.VaultedCard = require("./VaultedCard");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = payments;
}
    