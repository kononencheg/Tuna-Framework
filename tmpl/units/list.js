/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-list.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    var List = function(rootTemplate) {
        tuna.tmpl.units.CompiledUnit.call(this, rootTemplate);

        this.__compiler = null;

        this.__itemRenderer = null;
        this.__itemTemplate = null;

        this.__itemsTable = {};
        this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();
        this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator();

        this.__listNodeRouter = null;
    };

    tuna.utils.extend(List, tuna.tmpl.units.CompiledUnit);

    List.prototype.setListNodeRouter = function(router) {
        this.__listNodeRouter = router;
    };

    List.prototype.setPath = function(path) {
        this.__pathEvaluator.setPath(path);
    };

    List.prototype.setKeyPath = function(path) {
        this.__keyPathEvaluator.setPath(path);
    };

    List.prototype.setCompiler = function(compiler) {
        this.__compiler = compiler;
    };

    List.prototype.setItemRenderer = function(element) {
        this.__itemRenderer = element.cloneNode(true);
        this.__itemRenderer.removeAttribute('id');
    };

    List.prototype.setItemTemplate = function(template) {
        this.__itemTemplate = template;
    };

    List.prototype.addItem = function(compiledItem, key) {
        this.__itemsTable[key] = compiledItem;
    };

    List.prototype.applyData = function(dataNode) {
        var sampleNode = this.__pathEvaluator.evaluate(dataNode);
        if (sampleNode !== null) {
            var sample = sampleNode.getValue();
            var oldItemsTable = this.__itemsTable;

            this.__itemsTable = {};
            for (var index in sample) {
                this.__updateItem
                    (sampleNode.growChild(index), oldItemsTable, index);
            }

            this.__destroyItems(oldItemsTable);
        } else {
            this.__destroyItems(this.__itemsTable);
        }
    };

    List.prototype.destroy = function() {
        this.__destroyItems(this.__itemsTable);
    };

    List.prototype.__updateItem
        = function(itemNode, oldItemsTable, index) {

        var key = this.__keyPathEvaluator.apply(itemNode);

        if (oldItemsTable[key] === undefined) {
            this.addItem(this.__makeNewItem(), key);
        } else {
            this.__itemsTable[key] = oldItemsTable[key];
            delete oldItemsTable[key];
        }

        this.__itemsTable[key].applyData(itemNode);
    };

    List.prototype.__destroyItems = function(itemsTable) {
        for (var key in itemsTable) {
            itemsTable[key].destroy();

            delete itemsTable[key];
        }
    };

    List.prototype.__makeNewItem = function() {
        var itemElement = this.__itemRenderer.cloneNode(true);

        var rootTemplate = this.getRootTemplate();
        var template = this.__compiler.compileTemplate
            (this.__itemTemplate, itemElement, rootTemplate);

        this.__listNodeRouter.append(itemElement);

        rootTemplate.registerChildCreation(itemElement);

        return template;
    };

    tuna.tmpl.units.List = List;
    
})();