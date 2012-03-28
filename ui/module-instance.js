/**
 * @constructor
 * @extends tuna.events.EventDispatcher
 * @param {!Node} target
 */
tuna.ui.ModuleInstance = function(target) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @protected
     * @type !Node
     */
    this._target = target;

    /**
     * @private
     * @type Object.<string, null|string|boolean|number>
     */
    this.__defaultOptions = {};
};

tuna.utils.extend(tuna.ui.ModuleInstance, tuna.events.EventDispatcher);

/**
 * @return {Node}
 */
tuna.ui.ModuleInstance.prototype.getTarget = function() {
    return this._target;
};

/**
 * @return {string}
 */
tuna.ui.ModuleInstance.prototype.getName = function() {
    return this._target.getAttribute('data-name');
};


/**
 * @param {boolean} isEnabled
 */
tuna.ui.ModuleInstance.prototype.setEnabled = function(isEnabled) {
    tuna.dom.setClassExist(this._target, 'disabled', !isEnabled);
};

/**
 * @return {boolean}
 */
tuna.ui.ModuleInstance.prototype.isEnabled = function() {
    return !tuna.dom.hasClass(this._target, 'disabled');
};

/**
 * @protected
 * @param {string} name
 * @param {null|string|boolean|number} option
 */
tuna.ui.ModuleInstance.prototype._setDefaultOption = function(name, option) {
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
tuna.ui.ModuleInstance.prototype.setOption = function(name, option) {
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
tuna.ui.ModuleInstance.prototype.getOption = function(name) {
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
tuna.ui.ModuleInstance.prototype.getStringOption = function(name) {
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
tuna.ui.ModuleInstance.prototype.getNumberOption = function(name) {
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
tuna.ui.ModuleInstance.prototype.getBooleanOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return !!option;
};


/**
 * @return {Object}
 */
tuna.ui.ModuleInstance.prototype.getOptions = function() {
    return tuna.dom.getAttributesData(this._target);
};

/**
 *
 */
tuna.ui.ModuleInstance.prototype.init = function() {};

/**
 *
 */
tuna.ui.ModuleInstance.prototype.destroy = function() {};
