/**
 * @interface
 */
var ITransformer = function() {};

/**
 * @param {Object} data
 */
ITransformer.prototype.applyTransform = function(data) {};

/**
 * @param {tuna.tmpl.ITransformHandler} handler
 */
ITransformer.prototype.setTransformHandler = function(handler) {};

/**
 *
 */
ITransformer.prototype.destroy = function() {};

/**
 * @interface
 * @extends {ITransformer}
 */
tuna.tmpl.ITransformer = ITransformer;
