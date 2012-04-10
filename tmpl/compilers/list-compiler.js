


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

    if (settings instanceof tuna.tmpl.settings.ListSettings) {
        var renderer = document.getElementById(settings.itemRendererID);
        if (renderer !== null) {
            renderer = renderer.cloneNode(true);
            renderer.removeAttribute('id');

            var selector = settings.targetSelector;
            if (tuna.dom.matchesSelector(element, selector)) {
                return this.__compileList(element, renderer, settings, root);
            } else {
                var lists = [];

                var elements = tuna.dom.select(selector, element);

                var i = elements.length - 1;
                while (i >= 0) {
                    if (tuna.dom.getParentMatches
                            (elements[i], selector, element) === null) {

                        lists.push(this.__compileList(
                            elements[i], renderer, settings, root
                        ));
                    }

                    i--;
                }

                return lists;
            }

        } else {
            throw 'Cannot find item renderer with id: "' +
                        settings.itemRendererID + '"';
        }
    }

    return null;
};


/**
 * Компиляция элемиента списка.
 *
 * @private
 * @param {!Node} element DOM-элемент содержащий список.
 * @param {!Node} itemRenderer DOM-элемент прототип элемента списка.
 * @param {!tuna.tmpl.settings.ListSettings} settings Настройки списка.
 * @param {!tuna.tmpl.units.Template} root Корневой шаблон.
 * @return {!tuna.tmpl.units.List} Созданный список.
 */
tuna.tmpl.compilers.ListCompiler.prototype.__compileList =
    function(element, itemRenderer, settings, root) {

    var list = new tuna.tmpl.units.List(root);
    list.setCompiler(this.__templateCompiler);
    list.setItemRenderer(itemRenderer);
    list.setItemSettings(settings.itemSettings);
    list.setKeyPath(settings.keyPath);
    list.setPath(settings.dataPath);
    list.setListNodeRouter(this.__createRouter(element, root, ''));

    return list;
};

/**
 * Создание объекта управление элементами списка.
 *
 * @private
 * @param {!Node} element DOM-элемент содержащий список.
 * @param {!tuna.tmpl.units.Template} root Корневой шаблон.
 * @param {string} type Тип роутера.
 * @return {!tuna.tmpl.units.list.IListItemRouter} Объект управление
 *         расположением элементов списка.
 */
tuna.tmpl.compilers.ListCompiler.prototype.__createRouter =
    function(element, root, type) {

    return new tuna.tmpl.units.list.ListContainerRouter(element, root);
};

