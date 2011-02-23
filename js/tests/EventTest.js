/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK TESTS
//	
//	Файл EventTest.js
//	
//	Реализация класса tests.EventTest.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.TestCase");
tuna.include("tuna.event.EventDispatcher");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tests");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tests.EventTest
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс проверки работы воспроизведения и отлова событий.
 *
 * @class
 * @extend tuna.test.TestCase
 *
 * @constructor
 */
pkg.EventTest = function()
{
	//Родительский конструктор.
	tests.EventTest._super.constructor.call(this, "EVENT PROCESSING TEST");
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.test.TestCase
/////////////////////////////////////////////////////////////////////////////////////////

tuna.extend(pkg.EventTest, tuna.test.TestCase);

/**
 * Реализация подготовки к тестированию.
 *
 * @override @protected
 */
pkg.EventTest.prototype._setupImpl = function()
{
	this._saveMessage("Установка значений внутренних свойств");

	this.__param = 0;

	this._setupComplete();
};

/**
 * Реализация проверки тестового условия.
 *
 * @override @protected
 */
pkg.EventTest.prototype._runImpl = function()
{
	this._saveMessage("Проверка корректности работы методов класса tuna.event.EventDispatcher");

	this.__test_addEventListener();
	this.__test_dispatchEvent();

	this._runComplete();
};

/**
 * Тест уставноки, удаления и проверки на существования слушателей события.
 *
 * Необходимо проверить корректность работы функций установки, удаления и проверки
 * установленности слушателей событий.
 *
 * @private
 */
pkg.EventTest.prototype.__test_addEventListener = function()
{
	this._saveMessage("Проверка уставноки, удаления и проверки на существования слушателей события");

	//Проверим добавление
	this.__dispatcher = new EventDispatcher();
	var listener = function(event){};
	var anotherListener = function(event){};

	this.assertTrue(this.__dispatcher.addEventListener("1", listener), 0);
	this.assertTrue(this.__dispatcher.addEventListener("1", anotherListener), 1);
	this.assertFalse(this.__dispatcher.addEventListener("1", listener), 2);
	this.assertTrue(this.__dispatcher.hasEventListener("1", listener), 3);

	this.assertTrue(this.__dispatcher.removeEventListener("1", listener), 4);
	this.assertFalse(this.__dispatcher.removeEventListener("1", listener), 5);
	this.assertFalse(this.__dispatcher.hasEventListener("1", listener), 6);

	this.assertTrue(this.__dispatcher.hasEventListener("1", anotherListener), 7);
};

pkg.EventTest.prototype.__listener = function(event)
{
	if (event.data != null) this.__param = event.data;
	else this.__param++;

	this.assertEquals(this.__dispatcher, event.target, "Совпадение объекта события")
}

/**
 * Тест воспроизведения события.
 *
 * Необходимо проверить на корректность отлова событий слушателями.
 *
 * @private
 */
pkg.EventTest.prototype.__test_dispatchEvent = function()
{
	this._saveMessage("Проверка воспроизведения событий");

	this.__dispatcher = new EventDispatcher();

	this.__dispatcher.addEventListener('1', this.__listener, this);

	for (var i = 0; i < 10; i++)
	{
		this.assertEquals(i, this.__param);

		this.__dispatcher.dispatchEvent(new BasicEvent("1"));
		this.__dispatcher.dispatchEvent(new BasicEvent(" 1 "));
	}

	this.__dispatcher.dispatchEvent(new BasicEvent("1", 18));
	this.__dispatcher.dispatchEvent(new BasicEvent(" 1 ", 8));

	this.assertEquals(18, this.__param, this.__param + " != 18");

	this.__dispatcher.removeEventListener('1', this.__listener);

	for (var j = 0; j < 10; j++)
	{
		this.assertEquals(18, this.__param);

		this.__dispatcher.dispatchEvent(new BasicEvent("1"));
		this.__dispatcher.dispatchEvent(new BasicEvent(" 1 "));
	}
};

/**
 * Реализация завершения проверки.
 *
 * @override @protected
 */
pkg.EventTest.prototype._destroyImpl = function()
{
	this._destroyComplete();
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.EventTest, "EventTest");
