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
        (settings.actionType, settings.actionData);

    item.setAction(action);

    var operator = this.__createOperator
        (settings.operatorType, settings.operatorData);

    item.setOperator(operator);
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {tuna.tmpl.units.condition.ConditionAction}
 */
ConditionCompiler.prototype.__createAction = function(type, data) {
    switch (type) {
        case 'class': return new tuna.tmpl.units.condition.ClassAction(data);
    }

    return null;
};

/**
 * @private
 * @param {string} type
 * @param {string} data
 * @return {tuna.tmpl.units.condition.ConditionOperator}
 */
ConditionCompiler.prototype.__createOperator = function(type, data) {
    switch (type) {
        case 'isset': return new tuna.tmpl.units.condition.IsSetOperator();
        case 'notset': return new tuna.tmpl.units.condition.NotSetOperator();
        case 'eq': return new tuna.tmpl.units.condition.EqualsOperator(data);
        case 'ne': return new tuna.tmpl.units.condition.NotEqualsOperator(data);
    }

    return null;
};

tuna.tmpl.compilers.ConditionCompiler = ConditionCompiler;
