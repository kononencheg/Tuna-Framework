/**
 * @interface
 * @extends {tuna.events.IEventDispatcher}
 */
var IRequest = function() {};

tuna.utils.extend(IRequest, tuna.events.IEventDispatcher);

/**
 * @param {string} url
 */
IRequest.prototype.send = function(url) {};

/**
 *
 */
IRequest.prototype.abort = function() {};

/**
 * @interface
 * @extends {IRequest}
 */
tuna.net.IRequest = IRequest;

