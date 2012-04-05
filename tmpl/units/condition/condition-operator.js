


/**
 * Класс оператора условия.
 *
 * @constructor
 * @param {string} data Данные выполнения проверки.
 */
tuna.tmpl.units.condition.ConditionOperator = function(data) {

    /**
     * Данные выполнения проверки.
     *
     * @protected
     * @type {string}
     */
    this._data = data;
};

/**
 * Выполение проверки оператора условия.
 *
 * @param {!*} value Данные к которым необходимо применить оператор.
 * @return {boolean} Результат проверки условия.
 */
tuna.tmpl.units.condition.ConditionOperator.prototype.test = function(value) {};


/**
 * Клонировние оператора с новыми данными.
 *
 * @param {string=} data Данные оператора.
 * @return {!tuna.tmpl.units.condition.ConditionAction} Копия оператора с новыми
 *         данными.
 */
tuna.tmpl.units.condition.ConditionOperator.prototype.clone = function(data) {
    return new this.constructor(data);
};
