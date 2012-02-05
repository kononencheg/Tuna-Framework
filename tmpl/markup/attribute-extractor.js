/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var AttributeExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    this._tagName = 'attr';
};

tuna.utils.extend(AttributeExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
AttributeExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.AttributeSettings();
};

/**
 * @override
 */
AttributeExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype.
        _parseElement.call(this, element, item);

    item.setAttributeName(element.getAttribute(this._ns + 'name'));
    item.setEvent(element.getAttribute(this._ns + 'event') !== null);
};

/**
 * @param {tuna.tmpl.settings.AttributeSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
AttributeExtractor.prototype._saveItem = function(item, settings) {
    settings.addAttribute(item);
};

/**
 * @constructor
 * @extends {ListExtractor}
 */
tuna.tmpl.markup.AttributeExtractor = AttributeExtractor;