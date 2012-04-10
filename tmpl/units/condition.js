


/**
 * Элемент шаблона трансформации совершающий определенное действие в зависимости
 * от выполненеия условия.
 *
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент трансформации.
 * @param {!tuna.tmpl.units.condition.ConditionAction} action Объект действия.
 * @param {!tuna.tmpl.units.condition.ConditionOperator} operator Объект
 *        проверки условия.
 */
tuna.tmpl.units.Condition = function(root, action, operator) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {!tuna.tmpl.units.condition.ConditionAction}
     */
    this.__action = action;

    /**
     * @private
     * @type {!tuna.tmpl.units.condition.ConditionOperator}
     */
    this.__operator = operator;
};


tuna.utils.extend(tuna.tmpl.units.Condition, tuna.tmpl.units.Spot);


/**
 * @const
 * @type {string}
 */
tuna.tmpl.units.Condition.NAME = 'condition';


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