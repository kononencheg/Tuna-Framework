


/**
 * Интефейс класса фабрики удаленных методов.
 *
 * @interface
 */
tuna.rest.IMethodFactory = function() {};


/**
 * Создание метода по имени.
 *
 * @param {string} name Имя метода.
 * @return {tuna.rest.IMethod} Созданный метод либо <code>null</code>.
 */
tuna.rest.IMethodFactory.prototype.createMethod = function(name) {};
