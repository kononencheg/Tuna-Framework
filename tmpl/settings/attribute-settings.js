/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var AttributeSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__attributeName = '';

    /**
     * @private
     * @type boolean
     */
    this.__hasEvent = false;
};

tuna.utils.extend(AttributeSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {boolean} hasEvent
 */
AttributeSettings.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @return {boolean}
 */
AttributeSettings.prototype.hasEvent = function() {
    return this.__hasEvent;
};

/**
 * @param {string} attributeName
 */
AttributeSettings.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
};

/**
 * @return {string}
 */
AttributeSettings.prototype.getAttributeName = function() {
    return this.__attributeName;
};

/**
 * @constructor
 * @extends {AttributeSettings}
 */
tuna.tmpl.settings.AttributeSettings = AttributeSettings;