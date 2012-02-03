(function() {

    var IEventDispatcher = function() {};

    IEventDispatcher.prototype.dispatch = function(event, data) {};

    IEventDispatcher.prototype.addEventListener = function(type, listener) {};

    IEventDispatcher.prototype.removeEventListener = function(type, listener) {};

    IEventDispatcher.prototype.hasEventListener = function(type, listener) {};

    tuna.events.IEventDispatcher = IEventDispatcher;

})();