


/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 * @param {string=} data
 */
tuna.tmpl.units.condition.NotEqualsOperator = function(data) {
    tuna.tmpl.units.condition.ConditionOperator.call(this, data);
};


tuna.utils.extend(
    tuna.tmpl.units.condition.NotEqualsOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * @override
 */
tuna.tmpl.units.condition.NotEqualsOperator.prototype.test = function(value) {
    return !(value == this._data || (value+'') == this._data);
};
