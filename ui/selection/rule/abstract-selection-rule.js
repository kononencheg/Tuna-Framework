/**
 * @constructor
 * @implements {tuna.ui.selection.rule.ISelectionRule}
 */
var AbstractSelectionRule = function() {
    /**
     * @protected
     * @type tuna.ui.selection.ISelectionGroup
     */
    this._selectionGroup = null;

    /**
     * @protected
     * @type tuna.ui.selection.view.ISelectionView
     */
    this._selectionView = null;

    /**
     * @protected
     * @type tuna.events.EventDispatcher
     */
    this._eventDispatcher = null;
};

tuna.utils.implement(AbstractSelectionRule, tuna.ui.selection.rule.ISelectionRule);

/**
 * @param {tuna.ui.selection.ISelectionGroup} group
 */
AbstractSelectionRule.prototype.setSelectionGroup = function(group) {
    this._selectionGroup = group;
};

/**
 * @param {tuna.ui.selection.view.ISelectionView} view
 */
AbstractSelectionRule.prototype.setSelectionView = function(view) {
    this._selectionView = view;
};

/**
 * @param {tuna.events.EventDispatcher} dispatcher
 */
AbstractSelectionRule.prototype.setEventDispatcher = function(dispatcher) {
    this._eventDispatcher = dispatcher;
};

/**
 * @override
 */
AbstractSelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @override
 */
AbstractSelectionRule.prototype.selectIndex = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.isSelected = function(index) {};

/**
 * @override
 */
AbstractSelectionRule.prototype.clearSelection = function() {};


/**
 * @constructor
 * @extends {AbstractSelectionRule}
 */
tuna.ui.selection.rule.AbstractSelectionRule = AbstractSelectionRule;