/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл EventDispatcher.js
//
//	Реализация класса tuna.event.EventDispatcher.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.event.BasicEvent");
tuna.include("tuna.event.IEventDispatcher");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.event");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.event.EventDispatcher
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс реалицации обработчика и генератора событий.
 *
 * Основная реализация интерфейса tuna.event.IEventDispatcher.
 *
 * Класс служит распределителем сообщений событий по зарегистрированным слушателям
 * конкретных событий.
 *
 * @public
 * @implements tuna.event.IEventDispatcher
 * @constructor
 */
pkg.EventDispatcher = function()
{
	/**
	 * Хеш таблица слушателей событий.
	 *
	 * @private
	 * @type Object
	 */
	this.__listeners = null;
};

tuna.implement(pkg.EventDispatcher, tuna.event.IEventDispatcher);

/**
 * Генерация события.
 *
 * Производится вызов слушателей сгенерированного события, поэтому аргумент события должен
 * содержать существующее свойство <code>type</code>. По типу события будут определены и
 * вызванны соответствующие слушатели.
 *
 * @param {tuna.event.BasicEvent} event Объект события.
 */
pkg.EventDispatcher.prototype.dispatchEvent = function(event)
{
	tuna.checkArgs(arguments, ['tuna.event.BasicEvent']);

	if (this.__listeners != null && this.__listeners[event.type] != null)
	{
		//Переменная объекта данных о слушателе
		var listenData;

		//Устанавливаем генератор события
		event.target = this;

		//Пробегаем по всем слушателям.
		var i = this.__listeners[event.type].length - 1;
		while (i >= 0)
		{
			listenData = this.__listeners[event.type][i];

			//И вызывам обработчик в требуемой области видимости, передавая
			//туда объект события.
			listenData[0].call(listenData[1], event);

			i--;
		}
	}
}

/**
 * Установка слушателя события.
 *
 * В соответствие типу события добавляется его обработчик.
 *
 * @param {String} type Имя типа события.
 * @param {Function} handler Обработчик события, должен соответствовать следующему
 * интерфейсу:
 * <code>
 *		function handlerName(event:tuna.event.BasicEvent):void;
 * </code>.
 * @param {Object} [scope] Область видимости выполнения обработчика. По-умолчанию
 * устанавливается глобальная область видимости.
 * @return {Boolean} Успех установки слушателя.
 */
pkg.EventDispatcher.prototype.addEventListener = function(type, handler, scope)
{
	tuna.checkArgs(arguments, ['String', 'Function']);

	var result = true;

	//Ленивая инициализация таблицы слушателей.
	if (this.__listeners == null) this.__listeners = {};
	if (this.__listeners[type] == null) this.__listeners[type] = [];

	//Если слушатель еще не установлен - устанавливаем.
	if (!this.hasEventListener(type, handler))
		//Если область не установлена - сохраняем глобальную область.
		this.__listeners[type].push([handler, (scope != null ? scope : window)]);
	//Если уже установлен - то ничего не вышло
	else result = false;

	return result;
}

/**
 * Поиск и удаление слушателя события.
 *
 * @param {String} type Тип события.
 * @param {Function} handler Обработчик события, который был ранее установлен.
 * @return {Boolean} Успех удаления слушателя.
 */
pkg.EventDispatcher.prototype.removeEventListener = function(type, handler)
{
	tuna.checkArgs(arguments, ['String', 'Function']);

	var result = false;

	if (this.__listeners != null && this.__listeners[type] != null)
	{
		var i = this.__listeners[type].length - 1;

		while (i >= 0)
		{
			if (this.__listeners[type][i][0] == handler)
			{
				this.__listeners[type].splice(i, 1);

				result = true;

				break;
			}

			i--;
		}
	}

	return result;
}

/**
 * Проверка на наличие слушателя события.
 *
 * Поиск в массиве слушателей данного типа события обработчика.
 *
 * @param {String} type Тип события.
 * @param {Function} handler Обработчик события.
 * @return {Boolean} Наличие слушателя события.
 */
pkg.EventDispatcher.prototype.hasEventListener = function(type, handler)
{
	tuna.checkArgs(arguments, ['String', 'Function']);

	var result = false;

	if (this.__listeners != null && this.__listeners[type] != null)
	{
		var i = this.__listeners[type].length - 1;
		while (i >= 0)
		{
			if (this.__listeners[type][i][0] == handler)
			{
				result = true;
				
				break;
			}

			i--;
		}
	}
	
	return result;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.EventDispatcher, "EventDispatcher");