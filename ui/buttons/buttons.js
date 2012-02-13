/**
 * @private
 * @type {Object.<string, tuna.ui.buttons.Button>}
 */
tuna.ui.buttons.__idTable = {};

/**
 * @private
 * @type number
 */
tuna.ui.buttons.__lastId = 0;

/**
 * @param {!Node} target
 * @return {tuna.ui.buttons.Button}
 */
tuna.ui.buttons.create = function(target) {
    if (target.id === '') {
        target.id = 'button_' + tuna.ui.buttons.__lastId++;
    }

    if (tuna.ui.buttons.__idTable[target.id] === undefined) {
        var button = new tuna.ui.buttons.Button(target);
        button.init();

        tuna.ui.buttons.__idTable[target.id] = button;
    }

    return tuna.ui.buttons.__idTable[target.id];


};