
export namespace apps {
    

export class AppTracking {
  getDeveloperAppId(): string;

  setDeveloperAppId(developerAppId: string): void;

  getApplicationName(): string;

  setApplicationName(applicationName: string): void;

  getApplicationID(): string;

  setApplicationID(applicationID: string): void;

  getApplicationVersion(): string;

  setApplicationVersion(applicationVersion: string): void;

  getSourceSDK(): string;

  setSourceSDK(sourceSDK: string): void;

  getSourceSDKVersion(): string;

  setSourceSDKVersion(sourceSDKVersion: string): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace base {
    

export class Address {
  getAddress1(): string;

  setAddress1(address1: string): void;

  getAddress2(): string;

  setAddress2(address2: string): void;

  getAddress3(): string;

  setAddress3(address3: string): void;

  getCity(): string;

  setCity(city: string): void;

  getCountry(): string;

  setCountry(country: string): void;

  getPhoneNumber(): string;

  setPhoneNumber(phoneNumber: string): void;

  getState(): string;

  setState(state: string): void;

  getZip(): string;

  setZip(zip: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof base
* @enum {string}
*/
export enum AppExclusionType {
  ALL = "ALL",
  MARKET = "MARKET",
  SEARCH = "SEARCH",
  INSTALL = "INSTALL"
}



/**
* @memberof base
* @enum {string}
*/
export enum ApprovalStatus {
  NEW = "NEW",
  PENDING = "PENDING",
  APPROVED_PENDING_SIGNING = "APPROVED_PENDING_SIGNING",
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  PUBLISHED = "PUBLISHED"
}



/**
* @memberof base
* @enum {string}
*/
export enum BusinessTypeCode {
  FULL_SERVICE_RESTAURANT = "FULL_SERVICE_RESTAURANT",
  QUICK_SERVICE_RESTAURANT = "QUICK_SERVICE_RESTAURANT",
  COFFEE_SHOP = "COFFEE_SHOP",
  BAKERY = "BAKERY",
  BAR = "BAR",
  FOOD_TRUCK = "FOOD_TRUCK",
  FROZEN_YOGURT = "FROZEN_YOGURT",
  PIZZA = "PIZZA",
  DELI = "DELI",
  OTHER_RESTAURANT = "OTHER_RESTAURANT",
  BOUTIQUE = "BOUTIQUE",
  CONVENIENCE_STORE = "CONVENIENCE_STORE",
  GROCERY = "GROCERY",
  LIQUOR_STORE = "LIQUOR_STORE",
  VAPE_SHOP = "VAPE_SHOP",
  JEWELRY = "JEWELRY",
  FLORIST = "FLORIST",
  OTHER_RETAIL = "OTHER_RETAIL",
  FITNESS = "FITNESS",
  SPA = "SPA",
  HAIR_SALON = "HAIR_SALON",
  HOME_AND_REPAIR = "HOME_AND_REPAIR",
  PROFESSIONAL_SERVICES = "PROFESSIONAL_SERVICES",
  CATERING = "CATERING",
  OTHER_SERVICE = "OTHER_SERVICE"
}

export class CardData {
  getTrack1(): string;

  setTrack1(track1: string): void;

  getTrack2(): string;

  setTrack2(track2: string): void;

  getTrack3(): string;

  setTrack3(track3: string): void;

  getEncrypted(): boolean;

  setEncrypted(encrypted: boolean): void;

  getMaskedTrack1(): string;

  setMaskedTrack1(maskedTrack1: string): void;

  getMaskedTrack2(): string;

  setMaskedTrack2(maskedTrack2: string): void;

  getMaskedTrack3(): string;

  setMaskedTrack3(maskedTrack3: string): void;

  getPan(): string;

  setPan(pan: string): void;

  getCardholderName(): string;

  setCardholderName(cardholderName: string): void;

  getFirstName(): string;

  setFirstName(firstName: string): void;

  getLastName(): string;

  setLastName(lastName: string): void;

  getExp(): string;

  setExp(exp: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getFirst6(): string;

  setFirst6(first6: string): void;

  getMetaInfo(fieldName: string): object
}


export class Challenge {
  getType(): base.ChallengeType;

  setType(type: base.ChallengeType): void;

  getReason(): order.VoidReason;

  setReason(reason: order.VoidReason): void;

  getMessage(): string;

  setMessage(message: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof base
* @enum {string}
*/
export enum ChallengeType {
  DUPLICATE_CHALLENGE = "DUPLICATE_CHALLENGE",
  OFFLINE_CHALLENGE = "OFFLINE_CHALLENGE"
}

export class ChallengeTypeEnum {
  getChallengeType(): base.ChallengeType;

  setChallengeType(challengeType: base.ChallengeType): void;

  getMetaInfo(fieldName: string): object
}


export class CountryInfo {
  getCountryCode(): string;

  setCountryCode(countryCode: string): void;

  getDisplayName(): string;

  setDisplayName(displayName: string): void;

  getLocalDisplayName(): string;

  setLocalDisplayName(localDisplayName: string): void;

  getDefaultCurrency(): string;

  setDefaultCurrency(defaultCurrency: string): void;

  getDefaultTimezone(): string;

  setDefaultTimezone(defaultTimezone: string): void;

  getStateProvinceRequired(): boolean;

  setStateProvinceRequired(stateProvinceRequired: boolean): void;

  getZipPostalRequired(): boolean;

  setZipPostalRequired(zipPostalRequired: boolean): void;

  getCountyRequired(): boolean;

  setCountyRequired(countyRequired: boolean): void;

  getDefaultLocale(): string;

  setDefaultLocale(defaultLocale: string): void;

  getAppMarketBillingEnabled(): boolean;

  setAppMarketBillingEnabled(appMarketBillingEnabled: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class PendingPaymentEntry {
  getAmount(): number;

  setAmount(amount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getMetaInfo(fieldName: string): object
}


export class Point {
  getX(): number;

  setX(x: number): void;

  getY(): number;

  setY(y: number): void;

  getMetaInfo(fieldName: string): object
}


export class Points {
  getPoints(): Array<base.Point>;

  setPoints(points: Array<base.Point>): void;

  getMetaInfo(fieldName: string): object
}


export class Reference {
  getId(): string;

  setId(id: string): void;

  getMetaInfo(fieldName: string): object
}


export class ServiceCharge {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getPercentage(): number;

  setPercentage(percentage: number): void;

  getPercentageDecimal(): number;

  setPercentageDecimal(percentageDecimal: number): void;

  getMetaInfo(fieldName: string): object
}


export class Signature {
  getStrokes(): Array<base.Points>;

  setStrokes(strokes: Array<base.Points>): void;

  getWidth(): number;

  setWidth(width: number): void;

  getHeight(): number;

  setHeight(height: number): void;

  getMetaInfo(fieldName: string): object
}


export class Tender {
  getId(): string;

  setId(id: string): void;

  getEditable(): boolean;

  setEditable(editable: boolean): void;

  getLabelKey(): string;

  setLabelKey(labelKey: string): void;

  getLabel(): string;

  setLabel(label: string): void;

  getOpensCashDrawer(): boolean;

  setOpensCashDrawer(opensCashDrawer: boolean): void;

  getSupportsTipping(): boolean;

  setSupportsTipping(supportsTipping: boolean): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getVisible(): boolean;

  setVisible(visible: boolean): void;

  getInstructions(): string;

  setInstructions(instructions: string): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace custom {
    

export class CustomActivity {
  getAction(): string;

  setAction(action: string): void;

  getCategories(): Array<string>;

  setCategories(categories: Array<string>): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace customers {
    

export class Address {
  getId(): string;

  setId(id: string): void;

  getAddress1(): string;

  setAddress1(address1: string): void;

  getAddress2(): string;

  setAddress2(address2: string): void;

  getAddress3(): string;

  setAddress3(address3: string): void;

  getCity(): string;

  setCity(city: string): void;

  getCountry(): string;

  setCountry(country: string): void;

  getState(): string;

  setState(state: string): void;

  getZip(): string;

  setZip(zip: string): void;

  getMetaInfo(fieldName: string): object
}


export class Card {
  getId(): string;

  setId(id: string): void;

  getFirst6(): string;

  setFirst6(first6: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getFirstName(): string;

  setFirstName(firstName: string): void;

  getLastName(): string;

  setLastName(lastName: string): void;

  getExpirationDate(): string;

  setExpirationDate(expirationDate: string): void;

  getCardType(): string;

  setCardType(cardType: string): void;

  getToken(): string;

  setToken(token: string): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class Confirmation {
  getOrder(): base.Reference;

  setOrder(order: base.Reference): void;

  getCustomer(): base.Reference;

  setCustomer(customer: base.Reference): void;

  getCard(): base.Reference;

  setCard(card: base.Reference): void;

  getEmailAddress(): string;

  setEmailAddress(emailAddress: string): void;

  getMetaInfo(fieldName: string): object
}


export class Customer {
  getId(): string;

  setId(id: string): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getFirstName(): string;

  setFirstName(firstName: string): void;

  getLastName(): string;

  setLastName(lastName: string): void;

  getMarketingAllowed(): boolean;

  setMarketingAllowed(marketingAllowed: boolean): void;

  getCustomerSince(): number;

  setCustomerSince(customerSince: number): void;

  getOrders(): Array<base.Reference>;

  setOrders(orders: Array<base.Reference>): void;

  getAddresses(): Array<customers.Address>;

  setAddresses(addresses: Array<customers.Address>): void;

  getEmailAddresses(): Array<customers.EmailAddress>;

  setEmailAddresses(emailAddresses: Array<customers.EmailAddress>): void;

  getPhoneNumbers(): Array<customers.PhoneNumber>;

  setPhoneNumbers(phoneNumbers: Array<customers.PhoneNumber>): void;

  getCards(): Array<customers.Card>;

  setCards(cards: Array<customers.Card>): void;

  getMetadata(): customers.CustomerMetadata;

  setMetadata(metadata: customers.CustomerMetadata): void;

  getMetaInfo(fieldName: string): object
}


export class CustomerAssociationRequest {
  getPaymentRef(): base.Reference;

  setPaymentRef(paymentRef: base.Reference): void;

  getTokenRequestRef(): base.Reference;

  setTokenRequestRef(tokenRequestRef: base.Reference): void;

  getCustomer(): customers.Customer;

  setCustomer(customer: customers.Customer): void;

  getMetaInfo(fieldName: string): object
}


export class CustomerInfo {
  getCustomer(): customers.Customer;

  setCustomer(customer: customers.Customer): void;

  getDisplayString(): string;

  setDisplayString(displayString: string): void;

  getExternalId(): string;

  setExternalId(externalId: string): void;

  getExternalSystemName(): string;

  setExternalSystemName(externalSystemName: string): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getMetaInfo(fieldName: string): object
}


export class CustomerMetadata {
  getBusinessName(): string;

  setBusinessName(businessName: string): void;

  getNote(): string;

  setNote(note: string): void;

  getDobYear(): number;

  setDobYear(dobYear: number): void;

  getDobMonth(): number;

  setDobMonth(dobMonth: number): void;

  getDobDay(): number;

  setDobDay(dobDay: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class EmailAddress {
  getId(): string;

  setId(id: string): void;

  getEmailAddress(): string;

  setEmailAddress(emailAddress: string): void;

  getVerifiedTime(): number;

  setVerifiedTime(verifiedTime: number): void;

  getPrimaryEmail(): boolean;

  setPrimaryEmail(primaryEmail: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class IdentityDocument {
  getId(): string;

  setId(id: string): void;

  getType(): string;

  setType(type: string): void;

  getNumber(): string;

  setNumber(number: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getPayment(): base.Reference;

  setPayment(payment: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class PhoneNumber {
  getId(): string;

  setId(id: string): void;

  getPhoneNumber(): string;

  setPhoneNumber(phoneNumber: string): void;

  getMetaInfo(fieldName: string): object
}


export class RemoteCustomer {
  getCustomer(): customers.Customer;

  setCustomer(customer: customers.Customer): void;

  getDisplayString(): string;

  setDisplayString(displayString: string): void;

  getExternalId(): string;

  setExternalId(externalId: string): void;

  getExternalSystemName(): string;

  setExternalSystemName(externalSystemName: string): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof customers
* @enum {string}
*/
export enum TokenType {
  MULTIPAY = "MULTIPAY",
  FINANCIAL = "FINANCIAL",
  CTOKEN = "CTOKEN"
}
}
    
export namespace device {
    

export class AccessoryRomMetadataUpdateRequest {
  getCpuId(): string;

  setCpuId(cpuId: string): void;

  getVersion(): number;

  setVersion(version: number): void;

  getBuildType(): string;

  setBuildType(buildType: string): void;

  getMetaInfo(fieldName: string): object
}


export class AssociatedDeviceBundle {
  getId(): string;

  setId(id: string): void;

  getBundleIndicator(): string;

  setBundleIndicator(bundleIndicator: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getAssociatedTime(): number;

  setAssociatedTime(associatedTime: number): void;

  getDisassociatedTime(): number;

  setDisassociatedTime(disassociatedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof device
* @enum {string}
*/
export enum BuildType {
  ENG = "ENG",
  USER = "USER",
  USERDEBUG = "USERDEBUG"
}

export class BundleItem {
  getEquipmentCode(): string;

  setEquipmentCode(equipmentCode: string): void;

  getEquipmentCodeDesc(): string;

  setEquipmentCodeDesc(equipmentCodeDesc: string): void;

  getQuantity(): number;

  setQuantity(quantity: number): void;

  getVersion(): number;

  setVersion(version: number): void;

  getMetaInfo(fieldName: string): object
}


export class Device {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getModel(): string;

  setModel(model: string): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getOrderPrefix(): string;

  setOrderPrefix(orderPrefix: string): void;

  getTerminalId(): string;

  setTerminalId(terminalId: string): void;

  getTerminalPrefix(): number;

  setTerminalPrefix(terminalPrefix: number): void;

  getSerial(): string;

  setSerial(serial: string): void;

  getImei(): string;

  setImei(imei: string): void;

  getImsi(): string;

  setImsi(imsi: string): void;

  getSimIccid(): string;

  setSimIccid(simIccid: string): void;

  getDeviceCertificate(): string;

  setDeviceCertificate(deviceCertificate: string): void;

  getPedCertificate(): string;

  setPedCertificate(pedCertificate: string): void;

  getDeviceTypeName(): string;

  setDeviceTypeName(deviceTypeName: string): void;

  getProductName(): string;

  setProductName(productName: string): void;

  getPinDisabled(): boolean;

  setPinDisabled(pinDisabled: boolean): void;

  getOfflinePayments(): boolean;

  setOfflinePayments(offlinePayments: boolean): void;

  getOfflinePaymentsAll(): boolean;

  setOfflinePaymentsAll(offlinePaymentsAll: boolean): void;

  getOfflinePaymentsLimit(): number;

  setOfflinePaymentsLimit(offlinePaymentsLimit: number): void;

  getOfflinePaymentsPromptThreshold(): number;

  setOfflinePaymentsPromptThreshold(offlinePaymentsPromptThreshold: number): void;

  getOfflinePaymentsTotalPaymentsLimit(): number;

  setOfflinePaymentsTotalPaymentsLimit(offlinePaymentsTotalPaymentsLimit: number): void;

  getOfflinePaymentsLimitDefault(): number;

  setOfflinePaymentsLimitDefault(offlinePaymentsLimitDefault: number): void;

  getOfflinePaymentsPromptThresholdDefault(): number;

  setOfflinePaymentsPromptThresholdDefault(offlinePaymentsPromptThresholdDefault: number): void;

  getOfflinePaymentsTotalPaymentsLimitDefault(): number;

  setOfflinePaymentsTotalPaymentsLimitDefault(offlinePaymentsTotalPaymentsLimitDefault: number): void;

  getOfflinePaymentsMaxLimit(): number;

  setOfflinePaymentsMaxLimit(offlinePaymentsMaxLimit: number): void;

  getOfflinePaymentsMaxTotalPaymentsLimit(): number;

  setOfflinePaymentsMaxTotalPaymentsLimit(offlinePaymentsMaxTotalPaymentsLimit: number): void;

  getShowOfflinePayments(): boolean;

  setShowOfflinePayments(showOfflinePayments: boolean): void;

  getMaxOfflineDays(): number;

  setMaxOfflineDays(maxOfflineDays: number): void;

  getAllowStoreAndForward(): boolean;

  setAllowStoreAndForward(allowStoreAndForward: boolean): void;

  getSecureReports(): Array<base.Reference>;

  setSecureReports(secureReports: Array<base.Reference>): void;

  getBundleIndicator(): string;

  setBundleIndicator(bundleIndicator: string): void;

  getMetaInfo(fieldName: string): object
}


export class DeviceAccessory {
  getId(): string;

  setId(id: string): void;

  getModel(): string;

  setModel(model: string): void;

  getSerial(): string;

  setSerial(serial: string): void;

  getAssociatedDevice(): base.Reference;

  setAssociatedDevice(associatedDevice: base.Reference): void;

  getPedCertificate(): string;

  setPedCertificate(pedCertificate: string): void;

  getBuildType(): device.DeviceAccessoryBuildType;

  setBuildType(buildType: device.DeviceAccessoryBuildType): void;

  getDeviceType(): base.Reference;

  setDeviceType(deviceType: base.Reference): void;

  getVersionCode(): number;

  setVersionCode(versionCode: number): void;

  getCurrentRom(): base.Reference;

  setCurrentRom(currentRom: base.Reference): void;

  getSecureReports(): Array<base.Reference>;

  setSecureReports(secureReports: Array<base.Reference>): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof device
* @enum {string}
*/
export enum DeviceAccessoryBuildType {
  ENG = "ENG",
  USER = "USER",
  USERDEBUG = "USERDEBUG"
}

export class DeviceBundle {
  getId(): string;

  setId(id: string): void;

  getBundleIndicator(): string;

  setBundleIndicator(bundleIndicator: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getBundleItems(): Array<device.BundleItem>;

  setBundleItems(bundleItems: Array<device.BundleItem>): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof device
* @enum {string}
*/
export enum DeviceEventType {
  REGISTERED = "REGISTERED",
  PROVISIONED = "PROVISIONED",
  ACTIVATED = "ACTIVATED",
  REACTIVATED = "REACTIVATED",
  DEACTIVATED = "DEACTIVATED",
  DISASSOCIATED = "DISASSOCIATED",
  POS_MODE = "POS_MODE",
  CFD_MODE = "CFD_MODE"
}

export class DeviceProvision {
  getId(): string;

  setId(id: string): void;

  getDeviceRef(): base.Reference;

  setDeviceRef(deviceRef: base.Reference): void;

  getState(): device.DeviceProvisionState;

  setState(state: device.DeviceProvisionState): void;

  getLastActivationCode(): string;

  setLastActivationCode(lastActivationCode: string): void;

  getActivationCode(): string;

  setActivationCode(activationCode: string): void;

  getEmailSent(): boolean;

  setEmailSent(emailSent: boolean): void;

  getHasShipment(): boolean;

  setHasShipment(hasShipment: boolean): void;

  getShipment(): base.Reference;

  setShipment(shipment: base.Reference): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getChipUid(): string;

  setChipUid(chip_uid: string): void;

  getImei(): string;

  setImei(imei: string): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getDeviceType(): string;

  setDeviceType(deviceType: string): void;

  getProvisionedTime(): number;

  setProvisionedTime(provisionedTime: number): void;

  getActivatedTime(): number;

  setActivatedTime(activatedTime: number): void;

  getActivationCodeCreatedTime(): number;

  setActivationCodeCreatedTime(activationCodeCreatedTime: number): void;

  getTerminalId(): string;

  setTerminalId(terminalId: string): void;

  getReseller(): base.Reference;

  setReseller(reseller: base.Reference): void;

  getCurrentRom(): base.Reference;

  setCurrentRom(currentRom: base.Reference): void;

  getCurrentSecureBoardRom(): base.Reference;

  setCurrentSecureBoardRom(currentSecureBoardRom: base.Reference): void;

  getBundleIndicator(): string;

  setBundleIndicator(bundleIndicator: string): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getDeviceWarrantyRef(): base.Reference;

  setDeviceWarrantyRef(deviceWarrantyRef: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class DeviceProvisionAssoc {
  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getAssociatedId(): string;

  setAssociatedId(associatedId: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof device
* @enum {string}
*/
export enum DeviceProvisionState {
  NOT_ASSOCIATED = "NOT_ASSOCIATED",
  DISASSOCIATED = "DISASSOCIATED",
  ASSOCIATED = "ASSOCIATED"
}

export class DeviceProvisionStatus {
  getId(): string;

  setId(id: string): void;

  getChipUid(): string;

  setChipUid(chipUid: string): void;

  getImei(): string;

  setImei(imei: string): void;

  getProvisionInfo(): string;

  setProvisionInfo(provisionInfo: string): void;

  getLastActivationCode(): string;

  setLastActivationCode(lastActivationCode: string): void;

  getActivationCode(): string;

  setActivationCode(activationCode: string): void;

  getEmailSent(): boolean;

  setEmailSent(emailSent: boolean): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getMerchantId(): number;

  setMerchantId(merchantId: number): void;

  getProvisionedTime(): number;

  setProvisionedTime(provisionedTime: number): void;

  getActivatedTime(): number;

  setActivatedTime(activatedTime: number): void;

  getResellerId(): number;

  setResellerId(resellerId: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class DeviceRequests {
  getRequestUuids(): Array<string>;

  setRequestUuids(requestUuids: Array<string>): void;

  getMetaInfo(fieldName: string): object
}


export class DeviceWarranty {
  getId(): string;

  setId(id: string): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getStandardWarrantyStartDay(): string;

  setStandardWarrantyStartDay(standardWarrantyStartDay: string): void;

  getStandardWarrantyEndDay(): string;

  setStandardWarrantyEndDay(standardWarrantyEndDay: string): void;

  getStandardWarrantyStartDate(): number;

  setStandardWarrantyStartDate(standardWarrantyStartDate: number): void;

  getStandardWarrantyEndDate(): number;

  setStandardWarrantyEndDate(standardWarrantyEndDate: number): void;

  getExtendedWarrantyStatus(): string;

  setExtendedWarrantyStatus(extendedWarrantyStatus: string): void;

  getExtendedWarrantyStartDay(): string;

  setExtendedWarrantyStartDay(extendedWarrantyStartDay: string): void;

  getExtendedWarrantyEndDay(): string;

  setExtendedWarrantyEndDay(extendedWarrantyEndDay: string): void;

  getExtendedWarrantyStartDate(): number;

  setExtendedWarrantyStartDate(extendedWarrantyStartDate: number): void;

  getExtendedWarrantyEndDate(): number;

  setExtendedWarrantyEndDate(extendedWarrantyEndDate: number): void;

  getMetaInfo(fieldName: string): object
}


export class LimitedDevice {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getSerial(): string;

  setSerial(serial: string): void;

  getMetaInfo(fieldName: string): object
}


export class Rom {
  getId(): string;

  setId(id: string): void;

  getCreatedAt(): number;

  setCreatedAt(createdAt: number): void;

  getVersion(): number;

  setVersion(version: number): void;

  getVersionName(): string;

  setVersionName(versionName: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getBuildType(): device.RomBuildType;

  setBuildType(buildType: device.RomBuildType): void;

  getIsCritical(): boolean;

  setIsCritical(isCritical: boolean): void;

  getPublished(): boolean;

  setPublished(published: boolean): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getAssociationTime(): number;

  setAssociationTime(associationTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof device
* @enum {string}
*/
export enum RomBuildType {
  ENG = "ENG",
  USER = "USER"
}

export class SwapRequestEvent {
  getId(): string;

  setId(id: string): void;

  getType(): string;

  setType(type: string): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class UpdatedDeviceBundle {
  getMerchantId(): string;

  setMerchantId(merchantId: string): void;

  getProvisionedSerialNumber(): string;

  setProvisionedSerialNumber(provisionedSerialNumber: string): void;

  getEquipmentNumber(): string;

  setEquipmentNumber(equipmentNumber: string): void;

  getEquipmentCode(): string;

  setEquipmentCode(equipmentCode: string): void;

  getBundleId(): string;

  setBundleId(bundleId: string): void;

  getEffectiveTime(): number;

  setEffectiveTime(effectiveTime: number): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace ecomm {
    



/**
* @memberof ecomm
* @enum {string}
*/
export enum EcommerceIndicator {
  ecom = "ecom",
  moto = "moto",
  recurring = "recurring"
}
}
    
export namespace employees {
    



/**
* @memberof employees
* @enum {string}
*/
export enum AccountRole {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE"
}

export class Employee {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getNickname(): string;

  setNickname(nickname: string): void;

  getCustomId(): string;

  setCustomId(customId: string): void;

  getEmail(): string;

  setEmail(email: string): void;

  getInviteSent(): boolean;

  setInviteSent(inviteSent: boolean): void;

  getClaimedTime(): number;

  setClaimedTime(claimedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getPin(): string;

  setPin(pin: string): void;

  getUnhashedPin(): string;

  setUnhashedPin(unhashedPin: string): void;

  getRole(): employees.AccountRole;

  setRole(role: employees.AccountRole): void;

  getRoles(): Array<base.Reference>;

  setRoles(roles: Array<base.Reference>): void;

  getIsOwner(): boolean;

  setIsOwner(isOwner: boolean): void;

  getShifts(): Array<base.Reference>;

  setShifts(shifts: Array<base.Reference>): void;

  getPayments(): Array<base.Reference>;

  setPayments(payments: Array<base.Reference>): void;

  getOrders(): Array<base.Reference>;

  setOrders(orders: Array<base.Reference>): void;

  getEmployeeCards(): Array<base.Reference>;

  setEmployeeCards(employeeCards: Array<base.Reference>): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class EmployeeCard {
  getId(): string;

  setId(id: string): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getUpdater(): base.Reference;

  setUpdater(updater: base.Reference): void;

  getNumber(): string;

  setNumber(number: string): void;

  getStatus(): employees.EmployeeCardStatus;

  setStatus(status: employees.EmployeeCardStatus): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof employees
* @enum {string}
*/
export enum EmployeeCardStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}



/**
* @memberof employees
* @enum {string}
*/
export enum EmployeePermission {
  MERCHANT_R = "MERCHANT_R",
  MERCHANT_W = "MERCHANT_W",
  PAYMENTS_R = "PAYMENTS_R",
  PAYMENTS_W = "PAYMENTS_W",
  ORDERS_R = "ORDERS_R",
  ORDERS_W = "ORDERS_W",
  PROCESS_CARDS = "PROCESS_CARDS"
}



/**
* @memberof employees
* @enum {string}
*/
export enum Permission {
  ORDERS_R = "ORDERS_R",
  ORDERS_W = "ORDERS_W",
  INVENTORY_R = "INVENTORY_R",
  INVENTORY_W = "INVENTORY_W",
  PAYMENTS_R = "PAYMENTS_R",
  PAYMENTS_W = "PAYMENTS_W",
  CUSTOMERS_R = "CUSTOMERS_R",
  CUSTOMERS_W = "CUSTOMERS_W",
  EMPLOYEES_R = "EMPLOYEES_R",
  EMPLOYEES_W = "EMPLOYEES_W",
  MERCHANT_R = "MERCHANT_R",
  MERCHANT_W = "MERCHANT_W"
}

export class PermissionSet {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getLabel(): string;

  setLabel(label: string): void;

  getApp(): base.Reference;

  setApp(app: base.Reference): void;

  getEmployeeDefault(): boolean;

  setEmployeeDefault(employeeDefault: boolean): void;

  getManagerDefault(): boolean;

  setManagerDefault(managerDefault: boolean): void;

  getPermissions(): employees.Permissions;

  setPermissions(permissions: employees.Permissions): void;

  getEmployeePermissions(): Array<employees.EmployeePermission>;

  setEmployeePermissions(employeePermissions: Array<employees.EmployeePermission>): void;

  getModule(): base.Reference;

  setModule(module: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class PermissionSetRole {
  getId(): string;

  setId(id: string): void;

  getRole(): base.Reference;

  setRole(role: base.Reference): void;

  getPermissionSet(): base.Reference;

  setPermissionSet(permissionSet: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class Permissions {
  getId(): string;

  setId(id: string): void;

  getBits(): number;

  setBits(bits: number): void;

  getReadablePermissions(): Array<employees.Permission>;

  setReadablePermissions(readablePermissions: Array<employees.Permission>): void;

  getMetaInfo(fieldName: string): object
}


export class Role {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getSystemRole(): employees.AccountRole;

  setSystemRole(systemRole: employees.AccountRole): void;

  getMetaInfo(fieldName: string): object
}


export class Shift {
  getId(): string;

  setId(id: string): void;

  getEmployee(): employees.Employee;

  setEmployee(employee: employees.Employee): void;

  getCashTipsCollected(): number;

  setCashTipsCollected(cashTipsCollected: number): void;

  getServerBanking(): boolean;

  setServerBanking(serverBanking: boolean): void;

  getInTime(): number;

  setInTime(inTime: number): void;

  getOverrideInTime(): number;

  setOverrideInTime(overrideInTime: number): void;

  getOverrideInEmployee(): employees.Employee;

  setOverrideInEmployee(overrideInEmployee: employees.Employee): void;

  getOutTime(): number;

  setOutTime(outTime: number): void;

  getOverrideOutTime(): number;

  setOverrideOutTime(overrideOutTime: number): void;

  getOverrideOutEmployee(): employees.Employee;

  setOverrideOutEmployee(overrideOutEmployee: employees.Employee): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace hours {
    

export class HourRange {
  getStart(): number;

  setStart(start: number): void;

  getEnd(): number;

  setEnd(end: number): void;

  getMetaInfo(fieldName: string): object
}


export class HoursSet {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getReference(): hours.Reference;

  setReference(reference: hours.Reference): void;

  getSunday(): Array<hours.HourRange>;

  setSunday(sunday: Array<hours.HourRange>): void;

  getMonday(): Array<hours.HourRange>;

  setMonday(monday: Array<hours.HourRange>): void;

  getTuesday(): Array<hours.HourRange>;

  setTuesday(tuesday: Array<hours.HourRange>): void;

  getWednesday(): Array<hours.HourRange>;

  setWednesday(wednesday: Array<hours.HourRange>): void;

  getThursday(): Array<hours.HourRange>;

  setThursday(thursday: Array<hours.HourRange>): void;

  getFriday(): Array<hours.HourRange>;

  setFriday(friday: Array<hours.HourRange>): void;

  getSaturday(): Array<hours.HourRange>;

  setSaturday(saturday: Array<hours.HourRange>): void;

  getMetaInfo(fieldName: string): object
}


export class Reference {
  getId(): string;

  setId(id: string): void;

  getType(): hours.ReferenceType;

  setType(type: hours.ReferenceType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof hours
* @enum {string}
*/
export enum ReferenceType {
  ORDER_TYPE = "ORDER_TYPE",
  ITEM_GROUP = "ITEM_GROUP",
  SOFTWARE_UPDATE_EXCLUSION = "SOFTWARE_UPDATE_EXCLUSION",
  ONLINE_ORDER_SERVICE = "ONLINE_ORDER_SERVICE"
}
}
    
export namespace inventory {
    

export class Attribute {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getItemGroup(): base.Reference;

  setItemGroup(itemGroup: base.Reference): void;

  getOptions(): Array<inventory.Option>;

  setOptions(options: Array<inventory.Option>): void;

  getMetaInfo(fieldName: string): object
}


export class Category {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getSortOrder(): number;

  setSortOrder(sortOrder: number): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getDeleted(): boolean;

  setDeleted(deleted: boolean): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getCanonical(): base.Reference;

  setCanonical(canonical: base.Reference): void;

  getMenuSection(): inventory.MenuSection;

  setMenuSection(menuSection: inventory.MenuSection): void;

  getMetaInfo(fieldName: string): object
}


export class CategoryItem {
  getItem(): inventory.Item;

  setItem(item: inventory.Item): void;

  getCategory(): inventory.Category;

  setCategory(category: inventory.Category): void;

  getMetaInfo(fieldName: string): object
}


export class DataAssociation {
  getPrimary(): base.Reference;

  setPrimary(primary: base.Reference): void;

  getSecondary(): base.Reference;

  setSecondary(secondary: base.Reference): void;

  getPayload(): string;

  setPayload(payload: string): void;

  getMetaInfo(fieldName: string): object
}


export class Discount {
  getId(): string;

  setId(id: string): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getPercentage(): number;

  setPercentage(percentage: number): void;

  getMetaInfo(fieldName: string): object
}


export class InventoryItems {
  getItems(): Array<inventory.Item>;

  setItems(items: Array<inventory.Item>): void;

  getMetaInfo(fieldName: string): object
}


export class Item {
  getId(): string;

  setId(id: string): void;

  getHidden(): boolean;

  setHidden(hidden: boolean): void;

  getItemGroup(): base.Reference;

  setItemGroup(itemGroup: base.Reference): void;

  getOptions(): Array<inventory.Option>;

  setOptions(options: Array<inventory.Option>): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getCode(): string;

  setCode(code: string): void;

  getSku(): string;

  setSku(sku: string): void;

  getPrice(): number;

  setPrice(price: number): void;

  getPriceType(): inventory.PriceType;

  setPriceType(priceType: inventory.PriceType): void;

  getDefaultTaxRates(): boolean;

  setDefaultTaxRates(defaultTaxRates: boolean): void;

  getUnitName(): string;

  setUnitName(unitName: string): void;

  getCost(): number;

  setCost(cost: number): void;

  getIsRevenue(): boolean;

  setIsRevenue(isRevenue: boolean): void;

  getStockCount(): number;

  setStockCount(stockCount: number): void;

  getTaxRates(): Array<inventory.TaxRate>;

  setTaxRates(taxRates: Array<inventory.TaxRate>): void;

  getModifierGroups(): Array<inventory.ModifierGroup>;

  setModifierGroups(modifierGroups: Array<inventory.ModifierGroup>): void;

  getCategories(): Array<inventory.Category>;

  setCategories(categories: Array<inventory.Category>): void;

  getTags(): Array<inventory.Tag>;

  setTags(tags: Array<inventory.Tag>): void;

  getCanonical(): base.Reference;

  setCanonical(canonical: base.Reference): void;

  getItemStock(): inventory.ItemStock;

  setItemStock(itemStock: inventory.ItemStock): void;

  getMenuItem(): inventory.MenuItem;

  setMenuItem(menuItem: inventory.MenuItem): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getPriceWithoutVat(): number;

  setPriceWithoutVat(priceWithoutVat: number): void;

  getMetaInfo(fieldName: string): object
}


export class ItemGroup {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getAttributes(): Array<base.Reference>;

  setAttributes(attributes: Array<base.Reference>): void;

  getMetaInfo(fieldName: string): object
}


export class ItemModifierGroup {
  getItem(): inventory.Item;

  setItem(item: inventory.Item): void;

  getModifierGroup(): inventory.ModifierGroup;

  setModifierGroup(modifierGroup: inventory.ModifierGroup): void;

  getMetaInfo(fieldName: string): object
}


export class ItemStock {
  getItem(): base.Reference;

  setItem(item: base.Reference): void;

  getStockCount(): number;

  setStockCount(stockCount: number): void;

  getQuantity(): number;

  setQuantity(quantity: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class MenuBulkUpdate {
  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getUuids(): Array<string>;

  setUuids(uuids: Array<string>): void;

  getMetaInfo(fieldName: string): object
}


export class MenuItem {
  getId(): string;

  setId(id: string): void;

  getItem(): base.Reference;

  setItem(item: base.Reference): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getPrice(): number;

  setPrice(price: number): void;

  getName(): string;

  setName(name: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getImageFilename(): string;

  setImageFilename(imageFilename: string): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class MenuModifier {
  getId(): string;

  setId(id: string): void;

  getModifier(): base.Reference;

  setModifier(modifier: base.Reference): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getPrice(): number;

  setPrice(price: number): void;

  getName(): string;

  setName(name: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getImageFilename(): string;

  setImageFilename(imageFilename: string): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class MenuModifierGroup {
  getId(): string;

  setId(id: string): void;

  getModifierGroup(): base.Reference;

  setModifierGroup(modifierGroup: base.Reference): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getName(): string;

  setName(name: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getMinRequired(): number;

  setMinRequired(minRequired: number): void;

  getMaxAllowed(): number;

  setMaxAllowed(maxAllowed: number): void;

  getImageFilename(): string;

  setImageFilename(imageFilename: string): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class MenuSection {
  getId(): string;

  setId(id: string): void;

  getCategory(): base.Reference;

  setCategory(category: base.Reference): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getItems(): string;

  setItems(items: string): void;

  getItemList(): Array<inventory.MenuItem>;

  setItemList(itemList: Array<inventory.MenuItem>): void;

  getName(): string;

  setName(name: string): void;

  getDescription(): string;

  setDescription(description: string): void;

  getImageFilename(): string;

  setImageFilename(imageFilename: string): void;

  getEnabled(): boolean;

  setEnabled(enabled: boolean): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class Modifier {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getPrice(): number;

  setPrice(price: number): void;

  getModifierGroup(): base.Reference;

  setModifierGroup(modifierGroup: base.Reference): void;

  getMenuModifier(): inventory.MenuModifier;

  setMenuModifier(menuModifier: inventory.MenuModifier): void;

  getMetaInfo(fieldName: string): object
}


export class ModifierGroup {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getMinRequired(): number;

  setMinRequired(minRequired: number): void;

  getMaxAllowed(): number;

  setMaxAllowed(maxAllowed: number): void;

  getShowByDefault(): boolean;

  setShowByDefault(showByDefault: boolean): void;

  getModifiers(): Array<inventory.Modifier>;

  setModifiers(modifiers: Array<inventory.Modifier>): void;

  getModifierIds(): string;

  setModifierIds(modifierIds: string): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getMenuModifierGroup(): inventory.MenuModifierGroup;

  setMenuModifierGroup(menuModifierGroup: inventory.MenuModifierGroup): void;

  getSortOrder(): number;

  setSortOrder(sortOrder: number): void;

  getMetaInfo(fieldName: string): object
}


export class ModifierGroupArray {
  getModifierGroups(): Array<inventory.ModifierGroup>;

  setModifierGroups(modifierGroups: Array<inventory.ModifierGroup>): void;

  getMetaInfo(fieldName: string): object
}


export class Option {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAttribute(): base.Reference;

  setAttribute(attribute: base.Reference): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getMetaInfo(fieldName: string): object
}


export class OptionItem {
  getOption(): base.Reference;

  setOption(option: base.Reference): void;

  getItem(): base.Reference;

  setItem(item: base.Reference): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof inventory
* @enum {string}
*/
export enum PriceType {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
  PER_UNIT = "PER_UNIT"
}

export class SortOrder {
  getIds(): Array<string>;

  setIds(ids: Array<string>): void;

  getMetaInfo(fieldName: string): object
}


export class Tag {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getShowInReporting(): boolean;

  setShowInReporting(showInReporting: boolean): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getPrinters(): Array<base.Reference>;

  setPrinters(printers: Array<base.Reference>): void;

  getMetaInfo(fieldName: string): object
}


export class TagItem {
  getTag(): inventory.Tag;

  setTag(tag: inventory.Tag): void;

  getItem(): inventory.Item;

  setItem(item: inventory.Item): void;

  getMetaInfo(fieldName: string): object
}


export class TagPrinter {
  getTag(): inventory.Tag;

  setTag(tag: inventory.Tag): void;

  getPrinter(): printer.Printer;

  setPrinter(printer: printer.Printer): void;

  getMetaInfo(fieldName: string): object
}


export class TaxRate {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getTaxType(): inventory.TaxType;

  setTaxType(taxType: inventory.TaxType): void;

  getRate(): number;

  setRate(rate: number): void;

  getIsDefault(): boolean;

  setIsDefault(isDefault: boolean): void;

  getItems(): Array<base.Reference>;

  setItems(items: Array<base.Reference>): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class TaxRateItem {
  getTaxRate(): inventory.TaxRate;

  setTaxRate(taxRate: inventory.TaxRate): void;

  getItem(): inventory.Item;

  setItem(item: inventory.Item): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof inventory
* @enum {string}
*/
export enum TaxType {
  VAT_TAXABLE = "VAT_TAXABLE",
  VAT_NON_TAXABLE = "VAT_NON_TAXABLE",
  VAT_EXEMPT = "VAT_EXEMPT",
  INTERNAL_TAX = "INTERNAL_TAX"
}
}
    
export namespace loyalty {
    

export class CustomerProvidedDataResponse {
  getResponseType(): loyalty.CustomerProvidedDataResponseType;

  setResponseType(responseType: loyalty.CustomerProvidedDataResponseType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof loyalty
* @enum {string}
*/
export enum CustomerProvidedDataResponseType {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING"
}

export class LoyaltyDataConfig {
  getType(): string;

  setType(type: string): void;

  getConfiguration(): object;

  setConfiguration(configuration: object): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace merchant {
    

export class TipSuggestion {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getPercentage(): number;

  setPercentage(percentage: number): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getIsEnabled(): boolean;

  setIsEnabled(isEnabled: boolean): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace onlineorder {
    

export class OnlineOrder {
  getId(): string;

  setId(id: string): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getOnlineOrderId(): string;

  setOnlineOrderId(onlineOrderId: string): void;

  getReceiptId(): string;

  setReceiptId(receiptId: string): void;

  getProvider(): base.Reference;

  setProvider(provider: base.Reference): void;

  getProviderId(): onlineorder.ProviderId;

  setProviderId(providerId: onlineorder.ProviderId): void;

  getOrderState(): onlineorder.OrderState;

  setOrderState(orderState: onlineorder.OrderState): void;

  getOnlineOrderCustomer(): onlineorder.OnlineOrderCustomer;

  setOnlineOrderCustomer(onlineOrderCustomer: onlineorder.OnlineOrderCustomer): void;

  getDeliverTime(): number;

  setDeliverTime(deliverTime: number): void;

  getScheduledPickupTime(): number;

  setScheduledPickupTime(scheduledPickupTime: number): void;

  getReason(): onlineorder.Reason;

  setReason(reason: onlineorder.Reason): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class OnlineOrderCart {
  getId(): string;

  setId(id: string): void;

  getCurrency(): string;

  setCurrency(currency: string): void;

  getTitle(): string;

  setTitle(title: string): void;

  getNote(): string;

  setNote(note: string): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getServiceCharge(): base.ServiceCharge;

  setServiceCharge(serviceCharge: base.ServiceCharge): void;

  getDiscounts(): Array<order.Discount>;

  setDiscounts(discounts: Array<order.Discount>): void;

  getLineItems(): Array<order.LineItem>;

  setLineItems(lineItems: Array<order.LineItem>): void;

  getOrderType(): order.OrderType;

  setOrderType(orderType: order.OrderType): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getOnlineOrder(): onlineorder.OnlineOrder;

  setOnlineOrder(onlineOrder: onlineorder.OnlineOrder): void;

  getMetaInfo(fieldName: string): object
}


export class OnlineOrderCustomer {
  getId(): string;

  setId(id: string): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getCustomerEmailAddress(): string;

  setCustomerEmailAddress(customerEmailAddress: string): void;

  getCustomerDisplayName(): string;

  setCustomerDisplayName(customerDisplayName: string): void;

  getCustomerFirstName(): string;

  setCustomerFirstName(customerFirstName: string): void;

  getCustomerLastName(): string;

  setCustomerLastName(customerLastName: string): void;

  getCustomerPhoneNumber(): string;

  setCustomerPhoneNumber(customerPhoneNumber: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* `CREATED`: the online order is created
* `CONFIRMED`: the online order is accepted by merchant
* `REJECTED`: the online order is rejected by merchant
* `CANCELLED`: The online order is cancelled
* `IN_PREPARATION`: The online order is being prepared by the merchant.
* `READY_FOR_PICKUP`: Order is ready for pickup
* `IN_TRANSIT`: Order is on the way for delivery
* `FULFILLED`: Order is delivered or picked-up
* @memberof onlineorder
* @enum {string}
*/
export enum OrderState {
  CREATED = "CREATED",
  CONFIRMED = "CONFIRMED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  IN_PREPARATION = "IN_PREPARATION",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  IN_TRANSIT = "IN_TRANSIT",
  FULFILLED = "FULFILLED"
}



/**
* @memberof onlineorder
* @enum {string}
*/
export enum ProviderId {
  GOOGLE = "GOOGLE"
}



/**
* @memberof onlineorder
* @enum {string}
*/
export enum Reason {
  MENU_ITEM_UNAVAILABLE = "MENU_ITEM_UNAVAILABLE",
  RESTAURANT_CLOSED = "RESTAURANT_CLOSED"
}
}
    
export namespace order {
    



/**
* @memberof order
* @enum {string}
*/
export enum ClientEventType {
  DELETED_LINE_ITEM = "DELETED_LINE_ITEM",
  MOVED_TABLE = "MOVED_TABLE",
  LEFT_TABLE = "LEFT_TABLE"
}

export class CreateLineItemsRequest {
  getItems(): Array<order.LineItem>;

  setItems(items: Array<order.LineItem>): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof order
* @enum {string}
*/
export enum CustomerIdMethod {
  NAME = "NAME",
  TABLE = "TABLE",
  NAME_TABLE = "NAME_TABLE"
}

export class Discount {
  getId(): string;

  setId(id: string): void;

  getDiscount(): base.Reference;

  setDiscount(discount: base.Reference): void;

  getApprover(): base.Reference;

  setApprover(approver: base.Reference): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getPercentage(): number;

  setPercentage(percentage: number): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayDiscount {
  getId(): string;

  setId(id: string): void;

  getLineItemId(): string;

  setLineItemId(lineItemId: string): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): string;

  setAmount(amount: string): void;

  getPercentage(): string;

  setPercentage(percentage: string): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayLineItem {
  getId(): string;

  setId(id: string): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getPrice(): string;

  setPrice(price: string): void;

  getUnitPrice(): string;

  setUnitPrice(unitPrice: string): void;

  getQuantity(): string;

  setQuantity(quantity: string): void;

  getUnitQuantity(): string;

  setUnitQuantity(unitQuantity: string): void;

  getNote(): string;

  setNote(note: string): void;

  getPrinted(): boolean;

  setPrinted(printed: boolean): void;

  getBinName(): string;

  setBinName(binName: string): void;

  getUserData(): string;

  setUserData(userData: string): void;

  getDiscounts(): Array<order.DisplayDiscount>;

  setDiscounts(discounts: Array<order.DisplayDiscount>): void;

  getDiscountAmount(): string;

  setDiscountAmount(discountAmount: string): void;

  getExchanged(): boolean;

  setExchanged(exchanged: boolean): void;

  getExchangedAmount(): string;

  setExchangedAmount(exchangedAmount: string): void;

  getModifications(): Array<order.DisplayModification>;

  setModifications(modifications: Array<order.DisplayModification>): void;

  getRefunded(): boolean;

  setRefunded(refunded: boolean): void;

  getRefundedAmount(): string;

  setRefundedAmount(refundedAmount: string): void;

  getPercent(): string;

  setPercent(percent: string): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayModification {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): string;

  setAmount(amount: string): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayOrder {
  getId(): string;

  setId(id: string): void;

  getCurrency(): string;

  setCurrency(currency: string): void;

  getEmployee(): string;

  setEmployee(employee: string): void;

  getSubtotal(): string;

  setSubtotal(subtotal: string): void;

  getTax(): string;

  setTax(tax: string): void;

  getTotal(): string;

  setTotal(total: string): void;

  getTitle(): string;

  setTitle(title: string): void;

  getNote(): string;

  setNote(note: string): void;

  getIsVat(): boolean;

  setIsVat(isVat: boolean): void;

  getServiceChargeName(): string;

  setServiceChargeName(serviceChargeName: string): void;

  getServiceChargeAmount(): string;

  setServiceChargeAmount(serviceChargeAmount: string): void;

  getDiscounts(): Array<order.DisplayDiscount>;

  setDiscounts(discounts: Array<order.DisplayDiscount>): void;

  getLineItems(): Array<order.DisplayLineItem>;

  setLineItems(lineItems: Array<order.DisplayLineItem>): void;

  getAmountRemaining(): string;

  setAmountRemaining(amountRemaining: string): void;

  getPayments(): Array<order.DisplayPayment>;

  setPayments(payments: Array<order.DisplayPayment>): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayPayment {
  getId(): string;

  setId(id: string): void;

  getLabel(): string;

  setLabel(label: string): void;

  getAmount(): string;

  setAmount(amount: string): void;

  getTipAmount(): string;

  setTipAmount(tipAmount: string): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getMetaInfo(fieldName: string): object
}


export class FireOrder {
  getId(): string;

  setId(id: string): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getDelay(): number;

  setDelay(delay: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof order
* @enum {string}
*/
export enum HoursAvailable {
  ALL = "ALL",
  BUSINESS = "BUSINESS",
  CUSTOM = "CUSTOM"
}

export class LineItem {
  getId(): string;

  setId(id: string): void;

  getItem(): base.Reference;

  setItem(item: base.Reference): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getPrice(): number;

  setPrice(price: number): void;

  getPriceWithModifiers(): number;

  setPriceWithModifiers(priceWithModifiers: number): void;

  getPriceWithModifiersAndItemAndOrderDiscounts(): number;

  setPriceWithModifiersAndItemAndOrderDiscounts(priceWithModifiersAndItemAndOrderDiscounts: number): void;

  getUnitQty(): number;

  setUnitQty(unitQty: number): void;

  getUnitName(): string;

  setUnitName(unitName: string): void;

  getItemCode(): string;

  setItemCode(itemCode: string): void;

  getNote(): string;

  setNote(note: string): void;

  getPrinted(): boolean;

  setPrinted(printed: boolean): void;

  getExchangedLineItem(): base.Reference;

  setExchangedLineItem(exchangedLineItem: base.Reference): void;

  getBinName(): string;

  setBinName(binName: string): void;

  getUserData(): string;

  setUserData(userData: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getOrderClientCreatedTime(): number;

  setOrderClientCreatedTime(orderClientCreatedTime: number): void;

  getDiscounts(): Array<order.Discount>;

  setDiscounts(discounts: Array<order.Discount>): void;

  getOrderLevelDiscounts(): Array<order.Discount>;

  setOrderLevelDiscounts(orderLevelDiscounts: Array<order.Discount>): void;

  getDiscountAmount(): number;

  setDiscountAmount(discountAmount: number): void;

  getOrderLevelDiscountAmount(): number;

  setOrderLevelDiscountAmount(orderLevelDiscountAmount: number): void;

  getExchanged(): boolean;

  setExchanged(exchanged: boolean): void;

  getModifications(): Array<order.Modification>;

  setModifications(modifications: Array<order.Modification>): void;

  getRefunded(): boolean;

  setRefunded(refunded: boolean): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getIsRevenue(): boolean;

  setIsRevenue(isRevenue: boolean): void;

  getTaxRates(): Array<inventory.TaxRate>;

  setTaxRates(taxRates: Array<inventory.TaxRate>): void;

  getPayments(): Array<payments.LineItemPayment>;

  setPayments(payments: Array<payments.LineItemPayment>): void;

  getRevenueAmount(): number;

  setRevenueAmount(revenueAmount: number): void;

  getQuantitySold(): number;

  setQuantitySold(quantitySold: number): void;

  getPrintGroup(): base.Reference;

  setPrintGroup(printGroup: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class LineItemTaxRates {
  getRates(): object;

  setRates(rates: object): void;

  getMetaInfo(fieldName: string): object
}


export class Modification {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAlternateName(): string;

  setAlternateName(alternateName: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getModifier(): inventory.Modifier;

  setModifier(modifier: inventory.Modifier): void;

  getQuantitySold(): number;

  setQuantitySold(quantitySold: number): void;

  getMetaInfo(fieldName: string): object
}


export class Order {
  getId(): string;

  setId(id: string): void;

  getCurrency(): string;

  setCurrency(currency: string): void;

  getCustomerId(): number;

  setCustomerId(customerId: number): void;

  getCustomerUuid(): string;

  setCustomerUuid(customerUuid: string): void;

  getOrderTypeId(): number;

  setOrderTypeId(orderTypeId: number): void;

  getCustomers(): Array<customers.Customer>;

  setCustomers(customers: Array<customers.Customer>): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getTotal(): number;

  setTotal(total: number): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getUnpaidBalance(): number;

  setUnpaidBalance(unpaidBalance: number): void;

  getPaymentState(): order.PaymentState;

  setPaymentState(paymentState: order.PaymentState): void;

  getTitle(): string;

  setTitle(title: string): void;

  getNote(): string;

  setNote(note: string): void;

  getOrderType(): order.OrderType;

  setOrderType(orderType: order.OrderType): void;

  getTaxRemoved(): boolean;

  setTaxRemoved(taxRemoved: boolean): void;

  getIsVat(): boolean;

  setIsVat(isVat: boolean): void;

  getState(): string;

  setState(state: string): void;

  getManualTransaction(): boolean;

  setManualTransaction(manualTransaction: boolean): void;

  getGroupLineItems(): boolean;

  setGroupLineItems(groupLineItems: boolean): void;

  getTestMode(): boolean;

  setTestMode(testMode: boolean): void;

  getPayType(): order.PayType;

  setPayType(payType: order.PayType): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTimestamp(): number;

  setDeletedTimestamp(deletedTimestamp: number): void;

  getServiceCharge(): base.ServiceCharge;

  setServiceCharge(serviceCharge: base.ServiceCharge): void;

  getDiscounts(): Array<order.Discount>;

  setDiscounts(discounts: Array<order.Discount>): void;

  getLineItems(): Array<order.LineItem>;

  setLineItems(lineItems: Array<order.LineItem>): void;

  getPayments(): Array<payments.Payment>;

  setPayments(payments: Array<payments.Payment>): void;

  getRefunds(): Array<payments.Refund>;

  setRefunds(refunds: Array<payments.Refund>): void;

  getCredits(): Array<payments.Credit>;

  setCredits(credits: Array<payments.Credit>): void;

  getVoids(): Array<payments.Payment>;

  setVoids(voids: Array<payments.Payment>): void;

  getPreAuths(): Array<payments.Payment>;

  setPreAuths(preAuths: Array<payments.Payment>): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getAuthorizations(): Array<payments.Authorization>;

  setAuthorizations(authorizations: Array<payments.Authorization>): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getOnlineOrder(): onlineorder.OnlineOrder;

  setOnlineOrder(onlineOrder: onlineorder.OnlineOrder): void;

  getPrintGroups(): Array<order.PrintGroup>;

  setPrintGroups(printGroups: Array<order.PrintGroup>): void;

  getMetaInfo(fieldName: string): object
}


export class OrderExpansion {
  getId(): string;

  setId(id: string): void;

  getHasCredit(): boolean;

  setHasCredit(hasCredit: boolean): void;

  getHasCreditCardTransaction(): boolean;

  setHasCreditCardTransaction(hasCreditCardTransaction: boolean): void;

  getHasCustomer(): boolean;

  setHasCustomer(hasCustomer: boolean): void;

  getHasCustomerEmailAddress(): boolean;

  setHasCustomerEmailAddress(hasCustomerEmailAddress: boolean): void;

  getHasCustomerAddress(): boolean;

  setHasCustomerAddress(hasCustomerAddress: boolean): void;

  getHasCustomerPhone(): boolean;

  setHasCustomerPhone(hasCustomerPhone: boolean): void;

  getHasDiscount(): boolean;

  setHasDiscount(hasDiscount: boolean): void;

  getHasLineItemDiscount(): boolean;

  setHasLineItemDiscount(hasLineItemDiscount: boolean): void;

  getHasServiceCharge(): boolean;

  setHasServiceCharge(hasServiceCharge: boolean): void;

  getHasRefund(): boolean;

  setHasRefund(hasRefund: boolean): void;

  getHasVoid(): boolean;

  setHasVoid(hasVoid: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class OrderTaxRate {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getMetaInfo(fieldName: string): object
}


export class OrderType {
  getId(): string;

  setId(id: string): void;

  getLabelKey(): string;

  setLabelKey(labelKey: string): void;

  getLabel(): string;

  setLabel(label: string): void;

  getTaxable(): boolean;

  setTaxable(taxable: boolean): void;

  getIsDefault(): boolean;

  setIsDefault(isDefault: boolean): void;

  getFilterCategories(): boolean;

  setFilterCategories(filterCategories: boolean): void;

  getIsHidden(): boolean;

  setIsHidden(isHidden: boolean): void;

  getFee(): number;

  setFee(fee: number): void;

  getMinOrderAmount(): number;

  setMinOrderAmount(minOrderAmount: number): void;

  getMaxOrderAmount(): number;

  setMaxOrderAmount(maxOrderAmount: number): void;

  getMaxRadius(): number;

  setMaxRadius(maxRadius: number): void;

  getAvgOrderTime(): number;

  setAvgOrderTime(avgOrderTime: number): void;

  getHoursAvailable(): order.HoursAvailable;

  setHoursAvailable(hoursAvailable: order.HoursAvailable): void;

  getCustomerIdMethod(): order.CustomerIdMethod;

  setCustomerIdMethod(customerIdMethod: order.CustomerIdMethod): void;

  getIsDeleted(): boolean;

  setIsDeleted(isDeleted: boolean): void;

  getSystemOrderTypeId(): string;

  setSystemOrderTypeId(systemOrderTypeId: string): void;

  getSystemOrderTypeDatabaseId(): number;

  setSystemOrderTypeDatabaseId(systemOrderTypeDatabaseId: number): void;

  getHours(): hours.HoursSet;

  setHours(hours: hours.HoursSet): void;

  getCategories(): Array<base.Reference>;

  setCategories(categories: Array<base.Reference>): void;

  getMetaInfo(fieldName: string): object
}


export class OrderTypeCategory {
  getOrderType(): order.OrderType;

  setOrderType(orderType: order.OrderType): void;

  getCategory(): inventory.Category;

  setCategory(category: inventory.Category): void;

  getMetaInfo(fieldName: string): object
}


export class OverrideInfo {
  getDisableCustomerUpdate(): boolean;

  setDisableCustomerUpdate(disableCustomerUpdate: boolean): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof order
* @enum {string}
*/
export enum PayType {
  SPLIT_GUEST = "SPLIT_GUEST",
  SPLIT_ITEM = "SPLIT_ITEM",
  SPLIT_CUSTOM = "SPLIT_CUSTOM",
  FULL = "FULL"
}



/**
* @memberof order
* @enum {string}
*/
export enum PaymentState {
  OPEN = "OPEN",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
  CREDITED = "CREDITED",
  PARTIALLY_PAID = "PARTIALLY_PAID",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED"
}

export class PrintGroup {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getSortOrder(): number;

  setSortOrder(sortOrder: number): void;

  getFired(): boolean;

  setFired(fired: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class PrintOrder {
  getId(): string;

  setId(id: string): void;

  getMerchantRef(): base.Reference;

  setMerchantRef(merchantRef: base.Reference): void;

  getOrderRef(): base.Reference;

  setOrderRef(orderRef: base.Reference): void;

  getDeviceRef(): base.Reference;

  setDeviceRef(deviceRef: base.Reference): void;

  getCategory(): printer.PrintCategory;

  setCategory(category: printer.PrintCategory): void;

  getState(): order.PrintState;

  setState(state: order.PrintState): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* `CREATED`: The print event is created
* `FAILED`: The primary printing device failed to print
* `DONE`: The print event is sent to device and get printed
* @memberof order
* @enum {string}
*/
export enum PrintState {
  CREATED = "CREATED",
  FAILED = "FAILED",
  DONE = "DONE"
}

export class SendReceiptRequest {
  getPayment(): base.Reference;

  setPayment(payment: base.Reference): void;

  getRefund(): base.Reference;

  setRefund(refund: base.Reference): void;

  getCredit(): base.Reference;

  setCredit(credit: base.Reference): void;

  getEmailAddresses(): Array<string>;

  setEmailAddresses(emailAddresses: Array<string>): void;

  getPhoneNumbers(): Array<string>;

  setPhoneNumbers(phoneNumbers: Array<string>): void;

  getMetaInfo(fieldName: string): object
}


export class SystemOrderType {
  getId(): string;

  setId(id: string): void;

  getLabelKey(): string;

  setLabelKey(labelKey: string): void;

  getIsQsr(): boolean;

  setIsQsr(isQsr: boolean): void;

  getIsFsr(): boolean;

  setIsFsr(isFsr: boolean): void;

  getIsRetail(): boolean;

  setIsRetail(isRetail: boolean): void;

  getMetaInfo(fieldName: string): object
}




/**
Symbols beginning with USER_ or REJECT_ are user-initiated.  Others are client- or server-initiated.
* @memberof order
* @enum {string}
*/
export enum VoidReason {
  USER_CANCEL = "USER_CANCEL",
  TRANSPORT_ERROR = "TRANSPORT_ERROR",
  REJECT_SIGNATURE = "REJECT_SIGNATURE",
  REJECT_PARTIAL_AUTH = "REJECT_PARTIAL_AUTH",
  NOT_APPROVED = "NOT_APPROVED",
  FAILED = "FAILED",
  AUTH_CLOSED_NEW_CARD = "AUTH_CLOSED_NEW_CARD",
  DEVELOPER_PAY_PARTIAL_AUTH = "DEVELOPER_PAY_PARTIAL_AUTH",
  REJECT_DUPLICATE = "REJECT_DUPLICATE",
  REJECT_OFFLINE = "REJECT_OFFLINE",
  GIFTCARD_LOAD_FAILED = "GIFTCARD_LOAD_FAILED",
  USER_GIFTCARD_LOAD_CANCEL = "USER_GIFTCARD_LOAD_CANCEL",
  DEVELOPER_PAY_TIP_ADJUST_FAILED = "DEVELOPER_PAY_TIP_ADJUST_FAILED",
  USER_CUSTOMER_CANCEL = "USER_CUSTOMER_CANCEL",
  FRAUD = "FRAUD"
}

export class VoidedLineItem {
  getLineItem(): order.LineItem;

  setLineItem(lineItem: order.LineItem): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getReason(): string;

  setReason(reason: string): void;

  getRemovedBy(): base.Reference;

  setRemovedBy(removedBy: base.Reference): void;

  getCreatedBy(): base.Reference;

  setCreatedBy(createdBy: base.Reference): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getEnvironment(): string;

  setEnvironment(environment: string): void;

  getClientEventType(): order.ClientEventType;

  setClientEventType(clientEventType: order.ClientEventType): void;

  getMetaInfo(fieldName: string): object
}

export namespace operation {
    

export class DiscountsAddedOperation {
  getIds(): Array<string>;

  setIds(ids: Array<string>): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getMetaInfo(fieldName: string): object
}


export class DiscountsDeletedOperation {
  getIds(): Array<string>;

  setIds(ids: Array<string>): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getMetaInfo(fieldName: string): object
}


export class LineItemsAddedOperation {
  getIds(): Array<string>;

  setIds(ids: Array<string>): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getMetaInfo(fieldName: string): object
}


export class LineItemsDeletedOperation {
  getIds(): Array<string>;

  setIds(ids: Array<string>): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getMetaInfo(fieldName: string): object
}


export class OrderDeletedOperation {
  getId(): string;

  setId(id: string): void;

  getMetaInfo(fieldName: string): object
}

}
    
}
    
export namespace pay {
    



/**
* @memberof pay
* @enum {string}
*/
export enum CardFunction {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  PREPAID = "PREPAID",
  PINLESS_DEBIT = "PINLESS_DEBIT",
  SIGNATURE_DEBIT = "SIGNATURE_DEBIT",
  EBT = "EBT",
  SNAP = "SNAP"
}



/**
* @memberof pay
* @enum {string}
*/
export enum ErrorCode {
  TERMINAL_BUSY = "TERMINAL_BUSY",
  TERMINAL_UNAVAILABLE = "TERMINAL_UNAVAILABLE",
  TERMINAL_GENERAL = "TERMINAL_GENERAL"
}



/**
* @memberof pay
* @enum {string}
*/
export enum GwTxResult {
  APPROVED_ONLINE = "APPROVED_ONLINE",
  DECLINED_ONLINE = "DECLINED_ONLINE",
  UNABLE_TO_GO_ONLINE = "UNABLE_TO_GO_ONLINE",
  REFERRAL_ONLINE = "REFERRAL_ONLINE",
  REFERRAL_OFFLINE = "REFERRAL_OFFLINE"
}

export class PaymentRequestCardDetails {
  getTrack1(): string;

  setTrack1(track1: string): void;

  getTrack2(): string;

  setTrack2(track2: string): void;

  getTrack3(): string;

  setTrack3(track3: string): void;

  getEncrypted(): boolean;

  setEncrypted(encrypted: boolean): void;

  getMaskedTrack1(): string;

  setMaskedTrack1(maskedTrack1: string): void;

  getMaskedTrack2(): string;

  setMaskedTrack2(maskedTrack2: string): void;

  getMaskedTrack3(): string;

  setMaskedTrack3(maskedTrack3: string): void;

  getUniqueToken(): string;

  setUniqueToken(uniqueToken: string): void;

  getPan(): string;

  setPan(pan: string): void;

  getFirstName(): string;

  setFirstName(firstName: string): void;

  getLastName(): string;

  setLastName(lastName: string): void;

  getCountryCode(): string;

  setCountryCode(countryCode: string): void;

  getExp(): string;

  setExp(exp: string): void;

  getStreetAddress(): string;

  setStreetAddress(streetAddress: string): void;

  getZip(): string;

  setZip(zip: string): void;

  getCvv(): string;

  setCvv(cvv: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getFirst4(): string;

  setFirst4(first4: string): void;

  getDukptSerial(): string;

  setDukptSerial(dukptSerial: string): void;

  getSwipeStatus(): string;

  setSwipeStatus(swipeStatus: string): void;

  getFingerprint(): string;

  setFingerprint(fingerprint: string): void;

  getDeviceSerial(): string;

  setDeviceSerial(deviceSerial: string): void;

  getManualEntered(): boolean;

  setManualEntered(manualEntered: boolean): void;

  getAsync(): boolean;

  setAsync(async: boolean): void;

  getIsFallback(): boolean;

  setIsFallback(isFallback: boolean): void;

  getIsAuth(): boolean;

  setIsAuth(isAuth: boolean): void;

  getIsPrepaid(): boolean;

  setIsPrepaid(isPrepaid: boolean): void;

  getCardFunction(): pay.CardFunction;

  setCardFunction(cardFunction: pay.CardFunction): void;

  getQrCode(): boolean;

  setQrCode(qrCode: boolean): void;

  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getEntryType(): payments.CardEntryType;

  setEntryType(entryType: payments.CardEntryType): void;

  getTransactionNo(): string;

  setTransactionNo(transactionNo: string): void;

  getCardholderName(): string;

  setCardholderName(cardholderName: string): void;

  getPlainCardData(): string;

  setPlainCardData(plainCardData: string): void;

  getTransactionData(): pay.TransactionData;

  setTransactionData(transactionData: pay.TransactionData): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof pay
* @enum {string}
*/
export enum ServiceCode1 {
  INTERNATIONAL_INTERCHANGE_OK = "INTERNATIONAL_INTERCHANGE_OK",
  INTERNATIONAL_INTERCHANGE_USE_IC_CHIP_WHERE_FEASIBLE = "INTERNATIONAL_INTERCHANGE_USE_IC_CHIP_WHERE_FEASIBLE",
  NATIONAL_INTERCHANGE_ONLY_EXCEPT_UNDER_BILATERAL_AGREEMENT = "NATIONAL_INTERCHANGE_ONLY_EXCEPT_UNDER_BILATERAL_AGREEMENT",
  NATIONAL_INTERCHANGE_ONLY_EXCEPT_UNDER_BILATERAL_AGREEMENT_USE_IC_CHIP_WHERE_FEASIBLE = "NATIONAL_INTERCHANGE_ONLY_EXCEPT_UNDER_BILATERAL_AGREEMENT_USE_IC_CHIP_WHERE_FEASIBLE",
  NO_INTERCHANGE_EXCEPT_UNDER_BILATERAL_AGREEMENT = "NO_INTERCHANGE_EXCEPT_UNDER_BILATERAL_AGREEMENT",
  TEST = "TEST",
  UNDEFINED = "UNDEFINED"
}



/**
* @memberof pay
* @enum {string}
*/
export enum ServiceCode2 {
  NORMAL = "NORMAL",
  CONTACT_ISSUER_VIA_ONLINE_MEANS = "CONTACT_ISSUER_VIA_ONLINE_MEANS",
  CONTACT_ISSUER_VIA_ONLINE_MEANS_EXCEPT_UNDER_BILATERAL_AGREEMENT = "CONTACT_ISSUER_VIA_ONLINE_MEANS_EXCEPT_UNDER_BILATERAL_AGREEMENT",
  UNDEFINED = "UNDEFINED"
}



/**
* @memberof pay
* @enum {string}
*/
export enum ServiceCode3 {
  NO_RESTRICTIONS_PIN_REQUIRED = "NO_RESTRICTIONS_PIN_REQUIRED",
  NO_RESTRICTIONS = "NO_RESTRICTIONS",
  GOODS_AND_SERVICES_ONLY_NO_CASH = "GOODS_AND_SERVICES_ONLY_NO_CASH",
  ATM_ONLY_PIN_REQUIRED = "ATM_ONLY_PIN_REQUIRED",
  CASH_ONLY = "CASH_ONLY",
  GOODS_AND_SERVICES_ONLY_NO_CASH_PIN_REQUIRED = "GOODS_AND_SERVICES_ONLY_NO_CASH_PIN_REQUIRED",
  NO_RESTRICTIONS_USE_PIN_WHERE_FEASIBLE = "NO_RESTRICTIONS_USE_PIN_WHERE_FEASIBLE",
  GOODS_AND_SERVICES_ONLY_NO_CASH_USE_PIN_WHERE_FEASIBLE = "GOODS_AND_SERVICES_ONLY_NO_CASH_USE_PIN_WHERE_FEASIBLE",
  UNDEFINED = "UNDEFINED"
}

export class TransactionData {
  getTxResult(): pay.TxResult;

  setTxResult(txResult: pay.TxResult): void;

  getTxError(): pay.ErrorCode;

  setTxError(txError: pay.ErrorCode): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getCashBackAmount(): number;

  setCashBackAmount(cashBackAmount: number): void;

  getErrorCode(): string;

  setErrorCode(errorCode: string): void;

  getErrorText(): string;

  setErrorText(errorText: string): void;

  getTransactionDate(): string;

  setTransactionDate(transactionDate: string): void;

  getTransactionTime(): string;

  setTransactionTime(transactionTime: string): void;

  getMsrContainer(): string;

  setMsrContainer(msrContainer: string): void;

  getMsrMaskedTrack1(): string;

  setMsrMaskedTrack1(msrMaskedTrack1: string): void;

  getMsrMaskedTrack2(): string;

  setMsrMaskedTrack2(msrMaskedTrack2: string): void;

  getMaskedManualPan(): string;

  setMaskedManualPan(maskedManualPan: string): void;

  getSredContainer(): string;

  setSredContainer(sredContainer: string): void;

  getSred(): string;

  setSred(sred: string): void;

  getKsn(): string;

  setKsn(ksn: string): void;

  getTransArmorContainer(): string;

  setTransArmorContainer(transArmorContainer: string): void;

  getTransArmorKey(): string;

  setTransArmorKey(transArmorKey: string): void;

  getTransArmorKeyId(): string;

  setTransArmorKeyId(transArmorKeyId: string): void;

  getTransArmorEncryptedTrack1(): string;

  setTransArmorEncryptedTrack1(transArmorEncryptedTrack1: string): void;

  getTransArmorEncryptedTrack2(): string;

  setTransArmorEncryptedTrack2(transArmorEncryptedTrack2: string): void;

  getTransArmorEncryptedEmvTag57(): string;

  setTransArmorEncryptedEmvTag57(transArmorEncryptedEmvTag57: string): void;

  getTransArmorEncryptedEmvTag5A(): string;

  setTransArmorEncryptedEmvTag5A(transArmorEncryptedEmvTag5A: string): void;

  getTransArmorEncryptedManualKeyedData(): string;

  setTransArmorEncryptedManualKeyedData(transArmorEncryptedManualKeyedData: string): void;

  getIccContainer(): string;

  setIccContainer(iccContainer: string): void;

  getIccApplicationInterchangeProfile(): string;

  setIccApplicationInterchangeProfile(iccApplicationInterchangeProfile: string): void;

  getIccMaskedEmv57(): string;

  setIccMaskedEmv57(iccMaskedEmv57: string): void;

  getIccMaskedEmv5A(): string;

  setIccMaskedEmv5A(iccMaskedEmv5A: string): void;

  getIccApplicationPanSequenceNumber(): string;

  setIccApplicationPanSequenceNumber(iccApplicationPanSequenceNumber: string): void;

  getIccApplicationExpirationDate(): string;

  setIccApplicationExpirationDate(iccApplicationExpirationDate: string): void;

  getIccApplicationEffectiveDate(): string;

  setIccApplicationEffectiveDate(iccApplicationEffectiveDate: string): void;

  getIccAmountAuthorized(): string;

  setIccAmountAuthorized(iccAmountAuthorized: string): void;

  getIccAmountOther(): string;

  setIccAmountOther(iccAmountOther: string): void;

  getIccTransactionCurrencyCode(): string;

  setIccTransactionCurrencyCode(iccTransactionCurrencyCode: string): void;

  getIccTransactionCurrencyExponent(): string;

  setIccTransactionCurrencyExponent(iccTransactionCurrencyExponent: string): void;

  getIccApplicationUsageControl(): string;

  setIccApplicationUsageControl(iccApplicationUsageControl: string): void;

  getIccIssuerActionCodeDefault(): string;

  setIccIssuerActionCodeDefault(iccIssuerActionCodeDefault: string): void;

  getIccIssuerActionCodeDenial(): string;

  setIccIssuerActionCodeDenial(iccIssuerActionCodeDenial: string): void;

  getIccIssuerActionCodeOnline(): string;

  setIccIssuerActionCodeOnline(iccIssuerActionCodeOnline: string): void;

  getIccApplicationLabel(): string;

  setIccApplicationLabel(iccApplicationLabel: string): void;

  getIccApplicationCryptogram(): string;

  setIccApplicationCryptogram(iccApplicationCryptogram: string): void;

  getIccApplicationIdentifierCard(): string;

  setIccApplicationIdentifierCard(iccApplicationIdentifierCard: string): void;

  getIccApplicationIdentifierTerminal(): string;

  setIccApplicationIdentifierTerminal(iccApplicationIdentifierTerminal: string): void;

  getIccApplicationTransactionCounter(): string;

  setIccApplicationTransactionCounter(iccApplicationTransactionCounter: string): void;

  getIccApplicationVersionNumber(): string;

  setIccApplicationVersionNumber(iccApplicationVersionNumber: string): void;

  getIccCryptogramInformationData(): string;

  setIccCryptogramInformationData(iccCryptogramInformationData: string): void;

  getIccCvmResults(): string;

  setIccCvmResults(iccCvmResults: string): void;

  getIccInterfaceDeviceSerialNumber(): string;

  setIccInterfaceDeviceSerialNumber(iccInterfaceDeviceSerialNumber: string): void;

  getIccIssuerApplicationData(): string;

  setIccIssuerApplicationData(iccIssuerApplicationData: string): void;

  getIccPosEntryModeCode(): string;

  setIccPosEntryModeCode(iccPosEntryModeCode: string): void;

  getIccTerminalCapabilities(): string;

  setIccTerminalCapabilities(iccTerminalCapabilities: string): void;

  getIccTerminalCountryCode(): string;

  setIccTerminalCountryCode(iccTerminalCountryCode: string): void;

  getIccTerminalType(): string;

  setIccTerminalType(iccTerminalType: string): void;

  getIccTvr(): string;

  setIccTvr(iccTvr: string): void;

  getIccTransactionDate(): string;

  setIccTransactionDate(iccTransactionDate: string): void;

  getIccTsi(): string;

  setIccTsi(iccTsi: string): void;

  getIccTransactionType(): string;

  setIccTransactionType(iccTransactionType: string): void;

  getIccUnpredictableNumber(): string;

  setIccUnpredictableNumber(iccUnpredictableNumber: string): void;

  getIccTransactionTime(): string;

  setIccTransactionTime(iccTransactionTime: string): void;

  getIccAdditionalTerminalCapabilities(): string;

  setIccAdditionalTerminalCapabilities(iccAdditionalTerminalCapabilities: string): void;

  getIccTransactionCategoryCode(): string;

  setIccTransactionCategoryCode(iccTransactionCategoryCode: string): void;

  getIccIssuerApplicationPreferredName(): string;

  setIccIssuerApplicationPreferredName(iccIssuerApplicationPreferredName: string): void;

  getIccCardholderName(): string;

  setIccCardholderName(iccCardholderName: string): void;

  getIccIssuerCodeTableIndex(): string;

  setIccIssuerCodeTableIndex(iccIssuerCodeTableIndex: string): void;

  getIccIssuerScripts(): string;

  setIccIssuerScripts(iccIssuerScripts: string): void;

  getIccIssuerScriptResults(): string;

  setIccIssuerScriptResults(iccIssuerScriptResults: string): void;

  getDebugTrack2EquivalentData(): string;

  setDebugTrack2EquivalentData(debugTrack2EquivalentData: string): void;

  getDebugApplicationPan(): string;

  setDebugApplicationPan(debugApplicationPan: string): void;

  getDebugAmountAuthorizedBinary(): string;

  setDebugAmountAuthorizedBinary(debugAmountAuthorizedBinary: string): void;

  getDebugAmountOtherBinary(): string;

  setDebugAmountOtherBinary(debugAmountOtherBinary: string): void;

  getDebugTransactionStatusInformation(): string;

  setDebugTransactionStatusInformation(debugTransactionStatusInformation: string): void;

  getDebugPlainTrack1(): string;

  setDebugPlainTrack1(debugPlainTrack1: string): void;

  getDebugPlainTrack2(): string;

  setDebugPlainTrack2(debugPlainTrack2: string): void;

  getSchemePunATC(): string;

  setSchemePunATC(schemePunATC: string): void;

  getSchemeThirdPartyData(): string;

  setSchemeThirdPartyData(schemeThirdPartyData: string): void;

  getSchemeMerchantCustomData(): string;

  setSchemeMerchantCustomData(schemeMerchantCustomData: string): void;

  getSchemeTerminalEntryCapability(): string;

  setSchemeTerminalEntryCapability(schemeTerminalEntryCapability: string): void;

  getPinBlockContainer(): string;

  setPinBlockContainer(pinBlockContainer: string): void;

  getPinBlock(): string;

  setPinBlock(pinBlock: string): void;

  getPinBlockKsn(): string;

  setPinBlockKsn(pinBlockKsn: string): void;

  getMac(): string;

  setMac(mac: string): void;

  getMacKsn(): string;

  setMacKsn(macKsn: string): void;

  getGwContainer(): string;

  setGwContainer(gwContainer: string): void;

  getGwIssuerAuthenticationData(): string;

  setGwIssuerAuthenticationData(gwIssuerAuthenticationData: string): void;

  getGwIssuerScriptTemplate1(): string;

  setGwIssuerScriptTemplate1(gwIssuerScriptTemplate1: string): void;

  getGwIssuerScriptTemplate2(): string;

  setGwIssuerScriptTemplate2(gwIssuerScriptTemplate2: string): void;

  getGwIssuerAuthorizationResponseCode(): string;

  setGwIssuerAuthorizationResponseCode(gwIssuerAuthorizationResponseCode: string): void;

  getGwMessageControlField(): string;

  setGwMessageControlField(gwMessageControlField: string): void;

  getGwTxResult(): pay.GwTxResult;

  setGwTxResult(gwTxResult: pay.GwTxResult): void;

  getCvmResult(): payments.CvmResult;

  setCvmResult(cvmResult: payments.CvmResult): void;

  getServiceCode1(): pay.ServiceCode1;

  setServiceCode1(serviceCode1: pay.ServiceCode1): void;

  getServiceCode2(): pay.ServiceCode2;

  setServiceCode2(serviceCode2: pay.ServiceCode2): void;

  getServiceCode3(): pay.ServiceCode3;

  setServiceCode3(serviceCode3: pay.ServiceCode3): void;

  getOfflineApprovalAuthCode(): string;

  setOfflineApprovalAuthCode(offlineApprovalAuthCode: string): void;

  getAvailableOfflineSpendingAmount(): number;

  setAvailableOfflineSpendingAmount(availableOfflineSpendingAmount: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof pay
* @enum {string}
*/
export enum TxResult {
  ERROR = "ERROR",
  MSR = "MSR",
  EMV_OFFLINE_APPROVED = "EMV_OFFLINE_APPROVED",
  EMV_OFFLINE_DECLINED = "EMV_OFFLINE_DECLINED",
  EMV_GO_ONLINE = "EMV_GO_ONLINE",
  EMV_APPROVED_ONLINE = "EMV_APPROVED_ONLINE",
  EMV_DECLINED_ONLINE = "EMV_DECLINED_ONLINE",
  RFID_OFFLINE_APPROVED = "RFID_OFFLINE_APPROVED",
  RFID_OFFLINE_DECLINED = "RFID_OFFLINE_DECLINED",
  RFID_GO_ONLINE = "RFID_GO_ONLINE",
  RFID_TERMINATED = "RFID_TERMINATED",
  RFID_MSR = "RFID_MSR",
  MANUAL = "MANUAL"
}
}
    
export namespace payments {
    



/**
* @memberof payments
* @enum {string}
*/
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



/**
* @memberof payments
* @enum {string}
*/
export enum AccountType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  CHECKING = "CHECKING",
  SAVINGS = "SAVINGS"
}

export class AdditionalChargeAmount {
  getId(): string;

  setId(id: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getType(): payments.AdditionalChargeType;

  setType(type: payments.AdditionalChargeType): void;

  getMetaInfo(fieldName: string): object
}




/**
Type of additional charge
* @memberof payments
* @enum {string}
*/
export enum AdditionalChargeType {
  INTERAC = "INTERAC"
}

export class Authorization {
  getId(): string;

  setId(id: string): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getTabName(): string;

  setTabName(tabName: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getAuthcode(): string;

  setAuthcode(authcode: string): void;

  getToken(): string;

  setToken(token: string): void;

  getType(): payments.Type;

  setType(type: payments.Type): void;

  getNote(): string;

  setNote(note: string): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getClosingPayment(): payments.Payment;

  setClosingPayment(closingPayment: payments.Payment): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class Batch {
  getId(): string;

  setId(id: string): void;

  getTxCount(): number;

  setTxCount(txCount: number): void;

  getTotalBatchAmount(): number;

  setTotalBatchAmount(totalBatchAmount: number): void;

  getDevices(): string;

  setDevices(devices: string): void;

  getState(): payments.BatchState;

  setState(state: payments.BatchState): void;

  getBatchType(): payments.BatchType;

  setBatchType(batchType: payments.BatchType): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getCloseoutTimeDifference(): number;

  setCloseoutTimeDifference(closeoutTimeDifference: number): void;

  getBatchDetails(): payments.BatchDetail;

  setBatchDetails(batchDetails: payments.BatchDetail): void;

  getBatchTransactions(): payments.BatchTransactions;

  setBatchTransactions(batchTransactions: payments.BatchTransactions): void;

  getMetaInfo(fieldName: string): object
}


export class BatchCardTotal {
  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getCardTypeLabel(): string;

  setCardTypeLabel(cardTypeLabel: string): void;

  getInstallments(): number;

  setInstallments(installments: number): void;

  getCount(): number;

  setCount(count: number): void;

  getTotal(): number;

  setTotal(total: number): void;

  getMetaInfo(fieldName: string): object
}


export class BatchDetail {
  getTerminalId(): string;

  setTerminalId(terminalId: string): void;

  getBatchTotals(): payments.BatchTotalStats;

  setBatchTotals(batchTotals: payments.BatchTotalStats): void;

  getServerTotals(): Array<payments.ServerTotalStats>;

  setServerTotals(serverTotals: Array<payments.ServerTotalStats>): void;

  getCardTotals(): Array<payments.BatchCardTotal>;

  setCardTotals(cardTotals: Array<payments.BatchCardTotal>): void;

  getDeviceTotals(): Array<payments.DeviceTotalStats>;

  setDeviceTotals(deviceTotals: Array<payments.DeviceTotalStats>): void;

  getEndpointTotals(): Array<payments.EndpointTotalStats>;

  setEndpointTotals(endpointTotals: Array<payments.EndpointTotalStats>): void;

  getOpenTips(): number;

  setOpenTips(openTips: number): void;

  getOpenTabs(): number;

  setOpenTabs(openTabs: number): void;

  getMetaInfo(fieldName: string): object
}


export class BatchRequest {
  getDevices(): Array<string>;

  setDevices(devices: Array<string>): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum BatchState {
  OPEN = "OPEN",
  QUEUED_FOR_PROCESSING = "QUEUED_FOR_PROCESSING",
  PROCESSING = "PROCESSING",
  CLOSED = "CLOSED",
  FAILED = "FAILED"
}

export class BatchTotalStats {
  getSales(): payments.BatchTotalType;

  setSales(sales: payments.BatchTotalType): void;

  getRefunds(): payments.BatchTotalType;

  setRefunds(refunds: payments.BatchTotalType): void;

  getNet(): payments.BatchTotalType;

  setNet(net: payments.BatchTotalType): void;

  getGiftCardLoads(): payments.BatchTotalType;

  setGiftCardLoads(giftCardLoads: payments.BatchTotalType): void;

  getGiftCardCashOuts(): payments.BatchTotalType;

  setGiftCardCashOuts(giftCardCashOuts: payments.BatchTotalType): void;

  getTax(): payments.BatchTotalType;

  setTax(tax: payments.BatchTotalType): void;

  getTips(): payments.BatchTotalType;

  setTips(tips: payments.BatchTotalType): void;

  getMetaInfo(fieldName: string): object
}


export class BatchTotalType {
  getCount(): number;

  setCount(count: number): void;

  getTotal(): number;

  setTotal(total: number): void;

  getMetaInfo(fieldName: string): object
}


export class BatchTransactions {
  getPaymentIds(): Array<string>;

  setPaymentIds(paymentIds: Array<string>): void;

  getRefundIds(): Array<string>;

  setRefundIds(refundIds: Array<string>): void;

  getCreditIds(): Array<string>;

  setCreditIds(creditIds: Array<string>): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum BatchType {
  MANUAL_CLOSE = "MANUAL_CLOSE",
  AUTO_CLOSE = "AUTO_CLOSE"
}



/**
* @memberof payments
* @enum {string}
*/
export enum CVVResult {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  NOT_PROCESSED = "NOT_PROCESSED",
  NOT_PRESENT = "NOT_PRESENT"
}



/**
* @memberof payments
* @enum {string}
*/
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

export class CardTransaction {
  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getEntryType(): payments.CardEntryType;

  setEntryType(entryType: payments.CardEntryType): void;

  getFirst6(): string;

  setFirst6(first6: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getType(): payments.CardTransactionType;

  setType(type: payments.CardTransactionType): void;

  getAuthCode(): string;

  setAuthCode(authCode: string): void;

  getReferenceId(): string;

  setReferenceId(referenceId: string): void;

  getTransactionNo(): string;

  setTransactionNo(transactionNo: string): void;

  getState(): payments.CardTransactionState;

  setState(state: payments.CardTransactionState): void;

  getExtra(): object;

  setExtra(extra: object): void;

  getBegBalance(): number;

  setBegBalance(begBalance: number): void;

  getEndBalance(): number;

  setEndBalance(endBalance: number): void;

  getAvsResult(): payments.AVSResult;

  setAvsResult(avsResult: payments.AVSResult): void;

  getCardholderName(): string;

  setCardholderName(cardholderName: string): void;

  getToken(): string;

  setToken(token: string): void;

  getVaultedCard(): payments.VaultedCard;

  setVaultedCard(vaultedCard: payments.VaultedCard): void;

  getGatewayTxState(): payments.GatewayTxState;

  setGatewayTxState(gatewayTxState: payments.GatewayTxState): void;

  getCurrency(): string;

  setCurrency(currency: string): void;

  getCaptured(): boolean;

  setCaptured(captured: boolean): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum CardTransactionState {
  PENDING = "PENDING",
  CLOSED = "CLOSED"
}



/**
* @memberof payments
* @enum {string}
*/
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
  INTERNET_ACTIVATE = "INTERNET_ACTIVATE",
  TOKEN_REQUEST = "TOKEN_REQUEST",
  VERIFICATION = "VERIFICATION"
}



/**
* @memberof payments
* @enum {string}
*/
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
  EBT = "EBT",
  GIROCARD = "GIROCARD",
  INTERAC = "INTERAC",
  OTHER = "OTHER"
}

export class CardlessPaymentData {
  getPaymentNetwork(): payments.CardlessPaymentNetwork;

  setPaymentNetwork(paymentNetwork: payments.CardlessPaymentNetwork): void;

  getPaymentType(): payments.CardlessPaymentDataType;

  setPaymentType(paymentType: payments.CardlessPaymentDataType): void;

  getPaymentData(): string;

  setPaymentData(paymentData: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum CardlessPaymentDataType {
  QR_CODE = "QR_CODE",
  BARCODE = "BARCODE"
}



/**
* @memberof payments
* @enum {string}
*/
export enum CardlessPaymentNetwork {
  ALIPAY = "ALIPAY",
  WECHAT = "WECHAT"
}

export class CashAdvanceCustomerIdentification {
  getIdType(): payments.IdType;

  setIdType(idType: payments.IdType): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getMaskedSerialNumber(): string;

  setMaskedSerialNumber(maskedSerialNumber: string): void;

  getEncryptedSerialNumber(): string;

  setEncryptedSerialNumber(encryptedSerialNumber: string): void;

  getExpirationDate(): string;

  setExpirationDate(expirationDate: string): void;

  getIssuingState(): string;

  setIssuingState(issuingState: string): void;

  getIssuingCountry(): string;

  setIssuingCountry(issuingCountry: string): void;

  getCustomerName(): string;

  setCustomerName(customerName: string): void;

  getAddressStreet1(): string;

  setAddressStreet1(addressStreet1: string): void;

  getAddressStreet2(): string;

  setAddressStreet2(addressStreet2: string): void;

  getAddressCity(): string;

  setAddressCity(addressCity: string): void;

  getAddressState(): string;

  setAddressState(addressState: string): void;

  getAddressZipCode(): string;

  setAddressZipCode(addressZipCode: string): void;

  getAddressCountry(): string;

  setAddressCountry(addressCountry: string): void;

  getMetaInfo(fieldName: string): object
}


export class CashAdvanceExtra {
  getCashAdvanceSerialNum(): string;

  setCashAdvanceSerialNum(cashAdvanceSerialNum: string): void;

  getCashAdvanceCustomerIdentification(): payments.CashAdvanceCustomerIdentification;

  setCashAdvanceCustomerIdentification(cashAdvanceCustomerIdentification: payments.CashAdvanceCustomerIdentification): void;

  getMetaInfo(fieldName: string): object
}


export class Credit {
  getId(): string;

  setId(id: string): void;

  getOrderRef(): base.Reference;

  setOrderRef(orderRef: base.Reference): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getTender(): base.Tender;

  setTender(tender: base.Tender): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getCustomers(): customers.Customer;

  setCustomers(customers: customers.Customer): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTaxRates(): Array<payments.TaxableAmountRate>;

  setTaxRates(taxRates: Array<payments.TaxableAmountRate>): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getCardTransaction(): payments.CardTransaction;

  setCardTransaction(cardTransaction: payments.CardTransaction): void;

  getVoided(): boolean;

  setVoided(voided: boolean): void;

  getVoidReason(): string;

  setVoidReason(voidReason: string): void;

  getDccInfo(): payments.DCCInfo;

  setDccInfo(dccInfo: payments.DCCInfo): void;

  getTransactionSettings(): payments.TransactionSettings;

  setTransactionSettings(transactionSettings: payments.TransactionSettings): void;

  getCreditRefunds(): Array<payments.CreditRefund>;

  setCreditRefunds(creditRefunds: Array<payments.CreditRefund>): void;

  getGermanInfo(): payments.GermanInfo;

  setGermanInfo(germanInfo: payments.GermanInfo): void;

  getAppTracking(): apps.AppTracking;

  setAppTracking(appTracking: apps.AppTracking): void;

  getResult(): payments.Result;

  setResult(result: payments.Result): void;

  getTransactionInfo(): payments.TransactionInfo;

  setTransactionInfo(transactionInfo: payments.TransactionInfo): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getMetaInfo(fieldName: string): object
}


export class CreditRefund {
  getId(): string;

  setId(id: string): void;

  getOrderRef(): base.Reference;

  setOrderRef(orderRef: base.Reference): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getCredit(): base.Reference;

  setCredit(credit: base.Reference): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getGermanInfo(): payments.GermanInfo;

  setGermanInfo(germanInfo: payments.GermanInfo): void;

  getAppTracking(): apps.AppTracking;

  setAppTracking(appTracking: apps.AppTracking): void;

  getTransactionInfo(): payments.TransactionInfo;

  setTransactionInfo(transactionInfo: payments.TransactionInfo): void;

  getMetaInfo(fieldName: string): object
}


export class CreditRefundResponse {
  getRequestSuccessful(): boolean;

  setRequestSuccessful(requestSuccessful: boolean): void;

  getResponseErrorMessage(): string;

  setResponseErrorMessage(responseErrorMessage: string): void;

  getCreditRefund(): payments.CreditRefund;

  setCreditRefund(creditRefund: payments.CreditRefund): void;

  getClientData(): object;

  setClientData(clientData: object): void;

  getMetaInfo(fieldName: string): object
}


export class CreditRequest {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getPaymentCard(): pay.PaymentRequestCardDetails;

  setPaymentCard(paymentCard: pay.PaymentRequestCardDetails): void;

  getMetaInfo(fieldName: string): object
}


export class CreditResponse {
  getRequestSuccessful(): boolean;

  setRequestSuccessful(requestSuccessful: boolean): void;

  getResponseErrorMessage(): string;

  setResponseErrorMessage(responseErrorMessage: string): void;

  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getClientData(): object;

  setClientData(clientData: object): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum Currency {
  USD = "USD",
  GBP = "GBP",
  EUR = "EUR"
}



/**
* @memberof payments
* @enum {string}
*/
export enum CvmResult {
  NO_CVM_REQUIRED = "NO_CVM_REQUIRED",
  SIGNATURE = "SIGNATURE",
  SIGNATURE_VERIFIED = "SIGNATURE_VERIFIED",
  SIGNATURE_ON_PAPER = "SIGNATURE_ON_PAPER",
  SIGNATURE_REJECTED = "SIGNATURE_REJECTED",
  PIN = "PIN",
  ONLINE_PIN = "ONLINE_PIN",
  SIGNATURE_AND_PIN = "SIGNATURE_AND_PIN",
  CVM_FAILED = "CVM_FAILED",
  DEVICE = "DEVICE"
}

export class DCCInfo {
  getInquiryRateId(): number;

  setInquiryRateId(inquiryRateId: number): void;

  getDccApplied(): boolean;

  setDccApplied(dccApplied: boolean): void;

  getForeignCurrencyCode(): string;

  setForeignCurrencyCode(foreignCurrencyCode: string): void;

  getForeignAmount(): number;

  setForeignAmount(foreignAmount: number): void;

  getExchangeRate(): number;

  setExchangeRate(exchangeRate: number): void;

  getMarginRatePercentage(): string;

  setMarginRatePercentage(marginRatePercentage: string): void;

  getExchangeRateSourceName(): string;

  setExchangeRateSourceName(exchangeRateSourceName: string): void;

  getExchangeRateSourceTimeStamp(): string;

  setExchangeRateSourceTimeStamp(exchangeRateSourceTimeStamp: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum DataEntryLocation {
  ON_SCREEN = "ON_SCREEN",
  ON_PAPER = "ON_PAPER",
  NONE = "NONE"
}

export class DeviceTotalStats {
  getDeviceId(): number;

  setDeviceId(deviceId: number): void;

  getDeviceSerial(): string;

  setDeviceSerial(deviceSerial: string): void;

  getDeviceName(): string;

  setDeviceName(deviceName: string): void;

  getTerminalId(): string;

  setTerminalId(terminalId: string): void;

  getSales(): payments.BatchTotalType;

  setSales(sales: payments.BatchTotalType): void;

  getRefunds(): payments.BatchTotalType;

  setRefunds(refunds: payments.BatchTotalType): void;

  getNet(): payments.BatchTotalType;

  setNet(net: payments.BatchTotalType): void;

  getGiftCardLoads(): payments.BatchTotalType;

  setGiftCardLoads(giftCardLoads: payments.BatchTotalType): void;

  getGiftCardCashOuts(): payments.BatchTotalType;

  setGiftCardCashOuts(giftCardCashOuts: payments.BatchTotalType): void;

  getTax(): payments.BatchTotalType;

  setTax(tax: payments.BatchTotalType): void;

  getTips(): payments.BatchTotalType;

  setTips(tips: payments.BatchTotalType): void;

  getCardTotals(): Array<payments.BatchCardTotal>;

  setCardTotals(cardTotals: Array<payments.BatchCardTotal>): void;

  getMetaInfo(fieldName: string): object
}


export class DiscountApprover {
  getDiscount(): base.Reference;

  setDiscount(discount: base.Reference): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getApprovedBy(): base.Reference;

  setApprovedBy(approvedBy: base.Reference): void;

  getOrder(): base.Reference;

  setOrder(order: base.Reference): void;

  getLineItem(): base.Reference;

  setLineItem(lineItem: base.Reference): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getEnvironment(): string;

  setEnvironment(environment: string): void;

  getMetaInfo(fieldName: string): object
}


export class ECommTransactionInfo {
  getECommTransaction(): boolean;

  setECommTransaction(eCommTransaction: boolean): void;

  getCredentialOnFile(): boolean;

  setCredentialOnFile(credentialOnFile: boolean): void;

  getTokenType(): tokens.TokenType;

  setTokenType(tokenType: tokens.TokenType): void;

  getEcommIndicator(): ecomm.EcommerceIndicator;

  setEcommIndicator(ecommIndicator: ecomm.EcommerceIndicator): void;

  getMetaInfo(fieldName: string): object
}


export class EndpointTotalStats {
  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getEndpointName(): string;

  setEndpointName(endpointName: string): void;

  getBatchNumber(): string;

  setBatchNumber(batchNumber: string): void;

  getTerminalId(): string;

  setTerminalId(terminalId: string): void;

  getCount(): number;

  setCount(count: number): void;

  getTotal(): number;

  setTotal(total: number): void;

  getCardTotals(): Array<payments.BatchCardTotal>;

  setCardTotals(cardTotals: Array<payments.BatchCardTotal>): void;

  getMetaInfo(fieldName: string): object
}


export class FailedBatchSettlement {
  getMerchantName(): string;

  setMerchantName(merchantName: string): void;

  getMid(): string;

  setMid(mid: string): void;

  getCid(): string;

  setCid(cid: string): void;

  getBatchId(): string;

  setBatchId(batchId: string): void;

  getTxCount(): number;

  setTxCount(txCount: number): void;

  getState(): payments.BatchState;

  setState(state: payments.BatchState): void;

  getBatchType(): payments.BatchType;

  setBatchType(batchType: payments.BatchType): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getRetries(): number;

  setRetries(retries: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum FraudResponseAction {
  VOID = "VOID",
  PROMPT = "PROMPT",
  IGNORE = "IGNORE",
  DECLINE = "DECLINE"
}



/**
* @memberof payments
* @enum {string}
*/
export enum FraudResponseCodeType {
  AVS = "AVS",
  CVV = "CVV"
}

export class FraudResponseReason {
  getAction(): payments.FraudResponseAction;

  setAction(action: payments.FraudResponseAction): void;

  getRuleTriggered(): string;

  setRuleTriggered(ruleTriggered: string): void;

  getReason(): string;

  setReason(reason: string): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum GatewayTxState {
  INITIATED = "INITIATED",
  INITIATED_ON_AUTH = "INITIATED_ON_AUTH",
  ACKNOWLEDGED = "ACKNOWLEDGED",
  CONNECT_FAILED = "CONNECT_FAILED",
  TIMEOUT = "TIMEOUT",
  FAILED = "FAILED",
  REVERSE_INITIATED = "REVERSE_INITIATED",
  REVERSE_INITIATED_ON_AUTH = "REVERSE_INITIATED_ON_AUTH",
  REVERSED = "REVERSED",
  REVERSAL_FAILED = "REVERSAL_FAILED",
  EXTERNAL = "EXTERNAL"
}



/**
* @memberof payments
* @enum {string}
*/
export enum GatewayTxType {
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
  INTERNET_ACTIVATE = "INTERNET_ACTIVATE",
  TOKEN_REQUEST = "TOKEN_REQUEST",
  VERIFICATION = "VERIFICATION"
}

export class GatewayTxs {
  getMerchantGatewayId(): number;

  setMerchantGatewayId(merchantGatewayId: number): void;

  getClientId(): string;

  setClientId(clientId: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getAdjustAmount(): number;

  setAdjustAmount(adjustAmount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getRefundTaxAmount(): number;

  setRefundTaxAmount(refundTaxAmount: number): void;

  getCurrency(): payments.Currency;

  setCurrency(currency: payments.Currency): void;

  getState(): payments.GatewayTxState;

  setState(state: payments.GatewayTxState): void;

  getRetries(): number;

  setRetries(retries: number): void;

  getType(): payments.GatewayTxType;

  setType(type: payments.GatewayTxType): void;

  getEntryType(): payments.CardEntryType;

  setEntryType(entryType: payments.CardEntryType): void;

  getResponseCode(): string;

  setResponseCode(responseCode: string): void;

  getResponseMessage(): string;

  setResponseMessage(responseMessage: string): void;

  getFirst4(): string;

  setFirst4(first4: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getRefnum(): string;

  setRefnum(refnum: string): void;

  getToken(): string;

  setToken(token: string): void;

  getAuthcode(): string;

  setAuthcode(authcode: string): void;

  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getExtra(): string;

  setExtra(extra: string): void;

  getCaptured(): boolean;

  setCaptured(captured: boolean): void;

  getSwiperSerial(): string;

  setSwiperSerial(swiperSerial: string): void;

  getKsnPrefix(): string;

  setKsnPrefix(ksnPrefix: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getRefundId(): number;

  setRefundId(refundId: number): void;

  getPaymentRefundId(): number;

  setPaymentRefundId(paymentRefundId: number): void;

  getExtraGatewayInfo(): object;

  setExtraGatewayInfo(extraGatewayInfo: object): void;

  getRefundDeviceId(): number;

  setRefundDeviceId(refundDeviceId: number): void;

  getPaymentDeviceId(): number;

  setPaymentDeviceId(paymentDeviceId: number): void;

  getPaymentUuid(): string;

  setPaymentUuid(paymentUuid: string): void;

  getRefundUuid(): string;

  setRefundUuid(refundUuid: string): void;

  getCreditUuid(): string;

  setCreditUuid(creditUuid: string): void;

  getMetaInfo(fieldName: string): object
}


export class GermanInfo {
  getCardTrack2(): string;

  setCardTrack2(cardTrack2: string): void;

  getCardSequenceNumber(): string;

  setCardSequenceNumber(cardSequenceNumber: string): void;

  getTransactionCaseGermany(): string;

  setTransactionCaseGermany(transactionCaseGermany: string): void;

  getTransactionTypeGermany(): string;

  setTransactionTypeGermany(transactionTypeGermany: string): void;

  getTerminalID(): string;

  setTerminalID(terminalID: string): void;

  getTraceNumber(): string;

  setTraceNumber(traceNumber: string): void;

  getOldTraceNumber(): string;

  setOldTraceNumber(oldTraceNumber: string): void;

  getReceiptNumber(): string;

  setReceiptNumber(receiptNumber: string): void;

  getTransactionAID(): string;

  setTransactionAID(transactionAID: string): void;

  getTransactionMSApp(): string;

  setTransactionMSApp(transactionMSApp: string): void;

  getTransactionScriptResults(): string;

  setTransactionScriptResults(transactionScriptResults: string): void;

  getReceiptType(): string;

  setReceiptType(receiptType: string): void;

  getCustomerTransactionDOLValues(): string;

  setCustomerTransactionDOLValues(customerTransactionDOLValues: string): void;

  getMerchantTransactionDOLValues(): string;

  setMerchantTransactionDOLValues(merchantTransactionDOLValues: string): void;

  getMerchantJournalDOL(): string;

  setMerchantJournalDOL(merchantJournalDOL: string): void;

  getMerchantJournalDOLValues(): string;

  setMerchantJournalDOLValues(merchantJournalDOLValues: string): void;

  getConfigMerchantId(): string;

  setConfigMerchantId(configMerchantId: string): void;

  getConfigProductLabel(): string;

  setConfigProductLabel(configProductLabel: string): void;

  getHostResponseAidParBMP53(): string;

  setHostResponseAidParBMP53(hostResponseAidParBMP53: string): void;

  getHostResponsePrintDataBM60(): string;

  setHostResponsePrintDataBM60(hostResponsePrintDataBM60: string): void;

  getSepaElvReceiptFormat(): string;

  setSepaElvReceiptFormat(sepaElvReceiptFormat: string): void;

  getSepaElvExtAppLabel(): string;

  setSepaElvExtAppLabel(sepaElvExtAppLabel: string): void;

  getSepaElvPreNotification(): string;

  setSepaElvPreNotification(sepaElvPreNotification: string): void;

  getSepaElvMandate(): string;

  setSepaElvMandate(sepaElvMandate: string): void;

  getSepaElvCreditorId(): string;

  setSepaElvCreditorId(sepaElvCreditorId: string): void;

  getSepaElvMandateId(): string;

  setSepaElvMandateId(sepaElvMandateId: string): void;

  getSepaElvIban(): string;

  setSepaElvIban(sepaElvIban: string): void;

  getMetaInfo(fieldName: string): object
}


export class GiftCard {
  getTrack2(): string;

  setTrack2(track2: string): void;

  getCardNumber(): string;

  setCardNumber(cardNumber: string): void;

  getIsManuallyEntered(): boolean;

  setIsManuallyEntered(isManuallyEntered: boolean): void;

  getDeviceSerial(): string;

  setDeviceSerial(deviceSerial: string): void;

  getVirtual(): boolean;

  setVirtual(virtual: boolean): void;

  getPromoCode(): string;

  setPromoCode(promoCode: string): void;

  getMetaInfo(fieldName: string): object
}


export class GiftCardResponse {
  getTxType(): payments.TxType;

  setTxType(txType: payments.TxType): void;

  getState(): payments.GiftCardState;

  setState(state: payments.GiftCardState): void;

  getRequestAmount(): number;

  setRequestAmount(requestAmount: number): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getResponseMessage(): string;

  setResponseMessage(responseMessage: string): void;

  getRequestSuccessful(): boolean;

  setRequestSuccessful(requestSuccessful: boolean): void;

  getAccountNumber(): string;

  setAccountNumber(accountNumber: string): void;

  getScv(): string;

  setScv(scv: string): void;

  getGiftCardTxUuid(): string;

  setGiftCardTxUuid(giftCardTxUuid: string): void;

  getTransactionId(): string;

  setTransactionId(transactionId: string): void;

  getReferenceUuid(): string;

  setReferenceUuid(referenceUuid: string): void;

  getAuthCode(): string;

  setAuthCode(authCode: string): void;

  getBegBal(): number;

  setBegBal(begBal: number): void;

  getEndBal(): number;

  setEndBal(endBal: number): void;

  getHoldBal(): number;

  setHoldBal(holdBal: number): void;

  getSyncPaymentObject(): boolean;

  setSyncPaymentObject(syncPaymentObject: boolean): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum GiftCardState {
  INVALID = "INVALID",
  ACTIVATED = "ACTIVATED",
  INACTIVE = "INACTIVE"
}

export class GiftCardTransaction {
  getId(): string;

  setId(id: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getCard(): payments.GiftCard;

  setCard(card: payments.GiftCard): void;

  getPaymentIds(): Array<string>;

  setPaymentIds(paymentIds: Array<string>): void;

  getIgnorePayment(): boolean;

  setIgnorePayment(ignorePayment: boolean): void;

  getServiceChargeAmount(): payments.ServiceChargeAmount;

  setServiceChargeAmount(serviceChargeAmount: payments.ServiceChargeAmount): void;

  getTaxableAmountRates(): Array<payments.TaxableAmountRate>;

  setTaxableAmountRates(taxableAmountRates: Array<payments.TaxableAmountRate>): void;

  getLineItems(): Array<payments.LineItemPayment>;

  setLineItems(lineItems: Array<payments.LineItemPayment>): void;

  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getSuppressPayment(): boolean;

  setSuppressPayment(suppressPayment: boolean): void;

  getMetaInfo(fieldName: string): object
}




/**
Identification type
* @memberof payments
* @enum {string}
*/
export enum IdType {
  DRIVERS_LICENSE = "DRIVERS_LICENSE",
  PASSPORT = "PASSPORT"
}

export class IncrementalAuthorization {
  getId(): string;

  setId(id: string): void;

  getMerchantId(): number;

  setMerchantId(merchantId: number): void;

  getPaymentId(): number;

  setPaymentId(paymentId: number): void;

  getGatewayTxId(): number;

  setGatewayTxId(gatewayTxId: number): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getCardTransaction(): payments.CardTransaction;

  setCardTransaction(cardTransaction: payments.CardTransaction): void;

  getResult(): payments.Result;

  setResult(result: payments.Result): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getMetaInfo(fieldName: string): object
}


export class LineItemPayment {
  getId(): string;

  setId(id: string): void;

  getPercentage(): number;

  setPercentage(percentage: number): void;

  getBinName(): string;

  setBinName(binName: string): void;

  getRefunded(): boolean;

  setRefunded(refunded: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class Payment {
  getId(): string;

  setId(id: string): void;

  getOrder(): base.Reference;

  setOrder(order: base.Reference): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getTender(): base.Tender;

  setTender(tender: base.Tender): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getCashbackAmount(): number;

  setCashbackAmount(cashbackAmount: number): void;

  getCashTendered(): number;

  setCashTendered(cashTendered: number): void;

  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getOffline(): boolean;

  setOffline(offline: boolean): void;

  getResult(): payments.Result;

  setResult(result: payments.Result): void;

  getCardTransaction(): payments.CardTransaction;

  setCardTransaction(cardTransaction: payments.CardTransaction): void;

  getServiceCharge(): payments.ServiceChargeAmount;

  setServiceCharge(serviceCharge: payments.ServiceChargeAmount): void;

  getAttributes(): object;

  setAttributes(attributes: object): void;

  getAdditionalCharges(): Array<payments.AdditionalChargeAmount>;

  setAdditionalCharges(additionalCharges: Array<payments.AdditionalChargeAmount>): void;

  getTaxRates(): Array<payments.PaymentTaxRate>;

  setTaxRates(taxRates: Array<payments.PaymentTaxRate>): void;

  getRefunds(): Array<payments.Refund>;

  setRefunds(refunds: Array<payments.Refund>): void;

  getNote(): string;

  setNote(note: string): void;

  getLineItemPayments(): Array<payments.LineItemPayment>;

  setLineItemPayments(lineItemPayments: Array<payments.LineItemPayment>): void;

  getAuthorization(): base.Reference;

  setAuthorization(authorization: base.Reference): void;

  getVoidPaymentRef(): base.Reference;

  setVoidPaymentRef(voidPaymentRef: base.Reference): void;

  getVoidReason(): order.VoidReason;

  setVoidReason(voidReason: order.VoidReason): void;

  getDccInfo(): payments.DCCInfo;

  setDccInfo(dccInfo: payments.DCCInfo): void;

  getTransactionSettings(): payments.TransactionSettings;

  setTransactionSettings(transactionSettings: payments.TransactionSettings): void;

  getGermanInfo(): payments.GermanInfo;

  setGermanInfo(germanInfo: payments.GermanInfo): void;

  getAppTracking(): apps.AppTracking;

  setAppTracking(appTracking: apps.AppTracking): void;

  getCashAdvanceExtra(): payments.CashAdvanceExtra;

  setCashAdvanceExtra(cashAdvanceExtra: payments.CashAdvanceExtra): void;

  getTransactionInfo(): payments.TransactionInfo;

  setTransactionInfo(transactionInfo: payments.TransactionInfo): void;

  getSignatureDisclaimer(): payments.SignatureDisclaimer;

  setSignatureDisclaimer(signatureDisclaimer: payments.SignatureDisclaimer): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getIncrements(): Array<payments.IncrementalAuthorization>;

  setIncrements(increments: Array<payments.IncrementalAuthorization>): void;

  getMetaInfo(fieldName: string): object
}


export class PaymentAttribute {
  getType(): string;

  setType(type: string): void;

  getValue(): string;

  setValue(value: string): void;

  getMetaInfo(fieldName: string): object
}


export class PaymentResponse {
  getRequestSuccessful(): boolean;

  setRequestSuccessful(requestSuccessful: boolean): void;

  getResponseErrorMessage(): string;

  setResponseErrorMessage(responseErrorMessage: string): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getClientData(): object;

  setClientData(clientData: object): void;

  getSyncPaymentObject(): boolean;

  setSyncPaymentObject(syncPaymentObject: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class PaymentResponseFraudSetting {
  getId(): string;

  setId(id: string): void;

  getCardType(): payments.CardType;

  setCardType(cardType: payments.CardType): void;

  getResponseCode(): string;

  setResponseCode(responseCode: string): void;

  getResponseCodeType(): payments.FraudResponseCodeType;

  setResponseCodeType(responseCodeType: payments.FraudResponseCodeType): void;

  getAction(): payments.FraudResponseAction;

  setAction(action: payments.FraudResponseAction): void;

  getSettingName(): string;

  setSettingName(settingName: string): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getMetaInfo(fieldName: string): object
}


export class PaymentTaxRate {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getRate(): number;

  setRate(rate: number): void;

  getIsDefault(): boolean;

  setIsDefault(isDefault: boolean): void;

  getTaxableAmount(): number;

  setTaxableAmount(taxableAmount: number): void;

  getIsVat(): boolean;

  setIsVat(isVat: boolean): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getMetaInfo(fieldName: string): object
}


export class PromotionalMessage {
  getMessage(): string;

  setMessage(message: string): void;

  getShowOnMerchantReceipt(): boolean;

  setShowOnMerchantReceipt(showOnMerchantReceipt: boolean): void;

  getShowOnCustomerReceipt(): boolean;

  setShowOnCustomerReceipt(showOnCustomerReceipt: boolean): void;

  getShowOnDisplay(): boolean;

  setShowOnDisplay(showOnDisplay: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class Refund {
  getId(): string;

  setId(id: string): void;

  getOrderRef(): base.Reference;

  setOrderRef(orderRef: base.Reference): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getPayment(): base.Reference;

  setPayment(payment: base.Reference): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getLineItems(): Array<base.Reference>;

  setLineItems(lineItems: Array<base.Reference>): void;

  getOverrideMerchantTender(): base.Tender;

  setOverrideMerchantTender(overrideMerchantTender: base.Tender): void;

  getTaxableAmountRates(): Array<payments.TaxableAmountRate>;

  setTaxableAmountRates(taxableAmountRates: Array<payments.TaxableAmountRate>): void;

  getServiceChargeAmount(): payments.ServiceChargeAmount;

  setServiceChargeAmount(serviceChargeAmount: payments.ServiceChargeAmount): void;

  getAdditionalCharges(): Array<payments.AdditionalChargeAmount>;

  setAdditionalCharges(additionalCharges: Array<payments.AdditionalChargeAmount>): void;

  getGermanInfo(): payments.GermanInfo;

  setGermanInfo(germanInfo: payments.GermanInfo): void;

  getAppTracking(): apps.AppTracking;

  setAppTracking(appTracking: apps.AppTracking): void;

  getVoided(): boolean;

  setVoided(voided: boolean): void;

  getVoidReason(): string;

  setVoidReason(voidReason: string): void;

  getCardTransaction(): payments.CardTransaction;

  setCardTransaction(cardTransaction: payments.CardTransaction): void;

  getTransactionInfo(): payments.TransactionInfo;

  setTransactionInfo(transactionInfo: payments.TransactionInfo): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getMetaInfo(fieldName: string): object
}


export class RefundRequest {
  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getCard(): pay.PaymentRequestCardDetails;

  setCard(card: pay.PaymentRequestCardDetails): void;

  getIsAdjustment(): boolean;

  setIsAdjustment(isAdjustment: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class RefundResponse {
  getRequestSuccessful(): boolean;

  setRequestSuccessful(requestSuccessful: boolean): void;

  getResponseErrorMessage(): string;

  setResponseErrorMessage(responseErrorMessage: string): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getExtra(): object;

  setExtra(extra: object): void;

  getMetaInfo(fieldName: string): object
}


export class RegionalExtras {
  getFISCALINVOICENUMBERKEY(): string;

  getINSTALLMENTNUMBERKEY(): string;

  getINSTALLMENTPLANKEY(): string;

  getSKIPFISCALINVOICENUMBERSCREENVALUE(): string;

  getCONFIRMFISCALINVOICENUMBERPROVIDEDVALUE(): string;

  getINSTALLMENTNUMBERDEFAULTVALUE(): string;

  getMetaInfo(fieldName: string): object
}




/**
The expected values of the payment.result and credit.result fields
* @memberof payments
* @enum {string}
*/
export enum Result {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  INITIATED = "INITIATED",
  VOIDED = "VOIDED",
  VOIDING = "VOIDING",
  VOID_FAILED = "VOID_FAILED",
  AUTH = "AUTH",
  AUTH_COMPLETED = "AUTH_COMPLETED",
  DISCOUNT = "DISCOUNT"
}



/**
* @memberof payments
* @enum {string}
*/
export enum ReversalReason {
  CHIP_DECLINE = "CHIP_DECLINE",
  CARDHOLDER_CANCELLATION = "CARDHOLDER_CANCELLATION",
  COMMUNICATION_ERROR = "COMMUNICATION_ERROR",
  OTHER_REASON = "OTHER_REASON"
}



/**
* @memberof payments
* @enum {string}
*/
export enum SelectedService {
  NONE = "NONE",
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
  CANCELLATION = "CANCELLATION",
  PRE_AUTH = "PRE_AUTH",
  UPDATE_PRE_AUTH = "UPDATE_PRE_AUTH",
  PAYMENT_COMPLETION = "PAYMENT_COMPLETION",
  CASH_ADVANCE = "CASH_ADVANCE",
  DEFERRED_PAYMENT = "DEFERRED_PAYMENT",
  DEFERRED_PAYMENT_COMPLETION = "DEFERRED_PAYMENT_COMPLETION",
  VOICE_AUTHORISATION = "VOICE_AUTHORISATION",
  CARDHOLDER_DETECTION = "CARDHOLDER_DETECTION",
  TOKEN_REQUEST = "TOKEN_REQUEST",
  VERIFICATION = "VERIFICATION"
}

export class ServerTotalStats {
  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getEmployeeName(): string;

  setEmployeeName(employeeName: string): void;

  getSales(): payments.BatchTotalType;

  setSales(sales: payments.BatchTotalType): void;

  getRefunds(): payments.BatchTotalType;

  setRefunds(refunds: payments.BatchTotalType): void;

  getNet(): payments.BatchTotalType;

  setNet(net: payments.BatchTotalType): void;

  getGiftCardLoads(): payments.BatchTotalType;

  setGiftCardLoads(giftCardLoads: payments.BatchTotalType): void;

  getGiftCardCashOuts(): payments.BatchTotalType;

  setGiftCardCashOuts(giftCardCashOuts: payments.BatchTotalType): void;

  getTax(): payments.BatchTotalType;

  setTax(tax: payments.BatchTotalType): void;

  getTips(): payments.BatchTotalType;

  setTips(tips: payments.BatchTotalType): void;

  getMetaInfo(fieldName: string): object
}


export class ServiceChargeAmount {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getMetaInfo(fieldName: string): object
}


export class ServiceFeeRefundRequest {
  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getMetaInfo(fieldName: string): object
}


export class ServiceFeeRequest {
  getAmount(): number;

  setAmount(amount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getSourcePaymentId(): string;

  setSourcePaymentId(sourcePaymentId: string): void;

  getVaultedCard(): payments.VaultedCard;

  setVaultedCard(vaultedCard: payments.VaultedCard): void;

  getMetaInfo(fieldName: string): object
}


export class SignatureDisclaimer {
  getDisclaimerText(): string;

  setDisclaimerText(disclaimerText: string): void;

  getDisclaimerValues(): object;

  setDisclaimerValues(disclaimerValues: object): void;

  getMetaInfo(fieldName: string): object
}


export class TaxableAmountRate {
  getId(): string;

  setId(id: string): void;

  getName(): string;

  setName(name: string): void;

  getTaxableAmount(): number;

  setTaxableAmount(taxableAmount: number): void;

  getRate(): number;

  setRate(rate: number): void;

  getIsVat(): boolean;

  setIsVat(isVat: boolean): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTransactionRef(): base.Reference;

  setTransactionRef(transactionRef: base.Reference): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum TipMode {
  TIP_PROVIDED = "TIP_PROVIDED",
  ON_SCREEN_BEFORE_PAYMENT = "ON_SCREEN_BEFORE_PAYMENT",
  ON_SCREEN_AFTER_PAYMENT = "ON_SCREEN_AFTER_PAYMENT",
  ON_PAPER = "ON_PAPER",
  NO_TIP = "NO_TIP"
}

export class TokenRequest {
  getId(): string;

  setId(id: string): void;

  getType(): payments.TokenRequestType;

  setType(type: payments.TokenRequestType): void;

  getEmployee(): base.Reference;

  setEmployee(employee: base.Reference): void;

  getDevice(): base.Reference;

  setDevice(device: base.Reference): void;

  getMerchant(): base.Reference;

  setMerchant(merchant: base.Reference): void;

  getTender(): base.Tender;

  setTender(tender: base.Tender): void;

  getCustomer(): customers.Customer;

  setCustomer(customer: customers.Customer): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getCardTransaction(): payments.CardTransaction;

  setCardTransaction(cardTransaction: payments.CardTransaction): void;

  getNote(): string;

  setNote(note: string): void;

  getResult(): payments.Result;

  setResult(result: payments.Result): void;

  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getModifiedTime(): number;

  setModifiedTime(modifiedTime: number): void;

  getDeletedTime(): number;

  setDeletedTime(deletedTime: number): void;

  getTransactionInfo(): payments.TransactionInfo;

  setTransactionInfo(transactionInfo: payments.TransactionInfo): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum TokenRequestType {
  VERIFICATION = "VERIFICATION",
  TOKEN_REQUEST = "TOKEN_REQUEST"
}

export class Transaction {
  getCreatedTime(): number;

  setCreatedTime(createdTime: number): void;

  getClientCreatedTime(): number;

  setClientCreatedTime(clientCreatedTime: number): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getCreditRefund(): payments.CreditRefund;

  setCreditRefund(creditRefund: payments.CreditRefund): void;

  getMetaInfo(fieldName: string): object
}


export class TransactionInfo {
  getLanguageIndicator(): string;

  setLanguageIndicator(languageIndicator: string): void;

  getTransactionLocale(): string;

  setTransactionLocale(transactionLocale: string): void;

  getAccountSelection(): payments.AccountType;

  setAccountSelection(accountSelection: payments.AccountType): void;

  getFiscalInvoiceNumber(): string;

  setFiscalInvoiceNumber(fiscalInvoiceNumber: string): void;

  getInstallmentsQuantity(): number;

  setInstallmentsQuantity(installmentsQuantity: number): void;

  getInstallmentsPlanCode(): string;

  setInstallmentsPlanCode(installmentsPlanCode: string): void;

  getInstallmentsPlanId(): string;

  setInstallmentsPlanId(installmentsPlanId: string): void;

  getInstallmentsPlanDesc(): string;

  setInstallmentsPlanDesc(installmentsPlanDesc: string): void;

  getCardTypeLabel(): string;

  setCardTypeLabel(cardTypeLabel: string): void;

  getCardSymbol(): string;

  setCardSymbol(cardSymbol: string): void;

  getStan(): number;

  setStan(stan: number): void;

  getIdentityDocument(): customers.IdentityDocument;

  setIdentityDocument(identityDocument: customers.IdentityDocument): void;

  getBatchNumber(): string;

  setBatchNumber(batchNumber: string): void;

  getReceiptNumber(): string;

  setReceiptNumber(receiptNumber: string): void;

  getReversalStanRefNum(): string;

  setReversalStanRefNum(reversalStanRefNum: string): void;

  getReversalStan(): number;

  setReversalStan(reversalStan: number): void;

  getReversalMac(): string;

  setReversalMac(reversalMac: string): void;

  getReversalMacKsn(): string;

  setReversalMacKsn(reversalMacKsn: string): void;

  getTerminalIdentification(): string;

  setTerminalIdentification(terminalIdentification: string): void;

  getMerchantIdentifier(): string;

  setMerchantIdentifier(merchantIdentifier: string): void;

  getMerchantNameLocation(): string;

  setMerchantNameLocation(merchantNameLocation: string): void;

  getMaskedTrack2(): string;

  setMaskedTrack2(maskedTrack2: string): void;

  getReceiptExtraData(): string;

  setReceiptExtraData(receiptExtraData: string): void;

  getSelectedService(): payments.SelectedService;

  setSelectedService(selectedService: payments.SelectedService): void;

  getTransactionResult(): payments.TransactionResult;

  setTransactionResult(transactionResult: payments.TransactionResult): void;

  getTransactionTags(): string;

  setTransactionTags(transactionTags: string): void;

  getTxFormat(): payments.TxFormat;

  setTxFormat(txFormat: payments.TxFormat): void;

  getPanMask(): string;

  setPanMask(panMask: string): void;

  getTransactionSequenceCounter(): string;

  setTransactionSequenceCounter(transactionSequenceCounter: string): void;

  getApplicationPanSequenceNumber(): string;

  setApplicationPanSequenceNumber(applicationPanSequenceNumber: string): void;

  getReversalReason(): payments.ReversalReason;

  setReversalReason(reversalReason: payments.ReversalReason): void;

  getIsTokenBasedTx(): boolean;

  setIsTokenBasedTx(isTokenBasedTx: boolean): void;

  getOrigTransactionSequenceCounter(): string;

  setOrigTransactionSequenceCounter(origTransactionSequenceCounter: string): void;

  getTransactionSequenceCounterUpdate(): string;

  setTransactionSequenceCounterUpdate(transactionSequenceCounterUpdate: string): void;

  getEmergencyFlag(): boolean;

  setEmergencyFlag(emergencyFlag: boolean): void;

  getEntryType(): payments.CardEntryType;

  setEntryType(entryType: payments.CardEntryType): void;

  getPromotionalMessage(): payments.PromotionalMessage;

  setPromotionalMessage(promotionalMessage: payments.PromotionalMessage): void;

  getECommTransactionInfo(): payments.ECommTransactionInfo;

  setECommTransactionInfo(eCommTransactionInfo: payments.ECommTransactionInfo): void;

  getClientCardType(): payments.CardType;

  setClientCardType(clientCardType: payments.CardType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum TransactionResult {
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  ABORTED = "ABORTED",
  VOICE_AUTHORISATION = "VOICE_AUTHORISATION",
  PAYMENT_PART_ONLY = "PAYMENT_PART_ONLY",
  PARTIALLY_APPROVED = "PARTIALLY_APPROVED",
  NONE = "NONE"
}

export class TransactionSettings {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

  getDisableCashBack(): boolean;

  setDisableCashBack(disableCashBack: boolean): void;

  getCloverShouldHandleReceipts(): boolean;

  setCloverShouldHandleReceipts(cloverShouldHandleReceipts: boolean): void;

  getForcePinEntryOnSwipe(): boolean;

  setForcePinEntryOnSwipe(forcePinEntryOnSwipe: boolean): void;

  getDisableRestartTransactionOnFailure(): boolean;

  setDisableRestartTransactionOnFailure(disableRestartTransactionOnFailure: boolean): void;

  getAllowOfflinePayment(): boolean;

  setAllowOfflinePayment(allowOfflinePayment: boolean): void;

  getApproveOfflinePaymentWithoutPrompt(): boolean;

  setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void;

  getForceOfflinePayment(): boolean;

  setForceOfflinePayment(forceOfflinePayment: boolean): void;

  getSignatureThreshold(): number;

  setSignatureThreshold(signatureThreshold: number): void;

  getSignatureEntryLocation(): payments.DataEntryLocation;

  setSignatureEntryLocation(signatureEntryLocation: payments.DataEntryLocation): void;

  getTipMode(): payments.TipMode;

  setTipMode(tipMode: payments.TipMode): void;

  getTippableAmount(): number;

  setTippableAmount(tippableAmount: number): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getDisableDuplicateCheck(): boolean;

  setDisableDuplicateCheck(disableDuplicateCheck: boolean): void;

  getAutoAcceptPaymentConfirmations(): boolean;

  setAutoAcceptPaymentConfirmations(autoAcceptPaymentConfirmations: boolean): void;

  getAutoAcceptSignature(): boolean;

  setAutoAcceptSignature(autoAcceptSignature: boolean): void;

  getReturnResultOnTransactionComplete(): boolean;

  setReturnResultOnTransactionComplete(returnResultOnTransactionComplete: boolean): void;

  getTipSuggestions(): Array<merchant.TipSuggestion>;

  setTipSuggestions(tipSuggestions: Array<merchant.TipSuggestion>): void;

  getRegionalExtras(): object;

  setRegionalExtras(regionalExtras: object): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum TxFormat {
  DEFAULT = "DEFAULT",
  NEXO = "NEXO"
}



/**
* @memberof payments
* @enum {string}
*/
export enum TxType {
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
  INTERNET_ACTIVATE = "INTERNET_ACTIVATE"
}



/**
* @memberof payments
* @enum {string}
*/
export enum Type {
  TAB = "TAB",
  AUTH = "AUTH"
}

export class VasConfig {
  getVasProviders(): Array<payments.VasServiceProvider>;

  setVasProviders(vasProviders: Array<payments.VasServiceProvider>): void;

  getMetaInfo(fieldName: string): object
}


export class VasDataType {
  getDataType(): payments.VasDataTypeType;

  setDataType(dataType: payments.VasDataTypeType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum VasDataTypeType {
  ALL = "ALL",
  LOYALTY = "LOYALTY",
  OFFER = "OFFER",
  GIFT_CARD = "GIFT_CARD",
  PRIVATE_LABEL_CARD = "PRIVATE_LABEL_CARD",
  CUSTOMER = "CUSTOMER",
  VAS_DATA = "VAS_DATA"
}



/**
* @memberof payments
* @enum {string}
*/
export enum VasMode {
  PAY_ONLY = "PAY_ONLY",
  VAS_ONLY = "VAS_ONLY",
  VAS_OR_PAYMENT = "VAS_OR_PAYMENT",
  VAS_AND_PAYMENT = "VAS_AND_PAYMENT"
}

export class VasPayload {
  getPayloadElements(): Array<payments.VasPayloadElement>;

  setPayloadElements(payloadElements: Array<payments.VasPayloadElement>): void;

  getMetaInfo(fieldName: string): object
}


export class VasPayloadElement {
  getDataType(): payments.VasDataType;

  setDataType(dataType: payments.VasDataType): void;

  getResponseFormat(): payments.VasResponseFormat;

  setResponseFormat(responseFormat: payments.VasResponseFormat): void;

  getVasData(): string;

  setVasData(vasData: string): void;

  getProtocolId(): payments.VasProtocol;

  setProtocolId(protocolId: payments.VasProtocol): void;

  getMerchantId(): string;

  setMerchantId(merchantId: string): void;

  getMetaInfo(fieldName: string): object
}


export class VasPayloadResponse {
  getResponseType(): payments.VasPayloadResponseType;

  setResponseType(responseType: payments.VasPayloadResponseType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof payments
* @enum {string}
*/
export enum VasPayloadResponseType {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING"
}



/**
Protocol identifier
* @memberof payments
* @enum {string}
*/
export enum VasProtocol {
  ST = "ST",
  PK = "PK"
}



/**
* @memberof payments
* @enum {string}
*/
export enum VasPushMode {
  PUSH_NONE = "PUSH_NONE",
  PUSH_ONLY = "PUSH_ONLY",
  PUSH_AND_GET = "PUSH_AND_GET"
}



/**
* @memberof payments
* @enum {string}
*/
export enum VasResponseFormat {
  NDEF = "NDEF",
  STRING = "STRING",
  ENCRYPTED = "ENCRYPTED"
}

export class VasServiceProvider {
  getProviderPackage(): string;

  setProviderPackage(providerPackage: string): void;

  getProtocolId(): payments.VasProtocol;

  setProtocolId(protocolId: payments.VasProtocol): void;

  getSupportedServices(): Array<payments.VasDataType>;

  setSupportedServices(supportedServices: Array<payments.VasDataType>): void;

  getProtocolConfig(): object;

  setProtocolConfig(protocolConfig: object): void;

  getPushUrl(): string;

  setPushUrl(pushUrl: string): void;

  getPushTitle(): string;

  setPushTitle(pushTitle: string): void;

  getMetaInfo(fieldName: string): object
}


export class VasSettings {
  getVasMode(): payments.VasMode;

  setVasMode(vasMode: payments.VasMode): void;

  getServiceTypes(): Array<payments.VasDataType>;

  setServiceTypes(serviceTypes: Array<payments.VasDataType>): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getPushMode(): payments.VasPushMode;

  setPushMode(pushMode: payments.VasPushMode): void;

  getMetaInfo(fieldName: string): object
}


export class VaultedCard {
  getFirst6(): string;

  setFirst6(first6: string): void;

  getLast4(): string;

  setLast4(last4: string): void;

  getCardholderName(): string;

  setCardholderName(cardholderName: string): void;

  getExpirationDate(): string;

  setExpirationDate(expirationDate: string): void;

  getToken(): string;

  setToken(token: string): void;

  getMetaInfo(fieldName: string): object
}

}
    
export namespace printer {
    



/**
* @memberof printer
* @enum {string}
*/
export enum PrintCategory {
  ORDER = "ORDER",
  RECEIPT = "RECEIPT",
  FISCAL = "FISCAL",
  LABEL = "LABEL"
}



/**
* @memberof printer
* @enum {string}
*/
export enum PrintJobStatus {
  IN_QUEUE = "IN_QUEUE",
  PRINTING = "PRINTING",
  DONE = "DONE",
  ERROR = "ERROR",
  UNKNOWN = "UNKNOWN",
  NOT_FOUND = "NOT_FOUND"
}

export class Printer {
  getId(): string;

  setId(id: string): void;

  getMac(): string;

  setMac(mac: string): void;

  getModel(): string;

  setModel(model: string): void;

  getName(): string;

  setName(name: string): void;

  getIpAddress(): string;

  setIpAddress(ipAddress: string): void;

  getType(): printer.PrinterType;

  setType(type: printer.PrinterType): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof printer
* @enum {string}
*/
export enum PrinterType {
  NETWORK = "NETWORK",
  MY_LOCAL = "MY_LOCAL"
}
}
    
export namespace remotemessage {
    

export class AcknowledgementMessage extends Message {
  getSourceMethod(): remotemessage.Method;

  setSourceMethod(sourceMethod: remotemessage.Method): void;

}


export class ActivityMessageFromActivity extends Message {
  getAction(): string;

  setAction(action: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

}


export class ActivityMessageToActivity extends Message {
  getAction(): string;

  setAction(action: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

}


export class ActivityRequest extends Message {
  getAction(): string;

  setAction(action: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

  getNonBlocking(): boolean;

  setNonBlocking(nonBlocking: boolean): void;

  getForceLaunch(): boolean;

  setForceLaunch(forceLaunch: boolean): void;

}


export class ActivityResponseMessage extends Message {
  getResultCode(): number;

  setResultCode(resultCode: number): void;

  getFailReason(): string;

  setFailReason(failReason: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

  getAction(): string;

  setAction(action: string): void;

}


export class AddDiscountAction {
  getDiscount(): order.DisplayDiscount;

  setDiscount(discount: order.DisplayDiscount): void;

  getMetaInfo(fieldName: string): object
}


export class AddLineItemAction {
  getLineItem(): order.DisplayLineItem;

  setLineItem(lineItem: order.DisplayLineItem): void;

  getTaxable(): boolean;

  setTaxable(taxable: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class BalanceInquiryRequestMessage extends Message {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

  getCardDataMessage(): string;

  setCardDataMessage(cardDataMessage: string): void;

}


export class BalanceInquiryResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getCardDetails(): pay.PaymentRequestCardDetails;

  setCardDetails(cardDetails: pay.PaymentRequestCardDetails): void;

}


export class BreakMessage extends Message {
}


export class CapturePreAuthMessage extends Message {
  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class CapturePreAuthResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getMessage(): string;

  setMessage(message: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

}


export class CardDataRequestMessage extends Message {
  getPayIntent(): remotemessage.PayIntent;

  setPayIntent(payIntent: remotemessage.PayIntent): void;

}


export class CardDataResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getCardData(): base.CardData;

  setCardData(cardData: base.CardData): void;

}


export class CashbackSelectedMessage extends Message {
  getCashbackAmount(): number;

  setCashbackAmount(cashbackAmount: number): void;

}


export class CloseoutRequestMessage extends Message {
  getAllowOpenTabs(): boolean;

  setAllowOpenTabs(allowOpenTabs: boolean): void;

  getBatchId(): string;

  setBatchId(batchId: string): void;

}


export class CloseoutResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getBatch(): payments.Batch;

  setBatch(batch: payments.Batch): void;

}


export class CloverDeviceLogMessage extends Message {
  getMessage(): string;

  setMessage(message: string): void;

}


export class ConfigurationChangeMessage extends Message {
  getConfigurationType(): string;

  setConfigurationType(configurationType: string): void;

  getConfiguration(): string;

  setConfiguration(configuration: string): void;

}


export class ConfirmPaymentMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getChallenges(): Array<base.Challenge>;

  setChallenges(challenges: Array<base.Challenge>): void;

}


export class CreditPrintMessage extends Message {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

}


export class CustomerInfoMessage extends Message {
  getCustomer(): customers.CustomerInfo;

  setCustomer(customer: customers.CustomerInfo): void;

}


export class CustomerProvidedDataMessage extends Message {
  getEventId(): string;

  setEventId(eventId: string): void;

  getConfig(): loyalty.LoyaltyDataConfig;

  setConfig(config: loyalty.LoyaltyDataConfig): void;

  getData(): string;

  setData(data: string): void;

}


export class DeclineCreditPrintMessage extends Message {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getReason(): string;

  setReason(reason: string): void;

}


export class DeclinePaymentPrintMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getReason(): string;

  setReason(reason: string): void;

}


export class DiscoveryRequestMessage extends Message {
  getSupportsOrderModification(): boolean;

  setSupportsOrderModification(supportsOrderModification: boolean): void;

}


export class DiscoveryResponseMessage extends Message {
  getMerchantId(): string;

  setMerchantId(merchantId: string): void;

  getMerchantName(): string;

  setMerchantName(merchantName: string): void;

  getMerchantMId(): string;

  setMerchantMId(merchantMId: string): void;

  getName(): string;

  setName(name: string): void;

  getSerial(): string;

  setSerial(serial: string): void;

  getModel(): string;

  setModel(model: string): void;

  getReady(): boolean;

  setReady(ready: boolean): void;

  getSupportsTipAdjust(): boolean;

  setSupportsTipAdjust(supportsTipAdjust: boolean): void;

  getSupportsManualRefund(): boolean;

  setSupportsManualRefund(supportsManualRefund: boolean): void;

  getSupportsMultiPayToken(): boolean;

  setSupportsMultiPayToken(supportsMultiPayToken: boolean): void;

  getSupportsAcknowledgement(): boolean;

  setSupportsAcknowledgement(supportsAcknowledgement: boolean): void;

  getSupportsPreAuth(): boolean;

  setSupportsPreAuth(supportsPreAuth: boolean): void;

  getSupportsAuth(): boolean;

  setSupportsAuth(supportsAuth: boolean): void;

  getSupportsVaultCard(): boolean;

  setSupportsVaultCard(supportsVaultCard: boolean): void;

  getSupportsVoidPaymentResponse(): boolean;

  setSupportsVoidPaymentResponse(supportsVoidPaymentResponse: boolean): void;

}


export class EmployeePermissionsRequest extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getPermissions(): string;

  setPermissions(permissions: string): void;

  getAppPackage(): string;

  setAppPackage(appPackage: string): void;

  getShowCancelButton(): boolean;

  setShowCancelButton(showCancelButton: boolean): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum ErrorCode {
  ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
  PAYMENT_NOT_FOUND = "PAYMENT_NOT_FOUND",
  FAIL = "FAIL"
}

export class ErrorCodeEnum {
  getErrorCode(): remotemessage.ErrorCode;

  setErrorCode(errorCode: remotemessage.ErrorCode): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum ExternalDeviceState {
  IDLE = "IDLE",
  BUSY = "BUSY",
  WAITING_FOR_POS = "WAITING_FOR_POS",
  WAITING_FOR_CUSTOMER = "WAITING_FOR_CUSTOMER",
  UNKNOWN = "UNKNOWN"
}

export class ExternalDeviceStateData {
  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getCustomActivityId(): string;

  setCustomActivityId(customActivityId: string): void;

  getMetaInfo(fieldName: string): object
}


export class ExternalDeviceStateEnum {
  getState(): remotemessage.ExternalDeviceState;

  setState(state: remotemessage.ExternalDeviceState): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum ExternalDeviceSubState {
  CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
  STARTING_PAYMENT_FLOW = "STARTING_PAYMENT_FLOW",
  PROCESSING_PAYMENT = "PROCESSING_PAYMENT",
  PROCESSING_CARD_DATA = "PROCESSING_CARD_DATA",
  PROCESSING_CREDIT = "PROCESSING_CREDIT",
  VERIFY_SIGNATURE = "VERIFY_SIGNATURE",
  TIP_SCREEN = "TIP_SCREEN",
  RECEIPT_SCREEN = "RECEIPT_SCREEN",
  CONFIRM_PAYMENT = "CONFIRM_PAYMENT",
  UNKNOWN = "UNKNOWN"
}

export class FinishCancelMessage extends Message {
  getRequestInfo(): string;

  setRequestInfo(requestInfo: string): void;

}


export class FinishOkMessage extends Message {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

  getRequestInfo(): string;

  setRequestInfo(requestInfo: string): void;

}


export class ForceConnectMessage extends Message {
  getFriendlyId(): string;

  setFriendlyId(friendlyId: string): void;

}


export class GetPrintersRequestMessage extends Message {
  getCategory(): printer.PrintCategory;

  setCategory(category: printer.PrintCategory): void;

}


export class GetPrintersResponseMessage extends Message {
  getPrinters(): Array<printer.Printer>;

  setPrinters(printers: Array<printer.Printer>): void;

}


export class ImagePrintMessage extends Message {
  getPng(): object;

  setPng(png: object): void;

  getUrlString(): string;

  setUrlString(urlString: string): void;

  getExternalPrintJobId(): string;

  setExternalPrintJobId(externalPrintJobId: string): void;

  getPrinter(): printer.Printer;

  setPrinter(printer: printer.Printer): void;

}


export class IncrementPreAuthMessage extends Message {
  getAmount(): number;

  setAmount(amount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class IncrementPreAuthResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getAuthorization(): payments.Authorization;

  setAuthorization(authorization: payments.Authorization): void;

}


export class InputOption {
  getKeyPress(): remotemessage.KeyPress;

  setKeyPress(keyPress: remotemessage.KeyPress): void;

  getDescription(): string;

  setDescription(description: string): void;

  getMetaInfo(fieldName: string): object
}


export class InvalidStateTransitionMessage extends Message {
  getResult(): remotemessage.ResultStatus;

  setResult(result: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getRequestedTransition(): string;

  setRequestedTransition(requestedTransition: string): void;

  getState(): remotemessage.ExternalDeviceState;

  setState(state: remotemessage.ExternalDeviceState): void;

  getSubstate(): remotemessage.ExternalDeviceSubState;

  setSubstate(substate: remotemessage.ExternalDeviceSubState): void;

  getData(): remotemessage.ExternalDeviceStateData;

  setData(data: remotemessage.ExternalDeviceStateData): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
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

export class KeyPressEnum {
  getStatus(): remotemessage.KeyPress;

  setStatus(status: remotemessage.KeyPress): void;

  getMetaInfo(fieldName: string): object
}


export class KeyPressMessage extends Message {
  getKeyPress(): remotemessage.KeyPress;

  setKeyPress(keyPress: remotemessage.KeyPress): void;

}


export class LastMessageRequestMessage extends Message {
}


export class LastMessageResponseMessage extends Message {
  getRequest(): remotemessage.Message;

  setRequest(request: remotemessage.Message): void;

  getResponse(): remotemessage.Message;

  setResponse(response: remotemessage.Message): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum LogLevelEnum {
  VERBOSE = "VERBOSE",
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR"
}

export class LogMessage extends Message {
  getLogLevel(): remotemessage.LogLevelEnum;

  setLogLevel(logLevel: remotemessage.LogLevelEnum): void;

  getMessages(): object;

  setMessages(messages: object): void;

}


export class LoyaltyPointsCalculatedMessage extends Message {
  getLoyaltyUuid(): string;

  setLoyaltyUuid(loyaltyUuid: string): void;

  getPoints(): number;

  setPoints(points: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

}


export class LoyaltyPointsEarnedMessage extends Message {
  getLoyaltyUuid(): string;

  setLoyaltyUuid(loyaltyUuid: string): void;

  getPoints(): number;

  setPoints(points: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

}


export class LoyaltyPointsReceiptPrintedMessage extends Message {
  getPoints(): number;

  setPoints(points: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

}


export class Message {
  getMethod(): remotemessage.Method;

  setMethod(method: remotemessage.Method): void;

  getMessageId(): string;

  setMessageId(messageId: string): void;

  getSourceMessageId(): string;

  setSourceMessageId(sourceMessageId: string): void;

  getVersion(): number;

  setVersion(version: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum Method {
  ACK = "ACK",
  ACTIVITY_MESSAGE_FROM_ACTIVITY = "ACTIVITY_MESSAGE_FROM_ACTIVITY",
  ACTIVITY_MESSAGE_TO_ACTIVITY = "ACTIVITY_MESSAGE_TO_ACTIVITY",
  ACTIVITY_REQUEST = "ACTIVITY_REQUEST",
  EMPLOYEE_PERMISSIONS_REQUEST = "EMPLOYEE_PERMISSIONS_REQUEST",
  ACTIVITY_RESPONSE = "ACTIVITY_RESPONSE",
  BREAK = "BREAK",
  CAPTURE_PREAUTH = "CAPTURE_PREAUTH",
  CAPTURE_PREAUTH_RESPONSE = "CAPTURE_PREAUTH_RESPONSE",
  CARD_DATA = "CARD_DATA",
  CARD_DATA_RESPONSE = "CARD_DATA_RESPONSE",
  CASHBACK_SELECTED = "CASHBACK_SELECTED",
  CLEAR_SESSION = "CLEAR_SESSION",
  CLOSEOUT_REQUEST = "CLOSEOUT_REQUEST",
  CLOSEOUT_RESPONSE = "CLOSEOUT_RESPONSE",
  CLOVER_DEVICE_LOG_REQUEST = "CLOVER_DEVICE_LOG_REQUEST",
  CONFIGURATION_CHANGE = "CONFIGURATION_CHANGE",
  CONFIRM_PAYMENT_MESSAGE = "CONFIRM_PAYMENT_MESSAGE",
  CUSTOMER_INFO_MESSAGE = "CUSTOMER_INFO_MESSAGE",
  DISCOVERY_REQUEST = "DISCOVERY_REQUEST",
  DISCOVERY_RESPONSE = "DISCOVERY_RESPONSE",
  FINISH_CANCEL = "FINISH_CANCEL",
  FINISH_OK = "FINISH_OK",
  FORCECONNECT = "FORCECONNECT",
  GET_PRINTERS_REQUEST = "GET_PRINTERS_REQUEST",
  GET_PRINTERS_RESPONSE = "GET_PRINTERS_RESPONSE",
  INCREMENT_PREAUTH_REQUEST = "INCREMENT_PREAUTH_REQUEST",
  INCREMENT_PREAUTH_RESPONSE = "INCREMENT_PREAUTH_RESPONSE",
  INVALID_STATE_TRANSITION = "INVALID_STATE_TRANSITION",
  KEY_PRESS = "KEY_PRESS",
  LAST_MSG_REQUEST = "LAST_MSG_REQUEST",
  LAST_MSG_RESPONSE = "LAST_MSG_RESPONSE",
  LOG_MESSAGE = "LOG_MESSAGE",
  OPEN_CASH_DRAWER = "OPEN_CASH_DRAWER",
  ORDER_ACTION_ADD_DISCOUNT = "ORDER_ACTION_ADD_DISCOUNT",
  ORDER_ACTION_ADD_LINE_ITEM = "ORDER_ACTION_ADD_LINE_ITEM",
  ORDER_ACTION_REMOVE_DISCOUNT = "ORDER_ACTION_REMOVE_DISCOUNT",
  ORDER_ACTION_REMOVE_LINE_ITEM = "ORDER_ACTION_REMOVE_LINE_ITEM",
  ORDER_ACTION_RESPONSE = "ORDER_ACTION_RESPONSE",
  PAIRING_CODE = "PAIRING_CODE",
  PAIRING_REQUEST = "PAIRING_REQUEST",
  PAIRING_RESPONSE = "PAIRING_RESPONSE",
  PARTIAL_AUTH = "PARTIAL_AUTH",
  PAYMENT_CONFIRMED = "PAYMENT_CONFIRMED",
  PAYMENT_REJECTED = "PAYMENT_REJECTED",
  PAYMENT_VOIDED = "PAYMENT_VOIDED",
  PRINT_CREDIT = "PRINT_CREDIT",
  PRINT_CREDIT_DECLINE = "PRINT_CREDIT_DECLINE",
  PRINT_IMAGE = "PRINT_IMAGE",
  PRINT_JOB_STATUS_REQUEST = "PRINT_JOB_STATUS_REQUEST",
  PRINT_JOB_STATUS_RESPONSE = "PRINT_JOB_STATUS_RESPONSE",
  PRINT_PAYMENT = "PRINT_PAYMENT",
  PRINT_PAYMENT_DECLINE = "PRINT_PAYMENT_DECLINE",
  PRINT_PAYMENT_MERCHANT_COPY = "PRINT_PAYMENT_MERCHANT_COPY",
  PRINT_TEXT = "PRINT_TEXT",
  REFUND_PRINT_PAYMENT = "REFUND_PRINT_PAYMENT",
  REFUND_REQUEST = "REFUND_REQUEST",
  REFUND_RESPONSE = "REFUND_RESPONSE",
  REMOTE_ERROR = "REMOTE_ERROR",
  RESET = "RESET",
  RESET_DEVICE_RESPONSE = "RESET_DEVICE_RESPONSE",
  RETRIEVE_CUSTOM_ACTIVITIES_REQUEST = "RETRIEVE_CUSTOM_ACTIVITIES_REQUEST",
  RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE = "RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE",
  RETRIEVE_DEVICE_STATUS_REQUEST = "RETRIEVE_DEVICE_STATUS_REQUEST",
  RETRIEVE_DEVICE_STATUS_RESPONSE = "RETRIEVE_DEVICE_STATUS_RESPONSE",
  RETRIEVE_PAYMENT_REQUEST = "RETRIEVE_PAYMENT_REQUEST",
  RETRIEVE_PAYMENT_RESPONSE = "RETRIEVE_PAYMENT_RESPONSE",
  RETRIEVE_PENDING_PAYMENTS = "RETRIEVE_PENDING_PAYMENTS",
  RETRIEVE_PENDING_PAYMENTS_RESPONSE = "RETRIEVE_PENDING_PAYMENTS_RESPONSE",
  SET_ORDER = "SET_ORDER",
  SHOW_LOYALTY_POINTS_CALCULATED = "SHOW_LOYALTY_POINTS_CALCULATED",
  SHOW_LOYALTY_POINTS_EARNED_SCREEN = "SHOW_LOYALTY_POINTS_EARNED_SCREEN",
  SHOW_LOYALTY_POINTS_RECEIPT_PRINTED = "SHOW_LOYALTY_POINTS_RECEIPT_PRINTED",
  SHOW_ORDER_SCREEN = "SHOW_ORDER_SCREEN",
  SHOW_PAYMENT_RECEIPT_OPTIONS = "SHOW_PAYMENT_RECEIPT_OPTIONS",
  SHOW_THANK_YOU_SCREEN = "SHOW_THANK_YOU_SCREEN",
  SHOW_WELCOME_SCREEN = "SHOW_WELCOME_SCREEN",
  SHUTDOWN = "SHUTDOWN",
  SIGNATURE_VERIFIED = "SIGNATURE_VERIFIED",
  START_VAS = "START_VAS",
  STOP_VAS = "STOP_VAS",
  TERMINAL_MESSAGE = "TERMINAL_MESSAGE",
  TIP_ADDED = "TIP_ADDED",
  TIP_ADJUST = "TIP_ADJUST",
  TIP_ADJUST_RESPONSE = "TIP_ADJUST_RESPONSE",
  TX_START = "TX_START",
  TX_START_RESPONSE = "TX_START_RESPONSE",
  TX_STATE = "TX_STATE",
  UI_STATE = "UI_STATE",
  VAS_CONFIG = "VAS_CONFIG",
  VAS_CONFIG_CHANGED = "VAS_CONFIG_CHANGED",
  VAS_PAYLOAD_MESSAGE = "VAS_PAYLOAD_MESSAGE",
  VAS_STATE = "VAS_STATE",
  VAULT_CARD = "VAULT_CARD",
  VAULT_CARD_RESPONSE = "VAULT_CARD_RESPONSE",
  VERIFY_SIGNATURE = "VERIFY_SIGNATURE",
  VOID_PAYMENT = "VOID_PAYMENT",
  VOID_PAYMENT_RESPONSE = "VOID_PAYMENT_RESPONSE",
  VOID_PAYMENT_REFUND = "VOID_PAYMENT_REFUND",
  VOID_PAYMENT_REFUND_RESPONSE = "VOID_PAYMENT_REFUND_RESPONSE",
  VOID_CREDIT = "VOID_CREDIT",
  VOID_CREDIT_RESPONSE = "VOID_CREDIT_RESPONSE",
  REGISTER_FOR_CUST_DATA = "REGISTER_FOR_CUST_DATA",
  CUSTOMER_PROVIDED_DATA_MESSAGE = "CUSTOMER_PROVIDED_DATA_MESSAGE",
  LOYALTY_CONFIG = "LOYALTY_CONFIG",
  SHOW_RECEIPT_OPTIONS = "SHOW_RECEIPT_OPTIONS",
  SHOW_RECEIPT_OPTIONS_RESPONSE = "SHOW_RECEIPT_OPTIONS_RESPONSE",
  REQUEST_SIGNATURE = "REQUEST_SIGNATURE",
  REQUEST_SIGNATURE_RESPONSE = "REQUEST_SIGNATURE_RESPONSE",
  BALANCE_INQUIRY = "BALANCE_INQUIRY",
  BALANCE_INQUIRY_RESPONSE = "BALANCE_INQUIRY_RESPONSE",
  REQUEST_TIP = "REQUEST_TIP",
  REQUEST_TIP_RESPONSE = "REQUEST_TIP_RESPONSE",
  CARD_DETAILS = "CARD_DETAILS",
  CARD_DETAILS_RESPONSE = "CARD_DETAILS_RESPONSE"
}

export class OpenCashDrawerMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getPrinter(): printer.Printer;

  setPrinter(printer: printer.Printer): void;

}


export class OrderActionAddDiscountMessage extends Message {
  getAddDiscountAction(): remotemessage.AddDiscountAction;

  setAddDiscountAction(addDiscountAction: remotemessage.AddDiscountAction): void;

}


export class OrderActionAddLineItemMessage extends Message {
  getAddLineItemAction(): remotemessage.AddLineItemAction;

  setAddLineItemAction(addLineItemAction: remotemessage.AddLineItemAction): void;

}


export class OrderActionRemoveDiscountMessage extends Message {
  getRemoveDiscountAction(): remotemessage.RemoveDiscountAction;

  setRemoveDiscountAction(removeDiscountAction: remotemessage.RemoveDiscountAction): void;

}


export class OrderActionRemoveLineItemMessage extends Message {
  getRemoveLineItemAction(): remotemessage.RemoveLineItemAction;

  setRemoveLineItemAction(removeLineItemAction: remotemessage.RemoveLineItemAction): void;

}


export class OrderActionResponse {
  getAccepted(): boolean;

  setAccepted(accepted: boolean): void;

  getId(): string;

  setId(id: string): void;

  getMetaInfo(fieldName: string): object
}


export class OrderActionResponseMessage extends Message {
  getOrderActionResponse(): remotemessage.OrderActionResponse;

  setOrderActionResponse(orderActionResponse: remotemessage.OrderActionResponse): void;

}


export class OrderUpdateMessage extends Message {
  getOrder(): order.DisplayOrder;

  setOrder(order: order.DisplayOrder): void;

  getLineItemsAddedOperation(): order.operation.LineItemsAddedOperation;

  setLineItemsAddedOperation(lineItemsAddedOperation: order.operation.LineItemsAddedOperation): void;

  getLineItemsDeletedOperation(): order.operation.LineItemsDeletedOperation;

  setLineItemsDeletedOperation(lineItemsDeletedOperation: order.operation.LineItemsDeletedOperation): void;

  getDiscountsAddedOperation(): order.operation.DiscountsAddedOperation;

  setDiscountsAddedOperation(discountsAddedOperation: order.operation.DiscountsAddedOperation): void;

  getDiscountsDeletedOperation(): order.operation.DiscountsDeletedOperation;

  setDiscountsDeletedOperation(discountsDeletedOperation: order.operation.DiscountsDeletedOperation): void;

  getOrderDeletedOperation(): order.operation.OrderDeletedOperation;

  setOrderDeletedOperation(orderDeletedOperation: order.operation.OrderDeletedOperation): void;

}


export class PairingCodeMessage extends Message {
  getPairingCode(): string;

  setPairingCode(pairingCode: string): void;

}


export class PairingRequestMessage extends Message {
  getName(): string;

  setName(name: string): void;

  getSerialNumber(): string;

  setSerialNumber(serialNumber: string): void;

  getApplicationName(): string;

  setApplicationName(applicationName: string): void;

  getAuthenticationToken(): string;

  setAuthenticationToken(authenticationToken: string): void;

}


export class PairingResponseMessage extends PairingRequestMessage {
  getPairingState(): remotemessage.PairingState;

  setPairingState(pairingState: remotemessage.PairingState): void;

  getMillis(): number;

  setMillis(millis: number): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum PairingState {
  UNINITIALIZED = "UNINITIALIZED",
  PAIRED = "PAIRED",
  FAILED = "FAILED",
  INITIAL = "INITIAL"
}

export class PartialAuthMessage extends Message {
  getPartialAuthAmount(): number;

  setPartialAuthAmount(partialAuthAmount: number): void;

}


export class PayIntent {
  getAction(): string;

  setAction(action: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTippableAmount(): number;

  setTippableAmount(tippableAmount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getTransactionType(): remotemessage.TransactionType;

  setTransactionType(transactionType: remotemessage.TransactionType): void;

  getTaxableAmountRates(): Array<payments.TaxableAmountRate>;

  setTaxableAmountRates(taxableAmountRates: Array<payments.TaxableAmountRate>): void;

  getServiceChargeAmount(): payments.ServiceChargeAmount;

  setServiceChargeAmount(serviceChargeAmount: payments.ServiceChargeAmount): void;

  getIsDisableCashBack(): boolean;

  setIsDisableCashBack(isDisableCashBack: boolean): void;

  getIsTesting(): boolean;

  setIsTesting(isTesting: boolean): void;

  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

  getVoiceAuthCode(): string;

  setVoiceAuthCode(voiceAuthCode: string): void;

  getStreetAddress(): string;

  setStreetAddress(streetAddress: string): void;

  getPostalCode(): string;

  setPostalCode(postalCode: string): void;

  getIsCardNotPresent(): boolean;

  setIsCardNotPresent(isCardNotPresent: boolean): void;

  getCardDataMessage(): string;

  setCardDataMessage(cardDataMessage: string): void;

  getRemotePrint(): boolean;

  setRemotePrint(remotePrint: boolean): void;

  getTransactionNo(): string;

  setTransactionNo(transactionNo: string): void;

  getIsForceSwipePinEntry(): boolean;

  setIsForceSwipePinEntry(isForceSwipePinEntry: boolean): void;

  getDisableRestartTransactionWhenFailed(): boolean;

  setDisableRestartTransactionWhenFailed(disableRestartTransactionWhenFailed: boolean): void;

  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getVaultedCard(): payments.VaultedCard;

  setVaultedCard(vaultedCard: payments.VaultedCard): void;

  getAllowOfflinePayment(): boolean;

  setAllowOfflinePayment(allowOfflinePayment: boolean): void;

  getApproveOfflinePaymentWithoutPrompt(): boolean;

  setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void;

  getRequiresRemoteConfirmation(): boolean;

  setRequiresRemoteConfirmation(requiresRemoteConfirmation: boolean): void;

  getApplicationTracking(): apps.AppTracking;

  setApplicationTracking(applicationTracking: apps.AppTracking): void;

  getAllowPartialAuth(): boolean;

  setAllowPartialAuth(allowPartialAuth: boolean): void;

  getGermanInfo(): payments.GermanInfo;

  setGermanInfo(germanInfo: payments.GermanInfo): void;

  getCashAdvanceCustomerIdentification(): payments.CashAdvanceCustomerIdentification;

  setCashAdvanceCustomerIdentification(cashAdvanceCustomerIdentification: payments.CashAdvanceCustomerIdentification): void;

  getTransactionSettings(): payments.TransactionSettings;

  setTransactionSettings(transactionSettings: payments.TransactionSettings): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

  getPassThroughValues(): object;

  setPassThroughValues(passThroughValues: object): void;

  getMetaInfo(fieldName: string): object
}


export class PaymentConfirmedMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

}


export class PaymentPrintMerchantCopyMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

}


export class PaymentPrintMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

}


export class PaymentRejectedMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getReason(): order.VoidReason;

  setReason(reason: order.VoidReason): void;

}


export class PaymentVoidedMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getVoidReason(): order.VoidReason;

  setVoidReason(voidReason: order.VoidReason): void;

}


export class PrintJobStatusRequestMessage extends Message {
  getExternalPrintJobId(): string;

  setExternalPrintJobId(externalPrintJobId: string): void;

}


export class PrintJobStatusResponseMessage extends Message {
  getExternalPrintJobId(): string;

  setExternalPrintJobId(externalPrintJobId: string): void;

  getStatus(): printer.PrintJobStatus;

  setStatus(status: printer.PrintJobStatus): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum QueryStatus {
  FOUND = "FOUND",
  NOT_FOUND = "NOT_FOUND",
  IN_PROGRESS = "IN_PROGRESS"
}

export class QueryStatusEnum {
  getQueryStatus(): remotemessage.QueryStatus;

  setQueryStatus(queryStatus: remotemessage.QueryStatus): void;

  getMetaInfo(fieldName: string): object
}


export class RefundPaymentPrintMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

}


export class RefundRequestMessage extends Message {
  getFullRefund(): boolean;

  setFullRefund(fullRefund: boolean): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class RefundResponseMessage extends Message {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getReason(): remotemessage.ErrorCode;

  setReason(reason: remotemessage.ErrorCode): void;

  getMessage(): string;

  setMessage(message: string): void;

  getCode(): remotemessage.TxState;

  setCode(code: remotemessage.TxState): void;

}


export class RegisterForCustomerProvidedDataMessage extends Message {
  getConfigurations(): Array<loyalty.LoyaltyDataConfig>;

  setConfigurations(configurations: Array<loyalty.LoyaltyDataConfig>): void;

}


export class RemoteError extends Message {
  getErrorDetail(): string;

  setErrorDetail(errorDetail: string): void;

  getErrorMessage(): string;

  setErrorMessage(errorMessage: string): void;

  getErrorCode(): number;

  setErrorCode(errorCode: number): void;

}


export class RemoteMessage {
  getId(): string;

  setId(id: string): void;

  getType(): remotemessage.RemoteMessageType;

  setType(type: remotemessage.RemoteMessageType): void;

  getPackageName(): string;

  setPackageName(packageName: string): void;

  getMethod(): remotemessage.Method;

  setMethod(method: remotemessage.Method): void;

  getPayload(): string;

  setPayload(payload: string): void;

  getRemoteSourceSDK(): string;

  setRemoteSourceSDK(remoteSourceSDK: string): void;

  getRemoteApplicationID(): string;

  setRemoteApplicationID(remoteApplicationID: string): void;

  getVersion(): number;

  setVersion(version: number): void;

  getFragmentIndex(): number;

  setFragmentIndex(fragmentIndex: number): void;

  getLastFragment(): boolean;

  setLastFragment(lastFragment: boolean): void;

  getAttachmentEncoding(): string;

  setAttachmentEncoding(attachmentEncoding: string): void;

  getAttachment(): string;

  setAttachment(attachment: string): void;

  getAttachmentUri(): string;

  setAttachmentUri(attachmentUri: string): void;

  getRemotePayCompatibilityVersion(): number;

  setRemotePayCompatibilityVersion(remotePayCompatibilityVersion: number): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum RemoteMessageType {
  COMMAND = "COMMAND",
  QUERY = "QUERY",
  EVENT = "EVENT",
  PING = "PING",
  PONG = "PONG"
}

export class RemoveDiscountAction {
  getDiscountId(): string;

  setDiscountId(discountId: string): void;

  getLineItemId(): string;

  setLineItemId(lineItemId: string): void;

  getMetaInfo(fieldName: string): object
}


export class RemoveLineItemAction {
  getLineItemId(): string;

  setLineItemId(lineItemId: string): void;

  getMetaInfo(fieldName: string): object
}


export class RequestTipRequestMessage extends Message {
  getTipSuggestions(): Array<merchant.TipSuggestion>;

  setTipSuggestions(tipSuggestions: Array<merchant.TipSuggestion>): void;

  getTippableAmount(): number;

  setTippableAmount(tippableAmount: number): void;

}


export class RequestTipResponseMessage extends Message {
  getAmount(): number;

  setAmount(amount: number): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

}


export class ResetDeviceResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getState(): remotemessage.ExternalDeviceState;

  setState(state: remotemessage.ExternalDeviceState): void;

}


export class ResetMessage extends Message {
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum ResultStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  CANCEL = "CANCEL"
}

export class ResultStatusEnum {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getMetaInfo(fieldName: string): object
}


export class RetrieveCustomActivitiesRequestMessage extends Message {
  getFilters(): Array<string>;

  setFilters(filters: Array<string>): void;

}


export class RetrieveCustomActivitiesResponseMessage extends Message {
  getActivities(): Array<custom.CustomActivity>;

  setActivities(activities: Array<custom.CustomActivity>): void;

}


export class RetrieveDeviceStatusRequestMessage extends Message {
  getSendLastMessage(): boolean;

  setSendLastMessage(sendLastMessage: boolean): void;

}


export class RetrieveDeviceStatusResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getState(): remotemessage.ExternalDeviceState;

  setState(state: remotemessage.ExternalDeviceState): void;

  getSubstate(): remotemessage.ExternalDeviceSubState;

  setSubstate(substate: remotemessage.ExternalDeviceSubState): void;

  getData(): remotemessage.ExternalDeviceStateData;

  setData(data: remotemessage.ExternalDeviceStateData): void;

}


export class RetrievePaymentRequestMessage extends Message {
  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

}


export class RetrievePaymentResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getQueryStatus(): remotemessage.QueryStatus;

  setQueryStatus(queryStatus: remotemessage.QueryStatus): void;

  getMessage(): string;

  setMessage(message: string): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

}


export class RetrievePendingPaymentsMessage extends Message {
}


export class RetrievePendingPaymentsResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getPendingPaymentEntries(): Array<base.PendingPaymentEntry>;

  setPendingPaymentEntries(pendingPaymentEntries: Array<base.PendingPaymentEntry>): void;

  getReason(): string;

  setReason(reason: string): void;

}


export class ShowPaymentReceiptOptionsMessage extends Message {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

}


export class ShowReceiptOptionsMessage extends Message {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getRefundId(): string;

  setRefundId(refundId: string): void;

  getCreditId(): string;

  setCreditId(creditId: string): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getIsReprint(): boolean;

  setIsReprint(isReprint: boolean): void;

}


export class ShowReceiptOptionsResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

}


export class ShutDownMessage extends Message {
}


export class SignatureRequestMessage extends Message {
  getAcknowledgementMessage(): string;

  setAcknowledgementMessage(acknowledgementMessage: string): void;

}


export class SignatureResponseMessage extends Message {
  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getReason(): string;

  setReason(reason: string): void;

  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

}


export class SignatureVerifiedMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getVerified(): boolean;

  setVerified(verified: boolean): void;

}


export class StartVasMessage extends Message {
  getConfig(): payments.VasConfig;

  setConfig(config: payments.VasConfig): void;

}


export class StopVasMessage extends Message {
}


export class TerminalMessage extends Message {
  getText(): string;

  setText(text: string): void;

}


export class TextPrintMessage extends Message {
  getTextLines(): Array<string>;

  setTextLines(textLines: Array<string>): void;

  getExternalPrintJobId(): string;

  setExternalPrintJobId(externalPrintJobId: string): void;

  getPrinter(): printer.Printer;

  setPrinter(printer: printer.Printer): void;

}


export class ThankYouMessage extends Message {
}


export class TipAddedMessage extends Message {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

}


export class TipAdjustMessage extends Message {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class TipAdjustResponseMessage extends Message {
  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getMessage(): string;

  setMessage(message: string): void;

  getReason(): string;

  setReason(reason: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum TransactionType {
  PAYMENT = "PAYMENT",
  CREDIT = "CREDIT",
  AUTH = "AUTH",
  DATA = "DATA",
  BALANCE_INQUIRY = "BALANCE_INQUIRY",
  PAYMENT_REVERSAL = "PAYMENT_REVERSAL",
  PAYMENT_ADJUSTMENT = "PAYMENT_ADJUSTMENT",
  CREDIT_REVERSAL = "CREDIT_REVERSAL",
  REFUND_ADJUSTMENT = "REFUND_ADJUSTMENT",
  CASH_ADVANCE = "CASH_ADVANCE",
  CAPTURE_PREAUTH = "CAPTURE_PREAUTH",
  VAS_DATA = "VAS_DATA",
  VERIFY_CARD = "VERIFY_CARD",
  TOKENIZE_CARD = "TOKENIZE_CARD"
}

export class TxStartRequestMessage extends Message {
  getSuppressOnScreenTips(): boolean;

  setSuppressOnScreenTips(suppressOnScreenTips: boolean): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

  getPayIntent(): remotemessage.PayIntent;

  setPayIntent(payIntent: remotemessage.PayIntent): void;

  getRequestInfo(): string;

  setRequestInfo(requestInfo: string): void;

}


export class TxStartResponseMessage extends Message {
  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getMessage(): string;

  setMessage(message: string): void;

  getReason(): string;

  setReason(reason: string): void;

  getResult(): remotemessage.TxStartResponseResult;

  setResult(result: remotemessage.TxStartResponseResult): void;

  getRequestInfo(): string;

  setRequestInfo(requestInfo: string): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum TxStartResponseResult {
  SUCCESS = "SUCCESS",
  ORDER_MODIFIED = "ORDER_MODIFIED",
  ORDER_LOAD = "ORDER_LOAD",
  DUPLICATE = "DUPLICATE",
  FAIL = "FAIL"
}



/**
* @memberof remotemessage
* @enum {string}
*/
export enum TxState {
  START = "START",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL"
}

export class TxStateEnum {
  getTxState(): remotemessage.TxState;

  setTxState(txState: remotemessage.TxState): void;

  getMetaInfo(fieldName: string): object
}


export class TxStateMessage extends Message {
  getTxState(): remotemessage.TxState;

  setTxState(txState: remotemessage.TxState): void;

}


export class TxTypeRequestInfo {
  getSALE(): string;

  getAUTH(): string;

  getPREAUTH(): string;

  getCREDIT(): string;

  getREFUND(): string;

  getVOIDPAYMENT(): string;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum UiDirection {
  ENTER = "ENTER",
  EXIT = "EXIT"
}



/**
* @memberof remotemessage
* @enum {string}
*/
export enum UiState {
  ADD_SIGNATURE = "ADD_SIGNATURE",
  ADD_SIGNATURE_CANCEL_CONFIRM = "ADD_SIGNATURE_CANCEL_CONFIRM",
  ADD_TIP = "ADD_TIP",
  APPROVE_ELV_LIMIT_OVERRIDE = "APPROVE_ELV_LIMIT_OVERRIDE",
  APPROVED = "APPROVED",
  CANCELED = "CANCELED",
  CASHBACK_CONFIRM = "CASHBACK_CONFIRM",
  CASHBACK_SELECT = "CASHBACK_SELECT",
  CONFIGURING = "CONFIGURING",
  CONFIRM_AMOUNT = "CONFIRM_AMOUNT",
  CONFIRM_DUPLICATE_CHECK = "CONFIRM_DUPLICATE_CHECK",
  CONFIRM_PARTIAL_AUTH = "CONFIRM_PARTIAL_AUTH",
  CONTACTLESS_TAP_REQUIRED = "CONTACTLESS_TAP_REQUIRED",
  CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
  CUSTOM_TIP_AMOUNT = "CUSTOM_TIP_AMOUNT",
  DCC_HOST_REQUEST = "DCC_HOST_REQUEST",
  DECLINED = "DECLINED",
  DISPLAY_MESSAGE = "DISPLAY_MESSAGE",
  DISPLAY_ORDER = "DISPLAY_ORDER",
  ENTER_INSTALLMENT_CODE = "ENTER_INSTALLMENT_CODE",
  ENTER_INSTALLMENTS = "ENTER_INSTALLMENTS",
  ENTER_PAN_LAST_FOUR = "ENTER_PAN_LAST_FOUR",
  ERROR_SCREEN = "ERROR_SCREEN",
  FAILED = "FAILED",
  FATAL = "FATAL",
  FISCAL_INVOICE_NUMBER = "FISCAL_INVOICE_NUMBER",
  FORCE_ACCEPTANCE = "FORCE_ACCEPTANCE",
  HANDLE_TENDER = "HANDLE_TENDER",
  INPUT_ERROR = "INPUT_ERROR",
  MANUAL_CARD_CVV = "MANUAL_CARD_CVV",
  MANUAL_CARD_CVV_UNREADABLE = "MANUAL_CARD_CVV_UNREADABLE",
  MANUAL_CARD_EXPIRATION = "MANUAL_CARD_EXPIRATION",
  MANUAL_CARD_NUMBER = "MANUAL_CARD_NUMBER",
  MANUAL_ENTRY_FALLBACK = "MANUAL_ENTRY_FALLBACK",
  OFFLINE_PAYMENT_CONFIRM = "OFFLINE_PAYMENT_CONFIRM",
  PACKET_EXCEPTION = "PACKET_EXCEPTION",
  PERSONAL_ID_ENTRY = "PERSONAL_ID_ENTRY",
  PERSONAL_ID_ENTRY_PAS = "PERSONAL_ID_ENTRY_PAS",
  PIN_BYPASS_CONFIRM = "PIN_BYPASS_CONFIRM",
  PIN_PAD = "PIN_PAD",
  PROCESSING = "PROCESSING",
  PROCESSING_CREDIT = "PROCESSING_CREDIT",
  PROCESSING_GO_ONLINE = "PROCESSING_GO_ONLINE",
  PROCESSING_SWIPE = "PROCESSING_SWIPE",
  RECEIPT_OPTIONS = "RECEIPT_OPTIONS",
  REMOVE_CARD = "REMOVE_CARD",
  RETURN_TO_MERCHANT = "RETURN_TO_MERCHANT",
  SELECT_ACCOUNT = "SELECT_ACCOUNT",
  SELECT_APPLICATION = "SELECT_APPLICATION",
  SELECT_DCC = "SELECT_DCC",
  SELECT_INSTALLMENT_PLAN = "SELECT_INSTALLMENT_PLAN",
  SELECT_LANGUAGE = "SELECT_LANGUAGE",
  SELECT_MULTI_MID = "SELECT_MULTI_MID",
  SELECT_TIP = "SELECT_TIP",
  SELECT_WITHDRAW_FROM_ACCOUNT = "SELECT_WITHDRAW_FROM_ACCOUNT",
  SENSORY_EXPERIENCE = "SENSORY_EXPERIENCE",
  SHOW_SEPA_MANDAT = "SHOW_SEPA_MANDAT",
  SIGNATURE_CUSTOMER_MODE = "SIGNATURE_CUSTOMER_MODE",
  SIGNATURE_ON_SCREEN_FALLBACK = "SIGNATURE_ON_SCREEN_FALLBACK",
  SIGNATURE_REJECT = "SIGNATURE_REJECT",
  START = "START",
  STARTING_CUSTOM_ACTIVITY = "STARTING_CUSTOM_ACTIVITY",
  SWIPE_CVV_ENTRY = "SWIPE_CVV_ENTRY",
  THANKYOU_SCREEN = "THANKYOU_SCREEN",
  TIMED_OUT = "TIMED_OUT",
  TRY_AGAIN = "TRY_AGAIN",
  VERIFY_SIGNATURE_ON_PAPER = "VERIFY_SIGNATURE_ON_PAPER",
  VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID",
  VERIFY_SIGNATURE_ON_SCREEN = "VERIFY_SIGNATURE_ON_SCREEN",
  VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID",
  VERIFY_SURCHARGES = "VERIFY_SURCHARGES",
  VOICE_REFERRAL_RESULT = "VOICE_REFERRAL_RESULT",
  VOID_CONFIRM = "VOID_CONFIRM",
  VOIDED = "VOIDED",
  WELCOME_SCREEN = "WELCOME_SCREEN"
}

export class UiStateMessage extends Message {
  getUiText(): string;

  setUiText(uiText: string): void;

  getUiDirection(): remotemessage.UiDirection;

  setUiDirection(uiDirection: remotemessage.UiDirection): void;

  getInputOptions(): Array<remotemessage.InputOption>;

  setInputOptions(inputOptions: Array<remotemessage.InputOption>): void;

  getUiState(): remotemessage.UiState;

  setUiState(uiState: remotemessage.UiState): void;

}


export class VasConfigChangedMessage extends VasConfigMessage {
  getProxyProvider(): string;

  setProxyProvider(proxyProvider: string): void;

}


export class VasConfigMessage extends Message {
  getConfig(): payments.VasConfig;

  setConfig(config: payments.VasConfig): void;

}


export class VasPayloadMessage extends Message {
  getVasPayload(): payments.VasPayload;

  setVasPayload(vasPayload: payments.VasPayload): void;

  getVasMode(): payments.VasMode;

  setVasMode(vasMode: payments.VasMode): void;

  getExtras(): object;

  setExtras(extras: object): void;

}




/**
* @memberof remotemessage
* @enum {string}
*/
export enum VasState {
  START_REQUESTED = "START_REQUESTED",
  STARTED = "STARTED",
  TIMED_OUT = "TIMED_OUT",
  STOP_REQUESTED = "STOP_REQUESTED",
  STOPPED = "STOPPED",
  FAILED = "FAILED"
}

export class VasStateEnum {
  getVasState(): remotemessage.VasState;

  setVasState(vasState: remotemessage.VasState): void;

  getMetaInfo(fieldName: string): object
}


export class VasStateMessage extends Message {
  getOldState(): remotemessage.VasState;

  setOldState(oldState: remotemessage.VasState): void;

  getNewState(): remotemessage.VasState;

  setNewState(newState: remotemessage.VasState): void;

}


export class VaultCardMessage extends Message {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

  getTokenType(): string;

  setTokenType(tokenType: string): void;

  getSingleUse(): boolean;

  setSingleUse(singleUse: boolean): void;

}


export class VaultCardResponseMessage extends Message {
  getReason(): string;

  setReason(reason: string): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getTokenType(): string;

  setTokenType(tokenType: string): void;

  getCard(): payments.VaultedCard;

  setCard(card: payments.VaultedCard): void;

}


export class VerifySignatureMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

}


export class VoidCreditMessage extends Message {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getCreditId(): string;

  setCreditId(creditId: string): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

}


export class VoidCreditResponseMessage extends Message {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getReason(): string;

  setReason(reason: string): void;

  getMessage(): string;

  setMessage(message: string): void;

}


export class VoidPaymentMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getVoidReason(): order.VoidReason;

  setVoidReason(voidReason: order.VoidReason): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class VoidPaymentRefundMessage extends Message {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getRefundId(): string;

  setRefundId(refundId: string): void;

  getDisableCloverPrinting(): boolean;

  setDisableCloverPrinting(disableCloverPrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class VoidPaymentRefundResponseMessage extends Message {
  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getReason(): string;

  setReason(reason: string): void;

  getMessage(): string;

  setMessage(message: string): void;

}


export class VoidPaymentResponseMessage extends Message {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getVoidReason(): order.VoidReason;

  setVoidReason(voidReason: order.VoidReason): void;

  getStatus(): remotemessage.ResultStatus;

  setStatus(status: remotemessage.ResultStatus): void;

  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getReason(): string;

  setReason(reason: string): void;

  getMessage(): string;

  setMessage(message: string): void;

}


export class WelcomeMessage extends Message {
}

}
    
export namespace remotepay {
    

export class ActivityMessage extends BaseRequest {
  getAction(): string;

  setAction(action: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

}


export class AuthRequest extends TransactionRequest {
}


export class AuthResponse extends PaymentResponse {
}


export class BaseRequest {
  getRequestId(): string;

  setRequestId(requestId: string): void;

  getVersion(): number;

  setVersion(version: number): void;

  getMetaInfo(fieldName: string): object
}


export class BaseResponse {
  getSuccess(): boolean;

  setSuccess(success: boolean): void;

  getResult(): remotepay.ResponseCode;

  setResult(result: remotepay.ResponseCode): void;

  getReason(): string;

  setReason(reason: string): void;

  getMessage(): string;

  setMessage(message: string): void;

  getMetaInfo(fieldName: string): object
}


export class BaseTransactionRequest extends BaseRequest {
  getDisablePrinting(): boolean;

  setDisablePrinting(disablePrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getDisableDuplicateChecking(): boolean;

  setDisableDuplicateChecking(disableDuplicateChecking: boolean): void;

  getCardNotPresent(): boolean;

  setCardNotPresent(cardNotPresent: boolean): void;

  getDisableRestartTransactionOnFail(): boolean;

  setDisableRestartTransactionOnFail(disableRestartTransactionOnFail: boolean): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

  getVaultedCard(): payments.VaultedCard;

  setVaultedCard(vaultedCard: payments.VaultedCard): void;

  getExternalId(): string;

  setExternalId(externalId: string): void;

  getType(): remotepay.TransactionType;

  getAutoAcceptPaymentConfirmations(): boolean;

  setAutoAcceptPaymentConfirmations(autoAcceptPaymentConfirmations: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getRegionalExtras(): object;

  setRegionalExtras(regionalExtras: object): void;

  getExternalReferenceId(): string;

  setExternalReferenceId(externalReferenceId: string): void;

}


export class CapturePreAuthRequest extends BaseRequest {
  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class CapturePreAuthResponse extends BaseResponse {
  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

}


export class CardInfoRequest extends BaseRequest {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

}


export class CardInfoResponse extends BaseResponse {
  getCard(): payments.VaultedCard;

  setCard(card: payments.VaultedCard): void;

}


export class CheckBalanceRequest extends BaseRequest {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

}


export class CheckBalanceResponse extends BaseResponse {
  getAmount(): number;

  setAmount(amount: number): void;

}


export class CloseoutRequest extends BaseRequest {
  getAllowOpenTabs(): boolean;

  setAllowOpenTabs(allowOpenTabs: boolean): void;

  getBatchId(): string;

  setBatchId(batchId: string): void;

}


export class CloseoutResponse extends BaseResponse {
  getBatch(): payments.Batch;

  setBatch(batch: payments.Batch): void;

}


export class CloverDeviceErrorEvent {
  getMessage(): string;

  setMessage(message: string): void;

  getCode(): remotepay.DeviceErrorEventCode;

  setCode(code: remotepay.DeviceErrorEventCode): void;

  getCause(): remotepay.PlatformError;

  setCause(cause: remotepay.PlatformError): void;

  getType(): remotepay.ErrorType;

  setType(type: remotepay.ErrorType): void;

  getMetaInfo(fieldName: string): object
}


export class CloverDeviceEvent {
  getMessage(): string;

  setMessage(message: string): void;

  getCode(): number;

  setCode(code: number): void;

  getEventState(): remotepay.DeviceEventState;

  setEventState(eventState: remotepay.DeviceEventState): void;

  getInputOptions(): Array<remotepay.InputOption>;

  setInputOptions(inputOptions: Array<remotepay.InputOption>): void;

  getMetaInfo(fieldName: string): object
}


export class ConfirmPaymentRequest extends BaseRequest {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getChallenges(): Array<base.Challenge>;

  setChallenges(challenges: Array<base.Challenge>): void;

}


export class CustomActivityRequest extends BaseRequest {
  getAction(): string;

  setAction(action: string): void;

  getPayload(): string;

  setPayload(payload: string): void;

  getNonBlocking(): boolean;

  setNonBlocking(nonBlocking: boolean): void;

}


export class CustomActivityResponse extends BaseResponse {
  getPayload(): string;

  setPayload(payload: string): void;

  getAction(): string;

  setAction(action: string): void;

}


export class CustomerInfo {
  getCustomer(): customers.Customer;

  setCustomer(customer: customers.Customer): void;

  getDisplayString(): string;

  setDisplayString(displayString: string): void;

  getExternalId(): string;

  setExternalId(externalId: string): void;

  getExternalSystemName(): string;

  setExternalSystemName(externalSystemName: string): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getMetaInfo(fieldName: string): object
}


export class CustomerProvidedDataEvent extends BaseResponse {
  getEventId(): string;

  setEventId(eventId: string): void;

  getConfig(): remotepay.DataProviderConfig;

  setConfig(config: remotepay.DataProviderConfig): void;

  getData(): string;

  setData(data: string): void;

}


export class DataProviderConfig {
  getType(): string;

  setType(type: string): void;

  getConfiguration(): object;

  setConfiguration(configuration: object): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotepay
* @enum {string}
*/
export enum DeviceErrorEventCode {
  AbortEndpoint = "AbortEndpoint",
  AccessDenied = "AccessDenied",
  CancelIoFailed = "CancelIoFailed",
  DeviceAllreadyLocked = "DeviceAllreadyLocked",
  DeviceIoControl = "DeviceIoControl",
  DeviceNotFound = "DeviceNotFound",
  EndpointAllreadyLocked = "EndpointAllreadyLocked",
  GetDeviceKeyValueFailed = "GetDeviceKeyValueFailed",
  GetOverlappedResult = "GetOverlappedResult",
  GetString = "GetString",
  InsufficientMemory = "InsufficientMemory",
  Interrupted = "Interrupted",
  InvalidConfig = "InvalidConfig",
  InvalidEndpoint = "InvalidEndpoint",
  InvalidParam = "InvalidParam",
  IoCancelled = "IoCancelled",
  IoControlMessage = "IoControlMessage",
  IoEndpointGlobalCancelRedo = "IoEndpointGlobalCancelRedo",
  IoSyncFailed = "IoSyncFailed",
  IoTimedOut = "IoTimedOut",
  MonoApiError = "MonoApiError",
  None = "None",
  NotConnected = "NotConnected",
  NotSupported = "NotSupported",
  Ok = "Ok",
  Overflow = "Overflow",
  PipeError = "PipeError",
  ReadFailed = "ReadFailed",
  ReceiveThreadTerminated = "ReceiveThreadTerminated",
  ResourceBusy = "ResourceBusy",
  SendNotificationFailure = "SendNotificationFailure",
  SetDeviceKeyValueFailed = "SetDeviceKeyValueFailed",
  Success = "Success",
  UnknownError = "UnknownError",
  UserAborted = "UserAborted",
  Win32Error = "Win32Error",
  WriteFailed = "WriteFailed"
}

export class DeviceEventEnum {
  getDeviceErrorEventCode(): remotepay.DeviceErrorEventCode;

  setDeviceErrorEventCode(deviceErrorEventCode: remotepay.DeviceErrorEventCode): void;

  getDeviceEventState(): remotepay.DeviceEventState;

  setDeviceEventState(deviceEventState: remotepay.DeviceEventState): void;

  getMetaInfo(fieldName: string): object
}




/**
We can not include WELCOME_SCREEN, THANKYOU_SCREEN, DISPLAY_MESSAGE, DISPLAY_ORDER until we can filter them out in remote-pay before they go through the interface to older versions of the sdk
* @memberof remotepay
* @enum {string}
*/
export enum DeviceEventState {
  ADD_SIGNATURE = "ADD_SIGNATURE",
  ADD_SIGNATURE_CANCEL_CONFIRM = "ADD_SIGNATURE_CANCEL_CONFIRM",
  ADD_TIP = "ADD_TIP",
  APPROVE_ELV_LIMIT_OVERRIDE = "APPROVE_ELV_LIMIT_OVERRIDE",
  APPROVED = "APPROVED",
  CANCELED = "CANCELED",
  CASHBACK_CONFIRM = "CASHBACK_CONFIRM",
  CASHBACK_SELECT = "CASHBACK_SELECT",
  CONFIGURING = "CONFIGURING",
  CONFIRM_AMOUNT = "CONFIRM_AMOUNT",
  CONFIRM_DUPLICATE_CHECK = "CONFIRM_DUPLICATE_CHECK",
  CONFIRM_PARTIAL_AUTH = "CONFIRM_PARTIAL_AUTH",
  CONTACTLESS_TAP_REQUIRED = "CONTACTLESS_TAP_REQUIRED",
  CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
  CUSTOM_TIP_AMOUNT = "CUSTOM_TIP_AMOUNT",
  DCC_HOST_REQUEST = "DCC_HOST_REQUEST",
  DECLINED = "DECLINED",
  ENTER_INSTALLMENT_CODE = "ENTER_INSTALLMENT_CODE",
  ENTER_INSTALLMENTS = "ENTER_INSTALLMENTS",
  ENTER_PAN_LAST_FOUR = "ENTER_PAN_LAST_FOUR",
  ERROR_SCREEN = "ERROR_SCREEN",
  FAILED = "FAILED",
  FATAL = "FATAL",
  FISCAL_INVOICE_NUMBER = "FISCAL_INVOICE_NUMBER",
  FORCE_ACCEPTANCE = "FORCE_ACCEPTANCE",
  HANDLE_TENDER = "HANDLE_TENDER",
  INPUT_ERROR = "INPUT_ERROR",
  MANUAL_CARD_CVV = "MANUAL_CARD_CVV",
  MANUAL_CARD_CVV_UNREADABLE = "MANUAL_CARD_CVV_UNREADABLE",
  MANUAL_CARD_EXPIRATION = "MANUAL_CARD_EXPIRATION",
  MANUAL_CARD_NUMBER = "MANUAL_CARD_NUMBER",
  MANUAL_ENTRY_FALLBACK = "MANUAL_ENTRY_FALLBACK",
  OFFLINE_PAYMENT_CONFIRM = "OFFLINE_PAYMENT_CONFIRM",
  PACKET_EXCEPTION = "PACKET_EXCEPTION",
  PERSONAL_ID_ENTRY = "PERSONAL_ID_ENTRY",
  PERSONAL_ID_ENTRY_PAS = "PERSONAL_ID_ENTRY_PAS",
  PIN_BYPASS_CONFIRM = "PIN_BYPASS_CONFIRM",
  PIN_PAD = "PIN_PAD",
  PROCESSING = "PROCESSING",
  PROCESSING_CREDIT = "PROCESSING_CREDIT",
  PROCESSING_GO_ONLINE = "PROCESSING_GO_ONLINE",
  PROCESSING_SWIPE = "PROCESSING_SWIPE",
  RECEIPT_OPTIONS = "RECEIPT_OPTIONS",
  REMOVE_CARD = "REMOVE_CARD",
  RETURN_TO_MERCHANT = "RETURN_TO_MERCHANT",
  SELECT_ACCOUNT = "SELECT_ACCOUNT",
  SELECT_APPLICATION = "SELECT_APPLICATION",
  SELECT_DCC = "SELECT_DCC",
  SELECT_INSTALLMENT_PLAN = "SELECT_INSTALLMENT_PLAN",
  SELECT_LANGUAGE = "SELECT_LANGUAGE",
  SELECT_MULTI_MID = "SELECT_MULTI_MID",
  SELECT_TIP = "SELECT_TIP",
  SELECT_WITHDRAW_FROM_ACCOUNT = "SELECT_WITHDRAW_FROM_ACCOUNT",
  SENSORY_EXPERIENCE = "SENSORY_EXPERIENCE",
  SHOW_SEPA_MANDAT = "SHOW_SEPA_MANDAT",
  SIGNATURE_CUSTOMER_MODE = "SIGNATURE_CUSTOMER_MODE",
  SIGNATURE_ON_SCREEN_FALLBACK = "SIGNATURE_ON_SCREEN_FALLBACK",
  SIGNATURE_REJECT = "SIGNATURE_REJECT",
  START = "START",
  STARTING_CUSTOM_ACTIVITY = "STARTING_CUSTOM_ACTIVITY",
  SWIPE_CVV_ENTRY = "SWIPE_CVV_ENTRY",
  TIMED_OUT = "TIMED_OUT",
  TRY_AGAIN = "TRY_AGAIN",
  VERIFY_SIGNATURE_ON_PAPER = "VERIFY_SIGNATURE_ON_PAPER",
  VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_PAPER_CONFIRM_VOID",
  VERIFY_SIGNATURE_ON_SCREEN = "VERIFY_SIGNATURE_ON_SCREEN",
  VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID = "VERIFY_SIGNATURE_ON_SCREEN_CONFIRM_VOID",
  VERIFY_SURCHARGES = "VERIFY_SURCHARGES",
  VOICE_REFERRAL_RESULT = "VOICE_REFERRAL_RESULT",
  VOID_CONFIRM = "VOID_CONFIRM",
  VOIDED = "VOIDED"
}

export class DeviceInfo {
  getName(): string;

  setName(name: string): void;

  getModel(): string;

  setModel(model: string): void;

  getSerial(): string;

  setSerial(serial: string): void;

  getSupportsAcks(): boolean;

  setSupportsAcks(supportsAcks: boolean): void;

  getSupportsVoidPaymentResponse(): boolean;

  setSupportsVoidPaymentResponse(supportsVoidPaymentResponse: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayReceiptOptionsRequest {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getRefundId(): string;

  setRefundId(refundId: string): void;

  getCreditId(): string;

  setCreditId(creditId: string): void;

  getDisablePrinting(): boolean;

  setDisablePrinting(disablePrinting: boolean): void;

  getMetaInfo(fieldName: string): object
}


export class DisplayReceiptOptionsResponse extends BaseResponse {
  getResultStatus(): remotepay.ResultStatus;

  setResultStatus(resultStatus: remotepay.ResultStatus): void;

}




/**
* @memberof remotepay
* @enum {string}
*/
export enum ErrorType {
  COMMUNICATION = "COMMUNICATION",
  VALIDATION = "VALIDATION",
  EXCEPTION = "EXCEPTION"
}



/**
* @memberof remotepay
* @enum {string}
*/
export enum ExternalDeviceState {
  IDLE = "IDLE",
  BUSY = "BUSY",
  WAITING_FOR_POS = "WAITING_FOR_POS",
  WAITING_FOR_CUSTOMER = "WAITING_FOR_CUSTOMER",
  UNKNOWN = "UNKNOWN"
}

export class ExternalDeviceStateData {
  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getCustomActivityId(): string;

  setCustomActivityId(customActivityId: string): void;

  getMetaInfo(fieldName: string): object
}


export class ExternalDeviceStateEnum {
  getState(): remotepay.ExternalDeviceState;

  setState(state: remotepay.ExternalDeviceState): void;

  getMetaInfo(fieldName: string): object
}


export class ICloverConnector {
    acceptSignature(request: remotepay.VerifySignatureRequest): void;
    acceptPayment(payment: payments.Payment): void;
    rejectPayment(payment: payments.Payment, challenge: base.Challenge): void;
    auth(authRequest: remotepay.AuthRequest): void;
    preAuth(preAuthRequest: remotepay.PreAuthRequest): void;
    capturePreAuth(capturePreAuthRequest: remotepay.CapturePreAuthRequest): void;
    incrementPreAuth(incrementPreauthRequest: remotepay.IncrementPreAuthRequest): void;
    closeout(closeoutRequest: remotepay.CloseoutRequest): void;
    displayReceiptOptions(request: remotepay.DisplayReceiptOptionsRequest): void;
    showDisplayOrder(order: order.DisplayOrder): void;
    removeDisplayOrder(order: order.DisplayOrder): void;
    discountAddedToDisplayOrder(discount: order.DisplayDiscount, order: order.DisplayOrder): void;
    discountRemovedFromDisplayOrder(discount: order.DisplayDiscount, order: order.DisplayOrder): void;
    lineItemAddedToDisplayOrder(lineItem: order.DisplayLineItem, order: order.DisplayOrder): void;
    lineItemRemovedFromDisplayOrder(lineItem: order.DisplayLineItem, order: order.DisplayOrder): void;
    dispose(): void;
    invokeInputOption(io: remotepay.InputOption): void;
    manualRefund(request: remotepay.ManualRefundRequest): void;
    refundPayment(request: remotepay.RefundPaymentRequest): void;
    openCashDrawer(request: remotepay.OpenCashDrawerRequest): void;
    print(request: remotepay.PrintRequest): void;
    rejectSignature(request: remotepay.VerifySignatureRequest): void;
    resetDevice(): void;
    sale(request: remotepay.SaleRequest): void;
    showMessage(message: string): void;
    showThankYouScreen(): void;
    showWelcomeScreen(): void;
    tipAdjustAuth(request: remotepay.TipAdjustAuthRequest): void;
    vaultCard(cardEntryMethods: number): void;
    voidPayment(request: remotepay.VoidPaymentRequest): void;
    initializeConnection(): void;
    addCloverConnectorListener(connectorListener: remotepay.ICloverConnectorListener): void;
    removeCloverConnectorListener(connectorListener: remotepay.ICloverConnectorListener): void;
    retrievePendingPayments(): void;
    readCardData(request: remotepay.ReadCardDataRequest): void;
    sendMessageToActivity(request: remotepay.MessageToActivity): void;
    startCustomActivity(request: remotepay.CustomActivityRequest): void;
    retrieveDeviceStatus(request: remotepay.RetrieveDeviceStatusRequest): void;
    retrievePayment(request: remotepay.RetrievePaymentRequest): void;
    retrievePrinters(request: remotepay.RetrievePrintersRequest): void;
    retrievePrintJobStatus(request: remotepay.PrintJobStatusRequest): void;
    registerForCustomerProvidedData(request: remotepay.RegisterForCustomerProvidedDataRequest): void;
    setCustomerInfo(request: remotepay.SetCustomerInfoRequest): void;
    checkBalance(request: remotepay.CheckBalanceRequest): void;
}


export class ICloverConnectorListener {
    onDeviceDisconnected(): void;
    onDeviceConnected(): void;
    onDeviceReady(merchantInfo: remotepay.MerchantInfo): void;
    onDeviceActivityStart(deviceEvent: remotepay.CloverDeviceEvent): void;
    onDeviceActivityEnd(deviceEvent: remotepay.CloverDeviceEvent): void;
    onDeviceError(deviceErrorEvent: remotepay.CloverDeviceErrorEvent): void;
    onAuthResponse(response: remotepay.AuthResponse): void;
    onTipAdjustAuthResponse(response: remotepay.TipAdjustAuthResponse): void;
    onCapturePreAuthResponse(response: remotepay.CapturePreAuthResponse): void;
    onIncrementPreAuthResponse(response: remotepay.IncrementPreAuthResponse): void;
    onVerifySignatureRequest(request: remotepay.VerifySignatureRequest): void;
    onConfirmPaymentRequest(request: remotepay.ConfirmPaymentRequest): void;
    onCloseoutResponse(response: remotepay.CloseoutResponse): void;
    onSaleResponse(response: remotepay.SaleResponse): void;
    onManualRefundResponse(response: remotepay.ManualRefundResponse): void;
    onRefundPaymentResponse(response: remotepay.RefundPaymentResponse): void;
    onTipAdded(tipAdded: remotepay.TipAdded): void;
    onVoidPaymentResponse(response: remotepay.VoidPaymentResponse): void;
    onVoidPaymentRefundResponse(response: remotepay.VoidPaymentRefundResponse): void;
    onVaultCardResponse(response: remotepay.VaultCardResponse): void;
    onPreAuthResponse(response: remotepay.PreAuthResponse): void;
    onRetrievePendingPaymentsResponse(retrievePendingPaymentResponse: remotepay.RetrievePendingPaymentsResponse): void;
    onReadCardDataResponse(response: remotepay.ReadCardDataResponse): void;
    onMessageFromActivity(message: remotepay.MessageFromActivity): void;
    onCustomActivityResponse(response: remotepay.CustomActivityResponse): void;
    onRetrieveDeviceStatusResponse(response: remotepay.RetrieveDeviceStatusResponse): void;
    onInvalidStateTransitionResponse(response: remotepay.InvalidStateTransitionResponse): void;
    onResetDeviceResponse(response: remotepay.ResetDeviceResponse): void;
    onRetrievePaymentResponse(response: remotepay.RetrievePaymentResponse): void;
    onRetrievePrintersResponse(response: remotepay.RetrievePrintersResponse): void;
    onPrintJobStatusResponse(response: remotepay.PrintJobStatusResponse): void;
    onPrintManualRefundReceipt(message: remotepay.PrintManualRefundReceiptMessage): void;
    onPrintManualRefundDeclineReceipt(message: remotepay.PrintManualRefundDeclineReceiptMessage): void;
    onPrintPaymentReceipt(message: remotepay.PrintPaymentReceiptMessage): void;
    onPrintPaymentDeclineReceipt(message: remotepay.PrintPaymentDeclineReceiptMessage): void;
    onPrintPaymentMerchantCopyReceipt(message: remotepay.PrintPaymentMerchantCopyReceiptMessage): void;
    onPrintRefundPaymentReceipt(message: remotepay.PrintRefundPaymentReceiptMessage): void;
    onCustomerProvidedData(response: remotepay.CustomerProvidedDataEvent): void;
    onDisplayReceiptOptionsResponse(response: remotepay.DisplayReceiptOptionsResponse): void;
    onCheckBalanceResponse(response: remotepay.CheckBalanceResponse): void;
}


export class Img {
  getData(): string;

  setData(data: string): void;

  getSrc(): string;

  setSrc(src: string): void;

  getWidth(): number;

  setWidth(width: number): void;

  getHeight(): number;

  setHeight(height: number): void;

  getMetaInfo(fieldName: string): object
}


export class IncrementPreAuthRequest extends BaseRequest {
  getAmount(): number;

  setAmount(amount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class IncrementPreAuthResponse extends BaseResponse {
  getAuthorization(): payments.Authorization;

  setAuthorization(authorization: payments.Authorization): void;

}


export class InputOption {
  getKeyPress(): remotepay.KeyPress;

  setKeyPress(keyPress: remotepay.KeyPress): void;

  getDescription(): string;

  setDescription(description: string): void;

  getMetaInfo(fieldName: string): object
}


export class InvalidStateTransitionResponse extends BaseResponse {
  getRequestedTransition(): string;

  setRequestedTransition(requestedTransition: string): void;

  getState(): remotepay.ExternalDeviceState;

  setState(state: remotepay.ExternalDeviceState): void;

  getData(): remotepay.ExternalDeviceStateData;

  setData(data: remotepay.ExternalDeviceStateData): void;

}




/**
* @memberof remotepay
* @enum {string}
*/
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

export class KeyPressEnum {
  getStatus(): remotepay.KeyPress;

  setStatus(status: remotepay.KeyPress): void;

  getMetaInfo(fieldName: string): object
}


export class ManualRefundRequest extends BaseTransactionRequest {
}


export class ManualRefundResponse extends BaseResponse {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

}


export class MerchantInfo {
  getMerchantID(): string;

  setMerchantID(merchantID: string): void;

  getMerchantMID(): string;

  setMerchantMID(merchantMID: string): void;

  getMerchantName(): string;

  setMerchantName(merchantName: string): void;

  getSupportsAuths(): boolean;

  setSupportsAuths(supportsAuths: boolean): void;

  getSupportsPreAuths(): boolean;

  setSupportsPreAuths(supportsPreAuths: boolean): void;

  getSupportsSales(): boolean;

  setSupportsSales(supportsSales: boolean): void;

  getSupportsVaultCards(): boolean;

  setSupportsVaultCards(supportsVaultCards: boolean): void;

  getSupportsManualRefunds(): boolean;

  setSupportsManualRefunds(supportsManualRefunds: boolean): void;

  getSupportsTipAdjust(): boolean;

  setSupportsTipAdjust(supportsTipAdjust: boolean): void;

  getDeviceInfo(): remotepay.DeviceInfo;

  setDeviceInfo(deviceInfo: remotepay.DeviceInfo): void;

  getMetaInfo(fieldName: string): object
}


export class MessageFromActivity extends ActivityMessage {
}


export class MessageToActivity extends ActivityMessage {
}


export class OpenCashDrawerRequest extends BaseRequest {
  getReason(): string;

  setReason(reason: string): void;

  getDeviceId(): string;

  setDeviceId(deviceId: string): void;

}


export class PaymentResponse extends BaseResponse {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getIsSale(): boolean;

  setIsSale(isSale: boolean): void;

  getIsPreAuth(): boolean;

  setIsPreAuth(isPreAuth: boolean): void;

  getIsAuth(): boolean;

  setIsAuth(isAuth: boolean): void;

  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

}


export class PlatformError {
  getMessage(): string;

  setMessage(message: string): void;

  getMetaInfo(fieldName: string): object
}


export class PreAuthRequest extends BaseTransactionRequest {
}


export class PreAuthResponse extends PaymentResponse {
}


export class PrintJobStatusRequest extends BaseRequest {
  getPrintRequestId(): string;

  setPrintRequestId(printRequestId: string): void;

}


export class PrintJobStatusResponse extends BaseResponse {
  getStatus(): printer.PrintJobStatus;

  setStatus(status: printer.PrintJobStatus): void;

  getPrintRequestId(): string;

  setPrintRequestId(printRequestId: string): void;

}


export class PrintManualRefundDeclineReceiptMessage {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getReason(): string;

  setReason(reason: string): void;

  getMetaInfo(fieldName: string): object
}


export class PrintManualRefundReceiptMessage {
  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getMetaInfo(fieldName: string): object
}


export class PrintPaymentDeclineReceiptMessage {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getReason(): string;

  setReason(reason: string): void;

  getMetaInfo(fieldName: string): object
}


export class PrintPaymentMerchantCopyReceiptMessage {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getMetaInfo(fieldName: string): object
}


export class PrintPaymentReceiptMessage {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

  getMetaInfo(fieldName: string): object
}


export class PrintRefundPaymentReceiptMessage {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getMetaInfo(fieldName: string): object
}


export class PrintRefundPaymentReceiptResponse extends BaseResponse {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

  getOrder(): order.Order;

  setOrder(order: order.Order): void;

}


export class PrintRequest extends BaseRequest {
  getImages(): Array<remotepay.Img>;

  setImages(images: Array<remotepay.Img>): void;

  getText(): Array<string>;

  setText(text: Array<string>): void;

  getImageUrls(): Array<string>;

  setImageUrls(imageUrls: Array<string>): void;

  getPrintRequestId(): string;

  setPrintRequestId(printRequestId: string): void;

  getPrintDeviceId(): string;

  setPrintDeviceId(printDeviceId: string): void;

}




/**
* @memberof remotepay
* @enum {string}
*/
export enum QueryStatus {
  FOUND = "FOUND",
  NOT_FOUND = "NOT_FOUND",
  IN_PROGRESS = "IN_PROGRESS"
}

export class QueryStatusEnum {
  getQueryStatus(): remotepay.QueryStatus;

  setQueryStatus(queryStatus: remotepay.QueryStatus): void;

  getMetaInfo(fieldName: string): object
}


export class ReadCardDataRequest extends BaseRequest {
  getIsForceSwipePinEntry(): boolean;

  setIsForceSwipePinEntry(isForceSwipePinEntry: boolean): void;

  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

}


export class ReadCardDataResponse extends BaseResponse {
  getCardData(): base.CardData;

  setCardData(cardData: base.CardData): void;

}


export class RefundPaymentRequest extends BaseRequest {
  getFullRefund(): boolean;

  setFullRefund(fullRefund: boolean): void;

  getAmount(): number;

  setAmount(amount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getDisablePrinting(): boolean;

  setDisablePrinting(disablePrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class RefundPaymentResponse extends BaseResponse {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getRefund(): payments.Refund;

  setRefund(refund: payments.Refund): void;

}


export class RegisterForCustomerProvidedDataRequest extends BaseRequest {
  getConfigurations(): Array<remotepay.DataProviderConfig>;

  setConfigurations(configurations: Array<remotepay.DataProviderConfig>): void;

}


export class ResetDeviceResponse extends BaseResponse {
  getState(): remotepay.ExternalDeviceState;

  setState(state: remotepay.ExternalDeviceState): void;

}




/**
* @memberof remotepay
* @enum {string}
*/
export enum ResponseCode {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  UNSUPPORTED = "UNSUPPORTED",
  CANCEL = "CANCEL",
  DUPLICATE = "DUPLICATE",
  ERROR = "ERROR"
}

export class ResponseCodeEnum {
  getStatus(): remotepay.ResponseCode;

  setStatus(status: remotepay.ResponseCode): void;

  getMetaInfo(fieldName: string): object
}




/**
* @memberof remotepay
* @enum {string}
*/
export enum ResultStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  CANCEL = "CANCEL"
}

export class ResultStatusEnum {
  getStatus(): remotepay.ResultStatus;

  setStatus(status: remotepay.ResultStatus): void;

  getMetaInfo(fieldName: string): object
}


export class RetrieveDeviceStatusRequest extends BaseRequest {
  getSendLastMessage(): boolean;

  setSendLastMessage(sendLastMessage: boolean): void;

}


export class RetrieveDeviceStatusResponse extends BaseResponse {
  getState(): remotepay.ExternalDeviceState;

  setState(state: remotepay.ExternalDeviceState): void;

  getData(): remotepay.ExternalDeviceStateData;

  setData(data: remotepay.ExternalDeviceStateData): void;

}


export class RetrievePaymentRequest extends BaseRequest {
  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

}


export class RetrievePaymentResponse extends BaseResponse {
  getExternalPaymentId(): string;

  setExternalPaymentId(externalPaymentId: string): void;

  getQueryStatus(): remotepay.QueryStatus;

  setQueryStatus(queryStatus: remotepay.QueryStatus): void;

  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

}


export class RetrievePendingPaymentsResponse extends BaseResponse {
  getPendingPaymentEntries(): Array<base.PendingPaymentEntry>;

  setPendingPaymentEntries(pendingPaymentEntries: Array<base.PendingPaymentEntry>): void;

}


export class RetrievePrintersRequest extends BaseRequest {
  getCategory(): printer.PrintCategory;

  setCategory(category: printer.PrintCategory): void;

}


export class RetrievePrintersResponse extends BaseResponse {
  getPrinters(): Array<printer.Printer>;

  setPrinters(printers: Array<printer.Printer>): void;

}


export class SaleRequest extends TransactionRequest {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getTipMode(): payments.TipMode;

  setTipMode(tipMode: payments.TipMode): void;

}


export class SaleResponse extends PaymentResponse {
}


export class SetCustomerInfoRequest extends BaseRequest {
  getCustomerInfo(): remotepay.CustomerInfo;

  setCustomerInfo(customerInfo: remotepay.CustomerInfo): void;

}


export class SignatureRequest extends BaseRequest {
  getAcknowledgementMessage(): string;

  setAcknowledgementMessage(acknowledgementMessage: string): void;

}


export class SignatureResponse extends BaseResponse {
  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

}


export class TipAdded extends BaseResponse {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

}


export class TipAdjustAuthRequest extends BaseRequest {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class TipAdjustAuthResponse extends BaseResponse {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}


export class TipRequest extends BaseRequest {
  getTipSuggestions(): Array<merchant.TipSuggestion>;

  setTipSuggestions(tipSuggestions: Array<merchant.TipSuggestion>): void;

  getTippableAmount(): number;

  setTippableAmount(tippableAmount: number): void;

}


export class TipResponse extends BaseResponse {
  getTipAmount(): number;

  setTipAmount(tipAmount: number): void;

}


export class TransactionRequest extends BaseTransactionRequest {
  getSignatureThreshold(): number;

  setSignatureThreshold(signatureThreshold: number): void;

  getSignatureEntryLocation(): payments.DataEntryLocation;

  setSignatureEntryLocation(signatureEntryLocation: payments.DataEntryLocation): void;

  getAutoAcceptSignature(): boolean;

  setAutoAcceptSignature(autoAcceptSignature: boolean): void;

  getAllowOfflinePayment(): boolean;

  setAllowOfflinePayment(allowOfflinePayment: boolean): void;

  getForceOfflinePayment(): boolean;

  setForceOfflinePayment(forceOfflinePayment: boolean): void;

  getDisableCashback(): boolean;

  setDisableCashback(disableCashback: boolean): void;

  getApproveOfflinePaymentWithoutPrompt(): boolean;

  setApproveOfflinePaymentWithoutPrompt(approveOfflinePaymentWithoutPrompt: boolean): void;

  getTaxAmount(): number;

  setTaxAmount(taxAmount: number): void;

  getTippableAmount(): number;

  setTippableAmount(tippableAmount: number): void;

  getTipSuggestions(): Array<merchant.TipSuggestion>;

  setTipSuggestions(tipSuggestions: Array<merchant.TipSuggestion>): void;

}




/**
* @memberof remotepay
* @enum {string}
*/
export enum TransactionType {
  PAYMENT = "PAYMENT",
  CREDIT = "CREDIT",
  AUTH = "AUTH",
  DATA = "DATA",
  BALANCE_INQUIRY = "BALANCE_INQUIRY",
  PAYMENT_REVERSAL = "PAYMENT_REVERSAL",
  PAYMENT_ADJUSTMENT = "PAYMENT_ADJUSTMENT",
  CREDIT_REVERSAL = "CREDIT_REVERSAL",
  REFUND_ADJUSTMENT = "REFUND_ADJUSTMENT",
  CASH_ADVANCE = "CASH_ADVANCE",
  CAPTURE_PREAUTH = "CAPTURE_PREAUTH",
  VAS_DATA = "VAS_DATA",
  VERIFY_CARD = "VERIFY_CARD",
  TOKENIZE_CARD = "TOKENIZE_CARD"
}

export class TransactionTypeEnum {
  getStatus(): remotepay.TransactionType;

  setStatus(status: remotepay.TransactionType): void;

  getMetaInfo(fieldName: string): object
}


export class VaultCardRequest extends BaseRequest {
  getCardEntryMethods(): number;

  setCardEntryMethods(cardEntryMethods: number): void;

}


export class VaultCardResponse extends BaseResponse {
  getCard(): payments.VaultedCard;

  setCard(card: payments.VaultedCard): void;

}


export class VerifySignatureRequest extends BaseRequest {
  getPayment(): payments.Payment;

  setPayment(payment: payments.Payment): void;

  getSignature(): base.Signature;

  setSignature(signature: base.Signature): void;

}


export class VoidCreditRequest {
  getRequestId(): string;

  setRequestId(requestId: string): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getCreditId(): string;

  setCreditId(creditId: string): void;

  getExtras(): object;

  setExtras(extras: object): void;

  getMetaInfo(fieldName: string): object
}


export class VoidCreditResponse {
  getRequestId(): string;

  setRequestId(requestId: string): void;

  getStatus(): remotepay.ResultStatus;

  setStatus(status: remotepay.ResultStatus): void;

  getCredit(): payments.Credit;

  setCredit(credit: payments.Credit): void;

  getMetaInfo(fieldName: string): object
}


export class VoidPaymentRefundRequest extends BaseRequest {
  getRefundId(): string;

  setRefundId(refundId: string): void;

  getOrderId(): string;

  setOrderId(orderId: string): void;

  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getDisablePrinting(): boolean;

  setDisablePrinting(disablePrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class VoidPaymentRefundResponse extends RefundPaymentResponse {
  getRefundId(): string;

  setRefundId(refundId: string): void;

}


export class VoidPaymentRequest extends BaseRequest {
  getOrderId(): string;

  setOrderId(orderId: string): void;

  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

  getEmployeeId(): string;

  setEmployeeId(employeeId: string): void;

  getVoidReason(): string;

  setVoidReason(voidReason: string): void;

  getDisablePrinting(): boolean;

  setDisablePrinting(disablePrinting: boolean): void;

  getDisableReceiptSelection(): boolean;

  setDisableReceiptSelection(disableReceiptSelection: boolean): void;

  getExtras(): object;

  setExtras(extras: object): void;

}


export class VoidPaymentResponse extends PaymentResponse {
  getPaymentId(): string;

  setPaymentId(paymentId: string): void;

}

}
    
export namespace tokens {
    



/**
token type
* @memberof tokens
* @enum {string}
*/
export enum TokenType {
  ONEOFF = "ONEOFF",
  MULTIPAY = "MULTIPAY",
  RECURRING = "RECURRING"
}
}
    