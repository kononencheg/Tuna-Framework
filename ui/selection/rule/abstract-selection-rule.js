(function() {

    var AbstractSelectionRule = function() {
        this._selectionGroup = null;
        this._selectionView = null;

        this._eventDispatcher = null;
    };

    tuna.utils.implement(AbstractSelectionRule, tuna.ui.selection.rule.ISelectionRule);

    AbstractSelectionRule.prototype.setSelectionGroup = function(group) {
        this._selectionGroup = group;
    };

    AbstractSelectionRule.prototype.setSelectionView = function(view) {
        this._selectionView = view;
    };

    AbstractSelectionRule.prototype.setEventDispatcher = function(dispatcher) {
        this._eventDispatcher = dispatcher;
    };

    tuna.ui.selection.rule.AbstractSelectionRule = AbstractSelectionRule;
})();