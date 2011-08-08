/**
 * TUNA FRAMEWORK
 * 
 * @file TemplateTransformer.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");

	tuna.include('tuna.transform.ITransformer');
	tuna.include('tuna.transform.TemplateCompiler');
	tuna.include('tuna.transform.DataNode');
}

/**
 * Template transformer binded to concrete HTML element.
 * 
 * @public
 * @class
 * @implements {tuna.transform.ITransformer}
 * 
 * @constructor
 */
tuna.tmpl.TemplateTransformer = function() {
	
	/**
	 * Compiled template.
	 * 
	 * @private
	 * @type {tuna.tmpl.__CompiledTemplate}
	 */
	this.__core = null;

	/**
	 * Transform target.
	 *  
	 * @private
	 * @type {Element}
	 */
	this.__targetElement = null;
};

tuna.implement(tuna.tmpl.TemplateTransformer, tuna.transform.ITransformer);

/**
 * Transform method.
 *
 * @public
 * @param {*} data Data to transform.
 * @return {Element|string} Transform result.
 */
tuna.tmpl.TemplateTransformer.prototype.applyTransform = function(data) {
	var dataRoot = new tuna.tmpl.__DataNode(data);
	
	this.__core.applyData(dataRoot);
	
	return this.__targetElement;
};

tuna.tmpl.TemplateTransformer.prototype.setCore = function(compiledTemplate) {
	this.__core = compiledTemplate;
};


tuna.tmpl.TemplateTransformer.prototype.setTargetElement = function(element) {
	this.__targetElement = element;
};