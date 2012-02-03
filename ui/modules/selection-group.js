(function() {

    var SelectionGroup = function() {
        tuna.ui.modules.Module.call(this, 'selection-group', '.j-selection-group');
    };

    tuna.utils.extend(SelectionGroup, tuna.ui.modules.Module);

    SelectionGroup.prototype.initInstance = function(target) {
        var isMultiple = target.getAttribute('data-is-multiple') === 'true';

        var itemSelector = target.getAttribute('data-item-selector');
        if (itemSelector === null) {
            itemSelector = '.j-selection-item';
        }

        var selectionClass = target.getAttribute('data-selection-class');
        if (selectionClass === null) {
            selectionClass = 'current';
        }

        var selectionGroup = new tuna.ui.selection.SelectionGroup
            (target, isMultiple, null, itemSelector, selectionClass);

        var selectionEvent = target.getAttribute('data-selection-event');
        if (selectionEvent === null) {
            selectionEvent = 'click';
        }

        tuna.dom.addChildEventListener(
            target, itemSelector, selectionEvent, function() {
                var index = selectionGroup.getItemIndex(this);
                if (index !== null) {
                    selectionGroup.selectIndex(index);
                }
            }
        );

        selectionGroup.init();

        return selectionGroup;
    };



    tuna.ui.modules.register(new SelectionGroup());

})();