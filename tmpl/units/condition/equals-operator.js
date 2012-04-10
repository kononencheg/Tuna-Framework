


/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 * @param {string=} opt_data
 */
tuna.tmpl.units.condition.EqualsOperator = function(opt_data) {
    tuna.tmpl.units.condition.ConditionOperator.call(this, opt_data);
};


tuna.utils.extend(
    tuna.tmpl.units.condition.EqualsOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * Имя типа оператора.
 *
 * @const
 * @type {string}
 */
tuna.tmpl.units.condition.EqualsOperator.NAME = 'eq';


/**
 * @override
 */
tuna.tmpl.units.condition.EqualsOperator.prototype.test = function(value) {
    return value === this._data || (value + '') === this._data;
};
