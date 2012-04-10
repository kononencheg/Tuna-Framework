/**
 * @private
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ButtonGroupModule = function() {
    tuna.ui.Module.call(this, '.j-button-group');
};

tuna.utils.extend(ButtonGroupModule, tuna.ui.Module);

/**
 * @override
 */
ButtonGroupModule.prototype.initInstance = function(target) {
    return new tuna.ui.buttons.ButtonGroup(target);
};

tuna.ui.registerModule('button-group', new ButtonGroupModule());
