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
     * @type boolean
     * @protected
     */
    this._isEnabled = true;

    /**
     * @private
     * @type Object.<string, null|string|boolean|number>
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
 * @param {boolean} isEnabled
 */
ModuleInstance.prototype.setEnabled = function(isEnabled) {
    this._isEnabled = isEnabled;
};

/**
 * @return {boolean}
 */
ModuleInstance.prototype.isEnabled = function() {
    return this._isEnabled;
};

/**
 * @protected
 * @param {string} name
 * @param {null|string|boolean|number} option
 */
ModuleInstance.prototype._setDefaultOption = function(name, option) {
    if (option === null) {
        delete this.__defaultOptions[name];
    } else {
        this.__defaultOptions[name] = option;
    }
};

/**
 * @param {string} name
 * @param {null|string|boolean|number} option
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
 * @return {null|string|boolean|number}
 */
ModuleInstance.prototype.getOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};

/**
 * @param {string} name
 * @return {null|string}
 */
ModuleInstance.prototype.getStringOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};

/**
 * @param {string} name
 * @return {null|number}
 */
ModuleInstance.prototype.getNumberOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return Number(option);
};

/**
 * @param {string} name
 * @return {boolean}
 */
ModuleInstance.prototype.getBooleanOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return !!option;
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