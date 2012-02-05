/**
 * @interface
 */
var ISelectionView = function() {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.disableItemAt = function(index) {};

/**
 * @param {string|number} index
 */
ISelectionView.prototype.enableItemAt = function(index) {};

/**
 *
 */
ISelectionView.prototype.update = function() {};

/**
 * @interface
 * @extends {ISelectionView}
 */
tuna.ui.selection.view.ISelectionView = ISelectionView;