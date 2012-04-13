


/**
 * Объект извлечения настроек элемента шаблона отображения данных в содержимом
 * DOM-элемента.
 *
 * @constructor
 * @implements {tuna.tmpl.markup.IMarkupExtractor}
 */
tuna.tmpl.markup.SpotExtractor = function() {

    /**
     * @protected
     * @type {string}
     */
    this._tagName = 'spot';

    /**
     * @protected
     * @type {string}
     */
    this._ns = 'tuna:';
};


/**
 * @inheritDoc
 */
tuna.tmpl.markup.SpotExtractor.prototype.extract = function(element) {
    var result = [];

    var tagName = tuna.IS_IE ? this._tagName : (this._ns + this._tagName);
    var elements = element.getElementsByTagName(tagName);

    var i = 0,
        l = elements.length;

    var item = null;
    while (i < l) {
        item = this._createItem(elements[i]);

        if (item !== null) {
            result.push(item);
        }

        i++;
    }

    return result;
};


/**
 * Создание настроек элементов шаблона.
 *
 * @protected
 * @param {!Node} element DOM-элемент настроек шаблона.
 * @return {tuna.tmpl.settings.IItemSettings} Настройки элементов шаблона.
 */
tuna.tmpl.markup.SpotExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');

    if (selector !== null && dataPath !== null) {
        var spot = new tuna.tmpl.settings.SpotSettings(selector, dataPath);
        spot.pattern = element.getAttribute(this._ns + 'pattern');

        return spot;
    }

    return null;
};
