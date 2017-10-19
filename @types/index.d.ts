export namespace apps {

    export class AppTracking {
        getDeveloperAppId(): string

        setDeveloperAppId(developerAppId: string): void

        getApplicationName(): string

        setApplicationName(applicationName: string): void

        getApplicationID(): string

        setApplicationID(applicationID: string): void

        getApplicationVersion(): string

        setApplicationVersion(applicationVersion: string): void

        getSourceSDK(): string

        setSourceSDK(sourceSDK: string): void

        getSourceSDKVersion(): string

        setSourceSDKVersion(sourceSDKVersion: string): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void

        getCreditRef(): base.Reference

        setCreditRef(creditRef: base.Reference): void

        getRefundRef(): base.Reference

        setRefundRef(refundRef: base.Reference): void

        getCreditRefundRef(): base.Reference

        setCreditRefundRef(creditRefundRef: base.Reference): void
    }

}

export namespace base {

    export class CardData {
        getTrack1(): string

        setTrack1(track1): string

        getTrack2(): string

        setTrack2(track2): string

        getTrack3(): string

        setTrack3(track2): string

        getEncrypted(): boolean

        setEncrypted(encrypted): string

        getMaskedTrack1(): string

        setMaskedTrack1(maskedTrack1): string

        getMaskedTrack2(): string

        setMaskedTrack2(maskedTrack2): string

        getMaskedTrack3(): string

        setMaskedTrack3(maskedTrack3): string

        getPan(): string

        setPan(pan): string

        getCardholderName(): string

        setCardholderName(cardHolderName): string

        getFirstName(): string

        setFirstName(firstName): string

        getLastName(): string

        setLastName(lastName): string

        getExp(): string

        setExp(exp): string

        getLast4(): string

        setLast4(last4): string

        getFirst6(): string

        setFirst6(first6): string
    }

    export class Challenge {
        getType(): base.ChallengeType

        setType(type: base.ChallengeType): void

        getReason(): order.VoidReason

        setReason(reason: order.VoidReason): void

        getMessage(): string

        setMessage(message: string): void
    }

    export enum ChallengeType {
        DUPLICATE_CHALLENGE = "DUPLICATE_CHALLENGE",
        OFFLINE_CHALLENGE = "OFFLINE_CHALLENGE"
    }

    export class PendingPaymentEntry {
        getAmount(): number

        setAmount(amount: number): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class Reference {
        getId(): string

        setId(id: string): void
    }

    export class Signature {
    }

    export class Tender {
        getId(): string

        setId(id: string): void

        getEditable(): boolean

        setEditable(editable: boolean): void

        getLabelKey(): string

        setLabelKey(labelKey: string): void

        getLabel(): string

        setLabel(label: string): void

        getOpensCashDrawer(): boolean

        setOpensCashDrawer(opensCashDrawer: boolean): void

        getSupportsTipping(): boolean

        setSupportsTipping(supportsTipping: boolean): void

        getEnabled(): boolean

        setEnabled(enabled: boolean): void

        getVisible(): boolean

        setVisible(enabled: boolean): void

        getInstructions(): string

        setInstructions(instructions: string): void
    }

}

export namespace order {

    export class DisplayDiscount {
        getId(): string

        setId(id: string): void

        getLineItemId(): string

        setLineItemId(lineItemId: string): void

        getName(): string

        setName(lineItemId: string): void

        getAmount(): string

        setAmount(amount: string): void

        getPercentage(): string

        setPercentage(percentage: string): void
    }

    export class DisplayLineItem {
        getId(): string

        setId(id: string): void

        getOrderId(): string

        setOrderId(orderId: string): void

        getName(): string

        setName(name: string): void

        getAlternateName(): string

        setAlternateName(alternateName: string): void

        setPrice(): string

        setPrice(price: string): void

        getUnitPrice(): string

        setUnitPrice(unitPrice: string): void

        getQuantity(): string

        setQuantity(quantity: string): void

        getUnitQuantity(): string

        setUnitQuantity(unitQuantity: string): void

        getNote(): string

        setNote(note: string): void

        getPrinted(): boolean

        setPrinted(printed: boolean): void

        getBinName(): string

        setBinName(binName: string): void

        getUserData(): string

        setUserData(userData: string): void

        getDiscounts(): Array<order.DisplayDiscount>

        setDiscounts(discounts: Array<order.DisplayDiscount>): void

        getDiscountAmount(): string

        setDiscountAmount(discountAmount: string): void

        getExchanged(): boolean

        setExchanged(exchanged: boolean): void

        getExchangedAmount(): string

        setExchangedAmount(exchangedAmount: string): void

        getModifications(): Array<order.DisplayModification>

        setModifications(modifications: Array<order.DisplayModification>): void

        getRefunded(): boolean

        setRefunded(refunded: boolean): void

        getRefundedAmount(): string

        setRefundedAmount(refundedAmount: string): void

        getPercent(): string

        setPercent(refundedAmount: string): void
    }

    export class DisplayModification {
    }

    export class DisplayOrder {
        getId(): string

        setId(id: string): void

        getCurrency(): string

        setCurrency(currency: string): void

        getEmployeeId(): string

        setEmployeeId(employeeId): string

        getSubtotal(): string

        setSubtotal(subtotal: string): void

        getTax(): string

        setTax(tax: string): void

        getTotal(): string

        setTotal(total: string): void

        getTitle(): string

        setTitle(title: string): void

        getNote(): string

        setNote(note: string): void

        getServiceChargeName(): string

        setServiceChargeName(serviceChargeName: string): void

        getServiceChargeAmount(): string

        setServiceChargeAmount(serviceChargeAmount: string): void

        getDiscounts(): Array<DisplayDiscount>

        setDiscounts(serviceChargeAmount: Array<DisplayDiscount>): void

        getLineItems(): Array<DisplayLineItem>

        setLineItems(lineItems: Array<DisplayLineItem>): void

        getAmountRemaining(): string

        setAmountRemaining(amountRemaining: string): void

        getPayments(): Array<DisplayPayment>

        setPayments(lineItems: Array<DisplayPayment>): void
    }

    export class DisplayPayment {
    }

    export class Order {
    }

    export class VoidReason {
    }

    export namespace operation {
        export class DiscountsAddedOperation {
            getId(): string

            setId(id: string): void
        }

        export class DiscountsDeletedOperation {
            getId(): string

            setId(id: string): void
        }

        export class LineItemsAddedOperation {
            getId(): string

            setId(id: string): void
        }

        export class LineItemsDeletedOperation {
            getId(): string

            setId(id: string): void
        }

        export class OrderDeletedOperation {
            getId(): string

            setId(id: string): void
        }
    }

}

export namespace payments {

    export enum AVSResult {
        SUCCESS = "SUCCESS",
        ZIP_CODE_MATCH = "ZIP_CODE_MATCH",
        ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED = "ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED",
        ADDRESS_MATCH = "ADDRESS_MATCH",
        ADDRESS_MATCH_ZIP_NOT_CHECKED = "ADDRESS_MATCH_ZIP_NOT_CHECKED",
        NEITHER_MATCH = "NEITHER_MATCH",
        SERVICE_FAILURE = "SERVICE_FAILURE",
        SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
        NOT_CHECKED = "NOT_CHECKED",
        ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED = "ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED",
        ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED = "ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED"
    }

    export class Batch {
        getId(): string

        setId(id: string): void

        getMerchantId(): string

        setMerchantId(merchantId: string): void

        getFirstGatewayTxId(): number

        setFirstGatewayTxId(firstGatewayTxId: number): void

        getLastGatewayTxId(): number

        setLastGatewayTxId(lastGatewayTxId: number): void

        getAccountId(): string

        setAccountId(accountId: string): void

        getTxCount(): number

        setTxCount(txCount: number): void

        getTotalBatchAmount(): number

        setTotalBatchAmount(totalBatchAmount: number): void

        getDevices(): string

        setDevices(devices: string): void

        getState(): BatchState

        setState(state: BatchState): void

        getBatchType(): BatchType

        setBatchType(batchType: BatchType): void

        getCreatedTime(): number

        setCreatedTime(createdTime: number): void

        getModifiedTime(): number

        setModifiedTime(modifiedTime: number): void

        getBatchDetails(): BatchDetail

        setBatchDetails(state: BatchDetail): void
    }

    export class BatchDetail {
    }

    export class BatchState {
    }

    export class BatchType {
    }

    export class CardTransaction {
        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void

        getCreditRef(): base.Reference

        setCreditRef(creditRef: base.Reference): void

        getCardType(): CardType

        setCardType(cardType: CardType): void

        getEntryType(): CardEntryType

        setEntryType(entryType: CardEntryType): void

        getFirst6(): string

        setFirst6(first6: string): void

        getLast4(): string

        setLast4(last4: string): void

        getType(): CardTransactionType

        setType(cardType: CardTransactionType): void

        getAuthCode(): string

        setAuthCode(authCode: string): void

        getReferenceId(): string

        setReferenceId(referenceId: string): void

        getTransactionNo(): string

        setTransactionNo(transactionNo: string): void

        getState(): CardTransactionState

        setState(state: CardTransactionState): void

        getExtra(): any

        setExtra(state: any): void

        getBegBalance(): number

        setBegBalance(begBalance: number): void

        getEndBalance(): number

        setEndBalance(endBalance: number): void

        getAvsResult(): AVSResult

        setAvsResult(avsResult: AVSResult): void

        getCardholderName(): string

        setCardholderName(cardholderName: string): void

        getToken(): string

        setToken(token: string): void

        getVaultedCard(): VaultedCard

        setVaultedCard(vaultedCard: VaultedCard): void
    }

    export enum CardTransactionState {
        PENDING = "PENDING",
        CLOSED = "CLOSED"
    }

    export enum CardEntryType {
        SWIPED = "SWIPED",
        KEYED = "KEYED",
        VOICE = "VOICE",
        VAULTED = "VAULTED",
        OFFLINE_SWIPED = "OFFLINE_SWIPED",
        OFFLINE_KEYED = "OFFLINE_KEYED",
        EMV_CONTACT = "EMV_CONTACT",
        EMV_CONTACTLESS = "EMV_CONTACTLESS",
        MSD_CONTACTLESS = "MSD_CONTACTLESS",
        PINPAD_MANUAL_ENTRY = "PINPAD_MANUAL_ENTRY",
        QR_CODE = "QR_CODE",
        SCANNED = "SCANNED"
    }

    export enum CardTransactionType {
        AUTH = "AUTH",
        PREAUTH = "PREAUTH",
        PREAUTHCAPTURE = "PREAUTHCAPTURE",
        ADJUST = "ADJUST",
        VOID = "VOID",
        VOIDRETURN = "VOIDRETURN",
        RETURN = "RETURN",
        REFUND = "REFUND",
        NAKEDREFUND = "NAKEDREFUND",
        GETBALANCE = "GETBALANCE",
        BATCHCLOSE = "BATCHCLOSE",
        ACTIVATE = "ACTIVATE",
        BALANCE_LOCK = "BALANCE_LOCK",
        LOAD = "LOAD",
        CASHOUT = "CASHOUT",
        CASHOUT_ACTIVE_STATUS = "CASHOUT_ACTIVE_STATUS",
        REDEMPTION = "REDEMPTION",
        REDEMPTION_UNLOCK = "REDEMPTION_UNLOCK",
        RELOAD = "RELOAD",
        CASH_ADVANCE = "CASH_ADVANCE",
        VOID_CREDIT = "VOID_CREDIT",
        REFUND_CREDIT = "REFUND_CREDIT",
        INTERNET_ACTIVATE = "INTERNET_ACTIVATE"
    }

    export enum CardType {
        VISA = "VISA",
        MC = "MC",
        AMEX = "AMEX",
        DISCOVER = "DISCOVER",
        DINERS_CLUB = "DINERS_CLUB",
        JCB = "JCB",
        MAESTRO = "MAESTRO",
        SOLO = "SOLO",
        LASER = "LASER",
        CHINA_UNION_PAY = "CHINA_UNION_PAY",
        CARTE_BLANCHE = "CARTE_BLANCHE",
        UNKNOWN = "UNKNOWN",
        GIFT_CARD = "GIFT_CARD",
        EBT = "EBT"
    }

    export class CashAdvanceCustomerIdentification {
    }

    export class CashAdvanceExtra {
        getCashAdvanceSerialNum(): string

        setCashAdvanceSerialNum(cashAdvanceSerialNum: string): void

        getCashAdvanceCustomerIdentification(): CashAdvanceCustomerIdentification

        setCashAdvanceCustomerIdentification(cashAdvanceCustomerIdentification: CashAdvanceCustomerIdentification): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void
    }

    export class Credit {
    }

    export enum DataEntryLocation {
        ON_SCREEN = "ON_SCREEN",
        ON_PAPER = "ON_PAPER",
        NONE = "NONE"
    }

    export class DCCInfo {
        getInquiryRateId(): number

        setInquiryRateId(inquiryRateId: number): void

        getDccApplied(): boolean

        setDccApplied(dccApplied: boolean): void

        getForeignCurrencyCode(): string

        setForeignCurrencyCode(foreignCurrencyCode: string): void

        getForeignAmount(): number

        setForeignAmount(foreignAmount: number): void

        getExchangeRate(): number

        setExchangeRate(exchangeRate: number): void

        getMarginRatePercentage(): string

        setMarginRatePercentage(marginRatePercentage: string): void

        getExchangeRateSourceName(): string

        setExchangeRateSourceName(exchangeRateSourceName: string): void

        getExchangeRateSourceTimeStamp(): string

        setExchangeRateSourceTimeStamp(exchangeRateSourceTimeStamp: string): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void

        getCreditRef(): base.Reference

        setCreditRef(creditRef: base.Reference): void
    }

    export class GermanInfo {
    }

    export class LineItemPayment {
        getId(): string

        setId(id: string): void

        getLineItemRef(): base.Reference

        setLineItemRef(lineItemRef: base.Reference): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void

        getPercentage(): number

        setPercentage(percentage: number): void

        getBinName(): string

        setBinName(binName: string): void

        getRefunded(): boolean

        setRefunded(refunded: boolean): void
    }

    export class Payment {
        getId(): string

        setId(id: string): void

        getOrder(): base.Reference

        setOrder(order: base.Reference): void

        getDevice(): base.Reference

        setDevice(device: base.Reference): void

        getTender(): base.Tender

        setTender(device: base.Tender): void

        getAmount(): number

        setAmount(amount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void

        getCashbackAmount(): number

        setCashbackAmount(cashbackAmount: number): void

        getCashTendered(): number

        setCashTendered(cashTendered: number): void

        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void

        getEmployee(): base.Reference

        setEmployee(employee: base.Reference): void

        getCreatedTime(): number

        setCreatedTime(createdTime: number): void

        getClientCreatedTime(): number

        setClientCreatedTime(clientCreatedTime: number): void

        getModifiedTime(): number

        setModifiedTime(modifiedTime: number): void

        getOffline(): boolean

        setOffline(offline: boolean): void

        getResult(): Result

        setResult(result: Result): void

        getCardTransaction(): CardTransaction

        setCardTransaction(result: CardTransaction): void

        getServiceCharge(): ServiceChargeAmount

        setServiceCharge(serviceCharge: ServiceChargeAmount): void

        getTaxRates(): Array<PaymentTaxRate>

        setTaxRates(taxRates: Array<PaymentTaxRate>): void

        getRefunds(): Array<Refund>

        setRefunds(refunds: Array<Refund>): void

        getNote(): string

        setNote(note: string): void

        getLineItemPayments(): Array<LineItemPayment>

        setLineItemPayments(lineItemPayments: Array<LineItemPayment>): void

        getVoidReason(): Array<order.VoidReason>

        setVoidReason(voidReason: Array<order.VoidReason>): void

        getDccInfo(): DCCInfo

        setDccInfo(dccInfo: DCCInfo): void

        getTransactionSettings(): TransactionSettings

        setTransactionSettings(transactionSettings: TransactionSettings): void

        getGermanInfo(): GermanInfo

        setGermanInfo(germanInfo: GermanInfo): void

        getAppTracking(): apps.AppTracking

        setAppTracking(appTracking: apps.AppTracking): void

        getCashAdvanceExtra(): CashAdvanceExtra

        setCashAdvanceExtra(cashAdvanceExtra: CashAdvanceExtra): void
    }

    export class PaymentTaxRate {
        getId(): string

        setId(id: string): void

        getName(): string

        setName(name: string): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void

        getRate(): number

        getRate(rate: number): void

        getIsDefault(): boolean

        setIsDefault(isDefault: boolean): void

        getTaxableAmount(): number

        setTaxableAmount(taxableAmount: number): void

        getIsVat(): boolean

        setIsVat(isDefault: boolean): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void
    }

    export class Refund {
        getId(): string

        setId(id: string): void

        getOrderRef(): base.Reference

        setOrderRef(orderRef: base.Reference): void

        getDevice(): base.Reference

        setDevice(device: base.Reference): void

        getAmount(): number

        setAmount(amount: number): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getCreatedTime(): number

        setCreatedTime(createdTime: number): void

        getClientCreatedTime(): number

        setClientCreatedTime(clientCreatedTime: number): void

        getPayment(): base.Reference

        setPayment(payment: base.Reference): void

        getEmployee(): base.Reference

        setEmployee(employee: base.Reference): void

        getLineItemPayments(): Array<LineItemPayment>

        setLineItemPayments(lineItemPayments: Array<LineItemPayment>): void

        getOverrideMerchantTender(): base.Tender

        setOverrideMerchantTender(overrideMerchantTender: base.Tender): void

        getTaxableAmountRates(): Array<TaxableAmountRate>

        setTaxableAmountRates(taxableAmountRates: Array<TaxableAmountRate>): void

        getServiceChargeAmount(): ServiceChargeAmount

        setServiceChargeAmount(serviceChargeAmount: ServiceChargeAmount): void

        getGermanInfo(): GermanInfo

        setGermanInfo(germanInfo: GermanInfo): void

        getAppTracking(): apps.AppTracking

        setAppTracking(appTracking: apps.AppTracking): void
    }

    export enum Result {
        SUCCESS = "SUCCESS",
        FAIL = "FAIL",
        INITIATED = "INITIATED",
        VOIDED = "VOIDED",
        VOIDING = "VOIDING",
        VOID_FAILED = "VOID_FAILED",
        AUTH = "AUTH",
        AUTH_COMPLETED = "AUTH_COMPLETED"
    }

    export class ServiceChargeAmount {
        getId(): string

        setId(id: string): void

        getName(): string

        setName(name: string): void

        getAmount(): number

        setAmount(amount: number): void

        getPaymentRef(): base.Reference

        setPaymentRef(paymentRef: base.Reference): void
    }

    export class TaxableAmountRate {
    }

    export enum TipMode {
        TIP_PROVIDED = "TIP_PROVIDED",
        ON_SCREEN_BEFORE_PAYMENT = "ON_SCREEN_BEFORE_PAYMENT",
        ON_SCREEN_AFTER_PAYMENT = "ON_SCREEN_AFTER_PAYMENT",
        ON_PAPER = "ON_PAPER",
        NO_TIP = "NO_TIP"
    }

    export class TransactionSettings {
        getCardEntryMethods(): number

        setCardEntryMethods(cardEntryMethods: number): void

        getDisableCashBack(): boolean

        setDisableCashBack(disableCashBack: boolean): void

        getCloverShouldHandleReceipts(): boolean

        setCloverShouldHandleReceipts(cloverShouldHandleReceipts: boolean): void

        getForcePinEntryOnSwipe(): boolean

        setForcePinEntryOnSwipe(forcePinEntryOnSwipe: boolean): void

        getDisableRestartTransactionOnFailure(): boolean

        setDisableRestartTransactionOnFailure(disableRestartTransactionOnFailure: boolean): void

        getAllowOfflinePayment(): boolean

        setAllowOfflinePayment(allowOfflinePayment: boolean): void

        getApproveOfflinePaymentWithoutPrompt(): boolean

        setApproveOfflinePaymentWithoutPrompt(allowOfflinePayment: boolean): void

        getForceOfflinePayment(): boolean

        setForceOfflinePayment(forceOfflinePayment: boolean): void

        getSignatureThreshold(): number

        setSignatureThreshold(signatureThreshold: number): void

        getSignatureEntryLocation(): DataEntryLocation

        setSignatureEntryLocation(signatureEntryLocation: DataEntryLocation)

        getTipMode(): TipMode

        setTipMode(tipMode: TipMode): void

        getTippableAmount(): number

        setTippableAmount(tippableAmount: number): void

        getDisableReceiptSelection(): boolean

        setDisableReceiptSelection(disableReceiptSelection: boolean): void

        getDisableDuplicateCheck(): boolean

        setDisableDuplicateCheck(disableDuplicateCheck: boolean): void

        getAutoAcceptPaymentConfirmations(): boolean

        setAutoAcceptPaymentConfirmations(autoAcceptPaymentConfirmations: boolean): void

        getAutoAcceptSignature(): boolean

        setAutoAcceptSignature(autoAcceptSignature: boolean): void
    }

    export class VaultedCard {
        getFirst6(): string

        setFirst6(first6): string

        getFirst4(): string

        setFirst4(first4): string

        getCardholderName(): string

        setCardholderName(cardholderName: string): void

        getExpirationDate(): string

        setExpirationDate(expirationDate: string): void

        getToken(): string

        setToken(token: string): void
    }

}

export namespace printer {

    export class PrintCategory {
    }

    export class Printer {
        getId(): string

        setId(id: string): void

        getMac(): string

        setMac(mac: string): void

        getModel(): string

        setModel(model: string): void

        getName(): string

        setName(name: string): void

        getIpAddress(): string

        setIpAddress(ipAddress: string): void

        getType(): PrinterType

        setType(type: PrinterType): void
    }

    export enum PrinterType {
        NETWORK = "NETWORK",
        MY_LOCAL = "MY_LOCAL"
    }

    export enum PrintJobStatus {
        IN_QUEUE = "IN_QUEUE",
        PRINTING = "PRINTING",
        DONE = "DONE",
        ERROR = "ERROR",
        UNKNOWN = "UNKNOWN",
        NOT_FOUND = "NOT_FOUND"
    }

}

export namespace remotemessage {

    export class AcknowledgementMessage extends Message {
        getSourceMessageId(): string

        setSourceMessageId(sourceMessageId: string)
    }

    export class ActivityMessageFromActivity extends Message {
        getAction(): string

        setAction(action: string)

        getPayload(): string

        setPayload(action: string)
    }

    export class ActivityMessageToActivity extends Message {
        getAction(): string

        setAction(action: string)

        getPayload(): string

        setPayload(action: string)
    }

    export class ActivityRequest extends Message {
        getAction(): string

        setAction(action: string): void

        getPayload(): string

        setPayload(payload: string): void

        getNonBlocking(): boolean

        setNonBlocking(nonBlocking: boolean): void

        getForceLaunch(): boolean

        setForceLaunch(forceLaunch: boolean): void
    }

    export class ActivityResponseMessage extends Message {
        getAction(): string

        setAction(action: string)

        getPayload(): string

        setPayload(action: string)

        getResultCode(): number

        setResultCode(resultCode: number)

        getFailReason(): string

        setFailReason(failReason: string)
    }

    export class BreakMessage extends Message {
    }

    export class CapturePreAuthMessage extends Message {
        getAmount(): number

        setAmount(amount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class CapturePreAuthResponseMessage extends Message {
        getStatus(): ResultStatus

        setStatus(status: ResultStatus)

        getReason(): string

        setReason(reason: string): void

        getPaymentId(): string

        setPaymentId(paymentId: string): void

        getAmount(): number

        setAmount(amount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void
    }

    export class CardDataRequestMessage extends Message {
        getPayIntent(): PayIntent

        setPayIntent(payIntent: PayIntent): void
    }

    export class CardDataResponseMessage extends Message {
        getReason(): string

        setReason(reason: string)

        getStatus(): ResultStatus

        setStatus(status: ResultStatus)

        getCardData(): base.CardData

        setCardData(status: base.CardData)
    }

    export class CashbackSelectedMessage extends Message {
        getCashbackAmount(): number

        setCashbackAmount(cashbackAmount: number): void
    }

    export class CloseoutRequestMessage extends Message {
        getAllowOpenTabs(): boolean

        setAllowOpenTabs(allowOpenTabs: boolean): void

        getBatchId(): string

        setBatchId(reason: string)
    }

    export class CloseoutResponseMessage extends Message {
        getReason(): string

        setReason(reason: string): void

        getStatus(): ResultStatus

        setStatus(status: ResultStatus): void

        getBatch(): payments.Batch

        setBatch(status: payments.Batch): void
    }

    export class ConfirmPaymentMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getChallenges(): Array<base.Challenge>

        setChallenges(payment: Array<base.Challenge>): void
    }

    export class DiscoveryRequestMessage extends Message {
        getSupportsOrderModification(): boolean

        setSupportsOrderModification(supportsOrderModification: boolean): any
    }

    export class DiscoveryResponseMessage extends Message {
        getMerchantId(): string

        setMerchantId(merchantId: string): void

        getMerchantMId(): string

        setMerchantMId(merchantMId: string): void

        getMerchantName(): string

        setMerchantName(merchantName: string): void

        getName(): string

        setName(name: string): void

        getModel(): string

        setModel(model: string): void

        getSerial(): string

        setSerial(serial: string): void

        getReady(): boolean

        setReady(ready: boolean): void

        getSupportsTipAdjust(): boolean

        setSupportsTipAdjust(supportsTipAdjust: boolean): void

        getSupportsManualRefund(): boolean

        setSupportsManualRefund(supportsManualRefund: boolean): void

        getSupportsMultiPayToken(): boolean

        setSupportsMultiPayToken(supportsMultiPayToken: boolean): void

        getSupportsAcknowledgement(): boolean

        setSupportsAcknowledgement(supportsAcknowledgement: boolean): void
    }

    export enum ErrorCode {
        ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
        PAYMENT_NOT_FOUND = "PAYMENT_NOT_FOUND",
        FAIL = "FAIL"
    }

    export enum ExternalDeviceState {
        IDLE = "IDLE",
        BUSY = "BUSY",
        WAITING_FOR_POS = "WAITING_FOR_POS",
        WAITING_FOR_CUSTOMER = "WAITING_FOR_CUSTOMER",
        UNKNOWN = "UNKNOWN"
    }

    export class ExternalDeviceStateData {
    }

    export class ExternalDeviceSubState {
    }

    export class FinishOkMessage extends Message {
        getCredit(): payments.Credit;

        setCredit(credit: payments.Credit): void

        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getRefund(): payments.Refund

        setRefund(refund: payments.Refund): void

        getSignature(): base.Signature

        setSignature(paymentRef: base.Signature): void

        getRequestInfo(): string

        setRequestInfo(requestInfo: string)
    }

    export class FinishCancelMessage extends Message {
        getRequestInfo(): string

        setRequestInfo(requestInfo: string)
    }

    export class ForceConnectMessage extends Message {
    }

    export class GetPrintersRequestMessage extends Message {
        getCategory(): printer.PrintCategory

        setCategory(category: printer.PrintCategory): void
    }

    export class GetPrintersResponseMessage extends Message {
        getPrinters(): Array<printer.Printer>

        setPrinters(printers: Array<printer.Printer>)
    }

    export class ImagePrintMessage extends Message {
        getPng(): any

        setPng(png: any)

        getUrlString(): string

        setUrlString(urlString: string): void

        getExternalPrintJobId(): string

        setExternalPrintJobId(externalPrintJobId: string): void

        getPrinter(): printer.Printer

        setPrinter(printer: printer.Printer): void
    }

    export class InputOption {
        getKeyPress(): remotepay.KeyPress

        setKeyPress(keypress: remotepay.KeyPress): void

        getDescription(): string

        setDescription(description: string): void
    }

    export enum KeyPress {
        NONE = "NONE",
        ENTER = "ENTER",
        ESC = "ESC",
        BACKSPACE = "BACKSPACE",
        TAB = "TAB",
        STAR = "STAR",
        BUTTON_1 = "BUTTON_1",
        BUTTON_2 = "BUTTON_2",
        BUTTON_3 = "BUTTON_3",
        BUTTON_4 = "BUTTON_4",
        BUTTON_5 = "BUTTON_5",
        BUTTON_6 = "BUTTON_6",
        BUTTON_7 = "BUTTON_7",
        BUTTON_8 = "BUTTON_8",
        DIGIT_1 = "DIGIT_1",
        DIGIT_2 = "DIGIT_2",
        DIGIT_3 = "DIGIT_3",
        DIGIT_4 = "DIGIT_4",
        DIGIT_5 = "DIGIT_5",
        DIGIT_6 = "DIGIT_6",
        DIGIT_7 = "DIGIT_7",
        DIGIT_8 = "DIGIT_8",
        DIGIT_9 = "DIGIT_9",
        DIGIT_0 = "DIGIT_0"
    }

    export class KeyPressMessage extends Message {
        getKeyPress(): KeyPress

        setKeyPress(keyPress: KeyPress)
    }

    export class LastMessageRequestMessage {
    }

    export class LastMessageResponseMessage {
    }

    export class LogMessage {
    }

    export class Message {
        getMethod(): Method

        setMethod(method: Method): void

        getVersion(): number

        setVersion(version: number)

        getMetaInfo(field: any)
    }

    export enum Method {
        ACK = "ACK",
        CLOSEOUT_RESPONSE = "CLOSEOUT_RESPONSE",
        CLOSEOUT_REQUEST = "CLOSEOUT_REQUEST",
        CAPTURE_PREAUTH_RESPONSE = "CAPTURE_PREAUTH_RESPONSE",
        CAPTURE_PREAUTH = "CAPTURE_PREAUTH",
        CONFIRM_PAYMENT_MESSAGE = "CONFIRM_PAYMENT_MESSAGE",
        LAST_MSG_REQUEST = "LAST_MSG_REQUEST",
        LAST_MSG_RESPONSE = "LAST_MSG_RESPONSE",
        TIP_ADJUST = "TIP_ADJUST",
        TIP_ADJUST_RESPONSE = "TIP_ADJUST_RESPONSE",
        OPEN_CASH_DRAWER = "OPEN_CASH_DRAWER",
        SHOW_PAYMENT_RECEIPT_OPTIONS = "SHOW_PAYMENT_RECEIPT_OPTIONS",
        REFUND_RESPONSE = "REFUND_RESPONSE",
        REFUND_REQUEST = "REFUND_REQUEST",
        TX_START = "TX_START",
        TX_START_RESPONSE = "TX_START_RESPONSE",
        KEY_PRESS = "KEY_PRESS",
        UI_STATE = "UI_STATE",
        TX_STATE = "TX_STATE",
        FINISH_OK = "FINISH_OK",
        FINISH_CANCEL = "FINISH_CANCEL",
        DISCOVERY_REQUEST = "DISCOVERY_REQUEST",
        DISCOVERY_RESPONSE = "DISCOVERY_RESPONSE",
        TIP_ADDED = "TIP_ADDED",
        VERIFY_SIGNATURE = "VERIFY_SIGNATURE",
        SIGNATURE_VERIFIED = "SIGNATURE_VERIFIED",
        PAYMENT_CONFIRMED = "PAYMENT_CONFIRMED",
        PAYMENT_REJECTED = "PAYMENT_REJECTED",
        PAYMENT_VOIDED = "PAYMENT_VOIDED",
        PRINT_PAYMENT = "PRINT_PAYMENT",
        REFUND_PRINT_PAYMENT = "REFUND_PRINT_PAYMENT",
        PRINT_PAYMENT_MERCHANT_COPY = "PRINT_PAYMENT_MERCHANT_COPY",
        PRINT_CREDIT = "PRINT_CREDIT",
        PRINT_PAYMENT_DECLINE = "PRINT_PAYMENT_DECLINE",
        PRINT_CREDIT_DECLINE = "PRINT_CREDIT_DECLINE",
        PRINT_TEXT = "PRINT_TEXT",
        PRINT_IMAGE = "PRINT_IMAGE",
        TERMINAL_MESSAGE = "TERMINAL_MESSAGE",
        SHOW_WELCOME_SCREEN = "SHOW_WELCOME_SCREEN",
        SHOW_THANK_YOU_SCREEN = "SHOW_THANK_YOU_SCREEN",
        SHOW_ORDER_SCREEN = "SHOW_ORDER_SCREEN",
        BREAK = "BREAK",
        CASHBACK_SELECTED = "CASHBACK_SELECTED",
        PARTIAL_AUTH = "PARTIAL_AUTH",
        VOID_PAYMENT = "VOID_PAYMENT",
        ORDER_ACTION_ADD_DISCOUNT = "ORDER_ACTION_ADD_DISCOUNT",
        ORDER_ACTION_REMOVE_DISCOUNT = "ORDER_ACTION_REMOVE_DISCOUNT",
        ORDER_ACTION_ADD_LINE_ITEM = "ORDER_ACTION_ADD_LINE_ITEM",
        ORDER_ACTION_REMOVE_LINE_ITEM = "ORDER_ACTION_REMOVE_LINE_ITEM",
        ORDER_ACTION_RESPONSE = "ORDER_ACTION_RESPONSE",
        VAULT_CARD = "VAULT_CARD",
        VAULT_CARD_RESPONSE = "VAULT_CARD_RESPONSE",
        LOG_MESSAGE = "LOG_MESSAGE",
        RETRIEVE_PENDING_PAYMENTS = "RETRIEVE_PENDING_PAYMENTS",
        RETRIEVE_PENDING_PAYMENTS_RESPONSE = "RETRIEVE_PENDING_PAYMENTS_RESPONSE",
        CARD_DATA_RESPONSE = "CARD_DATA_RESPONSE",
        CARD_DATA = "CARD_DATA",
        PAIRING_REQUEST = "PAIRING_REQUEST",
        PAIRING_RESPONSE = "PAIRING_RESPONSE",
        PAIRING_CODE = "PAIRING_CODE",
        REMOTE_ERROR = "REMOTE_ERROR",
        ACTIVITY_REQUEST = "ACTIVITY_REQUEST",
        ACTIVITY_RESPONSE = "ACTIVITY_RESPONSE",
        SHUTDOWN = "SHUTDOWN",
        RESET = "RESET",
        FORCECONNECT = "FORCECONNECT",
        RETRIEVE_DEVICE_STATUS_REQUEST = "RETRIEVE_DEVICE_STATUS_REQUEST",
        RETRIEVE_DEVICE_STATUS_RESPONSE = "RETRIEVE_DEVICE_STATUS_RESPONSE",
        RESET_DEVICE_RESPONSE = "RESET_DEVICE_RESPONSE",
        ACTIVITY_MESSAGE_TO_ACTIVITY = "ACTIVITY_MESSAGE_TO_ACTIVITY",
        ACTIVITY_MESSAGE_FROM_ACTIVITY = "ACTIVITY_MESSAGE_FROM_ACTIVITY",
        RETRIEVE_PAYMENT_RESPONSE = "RETRIEVE_PAYMENT_RESPONSE",
        RETRIEVE_PAYMENT_REQUEST = "RETRIEVE_PAYMENT_REQUEST",
        PRINT_JOB_STATUS_REQUEST = "PRINT_JOB_STATUS_REQUEST",
        PRINT_JOB_STATUS_RESPONSE = "PRINT_JOB_STATUS_RESPONSE",
        GET_PRINTERS_REQUEST = "GET_PRINTERS_REQUEST",
        GET_PRINTERS_RESPONSE = "GET_PRINTERS_RESPONSE",
        RETRIEVE_CUSTOM_ACTIVITIES_REQUEST = "RETRIEVE_CUSTOM_ACTIVITIES_REQUEST",
        RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE = "RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE"
    }

    export class OpenCashDrawerMessage extends Message {
        getReason(): string

        setReason(reason: string): void

        getPrinter(): printer.Printer

        setPrinter(printer: printer.Printer): void
    }

    export class OrderActionAddDiscountMessage {
    }

    export class OrderActionAddLineItemMessage {
    }

    export class OrderActionRemoveDiscountMessage {
    }

    export class OrderActionRemoveLineItemMessage {
    }

    export class OrderActionResponseMessage {
    }

    export class OrderUpdateMessage extends Message {
        getOrder(): order.Order

        setOrder(order: order.Order)

        getLineItemsAddedOperation(): order.operation.LineItemsAddedOperation

        setLineItemsAddedOperation(lineItemsAddedOperation: order.operation.LineItemsAddedOperation): void

        getLineItemsDeletedOperation(): order.operation.LineItemsDeletedOperation

        setLineItemsDeletedOperation(lineItemsDeletedOperation: order.operation.DiscountsAddedOperation): void

        getDiscountsAddedOperation(): order.operation.DiscountsAddedOperation

        setDiscountsAddedOperation(lineItemsAddedOperation: order.operation.LineItemsAddedOperation): void

        getDiscountsDeletedOperation(): order.operation.DiscountsDeletedOperation

        setDiscountsDeletedOperation(lineItemsDeletedOperation: order.operation.DiscountsDeletedOperation): void

        getOrderDeletedOperation(): order.operation.OrderDeletedOperation

        setOrderDeletedOperation(orderDeletedOperation: order.operation.OrderDeletedOperation): void
    }

    export class PairingCodeMessage extends Message {
        getPairingCode(): string

        setPairingCode(pairingCode: string): void
    }

    export class PairingRequestMessage extends Message {
        getName(): string

        setName(name: string): void

        getSerialNumber(): string

        setSerialNumber(serialNumber: string): void

        getApplicationName(): string

        setApplicationName(applicationName: string): void

        getAuthenticationToken(): string

        setAuthenticationToken(authenticationToken: string): void
    }

    export class PairingResponseMessage extends PairingRequestMessage {
        getPairingState(): PairingState

        setPairingState(pairingState: PairingState): void

        getMillis(): number

        setMillis(applicationName: number): void
    }

    export enum PairingState {
        UNINITIALIZED = "UNINITIALIZED",
        PAIRED = "PAIRED",
        FAILED = "FAILED",
        INITIAL = "INITIAL"
    }

    export class PartialAuthMessage extends Message {
        getPartialAuthAmount(): number

        getPartialAuthAmount(partialAuthAmount: number): void
    }

    export class PayIntent {
        getAction(): string

        setAction(action: string): void

        getAmount(): number

        setAmount(amount: number): void

        getTippableAmount(): number

        setTippableAmount(tippableAmount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void

        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(paymentId: string): void

        getEmployeeId(): string

        setEmployeeId(employeeId): string

        getTransactionType(): TransactionType

        setTransactionType(transactionType: TransactionType): void

        getTaxableAmountRates(): Array<payments.TaxableAmountRate>

        setTaxableAmountRates(taxableAmountRates: Array<payments.TaxableAmountRate>): void

        getServiceChargeAmount(): payments.ServiceChargeAmount

        setServiceChargeAmount(serviceChargeAmount: payments.ServiceChargeAmount): void

        getIsDisableCashBack(): boolean

        setIsDisableCashBack(isDisableCashBack: boolean): void

        getIsTesting(): boolean

        setIsTesting(isTesting: boolean): void

        getCardEntryMethods(): number

        setCardEntryMethods(cardEntryMethods: number)

        getVoiceAuthCode(): string

        setVoiceAuthCode(voiceAuthCode: string)

        getStreetAddress(): string

        setStreetAddress(streetAddress: string)

        getPostalCode(): string

        setPostalCode(postalCode: string)

        getIsCardNotPresent(): boolean

        setIsCardNotPresent(isCardNotPresent: boolean): void

        getCardDataMessage(): string

        setCardDataMessage(cardDataMessage: string)

        getRemotePrint(): boolean

        setRemotePrint(remotePrint: boolean): void

        getTransactionNo(): string

        setTransactionNo(transactionNo: string)

        getIsForceSwipePinEntry(): boolean

        setIsForceSwipePinEntry(isForceSwipePinEntry: boolean): void

        getDisableRestartTransactionWhenFailed(): boolean

        setDisableRestartTransactionWhenFailed(disableRestartTransactionWhenFailed: boolean): void

        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void

        getVaultedCard(): payments.VaultedCard

        setVaultedCard(vaultedCard: payments.VaultedCard)

        getAllowOfflinePayment(): boolean

        setAllowOfflinePayment(allowOfflinePayment: boolean): void

        getApproveOfflinePaymentWithoutPrompt(): boolean

        setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void

        getRequiresRemoteConfirmation(): boolean

        setRequiresRemoteConfirmation(requiresRemoteConfirmation: boolean): void

        getApplicationTracking(): apps.AppTracking

        setApplicationTracking(vaultedCard: apps.AppTracking)

        getAllowPartialAuth(): boolean

        setAllowPartialAuth(allowPartialAuth: boolean): void

        getGermanInfo(): payments.GermanInfo

        setGermanInfo(vaultedCard: payments.GermanInfo)

        getCashAdvanceCustomerIdentification(): payments.CashAdvanceCustomerIdentification

        setCashAdvanceCustomerIdentification(cashAdvanceCustomerIdentification: payments.CashAdvanceCustomerIdentification)

        getTransactionSettings(): payments.TransactionSettings

        setTransactionSettings(cashAdvanceCustomerIdentification: payments.TransactionSettings)
    }

    export class PaymentConfirmedMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void
    }

    export class PaymentRejectedMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getReason(): order.VoidReason

        setReason(reason: order.VoidReason): void
    }

    export class PaymentVoidedMessage {
    }

    export class PrintJobStatusRequestMessage extends Message {
        getExternalPrintJobId(): string

        setExternalPrintJobId(externalPrintJobId: string): void
    }

    export class PrintJobStatusResponseMessage extends Message {
        getExternalPrintJobId(): string

        setExternalPrintJobId(externalPrintJobId: string)

        getStatus(): printer.PrintJobStatus

        setStatus(status: printer.PrintJobStatus)
    }

    export enum QueryStatus {
        FOUND = "FOUND",
        NOT_FOUND = "NOT_FOUND",
        IN_PROGRESS = "IN_PROGRESS"
    }

    export class RefundRequestMessage extends Message {
        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(paymentId: string): void

        getFullRefund(): boolean

        setFullRefund(fullRefund: boolean): void;

        getAmount(): number

        setAmount(amount: number): void
    }

    export class RefundResponseMessage extends Message {
        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(paymentId: string): void

        getRefund(): payments.Refund

        setRefund(refund: payments.Refund): void

        getReason(): ErrorCode

        setReason(reason: ErrorCode): void

        getMessage(): string

        setMessage(message: string): void

        getCode(): TxState

        setCode(message: TxState): void
    }

    export class RemoteError {
    }

    export class RemoteMessage {
        getId(): string

        setId(id: string): void

        getType(): RemoteMessageType

        setType(type: RemoteMessageType): void

        getPackageName(): string

        setPackageName(packageName: string): void

        getMethod(): string

        setMethod(method: string): void

        getPayload(): string

        setPayload(payload: string): void

        getRemoteSourceSDK(): string

        setRemoteSourceSDK(remoteSourceSDK: string): void

        getRemoteApplicationID(): string

        setRemoteApplicationID(remoteApplicationID: string): void

        getVersion(): number

        setVersion(remoteApplicationID: number): number

        getFragmentIndex(): number

        setFragmentIndex(fragmentIndex: number): number

        getLastFragment(): boolean

        setLastFragment(fragmentIndex: boolean): boolean

        getAttachmentEncoding(): string

        setAttachmentEncoding(attachmentEncoding: string): void

        getAttachment(): string

        setAttachment(attachment: string): void
    }

    export enum RemoteMessageType {
        COMMAND = "COMMAND",
        QUERY = "QUERY",
        EVENT = "EVENT",
        PING = "PING",
        PONG = "PONG"
    }

    export class ResetDeviceResponseMessage extends Message {
        getReason(): string

        setReason(reason: string): void

        getStatus(): ResultStatus

        setStatus(status: ResultStatus): void

        getState(): ExternalDeviceState

        setState(state: ExternalDeviceState): void
    }

    export class ResetMessage {
    }

    export enum ResultStatus {
        SUCCESS = "SUCCESS",
        FAIL = "FAIL",
        CANCEL = "CANCEL"
    }

    export class RetrieveDeviceStatusRequestMessage extends Message {
        getSendLastMessage(): boolean

        setSendLastMessage(sendLastMessage: boolean): void
    }

    export class RetrieveDeviceStatusResponseMessage extends Message {
        getReason(): string

        setReason(reason: string): void

        getStatus(): ResultStatus

        setStatus(status: ResultStatus): void

        getState(): ExternalDeviceState

        setState(state: ExternalDeviceState): void

        getSubState(): ExternalDeviceSubState

        setSubState(state: ExternalDeviceSubState): void

        getData(): ExternalDeviceStateData

        setData(state: ExternalDeviceStateData): void
    }

    export class RetrievePaymentRequestMessage extends Message {
        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void
    }

    export class RetrievePaymentResponseMessage extends Message {
        getReason(): string

        setReason(reason: string): void

        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void

        getQueryStatus(): remotepay.QueryStatus

        setQueryStatus(queryStatus: remotepay.QueryStatus): void

        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void
    }

    export class RetrievePendingPaymentsMessage extends Message {
    }

    export class RetrievePendingPaymentsResponseMessage extends Message {
        getStatus(): ResultStatus

        setStatus(status: ResultStatus): void

        getPendingPaymentEntries(): Array<base.PendingPaymentEntry>

        setPendingPaymentEntries(pendingPaymentEntries: Array<base.PendingPaymentEntry>): void
    }

    export class ShowPaymentReceiptOptionsMessage extends Message {
        getOrderId(): string

        setOrderId(orderId: string)

        getPaymentId(): string

        setPaymentId(orderId: string)
    }

    export class ShutDownMessage extends Message {
    }

    export class SignatureVerifiedMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getVerified(): boolean

        setVerified(verified: boolean): void
    }

    export class TerminalMessage extends Message {
        getText(): string

        setText(text: string): void
    }

    export class TextPrintMessage extends Message {
        getTextLines(): Array<string>

        setTextLines(textLines: Array<string>): void

        getExternalPrintJobId(): string

        setExternalPrintJobId(externalPrintJobId: string): void

        getPrinter(): printer.Printer

        setPrinter(printer: printer.Printer): void
    }

    export class ThankYouMessage extends Message {
    }

    export class TipAddedMessage extends Message {
        getTipAmount(): number

        setTipAmount(tipAmount: number)
    }

    export class TipAdjustMessage extends Message {
        getTipAmount(): number

        setTipAmount(tipAmount: number)

        getOrderId(): string

        setOrderId(orderId: string)

        getPaymentId(): string

        setPaymentId(orderId: string)
    }

    export class TipAdjustResponseMessage extends Message {
        getSuccess: boolean

        setSuccess(success: boolean)

        getAmount(): number

        setAmount(amount: number)

        getOrderId(): string

        setOrderId(orderId: string)

        getPaymentId(): string

        setPaymentId(orderId: string)

    }

    export class TransactionType {
    }

    export class TxStartRequestMessage extends Message {
        getSuppressOnScreenTips(): boolean

        setSuppressOnScreenTips(suppressOnScreenTips: boolean): void

        getOrder(): order.Order

        setOrder(order: order.Order)

        getPayIntent(): PayIntent

        setPayIntent(payIntent: PayIntent)

        getRequestInfo(): string

        setRequestInfo(requestInfo: string)
    }

    export class TxStartResponseMessage extends Message {
        getSuccess(): boolean

        setSuccess(success: boolean): void

        getOrder(): base.Reference

        setOrder(order: base.Reference): void

        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void

        getResult(): TxStartResponseResult

        setResult(result: TxStartResponseResult): void

        getRequestInfo(): string

        setRequestInfo(requestInfo: string)
    }

    export enum TxStartResponseResult {
        SUCCESS = "SUCCESS",
        ORDER_MODIFIED = "ORDER_MODIFIED",
        ORDER_LOAD = "ORDER_LOAD",
        DUPLICATE = "DUPLICATE",
        FAIL = "FAIL"
    }

    export enum TxState {
        START = "START",
        SUCCESS = "SUCCESS",
        FAIL = "FAIL"
    }

    export class TxStateMessage extends Message {
        getTxState(): TxState

        setTxState(txState: TxState): void
    }

    export enum UiDirection {
        ENTER = "ENTER",
        EXIT = "EXIT"
    }

    export enum UiState {
        START = "START",
        FAILED = "FAILED",
        FATAL = "FATAL",
        TRY_AGAIN = "TRY_AGAIN",
        INPUT_ERROR = "INPUT_ERROR",
        PIN_BYPASS_CONFIRM = "PIN_BYPASS_CONFIRM",
        CANCELED = "CANCELED",
        TIMED_OUT = "TIMED_OUT",
        DECLINED = "DECLINED",
        VOIDED = "VOIDED",
        CONFIGURING = "CONFIGURING",
        PROCESSING = "PROCESSING",
        REMOVE_CARD = "REMOVE_CARD",
        PROCESSING_GO_ONLINE = "PROCESSING_GO_ONLINE",
        PROCESSING_CREDIT = "PROCESSING_CREDIT",
        PROCESSING_SWIPE = "PROCESSING_SWIPE",
        SELECT_APPLICATION = "SELECT_APPLICATION",
        PIN_PAD = "PIN_PAD",
        MANUAL_CARD_NUMBER = "MANUAL_CARD_NUMBER",
        MANUAL_CARD_CVV = "MANUAL_CARD_CVV",
        MANUAL_CARD_CVV_UNREADABLE = "MANUAL_CARD_CVV_UNREADABLE",
        MANUAL_CARD_EXPIRATION = "MANUAL_CARD_EXPIRATION",
        SELECT_ACCOUNT = "SELECT_ACCOUNT",
        CASHBACK_CONFIRM = "CASHBACK_CONFIRM",
        CASHBACK_SELECT = "CASHBACK_SELECT",
        CONTACTLESS_TAP_REQUIRED = "CONTACTLESS_TAP_REQUIRED",
        VOICE_REFERRAL_RESULT = "VOICE_REFERRAL_RESULT",
        CONFIRM_PARTIAL_AUTH = "CONFIRM_PARTIAL_AUTH",
        PACKET_EXCEPTION = "PACKET_EXCEPTION",
        CONFIRM_DUPLICATE_CHECK = "CONFIRM_DUPLICATE_CHECK",
        FORCE_ACCEPTANCE = "FORCE_ACCEPTANCE",
        VERIFY_SIGNATURE_ON_PAPER = "VERIFY_SIGNATURE_ON_PAPER",
        VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID",
        VERIFY_SIGNATURE_ON_SCREEN = "VERIFY_SIGNATURE_ON_SCREEN",
        VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID",
        ADD_SIGNATURE = "ADD_SIGNATURE",
        SIGNATURE_ON_SCREEN_FALLBACK = "SIGNATURE_ON_SCREEN_FALLBACK",
        RETURN_TO_MERCHANT = "RETURN_TO_MERCHANT",
        SIGNATURE_REJECT = "SIGNATURE_REJECT",
        ADD_SIGNATURE_CANCEL_CONFIRM = "ADD_SIGNATURE_CANCEL_CONFIRM",
        ADD_TIP = "ADD_TIP",
        RECEIPT_OPTIONS = "RECEIPT_OPTIONS",
        HANDLE_TENDER = "HANDLE_TENDER",
        SELECT_LANGUAGE = "SELECT_LANGUAGE",
        APPROVED = "APPROVED",
        OFFLINE_PAYMENT_CONFIRM = "OFFLINE_PAYMENT_CONFIRM",
        CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
        STARTING_CUSTOM_ACTIVITY = "STARTING_CUSTOM_ACTIVITY"
    }

    export class UiStateMessage extends Message {
        getUiText(): string

        setUiText(uiText: string): void

        getUiDirection(): UiDirection

        setUiDirection(uiDirection: UiDirection): UiDirection

        getUiState(): UiState

        setUiState(uiDirection: UiState): UiState

        getInputOptions(): Array<InputOption>

        setInputOptions(inputOptions: Array<InputOption>): void
    }

    export class VaultCardMessage extends Message {
        getCardEntryMethods(): number

        setCardEntryMethods(cardEntryMethods: number): void
    }

    export class VaultCardResponseMessage extends Message {
        getReason(): string

        setReason(reason: string): any

        getStatus(): ResultStatus

        setStatus(reason: ResultStatus): any

        getCard(): payments.VaultedCard

        setCard(reason: payments.VaultedCard): any
    }

    export class VerifySignatureMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getSignature(): base.Signature

        setSignature(isAuth: base.Signature): void
    }

    export class VoidPaymentMessage extends Message {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getVoidReason(): order.VoidReason

        setVoidReason(voidReason: order.VoidReason): void
    }

    export class WelcomeMessage extends Message {
    }
}

export namespace remotepay {

    export class ActivityMessage extends BaseRequest {
        getAction(): string

        setAction(action: string): void

        getPayload(): string

        setPayload(payload: string): void
    }

    export class AuthRequest extends TransactionRequest {
        getTippableAmount(): number

        setTippableAmount(tippableAmount: number): void

        getDisableCashback(): boolean

        setDisableCashback(disableCashBack: boolean): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void

        getAllowOfflinePayment(): boolean

        setAllowOfflinePayment(allowOfflinePayment: boolean): void

        getForceOfflinePayment(): boolean

        setForceOfflinePayment(forceOfflinePayment: boolean): void

        getApproveOfflinePaymentWithoutPrompt(): boolean

        setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void
    }

    export class AuthResponse extends PaymentResponse {
    }

    export class BaseRequest {
        getRequestId(): string

        setRequestId(requestId: string): void
    }

    export class BaseResponse {
        getSuccess(): boolean

        setSuccess(success: boolean): void

        getResult(): ResponseCode

        setResult(result: ResponseCode): void

        getReason(): string

        setReason(reason: string): void

        getMessage(): string

        setMessage(message: string): void
    }

    export class CapturePreAuthRequest extends BaseRequest {
        getAmount(): number

        setAmount(amount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class CapturePreAuthResponse extends BaseResponse {
        getAmount(): number

        setAmount(amount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class CloseoutRequest {
        getAllowOpenTabs(): boolean

        setAllowOpenTabs(allowOpenTabs: boolean): void

        getBatchId(): string

        setBatchId(batchId: string): void
    }


    export class CloseoutResponse extends BaseResponse {
        getBatch(): payments.Batch

        setBatch(batch: payments.Batch)
    }

    export class CloverDeviceErrorEvent {
        getMessage(): string

        setMessage(message: string): void

        getCode(): DeviceErrorEventCode

        setCode(code: DeviceErrorEventCode): void

        getCause(): PlatformError

        setCause(cause: PlatformError): void

        getType(): ErrorType

        setType(type: ErrorType): void
    }

    export class CloverDeviceEvent {
        getMessage(): string

        setMessage(message: string): void

        getCode(): number

        setCode(code: number): void

        getEventState(): DeviceEventState

        setEventState(eventState: DeviceEventState): void

        getInputOptions(): Array<InputOption>

        setInputOptions(inputOptions: Array<InputOption>): void
    }

    export class ConfirmPaymentRequest {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getChallenges(): Array<base.Challenge>

        setChallenges(payment: Array<base.Challenge>): void
    }

    export class Credit {
    }

    export class CustomActivityRequest extends BaseRequest {
        getAction(): string

        setAction(action: string): void

        getPayload(): string

        setPayload(payload: string): void

        getNonBlocking(): boolean

        setNonBlocking(nonBlocking: boolean): void
    }

    export class CustomActivityResponse extends BaseResponse {
        getAction(): string

        setAction(action: string): void

        getPayload(): string

        setPayload(payload: string): void
    }

    export enum DeviceErrorEventCode {
        InvalidConfig = "InvalidConfig",
        IoSyncFailed = "IoSyncFailed",
        GetString = "GetString",
        InvalidEndpoint = "InvalidEndpoint",
        AbortEndpoint = "AbortEndpoint",
        DeviceIoControl = "DeviceIoControl",
        GetOverlappedResult = "GetOverlappedResult",
        ReceiveThreadTerminated = "ReceiveThreadTerminated",
        WriteFailed = "WriteFailed",
        ReadFailed = "ReadFailed",
        IoControlMessage = "IoControlMessage",
        CancelIoFailed = "CancelIoFailed",
        IoCancelled = "IoCancelled",
        IoTimedOut = "IoTimedOut",
        IoEndpointGlobalCancelRedo = "IoEndpointGlobalCancelRedo",
        GetDeviceKeyValueFailed = "GetDeviceKeyValueFailed",
        SetDeviceKeyValueFailed = "SetDeviceKeyValueFailed",
        Win32Error = "Win32Error",
        DeviceAllreadyLocked = "DeviceAllreadyLocked",
        EndpointAllreadyLocked = "EndpointAllreadyLocked",
        DeviceNotFound = "DeviceNotFound",
        UserAborted = "UserAborted",
        InvalidParam = "InvalidParam",
        AccessDenied = "AccessDenied",
        ResourceBusy = "ResourceBusy",
        Overflow = "Overflow",
        PipeError = "PipeError",
        Interrupted = "Interrupted",
        InsufficientMemory = "InsufficientMemory",
        NotSupported = "NotSupported",
        UnknownError = "UnknownError",
        MonoApiError = "MonoApiError",
        None = "None",
        Success = "Success",
        Ok = "Ok",
        SendNotificationFailure = "SendNotificationFailure",
        NotConnected = "NotConnected"
    }

    export class DeviceInfo {
        getName(): string

        setName(name: string): void

        getModel(): string

        setModel(model: string): void

        getSerial(): string

        setSerial(serial: string): void

        getSupportsAcks(): boolean

        setSupportsAcks(supportsAcks: boolean): void
    }

    export enum DeviceEventState {
        START = "START",
        FAILED = "FAILED",
        FATAL = "FATAL",
        TRY_AGAIN = "TRY_AGAIN",
        INPUT_ERROR = "INPUT_ERROR",
        PIN_BYPASS_CONFIRM = "PIN_BYPASS_CONFIRM",
        CANCELED = "CANCELED",
        TIMED_OUT = "TIMED_OUT",
        DECLINED = "DECLINED",
        VOIDED = "VOIDED",
        CONFIGURING = "CONFIGURING",
        PROCESSING = "PROCESSING",
        REMOVE_CARD = "REMOVE_CARD",
        PROCESSING_GO_ONLINE = "PROCESSING_GO_ONLINE",
        PROCESSING_CREDIT = "PROCESSING_CREDIT",
        PROCESSING_SWIPE = "PROCESSING_SWIPE",
        SELECT_APPLICATION = "SELECT_APPLICATION",
        PIN_PAD = "PIN_PAD",
        MANUAL_CARD_NUMBER = "MANUAL_CARD_NUMBER",
        MANUAL_CARD_CVV = "MANUAL_CARD_CVV",
        MANUAL_CARD_CVV_UNREADABLE = "MANUAL_CARD_CVV_UNREADABLE",
        MANUAL_CARD_EXPIRATION = "MANUAL_CARD_EXPIRATION",
        SELECT_ACCOUNT = "SELECT_ACCOUNT",
        CASHBACK_CONFIRM = "CASHBACK_CONFIRM",
        CASHBACK_SELECT = "CASHBACK_SELECT",
        CONTACTLESS_TAP_REQUIRED = "CONTACTLESS_TAP_REQUIRED",
        VOICE_REFERRAL_RESULT = "VOICE_REFERRAL_RESULT",
        CONFIRM_PARTIAL_AUTH = "CONFIRM_PARTIAL_AUTH",
        PACKET_EXCEPTION = "PACKET_EXCEPTION",
        CONFIRM_DUPLICATE_CHECK = "CONFIRM_DUPLICATE_CHECK",
        VERIFY_SIGNATURE_ON_PAPER = "VERIFY_SIGNATURE_ON_PAPER",
        VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID",
        VERIFY_SIGNATURE_ON_SCREEN = "VERIFY_SIGNATURE_ON_SCREEN",
        VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID",
        ADD_SIGNATURE = "ADD_SIGNATURE",
        SIGNATURE_ON_SCREEN_FALLBACK = "SIGNATURE_ON_SCREEN_FALLBACK",
        RETURN_TO_MERCHANT = "RETURN_TO_MERCHANT",
        SIGNATURE_REJECT = "SIGNATURE_REJECT",
        ADD_SIGNATURE_CANCEL_CONFIRM = "ADD_SIGNATURE_CANCEL_CONFIRM",
        ADD_TIP = "ADD_TIP",
        RECEIPT_OPTIONS = "RECEIPT_OPTIONS",
        HANDLE_TENDER = "HANDLE_TENDER"
    }

    export enum ErrorType {
        COMMUNICATION = "COMMUNICATION",
        VALIDATION = "VALIDATION",
        EXCEPTION = "EXCEPTION"
    }

    export enum ExternalDeviceState {
        IDLE = "IDLE",
        BUSY = "BUSY",
        WAITING_FOR_POS = "WAITING_FOR_POS",
        WAITING_FOR_CUSTOMER = "WAITING_FOR_CUSTOMER",
        UNKNOWN = "UNKNOWN"
    }

    export class ICloverConnector {
        acceptSignature(request: VerifySignatureRequest)

        acceptPayment(payment: payments.Payment)

        rejectPayment(payment: payments.Payment, challenge: base.Challenge)

        auth(authRequest: AuthRequest)

        preAuth(authRequest: PreAuthRequest)

        cancel()

        capturePreAuth(capturePreAuthRequest: CapturePreAuthRequest)

        closeout(closeoutRequest: CloseoutRequest);

        showPaymentReceiptOptions(orderId: string, paymentId: string)

        displayPaymentReceiptOptions(orderId: string, paymentId: string)

        showDisplayOrder(order: order.DisplayOrder)

        removeDisplayOrder(order: order.DisplayOrder)

        discountAddedToDisplayOrder(discount: order.DisplayDiscount, order: order.DisplayOrder)

        discountRemovedFromDisplayOrder(discount: order.DisplayDiscount, order: order.DisplayOrder)

        lineItemAddedToDisplayOrder(lineItem: order.DisplayLineItem, order: order.DisplayOrder)

        lineItemRemovedFromDisplayOrder(lineItem: order.DisplayLineItem, order: order.DisplayOrder)

        dispose()

        invokeInputOption(io: InputOption)

        manualRefund(request: ManualRefundRequest)

        refundPayment(request: RefundPaymentRequest)

        openCashDrawer(request: OpenCashDrawerRequest)

        printImage(bitmap: Img)

        printImageFromURL(imgUrl: string)

        printText(messages: Array<string>)

        print(request: PrintRequest)

        rejectSignature(request: VerifySignatureRequest)

        resetDevice()

        sale(request: SaleRequest)

        showMessage(message: string)

        showThankYouScreen()

        showWelcomeScreen()

        tipAdjustAuth(request: TipAdjustAuthRequest)

        vaultCard(cardEntryMethods: number)

        voidPayment(request: VoidPaymentRequest)

        initializeConnection()

        retrievePendingPayments()

        readCardData(request: ReadCardDataRequest)

        sendMessageToActivity(request: MessageToActivity)

        startCustomActivity(request: CustomActivityRequest)

        retrieveDeviceStatus(request: RetrieveDeviceStatusRequest)

        retrievePayment(request: RetrievePaymentRequest)

        retrievePrinters(request: RetrievePrintersRequest)

        retrievePrintJobStatus(request: PrintJobStatusRequest)
    }

    export class ICloverConnectorListener {
        onDisconnected();

        onDeviceDisconnected();

        onConnected();

        onDeviceConnected()

        onReady(merchantInfo: MerchantInfo)

        onDeviceReady(merchantInfo: MerchantInfo)

        onDeviceActivityStart(deviceEvent: CloverDeviceEvent)

        onDeviceActivityEnd(deviceEvent: CloverDeviceEvent)

        onDeviceError(deviceErrorEvent: CloverDeviceErrorEvent)

        onAuthResponse(response: AuthResponse)

        onTipAdjustAuthResponse(response: TipAdjustAuthResponse)

        onCapturePreAuthResponse(reponse: CapturePreAuthResponse)

        onVerifySignatureRequest(request: VerifySignatureRequest)

        onConfirmPaymentRequest(request: ConfirmPaymentRequest)

        onCloseoutResponse(response: CloseoutResponse)

        onSaleResponse(response: SaleResponse)

        onManualRefundResponse(response: ManualRefundResponse)

        onRefundPaymentResponse(response: RefundPaymentResponse)

        onTipAdded(tipAdded: TipAdded)

        onVoidPaymentResponse(response: VoidPaymentResponse)

        onVaultCardResponse(response: VaultCardResponse)

        onPreAuthResponse(response: PreAuthResponse)

        onRetrievePendingPaymentsResponse(response: RetrievePendingPaymentsResponse)

        onReadCardDataResponse(response: ReadCardDataResponse)

        onMessageFromActivity(message: MessageFromActivity)

        onCustomActivityResponse(response: CustomActivityResponse)

        onRetrieveDeviceStatusResponse(response: RetrieveDeviceStatusResponse)

        onResetDeviceResponse(response: ResetDeviceResponse)

        onRetrievePaymentResponse(response: RetrievePaymentResponse)

        onRetrievePrintersResponse(response: RetrievePrintersResponse)

        onPrintJobStatusResponse(response: PrintJobStatusResponse)
    }

    export class Img {
        getSrc(): string

        setSrc(src: string): void

        getWidth(): number

        setWidth(width: number): void

        getHeight(): number

        setHeight(height: number): void
    }

    export class InputOption {
        getKeyPress(): KeyPress

        setKeyPress(keypress: KeyPress): void

        getDescription(): string

        setDescription(description: string): void
    }

    export enum KeyPress {
        NONE = "NONE",
        ENTER = "ENTER",
        ESC = "ESC",
        BACKSPACE = "BACKSPACE",
        TAB = "TAB",
        STAR = "STAR",
        BUTTON_1 = "BUTTON_1",
        BUTTON_2 = "BUTTON_2",
        BUTTON_3 = "BUTTON_3",
        BUTTON_4 = "BUTTON_4",
        BUTTON_5 = "BUTTON_5",
        BUTTON_6 = "BUTTON_6",
        BUTTON_7 = "BUTTON_7",
        BUTTON_8 = "BUTTON_8",
        DIGIT_1 = "DIGIT_1",
        DIGIT_2 = "DIGIT_2",
        DIGIT_3 = "DIGIT_3",
        DIGIT_4 = "DIGIT_4",
        DIGIT_5 = "DIGIT_5",
        DIGIT_6 = "DIGIT_6",
        DIGIT_7 = "DIGIT_7",
        DIGIT_8 = "DIGIT_8",
        DIGIT_9 = "DIGIT_9",
        DIGIT_0 = "DIGIT_0"
    }

    export class ManualRefundRequest extends TransactionRequest {
    }

    export class ManualRefundResponse extends PaymentResponse {
        getCredit(): payments.Credit;

        setCredit(credit: payments.Credit): void
    }

    export class MessageFromActivity extends ActivityMessage {
    }

    export class MessageToActivity extends ActivityMessage {
    }

    export class MerchantInfo {
        getMerchantID(): string

        setMerchantID(merchantID: string): void

        getMerchantMID(): string

        setMerchantMID(merchantMID: string): void

        getMerchantName(): string

        setMerchantName(merchantName: string): void

        getSupportsAuths(): boolean

        setSupportsAuths(supportsAuths: boolean): void

        getSupportsPreAuths(): boolean

        setSupportsPreAuths(supportsPreAuths: boolean): void

        getSupportsSales(): boolean

        setSupportsSales(supportsSales: boolean): void

        getSupportsVaultCards(): boolean

        setSupportsVaultCards(supportsVaultCards: boolean): void

        getSupportsManualRefunds(): boolean

        setSupportsManualRefunds(supportsManualRefunds: boolean): void

        getSupportsTipAdjust(): boolean

        setSupportsTipAdjust(supportsTipAdjust: boolean): void

        getDeviceInfo(): DeviceInfo

        setDeviceInfo(deviceInfo: DeviceInfo): void
    }

    export class OpenCashDrawerRequest {
        getReason(): string

        setReason(reason: string): void

        getDeviceId(): string

        setDeviceId(deviceId: string): void
    }

    export class PayIntent {
    }

    export class Payment {
    }

    export class PaymentResponse extends BaseResponse {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getIsSale(): boolean

        setIsSale(isSale: boolean): void

        getIsPreAuth(): boolean

        setIsPreAuth(isPreAuth: boolean): void

        getIsAuth(): boolean

        setIsAuth(isAuth: boolean): void

        getSignature(): base.Signature

        setSignature(isAuth: base.Signature): void
    }

    export class PlatformError {
    }

    export class PreAuthRequest extends TransactionRequest {
    }

    export class PreAuthResponse extends PaymentResponse {
    }

    export class PrintJobStatusRequest extends BaseRequest {
        setPrintRequestId(printRequestId: string): void

        getPrintRequestId(): string
    }

    export class PrintJobStatusResponse extends BaseResponse {
        getStatus(): printer.PrintJobStatus

        setStatus(status: printer.PrintJobStatus): void

        setPrintRequestId(printRequestId: string): void

        getPrintRequestId(): string
    }

    export class PrintRequest extends BaseRequest {
        getImage(): Array<Img>

        setImage(image: Array<Img>): void

        getText(): Array<string>

        setText(text: Array<string>): void

        getImageUrl(): Array<string>

        setImageUrl(imageUrl: Array<string>): void

        getPrintRequestId(): string

        setPrintRequestId(printRequestId: string): void

        getPrintDeviceId(): string

        setPrintDeviceId(printDeviceId: string): void
    }

    export enum QueryStatus {
        FOUND = "FOUND",
        NOT_FOUND = "NOT_FOUND",
        IN_PROGRESS = "IN_PROGRESS"
    }

    export class ReadCardDataRequest extends BaseRequest {
        getIsForceSwipePinEntry(): boolean

        setIsForceSwipePinEntry(isForceSwipePinEntry: boolean): void

        getCardEntryMethods(): number

        setCardEntryMethods(cardEntryMethods: number): void
    }

    export class ReadCardDataResponse extends BaseResponse {
        getCardData(): base.CardData

        setCardData(cardData: base.CardData): void
    }

    export enum ResponseCode {
        SUCCESS = "SUCCESS",
        FAIL = "FAIL",
        UNSUPPORTED = "UNSUPPORTED",
        CANCEL = "CANCEL",
        DUPLICATE = "DUPLICATE",
        ERROR = "ERROR"
    }

    export class RefundPaymentRequest extends BaseRequest {
        getFullRefund(): boolean

        setFullRefund(fullRefund: boolean): void;

        getAmount(): number

        setAmount(amount: number): void

        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class RefundPaymentResponse extends BaseResponse {
        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(orderId: string): void

        getRefund(): payments.Refund

        setRefund(refund: payments.Refund): void
    }

    export class ResetDeviceResponse extends BaseResponse {
        getState(): remotemessage.ExternalDeviceState

        setState(state: remotemessage.ExternalDeviceState): void
    }

    export class RetrieveDeviceStatusRequest extends BaseRequest {
        getSendLastMessage(): boolean

        setSendLastMessage(sendLastMessage: boolean): void
    }

    export class RetrieveDeviceStatusResponse extends BaseResponse {
        getState(): remotemessage.ExternalDeviceState

        setState(state: remotemessage.ExternalDeviceState): void

        getData(): remotemessage.ExternalDeviceStateData

        setData(data: remotemessage.ExternalDeviceStateData): void
    }

    export class RetrievePaymentRequest extends BaseRequest {
        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void
    }

    export class RetrievePaymentResponse extends BaseResponse {
        getExternalPaymentId(): string

        setExternalPaymentId(externalPaymentId: string): void

        getQueryStatus(): QueryStatus

        setQueryStatus(queryStatus: QueryStatus): void

        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void
    }

    export class RetrievePendingPaymentsResponse extends BaseResponse {
        getPendingPaymentEntries(): Array<base.PendingPaymentEntry>

        setPendingPaymentEntries(pendingPaymentEntries: Array<base.PendingPaymentEntry>): void
    }

    export class RetrievePrintersRequest extends BaseRequest {
        getCategory(): printer.PrintCategory

        setCategory(category: printer.PrintCategory): void
    }

    export class RetrievePrintersResponse extends BaseResponse {
        getPrinters(): Array<printer.Printer>

        setPrinters(printers: Array<printer.Printer>)
    }

    export class SaleRequest extends TransactionRequest {
        getTippableAmount(): number

        setTippableAmount(tippableAmount: number): void

        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getDisableCashback(): boolean

        setDisableCashback(disableCashback: boolean): void

        getDisableTipOnScreen(): boolean

        setDisableTipOnScreen(disableTipOnScreen: boolean): void

        getTaxAmount(): number

        setTaxAmount(taxAmount: number): void

        getAllowOfflinePayment(): boolean

        setAllowOfflinePayment(allowOfflinePayment: boolean): void

        getForceOfflinePayment(): boolean

        setForceOfflinePayment(forceOfflinePayment: boolean): void

        getApproveOfflinePaymentWithoutPrompt(): boolean

        setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void

        getTipMode(): payments.TipMode

        setTipMode(tipMode: payments.TipMode): void
    }

    export class SaleResponse extends PaymentResponse {
    }

    export class TipAdded extends BaseResponse {
        getTipAmount(): number

        setTipAmount(tipAmount: number): void
    }

    export class TipAdjustAuthRequest extends BaseRequest {
        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getOrderId(): string

        setOrderId(orderId: string): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class TipAdjustAuthResponse extends BaseResponse {
        getTipAmount(): number

        setTipAmount(tipAmount: number): void

        getPaymentId(): string

        setPaymentId(paymentId): string
    }

    export class TransactionRequest {
        getOrderId(): string

        setOrderId(orderId: string): void

        getSignatureThreshold(): number

        setSignatureThreshold(signatureThreshold: number)

        getDisablePrinting(): boolean

        setDisablePrinting(disablePrinting: boolean): void

        getDisableReceiptSelection(): boolean

        setDisableReceiptSelection(disableReceiptSelection: boolean): void

        getDisableDuplicateChecking(): boolean

        setDisableDuplicateChecking(disableDuplicateChecking: boolean): void

        getSignatureEntryLocation(): payments.DataEntryLocation

        setSignatureEntryLocation(signatureEntryLocation: payments.DataEntryLocation)

        getCardNotPresent(): boolean

        setCardNotPresent(cardNotPresent: boolean): void

        getDisableRestartTransactionOnFail(): boolean

        setDisableRestartTransactionOnFail(disableRestartTransactionOnFail: boolean): void

        getAmount(): number

        setAmount(amount: number)

        getCardEntryMethods(): number

        setCardEntryMethods(cardEntryMethods: number)

        getVaultedCard(): payments.VaultedCard

        setVaultedCard(vaultedCard: payments.VaultedCard)

        getExternalId(): string

        setExternalId(externalId: string): void

        getType(): TransactionType

        setType(type: TransactionType): void

        getAutoAcceptPaymentConfirmations(): boolean

        setAutoAcceptPaymentConfirmations(autoAcceptPaymentConfirmations: boolean): void

        getAutoAcceptSignature(): boolean

        setAutoAcceptSignature(autoAcceptSignature: boolean): void
    }

    export enum TransactionType {
        PAYMENT = "PAYMENT",
        CREDIT = "CREDIT",
        AUTH = "AUTH",
        DATA = "DATA",
        BALANCE_INQUIRY = "BALANCE_INQUIRY"
    }

    export class VaultCardResponse extends BaseResponse {
        getCard(): payments.VaultedCard

        setCard(card: payments.VaultedCard): void
    }

    export class VerifySignatureRequest extends BaseRequest {
        getPayment(): payments.Payment

        setPayment(payment: payments.Payment): void

        getSignature(): base.Signature

        setSignature(paymentRef: base.Signature): void
    }

    export class VoidPaymentRequest extends BaseRequest {
        getOrderId(): string

        setOrderId(orderId): string

        getPaymentId(): string

        setPaymentId(paymentId): string

        getEmployeeId(): string

        setEmployeeId(employeeId): string

        getVoidReason(): string

        setVoidReason(voidReason): string
    }

    export class VoidPaymentResponse extends BaseResponse {
        getPaymentId(): string

        setPaymentId(paymentId): string
    }
}
