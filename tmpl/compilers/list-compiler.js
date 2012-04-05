


/**
 * Компилятор элемента шаблона отображения списка.
 *
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 * @param {!tuna.tmpl.compilers.TemplateCompiler} compiler Компилятор шаблона,
 *        необходимый для компиляции элементов списка.
 */
tuna.tmpl.compilers.ListCompiler = function(compiler) {

    /**
     * @type {!tuna.tmpl.compilers.TemplateCompiler}
     * @private
     */
    this.__templateCompiler = compiler;
};


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.ListCompiler.prototype.compile =
    function(element, settings, root) {

    var lists = [];

    if (settings instanceof tuna.tmpl.settings.ListSettings) {
        var selector = settings.targetSelector;
        if (tuna.dom.matchesSelector(element, selector)) {
            lists.push(this.__compileList(element, settings, root));
        } else {
            var elements = tuna.dom.select(selector, element);

            var i = elements.length - 1;
            while (i >= 0) {

                if (tuna.dom.getParentMatches(elements[i], selector, element)
                    === null) {

                    lists.push(this.__compileList(elements[i], settings, root));
                }

                i--;
            }
        }
    }

    return lists;
};


/**
 * @private
 * @param {!Node} element
 * @param {!tuna.tmpl.settings.ListSettings} settings
 * @param {!tuna.tmpl.units.Template} root
 * @return {!tuna.tmpl.units.List}
 */
tuna.tmpl.compilers.ListCompiler.prototype.__compileList =
    function(element, settings, root) {

    var list = new tuna.tmpl.units.List(root);
    list.setCompiler(this.__templateCompiler);

    var renderer = document.getElementById(settings.itemRendererID);
    if (renderer !== null) {
        renderer = renderer.cloneNode(true);
        renderer.removeAttribute('id');

        list.setItemRenderer(renderer);
    } else {
        throw 'Cannot find item renderer with id: "' + settings.itemRendererID + '"';
    }

    list.setItemSettings(settings.itemSettings);
    list.setKeyPath(settings.keyPath);
    list.setPath(settings.dataPath);

    list.setListNodeRouter
        (new tuna.tmpl.units.list.ListContainerRouter(element, root));

    return list;
};

