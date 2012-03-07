/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ListSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.keyPath = '';

    /**
     * @private
     * @type string
     */
    this.itemRendererID = '';

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.itemSettings = null;
};

tuna.utils.extend(ListSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @constructor
 * @extends {ListSettings}
 */
tuna.tmpl.settings.ListSettings = ListSettings;



