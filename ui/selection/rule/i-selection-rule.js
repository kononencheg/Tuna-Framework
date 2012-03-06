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
 * @return {boolean}
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
 *
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
ISelectionGroup.prototype.setIndexEnabled = function(index, isEnabled) {};

/**
 * @param {string|number} index
 * @return boolean
 */
ISelectionGroup.prototype.isIndexEnabled = function(index) {};

/**
 * @interface
 * @extends {ISelectionRule}
 */
tuna.ui.selection.rule.ISelectionRule = ISelectionRule;