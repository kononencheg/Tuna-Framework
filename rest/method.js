


/**
 * Абстрактный класс реализации интерфейса удаленного метода
 * <code>tuna.rest.IMethod</code>.
 *
 * @constructor
 * @implements {tuna.rest.IMethod}
 * @extends {tuna.events.EventDispatcher}
 */
tuna.rest.Method = function() {
    tuna.events.EventDispatcher.call(this);
};


tuna.utils.extend(tuna.rest.Method, tuna.events.EventDispatcher);


/**
 * @inheritDoc
 */
tuna.rest.Method.prototype.call = function(args) {};


/**
 * @inheritDoc
 */
tuna.rest.Method.prototype.clone = function() {
    return new this.constructor();
};
