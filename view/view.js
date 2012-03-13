/**
 * @private
 * @type Object.<string, tuna.view.ViewController>
 */
tuna.view.__controllerTable = {};

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
 * @param {!string} name
 * @param {!tuna.view.ViewController} controller
 */
tuna.view.registerController = function(name, controller) {
    tuna.view.__controllerTable[name] = controller;
};

/**
 * @param {!string} name
 * @return {tuna.view.ViewController}
 */
tuna.view.getController = function(name) {
    if (tuna.view.__controllerTable[name] !== undefined) {
        return tuna.view.__controllerTable[name];
    }

    return null;
};

/**
 * @param {!Node} target
 */
tuna.view.init = function(target) {
    tuna.view.__mainController.bootstrap(target);
};
