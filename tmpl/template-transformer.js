/**
 * @constructor
 * @implements {tuna.tmpl.ITransformer}
 */
var TemplateTransformer = function() {

    /**
     * @private
     * @type {tuna.tmpl.units.Template}
     */
    this.__coreTemplate = null;

    /**
     * @private
     * @type {Node}
     */
    this.__target = null;

    /**
     * @private
     * @type {tuna.tmpl.ITransformHandler}
     */
    this.__transformHandler = null;
};

tuna.utils.implement(TemplateTransformer, tuna.tmpl.ITransformer);

/**
 * @param {Object} data Data to transform.
 */
TemplateTransformer.prototype.applyTransform = function(data) {
    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformStart(this.__target);
    }

    this.__coreTemplate.applyData(new tuna.tmpl.data.DataNode(data));

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleTransformComplete(
            this.__target,
            this.__coreTemplate.fetchCreatedChildren(),
            this.__coreTemplate.fetchRemovedChildren()
        );
    }
};

/**
 * @param {tuna.tmpl.units.Template} template
 */
TemplateTransformer.prototype.setCoreTemplate = function(template) {
    this.__coreTemplate = template;
};

/**
 * @param {Node} element
 */
TemplateTransformer.prototype.setTargetElement = function(element) {
    this.__target = element;
};

/**
 * @param {tuna.tmpl.ITransformHandler} handler
 */
TemplateTransformer.prototype.setTransformHandler = function(handler) {
    this.__transformHandler = handler;
};

/**
 *
 */
TemplateTransformer.prototype.destroy = function() {
    this.__coreTemplate.destroy();

    if (this.__transformHandler !== null) {
        this.__transformHandler.handleDestroy(
            this.__target,
            this.__coreTemplate.fetchRemovedChildren()
        );
    }

    this.__coreTemplate = null;
    this.__target = null;
    this.__transformHandler = null;
};

/**
 * @constructor
 * @extends {TemplateTransformer}
 */
tuna.tmpl.TemplateTransformer = TemplateTransformer;
