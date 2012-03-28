/**
 * @constructor
 * @implements tuna.ui.selection.rule.ISelectionRule
 */
tuna.ui.selection.rule.AbstractSelectionRule = function() {

    /**
     * @protected
     * @type tuna.ui.selection.items.IItemsCollection
     */
    this._itemsCollection = null;

    /**
     * @protected
     * @type tuna.ui.selection.view.ISelectionView
     */
    this._selectionView = null;

    /**
     * @protected
     * @type tuna.events.EventDispatcher
     */
    this._eventDispatcher = null;

    /**
     *
     * @type {Array}
     * @protected
     */
    this._disabledIndexes = [];
};

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.setItemsCollection
    = function(collection) {
    this._itemsCollection = collection;
};

/**
 * @param {tuna.ui.selection.view.ISelectionView} view
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.setSelectionView
    = function(view) {
    this._selectionView = view;
};

/**
 * @param {tuna.events.EventDispatcher} dispatcher
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.setEventDispatcher
    = function(dispatcher) {
    this._eventDispatcher = dispatcher;
};

/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.getSelectedIndexes
    = function() {};

/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.selectIndex
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.isSelected
    = function(index) {};

/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.clearSelection
    = function() {};


/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.setIndexEnabled
    = function(index, isEnabled) {

    var indexPosition = tuna.utils.indexOf(index, this._disabledIndexes);
    if (isEnabled) {
        if (indexPosition !== -1) {
            this._selectionView.enableItemAt(index);
            this._disabledIndexes.splice(indexPosition, 1);
        }
    } else if (indexPosition === -1) {
        this._selectionView.disableItemAt(index);
        this._disabledIndexes.push(index);
    }
};

/**
 * @override
 */
tuna.ui.selection.rule.AbstractSelectionRule.prototype.isIndexEnabled
    = function(index) {

    return this._itemsCollection.getItemAt(index) !== null &&
        tuna.utils.indexOf(index, this._disabledIndexes) === -1;
};
