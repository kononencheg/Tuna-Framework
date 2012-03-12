/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var ModuleContainer = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type Array.<string>
     */
    this.__modules = [];

    /**
     * @type Object.<string, Array.<tuna.ui.ModuleInstance>>
     */
    this.__instances = {};
};

tuna.utils.extend(ModuleContainer, tuna.ui.ModuleInstance);

/**
 * @param {Node} element
 */
ModuleContainer.prototype.render = function(element) {
    if (element !== undefined) {
        this.clear();
        this._target.appendChild(element);
    }
};

/**
 *
 */
ModuleContainer.prototype.clear = function() {
    this._target.innerHTML = '';
};

/**
 * @param {string} type
 */
ModuleContainer.prototype.requireModule = function(type) {
    this.__modules.push(type);
};

/**
 *
 * @param {Node=} target
 */
ModuleContainer.prototype.initModules = function(target) {
    target = target || this._target;

    var i = 0,
        l = this.__modules.length;

    var type = null;
    var module = null;
    while (i < l) {
        type = this.__modules[i];
        module = tuna.ui.modules.getModule(type);

        if (module !== null) {
            if (this.__instances[type] === undefined) {
                this.__instances[type] = [];
            }

            this.__instances[type]
                = this.__instances[type].concat(module.init(target, this));

        } else {
            alert('Unknown module "' + type + '"');
        }

        i++;
    }
};

/**
 * @param {string} type
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
ModuleContainer.prototype.getModuleInstances = function(type) {
    if (this.__instances[type] !== undefined) {
        return this.__instances[type];
    }

    return null;
};

/**
 * @param {string} type
 * @return {tuna.ui.ModuleInstance}
 */
ModuleContainer.prototype.getOneModuleInstance = function(type) {
    if (this.__instances[type] !== undefined &&
        this.__instances[type][0] !== undefined) {
        return this.__instances[type][0];
    }

    return null;
};

/**
 * @param {string} type
 * @param {string} name
 * @return {tuna.ui.ModuleInstance}
 */
ModuleContainer.prototype.getModuleInstanceByName = function(type, name) {
    if (this.__instances[type] !== undefined) {
        var instances = this.__instances[type];

        var i = 0,
            l = instances.length;

        while (i < l) {
            if (instances[i].getName() === name) {
                return instances[i];
            }

            i++;
        }
    }

    return null;
};

/**
 *
 */
ModuleContainer.prototype.destroyModules = function() {
    for (var name in this.__instances) {
        tuna.ui.modules.getModule(name)
                       .destroy(this.__instances[name]);

        this.__instances[name].length = 0;
    }
};

/**
 * @constructor
 * @extends {ModuleContainer}
 */
tuna.ui.ModuleContainer = ModuleContainer;
