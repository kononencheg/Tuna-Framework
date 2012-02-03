(function() {

    var ISelectionGroup = function() {};


    ISelectionGroup.prototype.getSelectedIndexes = function() {};

    ISelectionGroup.prototype.selectIndex = function(index) {};

    ISelectionGroup.prototype.isSelected = function(index) {};

    ISelectionGroup.prototype.clearSelection = function() {};


    ISelectionGroup.prototype.setIndexEnabled = function(index, isEnabled) {};

    ISelectionGroup.prototype.isIndexEnabled = function(index) {};


    ISelectionGroup.prototype.getItemIndex = function(item) {};

    ISelectionGroup.prototype.getItemAt = function(index) {};

    ISelectionGroup.prototype.mapItems = function(callback) {};


    ISelectionGroup.prototype.updateView = function() {};



    tuna.ui.selection.ISelectionGroup = ISelectionGroup;
})();