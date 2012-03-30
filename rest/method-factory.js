
/**
 * @constructor
 * @implements {tuna.rest.IMethodFactory}
 */
tuna.rest.MethodFactory = function() {
  /**
   * @private
   * @type Object.<string, tuna.rest.IMethod>
   */
  this.__methods = {};

  /**
   * @private
   * @type tuna.rest.IMethod
   */
  this.__defaultMethod = null;
};

/**
 * @param {tuna.rest.IMethod} method
 */
tuna.rest.MethodFactory.prototype.setDefaultMethod = function(method) {
  this.__defaultMethod = method;
};

/**
 * @override
 */
tuna.rest.MethodFactory.prototype.createMethod = function(name) {
  if (this.__methods[name] !== undefined) {
    return this.__methods[name].clone();
  } else if (this.__defaultMethod !== null) {
    return this.__defaultMethod.clone(name);
  }

  return null;
};

/**
 * @param {string} name
 * @param {tuna.rest.IMethod} method
 */
tuna.rest.MethodFactory.prototype.registerMethod = function(name, method) {
  this.__methods[name] = method;
};
