/**
 * TUNA FRAMEWORK
 * 
 * @file CompiledList.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	
	tuma.include("tuna.tmpl.ICompiledUnit");
	tuma.include("tuna.tmpl.PathEvaluator");
}

tuna.tmpl.__CompiledList = function() {	
	this.__compiler = null;

	this.__itemRenderer = null;
	this.__itemTemplate = null;
	
	this.__itemsTable = {};
	this.__pathEvaluator = new tuna.tmpl.PathEvaluator();
	this.__keyPathEvaluator = new tuna.tmpl.PathEvaluator();
	
	this.__listNodeRouter = null;
};

tuna.implement(tuna.tmpl.__CompiledList, tuna.tmpl.__ICompiledUnit);

tuna.tmpl.__CompiledList.prototype.setListNodeRouter = function(router) {
	this.__listNodeRouter = router;
};

tuna.tmpl.__CompiledList.prototype.setPath = function(path) {
	this.__pathEvaluator.setPath(path);
};

tuna.tmpl.__CompiledList.prototype.setKeyPath = function(path) {
	this.__keyPathEvaluator.setPath(path);
};

tuna.tmpl.__CompiledList.prototype.setCompiler = function(compiler) {
	this.__compiler = compiler;
};

tuna.tmpl.__CompiledList.prototype.setItemRenderer = function(element) {
	this.__itemRenderer = element.cloneNode(true);
	this.__itemRenderer.removeAttribute('id');
};

tuna.tmpl.__CompiledList.prototype.setItemTemplate = function(template) {
	this.__itemTemplate = template;
};

tuna.tmpl.__CompiledList.prototype.addCompiledItem
	= function(compiledItem, key) {
	
	this.__itemsTable[key] = compiledItem;
};

tuna.tmpl.__CompiledList.prototype.applyData = function(dataNode) {
	var sampleNode = this.__pathEvaluator.evaluate(dataNode);
	if (sampleNode !== undefined) {
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

tuna.tmpl.__CompiledList.prototype.destroy = function() {
	this.__destroyItems(this.__itemsTable);
};

tuna.tmpl.__CompiledList.prototype.__updateItem 
	= function(itemNode, oldItemsTable) {
	
	var key = this.__keyPathEvaluator.evaluate(itemNode).getValue();
	
	if (oldItemsTable[key] === undefined) {
		this.addCompiledItem(this.__makeNewItem(key), key);
	} else {
		this.__itemsTable[key] = oldItemsTable[key];
		delete oldItemsTable[key];
	}
	
	this.__itemsTable[key].applyData(itemNode);
};

tuna.tmpl.__CompiledList.prototype.__destroyItems = function(itemsTable) {
	for (var key in itemsTable) {
		itemsTable[key].destroy();
		
		delete itemsTable[key];
	}
};

tuna.tmpl.__CompiledList.prototype.__makeNewItem = function(key) {
	var itemElement = this.__itemRenderer.cloneNode(true);	
	this.__listNodeRouter.append(itemElement);
	
	return this.__compiler.compileTemplate(this.__itemTemplate, itemElement);
};


///////////////////////////////////////////////////////////////////////////////

tuna.tmpl.__IListItemRouter = function() {};
tuna.tmpl.__IListItemRouter.prototype.append = function(node) {};

///////////////////////////////////////////////////////////////////////////////

tuna.tmpl.__ListContainerRouter = function(containerNode) {
	this._container = containerNode;
};

tuna.implement(tuna.tmpl.__ListContainerRouter, tuna.tmpl.__IListItemRouter);

tuna.tmpl.__ListContainerRouter.prototype.append = function(node) {
	this._container.appendChild(node);
};