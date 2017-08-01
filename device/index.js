
module.exports.device = device;
/**
* @namespace device
*/
function device() {}


device.AccessoryRomMetadataUpdateRequest = require("./AccessoryRomMetadataUpdateRequest");
device.BuildType = require("./BuildType");
device.Device = require("./Device");
device.DeviceAccessory = require("./DeviceAccessory");
device.DeviceAccessoryBuildType = require("./DeviceAccessoryBuildType");
device.DeviceProvision = require("./DeviceProvision");
device.DeviceProvisionState = require("./DeviceProvisionState");
device.DeviceRequests = require("./DeviceRequests");
device.LimitedDevice = require("./LimitedDevice");
device.Rom = require("./Rom");
device.RomBuildType = require("./RomBuildType");
device.SwapRequestEvent = require("./SwapRequestEvent.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = device;
}
    