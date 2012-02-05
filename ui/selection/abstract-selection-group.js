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

    this._disabledIndexes = [];
};

tuna.utils.implement(AbstractSelectionGroup, tuna.ui.selection.ISelectionGroup);
tuna.utils.extend(AbstractSelectionGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
AbstractSelectionGroup.prototype.setIndexEnabled
    = function(index, isEnabled) {

    var indexPosition = tuna.utils.indexOf(index, this._disabledIndexes);
    if (isEnabled) {
        if (indexPosition !== -1) {
            this._selectionView.enableItemAt(index);
            this._disabledIndexes.splice(indexPosition, 1);
        }
    } else if (indexPosition === -1) {
        this._selectionView.disableItemAt([index]);
        this._disabledIndexes.push(index);
    }
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.isIndexEnabled = function(index) {
    return tuna.utils.indexOf(index, this._disabledIndexes) === -1;
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
 * @return {string|number}
 */
AbstractSelectionGroup.prototype.getLastSelectedIndex = function() {
    var indexes = this._selectionRule.getSelectedIndexes();
    if (indexes.length > 0) {
        return indexes.pop();
    }

    return -1;
};

/**
 * @override
 */
AbstractSelectionGroup.prototype.selectIndex = function(index) {
    this._selectionRule.selectIndex(index);
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