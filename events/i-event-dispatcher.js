
/**
 * @interface
 */
tuna.events.IEventDispatcher = function() {};

/**
 * @param {!tuna.events.BasicEvent|!string} event
 * @param {*=} data
 * @return {boolean}
 */
tuna.events.IEventDispatcher.prototype.dispatch = function(event, data) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
tuna.events.IEventDispatcher.prototype.addEventListener
    = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 */
tuna.events.IEventDispatcher.prototype.removeEventListener
    = function(type, listener) {};

/**
 * @param {!string} type
 * @param {!function(tuna.events.BasicEvent, *)} listener
 * @return {boolean}
 */
tuna.events.IEventDispatcher.prototype.hasEventListener
    = function(type, listener) {};