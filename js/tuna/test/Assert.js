/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл Assert.js
//	
//	Реализация класса tuna.test.Assert.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.TestResult");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.test.Assert
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс вспомогательных функций проверки условий и сравнения элементов
 *
 * @public @class
 * @constructor
 */
pkg.Assert = function()
{
	/**
	 * Объект записи и сохранения результатов тетирования.
	 * 
	 * @protected
	 * @type tuna.test.TestResult
	 */
	this._result = null;
};

/**
 * Установка объекта хранения результатов тетирования.
 *
 * @public
 * @param {tuna.test.TestResult} value Объект хранения результатов.
 */
pkg.Assert.prototype.setTestResult = function(value)
{
	tuna.checkArgs(arguments, ["tuna.test.TestResult"]);

	this._result = value;
};

/**
 * Проверка истинности условия.
 *
 * @public
 * @param {Boolean} condition Условие.
 * @param {String} message Сообщение описание условия.
 */
pkg.Assert.prototype.assertTrue = function(condition, message)
{
	if (condition) this._saveSuccess(message);
	else this._saveFault(message);
};

//TODO: Определять координаты ассерта если тот без комментариев.

/**
 * Проверка ложности условия.
 *
 * @public
 * @param {Boolean} condition Условие.
 * @param {String} message Сообщение описание условия.
 */
pkg.Assert.prototype.assertFalse = function(condition, message)
{
	this.assertTrue(!condition, message);
};

/**
 * Проверка существования.
 *
 * @public
 * @param {Object} object Объект.
 * @param {String} message Сообщение описание.
 */
pkg.Assert.prototype.assertNotNull = function(object, message)
{
	this.assertTrue(object != null, message);
};

/**
 * Проверка на равенство.
 *
 * @public
 * @param {Object} a Первый объект.
 * @param {Object} b Второй объект.
 * @param {String} message Сообщение описание.
 */
pkg.Assert.prototype.assertEquals = function(a, b, message)
{
	this.assertTrue(a == b, message);
};

/**
 * Проверка на совпадение хеш-массивов.
 *
 * @public
 * @param {Object} a Первый хеш-массив.
 * @param {Object} b Второй хеш-массив.
 * @param {String} message Сообщение описание.
 */
pkg.Assert.prototype.assertEqualsHash = function(a, b, message)
{
	this.assertNotNull(a, message);
	this.assertNotNull(b, message);

	var i;
	for (i in a)
		this.assertTrue(a[i] == b[i], a[i] + " != " + b[i] + " " + message);

	for (i in b)
		this.assertTrue(a[i] == b[i], a[i] + " != " + b[i] + " " + message);
};

/**
 * Проверка возникновения ошибки функции.
 *
 * При необходимости проверить условие возникновения ошибки выполенения функции можно
 * обернуть требуемую функцию с помощью данного метода. После её выполения будет
 * проведена проверка на появление ошибки и на совпадение типа возникшей ошибки с
 * ожидаемым.
 * Если возникла ошибка другого типа отловлена не будет.
 *
 * @public
 * @param {Function} func Функция при выполенении которой ожидается ошибка.
 * @param {Object} scope Область видимости функции.
 * @param {String} errorType Тип ожидаемой ошибки.
 * @param {String} message Сообщение описание.
 * @param ... Аргументы передаваемые "ошибочной" функции и последний аргумент строка
 * описание проверки.
 */
pkg.Assert.prototype.assertError = function(func, scope, errorType, message)
{
	var catchedError;
	try
	{
		var args = [];
		var i = 4;
		while (i < arguments.length)
		{
			args.push(arguments[i]);
			
			i++;
		}

		func.apply(scope, args);
	}
	catch(error) {catchedError = error;}

	this.assertNotNull(catchedError, message);

	if (catchedError != null && catchedError.name != errorType && errorType != "Error")
	{
		this._saveMessage("Ожидалась ошибка " + errorType + ", но...");
		throw catchedError;
	}
};

/**
 * Сохранение ошибки в объекте результата.
 *
 * @public
 * @param {Error} error Объект ошибки.
 */
pkg.Assert.prototype._saveError = function(error)
{
	if (this._result != null)
		this._result.addError(error);
	else throw error;
};

/**
 * Сохранение провала проверки тестового условия.
 *
 * @public
 * @param {String} message Сообщение сравнения.
 */
pkg.Assert.prototype._saveFault = function(message)
{
	debugger;
	
	if (this._result == null)
		throw tuna.createError("AssertFault", message);
	else this._result.addFault(message);
};

/**
 * Сохранение успеха проверки тестового условия.
 *
 * @public
 * @param {String} message Сообщение сравнения.
 */
pkg.Assert.prototype._saveSuccess = function(message)
{
	if (this._result != null)
		this._result.addSuccess(message);
};

/**
 * Сохранение собщения.
 *
 * @public
 * @param {String} message Сообщение.
 */
pkg.Assert.prototype._saveMessage = function(message)
{
	if (this._result != null)
		this._result.addMessage(message);
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.Assert, "Assert");