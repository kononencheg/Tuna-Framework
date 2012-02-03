(function() {

    var EventDispatcher = function(parent) {
        this._propagationParent = null;

        this._listeners = {};

        if (parent !== null) {
            this._propagationParent = parent;
        }
    };

    tuna.utils.implement(EventDispatcher, tuna.events.IEventDispatcher);

    EventDispatcher.prototype.dispatch = function(event, data) {
        if (!(event instanceof tuna.events.Event)) {
            event = new tuna.events.Event(event);
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

    EventDispatcher.prototype.addEventListener = function(type, listener) {
        if (this._listeners[type] === undefined) {
            this._listeners[type] = [listener];
        } else if (!this.hasEventListener(type, listener)) {
            this._listeners[type].push(listener);
        }
    };

    EventDispatcher.prototype.removeEventListener = function(type, listener) {
        if (this._listeners[type] !== undefined) {
            var listenerIndex
                = tuna.utils.indexOf(listener, this._listeners[type]);

            if (listenerIndex !== -1) {
                this._listeners[type].splice(listenerIndex, 1);
            }
        }
    };

    EventDispatcher.prototype.hasEventListener = function(type, listener) {
        if (this._listeners[type] !== undefined) {
            return tuna.utils.indexOf(listener, this._listeners[type]) !== -1;
        }

        return false;
    };

    tuna.events.EventDispatcher = EventDispatcher;

})();