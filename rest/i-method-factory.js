/**
 *
 * 
 * @interface
 */
tuna.rest.IMethodFactory = function() {};

/**
 * @param {string} name
 * @return {tuna.rest.IMethod}
 */
tuna.rest.IMethodFactory.prototype.createMethod = function(name) {};