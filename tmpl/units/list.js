/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var List = function(root) {
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

tuna.utils.extend(List, tuna.tmpl.units.CompiledUnit);

/**
 * @param {tuna.tmpl.units.IListItemRouter} router
 */
List.prototype.setListNodeRouter = function(router) {
    this.__listNodeRouter = router;
};

/**
 * @param {string} path
 */
List.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {string} path
 */
List.prototype.setKeyPath = function(path) {
    this.__keyPathEvaluator.setPath(path);
};

/**
 * @param {tuna.tmpl.compilers.TemplateCompiler} compiler
 */
List.prototype.setCompiler = function(compiler) {
    this.__templateCompiler = compiler;
};

/**
 * @param {Node} element
 */
List.prototype.setItemRenderer = function(element) {
    this.__itemRenderer = element;
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
List.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};

/**
 * @param {tuna.tmpl.units.Template} compiledItem
 * @param {*} key
 */
List.prototype.addItem = function(compiledItem, key) {
    this.__itemsTable[key] = compiledItem;
};

/**
 * @override
 */
List.prototype.applyData = function(dataNode) {
    var sampleNode = this.__pathEvaluator.evaluate(dataNode);
    if (sampleNode !== null) {
        var sample = sampleNode.getValue();
        var oldItemsTable = this.__itemsTable;

        this.__itemsTable = {};
        for (var index in sample) {
            this.__updateItem(sampleNode.growChild(index), oldItemsTable);
        }

        this.__destroyItems(oldItemsTable);
    } else {
        this.__destroyItems(this.__itemsTable);
    }
};

/**
 * @override
 */
List.prototype.destroy = function() {
    this.__destroyItems(this.__itemsTable);
};

/**
 * @private
 * @param {tuna.tmpl.data.DataNode} itemNode
 * @param {Object.<*, tuna.tmpl.units.Template>} oldItemsTable
 */
List.prototype.__updateItem = function(itemNode, oldItemsTable) {
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
List.prototype.__destroyItems = function(itemsTable) {
    for (var key in itemsTable) {
        itemsTable[key].destroy(true);
        delete itemsTable[key];
    }
};

/**
 * @return {tuna.tmpl.units.Template}
 */
List.prototype.__makeNewItem = function() {
    var itemElement = this.__itemRenderer.cloneNode(true);

    var rootTemplate = this.getRootTemplate();
    var template = this.__templateCompiler.compileTemplate
        (this.__itemSettings, itemElement, rootTemplate);

    this.__listNodeRouter.append(itemElement);

    rootTemplate.registerChildCreation(itemElement);

    return template;
};

/**
 * @override
 */
List.prototype.destroy = function(isHard) {
    for (var key in this.__itemsTable) {
        this.__itemsTable[key].destroy(isHard);
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
 * @constructor
 * @extends {List}
 */
tuna.tmpl.units.List = List;
