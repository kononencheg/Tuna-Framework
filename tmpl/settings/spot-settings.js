/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var SpotSettings = function() {
    
    /**
     * @private
     * @type {string}
     */
    this.__class = '';

    /**
     * @private
     * @type {string}
     */
    this.__path = '';
};

/**
 * @param {string} className
 */
SpotSettings.prototype.setTargetClass = function(className) {
    this.__class = className;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getTargetClass = function() {
    return this.__class;
};

/**
 * @param {string} path
 */
SpotSettings.prototype.setDataPath = function(path) {
    this.__path = path;
};

/**
 * @return {string}
 */
SpotSettings.prototype.getDataPath = function() {
    return this.__path;
};

/**
 * @constructor
 * @extends {SpotSettings}
 */
tuna.tmpl.settings.SpotSettings = SpotSettings;