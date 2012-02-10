/**
 * @constructor
 * @implements {tuna.net.IRequest}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} url
 */
var Request = function(url) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @private
     * @type string
     */
    this.__url = url || '/';
    
    /**
     * @private
     * @type boolean
     */
    this.isSync = false;

    /**
     * @private
     * @type string
     */
    this.method = 'GET';

    /**
     * @private
     * @type Array.<{ name: string, value: string }>
     */
    this.headers = [];

    /**
     * @private
     * @type Object
     */
    this.__data = null;

    /**
     * @private
     * @type ?string
     */
    this.__response = null;

    /**
     * @private
     * @type XMLHttpRequest
     */
    this.__request = null;
};

tuna.utils.implement(Request, tuna.net.IRequest);
tuna.utils.extend(Request, tuna.events.EventDispatcher);

/**
 * @param {Object} data
 */
Request.prototype.setData = function(data) {
    this.__data = data;
};

/**
 * @param {string} url
 */
Request.prototype.setURL = function(url) {
    this.__url = url;
};

/**
 * @private
 * @param {XMLHttpRequest} request
 */
Request.prototype.__requestStateHandler = function(request) {
    if (request.readyState === 4) {
        this.__response = request.responseText;

        this.dispatch('complete', this.__response);

        request.abort();
    }
};

/**
 *
 */
Request.prototype.send = function() {
    var requestURL = this.__url;

    if (this.__request !== null) {
        this.__request.abort();
    }

    var request = !tuna.IS_IE ?
                    new XMLHttpRequest() :
                    new ActiveXObject('Microsoft.XMLHTTP');

    if (!this.isSync) {
        var self = this;

        request.onreadystatechange = function() {
            self.__requestStateHandler(request);
        }
    }

    var dataString = Request.encode(this.__data);

    if (this.method === 'GET' && dataString !== '') {
        requestURL += (requestURL.indexOf('?') === -1 ? '?' : '&') + dataString;
    }

    request.open(this.method, encodeURI(requestURL), !this.isSync);

    var i = this.headers.length - 1;
    while (i >= 0) {
        request.setRequestHeader(this.headers[i].name, this.headers[i].value);

        i--;
    }

    var sendData = null;
    if (this.method === 'POST') {
        request.setRequestHeader
            ('Content-Type', 'application/x-www-form-urlencoded');

        sendData = dataString;
    }

    request.send(sendData);

    if (this.isSync) {
        this.__response = request.responseText;

        this.dispatch('complete', this.__response);
    }

    this.__request = request;
};

/**
 * Прерывание запроса.
 */
Request.prototype.abort = function() {
    if (this.__request !== null) {
        this.__request.abort();
    }
};

/**
 * Возвращение результата в виде строки.
 *
 * @return {?string} Строка результата.
 */
Request.prototype.getResponse = function() {
    return this.__response;
};

/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 *
 * @param {Object} object Объект кодирования.
 * @return {string} Перекодированный в строку объект.
 */
Request.encode = function(object) {
    return Request.__splitData(object).join('&');
};

/**
 * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
 *
 * @private
 * @param {Object} object Объект кодирования.
 * @param {Object=} path Путь к элементарной единице данных.
 * @return {Array} Массив элементарных данных составляющих объект
 */
Request.__splitData = function(object, path) {
    var result = [];

    if (path === undefined) {
        path = [];
    }

    if (object !== null && !(object instanceof Function)) {
        if (object instanceof Object) {
            for (var key in object) {
                var newPath = path.length === 0 ? [key] : (path.join(',') + ',' + key).split(',');
                result = result.concat(Request.__splitData(object[key], newPath));
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
 * @constructor
 * @extends {Request}
 */
tuna.net.Request = Request;

