/**
 * @constructor
 * @param {!string} type
 * @param {boolean=} isBubbling
 */
tuna.events.BasicEvent = function(type, isBubbling) {

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
tuna.events.BasicEvent.prototype.setTarget = function(target) {
    this._target = target;
};

/**
 * @return tuna.events.IEventDispatcher
 */
tuna.events.BasicEvent.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return string
 */
tuna.events.BasicEvent.prototype.getType = function() {
    return this._type;
};

/**
 * @return boolean
 */
tuna.events.BasicEvent.prototype.isBubbling = function() {
    return this._isBubbling;
};

/**
 *
 */
tuna.events.BasicEvent.prototype.preventDefault = function() {
    this._isCanceled = true;
};

/**
 * @return boolean
 */
tuna.events.BasicEvent.prototype.isDefaultPrevented = function() {
    return this._isCanceled;
};

/**
 *
 */
tuna.events.BasicEvent.prototype.stopImmediatePropagation = function() {
    this._isImmediateStopped = true;
};

/**
 * @return boolean
 */
tuna.events.BasicEvent.prototype.isImmediatePropagationStopped = function() {
     return this._isImmediateStopped;
};

/**
 *
 */
tuna.events.BasicEvent.prototype.stopPropagation = function() {
    this._isStopped = true;
};

/**
 * @return boolean
 */
tuna.events.BasicEvent.prototype.isPropagationStopped = function() {
    return this._isImmediateStopped || this._isStopped;
};