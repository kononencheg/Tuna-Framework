(function() {

    var AbstractSelectionView = function() {
        this._itemsCollection = null;
        this._selectionGroup = null;
    };

    tuna.utils.implement(AbstractSelectionView, tuna.ui.selection.view.ISelectionView);

    AbstractSelectionView.prototype.setSelectionGroup = function(group) {
        this._selectionGroup = group;
    };

    AbstractSelectionView.prototype.setItemsCollection = function(collection) {
        this._itemsCollection = collection;
    };

    /*AbstractSelectionView.prototype.getItemIndex = function(item) {
        if (this._items instanceof Array) {
            return tuna.utils.indexOf(item, this._items);
        } else {
            for (var i in this._items) {
                if (this._items.hasOwnProperty(i) && this._items[i] === item) {
                    return i;
                }
            }
        }

        return null;
    };

    AbstractSelectionView.prototype.getItemAt = function(index) {
        if (this._items[index] !== undefined) {
            return this._items[index];
        }

        return null;
    };*/

    tuna.ui.selection.view.AbstractSelectionView = AbstractSelectionView;
})();