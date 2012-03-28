/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @implements tuna.ui.transformers.ITransformer
 * @param {!Node} target
 */
tuna.ui.transformers.TemplateTransformer = function (target) {
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

tuna.utils.extend
    (tuna.ui.transformers.TemplateTransformer, tuna.ui.ModuleInstance);


/**
 * @override
 */
tuna.ui.transformers.TemplateTransformer.prototype.init = function() {
    var templateId = this.getStringOption('template-id');

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
tuna.ui.transformers.TemplateTransformer.prototype.setTransformHandler
    = function(handler) {

    this.__transformHandler = handler;
};

/**
 * @override
 */
tuna.ui.transformers.TemplateTransformer.prototype.applyTransform
    = function(data) {

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformStart(this);
    }

    this.__template.applyData(new tuna.tmpl.data.DataNode(data));

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformComplete(
            this,
            this.__template.fetchCreatedChildren(),
            this.__template.fetchRemovedChildren()
        );
    }
};

/**
 * @override
 */
tuna.ui.transformers.TemplateTransformer.prototype.destroy = function() {
    this.__template.destroy();
    this.__template = null;
    this.__transformHandler = null;
};

/**
 *
 */
tuna.ui.transformers.TemplateTransformer.prototype.reset = function() {
    var transformHandler = this.__transformHandler;

    this.destroy();
    this.init();

    this.__transformHandler = transformHandler;
};
