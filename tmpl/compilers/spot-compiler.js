(function() {

    var SpotCompiler = function() {};

    tuna.utils.implement(SpotCompiler, tuna.tmpl.compilers.IItemCompiler);

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

    SpotCompiler.prototype._getItemsSettings = function(settings) {
        return settings.getSpots();
    };

    SpotCompiler.prototype._createItem = function(rootTemplate) {
        return new tuna.tmpl.units.Spot(rootTemplate);
    };

    SpotCompiler.prototype._compileItem = function(element, settings, item) {
        item.setPath(settings.getDataPath());

        var className = settings.getTargetClass();
        if (tuna.dom.hasClass(element, className)) { // Например если шаблоном является элемент списка
            item.addTargets(element);
        } else {
            item.addTargets(tuna.dom.select('.' + className, element));
        }
    };

    tuna.tmpl.compilers.SpotCompiler = SpotCompiler;
})();