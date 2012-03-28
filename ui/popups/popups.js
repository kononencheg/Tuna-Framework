/**
 * @private
 * @type {Object.<string, tuna.ui.popups.Popup>}
 */
tuna.ui.popups.__idTable = {};

/**
 * @private
 * @type number
 */
tuna.ui.popups.__lastId = 0;

/**
 * @param {!Node} target
 * @return {tuna.ui.popups.Popup}
 */
tuna.ui.popups.create = function(target) {
    if (target.id === '') {
        target.id = 'popup_' + tuna.ui.popups.__lastId++;
    }

    if (tuna.ui.popups.__idTable[target.id] === undefined) {
        var popup = new tuna.ui.popups.Popup(target);
        popup.init();

        tuna.ui.popups.__idTable[target.id] = popup;
    }

    return tuna.ui.popups.__idTable[target.id];
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
 * @param {Node} target
 */
tuna.ui.popups.registerAlert = function(target) {
    if (target !== null) {
        tuna.ui.popups.__alert = tuna.ui.popups.create(target);
        tuna.ui.popups.__alert.init();
        tuna.ui.popups.__alertMessage = tuna.dom.selectOne('.j-message', target);
    } else {
        if (tuna.ui.popups.__alert !== null) {
            tuna.ui.popups.__alert.destroy();
            tuna.ui.popups.__alert = null;
            tuna.ui.popups.__alertMessage = null;
        }
    }

};

/**
 * @param {string} message
 */
tuna.ui.popups.alert = function(message) {
    if (tuna.ui.popups.__alert !== null &&
        tuna.ui.popups.__alertMessage !== null) {
        tuna.ui.popups.__alertMessage.innerHTML = message;
        tuna.ui.popups.__alert.open();
    }
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
 * @param {Node} target
 */
tuna.ui.popups.registerConfirm = function(target) {
    if (target !== null) {
        tuna.ui.popups.__confirm  = tuna.ui.popups.create(target);
        tuna.ui.popups.__confirm.init();
        tuna.ui.popups.__confirmMessage = tuna.dom.selectOne('.j-message', target);
    } else {
        if (tuna.ui.popups.__confirm !== null) {
            tuna.ui.popups.__confirm.destroy();
            tuna.ui.popups.__confirm = null;
            tuna.ui.popups.__confirmMessage = null;
        }
    }
};

/**
 * @param {string} message
 * @param {!function(boolean)} callback
 */
tuna.ui.popups.confirm = function(message, callback) {
    tuna.ui.popups.__confirmMessage.innerHTML = message;

    var handler = function(event) {
        callback(event.getType() === 'apply');

        tuna.ui.popups.__confirm.removeEventListener('apply', handler);
        tuna.ui.popups.__confirm.removeEventListener('close', handler);
    };

    tuna.ui.popups.__confirm.addEventListener('apply', handler);
    tuna.ui.popups.__confirm.addEventListener('close', handler);

    tuna.ui.popups.__confirm.open();
};


