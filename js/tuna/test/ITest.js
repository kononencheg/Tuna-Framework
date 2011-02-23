/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA UNIT TEST
//	
//	Файл ITest.js
//	
//	Объявление функций интерфейса tuna.test.ITesr.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.ITestHandler");
tuna.include("tuna.test.TestResult");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.test");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Интерфейс tuna.test.ITest
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Интерфейс классов проведения тестировки.
 *
 * @interface
 */
pkg.ITest = function() {}

/**
 * Подготовка к проведению теста.
 *
 * @return {Boolean} Является ли процесс асинхронным.
 */
pkg.ITest.prototype.setup = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод setup():void интерфейса tuna.test.ITest должна быть реализован");

	return false;
}

/**
 * Проведение теста.
 *
 * @return {Boolean} Является ли процесс асинхронным.
 */
pkg.ITest.prototype.run = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод run():void интерфейса tuna.test.ITest должна быть реализован");

	return false;
}

/**
 * Завершение проведения теста.
 * 
 * @return {Boolean} Является ли процесс асинхронным.
 */
pkg.ITest.prototype.destroy = function()
{
	throw tuna.createError("InterfaceMethodError", "Метод destroy():void интерфейса tuna.test.ITest должна быть реализован");

	return false;
}

/**
 * Установка обработчика проведения теста.
 *
 * @param {tuna.test.ITestHandler} value Обработчик проведения теста.
 */
pkg.ITest.prototype.setTestHandler = function(value)
{
	throw tuna.createError("InterfaceMethodError", "Метод setTestHandler(value:tuna.test.ITestHandler):void интерфейса tuna.test.ITest должна быть реализован");
}

/**
 * Установка объекта хранения и записи событий проведения теста.
 *
 * @param {tuna.test.TestResult} value Объект записи и хранения.
 */
pkg.ITest.prototype.setTestResult = function(value)
{
	throw tuna.createError("InterfaceMethodError", "Метод setTestResult(value:tuna.test.TestResult):void интерфейса tuna.test.ITest должна быть реализован");
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.ITest, "ITest");