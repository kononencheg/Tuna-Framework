(function() {

    var MultipleSelectionRule = function() {
        tuna.ui.selection.rule.AbstractSelectionRule.call(this);

        this.__selectedIndexes = [];
    };

    tuna.utils.extend(MultipleSelectionRule, tuna.ui.selection.rule.AbstractSelectionRule);

    MultipleSelectionRule.prototype.getSelectedIndexes = function() {
        return tuna.utils.cloneArray(this.__selectedIndexes);
    };

    MultipleSelectionRule.prototype.selectIndex = function(index) {
        if (this._selectionGroup.isIndexEnabled(index)) {
            var indexPosition = tuna.utils.indexOf(index, this.__selectedIndexes);
            if (indexPosition === -1) {
                if (this._eventDispatcher.dispatch
                        (new tuna.events.Event('select'), index)) {

                    this._selectionView.applySelectionAt(index);
                    this.__selectedIndexes.push(index);
                }
            } else {
                if (this._eventDispatcher.dispatch
                        (new tuna.events.Event('deselect'), index)) {

                    this._selectionView.destroySelectionAt(index);
                    this.__selectedIndexes.splice(indexPosition, 1);
                }
            }
        }
    };

    MultipleSelectionRule.prototype.isSelected = function(index) {
        return tuna.utils.indexOf(index, this.__selectedIndexes) !== -1;
    };

    MultipleSelectionRule.prototype.clearSelection = function() {
        while (this.__selectedIndexes.length > 0) {
            this._selectionView.destroySelectionAt
                (this.__selectedIndexes.shift());
        }
    };


    tuna.ui.selection.rule.MultipleSelectionRule = MultipleSelectionRule;

})();