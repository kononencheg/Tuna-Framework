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
 * @param target
 */
PopupButtonModule.prototype.initInstance = function(target) {
    var popupElement =
        tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

    var popup = null;

    if (popupElement !== null) {
        popup = tuna.ui.popups.create(popupElement);

        tuna.dom.addEventListener(target, 'click', function(event) {
            popup.open();
        });
    }

    return popup;
};

tuna.ui.modules.register('popup-button', new PopupButtonModule());
