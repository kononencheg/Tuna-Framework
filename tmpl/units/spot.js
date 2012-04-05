


/**
 * Элемент шаблона трансформации отображающий передаваемый данные во внутреннем
 * содеражнии целевых DOM-узлов.
 *
 * @constructor
 * @extends {tuna.tmpl.units.Unit}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент шаблона.
 */
tuna.tmpl.units.Spot = function(root) {
    tuna.tmpl.units.Unit.call(this, root);

    /**
     * @private
     * @type {!tuna.tmpl.data.PathEvaluator}
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * Набор DOM-элементов для отображения данных.
     *
     * @protected
     * @type {!Array.<!Node>}
     */
    this._nodes = [];

    /**
     * Разбитая строка образца отображения данных.
     *
     * @protected
     * @type {Array.<string>}
     */
    this._pattern = null;
};


tuna.utils.extend(tuna.tmpl.units.Spot, tuna.tmpl.units.Unit);


/**
 * @const
 * @type {string}
 */
tuna.tmpl.units.Spot.NAME = 'spot';


/**
 * Установка образца отображения данных.
 *
 * Образец представляет собой разбитую строку разрывы которой предназначены для
 * вставки данных.
 *
 * @param {!Array.<string>} pattern Разбитая строка образца.
 */
tuna.tmpl.units.Spot.prototype.setPattern = function(pattern) {
    this._pattern = pattern;
};


/**
 * Установка пути извлечения данных для отображения.
 *
 * @see tuna.tmpl.data.PathEvaluator
 * @param {string} path Строка пути извлечения данных.
 */
tuna.tmpl.units.Spot.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};


/**
 * Добавление целевых DOM-элементов для отображения данных.
 *
 * @param {!Node|!Array.<!Node>} elements Массив DOM-элементов.
 */
tuna.tmpl.units.Spot.prototype.addTargets = function(elements) {
    this._nodes = this._nodes.concat(elements);
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Spot.prototype.applyData = function(dataNode) {
    var valueNode = this.__pathEvaluator.evaluate(dataNode);
    if (valueNode !== null) {
        var value = valueNode.getValue();

        if (this._pattern !== null) {
            value = this._pattern.join(value);
        }

        this._applyValue(value);
    }
};


/**
 * Отображение значения в целевых DOM-узлах.
 *
 * @protected
 * @param {!*} value Занчение для отображения.
 */
tuna.tmpl.units.Spot.prototype._applyValue = function(value) {
    var html = '';
    if (value !== null) {
        html = value.toString();
    }

    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i].innerHTML !== html) {
            this._nodes[i].innerHTML = html;
        }

        i--;
    }
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Spot.prototype.destroy = function() {
    this._nodes.length = 0;
};