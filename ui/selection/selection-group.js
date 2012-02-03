(function() {

    var SelectionGroup = function(target, isMultiple, indexAttribute,
                                  itemSelector, selectedClass) {

        tuna.ui.selection.AbstractSelectionGroup.call(this, null);

        this.__target = target;
        this.__itemSelector = itemSelector;
        this.__isMultiple = isMultiple;

        this._itemsCollection = indexAttribute === null ?
            new tuna.ui.selection.items.ElementsCollection():
            new tuna.ui.selection.items.NamedElementsCollection(indexAttribute);

        this._selectionView
            = new tuna.ui.selection.view.ClassSelectionView(target);

        this._selectionView.setSelectedClass(selectedClass);
        this._selectionView.setItemSelector(this.__itemSelector);
        this._selectionView.setSelectionGroup(this);
        this._selectionView.setItemsCollection(this._itemsCollection);

        this._selectionRule =
            isMultiple ? new tuna.ui.selection.rule.MultipleSelectionRule() :
                         new tuna.ui.selection.rule.SingleSelectionRule();

        this._selectionRule.setSelectionGroup(this);
        this._selectionRule.setEventDispatcher(this);
        this._selectionRule.setSelectionView(this._selectionView);
    };

    tuna.utils.extend(SelectionGroup, tuna.ui.selection.AbstractSelectionGroup);

    SelectionGroup.prototype.init = function() {
        this._selectionView.update();
    };

    SelectionGroup.prototype.isMultiple = function() {
        return this.__isMultiple;
    };

    tuna.ui.selection.SelectionGroup = SelectionGroup;
})();