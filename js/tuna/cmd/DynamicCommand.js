/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл DynamicCommand.js
//
//	Реализация класса tuna.command.DynamicCommand.
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.command.Command");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.command");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.command.DynamicCommand
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс комнды с задаваемым действием.
 *
 * @extends tuna.command.Command
 * @constructor
 */
pkg.DynamicCommand = function()
{
	/**
	 * Функция выполнения
	 *
	 * @type Object
	 */
	this.__doAction = null;

	/**
	 * Функция отмены выполнения
	 *
	 * @type Object
	 */
	this.__undoAction = null;

	/**
	 * Рабочие данные команды.
	 *
	 * @type Object
	 */
	this.__data = null;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.command.Command
/////////////////////////////////////////////////////////////////////////////////////////

tuna.extend(pkg.DynamicCommand, tuna.command.Command);

/**
 * Операция выполнения команды.
 *
 * @param {Object} data Сопутствующие данные команды.
 */
pkg.DynamicCommand.prototype.execute = function(data)
{
	this.__data = data;
	this.__doAction.func.call(this.__doAction.scope, this.__data);
}

/**
 * Операция отмены действия команды.
 */
pkg.DynamicCommand.prototype.cancel = function()
{
	this.__undoAction.func.call(this.__undoAction.scope, this.__data);
}

/**
 * Клонирование команды.
 *
 * @return {tuna.command.Command} Копия даной команды.
 */
pkg.DynamicCommand.prototype.clone = function()
{
	var result = new tuna.command.DynamicCommand();
	result.setDoAction(this.__doAction.func, this.__doAction.scope);
	result.setUndoAction(this.__undoAction.func, this.__undoAction.scope);

	return result;
}

/**
 * Установка функции выполнения.
 *
 * @param {Function} func Функция выполнения.
 * @param {Object} scope Область видимости функции.
 */
pkg.DynamicCommand.prototype.setDoAction = function(func, scope)
{
	tuna.checkNotNull(func, 'func');

	this.__doAction = {func: func, scope: scope != null ? scope : window};
}

/**
 * Установка функции отмены выполнения.
 *
 * @param {Function} func Функция выполнения.
 * @param {Object} scope Область видимости функции.
 */
pkg.DynamicCommand.prototype.setUndoAction = function(func, scope)
{
	tuna.checkNotNull(func, 'func');

	this.__undoAction = {func: func, scope: scope != null ? scope : window};
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.DynamicCommand, "DynamicCommand");