/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл Request.js
//
//	Реализация класса tuna.net.Request.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.event.BasicEvent");
tuna.include("tuna.event.EventDispatcher");

tuna.include("tuna.net.IRequest");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.net");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.net.Request
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс HTTP запроса.
 *
 * @extends tuna.event.EventDispatcher
 * @implements tuna.net.IRequest
 * @constructor
 * @param {String} url Адрес запроса.
 */
pkg.Request = function(url)
{
	/**
	 * Адрес запроса.
	 *
	 * @type String
	 */
	this.url = url;

	/**
	 * Флаг о синхронности запроса
	 *
	 * @type Boolean
	 */
	this.isSync = false;

	/**
	 * Метод запроса.
	 *
	 * По-умолчанию GET.
	 *
	 * @type Boolean
	 */
	this.method = "GET";

	/**
	 * Заголовки запроса
	 *
	 * @type Array.<{ name: '', value: '' }>
	 */
	this.headers = [];

	/**
	 * Данные запроса
	 *
	 * @type Object
	 */
	this.data = null;

	/**
	 * Строка результата запроса
	 *
	 * @type String
	 */
	this.__response = {};
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.event.EventDispatcher
/////////////////////////////////////////////////////////////////////////////////////////

tuna.implement(pkg.Request, tuna.net.IRequest);
tuna.extend(pkg.Request, tuna.event.EventDispatcher);

/**
 * Обработка состояния запроса.
 *
 * @private
 */
pkg.Request.prototype.__requestStateHandler = function(request)
{
	//Обрабатываем только результат
	if (request.readyState == 4)
	{
		//Сохраняем результат
		this.__response = request.responseText;

		//Генерируем собфтие готовности
		this.dispatchEvent(new tuna.event.BasicEvent(tuna.event.BasicEvent.COMPLETE));
		request.abort();
	}
}

/**
 * Функци отправки запроса.
 *
 * @param {String} url URL адрес отправки.
 */
pkg.Request.prototype.send = function(url)
{
	try
	{
		//Если задан адреc - заменяем.
		if (url != null) this.url = url;

		//Строка запроса
		var requestURL = this.url;

		if (request != null)
			request.abort();

		//Инициализируем запрос.
		var request = !tuna.IS_IE ?	new XMLHttpRequest() :
			new ActiveXObject("Microsoft.XMLHTTP");

		//Устанвливаем слушатель на изменение состояни запроса, если он асинхронен.
		if (!this.isSync)
		{
			var listen = function(self, request)
			{
				request.onreadystatechange = function()
				{
					self.__requestStateHandler(request);
				}
			}
			listen(this, request);

			listen = null;
		}

		//Парсим данные в x-www-form-urlencoded
		var dataString = tuna.net.Request.encode(this.data);

		//Если метод запроса GET, добавляем строку с данными учитывае наличие запроса
		if (this.method == "GET")
			requestURL += (requestURL.indexOf('?') == -1 ? '?' : '&') + dataString;

		//Открываем соединение
		request.open(this.method, encodeURI(requestURL), !this.isSync);

		//Записываем заголовки
		var i = this.headers.length - 1;
		while (i >= 0)
		{
			request.setRequestHeader(this.headers[i].name, this.headers[i].value);

			i--;
		}

		//Переменная внутренних данных запроса
		var sendData = null;
		if (this.method == "POST")
		{
			sendData = dataString;
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}

		//Отсылаем запрос
		request.send(sendData);

		//Если запрос синхронный - сохраняем результат.
		if (this.isSync)
		{
			//Сохраняем результат
			this.__response = request.responseText;

			//Генерируем собфтие готовности
			this.dispatchEvent(new tuna.event.BasicEvent(tuna.event.BasicEvent.COMPLETE));
		}

		this.__request = request;
	}
	catch (error)
	{
		if (!tuna.isDebug()) throw error;
		else tuna.debug.logger.error(error);
	}
}

/**
 * Прерывание запроса.
 */
pkg.Request.prototype.abort = function()
{
	if (this.__request != null)
		this.__request.abort();
}

/**
 * Возвращение результата в виде строки.
 *
 * @return {String} Строка результата.
 */
pkg.Request.prototype.getResponse = function()
{
	return this.__response;
}

/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 * 
 * @param {Object} object Объект кодирования.
 * @return {String} Перекодированный в строку объект.
 */
pkg.Request.encode = function(object)
{
	return tuna.net.Request.__splitData(object).join('&');
}

/**
 * Рекурсивное разбиение объекта н данные для кодирования в x-www-form-urlencoded.
 * 
 * @param {Object} object Объект кодирования.
 * @param {Object} path Путь к элементарной единице данных.
 * @return {Array} Массив элементарных данных составляющих объект
 * @private
 */
pkg.Request.__splitData = function(object, path)
{
	var result = [];

	if (!path) path = [];

	if (object != undefined && object != null && typeof object != 'function')
	{
		if (typeof object == 'object')
		{
			for (var key in object)
			{
				var newPath = path.length == 0 ? [key] : (path.join(',') + ',' + key).split(',');
				result = result.concat(tuna.net.Request.__splitData(object[key], newPath));
			}
		}
		else result = [path.shift() + (path.length > 0 ? '[' + path.join('][') + ']=' : '=') + object];
	}

	return result;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.Request, "Request");
