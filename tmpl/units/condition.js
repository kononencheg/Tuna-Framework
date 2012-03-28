/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.Condition = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type __ConditionAction
     */
    this.__action = null;

    /**
     * @private
     * @type __ConditionOperator
     */
    this.__operator = null;
};

tuna.utils.extend(tuna.tmpl.units.Condition, tuna.tmpl.units.Spot);

/**
 * @param {__ConditionAction} action
 */
tuna.tmpl.units.Condition.prototype.setAction = function(action) {
    this.__action = action;
};

/**
 * @param {__ConditionOperator} operator
 */
tuna.tmpl.units.Condition.prototype.setOperator = function(operator) {
    this.__operator = operator;
};

/**
 * @override
 */
tuna.tmpl.units.Condition.prototype._applyValue = function(value) {
    var testResult = this.__operator.test(value);

    var i = this._nodes.length - 1;
    while (i >= 0) {
        this.__action.apply(this._nodes[i], testResult, value);
        i--;
    }
};