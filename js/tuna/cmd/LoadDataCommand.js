/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл LoadDataCommand.js
//
//	Реализация класса tuna.command.LoadDataCommand.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.DataStorage");
tuna.include("tuna.data.DataDistributor");
tuna.include("tuna.data.IDataFilter");

tuna.include("tuna.command.Command");

tuna.include("tuna.event.BasicEvent");

tuna.include("tuna.net.Request");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.command");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.command.LoadDataCommand
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс команды заргузки данных
 *
 * @extends tuna.command.Command
 * @constructor
 * @param {tuna.data.IDataFilter} filter фильтр результата.
 */
pkg.LoadDataCommand = function(filter)
{
	/**
	 * Имя набора данных
	 *
	 * @type String
	 */
	this.__dataSetName = null;

	/**
	 * Объект запроса
	 *
	 * @type tuna.net.Request
	 */
	this.__request = new tuna.net.Request();

	//Устнавливаем слушатель результата запроса.
	this.__request
		.addEventListener(tuna.event.BasicEvent.COMPLETE, this.__handleResult, this);

	/**
	 * Даные после загрузки.
	 *
	 * @type String
	 */
	this.__data = null;

	/**
	 * Фильтр результата
	 *
	 * @type tuna.data.IDataFilter
	 */
	this.__filter = filter;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.command.Command
/////////////////////////////////////////////////////////////////////////////////////////

tuna.extend(pkg.LoadDataCommand, tuna.command.Command)

/**
 * Операция выполнения команды.
 *
 * @param {Object} data Данные для отправки запроса с индексом требуемых данных.
 *		  {String} data.name Имя набора данных.
 *		  {String} data.url Адрес набора данных.
 *		  {Object} data.request Данные запроса.
 *		  {Object} data.isSync Синхронный ли запрос.
 * @return {Boolean} Успех выполнения команды.
 */
pkg.LoadDataCommand.prototype.execute = function(data)
{
	if (data.name == null || data.url == null)
		throw new Error("Неверный формат данных выполенния команды.");

	this.__dataSetName = data.name;

	this.__request.data = data.request;
	this.__request.isSync = data.isSync;
    this.__request.method = data.method != null ? data.method : "GET";
            
	this.__request.send(data.url);

	return false;
}

/**
 * Сохранения результат запроса.
 *
 * @param {tuna.data.BasicEvent} evt Объект события результата.
 */
pkg.LoadDataCommand.prototype.__handleResult = function(evt)
{
	this.__data = this.__request.getResponse();

	//Если установлен фильтр результата - используем его.
	if (this.__filter != null)
		this.__data = this.__filter.filter(this.__data);

	tuna.data.DataStorage.getInstance().save(this.__data, this.__dataName);
	tuna.data.DataDistributor.getInstance().applyData(this.__dataName);
}

/**
 * Операция отмены действия команды.
 * 
 * @return {Boolean} Успех выполнения команды.
 */
pkg.LoadDataCommand.prototype.cancel = function()
{
	return false;
}

/**
 * Установка общего фильтра данных
 *
 * @param {tuna.net.IResultFilter} filter Фильтр данных
 */
pkg.LoadDataCommand.prototype.setFilter = function(filter)
{
	this.__filter = filter;
}

/**
 * Клонирование команды.
 *
 * @return {tuna.command.Command} КОпия даной команды.
 */
pkg.LoadDataCommand.prototype.clone = function()
{
	return new tuna.command.LoadDataCommand(this.__filter);
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.LoadDataCommand, "LoadDataCommand");