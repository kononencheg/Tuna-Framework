/**
 * @interface
 */
var IItemCompiler = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {tuna.tmpl.units.Template} template
 */
IItemCompiler.prototype.compile = function(element, settings, template) {};

/**
 * @interface
 * @extends {IItemCompiler}
 */
tuna.tmpl.compilers.IItemCompiler = IItemCompiler;
