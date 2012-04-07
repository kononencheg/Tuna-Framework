


/**
 * Объект извлечения настроек элемента шаблона отображения аттрибута.
 *
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
tuna.tmpl.markup.AttributeExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @inheritDoc
     */
    this._tagName = 'attr';
};


tuna.utils.extend
    (tuna.tmpl.markup.AttributeExtractor, tuna.tmpl.markup.SpotExtractor);


/**
 * @inheritDoc
 */
tuna.tmpl.markup.AttributeExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');
    var attributeName = element.getAttribute(this._ns + 'name');

    if (selector !== null && dataPath !== null && attributeName !== null) {
        var attribute = new tuna.tmpl.settings.AttributeSettings
            (selector, dataPath, attributeName);

        attribute.pattern = element.getAttribute(this._ns + 'pattern');
        attribute.hasEvent = !!element.getAttribute(this._ns + 'event');

        return attribute;
    }

    return null;
};

