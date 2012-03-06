/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var SingleSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(number|string)
     */
    this.__currentIndex = null;
};

tuna.utils.extend(SingleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @override
 */
SingleSelectionRule.prototype.getSelectedIndexes = function() {
    if (this.__currentIndex !== null) {
        return [this.__currentIndex];
    }

    return [];
};

/**
 * @override
 */
SingleSelectionRule.prototype.selectIndex = function(index) {
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
SingleSelectionRule.prototype.__dispatchSelect = function(newIndex) {
    var oldIndex = this.__currentIndex;

    return (oldIndex === null ||
            this._eventDispatcher.dispatch('deselect', oldIndex)) &&
            this._eventDispatcher.dispatch('select', newIndex)
};

/**
 * @override
 */
SingleSelectionRule.prototype.isSelected = function(index) {
    return index === this.__currentIndex;
};

/**
 * @override
 */
SingleSelectionRule.prototype.clearSelection = function() {
    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};

/**
 * @constructor
 * @extends {SingleSelectionRule}
 */
tuna.ui.selection.rule.SingleSelectionRule = SingleSelectionRule;