


/**
 * Класс фабрики удаленных методов, реализует интерфейс
 * <code>tuna.rest.IMethodFactory</code>.
 *
 * @constructor
 * @implements {tuna.rest.IMethodFactory}
 */
tuna.rest.MethodFactory = function() {

    /**
     * @private
     * @type {Object.<string, !tuna.rest.IMethod>}
     */
    this.__methods = {};

    /**
     * @private
     * @type {tuna.rest.DefaultMethod}
     */
    this.__defaultMethod = null;
};


/**
 * Установка метода по-умолчанию.
 *
 * Установленный метод является прототипом для методов создаваемых с различными
 * именами.
 *
 * @see tuna.rest.MethodFactory#createMethod
 * @param {!tuna.rest.DefaultMethod} method Прототип метода по-умолчанию.
 */
tuna.rest.MethodFactory.prototype.setDefaultMethod = function(method) {
    this.__defaultMethod = method;
};


/**
 * Создание метода по имени.
 *
 * В случае если метод с данным именем не был зарегистрирован, создается копия
 * метода по-умолчанию с данным именем.
 *
 * @see tuna.rest.MethodFactory#setDefaultMethod
 * @param {string} name Имя метода.
 * @return {tuna.rest.IMethod} Созданный метод либо <code>null</code>.
 */
tuna.rest.MethodFactory.prototype.createMethod = function(name) {
    var result = null;

    if (this.__methods[name] !== undefined) {
        result = this.__methods[name].clone();
    } else if (this.__defaultMethod !== null) {
        result = this.__defaultMethod.clone();
        result.setName(name);
    }

    return result;
};


/**
 * Регистрация прототипа метода.
 *
 * @param {string} name Имя метода.
 * @param {!tuna.rest.IMethod} method Прототип метода. В случае, если имя
 *        метода не задано, регистраця не произойдет.
 */
tuna.rest.MethodFactory.prototype.registerMethod = function(name, method) {
    this.__methods[name] = method;
};
