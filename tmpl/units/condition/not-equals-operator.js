


/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 * @param {string=} data
 */
tuna.tmpl.units.condition.EqualsOperator = function(data) {
    tuna.tmpl.units.condition.ConditionOperator.call(this, data);
};


tuna.utils.extend(
    tuna.tmpl.units.condition.EqualsOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * @override
 */
tuna.tmpl.units.condition.EqualsOperator.prototype.test = function(value) {
    return value === this._data || (value + '') === this._data;
};
