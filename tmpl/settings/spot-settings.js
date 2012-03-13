/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var SpotSettings = function() {
    
    /**
     * @private
     * @type {string}
     */
    this.targetClass = '';

    /**
     * @private
     * @type {string}
     */
    this.dataPath = '';

    /**
     *
     * @type {Array.<string>}
     * @private
     */
    this.filter = null;
};

/**
 * @constructor
 * @extends {SpotSettings}
 */
tuna.tmpl.settings.SpotSettings = SpotSettings;