/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.ModuleContainer = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type Array.<string>
     */
    this.__modules = [];

    /**
     * @type Object.<string, Object.<string, Array.<tuna.ui.ModuleInstance>>>
     */
    this.__instances = {};
};

tuna.utils.extend(tuna.ui.ModuleContainer, tuna.ui.ModuleInstance);

/**
 *
 */
tuna.ui.ModuleContainer.prototype.isActive = function() {
    return document.getElementById(this._target.id) === this._target;
};

/**
 * @param {Array.<string>} modules
 */
tuna.ui.ModuleContainer.prototype.requireModules = function(modules) {
    this.__modules = modules;
};

/**
 * @param {Node=} target
 */
tuna.ui.ModuleContainer.prototype.initModules = function(target) {
    target = target || this._target;

    if (target.id === null) {
        target.id = 'container_' + tuna.ui.__lastId++;
    }

    var targetId = target.id;
    if (this.__instances[targetId] === undefined) {
        this.__instances[targetId] = {};
    }

    var instances = this.__instances[targetId];

    var i = 0,
        l = this.__modules.length;

    var type = null;
    var module = null;
    while (i < l) {
        type = this.__modules[i];
        module = tuna.ui.getModule(type);

        if (module !== null) {
            if (instances[type] === undefined) {
                instances[type] = [];
            }

            instances[type] = instances[type].concat(module.init(target, this));
        } else {
            alert('Unknown module "' + type + '"');
        }

        i++;
    }
};

/**
 * @param {string} type
 * @param {string=} targetId
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
tuna.ui.ModuleContainer.prototype.getModuleInstances = function(type,
                                                                targetId) {
    targetId = targetId || this._target.id;

    if (this.__instances[targetId] !== undefined &&
        this.__instances[targetId][type] !== undefined) {
        return this.__instances[targetId][type];
    }

    return null;
};


/**
 * @param {string} type
 * @param {string} name
 * @param {string=} targetId
 * @return {tuna.ui.ModuleInstance}
 */
tuna.ui.ModuleContainer.prototype.getModuleInstanceByName = function(type, name,
                                                                     targetId) {
    targetId = targetId || this._target.id;

    if (this.__instances[targetId] !== undefined &&
        this.__instances[targetId][type] !== undefined) {
        var instances = this.__instances[targetId][type];

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
 * @param {Node=} target
 */
tuna.ui.ModuleContainer.prototype.destroyModules = function(target) {
    if (target === undefined) {
        for (var targetId in this.__instances) {
            this.__destroyModulesById(targetId);
        }
    } else {
        this.__destroyModulesById(target.id);
    }
};

/**
 * @param {string} targetId
 * @private
 */
tuna.ui.ModuleContainer.prototype.__destroyModulesById = function(targetId) {
    var module = null;
    for (var name in this.__instances[targetId]) {
        module = tuna.ui.getModule(name);
        if (module !== null) {
            module.destroy(this.__instances[targetId][name]);
        }

        this.__instances[targetId][name].length = 0;
    }

    delete this.__instances[targetId];
};
