/**
 * @constructor
 * @extends {tuna.events.EventDispatcher}
 * @param {!Node} target
 */
var ModuleInstance = function(target) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type !Node
     */
    this._target = target;

    /**
     * @private
     * @type Object.<string, ?string>
     */
    this.__defaultOptions = {};
};

tuna.utils.extend(ModuleInstance, tuna.events.EventDispatcher);

/**
 * @return {Node}
 */
ModuleInstance.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return {string}
 */
ModuleInstance.prototype.getName = function() {
    return this._target.getAttribute('data-name');
};

/**
 * @protected
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype._setDefaultOption = function(name, option) {
    this.__defaultOptions[name] = option;
};

/**
 * @param {string} name
 * @param {?string} option
 */
ModuleInstance.prototype.setOption = function(name, option) {
    if (option) {
        this._target.setAttribute('data-' + name, option);
    } else {
        this._target.removeAttribute('data-' + name);
    }
};

/**
 * @param {string} name
 * @return {?string}
 */
ModuleInstance.prototype.getOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};

/**
 * @return {Object}
 */
ModuleInstance.prototype.getOptions = function() {
    return tuna.dom.getAttributesData(this._target);
};

/**
 *
 */
ModuleInstance.prototype.init = function() {};

/**
 *
 */
ModuleInstance.prototype.destroy = function() {};

/**
 * @constructor
 * @extends {ModuleInstance}
 */
tuna.ui.ModuleInstance = ModuleInstance;