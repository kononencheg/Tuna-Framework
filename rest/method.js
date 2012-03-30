


/**
 * Абстрактный класс реализации интерфейса удаленного метода
 * <code>tuna.rest.IMethod</code>.
 *
 * @constructor
 * @implements {tuna.rest.IMethod}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} opt_name Имя удаленного метода.
 */
tuna.rest.Method = function(opt_name) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type ?string
     */
    this._name = opt_name || null;
};


tuna.utils.extend(tuna.rest.Method, tuna.events.EventDispatcher);


/**
 * @inheritDoc
 */
tuna.rest.Method.prototype.call = function(args) {};


/**
 * @inheritDoc
 */
tuna.rest.Method.prototype.clone = function(opt_name) {
    return new this.constructor(opt_name || this._name);
};
