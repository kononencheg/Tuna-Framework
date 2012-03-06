/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var ConditionCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
ConditionCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getConditions();
};

/**
 * @override
 */
ConditionCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Condition(rootTemplate);
};

/**
 * @override
 */
ConditionCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    var action = this.__createAction
        (settings.getActionType(), settings.getActionData());

    item.setAction(action);

    var operator = this.__createOperator
        (settings.getOperatorType(), settings.getOperatorData());

    item.setOperator(operator);
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionAction}
 */
ConditionCompiler.prototype.__createAction = function(type, data) {
    switch (type) {
        case 'class': return new __ClassAction(data);
    }

    return null;
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {__ConditionOperator}
 */
ConditionCompiler.prototype.__createOperator = function(type, data) {
    switch (type) {
        case 'isset': return new __IsSetOperator();
        case 'eq': return new __EqualsOperator(data);
        case 'ne': return new __NotEqualsOperator(data);
    }

    return null;
};

tuna.tmpl.compilers.ConditionCompiler = ConditionCompiler;

///////////////////////////////////////////////////////////////////////////
//
//  Operators
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionOperator = function(data) {
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
__ConditionOperator.prototype.test = function(value) {};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 */
var __IsSetOperator = function() {
    __ConditionOperator.call(this);
};

tuna.utils.extend(__IsSetOperator, __ConditionOperator);

/**
 * @override
 */
__IsSetOperator.prototype.test = function(value) {
    return value != null;
};

/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __EqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__EqualsOperator, __ConditionOperator);

/**
 * @override
 */
__EqualsOperator.prototype.test = function(value) {
    return value === this._data || (value + '') === this._data;
};


/**
 * @private
 * @constructor
 * @extends {__ConditionOperator}
 * @param {string=} data
 */
var __NotEqualsOperator = function(data) {
    __ConditionOperator.call(this, data);
};

tuna.utils.extend(__NotEqualsOperator, __ConditionOperator);

/**
 * @override
 */
__NotEqualsOperator.prototype.test = function(value) {
    return !(value == this._data || (value+'') == this._data);
};

///////////////////////////////////////////////////////////////////////////
//
//  Actions
//
///////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @constructor
 * @param {string=} data
 */
var __ConditionAction = function(data) {

    /**
     * @private
     * @type string
     */
    this._data = data || '';
};

/**
 *
 * @param {Node} element
 * @param {boolean} testResult
 * @param {*} value
 */
__ConditionAction.prototype.apply = function(element, testResult, value) {};


/**
 * @private
 * @constructor
 * @extends {__ConditionAction}
 * @param {string=} data
 */
var __ClassAction = function(data) {
    __ConditionAction.call(this, data);

    /**
     * @private
     * @type *
     */
    this.__lastName = null;
};

tuna.utils.extend(__ClassAction, __ConditionAction);

/**
 * @override
 */
__ClassAction.prototype.apply = function(element, testResult, value) {
    var className = this._data;

    if (className !== '') {
        if (testResult) {
            tuna.dom.addClass(element, className);
        } else {
            tuna.dom.removeClass(element, className);
        }

    } else if (this.__lastName !== value && testResult) {
        if (this.__lastName !== null) {
            tuna.dom.removeClass(element, this.__lastName + '');
        }

        tuna.dom.addClass(element, value + '');

        this.__lastName = value;
    }

};

/**
 * @private
 * @constructor
 * @extends {__ConditionAction}
 * @param {string=} data
 */
var __AttrAction = function(data) {
    __ConditionAction.call(this, data);

    /**
     * @private
     * @type *
     */
    this.__lastName = null;
};

tuna.utils.extend(__AttrAction, __ConditionAction);

/**
 * @override
 */
__AttrAction.prototype.apply = function(element, testResult, value) {
    var className = this._data;

    if (className !== '') {
        if (testResult) {
            tuna.dom.addClass(element, className);
        } else {
            tuna.dom.removeClass(element, className);
        }

    } else if (this.__lastName !== value && testResult) {
        if (this.__lastName !== null) {
            tuna.dom.removeClass(element, this.__lastName + '');
        }

        tuna.dom.addClass(element, value + '');

        this.__lastName = value;
    }

};
