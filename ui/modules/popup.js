/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupModule = function() {
    tuna.ui.Module.call(this, '.j-popup');
};

tuna.utils.extend(PopupModule, tuna.ui.Module);

/**
 * @verride
 * @param target
 */
PopupModule.prototype.initInstance = function(target) {
    var popupElement =
        tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

    var popup = tuna.ui.popups.create(popupElement);
    tuna.dom.addEventListener(target, 'click', function(event) {
        popup.open();
    });

    return popup;
};

tuna.ui.modules.register('popup', new PopupModule());
