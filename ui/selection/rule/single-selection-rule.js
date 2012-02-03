(function() {

    var Event = tuna.events.Event;
    var AbstractSelectionRule = tuna.ui.selection.rule.AbstractSelectionRule;

    var SingleSelectionRule = function() {
        AbstractSelectionRule.call(this);

        this.__currentIndex = -1;
    };

    tuna.utils.extend(SingleSelectionRule, AbstractSelectionRule);

    SingleSelectionRule.prototype.getSelectedIndexes = function() {
        if (this.__currentIndex !== -1) {
            return [this.__currentIndex];
        }

        return [];
    };

    SingleSelectionRule.prototype.selectIndex = function(index) {
        if (this._selectionGroup.isIndexEnabled(index) &&
            this.__currentIndex !== index &&
            this.__dispatchSelect(index)) {

            var oldIndex = this.__currentIndex;

            if (this.__currentIndex !== -1) {
                this._selectionView.destroySelectionAt(this.__currentIndex);
            }

            this._selectionView.applySelectionAt(index);

            this.__currentIndex = index;

            if (oldIndex !== -1) {
                this._eventDispatcher.dispatch('deselected', oldIndex)
            }

            this._eventDispatcher.dispatch('selected', index)
        }
    };

    SingleSelectionRule.prototype.__dispatchSelect = function(newIndex) {
        var oldIndex = this.__currentIndex;

        return (oldIndex === -1 ||
                this._eventDispatcher.dispatch('deselect', oldIndex)) &&
                this._eventDispatcher.dispatch('select', newIndex)
    };

    SingleSelectionRule.prototype.isSelected = function(index) {
        return index === this.__currentIndex;
    };

    SingleSelectionRule.prototype.clearSelection = function() {
        if (this.__currentIndex !== -1) {
            this._selectionView.destroySelectionAt(this.__currentIndex);
            this.__currentIndex = -1;
        }
    };


    tuna.ui.selection.rule.SingleSelectionRule = SingleSelectionRule;

})();