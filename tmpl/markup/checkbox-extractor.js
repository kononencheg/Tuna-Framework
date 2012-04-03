/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var CheckboxExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'checkbox';
};

tuna.utils.extend(CheckboxExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @protected
 * @return tuna.tmpl.settings.IItemSettings
 */
CheckboxExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.CheckboxSettings();
};

/**
 * @param {tuna.tmpl.settings.CheckboxSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
CheckboxExtractor.prototype._saveItem = function(item, settings) {
    settings.checkboxex.push(item);
};

/**
 * @constructor
 * @extends {CheckboxExtractor}
 */
tuna.tmpl.markup.CheckboxExtractor = CheckboxExtractor;