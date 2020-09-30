
module.exports.tokens = tokens;
/**
* @namespace tokens
*/
function tokens() {}


tokens.TokenType = require("./TokenType.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = tokens;
}
    