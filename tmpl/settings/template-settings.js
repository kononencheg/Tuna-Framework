/**
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var TemplateSettings = function() {

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.SpotSettings>
     */
    this.__spots = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ListSettings>
     */
    this.__lists = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.AttributeSettings>
     */
    this.__attributes = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.ConditionSettings>
     */
    this.__conditions = [];

    /**
     * @private
     * @type Array.<tuna.tmpl.settings.CheckboxSettings>
     */
    this.__comboboxex = [];
};

/**
 * @param {tuna.tmpl.settings.CheckboxSettings} condition
 */
TemplateSettings.prototype.addCheckbox = function(combobox) {
    this.__comboboxex.push(combobox);
};

/**
 * @return {Array.<tuna.tmpl.settings.CheckboxSettings>}
 */
TemplateSettings.prototype.getCheckboxes = function() {
    return this.__comboboxex;
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} condition
 */
TemplateSettings.prototype.addCondition = function(condition) {
    this.__conditions.push(condition);
};

/**
 * @return {Array.<tuna.tmpl.settings.ConditionSettings>}
 */
TemplateSettings.prototype.getConditions = function() {
    return this.__conditions;
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} attr
 */
TemplateSettings.prototype.addAttribute = function(attr) {
    this.__attributes.push(attr);
};

/**
 * @return {Array.<tuna.tmpl.settings.AttributeSettings>}
 */
TemplateSettings.prototype.getAttributes = function() {
    return this.__attributes;
};

/**
 * @param {tuna.tmpl.settings.ListSettings} list
 */
TemplateSettings.prototype.addList = function(list) {
    this.__lists.push(list);
};

/**
 * @return {Array.<tuna.tmpl.settings.ListSettings>}
 */
TemplateSettings.prototype.getLists = function() {
    return this.__lists;
};

/**
 * @param {tuna.tmpl.settings.SpotSettings} spot
 */
TemplateSettings.prototype.addSpot = function(spot) {
    this.__spots.push(spot);
};

/**
 * @return {Array.<tuna.tmpl.settings.SpotSettings>}
 */
TemplateSettings.prototype.getSpots = function() {
    return this.__spots;
};

/**
 * @constructor
 * @extends {TemplateSettings}
 */
tuna.tmpl.settings.TemplateSettings = TemplateSettings;
