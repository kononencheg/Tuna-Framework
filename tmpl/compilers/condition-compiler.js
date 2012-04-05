


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
tuna.tmpl.compilers.TemplateCompiler.prototype.registerAction =
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
tuna.tmpl.compilers.TemplateCompiler.prototype.registerOperator =
    function(type, operator) {

    this.__operators[type] = operator;
};


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.ConditionCompiler.prototype._createSpot = function(root) {
    return new tuna.tmpl.units.Condition(root);
};


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.ConditionCompiler.prototype._setupSpot =
    function(spot, settings) {

    tuna.tmpl.compilers.SpotCompiler.prototype
        ._setupSpot.call(this, spot, settings);

    if (spot instanceof tuna.tmpl.units.Condition &&
        settings instanceof tuna.tmpl.settings.ConditionSettings) {

        var actionProtype = this.__actions[settings.actionType];
        if (actionProtype !== undefined) {
            spot.setAction(actionProtype.clone(settings.actionData));
        }

        var operatorProtype = this.__operators[settings.operatorType];
        if (operatorProtype !== undefined) {
            spot.setOperator(operatorProtype.clone(settings.operatorData));
        }
    }
};

