/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ButtonGroupModule = function() {
    tuna.ui.Module.call(this, 'button-group', '.j-button-group');
};

tuna.utils.extend(ButtonGroupModule, tuna.ui.Module);

/**
 * @override
 * @param target
 */
ButtonGroupModule.prototype.initInstance = function(target) {
    return new tuna.ui.buttons.ButtonGroup(target);
};

tuna.ui.modules.buttonGroup = new ButtonGroupModule();
