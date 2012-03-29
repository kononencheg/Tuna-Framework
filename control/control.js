/**
 * Установка основного контроллера отображения.
 *
 * Инициализация основного контроллера отображения вызывается функцией
 * <code>tuna.control.init()</code>.
 *
 * Точкой входа в приложение является метод <code>_initActions()</code>
 * контроллера установленного как основной.
 *
 * @see tuna.control.ViewController#_initActions
 * @param {!tuna.control.ViewController} controller Контроллер отображения,
 *        устанавливаемый как основной.
 */
tuna.control.setMainController = function(controller) {
    tuna.control.__mainController = controller;
};

/**
 * Регистрация контроллера управелния отображением DOM-элемента с
 * идентификатором <code>targetId</code>.
 *
 * @see tuna.control.getController
 * @param {!string} targetId Идентификатор DOM-элемента, отображением
 *        которого следует управлять.
 *
 * @param {!tuna.control.ViewController} controller Контроллер, который будет
 *        управлять отображением DOM-элемента.
 */
tuna.control.registerController = function(targetId, controller) {
    tuna.control.__controllerTable[targetId] = controller;
};

/**
 * Взятие соответсвующего контроллера по идентификатору DOM-элемента.
 *
 * @see tuna.control.registerController
 * @param {!string} targetId Идентификатор DOM-элемента.
 * @return {tuna.control.ViewController} Соответсвующий контроллер.
 */
tuna.control.getController = function(targetId) {
    if (tuna.control.__controllerTable[targetId] !== undefined) {
        return tuna.control.__controllerTable[targetId];
    }

    return null;
};

/**
 * Инициализация глобального контроля отображения.
 *
 * Заключается в инициализации основного контроллера отображения для
 * DOM-элемента <code>target</code>.
 *
 * @param {!Node} target Корневой для приложения DOM-элемент, обычно в качестве
 *        корневого элемента выбирается <code>document.body</code>.
 */
tuna.control.init = function(target) {
    tuna.control.__mainController.init(target);
};

/**
 * @type Object.<string, tuna.control.ViewController>
 */
tuna.control.__controllerTable = {};

/**
 * @type tuna.control.ViewController
 */
tuna.control.__mainController = null;
