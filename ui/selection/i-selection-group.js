/**
 * @interface
 */
tuna.ui.selection.ISelectionGroup = function() {};

/**
 * @return {Array.<string|number>}
 */
tuna.ui.selection.ISelectionGroup.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 * @return {boolean}
 */
tuna.ui.selection.ISelectionGroup.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
tuna.ui.selection.ISelectionGroup.prototype.isSelected = function(index) {};

/**
 *
 */
tuna.ui.selection.ISelectionGroup.prototype.clearSelection = function() {};

/**
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
tuna.ui.selection.ISelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {};

/**
 * @param {!(string|number)} index
 * @return boolean
 */
tuna.ui.selection.ISelectionGroup.prototype.isIndexEnabled = function(index) {};

/**
 * @param {Node} item
 * @return {?(string|number)}
 */
tuna.ui.selection.ISelectionGroup.prototype.getItemIndex = function(item) {};

/**
 * @param {string|number} index
 * @return {Node}
 */
tuna.ui.selection.ISelectionGroup.prototype.getItemAt = function(index) {};

/**
 * @param {function((string|number), Node)} callback
 */
tuna.ui.selection.ISelectionGroup.prototype.mapItems = function(callback) {};

/**
 *
 */
tuna.ui.selection.ISelectionGroup.prototype.updateView = function() {};

