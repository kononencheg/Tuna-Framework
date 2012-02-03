(function() {

    var Method = function(name) {
        tuna.events.EventDispatcher.call(this);

        this._name = name || null;
    };

    tuna.utils.implement(Method, tuna.rest.IMethod);
    tuna.utils.extend(Method, tuna.events.EventDispatcher);

    Method.prototype.call = function(args) {};

    Method.prototype.clone = function() {
        return new this.constructor(this._name);
    };

    tuna.rest.Method = Method;

})();
