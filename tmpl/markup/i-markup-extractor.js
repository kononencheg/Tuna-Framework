/**
 * @interface
 */
tuna.tmpl.markup.IMarkupExtractor = function() {};

/**
 * @param {Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
tuna.tmpl.markup.IMarkupExtractor.prototype.extract =
  function(element, settings) {};
