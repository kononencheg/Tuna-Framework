/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл DataStorage.js
//
//	Реализация класса tuna.data.DataStorage
//
//	@author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.IDataHandler");
tuna.include("tuna.data.IDataFilter");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.data");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.data.DataStorage
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс хранения основных данных страницы.
 *
 * @constructor.
 */
pkg.DataStorage = function()
{
	/**
	 * Словарь обработчиков данных.
	 *
	 * @type Object
	 */
	this.__handlers = {};

	/**
	 * Словарь фильтров данных.
	 *
	 * @type Object
	 */
	this.__filters = {};

	/**
	 * Словарь данных.
	 *
	 * @type Object
	 */
	this.__dictionary = {};
}

/**
 * Установка обработчика данныа.
 *
 * @param {tuna.data.IDataHandler} value Обработчик данных
 * @param {String} name Имя набора данных
 */
pkg.DataStorage.prototype.setDataHandler = function(value, name)
{
	tuna.checkType(value, tuna.data.IDataHandler, 'value', 'tuna.data.IDataHandler')
	tuna.checkNotNull(name, 'name');

	this.__handlers[name.toString()] = value;
}

/**
 * Установка переработчика в текущие данные.
 *
 * @param {tuna.data.IDataFilter} value Фильтр данных
 * @param {String} name Имя набора днных для фильтрации
 */
pkg.DataStorage.prototype.setDataFilter = function(value, name)
{
	tuna.checkType(value, tuna.data.IDataFilter, 'value', 'tuna.data.IDataFilter')
	tuna.checkNotNull(name, 'name');

	this.__filters[name.toString()] = value;
}

/**
 * Сохранение данных в наборе.
 *
 * @param {Object} data Объект данных.
 * @param {String} name Имя объекта данных.
 */
pkg.DataStorage.prototype.save = function(data, name)
{
	tuna.checkNotNull(name, 'name');
	name = name.toString();

	//Сохраняем.
	this.__dictionary[name] = 
		(this.__filters[name] != null) ? this.__filters[name].filter(data) : data;

	//Если есть обработчик - обрабатываем.
	if (this.__handlers[name] != null)
		this.__handlers[name].handle(this.__dictionary[name]);
}

/**
 * Возвращение данных из набора.
 *
 * @param {String} name Имя объекта данных.
 */
pkg.DataStorage.prototype.load = function(name)
{
	tuna.checkNotNull(name, 'name');

	return this.__dictionary[name.toString()];
}

/**
 * Удаление данных из набора.
 *
 * @param {String} name Имя объекта данных.
 */
pkg.DataStorage.prototype.remove = function(name)
{
	tuna.checkNotNull(name, 'name');

	delete this.__dictionary[name.toString()];
}

/**
 * Переменная уникального екземпляра DataStorage;
 *
 * @type tuna.data.BuildData
 * @private
 */
pkg.DataStorage.__instance = null;

/**
 * Возвращение уникального экземпляра.
 *
 * @return {tuna.data.DataStorage} уникальный экземпляр.
 */
pkg.DataStorage.getInstance = function()
{
	if (tuna.data.DataStorage.__instance == null)
		tuna.data.DataStorage.__instance = new tuna.data.DataStorage();

	return tuna.data.DataStorage.__instance;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.DataStorage, "DataStorage");
