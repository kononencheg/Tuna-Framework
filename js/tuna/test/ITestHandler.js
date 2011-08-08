/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл ITestHandler.js
//	
//	Объявление функций интерфейса tuna.test.ITestHandler.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Интерфейс tuna.test.ITestHandler
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Интерфейс классов обрабатывающих асинхронную последовательность проведения теста.
 *
 * @interface
 */
pkg.ITestHandler = function() {};

/**
 * Обработка окончания подготовки проведения теста.
 */
pkg.ITestHandler.prototype.handleSetup = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод handleSetup():void интерфейса tuna.test.ITestHandler должна быть реализован");
};

/**
 * Обработка окончания проверки тестовых условий.
 */
pkg.ITestHandler.prototype.handleRun = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод handleRun():void интерфейса tuna.test.ITestHandler должна быть реализован");
};

/**
 * Обработка окончания завершения теста.
 */
pkg.ITestHandler.prototype.handleDestroy = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод handleDestroy():void интерфейса tuna.test.ITestHandler должна быть реализован");
};


/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.ITestHandler, "ITestHandler");