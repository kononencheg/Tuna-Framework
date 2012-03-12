
/**
 * @interface
 */
var IResource = function() {};

/**
 * @param {Object} data
 */
IResource.prototype.set = function(data) {};

/**
 * @return {Object}
 */
IResource.prototype.get = function() {};

/**
 *
 */
IResource.prototype.clear = function() {};

/**
 * @interface
 * @extends {IResource}
 */
tuna.model.IResource = IResource;