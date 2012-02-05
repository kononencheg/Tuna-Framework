
/**
 * @interface
 */
var IEventDispatcher = function() {};

/**
 * @param {!tuna.events.BasicEvent|!string} event
 * @param {*=} data
 * @return {boolean}
 */
IEventDispatcher.prototype.dispatch = function(event, data) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.addEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
IEventDispatcher.prototype.removeEventListener = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 * @return {boolean}
 */
IEventDispatcher.prototype.hasEventListener = function(type, listener) {};

/**
 * @interface
 * @extends {IEventDispatcher}
 */
tuna.events.IEventDispatcher = IEventDispatcher;