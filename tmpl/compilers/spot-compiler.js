/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 */
var SpotCompiler = function() {};



/**
 * @override
 */
SpotCompiler.prototype.compile = function(element, settings, template) {
    var root = template.getRootTemplate();
    var item = null;

    var itemsSettings = this._getItemsSettings(settings);
    var i = itemsSettings.length - 1;
    while (i >= 0) {
        item = this._createItem(root);

        this._compileItem(element, itemsSettings[i], item);

        template.addItems(item);

        i--;
    }

};

/**
 * @protected
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
SpotCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getSpots();
};

/**
 * @protected
 * @param {tuna.tmpl.units.Template} rootTemplate
 * @return {tuna.tmpl.units.CompiledUnit}
 */
SpotCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Spot(rootTemplate);
};

/**
 * @protected
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.CompiledUnit} item
 */
SpotCompiler.prototype._compileItem = function(element, settings, item) {
    item.setPath(settings.dataPath);

    if (settings.filter !== null) {
        item.setFilter(settings.filter.split('$$'));
    }

    var className = settings.targetClass;
    if (tuna.dom.hasClass(element, className)) { // Например если шаблоном является элемент списка
        item.addTargets(element);
    } else {
        item.addTargets(tuna.dom.select('.' + className, element));
    }
};

/**
 * @constructor
 * @extends {SpotCompiler}
 */
tuna.tmpl.compilers.SpotCompiler = SpotCompiler;