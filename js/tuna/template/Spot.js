/**
 * TUNA FRAMEWORK
 * 
 * @file Spot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Logical data spot.
 * 
 * Keeps single node selection rule and path to fetch data from data-set.
 */
tuna.template.Spot = function() {
	/**
	 * Class name.
	 * 
	 * @private
	 * @type {string}
	 */
	this.__className = null;
	
	/**
	 * Data path.
	 * 
	 * @private
	 * @type {string}
	 */
	this.__path = null;
};

/**
 * Set elements class attribute value.
 * 
 * @public
 * @param {string} className Elements class name.
 */
tuna.template.Spot.prototype.setClassName = function(className) {
	this.__className = className;
};

/**
 * Get elements class name.
 * 
 * @public
 * @return {string} Elements class name.
 */
tuna.template.Spot.prototype.getClassName = function() {
	return this.__className;
};

/**
 * Set data path to fetch data from data-set.
 * 
 * @public
 * @param {string} path Path value.
 */
tuna.template.Spot.prototype.setPath = function(path) {
	this.__path = path;
};


/**
 * Get data path.
 * 
 * @public
 * @return {string} Data path.
 */
tuna.template.Spot.prototype.getPath = function() {
	return this.__path;
};