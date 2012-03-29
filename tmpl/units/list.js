/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.List = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.compilers.TemplateCompiler
     */
    this.__templateCompiler = null;

    /**
     * @private
     * @type Node
     */
    this.__itemRenderer = null;

    /**
     * @private
     * @type tuna.tmpl.settings.TemplateSettings
     */
    this.__itemSettings = null;

    /**
     * @private
     * @type Object.<*, tuna.tmpl.units.Template>
     */
    this.__itemsTable = {};

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type tuna.tmpl.units.IListItemRouter
     */
    this.__listNodeRouter = null;
};

tuna.utils.extend(tuna.tmpl.units.List, tuna.tmpl.units.CompiledUnit);

/**
 * @param {tuna.tmpl.units.IListItemRouter} router
 */
tuna.tmpl.units.List.prototype.setListNodeRouter = function(router) {
    this.__listNodeRouter = router;
};

/**
 * @param {string} path
 */
tuna.tmpl.units.List.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {string} path
 */
tuna.tmpl.units.List.prototype.setKeyPath = function(path) {
    this.__keyPathEvaluator.setPath(path);
};

/**
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
tuna.tmpl.units.List.prototype.setCompiler = function(compiler) {
    this.__templateCompiler = compiler;
};

/**
 * @param {Node} element
 */
tuna.tmpl.units.List.prototype.setItemRenderer = function(element) {
    this.__itemRenderer = element;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
tuna.tmpl.units.List.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @param {tuna.tmpl.units.Template} compiledItem
 * @param {*} key
 */
tuna.tmpl.units.List.prototype.addItem = function(compiledItem, key) {
    this.__itemsTable[key] = compiledItem;
};

/**
 * @override
 */
tuna.tmpl.units.List.prototype.applyData = function(dataNode) {
    var sampleNode = this.__pathEvaluator.evaluate(dataNode);
    if (sampleNode !== null) {
        var sample = sampleNode.getValue();
        var oldItemsTable = this.__itemsTable;

        this.__itemsTable = {};
        for (var index in sample) {
            this.__updateItem(sampleNode.growChild(index), oldItemsTable);
        }

        this.__removeItems(oldItemsTable);
    } else {
        this.__removeItems(this.__itemsTable);
    }
};

/**
 * @private
 * @param {tuna.tmpl.data.DataNode} itemNode
 * @param {Object.<*, tuna.tmpl.units.Template>} oldItemsTable
 */
tuna.tmpl.units.List.prototype.__updateItem = function(itemNode, oldItemsTable) {
    var keyNode = this.__keyPathEvaluator.evaluate(itemNode);
    if (keyNode !== null) {
        var key = keyNode.getValue();
        if (key !== null) {

            if (oldItemsTable[key] === undefined) {
                this.addItem(this.__makeNewItem(), key);
            } else {
                this.__itemsTable[key] = oldItemsTable[key];
                delete oldItemsTable[key];
            }

            this.__itemsTable[key].applyData(itemNode);
        }
    }
};

/**
 * @private
 * @param {Object.<*, tuna.tmpl.units.Template>} itemsTable
 */
tuna.tmpl.units.List.prototype.__removeItems = function(itemsTable) {
    for (var key in itemsTable) {
        itemsTable[key].remove();
        delete itemsTable[key];
    }
};

/**
 * @return {tuna.tmpl.units.Template}
 */
tuna.tmpl.units.List.prototype.__makeNewItem = function() {
    var renderer = this.__itemRenderer.cloneNode(true);

    if (renderer !== null) {
        var rootTemplate = this.getRootTemplate();
        var template = this.__templateCompiler.compileTemplate
            (this.__itemSettings, renderer, rootTemplate);

        this.__listNodeRouter.append(renderer);

        rootTemplate.registerChildCreation(renderer);

        return template;
    }

    return null;
};

/**
 * @override
 */
tuna.tmpl.units.List.prototype.destroy = function() {
    for (var key in this.__itemsTable) {
        this.__itemsTable[key].destroy();
        this.__itemsTable[key] = null;
    }

    this.__templateCompiler = null;
    this.__itemRenderer = null;
    this.__itemSettings = null;
    this.__pathEvaluator = null;
    this.__keyPathEvaluator = null;
    this.__listNodeRouter = null;
    this.__itemsTable = null;
};

/**
 * @override
 */
tuna.tmpl.units.List.prototype.remove = function() {
    this.__removeItems(this.__itemsTable);

    this.__templateCompiler = null;
    this.__itemRenderer = null;
    this.__itemSettings = null;
    this.__pathEvaluator = null;
    this.__keyPathEvaluator = null;
    this.__listNodeRouter = null;
    this.__itemsTable = null;
};