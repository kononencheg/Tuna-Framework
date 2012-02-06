/**
 * @interface
 */
var IMethodFactory = function() {};

/**
 * @param {string} name
 * @return {tuna.rest.IMethod}
 */
IMethodFactory.prototype.createMethod = function(name) {};

/**
 * @interface
 * @extends {IMethodFactory}
 */
tuna.rest.IMethodFactory = IMethodFactory;