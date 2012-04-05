


/**
 * Настройки элемента обработки условия.
 *
 * TODO: Add conditionPath parameter
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 */
tuna.tmpl.settings.ConditionSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * Тип действия обработки условия.
     *
     * @see tuna.tmpl.units.condition.ConditionAction
     * @type {?string}
     */
    this.actionType = null;

    /**
     * Данные действия обработки условия.
     *
     * @type {?string}
     */
    this.actionData = null;

    /**
     * Тип условия для проверки.
     *
     * @type {?string}
     */
    this.operatorType = null;

    /**
     * Данные условия.
     *
     * @type {?string}
     */
    this.operatorData = null;
};


tuna.utils.extend
    (tuna.tmpl.settings.ConditionSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.ConditionSettings.prototype.getType = function() {
    return 'condition';
};
