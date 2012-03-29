/**
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 * @param {HTMLDocument} doc
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
var ListCompiler = function(doc, compiler) {
    this.__doc = doc;
    this.__templateCompiler = compiler;
};



/**
 * @override
 */
ListCompiler.prototype.compile = function(element, settings, template) {
    var itemsSettings = settings.getLists();
    var i = itemsSettings.length - 1;
    while (i >= 0) {

        this.__compileLists(element, itemsSettings[i], template);

        i--;
    }
};

/**
 * @private
 * @param {!Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
ListCompiler.prototype.__compileLists = function(element, settings, template) {
    var root = template.getRootTemplate();
    var lists = [];

    var className = settings.targetClass;
    if (tuna.dom.hasClass(element, className)) {
        lists.push(this.__createList(element, settings, root));
    } else {
        var elements = tuna.dom.select('.' + className, element);

        var i = elements.length - 1;
        while (i >= 0) {

            if (tuna.dom.getParentWithClass(elements[i], className, element) === null) {
                lists.push(this.__createList(elements[i], settings, root));
            }

            i--;
        }
    }

    template.addItems(lists);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} settings
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.List}
 */
ListCompiler.prototype.__createList = function(element, settings, root) {
    var list = new tuna.tmpl.units.List(root);

    list.setCompiler(this.__templateCompiler);

    var rendererId = settings.itemRendererID;
    var renderer = this.__doc.getElementById(rendererId);
    if (renderer !== null) {
        renderer = renderer.cloneNode(true);
        renderer.removeAttribute('id');

        list.setItemRenderer(renderer);
    } else {
        alert('Cannot find item renderer with id: ' + rendererId);
    }

    list.setItemSettings(settings.itemSettings);
    list.setKeyPath(settings.keyPath);
    list.setPath(settings.dataPath);

    list.setListNodeRouter(new tuna.tmpl.units.ListContainerRouter(element));

    return list;
};

/**
 * @constructor
 * @extends {ListCompiler}
 */
tuna.tmpl.compilers.ListCompiler = ListCompiler;
