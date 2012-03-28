/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @implements tuna.ui.selection.ISelectionGroup
 * @param {!Node} target
 */
tuna.ui.selection.AbstractSelectionGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    this._itemsCollection = null;

    this._selectionView = null;
    this._selectionRule = null;
};


tuna.utils.extend
    (tuna.ui.selection.AbstractSelectionGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {

    this._selectionRule.setIndexEnabled(index, isEnabled);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.isIndexEnabled
    = function(index) {

    return this._selectionRule.isIndexEnabled(index);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.updateView = function() {
    this._selectionView.update();
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.getItemIndex
    = function(item) {

    return this._itemsCollection.getItemIndex(item);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.getItemAt
    = function(index) {

    return this._itemsCollection.getItemAt(index);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.mapItems
    = function(callback) {

    this._itemsCollection.mapItems(callback);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.getSelectedIndexes
    = function() {

    return this._selectionRule.getSelectedIndexes();
};

/**
 * @return {?(string|number)}
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.getLastSelectedIndex
    = function() {

    var indexes = this._selectionRule.getSelectedIndexes();
    if (indexes.length > 0) {
        return indexes.pop();
    }

    return null;
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.selectIndex
    = function(index) {

    return this._selectionRule.selectIndex(index);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.isSelected
    = function(index) {

    return this._selectionRule.isSelected(index);
};

/**
 * @override
 */
tuna.ui.selection.AbstractSelectionGroup.prototype.clearSelection
    = function() {

    this._selectionRule.clearSelection();
};