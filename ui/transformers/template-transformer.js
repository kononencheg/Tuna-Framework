/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @implements {tuna.ui.transformers.ITransformer}
 * @param {!Node} target
 */
var TemplateTransformer = function (target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {tuna.tmpl.units.Template}
     */
    this.__template = null;


    /**
     * @private
     * @type {tuna.ui.transformers.ITransformHandler}
     */
    this.__transformHandler = null;
};

tuna.utils.extend(TemplateTransformer, tuna.ui.ModuleInstance);
tuna.utils.implement(TemplateTransformer, tuna.ui.transformers.ITransformer);

/**
 * @override
 */
TemplateTransformer.prototype.init = function() {
    var templateId = this.getOption('template-id');

    var settings = tuna.tmpl.getTemplateSettingsById(templateId);
    if (settings !== null) {
        this.__template = tuna.tmpl.compile(this._target, settings);
    } else {
        alert("Unknown template " + templateId);
    }
};

/**
 * @override
 */
TemplateTransformer.prototype.setTransformHandler = function(handler) {
    this.__transformHandler = handler;
};

/**
 * @override
 */
TemplateTransformer.prototype.applyTransform = function(data) {
    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformStart(this._target);
    }

    this.__template.applyData(new tuna.tmpl.data.DataNode(data));

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformComplete(
            this._target,
            this.__template.fetchCreatedChildren(),
            this.__template.fetchRemovedChildren()
        );
    }
};

/**
 * @override
 */
TemplateTransformer.prototype.destroy = function() {
    this.__template.destroy();

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleDestroy
            (this._target, this.__template.fetchRemovedChildren());
    }

    this._target = null;
    this.__template = null;
    this.__transformHandler = null;
};

/**
 * @constructor
 * @extends {TemplateTransformer}
 */
tuna.ui.transformers.TemplateTransformer = TemplateTransformer;