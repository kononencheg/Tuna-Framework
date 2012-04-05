


/**
 * Настройки элемента обработки условия.
 *
 * TODO: Add conditionPath parameter
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @param {string} targetSelector CSS-селектор целевых для элемента
 *        шаблонизатора DOM-элементов.
 * @param {string} dataPath Путь к данным для отображения элементом
 *        шаблонизатора.
 * @param {string} actionType Тип действия.
 * @param {string} operatorType Тип условия.
 */
tuna.tmpl.settings.ConditionSettings =
    function(targetSelector, dataPath, actionType, operatorType) {

    tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);

    /**
     * Тип действия обработки условия.
     *
     * @see tuna.tmpl.units.condition.ConditionAction
     * @type {string}
     */
    this.actionType = actionType;

    /**
     * Тип условия для проверки.
     *
     * @type {string}
     */
    this.operatorType = operatorType;

    /**
     * Данные действия обработки условия.
     *
     * @type {string}
     */
    this.actionData = '';

    /**
     * Данные условия.
     *
     * @type {string}
     */
    this.operatorData = '';
};


tuna.utils.extend
    (tuna.tmpl.settings.ConditionSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.ConditionSettings.prototype.getType = function() {
    return tuna.tmpl.units.Condition.NAME;
};
