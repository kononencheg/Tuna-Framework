/**
 * Logger.js
 * 
 * Реализация класса tuna.debug.Logger и вспомогательного класса 
 * tuna.debug.ConsoleWriter.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 * @version 2.0
 */

if (!COMPILED) {
	tuna.namespace("tuna.debug");

	tuna.include('tuna.debug.IWriter');
}

/**
 * Класс обработки и вывода отладочной информации.
 * 
 * @public
 * @class
 *
 * @constructor
 * @param {tuna.debug.IWriter} writer Объект вывода сообщений.
 */
tuna.debug.Logger = function(writer) {
	
	/**
	 * Объект вывода сообщений.
	 *
	 * @private
	 * @type {tuna.debug.IWriter}
	 */
	this.__writer = null;

	if (writer) {
		this.setWriter(writer);
	}
};

/**
 * Уровень вложенности вывода вложенного объекта.
 *
 * @define {number}
 */
tuna.debug.Logger.DUMP_LEVEL = 5;

/**
 * Установка объекта вывода.
 *
 * @public
 * @param {!tuna.debug.IWriter} writer Объект вывода.
 * @throws ArgumentError
 */
tuna.debug.Logger.prototype.setWriter = function(writer) {
	this.__writer = writer;
};

/**
 * Вывод отладочного сообщения.
 *
 * @public
 * @param {string} message Текст сообщения.
 * @throws ArgumentError
 */
tuna.debug.Logger.prototype.trace = function(message) {
	if (this.__writer) {
		this.__writer.info(message);
	}
};

/**
 * Вывод ошибки.
 *
 * @public
 * @param {!Error} error Объект ошибки.
 * @throws ArgumentError
 */
tuna.debug.Logger.prototype.error = function(error) {
	if (this.__writer) {
		this.__writer.error(error.name + ': ' + error.message);
	}
};

/**
 * Вывод структуры объекта.
 *
 * @public
 * @param {Object} object Объект для ввывода.
 * @param {string=} name Имя объекта.
 * @param {string=} tab Отступ вложенности.
 * @param {{value: number, confirmed: number}=} level Вспомгательный объект 
 * 		слежение за уровнем вложенности.
 */
tuna.debug.Logger.prototype.dump = function(object, name, tab, level) {

	if (this.__writer) {
	
		if (!name) { name = ''; }		
		if (!tab) { tab = ''; }
		
		if (!level) { 
			level = {
				value: tuna.debug.Logger.DUMP_LEVEL, 
				confirmed: 0
			}; 
		}

		// Извлекаем тип объекта
		var type = typeof object;

		// Если объект сложный..
		if (type === 'object') {
			// Если уровень вложенности равен 5, и это первая проверкана этом 
			// уровне
			if (tab.length >= level.value && tab.length !== level.confirmed) {
				level.confirmed = level.value;

				if (confirm('Deep recursion. Continue?')) {
					level.value += 2;
				}
			}

			if (tab.length < level.value) {
				
				this.trace(tab + type + ' "' + name + '":');
				this.trace(tab + '{');

				// ..рекурсивно пробегаем по его составным частям
				for (var key in object) {
					this.dump(object[key], key, tab + ' ', level);
				}

				this.trace(tab + '};');
			}
		} else {
			// Иначе выводим его значение.
			this.trace(tab + type + ' "' + name + '": ' + object + ';');
		}
	}
};


/**
 * Класс вывода отладочной информации Alert'ами.
 *
 * Выводит сообщения всплывающими сообщениями браузера.
 *
 * @public
 * @class
 *
 * @constructor
 * @implements {tuna.debug.IWriter}
 */
tuna.debug.ConsoleWriter = function() {
	
	/**
	 * Флаг наличия консоли.
	 * 
	 * @private
	 * @type {boolean}
	 */
	this.__isConsoleAvailable = !!console;
};

tuna.implement(tuna.debug.ConsoleWriter, tuna.debug.IWriter);

/**
 * @inheritDoc
 */
tuna.debug.ConsoleWriter.prototype.info = function(message) {
	
	if (this.__isConsoleAvailable) {
		console.log(message);
	} else {
		alert(message);
	}
};

/**
 * @inheritDoc
 */
tuna.debug.ConsoleWriter.prototype.error = function(message) {
	if (this.__isConsoleAvailable) {
		console.error(message);
	} else {
		alert(message);
	}
};


/**
 * Екземпляр объекта отладки
 *
 * @public
 * @type {tuna.debug.Logger}
 */
tuna.debug.logger = new tuna.debug.Logger(new tuna.debug.ConsoleWriter());

/**
 * Функция вывода сообщения.
 *
 * Вывод всех входных данных.
 *
 * @public 
 * @static
 * @param {...string} args Строки вывода.
 */
var trace = function() {
	var message = arguments[0];
	var i = 1, l = arguments.length;
	while (i < l) {
		message += ', ' + arguments[i];
		
		i++;
	}

	tuna.debug.logger.trace(message);
};

/**
 * Вывод структуры объекта.
 *
 * @param {!Object} object Объект вывода.
 * @param {string=} name Имя объекта.
 */
var dump = function(object, name) {
	tuna.debug.logger.dump(object, name);
};

/**
 * Вывод ошибки.
 *
 * @param {!Error} error Объект ошибки.
 */
var error = function(error) {
	tuna.debug.logger.error(error);
};
