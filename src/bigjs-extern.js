/**
 * @fileoverview Externs for big.js 3.1.3
 * @see http://mikemcl.github.io/big.js/
 * @externs
*/

/* Constructor */

/**
 * @constructor
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
var Big = function Big(arg1) {};

/* Constructor: Properties */

/**
 * @type {number}
 */
Big.DP;

/**
 * @type {number}
 */
Big.RM;

/**
 * @type {number}
 */
Big.E_NEG;

/**
 * @type {number}
 */
Big.E_POS;

/* Instance */

/* Instance: Methods */

/**
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.abs = function() {};

/**
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.cmp = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.div = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {boolean}
 * @nosideeffects
 */
Big.prototype.eq = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {boolean}
 * @nosideeffects
 */
Big.prototype.gt = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {boolean}
 * @nosideeffects
 */
Big.prototype.gte = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {boolean}
 * @nosideeffects
 */
Big.prototype.lte = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.minus = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.mod = function(arg1) {};

/**
 * @param {number|string|!Big} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.plus = function(arg1) {};

/**
 * @param {number} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.pow = function(arg1) {};

/**
 * @param {number} arg1
 * @param {number} arg2
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.round = function(arg1, arg2) {};

/**
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.sqrt = function() {};

/**
 * @param {number} arg1
 * @returns {!Big}
 * @nosideeffects
 */
Big.prototype.times = function(arg1) {};

/**
 * @param {number} arg1
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.toExponential = function(arg1) {};

/**
 * @param {number} arg1
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.toFixed = function(arg1) {};

/**
 * @param {number} arg1
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.toPrecision = function(arg1) {};

/**
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.toString = function() {};

/**
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.valueOf = function() {};

/**
 * @returns {string}
 * @nosideeffects
 */
Big.prototype.toJSON = function() {};

/* Instance: Properties */

/**
 * @type {Array}
 */
Big.c;

/**
 * @type {number}
 */
Big.e;

/**
 * @type {number}
 */
Big.s;
