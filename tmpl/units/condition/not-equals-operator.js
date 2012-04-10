


/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 * @param {string=} opt_data
 */
tuna.tmpl.units.condition.NotEqualsOperator = function(opt_data) {
    tuna.tmpl.units.condition.ConditionOperator.call(this, opt_data);
};


tuna.utils.extend(
    tuna.tmpl.units.condition.NotEqualsOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * Имя типа оператора.
 *
 * @const
 * @type {string}
 */
tuna.tmpl.units.condition.NotEqualsOperator.NAME = 'ne';


/**
 * @override
 */
tuna.tmpl.units.condition.NotEqualsOperator.prototype.test = function(value) {
    return !(value == this._data || (value+'') == this._data);
};
