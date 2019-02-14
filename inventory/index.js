
module.exports.inventory = inventory;
/**
* @namespace inventory
*/
function inventory() {}


inventory.Attribute = require("./Attribute");
inventory.Category = require("./Category");
inventory.CategoryItem = require("./CategoryItem");
inventory.DataAssociation = require("./DataAssociation");
inventory.Discount = require("./Discount");
inventory.InventoryItems = require("./InventoryItems");
inventory.Item = require("./Item");
inventory.ItemGroup = require("./ItemGroup");
inventory.ItemModifierGroup = require("./ItemModifierGroup");
inventory.ItemStock = require("./ItemStock");
inventory.Modifier = require("./Modifier");
inventory.ModifierGroup = require("./ModifierGroup");
inventory.ModifierGroupArray = require("./ModifierGroupArray");
inventory.Option = require("./Option");
inventory.OptionItem = require("./OptionItem");
inventory.PriceType = require("./PriceType");
inventory.SortOrder = require("./SortOrder");
inventory.Tag = require("./Tag");
inventory.TagItem = require("./TagItem");
inventory.TagPrinter = require("./TagPrinter");
inventory.TaxRate = require("./TaxRate");
inventory.TaxRateItem = require("./TaxRateItem");
inventory.TaxType = require("./TaxType.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = inventory;
}
    