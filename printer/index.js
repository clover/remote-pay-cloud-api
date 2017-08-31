
module.exports.printer = printer;
/**
* @namespace printer
*/
function printer() {}


printer.PrintCategory = require("./PrintCategory");
printer.PrintJobStatus = require("./PrintJobStatus");
printer.Printer = require("./Printer");
printer.PrinterType = require("./PrinterType.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = printer;
}
    