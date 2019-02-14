/**
 * Manually edited see
 */


 /**
 *  Interface to the Clover remote-pay API.
 *
 *  Defines the interface used to interact with remote pay
 *  adapters.
 */
/**
* @constructor
* @memberof remotepay
*/
var ICloverConnectorListener = function() {
};


/**
* Called when the Clover device disconnects from the Clover Connector.
  * @deprecated - use {@link #onDeviceDisconnected()}
* @memberof remotepay.ICloverConnectorListener
*
* @return void
*/
ICloverConnectorListener.prototype.onDisconnected = function() {
};

/**
* Called when the Clover device is disconnected from the CloverConnector or not responding.
* @memberof remotepay.ICloverConnectorListener
*
* @return void
*/
ICloverConnectorListener.prototype.onDeviceDisconnected = function() {
};

/**
* Called when the Clover device is initially connected, but not ready to communicate.
* @memberof remotepay.ICloverConnectorListener
*
* @return void
*/
ICloverConnectorListener.prototype.onDeviceConnected = function() {
};

/**
* Called when the Clover device is ready to respond to requests.
  * @deprecated - use {@link #onDeviceReady()}
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.MerchantInfo} merchantInfo 
* @return void
*/
ICloverConnectorListener.prototype.onReady = function(merchantInfo) {
};

/**
* Called when the Clover device is ready to communicate and respond to requests.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.MerchantInfo} merchantInfo 
* @return void
*/
ICloverConnectorListener.prototype.onDeviceReady = function(merchantInfo) {
};

/**
* Called when the Clover device transitions to a new screen or activity. The CloverDeviceEvent passed in
  * will contain an event type, a description, and a list of available InputOptions.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CloverDeviceEvent} deviceEvent 
* @return void
*/
ICloverConnectorListener.prototype.onDeviceActivityStart = function(deviceEvent) {
};

/**
* Called when the Clover device transitions away from a screen or activity. The CloverDeviceEvent
  * passed in will contain an event type and description.
  * Note: The start and end events are not guaranteed to process in order. The event type
  * should be used to make sure these events are paired.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CloverDeviceEvent} deviceEvent 
* @return void
*/
ICloverConnectorListener.prototype.onDeviceActivityEnd = function(deviceEvent) {
};

/**
* Called when an error occurs while trying to send messages to the Clover device.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CloverDeviceErrorEvent} deviceErrorEvent 
* @return void
*/
ICloverConnectorListener.prototype.onDeviceError = function(deviceErrorEvent) {
};

/**
* Called in response to an Auth() request. Note: An Auth transaction may come back as a final Sale, depending on the payment gateway. The AuthResponse has a boolean isAuth flag that indicates whether the Payment can still be tip-adjusted.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.AuthResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onAuthResponse = function(response) {
};

/**
* Called in response to a tip adjustment for an Auth transaction. Contains the tipAmount if successful.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.TipAdjustAuthResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onTipAdjustAuthResponse = function(response) {
};

/**
* Called in response to a CapturePreAuth() request. Contains the new Amount and TipAmount if successful.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CapturePreAuthResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onCapturePreAuthResponse = function(response) {
};

/**
* Called when the Clover device requests verification for a user's on-screen signature.
  * The Payment and Signature will be passed in.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.VerifySignatureRequest} request 
* @return void
*/
ICloverConnectorListener.prototype.onVerifySignatureRequest = function(request) {
};

/**
* Called when the Clover device encounters a Challenge at the payment gateway and requires confirmation.
  * A Challenge is triggered by a potential duplicate Payment (DUPLICATE_CHALLENGE) or an offline
  * Payment (OFFLINE_CHALLENGE). The device sends a ConfirmPaymentRequest() asking the merchant
  * to reply by sending either an AcceptPayment() or RejectPayment() call.

  * Note: Duplicate Payment Challenges are raised when multiple Payments are made with the same card
  * type and last four digits within the same hour. For this reason, we recommend that you do not
  * programmatically call CloverConnector.RejectPayment() on all instances of DUPLICATE_CHALLENGE.
  * For more information, see {@link https://docs.clover.com/build/working-with-challenges/|Working with Challenges}.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.ConfirmPaymentRequest} request 
* @return void
*/
ICloverConnectorListener.prototype.onConfirmPaymentRequest = function(request) {
};

/**
* Called in response to a Closeout() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CloseoutResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onCloseoutResponse = function(response) {
};

/**
* Called at the completion of a Sale() request. The SaleResponse contains a
  * {@see com.clover.remote.client.messages.ResultCode} and
  * a Success boolean. A successful Sale transaction will also have the Payment object, which can be for
  * the full or partial amount of the Sale request. Note: A Sale transaction my come back as a
  * tip-adjustable Auth, depending on the payment gateway. The SaleResponse has a boolean
  * isSale flag that indicates whether the Sale is final, or will be finalized during closeout.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.SaleResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onSaleResponse = function(response) {
};

/**
* Called in response to a manualRefund() request. Contains a
  * {@see com.clover.remote.client.messages.ResultCode} and a Success boolean.
  * If successful, the ManualRefundResponse will have a Credit object associated with the
  * relevant Payment information.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.ManualRefundResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onManualRefundResponse = function(response) {
};

/**
* Called in response to a RefundPayment() request. Contains a
  * {@see com.clover.remote.client.messages.ResultCode} and a Success boolean.
  * The response to a successful transaction will contain the Refund, which includes the
  * original paymentId as a reference.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.RefundPaymentResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onRefundPaymentResponse = function(response) {
};

/**
* Called when a customer selects a tip amount on the Clover device's screen.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.TipAdded} tipAdded 
* @return void
*/
ICloverConnectorListener.prototype.onTipAdded = function(tipAdded) {
};

/**
* Called in response to a voidPayment() request. Contains a
  * {@see com.clover.remote.client.messages.ResultCode} and a Success boolean.
  * If successful, the response will also contain the paymentId for the voided Payment.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.VoidPaymentResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onVoidPaymentResponse = function(response) {
};

/**
* Called in response to a void payment refund request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.VoidPaymentRefundResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onVoidPaymentRefundResponse = function(response) {
};

/**
* Called in response to a vaultCard() request. Contains a
  * {@see com.clover.remote.client.messages.ResultCode} and a Success boolean.
  * If successful, the response will contain a VaultedCard object with a token that's unique for
  * the card and merchant. The token can be used for future Sale() and Auth() requests.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.VaultCardResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onVaultCardResponse = function(response) {
};

/**
* Called in response to a PreAuth() request.
  * Note: The boolean isPreAuth flag in the PreAuthResponse indicates whether CapturePreAuth()
  * can be called for the returned Payment. If the isPreAuth flag is false and the isAuth flag is true,
  * then the payment gateway coerced the PreAuth() request to an Auth. The payment will
  * need to be voided or it will be automatically captured at closeout.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PreAuthResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onPreAuthResponse = function(response) {
};

/**
* Called in response to a retrievePendingPayment() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.RetrievePendingPaymentsResponse} retrievePendingPaymentResponse 
* @return void
*/
ICloverConnectorListener.prototype.onRetrievePendingPaymentsResponse = function(retrievePendingPaymentResponse) {
};

/**
* Called in response to a readCardData() request. Contains card information
  * (specifically Track 1 and Track 2 card data).
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.ReadCardDataResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onReadCardDataResponse = function(response) {
};

/**
* Called when a {@link https://docs.clover.com/build/custom-activities-for-clover-mini/|Custom Activity} sends a message to the POS.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.MessageFromActivity} message 
* @return void
*/
ICloverConnectorListener.prototype.onMessageFromActivity = function(message) {
};

/**
* Called when a {@link https://docs.clover.com/build/custom-activities-for-clover-mini/|Custom Activity} finishes normally.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CustomActivityResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onCustomActivityResponse = function(response) {
};

/**
* Called in response to a RetrieveDeviceStatus() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.RetrieveDeviceStatusResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onRetrieveDeviceStatusResponse = function(response) {
};

/**
* Called in response to a ResetDevice() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.ResetDeviceResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onResetDeviceResponse = function(response) {
};

/**
* Called in response to a RetrievePayment() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.RetrievePaymentResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onRetrievePaymentResponse = function(response) {
};

/**
* Called in response to a retrievePrinters() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.RetrievePrintersResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onRetrievePrintersResponse = function(response) {
};

/**
* Called in response to a retrievePrintJobStatus() request.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintJobStatusResponse} response 
* @return void
*/
ICloverConnectorListener.prototype.onPrintJobStatusResponse = function(response) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a receipt for a ManualRefund
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintManualRefundReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintManualRefundReceipt = function(message) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a receipt for a declined ManualRefund
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintManualRefundDeclineReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintManualRefundDeclineReceipt = function(message) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a receipt for a payment
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintPaymentReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintPaymentReceipt = function(message) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a receipt for a declined payment
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintPaymentDeclineReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintPaymentDeclineReceipt = function(message) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a merchant copy of a payment receipt
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintPaymentMerchantCopyReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintPaymentMerchantCopyReceipt = function(message) {
};

/**
* Will only be called if disablePrinting = true on the Sale, Auth, PreAuth or ManualRefund Request
   * Called when a user requests to print a receipt for a payment refund
   *
   * @param message The message
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.PrintRefundPaymentReceiptMessage} message 
* @return void
*/
ICloverConnectorListener.prototype.onPrintRefundPaymentReceipt = function(message) {
};

/**
* Called when customer information is provided from a loyalty service.
* @memberof remotepay.ICloverConnectorListener
*
* @param {remotepay.CustomerProvidedDataEvent} response 
* @return void
*/
ICloverConnectorListener.prototype.onCustomerProvidedData = function(response) {
};

/**
 * Called in response to a DisplayReceiptOptionsRequest
 * @param response
 */
ICloverConnectorListener.prototype.onDisplayReceiptOptionsResponse = function (response){
};

/**
 * Called in response to a request that results in an invalid kiosk flow transition
 *
 * @param response The response
 */
ICloverConnectorListener.prototype.onInvalidStateTransitionResponse = function (response){
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ICloverConnectorListener;
}

