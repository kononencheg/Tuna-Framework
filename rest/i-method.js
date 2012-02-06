/**
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
var IMethod = function() {};

/**
 * @param {Object} args
 */
IMethod.prototype.call = function(args) {};

/**
 * @return {tuna.rest.IMethod}
 */
IMethod.prototype.clone = function() {};

/**
 * @interface
 * @extends {IMethod}
 */
tuna.rest.IMethod = IMethod;

