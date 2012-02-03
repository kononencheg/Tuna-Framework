(function() {

    var ClassSelectionView = function(target) {
        tuna.ui.selection.view.AbstractSelectionView.call(this);

        this._target = target;

        this._itemSelector = null;

        this._selectedClass = null;
        this._disabledClass = 'disabled';
    };

    tuna.utils.extend(ClassSelectionView, tuna.ui.selection.view.AbstractSelectionView);

    ClassSelectionView.prototype.setItemSelector = function(selector) {
        this._itemSelector = selector;
    };

    ClassSelectionView.prototype.setSelectedClass = function(className) {
        this._selectedClass = className;
    };

    ClassSelectionView.prototype.setDisabledClass = function(className) {
        this._disabledClass = className;
    };


    ClassSelectionView.prototype.applySelectionAt = function(index) {
        tuna.dom.addClass
            (this._itemsCollection.getItemAt(index), this._selectedClass);
    };

    ClassSelectionView.prototype.destroySelectionAt = function(index) {
        var item = this._itemsCollection.getItemAt(index);
        if (item !== null) {
            tuna.dom.removeClass(item, this._selectedClass);
        }
    };


    ClassSelectionView.prototype.disableItemAt = function(index) {
        tuna.dom.addClass
            (this._itemsCollection.getItemAt(index), this._disabledClass);
    };

    ClassSelectionView.prototype.enableItemAt = function(index) {
        tuna.dom.removeClass
            (this._itemsCollection.getItemAt(index), this._disabledClass);
    };


    ClassSelectionView.prototype.update = function() {
        this._selectionGroup.clearSelection();
        this._itemsCollection.clear();

        var possibleItems = tuna.dom.select(this._itemSelector, this._target);

        var i = 0,
            l = possibleItems.length;

        var index = null;
        var item = null;
        while (i < l) {
            item = possibleItems[i];
            if (tuna.dom.getParentMatches
                (item, this._itemSelector, this._target) === null) {

                index = this._itemsCollection.addItem(item);
                if (index !== null &&
                    tuna.dom.hasClass(item, this._selectedClass)) {
                    this._selectionGroup.selectIndex(index);
                }
            }

            i++;
        }
    };


    tuna.ui.selection.view.ClassSelectionView = ClassSelectionView;
})();