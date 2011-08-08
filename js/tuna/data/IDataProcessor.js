/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл IDataHandler.js
//
//	Объявление функций интерфейса tuna.data.IDataProcessor.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.data");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Интерфейс tuna.data.IDataProcessor
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Интерфейс класса объектов манипулирующими данными.
 *
 * @interface
 */
pkg.IDataProcessor = function() {};

/**
 * Принятие данных.
 *
 * @param {Object} data Данные.
 */
pkg.IDataProcessor.prototype.update = function(data)
{
	throw new Error("Метод update(data:Object):void интерфейса tuna.data.IDataProcessor" +
		" должен быть реализован.");
};

/**
 * Создание резервной копии содержания объекта.
 */
pkg.IDataProcessor.prototype.backup = function()
{
	throw new Error("Метод backup():void интерфейса tuna.data.IDataProcessor" +
		" должен быть реализован.");
};

/**
 * Восстановление содержания объекта.
 */
pkg.IDataProcessor.prototype.restore = function()
{
	throw new Error("Метод restore():void интерфейса tuna.data.IDataProcessor" +
		" должен быть реализован.");
};

/**
 * Очищение содержания объекта.
 */
pkg.IDataProcessor.prototype.clear = function()
{
	throw new Error("Метод clear():void интерфейса tuna.data.IDataProcessor" +
		" должен быть реализован.");
};

/**
 * Проверка возможности приянтия даных объектом.
 *
 * @return Boolean Возможность принятия данных.
 */
pkg.IDataProcessor.prototype.test = function()
{
	throw new Error("Метод test():Boolean интерфейса tuna.data.IDataProcessor" +
		" должен быть реализован.");

	return false;
}

/**
 * Возвращение массива имен требуемых наборов данных.
 *
 * @return Array.<String>
 */
pkg.IDataProcessor.prototype.getDataIndexes = function()
{
	throw new Error("Метод getDataIndexes():Array.<String> интерфейса " +
		"tuna.data.IDataProcessor должен быть реализован.");

	return null;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.IDataProcessor, "IDataProcessor");
