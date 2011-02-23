/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл TestSuite.js
//	
//	Реализация класса tuna.test.TestSuite.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.ITestHandler");
tuna.include("tuna.test.ITest");
tuna.include("tuna.test.TestCase");
tuna.include("tuna.test.TestResult");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.test.TestSuite
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс хранения и проведения набора тестов.
 *
 * @class
 * @extend tuna.test.TestCase
 * @implement tuna.test.ITest
 * @implement tuna.test.ITestHandler
 *
 * @constructor
 * @param {String} name Имя набора тестов.
 */
pkg.TestSuite = function(name)
{
	/**
	 * Массив тестов для выполнения.
	 *
	 * @private 
	 * @type Array.<tuna.test.ITest>
	 */
	this.__tests = [];

	/**
	 * Индекс текущего теста
	 *
	 * @private
	 * @type Number
	 */
	this.__currentTestIndex = 0;

	/**
	 * Текущий тест
	 *
	 * @private
	 * @type tuna.test.ITest
	 */
	this.__currentTest = null;

	//Родительский конструктор.
	tuna.test.TestSuite._super.constructor.call(this, name);
};

tuna.implement(pkg.TestSuite, tuna.test.ITestHandler);
tuna.extend(pkg.TestSuite, tuna.test.TestCase);

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.test.TestCase
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Запуск тестов.
 *
 * Реализация запуска тестов.
 *
 * @override @protected
 */
pkg.TestSuite.prototype._runImpl = function()
{
	this.__currentTestIndex = 0;
	this.__startNewTest();
}

/**
 * Установка объекта хранения и вывода результата.
 *
 * Передает каждому тесту в наборе
 *
 * @override @public
 * @param {tuna.test.TestResult} value Объект хранения результатов.
 */
pkg.TestSuite.prototype.setTestResult = function(value)
{
	tuna.checkArgs(arguments, ["tuna.test.TestResult"]);

	var i = this.__tests.length - 1;
	while (i >= 0)
	{
		this.__tests[i].setTestResult(value);

		i--;
	}

	this._result = value;
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Реализация tuna.test.ITestHandler
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Обработка окончания подготовки проведения теста.
 *
 * Запуск самого теста.
 *
 * @public
 */
pkg.TestSuite.prototype.handleSetup = function()
{
	this._saveMessage("[" + this.__currentTest.name + ": Инициализация окончена.]");

	this.__currentTest.run();
};

/**
 * Обработка окончания проверки тестовых условий.
 */
pkg.TestSuite.prototype.handleRun = function()
{
	this._saveMessage("[" + this.__currentTest.name + ": Тестирование окончено.]");

	this.__currentTest.destroy();
};

/**
 * Обработка окончания завершения теста.
 */
pkg.TestSuite.prototype.handleDestroy = function()
{
	this._saveMessage("[" + this.__currentTest.name + ": Завершение окончено.]");

	this.__currentTestIndex++;

	this.__startNewTest();
};

/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Запуск теста.
 *
 * @private
 */
pkg.TestSuite.prototype.__startNewTest = function()
{
	this.__currentTest = this.__tests[this.__currentTestIndex];

	//Если тесты еще есть то продолжаем
	if (this.__currentTest != null)
		this.__currentTest.setup();
	//Иначе - завершили процесс тестирования данного набора.
	else if (this._handler != null) this._handler.handleRun();
	else this._saveMessage("[" + this.name + ": Тестирование окончено.]");
}

/**
 * Устанока объекта обработки асинхронного завершения процессов проведения теста.
 *
 * @public
 * @param {tuna.test.ITest} value Объект обработки.
 */
pkg.TestSuite.prototype.addTest = function(value)
{
	tuna.checkArgs(arguments, ["tuna.test.ITest"]);
	
	this.__tests.push(value);

	value.setTestHandler(this);
	
	if (this._result != null)
		value.setTestResult(this._result);
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.TestSuite, "TestSuite");
