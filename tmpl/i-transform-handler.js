/**
 * @interface
 */
var ITransformHandler = function() {};

/**
 * @param {Node} target
 */
ITransformHandler.prototype.handleTransformStart = function(target) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} createdElements
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {};

/**
 * @param {Node} target
 * @param {Array.<Node>} removedElements
 */
ITransformHandler.prototype.handleDestroy
    = function(target, removedElements) {};

/**
 * @interface
 * @extends {ITransformHandler}
 */
tuna.tmpl.ITransformHandler = ITransformHandler;
