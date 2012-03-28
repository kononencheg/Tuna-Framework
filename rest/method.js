/**
 * @constructor
 * @implements {tuna.rest.IMethod}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} name
 */
var Method = function(name) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type ?string
     */
    this._name = name || null;
};


tuna.utils.extend(Method, tuna.events.EventDispatcher);

/**
 * @override
 */
Method.prototype.call = function(args) {};

/**
 * @override
 */
Method.prototype.clone = function() {
    return new this.constructor(this._name);
};

/**
 * @constructor
 * @extends {Method}
 */
tuna.rest.Method = Method;
