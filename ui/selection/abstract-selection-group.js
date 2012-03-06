/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @implements {tuna.ui.selection.ISelectionGroup}
 * @param {!Node} target
 */
var AbstractSelectionGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    this._itemsCollection = null;

    this._selectionView = null;
    this._selectionRule = null;
};

tuna.utils.implement(AbstractSelectionGroup, tuna.ui.selection.ISelectionGroup);
tuna.utils.extend(AbstractSelectionGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
AbstractSelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {
    this._selectionRule.setIndexEnabled(index, isEnabled);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isIndexEnabled = function(index) {
    return this._selectionRule.isIndexEnabled();
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.updateView = function() {
    this._selectionView.update();
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemIndex = function(item) {
    return this._itemsCollection.getItemIndex(item);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getItemAt = function(index) {
    return this._itemsCollection.getItemAt(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.mapItems = function(callback) {
    this._itemsCollection.mapItems(callback);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.getSelectedIndexes = function() {
    return this._selectionRule.getSelectedIndexes();
};

/**
 * @return {?(string|number)}
 */
AbstractSelectionGroup.prototype.getLastSelectedIndex = function() {
    var indexes = this._selectionRule.getSelectedIndexes();
    if (indexes.length > 0) {
        return indexes.pop();
    }

    return null;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.selectIndex = function(index) {
    return this._selectionRule.selectIndex(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isSelected = function(index) {
    return this._selectionRule.isSelected(index);
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.clearSelection = function() {
    this._selectionRule.clearSelection();
};

/**
 * @constructor
 * @extends {AbstractSelectionGroup}
 */
tuna.ui.selection.AbstractSelectionGroup = AbstractSelectionGroup;