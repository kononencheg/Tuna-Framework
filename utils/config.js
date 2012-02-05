/**
 * @constructor
 */
var Config = function() {

    /**
     * @private
     * @type {Object.<string, string>}
     */
    this.__data = null;
};

/**
 * @param {!Object.<string, string>} data
 */
Config.prototype.init = function(data) {
    this.__data = data;
};

/**
 *
 * @param {!string} key
 * @return {?string}
 */
Config.prototype.get = function(key) {
    if (this.__data[key] !== undefined) {
        return this.__data[key];
    }

    return null;
};

tuna.utils.сonfig = new Config();

