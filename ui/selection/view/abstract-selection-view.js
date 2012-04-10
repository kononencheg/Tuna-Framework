/**
 * @constructor
 * @implements tuna.ui.selection.view.ISelectionView
 */
tuna.ui.selection.view.AbstractSelectionView = function() {

    /**
     * @protected
     * @type tuna.ui.selection.items.IItemsCollection
     */
    this._itemsCollection = null;

    /**
     * @protected
     * @type tuna.ui.selection.rule.ISelectionRule
     */
    this._selectionRule = null;
};

/**
 * @param {tuna.ui.selection.rule.ISelectionRule} rule
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.setSelectionRule
    = function(rule) {

    this._selectionRule = rule;
};

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.setItemsCollection
    = function(collection) {

    this._itemsCollection = collection;
};

/**
 * @override
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.applySelectionAt
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.destroySelectionAt
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.disableItemAt
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.enableItemAt
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.view.AbstractSelectionView.prototype.update = function() {};
