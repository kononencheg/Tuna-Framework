/**
 * @constructor
 * @extends tuna.ui.selection.rule.AbstractSelectionRule
 */
tuna.ui.selection.rule.SingleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(number|string)
     */
    this.__currentIndex = null;
};

tuna.utils.extend(
    tuna.ui.selection.rule.SingleSelectionRule,
    tuna.ui.selection.rule.AbstractSelectionRule
);

/**
 * @override
 */
tuna.ui.selection.rule.SingleSelectionRule.prototype.getSelectedIndexes
    = function() {

    if (this.__currentIndex !== null) {
        return [this.__currentIndex];
    }

    return [];
};

/**
 * @override
 */
tuna.ui.selection.rule.SingleSelectionRule.prototype.selectIndex
    = function(index) {

    if (this.isIndexEnabled(index) &&
        this.__currentIndex !== index &&
        this.__dispatchSelect(index)) {

        var oldIndex = this.__currentIndex;

        if (this.__currentIndex !== null) {
            this._selectionView.destroySelectionAt(this.__currentIndex);
        }

        this._selectionView.applySelectionAt(index);

        this.__currentIndex = index;

        if (oldIndex !== null) {
            this._eventDispatcher.dispatch('deselected', oldIndex)
        }

        this._eventDispatcher.dispatch('selected', index);

        return true;
    }

    return false;
};

/**
 * @private
 * @param {string|number} newIndex
 */
tuna.ui.selection.rule.SingleSelectionRule.prototype.__dispatchSelect
    = function(newIndex) {

    var oldIndex = this.__currentIndex;

    return (oldIndex === null ||
            this._eventDispatcher.dispatch('deselect', oldIndex)) &&
            this._eventDispatcher.dispatch('select', newIndex)
};

/**
 * @override
 */
tuna.ui.selection.rule.SingleSelectionRule.prototype.isSelected
    = function(index) {

    return index === this.__currentIndex;
};

/**
 * @override
 */
tuna.ui.selection.rule.SingleSelectionRule.prototype.clearSelection
    = function() {

    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};
