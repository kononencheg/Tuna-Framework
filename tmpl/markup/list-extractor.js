


/**
 * Объект извлечения настроек элемента шаблона отображения списка.
 *
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 * @param {!tuna.tmpl.markup.MarkupTemplateBuilder} templateBuilder Объект
 *        извлечения шаблона из верстки.
 */
tuna.tmpl.markup.ListExtractor = function(templateBuilder) {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @inheritDoc
     */
    this._tagName = 'list';

    /**
     * @private
     * @type {!tuna.tmpl.markup.MarkupTemplateBuilder}
     */
    this.__templateBuilder = templateBuilder
};


tuna.utils.extend
    (tuna.tmpl.markup.ListExtractor, tuna.tmpl.markup.SpotExtractor);


/**
 * @inheritDoc
 */
tuna.tmpl.markup.ListExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');
    var keyPath = element.getAttribute(this._ns + 'key-path');
    var itemRendererID = element.getAttribute(this._ns + 'item-renderer-id');

    var itemSettings = null;
    var templateID = element.getAttribute(this._ns + 'item-template-id');
    if (templateID !== null) {
        itemSettings = this.__templateBuilder.buildSettings(templateID);
    }

    if (selector !== null && dataPath !== null && keyPath !== null &&
        itemRendererID !== null && itemSettings !== null) {

        var list = new tuna.tmpl.settings.ListSettings
            (selector, dataPath, keyPath, itemRendererID, itemSettings);

        list.pattern = element.getAttribute(this._ns + 'pattern');

        return list;
    }

    return null;
};
