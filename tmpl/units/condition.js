


/**
 * Элемент шаблона трансформации совершающий определенное действие в зависимости
 * от выполненеия условия.
 *
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент трансформации.
 */
tuna.tmpl.units.Condition = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {tuna.tmpl.units.condition.ConditionAction}
     */
    this.__action = null;

    /**
     * @private
     * @type {tuna.tmpl.units.condition.ConditionOperator}
     */
    this.__operator = null;
};


tuna.utils.extend(tuna.tmpl.units.Condition, tuna.tmpl.units.Spot);


/**
 * Установка объекта действия выполняющего трансформацию.
 *
 * @param {tuna.tmpl.units.condition.ConditionAction} action Объект действия.
 */
tuna.tmpl.units.Condition.prototype.setAction = function(action) {
    this.__action = action;
};


/**
 * Установка объекта условия выполнения действия трансформации.
 *
 * @param {tuna.tmpl.units.condition.ConditionOperator} operator Объект условия.
 */
tuna.tmpl.units.Condition.prototype.setOperator = function(operator) {
    this.__operator = operator;
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Condition.prototype._applyValue = function(value) {
    var testResult = this.__operator.test(value);

    var i = this._nodes.length - 1;
    while (i >= 0) {
        this.__action.apply(this._nodes[i], testResult, value);
        i--;
    }
};