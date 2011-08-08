/**
 * TUNA FRAMEWORK
 * 
 * @file ITemplateCompiler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

/**
 * Template compiler classes interface. 
 * 
 * @public
 * @interface
 */
tuna.tmpl.ITemplateCompiler = function() {};

/**
 * Compiling method.
 * 
 * @param {string} templateName Template name to compile with.
 * @param {Element} targetElement Target DOM element.
 */
tuna.tmpl.ITemplateCompiler.prototype.compile 
	= function(templateName, targetElement) {};
