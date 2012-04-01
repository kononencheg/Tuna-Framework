


/**
 * @private
 * @constructor
 * @param {string=} data
 */
tuna.tmpl.units.condition.ConditionOperator = function(data) {
    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 * @param {*} value
 * @return {boolean}
 */
tuna.tmpl.units.condition.ConditionOperator.prototype.test = function(value) {};
