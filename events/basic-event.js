/**
 * @constructor
 * @param {!string} type
 * @param {boolean=} isBubbling
 */
var BasicEvent = function(type, isBubbling) {

    /**
     * @protected
     * @type tuna.events.IEventDispatcher
     */
    this._target = null;

    /**
     * @protected
     * @type string
     */
    this._type = type;

    /**
     * @protected
     * @type boolean
     */
    this._isBubbling = !!isBubbling;

    /**
     * @protected
     * @type boolean
     */
    this._isCanceled = false;

    /**
     * @protected
     * @type boolean
     */
    this._isStopped = false;

    /**
     * @protected
     * @type boolean
     */
    this._isImmediateStopped = false;
};

/**
 * @param {tuna.events.IEventDispatcher} target
 */
BasicEvent.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * @return tuna.events.IEventDispatcher
 */
BasicEvent.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return string
 */
BasicEvent.prototype.getType = function() {
    return this._type;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isBubbling = function() {
    return this._isBubbling;
};

/**
 *
 */
BasicEvent.prototype.preventDefault = function() {
    this._isCanceled = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isDefaultPrevented = function() {
    return this._isCanceled;
};

/**
 *
 */
BasicEvent.prototype.stopImmediatePropagation = function() {
    this._isImmediateStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isImmediatePropagationStopped = function() {
     return this._isImmediateStopped;
};

/**
 *
 */
BasicEvent.prototype.stopPropagation = function() {
    this._isStopped = true;
};

/**
 * @return boolean
 */
BasicEvent.prototype.isPropagationStopped = function() {
    return this._isImmediateStopped || this._isStopped;
};

/**
 * @constructor
 * @extends {BasicEvent}
 */
tuna.events.BasicEvent = BasicEvent;