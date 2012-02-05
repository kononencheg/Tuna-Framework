/**
 * @interface
 */
var IItemsCollection = function() {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.addItem = function(item) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
IItemsCollection.prototype.getItemIndex = function(item) {};

/**
* @param {string|number} index
* @return {Node}
*/
IItemsCollection.prototype.getItemAt = function(index) {};

/**
* @param {function((string|number), Node)} callback
*/
IItemsCollection.prototype.mapItems = function(callback) {};

/**
 *
 */
IItemsCollection.prototype.clear = function() {};


/**
 * @interface
 * @extends {IItemsCollection}
 */
tuna.ui.selection.items.IItemsCollection = IItemsCollection;