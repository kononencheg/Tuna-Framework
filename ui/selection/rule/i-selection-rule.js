(function() {

    var ISelectionRule = function() {};


    ISelectionRule.prototype.getSelectedIndexes = function() {};

    ISelectionRule.prototype.selectIndex = function(index) {};

    ISelectionRule.prototype.isSelected = function(index) {};

    ISelectionRule.prototype.clearSelection = function() {};


    tuna.ui.selection.rule.ISelectionRule = ISelectionRule;
})();