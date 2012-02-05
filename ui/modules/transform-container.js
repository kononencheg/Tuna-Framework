/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var TransformContainerModule = function() {
    tuna.ui.Module.call(this, '.j-transform-container');

    /**
     * @private
     * @type tuna.tmpl.markup.MarkupTemplateBuilder
     */
    this.__templateBuilder
        = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

    /**
     * @private
     * @type tuna.tmpl.compilers.TemplateCompiler
     */
    this.__templateCompiler 
        = new tuna.tmpl.compilers.TemplateCompiler(document);

    /**
     * @private
     * @type Object.<string, tuna.tmpl.settings.TemplateSettings>
     */
    this.__templatesTable = {};
};

tuna.utils.extend(TransformContainerModule, tuna.ui.Module);

/**
 * @override
 */
TransformContainerModule.prototype._findTargets = function(context) {
    return tuna.dom.select(this._selector, context);
};

/**
 * @private
 * @param {string} id
 */
TransformContainerModule.prototype.__getTemplate = function(id) {
    if (this.__templatesTable[id] === undefined) {
        this.__templatesTable[id]
            = this.__templateBuilder.buildSettings(id);
    }

    return this.__templatesTable[id];
};

TransformContainerModule.prototype.initInstance = function(target, parent) {

    var container = new tuna.ui.containers.TransformContainer(target);
    var templateID = container.getOption('template-id');

    var template = this.__getTemplate(templateID);
    if (template !== null) {
        var transformer
            = this.__templateCompiler.makeTransformer(template, target);

        container.setTransformer(transformer);
    }


    return container;
};

tuna.ui.modules.register('transform-container', new TransformContainerModule());
tuna.ui.modules.addIsolator('j-transform-container');

