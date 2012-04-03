


/**
 * Класс отправки XHR-запроса реализующий интерфейс
 * <code>tuna.net.IRequest</code>.
 *
 * @constructor
 * @implements {tuna.net.IRequest}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} opt_url URL-адрес к которому сделует сделать запрос.
 * @param {boolean=} opt_isSync Флаг синхронности запроса.
 */
tuna.net.Request = function(opt_url, opt_isSync) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @private
     * @type {string}
     */
    this.__url = opt_url || '/';

    /**
     * @private
     * @type {boolean}
     */
    this.__isSync = !!opt_isSync;

    /**
     * @private
     * @type {string}
     */
    this.__method = tuna.net.Request.METHOD_GET;

    /**
     * @private
     * @type {Object.<string, string>}
     */
    this.__headers = {};

    /**
     * @private
     * @type {Object}
     */
    this.__data = null;

    /**
     * @private
     * @type {Array.<XMLHttpRequest>}
     */
    this.__requests = [];
};


tuna.utils.extend(tuna.net.Request, tuna.events.EventDispatcher);


/**
 * Константа имени GET запроса
 *
 * @const
 * @type {string}
 */
tuna.net.Request.METHOD_GET = 'GET';


/**
 * Константа имени POST запроса
 *
 * @const
 * @type {string}
 */
tuna.net.Request.METHOD_POST = 'POST';


/**
 * Установка URL-адреса запроса.
 *
 * @param {string} url URL-адрес запроса.
 */
tuna.net.Request.prototype.setURL = function(url) {
    this.__url = url;
};


/**
 * Установка данных запроса.
 *
 * @param {Object} data Данные запроса.
 */
tuna.net.Request.prototype.setData = function(data) {
    this.__data = data;
};


/**
 * Установка HTTP-метода запроса. Например,
 * <code>tuna.net.Request.METHOD_GET</code> или
 * <code>tuna.net.Request.METHOD_POST</code>.
 *
 * В зависимости от типа запроса сопутствующие данные будет добавлены к
 * URL-адресу запроса (GET), либо к телу запроса (не GET).
 *
 * @param {string} method Метод запроса.
 */
tuna.net.Request.prototype.setMethod = function(method) {
    this.__method = method;
};


/**
 * Добавление HTTP-заголовка запроса.
 *
 * @param {string} name Название заголовка.
 * @param {string} value Значание заголовка.
 */
tuna.net.Request.prototype.addHeader = function(name, value) {
    this.__headers[name] = value;
};


/**
 * Удаление HTTP-заголовка запроса.
 *
 * @param {string} name Название заголовка.
 */
tuna.net.Request.prototype.removeHeader = function(name) {
    delete this.__headers[name];
};


/**
 * @inheritDoc
 */
tuna.net.Request.prototype.send = function(opt_data) {
    if (opt_data !== undefined) {
        this.__data = opt_data;
    }

    var request = !tuna.IS_IE ? new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    if (!this.__isSync) {
        var self = this;

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                self.dispatch('complete', request.responseText);

                self.__removeRequest(request);
                request.abort();
            }
        }
    }

    for (var name in this.__headers) {
        request.setRequestHeader(name, this.__headers[name]);
    }

    var requestURL = this.__url;
    var dataString = tuna.utils.urlEncode(this.__data);

    if (this.__method === tuna.net.Request.METHOD_GET &&
        dataString.length !== 0) {
        requestURL += (requestURL.indexOf('?') === -1 ? '?' : '&') + dataString;
    }

    request.open(this.__method, encodeURI(requestURL), !this.__isSync);

    var sendData = null;
    if (this.__method !== tuna.net.Request.METHOD_GET) {
        request.setRequestHeader(
            'Content-Type', 'application/x-www-form-urlencoded'
        );

        sendData = dataString;
    }

    request.send(sendData);

    if (this.__isSync) {
        this.dispatch('complete', request.responseText);
    } else {
        this.__requests.push(request);
    }
};


/**
 * @inheritDoc
 */
tuna.net.Request.prototype.abort = function() {
    while (this.__requests.length > 0) {
        this.__requests.shift().abort();
    }
};


/**
 * @param {XMLHttpRequest} request Объект XHR запроса.
 * @private
 */
tuna.net.Request.prototype.__removeRequest = function(request) {
    var i = 0,
        l = this.__requests.length;

    while (i < l) {
        if (this.__requests[i] === request) {
            this.__requests.splice(i, 1);
        }

        i++;
    }
};
