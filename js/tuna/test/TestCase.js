/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл TestCase.js
//	
//	Реализация класса tuna.test.TestCase.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.Assert");
tuna.include("tuna.test.ITestHandler");
tuna.include("tuna.test.ITest");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.test.TestCase
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс проверки тестового условия.
 *
 * Для реализации специальных тестовых условий их следует наследовать от данного класса.
 *
 * @class
 * @extend tuna.test.Assert
 * @implement tuna.test.ITest
 *
 * @constructor
 * @param {Strng} name Имя тестовго условия.
 */
pkg.TestCase = function(name)
{
	/**
	 * Объект обработки завершения процессов проведения теста.
	 *
	 * По завершению каждой сачти процесса тестирвоания необходимо вызывать соответсвующий
	 * метод обработки у данного объекта.
	 *
	 * @protected
	 * @type tuna.test.ITestHandler
	 */
	this._handler = null;

	/**
	 * Имя тестового условия.
	 *
	 * @public
	 * @type String
	 */
	this.name = name;

	/**
	 * Флаг об окончании инициализации.
	 *
	 * @private
	 * @type Boolean
	 */
	this.__isSetupComplete = false;

	/**
	 * Флаг об окончании теста.
	 *
	 * @private
	 * @type Boolean
	 */
	this.__isRunComplete = false;

	/**
	 * Флаг об окончании завершения.
	 *
	 * @private
	 * @type Boolean
	 */
	this.__isDestroyComplete = false;


	//Родительский конструктор.
	tuna.test.TestCase._super.constructor.call(this);
};

tuna.implement(pkg.TestCase, tuna.test.ITest);
tuna.extend(pkg.TestCase, tuna.test.Assert);

/////////////////////////////////////////////////////////////////////////////////////////
//	Реализация tuna.test.ITest
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Подготовка проверки тестового условия.
 *
 * Если для проверки условия требуется провести какие либо действия слабо связанные с
 * проверкой условия, защищенный метод <code>_setupImpl():void</code> следует переопределить в
 * потомках данного класса.
 *
 * @final @public
 */
pkg.TestCase.prototype.setup = function()
{
	//Очищаем флаг.
	this.__isSetupComplete =false;

	this._saveMessage("[" + this.name + ": Инициализация.]");

	var setup = this.__getTestWrapper(this._setupImpl, this);
	setup();
	setup = null;
};

/**
 * Проверка тестового условия.
 *
 * Запуск процесса проверки тестового условия в потомке класса, следует реализовывать в
 * методе <code>_runImpl():void</code>, переопределенном в наследнике.
 *
 * @final @public
 */
pkg.TestCase.prototype.run = function()
{
	this.__isRunComplete = false;

	this._saveMessage("[" + this.name + ": Запуск тестирования.]");

	var run = this.__getTestWrapper(this._runImpl, this);
	run();
	run = null;
};

/**
 * Завершение проверки тестового условия.
 *
 * Если после проведения проверки требуется провести какие либо действия, то в наследниках
 * необходимо переопределить метод <code>_runImpl():void</code>.
 *
 * @final @public
 */
pkg.TestCase.prototype.destroy = function()
{
	this.__isDestroyComplete = false;

	this._saveMessage("[" + this.name + ": Завершение.]");

	var destroy = this.__getTestWrapper(this._destroyImpl, this);
	destroy();
	destroy = null;
};

/**
 * Устанока объекта обработки завершения процессов проведения теста.
 *
 * @public
 * @param {tuna.test.ITestHandler} value Объект обработки.
 */
pkg.TestCase.prototype.setTestHandler = function(value)
{
	tuna.checkArgs(arguments, ["tuna.test.ITestHandler"]);

	this._handler = value;
};

/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Оповещение о завершении инициализации.
 *
 * @final @protected
 */
pkg.TestCase.prototype._setupComplete = function()
{
	if (!this.__isSetupComplete)
	{
		this.__isSetupComplete = true;
		this._handler.handleSetup();
	}
};

/**
 * Оповещение о завершении проверки.
 *
 * @final @protected
 */
pkg.TestCase.prototype._runComplete = function()
{
	if (!this.__isRunComplete)
	{
		this.__isRunComplete = true;
		this._handler.handleRun();
	}
};

/**
 * Оповещение о завершении проверки.
 *
 * @final @protected
 */
pkg.TestCase.prototype._destroyComplete = function()
{
	if (!this.__isDestroyComplete)
	{
		this.__isDestroyComplete = true;
		this._handler.handleDestroy();
	}
};

/**
 * Реализация подготовки к тестированию.
 *
 * Следует переопределять в наследниках. По завершению процесса подготовки необходимо
 * вызвать метод <code>_setupComplete():void</code>>.
 *
 * @protected
 */
pkg.TestCase.prototype._setupImpl = function()
{
	this._setupComplete();
};

/**
 * Реализация проверки тестового условия.
 *
 * Следует переопределять в наследниках. По завершению процесса тестирования необходимо
 * вызвать метод <code>_runComplete():void</code>.
 *
 * @protected
 */
pkg.TestCase.prototype._runImpl = function()
{
	this._runComplete();
};

/**
 * Реализация завершения проверки.
 *
 * Следует переопределять в наследниках. По завершению процесса тестирования необходимо
 * вызвать метод <code>_destroyComplete():void</code>.
 *
 * @protected
 */
pkg.TestCase.prototype._destroyImpl = function()
{
	this._destroyComplete();
};

/**
 * Возвращение функции обёртки отлова ошибок.
 *
 * Данный метод следует использовать для регистрирования обработчиков, являющихся
 * частью процесса проверки тестового условия.
 *
 * @private
 * @param {Function} handler Функция, которую необходимо вызвать.
 * @param {Object} scope Область видимость вызываемой функции.
 * @return {Funrion} Функция-обертка исходной функции.
 */
pkg.TestCase.prototype.__getTestWrapper = function(handler, scope)
{
	var result = this._result;
	
	return function()
	{
		try
		{
			handler.apply(scope, arguments);
		}
		catch (error)
		{
			//В случа ошибки - выводим ее в результат.
			if (result != null && !tuna.IS_IE)
				result.addError(error);
			else throw error;
		}
	};
};

/**
 * Метод обертка создания обертки асинхронного метода.
 *
 * Для отлова ошибок в методе-обрабтчике синхронного события его необходимо "завернуть"
 * с помощью данного метода.
 *
 * @protected
 * @param {Function} handler Метод-обработчик асинхронного процесса.
 * @return {Funrion} Функция-обертка исходной функции.
 */
pkg.TestCase.prototype._getAsyncWrapper = function(handler)
{
	return this.__getTestWrapper(handler, this);
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.TestCase, "TestCase");
