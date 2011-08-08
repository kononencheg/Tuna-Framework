/**
 * TUNA FRAMEWORK
 * 
 * @file Spot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

/**
 * Template spot data class.
 * 
 * Save nodes class name and appropriate data selection path.
 * 
 * @private
 * @class
 * 
 * @constructor
 */
tuna.tmpl.Spot = function() {
	/**
	 * Data nodes class name.
	 * 
	 * @private
	 * @type {string}
	 */
	this.__class = null;
	
	/**
	 * Data selection path.
	 * 
	 * @private
	 * @type {string}
	 */
	this.__path = null;
};

/**
 * Setting data nodes class name.
 * 
 * @public
 * @param {string} className Class name.
 */
tuna.tmpl.Spot.prototype.setTargetClass = function(className) {
	this.__class = className;
};

/**
 * Getting data nodes class name.
 * 
 * @public
 * @return {string} Class name.
 */
tuna.tmpl.Spot.prototype.getTargetClass = function() {
	return this.__class;
};

/**
 * Setting data selection path.
 * 
 * @public
 * @param {string} path Selection path.
 */
tuna.tmpl.Spot.prototype.setDataPath = function(path) {
	this.__path = path;
};

/**
 * Getting data selection path.
 * 
 * @public
 * @return {string} Selection path.
 */
tuna.tmpl.Spot.prototype.getDataPath = function() {
	return this.__path;
};