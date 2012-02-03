/**
 * TUNA FRAMEWORK
 * 
 * @file template-compiler.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {


    /**
     * @public
     * @class
     *
     * @constructor
     */
    var TemplateCompiler = function(doc) {
        this.__doc = doc;

        this.__itemCompilers = [];

        this.__registerItemCompilers();
    };

    TemplateCompiler.prototype.__registerItemCompilers = function() {
        this.__itemCompilers.push(new tuna.tmpl.compilers.SpotCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compilers.AttributeCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compilers.ConditionCompiler());
        this.__itemCompilers.push(new tuna.tmpl.compilers.ListCompiler(this.__doc, this));
    };

    /**
     * Compiling template with target DOM element.
     *
     * @param {tuna.tmpl.settings.Template} template Template to compilers.
     * @param {Element} element Target DOM element.
     * @return {tuna.tmpl.ITransformer} New template transformer.
     */
    TemplateCompiler.prototype.makeTransformer
        = function(templateSettings, element) {

        var transformer = new tuna.tmpl.TemplateTransformer();
        transformer.setTargetElement(element);
        transformer.setCore(this.compileTemplate(templateSettings, element));

        return transformer;
    };

    TemplateCompiler.prototype.compileTemplate = function(settings, element, root) {
        var template = new tuna.tmpl.units.Template(root);
        template.setTarget(element);

        var i = 0,
            l = this.__itemCompilers.length;

        while (i < l) {
            this.__itemCompilers[i].compile(element, settings, template);
            i++;
        }

        return template;
    };

    tuna.tmpl.compilers.TemplateCompiler = TemplateCompiler;

})();
