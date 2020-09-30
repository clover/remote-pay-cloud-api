
module.exports.device = device;
/**
* @namespace device
*/
function device() {}


device.AccessoryRomMetadataUpdateRequest = require("./AccessoryRomMetadataUpdateRequest");
device.AssociatedDeviceBundle = require("./AssociatedDeviceBundle");
device.BuildType = require("./BuildType");
device.BundleItem = require("./BundleItem");
device.Device = require("./Device");
device.DeviceAccessory = require("./DeviceAccessory");
device.DeviceAccessoryBuildType = require("./DeviceAccessoryBuildType");
device.DeviceBundle = require("./DeviceBundle");
device.DeviceEventType = require("./DeviceEventType");
device.DeviceProvision = require("./DeviceProvision");
device.DeviceProvisionAssoc = require("./DeviceProvisionAssoc");
device.DeviceProvisionState = require("./DeviceProvisionState");
device.DeviceProvisionStatus = require("./DeviceProvisionStatus");
device.DeviceRequests = require("./DeviceRequests");
device.DeviceWarranty = require("./DeviceWarranty");
device.LimitedDevice = require("./LimitedDevice");
device.Rom = require("./Rom");
device.RomBuildType = require("./RomBuildType");
device.SwapRequestEvent = require("./SwapRequestEvent");
device.UpdatedDeviceBundle = require("./UpdatedDeviceBundle.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = device;
}
    