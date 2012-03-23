/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var TemplateTransformerModule = function() {
    tuna.ui.Module.call(this, 'template-transformer', '.j-template-transformer');
};

tuna.utils.extend(TemplateTransformerModule, tuna.ui.Module);

/**
 * @override
 */
TemplateTransformerModule.prototype.initInstance = function(target) {
    return new tuna.ui.transformers.TemplateTransformer(target);
};

tuna.ui.modules.templateTransformer = new TemplateTransformerModule();
