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

    var dataString = tuna.net.encode(this.__data);

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
 * @constructor
 * @extends {Request}
 */
tuna.net.Request = Request;

