


/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 */
tuna.tmpl.units.condition.NotSetOperator = function() {
    tuna.tmpl.units.condition.ConditionOperator.call(this);
};


tuna.utils.extend(
    tuna.tmpl.units.condition.NotSetOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * @override
 */
tuna.tmpl.units.condition.NotSetOperator.prototype.test = function(value) {
    return value == null;
};
