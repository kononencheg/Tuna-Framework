/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var ConditionSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * @private
     * @type string
     */
    this.__actionType = '';

    /**
     * @private
     * @type string
     */
    this.__actionData = '';

    /**
     * @private
     * @type string
     */
    this.__operatorType = '';

    /**
     * @private
     * @type string
     */
    this.__operatorData = '';
};

tuna.utils.extend(ConditionSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setOperator = function(type, data) {
    this.__operatorType = type;
    this.__operatorData = data;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getOperatorType = function() {
    return this.__operatorType;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getOperatorData = function() {
    return this.__operatorData;
};

/**
 * @param {string} type
 * @param {string} data
 */
ConditionSettings.prototype.setAction = function(type, data) {
    this.__actionType = type;
    this.__actionData = data;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getActionType = function() {
    return this.__actionType;
};

/**
 * @return {string}
 */
ConditionSettings.prototype.getActionData = function() {
    return this.__actionData;
};

/**
 * @constructor
 * @extends {ConditionSettings}
 */
tuna.tmpl.settings.ConditionSettings = ConditionSettings;
