/**
 * @constructor
 * @implements {tuna.tmpl.markup.IMarkupExtractor}
 */
var SpotExtractor = function() {

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
 * @override
 */
SpotExtractor.prototype.extract = function(element, settings) {
    var tagName = tuna.IS_IE ? this._tagName : (this._ns + this._tagName);
    var elements = element.getElementsByTagName(tagName);

    var i = 0,
        l = elements.length;

    var item = null;
    while (i < l) {
        item = this._createItem();

        this._parseElement(elements.item(i), item);
        this._saveItem(item, settings);

        i++;
    }
};

/**
 * @protected
 * @return tuna.tmpl.settings.IItemSettings
 */
SpotExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.SpotSettings();
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
SpotExtractor.prototype._parseElement = function(element, item) {
    item.targetClass = element.getAttribute(this._ns + 'target');
    item.dataPath = element.getAttribute(this._ns + 'path');
    item.filter = element.getAttribute(this._ns + 'filter');
};

/**
 * @protected
 * @param {tuna.tmpl.settings.SpotSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotExtractor.prototype._saveItem = function(item, settings) {
    settings.spots.push(item);
};

/**
 * @constructor
 * @extends {SpotExtractor}
 */
tuna.tmpl.markup.SpotExtractor = SpotExtractor;