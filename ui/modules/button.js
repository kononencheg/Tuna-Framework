/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ButtonModule = function() {
    tuna.ui.Module.call(this, 'button', '.j-button');
};

tuna.utils.extend(ButtonModule, tuna.ui.Module);

/**
 * @override
 */
ButtonModule.prototype.initInstance = function(target) {
    return tuna.ui.buttons.create(target);
};

tuna.ui.modules.button = new ButtonModule();
