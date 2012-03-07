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
    this.actionType = '';

    /**
     * @private
     * @type string
     */
    this.actionData = '';

    /**
     * @private
     * @type string
     */
    this.operatorType = '';

    /**
     * @private
     * @type string
     */
    this.operatorData = '';
};

tuna.utils.extend(ConditionSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @constructor
 * @extends {ConditionSettings}
 */
tuna.tmpl.settings.ConditionSettings = ConditionSettings;
