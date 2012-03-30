


/**
 * Основной интерфейс классов генерирующих события и предоставляющих возможность
 * их обработки.
 *
 * @see tuna.events.BasicEvent
 * @see tuna.events.EventDispatcher
 * @interface
 */
tuna.events.IEventDispatcher = function() {};


/**
 * Оповещение слушателей о наступлении события.
 *
 * @see tuna.events.BasicEvent#preventDefault
 * @param {!tuna.events.BasicEvent|string} event Событие, о котором необходимо
 *        оповестить. В качестве данного аргумента может выступать либо объект
 *        события, либо тип события. В случае если передан тип события объект
 *        события должен быть создан автоматически.
 * @param {*=} opt_data Сопуствующие событию данные.
 * @return {boolean} Флаг отсутствия отмены обрабтки по-умолчанию.
 */
tuna.events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {};


/**
 * Добавление обработчика события.
 *
 * Обработчиком события должна быть функция принимающая в качестве аргументов
 * объект события и сопуствующие ему данные. В случае, если сопутствующие данные
 * не были заданы в качестве данных передается <code>null</code>.
 *
 * По-умолчанию функция обработчик будет вызвана в контексте объекта который
 * оповестил о событии.
 *
 * @see tuna.events.IEventDispatcher#dispatch
 * @param {string} type Тип события который необходимо обрабатывать.
 * @param {!function(tuna.events.BasicEvent, *)} listener Функция-обработчик
 *        события.
 */
tuna.events.IEventDispatcher.prototype.addEventListener =
    function(type, listener) {};


/**
 * Удаление слушателя события.
 *
 * @see tuna.events.IEventDispatcher#addEventListener
 * @param {string} type Тип события который не нужно больше обрабатывать.
 * @param {!function(tuna.events.BasicEvent, *)} listener Функция-обработчик.
 */
tuna.events.IEventDispatcher.prototype.removeEventListener =
    function(type, listener) {};


/**
 * Проверка наличия обработчика события определенного типа.
 *
 * @param {string} type Тип события который, наличие обработчика которого
 *        следует определить.
 * @param {!function(tuna.events.BasicEvent, *)} listener Функция-обработчик.
 * @return {boolean} Результат проверки наличия обработчика.
 */
tuna.events.IEventDispatcher.prototype.hasEventListener =
    function(type, listener) {};
