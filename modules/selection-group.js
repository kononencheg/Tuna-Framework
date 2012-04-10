/**
 * @private
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SelectionGroupModule = function() {
    tuna.ui.Module.call(this, '.j-selection-group');
};

tuna.utils.extend(SelectionGroupModule, tuna.ui.Module);

/**
 * @override
 */
SelectionGroupModule.prototype.initInstance = function(target) {

    var selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);

    var selectionEvent = selectionGroup.getStringOption('selection-event');
    var itemSelector = selectionGroup.getStringOption('item-selector');

    if (selectionEvent !== null && itemSelector !== null) {
        tuna.dom.addChildEventListener(
            target, itemSelector, selectionEvent, function() {
                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );
    }

    return selectionGroup;
};



tuna.ui.registerModule('selection-group', new SelectionGroupModule());
