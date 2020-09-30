
module.exports.remotepay = remotepay;
/**
* @namespace remotepay
*/
function remotepay() {}


remotepay.ActivityMessage = require("./ActivityMessage");
remotepay.AuthRequest = require("./AuthRequest");
remotepay.AuthResponse = require("./AuthResponse");
remotepay.BaseRequest = require("./BaseRequest");
remotepay.BaseResponse = require("./BaseResponse");
remotepay.BaseTransactionRequest = require("./BaseTransactionRequest");
remotepay.CapturePreAuthRequest = require("./CapturePreAuthRequest");
remotepay.CapturePreAuthResponse = require("./CapturePreAuthResponse");
remotepay.CardInfoRequest = require("./CardInfoRequest");
remotepay.CardInfoResponse = require("./CardInfoResponse");
remotepay.CheckBalanceRequest = require("./CheckBalanceRequest");
remotepay.CheckBalanceResponse = require("./CheckBalanceResponse");
remotepay.CloseoutRequest = require("./CloseoutRequest");
remotepay.CloseoutResponse = require("./CloseoutResponse");
remotepay.CloverDeviceErrorEvent = require("./CloverDeviceErrorEvent");
remotepay.CloverDeviceEvent = require("./CloverDeviceEvent");
remotepay.ConfirmPaymentRequest = require("./ConfirmPaymentRequest");
remotepay.CustomActivityRequest = require("./CustomActivityRequest");
remotepay.CustomActivityResponse = require("./CustomActivityResponse");
remotepay.CustomerInfo = require("./CustomerInfo");
remotepay.CustomerProvidedDataEvent = require("./CustomerProvidedDataEvent");
remotepay.DataProviderConfig = require("./DataProviderConfig");
remotepay.DeviceErrorEventCode = require("./DeviceErrorEventCode");
remotepay.DeviceEventEnum = require("./DeviceEventEnum");
remotepay.DeviceEventState = require("./DeviceEventState");
remotepay.DeviceInfo = require("./DeviceInfo");
remotepay.DisplayReceiptOptionsRequest = require("./DisplayReceiptOptionsRequest");
remotepay.DisplayReceiptOptionsResponse = require("./DisplayReceiptOptionsResponse");
remotepay.ErrorType = require("./ErrorType");
remotepay.ExternalDeviceState = require("./ExternalDeviceState");
remotepay.ExternalDeviceStateData = require("./ExternalDeviceStateData");
remotepay.ExternalDeviceStateEnum = require("./ExternalDeviceStateEnum");
remotepay.ICloverConnector = require("./ICloverConnector");
remotepay.ICloverConnectorListener = require("./ICloverConnectorListener");
remotepay.Img = require("./Img");
remotepay.IncrementPreAuthRequest = require("./IncrementPreAuthRequest");
remotepay.IncrementPreAuthResponse = require("./IncrementPreAuthResponse");
remotepay.InputOption = require("./InputOption");
remotepay.InvalidStateTransitionResponse = require("./InvalidStateTransitionResponse");
remotepay.KeyPress = require("./KeyPress");
remotepay.KeyPressEnum = require("./KeyPressEnum");
remotepay.ManualRefundRequest = require("./ManualRefundRequest");
remotepay.ManualRefundResponse = require("./ManualRefundResponse");
remotepay.MerchantInfo = require("./MerchantInfo");
remotepay.MessageFromActivity = require("./MessageFromActivity");
remotepay.MessageToActivity = require("./MessageToActivity");
remotepay.OpenCashDrawerRequest = require("./OpenCashDrawerRequest");
remotepay.PaymentResponse = require("./PaymentResponse");
remotepay.PlatformError = require("./PlatformError");
remotepay.PreAuthRequest = require("./PreAuthRequest");
remotepay.PreAuthResponse = require("./PreAuthResponse");
remotepay.PrintJobStatusRequest = require("./PrintJobStatusRequest");
remotepay.PrintJobStatusResponse = require("./PrintJobStatusResponse");
remotepay.PrintManualRefundDeclineReceiptMessage = require("./PrintManualRefundDeclineReceiptMessage");
remotepay.PrintManualRefundReceiptMessage = require("./PrintManualRefundReceiptMessage");
remotepay.PrintPaymentDeclineReceiptMessage = require("./PrintPaymentDeclineReceiptMessage");
remotepay.PrintPaymentMerchantCopyReceiptMessage = require("./PrintPaymentMerchantCopyReceiptMessage");
remotepay.PrintPaymentReceiptMessage = require("./PrintPaymentReceiptMessage");
remotepay.PrintRefundPaymentReceiptMessage = require("./PrintRefundPaymentReceiptMessage");
remotepay.PrintRefundPaymentReceiptResponse = require("./PrintRefundPaymentReceiptResponse");
remotepay.PrintRequest = require("./PrintRequest");
remotepay.QueryStatus = require("./QueryStatus");
remotepay.QueryStatusEnum = require("./QueryStatusEnum");
remotepay.ReadCardDataRequest = require("./ReadCardDataRequest");
remotepay.ReadCardDataResponse = require("./ReadCardDataResponse");
remotepay.RefundPaymentRequest = require("./RefundPaymentRequest");
remotepay.RefundPaymentResponse = require("./RefundPaymentResponse");
remotepay.RegisterForCustomerProvidedDataRequest = require("./RegisterForCustomerProvidedDataRequest");
remotepay.ResetDeviceResponse = require("./ResetDeviceResponse");
remotepay.ResponseCode = require("./ResponseCode");
remotepay.ResponseCodeEnum = require("./ResponseCodeEnum");
remotepay.ResultStatus = require("./ResultStatus");
remotepay.ResultStatusEnum = require("./ResultStatusEnum");
remotepay.RetrieveDeviceStatusRequest = require("./RetrieveDeviceStatusRequest");
remotepay.RetrieveDeviceStatusResponse = require("./RetrieveDeviceStatusResponse");
remotepay.RetrievePaymentRequest = require("./RetrievePaymentRequest");
remotepay.RetrievePaymentResponse = require("./RetrievePaymentResponse");
remotepay.RetrievePendingPaymentsResponse = require("./RetrievePendingPaymentsResponse");
remotepay.RetrievePrintersRequest = require("./RetrievePrintersRequest");
remotepay.RetrievePrintersResponse = require("./RetrievePrintersResponse");
remotepay.SaleRequest = require("./SaleRequest");
remotepay.SaleResponse = require("./SaleResponse");
remotepay.SetCustomerInfoRequest = require("./SetCustomerInfoRequest");
remotepay.SignatureRequest = require("./SignatureRequest");
remotepay.SignatureResponse = require("./SignatureResponse");
remotepay.TipAdded = require("./TipAdded");
remotepay.TipAdjustAuthRequest = require("./TipAdjustAuthRequest");
remotepay.TipAdjustAuthResponse = require("./TipAdjustAuthResponse");
remotepay.TipRequest = require("./TipRequest");
remotepay.TipResponse = require("./TipResponse");
remotepay.TransactionRequest = require("./TransactionRequest");
remotepay.TransactionType = require("./TransactionType");
remotepay.TransactionTypeEnum = require("./TransactionTypeEnum");
remotepay.VaultCardRequest = require("./VaultCardRequest");
remotepay.VaultCardResponse = require("./VaultCardResponse");
remotepay.VerifySignatureRequest = require("./VerifySignatureRequest");
remotepay.VoidCreditRequest = require("./VoidCreditRequest");
remotepay.VoidCreditResponse = require("./VoidCreditResponse");
remotepay.VoidPaymentRefundRequest = require("./VoidPaymentRefundRequest");
remotepay.VoidPaymentRefundResponse = require("./VoidPaymentRefundResponse");
remotepay.VoidPaymentRequest = require("./VoidPaymentRequest");
remotepay.VoidPaymentResponse = require("./VoidPaymentResponse.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = remotepay;
}
