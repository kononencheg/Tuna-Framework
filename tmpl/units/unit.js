


/**
 * Абстрактный класс элемента шаблонизатора.
 *
 * @see tuna.tmpl.units.Template
 * @constructor
 * @implements {tuna.tmpl.units.IUnit}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент шаблона. Необходим
 *        для регистрации изменении во всех элементах шаблона.
 */
tuna.tmpl.units.Unit = function(root) {

    /**
     * @type {!tuna.tmpl.units.Template}
     * @private
     */
    this._rootTemplate = root;
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Unit.prototype.applyData = function(dataNode) {};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Unit.prototype.destroy = function() {};
