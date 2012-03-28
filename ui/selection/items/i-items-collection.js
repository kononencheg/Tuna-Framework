/**
 * @interface
 */
tuna.ui.selection.items.IItemsCollection = function() {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
tuna.ui.selection.items.IItemsCollection.prototype.addItem = function(item) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
tuna.ui.selection.items.IItemsCollection.prototype.getItemIndex
    = function(item) {};

/**
* @param {string|number} index
* @return {?Node}
*/
tuna.ui.selection.items.IItemsCollection.prototype.getItemAt
    = function(index) {};

/**
* @param {function((string|number), Node)} callback
*/
tuna.ui.selection.items.IItemsCollection.prototype.mapItems
    = function(callback) {};

/**
 *
 */
tuna.ui.selection.items.IItemsCollection.prototype.clear = function() {};

/**
 * @return number
 */
tuna.ui.selection.items.IItemsCollection.prototype.getItemsCount
    = function() {};
