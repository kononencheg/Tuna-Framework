/**
 * @interface
 */
var ISelectionGroup = function() {};

/**
 * @return {Array.<string|number>}
 */
ISelectionGroup.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 * @return {boolean}
 */
ISelectionGroup.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionGroup.prototype.clearSelection = function() {};

/**
 *
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
ISelectionGroup.prototype.setIndexEnabled = function(index, isEnabled) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isIndexEnabled = function(index) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
ISelectionGroup.prototype.getItemIndex = function(item) {};

/**
 * @param {string|number} index
 * @return {Node}
 */
ISelectionGroup.prototype.getItemAt = function(index) {};

/**
 * @param {function((string|number), Node)} callback
 */
ISelectionGroup.prototype.mapItems = function(callback) {};

/**
 *
 */
ISelectionGroup.prototype.updateView = function() {};

/**
 * @interface
 * @extends {ISelectionGroup}
 */
tuna.ui.selection.ISelectionGroup = ISelectionGroup;
