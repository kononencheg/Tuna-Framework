/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл Container.js
//
//	Реализация класса tuna.display.Container
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.display.IViewHandler");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.display");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.display.Container
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс контейнера с HTML содержимым
 *
 * @constructor
 * @param {String} id Идентификатор контейнера.
 */
pkg.Container = function(id)
{
	/**
	 * Идентификатор контейнера.
	 *
	 * @type String
	 */
	this._targetID = id;

	/**
	 * Контроллер управляющий отображением
	 *
	 * @type tuna.display.IViewHandler
	 */
	this._controller = null;

	/**
	 * Флаг состояния запущенности.
	 *
	 * @type Boolean
	 */
	this._isInit = false;
}

/**
 * Инициализация контейнера.
 *
 * Происходит запуск работы контроллера.
 */
pkg.Container.prototype.init = function()
{
	if (this._controller != null)
		this._controller.run();

	this._isInit = true;
}

/**
 * Установка контроллера.
 *
 * @param {tuna.data.IViewHandler} value Экземпляр контроллера.
 */
pkg.Container.prototype.setController = function(value)
{
	tuna.checkType(value, tuna.data.IViewHandler, 'value', 'tuna.data.IViewHandler');

	//Если контроллер был установлен и запущен - останавливаем.
	if (this._isInit && this._controller != null)
		this._controller.stop();

	this._controller = value;

	//Если уже работал - запускаем новый.
	if (this._isInit)
		this._controller.run();
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.Container, "Container");