/**
 * TUNA FRAMEWORK
 * 
 * @file Template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	
	tuna.include('tuna.tmpl.Spot');
}

/**
 * Template data class.
 * 
 * Save data that describe rules to transform data into appropriate view.
 * 
 * @public
 * @class
 * 
 * @constructor
 */
tuna.tmpl.Template = function() {
	
	/**
	 * Spots array.
	 * 
	 * @private
	 * @type {Array.<tuna.tmpl.__Spot>}
	 */
	this.__spots = [];
	
	this.__lists = [];
};



tuna.tmpl.Template.prototype.addList = function(list) {
	this.__lists.push(list);
};

tuna.tmpl.Template.prototype.getListAt = function(i) {
	return this.__lists[i];
};

tuna.tmpl.Template.prototype.getListsCount = function() {
	return this.__lists.length;
};

/**
 * Adding spot data.
 * 
 * @param {tuna.tmpl.Spot} spot Spot data.
 */
tuna.tmpl.Template.prototype.addSpot = function(spot) {
	this.__spots.push(spot);
};

/**
 * Return spot with index.
 * 
 * @param {number} i Spot index.
 * @return {tuna.tmpl.Spot} Spot at index.
 */
tuna.tmpl.Template.prototype.getSpotAt = function(i) {
	return this.__spots[i];
};

/**
 * Return spots count.
 * 
 * @return {number} Spots count.
 */
tuna.tmpl.Template.prototype.getSpotsCount = function() {
	return this.__spots.length;
};