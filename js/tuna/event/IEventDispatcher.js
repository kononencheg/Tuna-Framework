/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл IEventDispatcher.js
//
//	Объявление методов интерфейса tuna.event.IEventDispatcher.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.event.BasicEvent");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.event");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Интерфейс tuna.event.IEventDispatcher
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Интерфейс классов объектов воспроизведения и обработки событий.
 *
 * @public
 * @interface
 */
pkg.IEventDispatcher = function() {};

/**
 * Генерация события.
 *
 * Метод вызывается при необходимости сообщить слушателям события о его появлении.
 *
 * @public
 * @param {tuna.event.BasicEvent} event объект данных события.
 */
pkg.IEventDispatcher.prototype.dispatchEvent = function(event)
{
	throw tuna.createError("InterfaceMethodError", "Метод dispatchEvent(event:tuna.event.BasicEvent):void интерфейса tuna.event.IEventDispatcher должен быть реализован");
}

/**
 * Установка слушателя события.
 *
 * Метод вызывается при необходимости создать слушатель определенного типа события.
 *
 * @public
 * @param {String} type тип ожидаемого события.
 * @param {Function} handler Обработчик события.
 * @param {Object} scope Область видимости выполнения обработчика.
 * @return {Boolean} Успех установки слушателя.
 */
pkg.IEventDispatcher.prototype.addEventListener = function(type, handler, scope)
{
	throw tuna.createError("InterfaceMethodError", "Метод addEventListener(type:String, handler:Function, scope:Object):Boolean интерфейса tuna.event.IEventDispatcher должен быть реализован");
	
	return false;
}

/**
 * Удаление слушателя события.
 *
 * Метод вызывается при необходимости удалить слушатель события.
 *
 * @public
 * @param {String} type Тип события.
 * @param {Function} handler Обработчик события.
 * @return {Boolean} Успех удаления слушателя.
 */
pkg.IEventDispatcher.prototype.removeEventListener = function(type, handler)
{
	throw tuna.createError("InterfaceMethodError", "Метод removeEventListener(type:String, handler:Function):Boolean интерфейса tuna.event.IEventDispatcher должен быть реализован");

	return false;
}

/**
 * Проверка наличия слушателя.
 *
 * Метод вызывается для проверки является ли функция слушателем события.
 *
 * @param {String} type Тип события.
 * @param {Function} handler Обработчик события.
 * @return {Boolean} Наличие слушателя события.
 */
pkg.IEventDispatcher.prototype.hasEventListener = function(type, handler)
{
	throw tuna.createError("InterfaceMethodError", "Метод hasEventListener(type:String, handler:Function):void интерфейса tuna.event.IEventDispatcher должен быть реализован");

	return false;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.IEventDispatcher, "IEventDispatcher");
