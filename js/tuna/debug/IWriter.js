/**
 * TUNA FRAMEWORK
 * 
 * @file IWriter
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.debug");
}

/**
 * Debug classes interface.
 * 
 * @public
 * @interface
 */
tuna.debug.IWriter = function() {};

/**
 * Info message output.
 *
 * @public
 * @param {string} message Message text.
 */
tuna.debug.IWriter.prototype.info = function(message) {};

/**
 * Error message output.
 *
 * @public
 * @param {string} message Message text.
 */
tuna.debug.IWriter.prototype.error = function(message) {};

