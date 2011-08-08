///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл RequestCommand.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
//////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.command.Command"  );
tuna.include('tuna.net.Request');

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
//////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.command) tuna.command = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.command.RequestCommand
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс команды вызова удаленного метода
 *
 * 
 */

/**
 * Конструктор
 *
 * @param {String} url Адрес серверного сценария
 * @param {tuna.net.IResultFilter} resultFilter фильтр результата запроса.
 * @param {String} format Формат результата.
 * @extends tuna.command.Command
 */
tuna.command.SendRequestCommand = function(url, resultFilter, format)
{
    /**
	 * Объект запроса
	 *
	 * @type tuna.net.Request
	 */
    this.__request = new Request(url);

    //Устнавливаем слушатель результата запроса.
    this.__request
    .addEventListener(BasicEvent.COMPLETE, this.__handleResult, this);
		
    /**
	 * Фильтр результата
	 *
	 * @type tuna.net.IResultFilter
	 */
    this.__resultFilter = resultFilter;

	/**
	 * Тип результата
	 */
	this.__type = (format == null) ? 'xml' : format;
}

///////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.command.Command
///////////////////////////////////////////////////////////////////////////////

tuna.command.SendRequestCommand.prototype = new tuna.command.Command();
tuna.command.SendRequestCommand.prototype.constructor = tuna.command.SendRequestCommand;

/**
 * Операция выполнения команды.
 * Повторить нельзя.
 *
 * @param {Object} data Данные команды.
 *		  {Object} data.request Данные запроса.
 *		  {String} data.method Метод запроса.
 * @return {Boolean} Успех выполнения команды.
 */
tuna.command.SendRequestCommand.prototype.execute = function(data)
{
    if (data != null)
    {
        this.__request.data = data.request;
        this.__request.method = data.method != null ? data.method : "GET";
    }

    this.__request.send();

    return true;
}

/**
 * Сохранения результат запроса.
 *
 * @param {tuna.data.BasicEvent} evt Объект события результата.
 */
tuna.command.SendRequestCommand.prototype.__handleResult = function(evt)
{

    var data;
	//В зависимости от формата берем резульатт
	if (this.__type == 'xml')
		data = this.__request.getResponseXML();
	else if (this.__type == 'text')
		data = this.__request.getResponseText();
	else alert("Неизвестный формат результата");

    if (this.__resultFilter != null)
        data = this.__resultFilter.filterResult(data, this.__request.url);

    CommandHolder.getInstance().passResult(this.name, data);
}

/**
 * Операция отмены действия команды.
 * Нельзя отменить.
 * 
 * @return {Boolean} Успех выполнения команды.
 */
tuna.command.SendRequestCommand.prototype.cancel = function()
{
    return false;
}

/**
 * Клонирование команды.
 *
 * @return {tuna.command.Command} КОпия даной команды.
 */
tuna.command.SendRequestCommand.prototype.clone = function()
{
    return new tuna.command.SendRequestCommand
		(this.__request.url, this.__resultFilter, this.__type);
}

///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var SendRequestCommand = tuna.command.SendRequestCommand;