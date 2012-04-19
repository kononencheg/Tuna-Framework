


/**
 * @interface
 */
tuna.ui.transformers.ITransformHandler = function() {};


/**
 * @param {!tuna.ui.transformers.ITransformer} transformer
 */
tuna.ui.transformers.ITransformHandler.prototype.handleTransformStart
    = function(transformer) {};


/**
 * @param {!tuna.ui.transformers.ITransformer} transformer
 * @param {!Array.<!Node>} createdElements
 * @param {!Array.<!Node>} removedElements
 */
tuna.ui.transformers.ITransformHandler.prototype.handleTransformComplete
    = function(transformer, createdElements, removedElements) {};
