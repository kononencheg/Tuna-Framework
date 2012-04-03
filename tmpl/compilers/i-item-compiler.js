


/**
 * Интерфейс класс
 *
 * @interface
 */
tuna.tmpl.compilers.IItemCompiler = function() {};


/**
 * @param {!Node} element
 * @param {!tuna.tmpl.settings.TemplateSettings} settings
 * @param {!tuna.tmpl.units.Template} template
 */
tuna.tmpl.compilers.IItemCompiler.prototype.compile =
    function(element, settings, template) {};

