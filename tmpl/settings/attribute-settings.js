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
    this.attributeName = '';

    /**
     * @private
     * @type boolean
     */
    this.hasEvent = false;
};

tuna.utils.extend(AttributeSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @constructor
 * @extends {AttributeSettings}
 */
tuna.tmpl.settings.AttributeSettings = AttributeSettings;