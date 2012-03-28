/**
 * @interface
 */
tuna.ui.selection.rule.ISelectionRule = function() {};

/**
 * @return Array.<string|number>
 */
tuna.ui.selection.rule.ISelectionRule.prototype.getSelectedIndexes
    = function() {};

/**
 * @param {string|number} index
 * @return {boolean}
 */
tuna.ui.selection.rule.ISelectionRule.prototype.selectIndex
    = function(index) {};

/**
 * @param {string|number} index
 * @return boolean
 */
tuna.ui.selection.rule.ISelectionRule.prototype.isSelected
    = function(index) {};

/**
 *
 */
tuna.ui.selection.rule.ISelectionRule.prototype.clearSelection = function() {};

/**
 * @param {string|number} index
 * @param {boolean} isEnabled
 */
tuna.ui.selection.rule.ISelectionRule.prototype.setIndexEnabled
    = function(index, isEnabled) {};

/**
 * @param {string|number} index
 * @return boolean
 */
tuna.ui.selection.rule.ISelectionRule.prototype.isIndexEnabled
    = function(index) {};
