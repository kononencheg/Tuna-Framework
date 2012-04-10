
/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionOperator}
 */
tuna.tmpl.units.condition.IsSetOperator = function() {
    tuna.tmpl.units.condition.ConditionOperator.call(this);
};

tuna.utils.extend(
    tuna.tmpl.units.condition.IsSetOperator,
    tuna.tmpl.units.condition.ConditionOperator
);


/**
 * Имя типа оператора.
 *
 * @const
 * @type {string}
 */
tuna.tmpl.units.condition.IsSetOperator.NAME = 'isset';

/**
 * @override
 */
tuna.tmpl.units.condition.IsSetOperator.prototype.test = function(value) {
    return value != null;
};


