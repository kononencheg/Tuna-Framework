/**
 * @interface
 */
var IMarkupExtractor = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
IMarkupExtractor.prototype.extract = function(element, settings) {};

/**
 * @interface
 * @extends {IMarkupExtractor}
 */
tuna.tmpl.markup.IMarkupExtractor = IMarkupExtractor;