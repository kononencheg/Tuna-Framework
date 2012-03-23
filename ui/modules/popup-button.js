/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupButtonModule = function() {
    tuna.ui.Module.call(this, 'popup-button', '.j-popup-button');
};

tuna.utils.extend(PopupButtonModule, tuna.ui.Module);

/**
 * @override
 */
PopupButtonModule.prototype.initInstance = function(target) {
    return new tuna.ui.buttons.PopupButton(target);
};

tuna.ui.modules.popupButton = new PopupButtonModule();
