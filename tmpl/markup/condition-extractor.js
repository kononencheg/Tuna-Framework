


/**
 * Объект извлечения настроек элемента шаблона выполнения дествия в зависимости
 * от условия.
 *
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
tuna.tmpl.markup.ConditionExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'if';

    /**
     * @private
     * @type {!Array.<string>}
     */
    this.__operators = [];// = ['isset', 'notset','eq', 'ne'];

    /**
     * @private
     * @type {!Array.<string>}
     */
    this.__actions = [];// ['class'];
};


tuna.utils.extend
    (tuna.tmpl.markup.ConditionExtractor, tuna.tmpl.markup.SpotExtractor);


/**
 * Установка типа оператора и соотвественно имени аттрибута.
 *
 * @param {string} type Тип оператора - имя аттрибута.
 */
tuna.tmpl.markup.ConditionExtractor.prototype.addOperatorType = function(type) {
    this.__operators.push(type);
};


/**
 * Установка типа действия и соотвественно имени аттрибута.
 *
 * @param {string} type Тип действия.
 */
tuna.tmpl.markup.ConditionExtractor.prototype.addActionType = function(type) {
    this.__actions.push(type);
};


/**
 * @inheritDoc
 */
tuna.tmpl.markup.ConditionExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');

    var actionAttribute = this.__extractActionAttribute(element);
    var operatorAttribute = this.__extractOperatorAttribute(element);

    if (selector !== null && dataPath !== null &&
        actionAttribute !== null && operatorAttribute !== null) {

        var actionName = actionAttribute.name.substr(this._ns.length);
        var operatorName = operatorAttribute.name.substr(this._ns.length);

        var condition = new tuna.tmpl.settings.ConditionSettings
            (selector, dataPath, actionName, operatorName);

        condition.pattern = element.getAttribute(this._ns + 'pattern');
        condition.actionData = actionAttribute.value;
        condition.operatorData = operatorAttribute.value;

        return condition;
    }

    return null;
};


/**
 * @private
 * @param {!Node} element
 * @return {Attr}
 */
tuna.tmpl.markup.ConditionExtractor.prototype.__extractActionAttribute =
    function(element) {

    var name = null;
    for (var key in this.__actions) {
        name = this._ns + this.__actions[key];

        if (element.attributes[name]) {
            return element.attributes[name];
        }
    }

    return null;
};

/**
 * @private
 * @param {Node} element
 * @return {Attr}
 */
tuna.tmpl.markup.ConditionExtractor.prototype.__extractOperatorAttribute =
    function(element) {

    var name = null;
    for (var key in this.__operators) {
        name = this._ns + this.__operators[key];

        if (element.attributes[name]) {
            return element.attributes[name];
        }
    }

    return null;
};
