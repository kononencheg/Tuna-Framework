
/**
 * @private
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionAction}
 * @param {string=} data
 */
tuna.tmpl.units.condition.ClassAction = function(data) {
    tuna.tmpl.units.condition.ConditionAction.call(this, data);

    /**
     * @private
     * @type *
     */
    this.__lastName = null;
};

tuna.utils.extend(tuna.tmpl.units.condition.ClassAction, tuna.tmpl.units.condition.ConditionAction);

/**
 * @override
 */
tuna.tmpl.units.condition.ClassAction.prototype.apply = function(element, testResult, value) {
    var className = this._data;

    if (className !== '') {
        tuna.dom.setClassExist(element, className, testResult);
    } else if (this.__lastName !== value && testResult) {
        if (this.__lastName !== null) {
            tuna.dom.removeClass(element, this.__lastName + '');
        }

        tuna.dom.addClass(element, value + '');

        this.__lastName = value;
    }
};
