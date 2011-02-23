/**
 * IWriter.js
 * 
 * Объявление функций интерфейса tuna.debug.IWriter.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 * @version 2.0
 */

if (!COMPILED) {
	tuna.namespace("tuna.debug");
}

/**
 * Интерфейс классов вывода отладочной информации.
 * 
 * @public
 * @interface
 */
tuna.debug.IWriter = function() {};

/**
 * Вывод сообщения.
 *
 * @public
 * @param {string} message Текст сообщения.
 */
tuna.debug.IWriter.prototype.info = function(message) {
	throw Error('Method info(message:String) must be implemented!');
};


/**
 * Вывод ошибки.
 *
 * @public
 * @param {string} message Текст ошибки.
 */
tuna.debug.IWriter.prototype.error = function(message) {
	throw Error('Method error(message:String) must be implemented!');
};

