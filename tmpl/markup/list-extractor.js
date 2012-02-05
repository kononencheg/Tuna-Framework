/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 * @param {tuna.tmpl.markup.MarkupTemplateBuilder} templateBuilder
 */
var ListExtractor = function(templateBuilder) {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'list';

    /**
     * @private
     * @type tuna.tmpl.markup.MarkupTemplateBuilder
     */
    this.__templateBuilder = templateBuilder
};

tuna.utils.extend(ListExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ListExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ListSettings();
};

/**
 * @override
 */
ListExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    item.setItemRendererID(element.getAttribute(this._ns + 'item-renderer-id'));
    item.setItemKeyDataPath(element.getAttribute(this._ns + 'key-path'));

    var templateID = element.getAttribute(this._ns + 'item-template-id');
    item.setItemSettings(this.__templateBuilder.buildSettings(templateID));
};

/**
 * @param {tuna.tmpl.settings.ListSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ListExtractor.prototype._saveItem = function(item, settings) {
    settings.addList(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.ListExtractor = ListExtractor;