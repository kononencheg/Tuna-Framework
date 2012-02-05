/**
 * @private
 * @type Object.<string, tuna.view.ViewController>
 */
tuna.view.__idTable = {};

/**
 * @private
 * @type tuna.view.ViewController
 */
tuna.view.__mainController = null;

/**
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.setMainController = function(controller) {
    tuna.view.__mainController = controller;
};

/**
 * @param {!string} targetId
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.registerController = function(targetId, controller) {
    tuna.view.__idTable[targetId] = controller;
};

/**
 * @param {Node} target
 * @return {tuna.view.ViewController}
 */
tuna.view.getController = function(target) {
    if (target === document.body) {
        return tuna.view.__mainController;
    } else if (target !== null &&
               tuna.view.__idTable[target.id] !== undefined) {
        return tuna.view.__idTable[target.id];
    }

    return null;
};
