
/**
 * @private
 * @constructor
 * @param {string=} data
 */
tuna.tmpl.units.condition.ConditionAction = function(data) {

    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 *
 * @param {!Node} element
 * @param {boolean} testResult
 * @param {*} value
 */
tuna.tmpl.units.condition.ConditionAction.prototype.apply =
    function(element, testResult, value) {};
