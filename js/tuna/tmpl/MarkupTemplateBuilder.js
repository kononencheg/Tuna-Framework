/**
 * TUNA FRAMEWORK
 * 
 * @file MarkupTemplateBuilder.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");

	tuna.include('tuna.tmpl.TemplateTransformer');
	tuna.include('tuna.tmpl.Spot');
	tuna.include('tuna.tmpl.List');
	tuna.include('tuna.tmpl.Template');
}

/**
 * Template transformer compiler from markup source.
 * 
 * TODO: Template origin in iframe (set current and origin document).
 * 
 * @public
 * @class 
 * @constructor
 */
tuna.tmpl.MarkupTemplateBuilder = function() {
	this.__templatesTable = {};
};
			
/**
 * Build template from markup.
 * 
 * @param {Element} markupNode Element with markup inside.
 */
tuna.tmpl.MarkupTemplateBuilder.prototype.buildTemplate = function(templateID) {
	
	var templateNode = document.getElementById(templateID);
	var template = this.__templatesTable[templateID] 
					= new tuna.tmpl.Template();
	
	this.__extractSpots(templateNode.getElementsByTagName('tuna:spot'), template);
	this.__extractLists(templateNode.getElementsByTagName('tuna:list'), template);
		
	return template;
};

tuna.tmpl.MarkupTemplateBuilder.prototype.__extractSpots 
	= function(spotNodes, template) {
	
	var i = 0,
		l = spotNodes.length;
	
	var spot = null;
	while (i < l) {
		spot = new tuna.tmpl.Spot();
		
		this.__nodeToSpot(spotNodes.item(i), spot);
		
		template.addSpot(spot);
		
		i++;
	}
};

tuna.tmpl.MarkupTemplateBuilder.prototype.__extractLists 
	= function(listNodes, template) {
	
	var i = 0,
		l = listNodes.length;

	var list = null;
	var listNode = null;
	while (i < l) {
		list = new tuna.tmpl.List();
		listNode = listNodes.item(i);
		
		this.__nodeToSpot(listNode, list);
		this.__nodeToList(listNode, list);
		
		template.addList(list);
		
		i++;
	}
};

tuna.tmpl.MarkupTemplateBuilder.prototype.__nodeToSpot = function(node, spot) {
	spot.setTargetClass(node.getAttribute('tuna:class'));
	spot.setDataPath(node.getAttribute('tuna:path'));
};

tuna.tmpl.MarkupTemplateBuilder.prototype.__nodeToList = function(node, list) {		
	list.setItemRendererID(node.getAttribute('tuna:item-renderer-id'));
	list.setItemKeyDataPath(node.getAttribute('tuna:key-path'));
	
	var templateID = node.getAttribute('tuna:item-template-id');
	
	var template = this.__templatesTable[templateID];
	if (!template) {
		template = this.buildTemplate(templateID);
	}
	
	list.setItemTemplate(template);
};
