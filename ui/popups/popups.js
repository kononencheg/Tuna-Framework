/**
 * @private
 * @type {Object.<string, tuna.ui.popups.Popup>}
 */
tuna.ui.popups.__idTable = {};

/**
 * @param {!Node} target
 * @return {tuna.ui.popups.Popup}
 */
tuna.ui.popups.create = function(target) {
    var popup = null;

    if (target.id !== null) {
        if (tuna.ui.popups.__idTable[target.id] === undefined) {
            popup = new tuna.ui.popups.Popup(target);
            popup.init();

            tuna.ui.popups.__idTable[target.id] = popup;
        }

        return tuna.ui.popups.__idTable[target.id];
    } else {
        popup = new tuna.ui.popups.Popup(target);
        popup.init();

        return popup;
    }

};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__alert = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__alertMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerAlert = function(target) {
    tuna.ui.popups.__alert = tuna.ui.popups.create(target);
    tuna.ui.popups.__alert.init();
    tuna.ui.popups.__alertMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 */
tuna.ui.popups.alert = function(message) {
    tuna.ui.popups.__alertMessage.innerHTML = message;
    tuna.ui.popups.__alert.open();
};

/**
 * @private
 * @type tuna.ui.popups.Popup
 */
tuna.ui.popups.__confirm = null;

/**
 * @private
 * @type Node
 */
tuna.ui.popups.__confirmMessage = null;

/**
 * @param {!Node} target
 */
tuna.ui.popups.registerConfirm = function(target) {
    tuna.ui.popups.__confirm  = tuna.ui.popups.create(target);
    tuna.ui.popups.__confirm.init();
    tuna.ui.popups.__confirmMessage = tuna.dom.selectOne('.j-message', target);
};

/**
 * @param {string} message
 * @param {function(boolean)} callback
 */
tuna.ui.popups.confirm = function(message, callback) {
    tuna.ui.popups.__confirmMessage.innerHTML = message;

    var okHandler = function(event) {
        callback && callback(true);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    var cancelHandler = function(event) {
        callback && callback(false);

        tuna.ui.popups.__confirm.removeEventListener('popup-apply', okHandler);
        tuna.ui.popups.__confirm.removeEventListener
            ('popup-close', cancelHandler);
    };

    tuna.ui.popups.__confirm.addEventListener('popup-apply', okHandler);
    tuna.ui.popups.__confirm.addEventListener('popup-close', cancelHandler);

    tuna.ui.popups.__confirm.open();
};


