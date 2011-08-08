/**
 * TUNA FRAMEWORK
 * 
 * @file ITemplateFactory.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Template factory interface.
 * 
 * @interface
 */
tuna.template.ITemplateFactory = function() {};

/**
 * Factory method.
 * 
 * @public
 * @return {tuna.template.Template} New template.
 */
tuna.template.ITemplateFactory.prototype.makeTemplate = function() {};