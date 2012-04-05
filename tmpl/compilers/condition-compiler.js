


/**
 * Компилятор элемента шаблона выполняющий дейспиве с DOM-элементом в
 * зависимости от результатат проверки условия.
 *
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
tuna.tmpl.compilers.ConditionCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);

    /**
     * @type {Object.<string, !tuna.tmpl.units.condition.ConditionAction>}
     * @private
     */
    this.__actions = {};


    /**
     * @type {Object.<string, !tuna.tmpl.units.condition.ConditionOperator>}
     * @private
     */
    this.__operators = {};
};

tuna.utils.extend
    (tuna.tmpl.compilers.ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);


/**
 * Регистрация прототипа действия условия определенного типа.
 *
 * @param {string} type Тип действия.
 * @param {!tuna.tmpl.units.condition.ConditionAction} action Действие
 *        соответсвующего типа.
 */
tuna.tmpl.compilers.ConditionCompiler.prototype.registerAction =
    function(type, action) {

    this.__actions[type] = action;
};

/**
 * Регистрация прототипа оператора проверки условия определенного типа.
 *
 * @param {string} type Тип действия.
 * @param {!tuna.tmpl.units.condition.ConditionOperator} operator Оператор
 *        соответсвующего типа.
 */
tuna.tmpl.compilers.ConditionCompiler.prototype.registerOperator =
    function(type, operator) {

    this.__operators[type] = operator;
};


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.ConditionCompiler.prototype.compile =
    function(element, settings, root) {

    if (settings instanceof tuna.tmpl.settings.ConditionSettings) {
        var actionPrototype = this.__actions[settings.actionType];
        var operatorPrototype = this.__operators[settings.operatorType];

        if (actionPrototype !== undefined && operatorPrototype !== undefined) {
            var action = actionPrototype.clone(settings.actionData);
            var operator = operatorPrototype.clone(settings.operatorData);

            var condition =
                new tuna.tmpl.units.Condition(root, action, operator);

            this._setupSpot(condition, settings);

            return condition;
        }
    }

    return null;
};
