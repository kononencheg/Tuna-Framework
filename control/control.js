/**
 * @private
 * @type Object.<string, tuna.control.ViewController>
 */
tuna.control.__controllerTable = {};

/**
 * @private
 * @type tuna.control.ViewController
 */
tuna.control.__mainController = null;

/**
 * Установка основного контроллера отображения.
 *
 * @param {!tuna.control.ViewController} controller
 */
tuna.control.setMainController = function(controller) {
    tuna.control.__mainController = controller;
};

/**
 * @param {!string} name
 * @param {!tuna.control.ViewController} controller
 */
tuna.control.registerController = function(name, controller) {
    tuna.control.__controllerTable[name] = controller;
};

/**
 * @param {!string} name
 * @return {tuna.control.ViewController}
 */
tuna.control.getController = function(name) {
    if (tuna.control.__controllerTable[name] !== undefined) {
        return tuna.control.__controllerTable[name];
    }

    return null;
};

/**
 * @param {!Node} target
 */
tuna.control.init = function(target) {
    tuna.control.__mainController.init(target);
};
