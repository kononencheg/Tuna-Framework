(function() {

    var ListCompiler = function(document, compiler) {
        this.__doc = document;
        this.__templateCompiler = compiler;
    };

    tuna.utils.implement(ListCompiler, tuna.tmpl.compilers.IItemCompiler);

    ListCompiler.prototype.compile = function(element, settings, template) {
        var itemsSettings = settings.getLists();
        var i = itemsSettings.length - 1;
        while (i >= 0) {

            this.__compileLists(element, itemsSettings[i], template);

            i--;
        }
    };

    ListCompiler.prototype.__compileLists = function(element, settings, template) {
        var root = template.getRootTemplate();
        var lists = [];

        var className = settings.getTargetClass();
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

    ListCompiler.prototype.__createList = function(element, settings, root) {
        var list = new tuna.tmpl.units.List(root);

        list.setCompiler(this.__templateCompiler);
        list.setItemRenderer(this.__doc.getElementById(settings.getItemRendererID()));
        list.setItemTemplate(settings.getItemTemplate());
        list.setKeyPath(settings.getItemKeyDataPath());
        list.setPath(settings.getDataPath());
        
        list.setListNodeRouter(new tuna.tmpl.units.ListContainerRouter(element));

        return list;
    };

    /*

    TemplateCompiler.prototype.__resurrectNodesInside = function(element, list, compiledList) {
        var deadNodes = element.childNodes;
        var i = deadNodes.length - 1;

        var node = null;
        while (i >= 0) {
            node = deadNodes[i];
            if (node.nodeType === Node.ELEMENT_NODE) {
                this.__resurrectNode(node, list, compiledList);
            }

            i--;
        }

    };

    TemplateCompiler.prototype.__resurrectNode = function(node, list, compiledList) {

        var key = this.__getItemKey(node.className, list.getTargetClass());

        if (key) {
            compiledList.addItem
                (this.compileTemplate(list.getItemTemplate(), node), key);
        }

        return key;
    };

    TemplateCompiler.prototype.__getItemKey = function(itemClass, targetClass) {
        var result = null;

        var keyPart = itemClass.split(targetClass + ':')[1];
        if (keyPart) {
            result = keyPart.split(' ')[0];
        }

        return result;
    };
     */

    tuna.tmpl.compilers.ListCompiler = ListCompiler;
    
})();