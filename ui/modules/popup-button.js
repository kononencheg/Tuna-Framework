/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupButtonModule = function() {
    tuna.ui.Module.call(this, '.j-popup-button');
};

tuna.utils.extend(PopupButtonModule, tuna.ui.Module);

/**
 * @override
 */
PopupButtonModule.prototype.initInstance = function(target) {
    return new tuna.ui.buttons.PopupButton(target);
};

tuna.ui.modules.register('popup-button', new PopupButtonModule());
