


/**
 * Действие выполняемое после проверки условия.
 *
 * @see tuna.tmpl.units.Condition
 * @constructor
 * @param {string} data Данные выполнения действия.
 */
tuna.tmpl.units.condition.ConditionAction = function(data) {

    /**
     * Данные выполнения действия.
     *
     * @protected
     * @type {string}
     */
    this._data = data;
};


/**
 * Выполенение действия.
 *
 * @param {!Node} element DOM-элемент действие с которым необходимо произвести.
 * @param {boolean} testResult Результат проверки условия.
 * @param {!*} value Значение узла данных переданного шаблону для трансформации.
 */
tuna.tmpl.units.condition.ConditionAction.prototype.apply =
    function(element, testResult, value) {};

/**
 * Клонировние действия с новыми данными.
 *
 * @param {string} data Данные выполнения действия.
 * @return {!tuna.tmpl.units.condition.ConditionAction} Копия действия с новыми
 *         данными.
 */
tuna.tmpl.units.condition.ConditionAction.prototype.clone = function(data) {
    return new this.constructor(data);
};