/**
 * @constructor
 * @implements {tuna.ui.selection.view.ISelectionView}
 */
var AbstractSelectionView = function() {
    /**
     * @protected
     * @type tuna.ui.selection.items.IItemsCollection
     */
    this._itemsCollection = null;

    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;
};

tuna.utils.implement
    (AbstractSelectionView, tuna.ui.selection.view.ISelectionView);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionView.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
AbstractSelectionView.prototype.setItemsCollection = function(collection) {
    this._itemsCollection = collection;
};

/**
 * @override
 */
AbstractSelectionView.prototype.applySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.destroySelectionAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.disableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.enableItemAt = function(index) {};

/**
 * @override
 */
AbstractSelectionView.prototype.update = function() {};

/**
 * @constructor
 * @extends {AbstractSelectionView}
 */
tuna.ui.selection.view.AbstractSelectionView = AbstractSelectionView;