/**
 * TUNA FRAMEWORK
 * 
 * @file ITransformer.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.transform");
}

/**
 * Data to view transformer interface.
 * 
 * @public
 * @interface
 */
tuna.transform.ITransformer = function() {};

/**
 * Transform method.
 *
 * @public
 * @param {*} data Data to transform.
 * @return {Element|string} Transform result.
 */
tuna.transform.ITransformer.prototype.applyTransform = function(data) {};

