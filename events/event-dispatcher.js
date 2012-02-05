
/**
 * @constructor
 * @implements tuna.events.IEventDispatcher
 * @param {tuna.events.IEventDispatcher=} parent
 */
var EventDispatcher = function(parent) {

    /**
     * @protected
     * @type {tuna.events.IEventDispatcher}
     */
    this._propagationParent = parent || null;

    /**
     * @protected
     * @type {Object.<string, Array.<function(tuna.events.BasicEvent, *)>>}
     */
    this._listeners = {};
};

tuna.utils.implement(EventDispatcher, tuna.events.IEventDispatcher);

/**
 * @override
 */
EventDispatcher.prototype.dispatch = function(event, data) {
    if (!(event instanceof tuna.events.BasicEvent)) {
        event = new tuna.events.BasicEvent(event);
    }

    var type = event.getType();

    if (this._listeners[type] !== undefined) {
        if (event.getTarget() === null) {
            event.setTarget(this);
        }

        var i = 0,
            l = this._listeners[type].length;

        while (i < l) {
            this._listeners[type][i].call(this, event, data);

            if (event.isImmediatePropagationStopped()) {
                break;
            }

            i++;
        }

        if (this._propagationParent !== null &&
            event.isBubbling() && !event.isPropagationStopped()) {

            this._propagationParent.dispatch(event);
        }
    }

    return !event.isDefaultPrevented();
};

/**
 * @override
 */
EventDispatcher.prototype.addEventListener = function(type, listener) {
    if (this._listeners[type] === undefined) {
        this._listeners[type] = [listener];
    } else if (!this.hasEventListener(type, listener)) {
        this._listeners[type].push(listener);
    }
};

/**
 * @override
 */
EventDispatcher.prototype.removeEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        var listenerIndex
            = tuna.utils.indexOf(listener, this._listeners[type]);

        if (listenerIndex !== -1) {
            this._listeners[type].splice(listenerIndex, 1);
        }
    }
};

/**
 * @override
 */
EventDispatcher.prototype.hasEventListener = function(type, listener) {
    if (this._listeners[type] !== undefined) {
        return tuna.utils.indexOf(listener, this._listeners[type]) !== -1;
    }

    return false;
};

/**
 * @constructor
 * @extends {EventDispatcher}
 */
tuna.events.EventDispatcher = EventDispatcher;
