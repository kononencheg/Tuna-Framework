/**
 * @constructor
 * @extends tuna.ui.buttons.Button
 * @param {!Node} target
 */
tuna.ui.buttons.PopupButton = function(target) {
    tuna.ui.buttons.Button.call(this, target);

    /**
     *
     * @type {tuna.ui.popups.Popup}
     * @private
     */
    this._popup = null;
};

tuna.utils.extend(tuna.ui.buttons.PopupButton, tuna.ui.buttons.Button);

/**
 * @override
 */
tuna.ui.buttons.PopupButton.prototype.init = function() {
    var popupId = this.getOption('popup-id');
    if (popupId !== null) {
        var popupTarget = tuna.dom.selectOne('#' + popupId);
        if (popupTarget !== null) {
            this._popup = tuna.ui.popups.create(popupTarget);
        }
    }

    var self = this;
    tuna.dom.addEventListener(this._target, 'click', function(event) {
        if (self.isEnabled()) {
            if (self.dispatch('click') && self._popup !== null) {
                self._popup.open();
            }
        } else {
            tuna.dom.stopPropagation(event);
        }
    });
};

/**
 * @return {tuna.ui.popups.Popup}
 */
tuna.ui.buttons.PopupButton.prototype.getPopup = function() {
    return this._popup;
};