/**
 * @interface
 */
tuna.ui.transformers.ITransformer = function() {};

/**
 * @param {Object} data
 */
tuna.ui.transformers.ITransformer.prototype.applyTransform
    = function(data) {};

/**
 * @param {tuna.ui.transformers.ITransformHandler} handler
 */
tuna.ui.transformers.ITransformer.prototype.setTransformHandler
    = function(handler) {};