(function() {

    var AbstractSelectionGroup = function(parent) {
        tuna.events.EventDispatcher.call(this, parent);

        this._itemsCollection = null;

        this._selectionView = null;
        this._selectionRule = null;

        this._disabledIndexes = [];
    };

    tuna.utils.implement(AbstractSelectionGroup, tuna.ui.selection.ISelectionGroup);
    tuna.utils.extend(AbstractSelectionGroup, tuna.events.EventDispatcher);

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

    AbstractSelectionGroup.prototype.isIndexEnabled = function(index) {
        return tuna.utils.indexOf(index, this._disabledIndexes) === -1;
    };

    AbstractSelectionGroup.prototype.updateView = function() {
        this._selectionView.update();
    };

    AbstractSelectionGroup.prototype.getItemIndex = function(item) {
        return this._itemsCollection.getItemIndex(item);
    };

    AbstractSelectionGroup.prototype.getItemAt = function(index) {
        return this._itemsCollection.getItemAt(index);
    };

    AbstractSelectionGroup.prototype.mapItems = function(callback) {
        this._itemsCollection.mapItems(callback);
    };

    AbstractSelectionGroup.prototype.getSelectedIndexes = function() {
        return this._selectionRule.getSelectedIndexes();
    };

    AbstractSelectionGroup.prototype.getLastSelectedIndex = function() {
        var indexes = this._selectionRule.getSelectedIndexes();
        if (indexes.length > 0) {
            return indexes.pop();
        }

        return -1;
    };

    AbstractSelectionGroup.prototype.selectIndex = function(index) {
        this._selectionRule.selectIndex(index);
    };

    AbstractSelectionGroup.prototype.isSelected = function(index) {
        return this._selectionRule.isSelected(index);
    };

    AbstractSelectionGroup.prototype.clearSelection = function() {
        this._selectionRule.clearSelection();
    };


    tuna.ui.selection.AbstractSelectionGroup = AbstractSelectionGroup;
})();