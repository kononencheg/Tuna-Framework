(function() {

    var Event = function(type, isBubbling) {
        this._target = null;

        this._type = type;

        this._isBubbling = false;

        this._isCanceled = false;
        this._isStopped = false;
        this._isImmediateStopped = false;

        if (isBubbling !== undefined) {
            this._isBubbling = isBubbling;
        }
    };

    Event.prototype.setTarget = function(target) {
        this._target = target;
    };

    Event.prototype.getTarget = function() {
        return this._target;
    };

    Event.prototype.getType = function() {
        return this._type;
    };

    Event.prototype.isBubbling = function() {
        return this._isBubbling;
    };

    Event.prototype.preventDefault = function() {
        this._isCanceled = true;
    };

    Event.prototype.isDefaultPrevented = function() {
        return this._isCanceled;
    };

    Event.prototype.stopImmediatePropagation = function() {
        this._isImmediateStopped = true;
    };

    Event.prototype.isImmediatePropagationStopped = function() {
         return this._isImmediateStopped;
    };

    Event.prototype.stopPropagation = function() {
        this._isStopped = true;
    };

    Event.prototype.isPropagationStopped = function() {
        return this._isImmediateStopped || this._isStopped;
    };

    tuna.events.Event = Event;
})();