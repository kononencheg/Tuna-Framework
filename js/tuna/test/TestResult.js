/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл TestResult.js
//	
//	Реализация класса tuna.test.TestResult и tuna.test.__TestMessage.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.debug.IWriter");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.test.TestResult
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс хранения и вывода результатов тестирования.
 *
 * @public @class
 * @constructor
 */
pkg.TestResult = function()
{
	/**
	 * Объект вывода сообщений.
	 *
	 * @private
	 * @type tuna.debug.IWriter
	 */
	this.__writer = null;

	/**
	 * Архив событий тестирования.
	 *
	 * @private
	 * @type Array.<tuna.test.__TestMessage>
	 */
	this.__log = [];
	
	//Костыль для IE
	if (tuna.IS_IE)
	{
		var listen = function(self)
		{
			window.attachEvent
			(
				"onerror",
				function(message, where, line)
				{
					var testMessage = new tuna.test.__TestMessage(message, "error");
					self.__log.push(testMessage);

					if (self.__writer != null)
					{
						self.__writer.write("[" + self.__getTimeString(testMessage.time) +
							"] Ошибка сценария:  " + message);
						self.__writer.write(where + ":" + line);
					}

					return true;
				}
			);
		};

		listen(this);
		listen = null;
	}
};

/**
 * Установка объекта вывода.
 *
 * @public
 * @param {tuna.debug.IWriter} value Объект вывода.
 */
pkg.TestResult.prototype.setWriter = function(value)
{
	tuna.checkArgs(arguments, ["tuna.debug.IWriter"]);

	this.__writer = value;
};

/**
 * Добавления сообщения об ошибке.
 *
 * @public
 * @param {Error} error Объект ошибки.
 */
pkg.TestResult.prototype.addError = function(error)
{
	var testMessage = new tuna.test.__TestMessage(error.message, "error");
	this.__log.push(testMessage);

	if (this.__writer != null)
	{
		this.__writer.write("[" + this.__getTimeString(testMessage.time) +
			"] Ошибка сценария:  " + error.message);

		if (error.stack != null)
			this.__writer.write(error.stack);
	}
};

/**
 * Добавления провале тестового сравнения.
 *
 * @public
 * @param {String} message Сообщение сравнения.
 */
pkg.TestResult.prototype.addFault = function(message)
{
	var testMessage = new tuna.test.__TestMessage(message, "fault");
	this.__log.push(testMessage);

	if (this.__writer != null)
		this.__writer.write("[" + this.__getTimeString(testMessage.time) +
			"] Ошибка сравнения: " + message);
};

/**
 * Добавления успеха тестового сравнения.
 *
 * @public
 * @param {String} message Сообщение сравнения.
 */
pkg.TestResult.prototype.addSuccess = function(message)
{
	var testMessage = new tuna.test.__TestMessage(message, "success");
	this.__log.push(testMessage);
};

/**
 * Добавления сообщения.
 *
 * @public
 * @param {String} message Сообщение.
 */
pkg.TestResult.prototype.addMessage = function(message)
{
	var testMessage = new tuna.test.__TestMessage(message, "fault");
	this.__log.push(testMessage);

	if (this.__writer != null)
		this.__writer.write("[" + this.__getTimeString(testMessage.time) + "] " +
			message);
};

/**
 * Отформатированное сообщение текущей даты.
 *
 * @private
 * @param {Date} date Дата.
 * @return {String} Строка даты.
 */
pkg.TestResult.prototype.__getTimeString = function(date)
{
	return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " +
		date.getMilliseconds();
}

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.test.__TestMessage
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс сообщения о событии теста.
 *
 * @private @class
 * @constructor
 */
pkg.__TestMessage = function(text, type)
{
	/**
	 * Сообщение события.
	 *
	 * @public
	 * @type String
	 */
	this.text = text;

	/**
	 * Тип события.
	 *
	 * @public
	 * @type String
	 */
	this.type = type;

	/**
	 * Время события.
	 *
	 * @public
	 * @type Date
	 */
	this.time = new Date();
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.TestResult, "TestResult");