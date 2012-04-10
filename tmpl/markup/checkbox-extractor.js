


/**
 * Объект извлечения настроек элемента шаблона отображения данных в элементах
 * input типа checkbox.
 *
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
tuna.tmpl.markup.CheckboxExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @inheritDoc
     */
    this._tagName = 'checkbox';
};


tuna.utils.extend
    (tuna.tmpl.markup.CheckboxExtractor, tuna.tmpl.markup.SpotExtractor);


/**
 * @inheritDoc
 */
tuna.tmpl.markup.CheckboxExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');

    if (selector !== null && dataPath !== null) {
        var checkbox = new tuna.tmpl.settings.CheckboxSettings
            (selector, dataPath);

        checkbox.pattern = element.getAttribute(this._ns + 'pattern');

        return checkbox;
    }

    return null;
};
