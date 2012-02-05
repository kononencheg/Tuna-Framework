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
    this.__keyPath = '';

    /**
     * @private
     * @type string
     */
    this.__itemRendererID = '';

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;
};

tuna.utils.extend(ListSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} path
 */
ListSettings.prototype.setItemKeyDataPath = function(path) {
    this.__keyPath = path;
};

/**
 * @return {string}
 */
ListSettings.prototype.getItemKeyDataPath = function() {
    return this.__keyPath;
};

/**
 * @param {string} id
 */
ListSettings.prototype.setItemRendererID = function(id) {
    this.__itemRendererID = id;
};


/**
 * @return {string}
 */
ListSettings.prototype.getItemRendererID = function() {
    return this.__itemRendererID;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListSettings.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
ListSettings.prototype.getItemSettings = function() {
    return this.__itemSettings;
};

/**
 * @constructor
 * @extends {ListSettings}
 */
tuna.tmpl.settings.ListSettings = ListSettings;



