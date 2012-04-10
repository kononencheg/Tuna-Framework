


/**
 * Элемент шаблона трансформации устанавливающий значение определенного
 * аттрибута в зависимости от данных.
 *
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент трансформации.
 * @param {string} attributeName Корневой элемент трансформации.
 */
tuna.tmpl.units.Attribute = function(root, attributeName) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {string}
     */
    this.__attributeName = attributeName;

    /**
     * @private
     * @type {boolean}
     */
    this.__hasEvent = false;

    /**
     * @type {function()}
     * @private
     */
    this.__dispatchAttribute = tuna.utils.bind(this.__dispatchAttribute, this);
};


tuna.utils.extend(tuna.tmpl.units.Attribute, tuna.tmpl.units.Spot);


/**
 * @const
 * @type {string}
 */
tuna.tmpl.units.Attribute.NAME = 'attribute';


/**
 * Устанока флага наличия события генерирующегося у элемента при изменении
 * аттрибута.
 *
 * @param {boolean} hasEvent Флаг наличия события.
 */
tuna.tmpl.units.Attribute.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Attribute.prototype._applyValue = function(value) {
    if (value !== null) {
        this.__setAttribute(value);
    } else {
        this.__removeAttribute();
    }

    if (this.__hasEvent) {
        tuna.utils.nextTick(this.__dispatchAttribute);
    }
};


/**
 * Установка аттрибута.
 *
 * @private
 * @param {*} value Значение аттрибута.
 */
tuna.tmpl.units.Attribute.prototype.__setAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i][this.__attributeName] !== undefined) {
            this._nodes[i][this.__attributeName] = value;
        }

        this._nodes[i].setAttribute(this.__attributeName, value + '');

        i--;
    }
};


/**
 * Удаление аттрибута.
 *
 * @private
 */
tuna.tmpl.units.Attribute.prototype.__removeAttribute = function() {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i][this.__attributeName] !== undefined) {
            this._nodes[i][this.__attributeName] = '';
        }

        this._nodes[i].removeAttribute(this.__attributeName);

        i--;
    }
};


/**
 * @private
 */
tuna.tmpl.units.Attribute.prototype.__dispatchAttribute = function() {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        tuna.dom.dispatchEvent(this._nodes[i], this.__attributeName);

        i--;
    }
};