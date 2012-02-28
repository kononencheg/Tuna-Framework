/**
 * @constructor
 * @extends {tuna.ui.selection.AbstractSelectionGroup}
 * @param {!Node} target
 * @param {?string} indexAttribute
 */
var SelectionGroup = function(target, indexAttribute) {
    tuna.ui.selection.AbstractSelectionGroup.call(this, target);

    this._setDefaultOption('item-selector', '.j-selection-item');
    this._setDefaultOption('index-attribute', indexAttribute);
    this._setDefaultOption('is-multiple', null);
    this._setDefaultOption('selection-class', 'active');
    this._setDefaultOption('selection-event', 'click');
};

tuna.utils.extend(SelectionGroup, tuna.ui.selection.AbstractSelectionGroup);

/**
 * @override
 */
SelectionGroup.prototype.init = function() {
    var indexAttribute = this.getStringOption('index-attribute');

    this._itemsCollection = indexAttribute === null ?
            new tuna.ui.selection.items.ElementsCollection():
            new tuna.ui.selection.items.NamedElementsCollection(indexAttribute);

    this._selectionView
        = new tuna.ui.selection.view.ClassSelectionView(this._target);

    this._selectionRule = this.getBooleanOption('is-multiple') ?
            new tuna.ui.selection.rule.MultipleSelectionRule() :
            new tuna.ui.selection.rule.SingleSelectionRule();

    this._selectionView.setSelectionClass(this.getStringOption('selection-class'));
    this._selectionView.setItemSelector(this.getStringOption('item-selector'));
    this._selectionView.setSelectionGroup(this);
    this._selectionView.setItemsCollection(this._itemsCollection);

    this._selectionRule.setSelectionGroup(this);
    this._selectionRule.setEventDispatcher(this);
    this._selectionRule.setSelectionView(this._selectionView);

    this._selectionView.update();
};

/**
 * @constructor
 * @extends {SelectionGroup}
 */
tuna.ui.selection.SelectionGroup = SelectionGroup;