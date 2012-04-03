/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 */
tuna.tmpl.compilers.SpotCompiler = function() {};

/**
 * @override
 */
tuna.tmpl.compilers.SpotCompiler.prototype.compile =
    function(element, settings, template) {

    var item = null;
    var root = template.getRootTemplate();

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
 * @param {!tuna.tmpl.settings.TemplateSettings} settings
 * @return {!Array.<!tuna.tmpl.settings.SpotSettings>}
 */
tuna.tmpl.compilers.SpotCompiler.prototype._getItemsSettings =
    function(settings) {

  return settings.spots;
};

/**
 * @protected
 * @param {!tuna.tmpl.units.Template} rootTemplate
 * @return {!tuna.tmpl.units.Spot}
 */
tuna.tmpl.compilers.SpotCompiler.prototype._createItem =
    function(rootTemplate) {

  return new tuna.tmpl.units.Spot(rootTemplate);
};

/**
 * @protected
 * @param {!Node} element
 * @param {!tuna.tmpl.settings.IItemSettings} settings
 * @param {!tuna.tmpl.units.Spot} item
 */
tuna.tmpl.compilers.SpotCompiler.prototype._compileItem =
    function(element, settings, item) {

  item.setPath(settings.dataPath);

  if (settings.filter !== null) {
    item.setPattern(settings.filter.split('$$'));
  }

  var className = settings.targetClass;
  if (tuna.dom.hasClass(element, className)) { // Например если шаблоном является элемент списка
    item.addTargets(element);
  } else {
    item.addTargets(tuna.dom.select('.' + className, element));
  }
};
