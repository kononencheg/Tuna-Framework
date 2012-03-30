


/**
 * Интерфейс хранилища модели данных приложения.
 *
 * Наследует интерфейс <code>tuna.events.IEventDispatcher</code>. Классы
 * реализующие данный интерфейс должны генерировать следующие события:
 *
 * - <code>update</code> - При изменении хранимого набора данных.
 *
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
tuna.model.IResource = function() {};


/**
 * Очищение хранимого набора данных.
 */
tuna.model.IResource.prototype.clear = function() {};
