/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 *
 * @param {Object} object Объект кодирования.
 * @return {string} Перекодированный в строку объект.
 */
tuna.net.encode = function(object) {
    return tuna.net.__splitData(object).join('&');
};

/**
 * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
 *
 * @private
 * @param {Object} object Объект кодирования.
 * @param {Object=} path Путь к элементарной единице данных.
 * @return {Array} Массив элементарных данных составляющих объект
 */
tuna.net.__splitData = function(object, path) {
    var result = [];

    if (path === undefined) {
        path = [];
    }

    if (object !== null && !(object instanceof Function)) {
        if (object instanceof Object) {
            for (var key in object) {
                var newPath = path.length === 0 ?
                    [key] : (path.join(',') + ',' + key).split(',');

                result = result.concat(tuna.net.__splitData(object[key], newPath));
            }
        } else {
            result = [
                path.shift() +
                    (path.length > 0 ? '[' + path.join('][') + ']=' : '=') +
                        encodeURIComponent('' + object)
            ];
        }
    }

    return result;
};

/**
 * @const
 * @type {string}
 */
tuna.net.__DECODE_HELPER = '|';

/**
 * @param {string} search
 * @return {Object}
 */
tuna.net.decode = function(search) {
    var result = {};

    var parsedSearch = search.split('][').join(tuna.net.__DECODE_HELPER);
    parsedSearch = parsedSearch.split('[').join(tuna.net.__DECODE_HELPER);
    parsedSearch = parsedSearch.split(']').join('');

    var vars = parsedSearch.split('&');
    var i = 0,
        l = vars.length;

    var pair = null;
    var path = null;
    var pathToken = null;

    var context = null;
    while (i < l) {
        pair = vars[i].split('=');
        path = pair.shift().split(tuna.net.__DECODE_HELPER);

        context = result;

        while (path.length > 0) {
            pathToken = path.shift();

            if (path.length === 0) {
                context[pathToken] = decodeURIComponent(pair.shift());
            } else if (context[pathToken] === undefined) {
                context[pathToken] = {};
            }

            context = context[pathToken];
        }

        i++;
    }

    return result;
};