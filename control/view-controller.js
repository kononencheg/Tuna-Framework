


/**
 * Базовый стандартный класс управления отображением. Реализует интерфейс
 * <code>tuna.ui.transformers.ITransformHandler</code> обработчика
 * трансформации отображения.
 *
 * Экземпляры данного класса являются основными сущностями приложения - каждый
 * екземпляр привязывается к определенному елементу DOM-дерева с помощью
 * статических методов <code>tuna.control.registerController()</code> и
 * <code>tuna.control.setMainController()</code>.
 *
 * Обычно инициализация екземпляра, привязанного к определенному идентификатору
 * элемента в DOM-дереве, происходит автоматически, например, при обработке
 * внутренних событий некоторых модулей отображения.
 *
 * @see tuna.control.registerController
 * @see tuna.control.setMainController
 * @see tuna.ui.selection.Navigation
 * @see tuna.ui.transformers.ITransformHandler
 * @constructor
 * @implements {tuna.ui.transformers.ITransformHandler}
 */
tuna.control.ViewController = function() {

    /**
     * Контейнер с модулями.
     *
     * @protected
     * @type {tuna.ui.ModuleContainer}
     */
    this._container = null;

    /**
     * Список модулей-компонентов отображения, которые необходимо
     * проинициализировать в контейнере соответствующему данному контроллеру
     * отображения.
     *
     * Основному контроллеру отображения соотвествует базовый узел страницы
     * приложения.
     *
     * @type {!Array.<string>}
     * @protected
     */
    this._modules = [];
};


/**
 * Метод проверки активности контроллера. Активность подразумевает наличие
 * активного контейнера.
 *
 * @see tuna.ui.ModuleContainer#isActive
 * @return {boolean} Значение активности контроллера.
 */
tuna.control.ViewController.prototype.isActive = function() {
    return this._container !== null && this._container.isActive();
};


/**
 * Инициализация контроллера отображения.
 *
 * При инициализации контроллера отображения для элемента DOM-дерева
 * <code>target</code> создается контейнер с модулями, и производиться их
 * инициализация. А также вызывается метод инициализации поведения конкретного
 * контроллера <code>_initActions()</code>.
 *
 * Перед повторной инициализации контроллера происходит уничтожение контроллера.
 *
 * @see tuna.ui.ModuleContainer
 * @see tuna.control.ViewController#_initActions
 * @see tuna.control.ViewController#destroy
 * @param {!Node} target Элемент DOM-дерева, отображением которого следует
 *        управлять.
 */
tuna.control.ViewController.prototype.init = function(target) {
    this.destroy();

    this._container = new tuna.ui.ModuleContainer(target);
    this._container.requireModules(this._modules);
    this._container.init();

    this._initActions();
};


/**
 * Уничтожение контроллера отображения.
 *
 * При уничтожении контроллера отображения вызывается метод разрушения
 * поведения конкретного контроллера, а также уничтожаются проинициализированные
 * ранее модули.
 *
 * Уничтожение контроллера происходит только в том случае, если он был ранее
 * проинициализирован.
 *
 * @see tuna.control.ViewController#_destroyActions
 * @see tuna.control.ViewController#init
 */
tuna.control.ViewController.prototype.destroy = function() {
    if (this._container !== null) {
        this._destroyActions();

        this._container.destroy();
        this._container = null;
    }
};


//
/**
 * Инициализация поведения конкретного контроллера.
 *
 * Данные метод является частью стратегии инициализации контроллера и
 * вызывается после инициализации модулей отображения указанных в массиве
 * <code>this._modules</code>.
 *
 * Основная логика работы приложения приложения определяется реализацией именно
 * данного метода в наследниках класса.
 *
 * Задачей данного метода является организация логики управления отображением
 * и данными той части приложения, к которому относиться контроллер.
 *
 * @protected
 */
tuna.control.ViewController.prototype._initActions = function() {};


/**
 * Разрушение поведения конкретного контроллера.
 *
 * В зависимости от реализации метода <code>_initActions()</code> конкретного
 * контроллера, данным метод должен уничтожать проинициализированное поведение.
 *
 * @see tuna.control.ViewController#_initActions
 * @protected
 */
tuna.control.ViewController.prototype._destroyActions = function() {};


/**
 * Реализация метода обработки завершения трансформаций DOM-дерева внутри
 * целевого элеметна данного контроллера.
 *
 * Трансформации DOM-дерева обычно реализуются в специальных модулях
 * отображения. Для таких модулей в качестве обработчика трансформаций
 * устанавливается соответствующий контроллер.
 *
 * В качестве реализации по-умолчанию обработка трансформации заключается в
 * следующем: зарегистрированные в данном контроллере модули инициалирируются в
 * созданных во время трансформации элементах, и уничтожаются в удаленных.
 *
 * @see tuna.ui.transformers.ITransformHandler
 * @see tuna.ui.transformers.ITransformHandler.handleTransformComplete
 * @inheritDoc
 */
tuna.control.ViewController.prototype.handleTransformComplete =
    function(transformer, createdElements, removedElements) {

    var i = 0,
        l = createdElements.length;

    while (i < l) {
        this._container.initModules(createdElements[i]);
        i++;
    }

    i = 0;
    l = removedElements.length;

    while (i < l) {
        this._container.destroyModules(removedElements[i]);
        i++;
    }
};


/**
 * Метода обработки начала трансформации по-умолчанию не реализован.
 *
 * @see tuna.ui.transformers.ITransformHandler.handleTransformStart
 * @inheritDoc
 */
tuna.control.ViewController.prototype.handleTransformStart =
    function(transformer) {};
