


/**
 * Интерфейс класса удаленного метода.
 *
 * Вызов удаленного метода может представлять собой обращение к удаленному
 * REST-интерфейсу напрямую либо через XDM.
 *
 * Данный интерфейс наследует <code>tuna.events.IEventDispatcher</code>. Классы
 * реализующие данный интерфейс должны генерировать следующие события:
 *
 * - <code>result</code> - При успешном результатате запроса.
 * - <code>error</code> - При ошибке запроса.
 *
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
tuna.rest.IMethod = function() {};


/**
 * Вызов удаленного метода.
 *
 * @param {Object} args Объект аргументов удаленного метода.
 */
tuna.rest.IMethod.prototype.call = function(args) {};


/**
 * Клонирование удаленного метода.
 *
 * Если задано новое имя метода, то он копируется с другим именем.
 *
 * @see tuna.rest.MethodFactory
 * @param {string=} opt_name Новое имя копии.
 * @return {tuna.rest.IMethod} Копия метода.
 */
tuna.rest.IMethod.prototype.clone = function(opt_name) {};
