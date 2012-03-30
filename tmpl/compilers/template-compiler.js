/**
 * @constructor
 */
var TemplateCompiler = function() {
    /**
     * @private
     * @type Array.<tuna.tmpl.compilers.IItemCompiler>
     */
    this.__itemCompilers = [];

    this.__registerItemCompilers();
};

/**
 * @private
 */
TemplateCompiler.prototype.__registerItemCompilers = function() {
    this.__itemCompilers.push(new tuna.tmpl.compilers.SpotCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.CheckboxCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.AttributeCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.ConditionCompiler());
    this.__itemCompilers.push(new tuna.tmpl.compilers.ListCompiler(this));
};

/**
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @param {!Node} element
 * @param {tuna.tmpl.units.Template} root
 * @return {tuna.tmpl.units.Template}
 */
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

/**
 * @constructor
 * @extends {TemplateCompiler}
 */
tuna.tmpl.compilers.TemplateCompiler = TemplateCompiler;
