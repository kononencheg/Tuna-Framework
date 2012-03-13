/**
 * @constructor
 * @implements {tuna.ui.selection.rule.ISelectionRule}
 */
var AbstractSelectionRule = function() {
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

tuna.utils.implement(AbstractSelectionRule, tuna.ui.selection.rule.ISelectionRule);

/**
 * @param {tuna.ui.selection.items.IItemsCollection} collection
 */
AbstractSelectionRule.prototype.setItemsCollection = function(collection) {
    this._itemsCollection = collection;
};

/**
 * @param {tuna.ui.selection.view.ISelectionView} view
 */
AbstractSelectionRule.prototype.setSelectionView = function(view) {
    this._selectionView = view;
};

/**
 * @param {tuna.events.EventDispatcher} dispatcher
 */
AbstractSelectionRule.prototype.setEventDispatcher = function(dispatcher) {
    this._eventDispatcher = dispatcher;
};

/**
 * @override
 */
AbstractSelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @override
 */
AbstractSelectionRule.prototype.selectIndex = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.isSelected = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.clearSelection = function() {};


/**
 * @override
 */
AbstractSelectionRule.prototype.setIndexEnabled
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
AbstractSelectionRule.prototype.isIndexEnabled = function(index) {
    return this._itemsCollection.getItemAt(index) !== null &&
        tuna.utils.indexOf(index, this._disabledIndexes) === -1;
};


/**
 * @constructor
 * @extends {AbstractSelectionRule}
 */
tuna.ui.selection.rule.AbstractSelectionRule = AbstractSelectionRule;