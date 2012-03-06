/**
 * Convert array-like object to array.
 *
 * @param {Object} list Array-like object.
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
 * @param {!Function} func
 * @param {Object} context
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
 * @param {*} object
 * @param {Array=} clones
 */
tuna.utils.clone = function(object, clones) {
    if (object instanceof Array) {
        return tuna.utils.cloneArray(object);
    } else if (object instanceof Date) {
        return tuna.utils.cloneDate(object);
    } else if (object instanceof Object) {
        if (clones === undefined) {
            clones = [object];
        } else {
            clones.push(object);
        }

        var result = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (tuna.utils.indexOf(object[key], clones) === -1) {
                    result[key] = tuna.utils.clone(object[key]);
                } else {
                    throw new TypeError('Cloning circular structure');
                }
            }
        }

        return result;
    }

    return object;
};

/**
 * Клонирование даты.
 *
 * @param {Date} date
 */
tuna.utils.cloneDate = function(date) {
    return new Date(date.getTime());
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

