/**
 * TUNA FRAMEWORK
 * 
 * @file TemplateCompiler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */


if (!COMPILED) {
	tuna.namespace("tuna.tmpl");

	tuna.include('tuna.dom');
	tuna.include('tuna.tmpl.ITemplateCompiler');
	tuna.include('tuna.tmpl.PathEvaluator');
}

/**
 * @public
 * @class
 * @implements {tuna.tmpl.ITemplateCompiler}
 * 
 * @constructor
 */
tuna.tmpl.TemplateCompiler = function() {};

tuna.implement(tuna.tmpl.TemplateCompiler, tuna.tmpl.ITemplateCompiler);

/**
 * Compiling template with target DOM element.
 * 
 * TODO: Extract list and templates nodes to prevent class names collisions
 * 
 * @param {tuna.tmpl.Template} template Template to compile.
 * @param {Element} element Target DOM element.
 * @return {tuna.tmpl.TemplateTransformer} New template transformer.
 */
tuna.tmpl.TemplateCompiler.prototype.makeTransformer = function(template, element) {
	var transformer = new tuna.tmpl.TemplateTransformer();
	transformer.setTargetElement(element);
	transformer.setCore(this.compileTemplate(template, element));
	
	return transformer;
};

tuna.tmpl.TemplateCompiler.prototype.compileTemplate 
	= function(template, element) {
	
	var compiledList = new tuna.tmpl.__CompiledTemplate();
	compiledList.setTarget(element);
		
	var i = template.getSpotsCount() - 1;
	while (i >= 0) {
		compiledList.addSpot(this.__compileSpot(template.getSpotAt(i), element));
		
		i--;
	}
		
	var list = null;
	
	i = template.getListsCount() - 1;
	while (i >= 0) {
		list = template.getListAt(i);
		
		if (tuna.dom.hasClass(element, list.getTargetClass())) {
			compiledList.addList(this.__compileList(list, element));
		} else {
			this.__handleListNodes(element, list, compiledList);
		}
		
		i--;
	}
	
	return compiledList;
};

tuna.tmpl.TemplateCompiler.prototype.__compileSpot = function(spot, element) {
	var result = new tuna.tmpl.__CompiledSpot();
	result.setPath(spot.getDataPath());
	
	var targetClass = spot.getTargetClass();
	if (tuna.dom.hasClass(element, targetClass)) {
		result.addTargets(element);
	} else {
		var spotNodes = element.getElementsByClassName(targetClass);
		result.addTargets(tuna.toArray(spotNodes));
	}
	
	return result;
};

tuna.tmpl.TemplateCompiler.prototype.__handleListNodes 
	= function(element, list, compiledList) {
	
	var targetClass = list.getTargetClass();
	var listNodes = tuna.toArray(element.getElementsByClassName(targetClass));
	
	//this.__clearSubLists(listNodes, targetClass);
	
	var i = listNodes.length - 1;
	while (i >= 0) {
		compiledList.addList(this.__compileList(list, listNodes[i]));
		
		i--;
	}
};

tuna.tmpl.TemplateCompiler.prototype.__clearSubLists = function(nodes, className) {
	var i = 0, 
		l = nodes.length;
	
	var j = null;
	var node = null;
	var subNodes = null;
	while (i < l) {
		node = nodes[i];
		subNodes = node.getElementsByClassName(className);
		
		j = subNodes.length - 1;
		while (j >= 0) {
			
			
			j--;
		}
		
		i++;
	}
};

tuna.tmpl.TemplateCompiler.prototype.__compileList = function(list, element) {
	var result = new tuna.tmpl.__CompiledList();
	result.setCompiler(this);
	result.setItemRenderer(document.getElementById(list.getItemRendererID()));
	result.setItemTemplate(list.getItemTemplate());
	result.setKeyPath(list.getItemKeyDataPath());
	result.setPath(list.getDataPath());
		
	this.__resurrectNodesInside(element, list, result);
	
	return result;
};

tuna.tmpl.TemplateCompiler.prototype.__resurrectNodesInside 
	= function(element, list, compiledList) {
	
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
	
	compiledList.setListNodeRouter
		(new tuna.tmpl.__ListContainerRouter(element));
};

tuna.tmpl.TemplateCompiler.prototype.__resurrectNode 
	= function(node, list, compiledList) {
	
	var key = this.__getItemKey(node.className, list.getTargetClass());
	
	if (key) {
		compiledList.addCompiledItem
			(this.compileTemplate(list.getItemTemplate(), node), key);
	}
	
	return key;
};

tuna.tmpl.TemplateCompiler.prototype.__getItemKey 
	= function(itemClass, targetClass) {
	
	var result = null;
	
	var keyPart = itemClass.split(targetClass + ':')[1];
	if (keyPart) {
		result = keyPart.split(' ')[0];
	}

	return result;
};