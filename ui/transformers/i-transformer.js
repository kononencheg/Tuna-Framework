/**
 * @interface
 */
var ITransformer = function() {};

/**
 * @param {Object} data
 */
ITransformer.prototype.applyTransform = function(data) {};

/**
 * @param {tuna.ui.transformers.ITransformHandler} handler
 */
ITransformer.prototype.setTransformHandler = function(handler) {};

/**
 * @interface
 * @extends {ITransformer}
 */
tuna.ui.transformers.ITransformer = ITransformer;
