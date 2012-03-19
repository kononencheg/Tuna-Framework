/**
 * Convert array-like object to array.
 *
 * @param {Object|null|undefined} list Array-like object.
 * @return {Array} Converted array.
 */
tuna.utils.toArray = function(list) {
    return Array.prototype.slice.call(list);
};

/**
 * Объявление реализации интерфейса.
 *
 * Добавление либо замена (уже существующих) методов прототипа класса
 * 'интерфейса', неоходимое для оповещения о не реализованных методах.
 *
 * При объявлении интерфейса в каждом объявленном методе следует
 * генерировать ошибку типа <code>InterfaceMethodError</code>.
 *
 * Данную функцию следует вызывать перез вызовом функции
 * <code>tuna.utils.extend</code>.
 *
 * @param {!Object} Class Класс который должен реализовать интерфейс.
 * @param {!Object} Interface Класс "интерфейс" для реализации.
 */
tuna.utils.implement = function(Class, Interface) {
    if (!tuna.IS_COMPILED) {
        for (var method in Interface.prototype) {
            if (typeof Interface.prototype[method] === 'function') {
                Class.prototype[method] = Interface.prototype[method];
            }
        }
    }
};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на
 * него, сохраняя конструктор.
 *
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
tuna.utils.extend = function(Class, Parent) {
    /**
     * @constructor
     */
    var Link = function() {};
    Link.prototype = Parent.prototype;

    Class.prototype = new Link();
    Class.prototype.constructor = Class;
};

/**
 * Функция выполнения строки JavaScript кода в глобальной области имен.
 *
 * Не следует использовать нигде в логике приложенния.
 *
 * @param {!string} code Строка кода.
 * @return {*} Результат выполнения.
 * @deprecated
 */
tuna.utils.eval = function(code) {
    return (window.execScript !== undefined) ?
            window.execScript(code) : window.eval(code);
};

/**
 * Привязывание определенного контекста к функции или методу.
 *
 * @param {!function()} func
 * @param {Object} context
 * @return {function()}
 */
tuna.utils.bind = function(func, context) {
    if (func.bind !== undefined) {
        return func.bind(context);
    } else {
        var args = Array.prototype.slice.call(arguments, 2);

        return function() {
            return func.apply
                (context, args.concat(tuna.utils.toArray(arguments)));
        };
    }
};

/**
 * Отложенное выполнение метода. Д
 *
 * @param {!Function} callback
 */
tuna.utils.nextTick = function(callback) {
    setTimeout(callback, 0);
};

/**
 * Клонирование объекта.
 *
 * @param {Object} object
 */
tuna.utils.clone = function(object) {
    return JSON.parse(JSON.stringify(object));
};

/**
 * Клонирование массива.
 *
 * @param {Array} array
 */
tuna.utils.cloneArray = function(array) {
    return array.slice(0);
};

/**
 * @param {Object} object1
 * @param {Object} object2
 * @return {boolean}
 */
tuna.utils.isObjectsEquals = function(object1, object2) {
    var result = object1 === object2;

    if (!result && object1 !== null && object2 !== null) {
        result = true;

        for (var key in object1) {
            if (object1[key] instanceof Object &&
                object2[key] instanceof Object) {
                result = result &&
                         tuna.utils.isObjectsEquals(object1[key], object2[key]);
            } else {
                result = result && object1[key] === object2[key];
            }
        }
    }

    return result;
};

/**
 * Поиск индекса объекта в массиве.
 *
 * @param {*} element
 * @param {Array} array
 */
tuna.utils.indexOf = function(element, array) {
    if (array.indexOf !== undefined) {
        return array.indexOf(element);
    } else {
        var i = 0,
            l = array.length;

        while (i < l) {
            if (array[i] === element) {
                return i;
            }

            i++;
        }
    }

    return -1;
};

/**
 * @constructor
 */
var Config = function() {

    /**
     * @private
     * @type {Object.<string, string>}
     */
    this.__data = null;
};

/**
 * @param {Object} data
 */
Config.prototype.init = function(data) {
    this.__data = data;
};

/**
 * @param {!string} key
 * @return {?string}
 */
Config.prototype.get = function(key) {
    if (this.__data[key] !== undefined) {
        return this.__data[key];
    }

    return null;
};

/**
 * @type Config
 */
tuna.utils.config = new Config();

