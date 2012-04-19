/**
 * @constructor
 * @extends tuna.ui.selection.rule.AbstractSelectionRule
 */
tuna.ui.selection.rule.MultipleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__selectedIndexes = [];
};

tuna.utils.extend(
    tuna.ui.selection.rule.MultipleSelectionRule,
    tuna.ui.selection.rule.AbstractSelectionRule
);

/**
 * @override
 */
tuna.ui.selection.rule.MultipleSelectionRule.prototype.getSelectedIndexes
    = function() {

    return tuna.utils.cloneArray(this.__selectedIndexes);
};

/**
 * @override
 */
tuna.ui.selection.rule.MultipleSelectionRule.prototype.selectIndex
    = function(index) {

    if (this.isIndexEnabled(index)) {
        var indexPosition = tuna.utils.indexOf(index, this.__selectedIndexes);
        if (indexPosition === -1) {
            if (this._eventDispatcher.dispatch('select', index)) {

                this._selectionView.applySelectionAt(index);
                this.__selectedIndexes.push(index);

                return true;
            }
        } else {
            if (this._eventDispatcher.dispatch('deselect', index)) {

                this._selectionView.destroySelectionAt(index);
                this.__selectedIndexes.splice(indexPosition, 1);

                return true;
            }
        }
    }

    return false;
};

/**
 * @override
 */
tuna.ui.selection.rule.MultipleSelectionRule.prototype.isSelected
    = function(index) {

    return tuna.utils.indexOf(index, this.__selectedIndexes) !== -1;
};

/**
 * @override
 */
tuna.ui.selection.rule.MultipleSelectionRule.prototype.clearSelection
    = function() {

    while (this.__selectedIndexes.length > 0) {
        this._selectionView.destroySelectionAt
            (this.__selectedIndexes.shift());
    }
};