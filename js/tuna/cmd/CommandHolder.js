/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл CommandHolder.js
//
//	Реализация класса tuna.command.CommandHolder.
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
//	Класс tuna.command.CommandHolder
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс хранения и выполнения команд.
 *
 * @constructor
 */
pkg.CommandHolder = function()
{
	/**
	 * Набор индекированных прототипов команд.
	 *
	 * @type Object
	 */
	this.__prototypeDictionary = {};

	/**
	 * Стек выполенения и отмены команд.
	 *
	 * @type Array
	 */
	this.__executionStack = [];

	/**
	 * Набор слушателей результатат выполнений команд.
	 *
	 * @type Object
	 */
	this.__resultListeners = {};

	/**
	 * Индекс команды для отмены. С конца стека.
	 *
	 * @type Number
	 */
	this.__undoIndex = 0;
};

/**
 * Размер стека выполнения команд.
 *
 * @type Number
 */
pkg.CommandHolder.STACK_SIZE = 10;

/**
 * Вызов команды.
 *
 * @param {String} name Имя команды.
 * @param {Object} data Данные передаваемые команде.
 * @return {Boolean} Возможность отмены выполнения команды.
 */
pkg.CommandHolder.prototype.doCommand = function(name, data)
{
	if (this.__prototypeDictionary[name] == null)
		throw new Error("Вызов незарегистрированной команды.");

	//Результат
	var result = false;

	//Клонируем требуемую команду
	var command = this.__prototypeDictionary[name].clone();

	//Имя копируем авторматически.
	command.name = name;

	//Выполняем ее.
	result = command.execute(data);

	//Если удалось выполнить - записываем в стек
	if (result)
	{
		//Удаляем все команды после индекса отмены (убираем возможность отмены
		//отмены) если индекс отмены не равен нулю.
		if (this.__undoIndex > 0)
			this.__executionStack.splice
				(this.__executionStack.length - this.__undoIndex, this.__undoIndex);

		//Обнуляем индекс отменяемой команды.
		this.__undoIndex = 0;

		//Сохраняем в стеке выполнения.
		this.__executionStack.push(command);

		//Если длинна стека превысит 10 команд - удаляем последнюю.
		if (this.__executionStack.length > tuna.command.CommandHolder.STACK_SIZE)
			this.__executionStack.shift();
	}
	
	return result;
}

/**
 * Отмена вызова команды.
 *
 * @return {Boolean} Возможность повторного вызова отмененной команды.
 */
pkg.CommandHolder.prototype.undoCommand = function()
{
	var result = false;

	//Длина стека
	var length = this.__executionStack.length

	//Если индекс отменяемой команды меньше длинны стека выполенных
	if (this.__undoIndex < length)
		//Берем последующюю команду и отменяем ее действие.
		result = this.__executionStack[length - this.__undoIndex - 1].cancel();

	//Если удалось - увеличиваем индес отмены
	if (result) this.__undoIndex++;

	return result;
}

/**
 * Возвращение действия команды
 *
 * @return {Boolean} Возможность отмены возвращенного вызова.
 */
pkg.CommandHolder.prototype.redoCommand = function()
{
	var result = false;
	
	//Длина стека
	var length = this.__executionStack.length

	//Если индекс отмены больше нуля (что либо отменено)
	if (this.__undoIndex > 0)
		//Берем последнюю отмененную команду и возвращаем ее действие (выполенение без
		//параметров).
		result = this.__executionStack[length - this.__undoIndex].execute();

	//Если удалось - уменьшаем индес отмены
	if (result) this.__undoIndex--;

	return result;
}

/**
 * Регистрирование комманды.
 *
 * @param {tuna.command.Command} command Команда для регистрации.
 * @param {String} name Имя команды.
 */
pkg.CommandHolder.prototype.registerCommand = function(command, name)
{
	command.name = name;
	
	this.__prototypeDictionary[name] = command;
}

/**
 * Удаление зарегистрированной команды комманды.
 *.
 * @param {String} name Имя команды.
 */
pkg.CommandHolder.prototype.terminateCommand = function(name)
{
	delete this.__prototypeDictionary[name];
}

/**
 * Передача результата выполнения команды.
 *
 * @param {String} name Имя команды.
 * @param {Object} data Объект результата.
 */
pkg.CommandHolder.prototype.passResult = function(name, data)
{
	//Берем всех слушателей реузльтата команды
	var listeners = this.__resultListeners[name];

	//Если они есть
	if (listeners != null)
	{
		//Оповещаем их о резуьтате
		var i = listeners.length - 1;
		while (i >= 0)
		{
			//Вызываем обработчик
			listeners[i].handler.call(listeners[i].scope, data);

			i--;
		}
	}
}

/**
 * Установка обработчика результатат выполнения команды.
 *
 * @param {String} name Имя команды.
 * @param {Function} handler Обработчик реультата.
 * @param {Object} scope Область видимости функции.
 */
pkg.CommandHolder.prototype.addResultListener = function(name, handler, scope)
{
	//Если массив обработчиков не создан - создаем его.
	if (this.__resultListeners[name] == null)
		this.__resultListeners[name] = [];

	this.__resultListeners[name].push({ handler: handler, scope: scope });
}

/**
 * Удаление обработчика результатат выполнения команды.
 *
 * @param {String} name Имя команды.
 * @param {Function} handler Обработчик реультата.
 */
pkg.CommandHolder.prototype.removeResultListener = function(name, handler)
{
	if (this.__resultListeners[name] != null)
	{
		var listeners = this.__resultListeners[name]
		var i = listeners.length - 1;
		while (i >= 0)
		{
			if (listeners[i].handler === handler)
			{
				listeners.splice(i, 1);

				break;
			}

			i--;
		}
	}
}

/**
 * Переменная уникального екземпляра CommandHolder;
 *
 * @type tuna.command.CommandHolder
 * @private
 */
pkg.CommandHolder.__instance = null;

/**
 * Возвращение уникального экземпляра.
 *
 * @return {tuna.command.CommandHolder} уникальный экземпляр.
 * @deprecated
 */
pkg.CommandHolder.getInstance = function()
{
	if (tuna.command.CommandHolder.__instance == null)
		tuna.command.CommandHolder.__instance = new tuna.command.CommandHolder();

	return tuna.command.CommandHolder.__instance;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.CommandHolder, "CommandHolder");