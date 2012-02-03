/**
 * TUNA FRAMEWORK
 * 
 * @file template-transformer.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    /**
     * Template transformer binded to concrete HTML element.
     *
     * @public
     * @class
     * @implements {tuna.transform.ITransformer}
     *
     * @constructor
     */
    var TemplateTransformer = function() {

        /**
         * Compiled template.
         *
         * @private
         * @type {tuna.tmpl.units.Template}
         */
        this.__core = null;

        /**
         * Transform target.
         *
         * @private
         * @type {Element}
         */
        this.__target = null

        /**
         * @private
         * @type {tuna.tmpl.ITransformHandler}
         */
        this.__transformHandler = null;
    };

    tuna.utils.implement(TemplateTransformer, tuna.tmpl.ITransformer);

    /**
     * Transform method.
     *
     * @public
     * @param {*} data Data to transform.
     */
    TemplateTransformer.prototype.applyTransform = function(data) {
        if (this.__transformHandler !== null) {
            this.__transformHandler.handleTransformStart(this.__target);
        }

        this.__core.applyData(new tuna.tmpl.data.DataNode(data));

        if (this.__transformHandler !== null) {
            this.__transformHandler.handleTransformComplete(
                this.__target,
                this.__core.fetchCreatedChildren(),
                this.__core.fetchRemovedChildren()
            );
        }
    };

    TemplateTransformer.prototype.setCore = function(compiledTemplate) {
        this.__core = compiledTemplate;
    };


    TemplateTransformer.prototype.setTargetElement = function(element) {
        this.__target = element;
    };


    TemplateTransformer.prototype.setTransformHandler = function(handler) {
        this.__transformHandler = handler;
    };

    TemplateTransformer.prototype.destroy = function() {
        this.__core.destroy();

        if (this.__transformHandler !== null) {
            this.__transformHandler.handleDestroy(
                this.__target,
                this.__core.fetchRemovedChildren()
            );
        }

        this.__core = null;
        this.__target = null;
        this.__transformHandler = null;
    };


    tuna.tmpl.TemplateTransformer = TemplateTransformer;
    
})();