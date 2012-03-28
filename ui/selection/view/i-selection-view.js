/**
 * @interface
 */
tuna.ui.selection.view.ISelectionView = function() {};

/**
 * @param {string|number} index
 */
tuna.ui.selection.view.ISelectionView.prototype.applySelectionAt
    = function(index) {};

/**
 * @param {string|number} index
 */
tuna.ui.selection.view.ISelectionView.prototype.destroySelectionAt
    = function(index) {};

/**
 * @param {string|number} index
 */
tuna.ui.selection.view.ISelectionView.prototype.disableItemAt
    = function(index) {};

/**
 * @param {string|number} index
 */
tuna.ui.selection.view.ISelectionView.prototype.enableItemAt
    = function(index) {};

/**
 *
 */
tuna.ui.selection.view.ISelectionView.prototype.update = function() {};
