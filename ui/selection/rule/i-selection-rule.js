/**
 * @interface
 */
var ISelectionRule = function() {};

/**
 * @return Array.<string|number>
 */
ISelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index
 */
ISelectionRule.prototype.selectIndex = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionRule.prototype.isSelected = function(index) {};

/**
 *
 */
ISelectionRule.prototype.clearSelection = function() {};

/**
 * @interface
 * @extends {ISelectionRule}
 */
tuna.ui.selection.rule.ISelectionRule = ISelectionRule;