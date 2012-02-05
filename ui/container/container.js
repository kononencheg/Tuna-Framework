/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Container = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type Object.<string, Array>
     */
    this.__moduleArgs = {};

    /**
     * @type Object.<string, Array.<tuna.ui.ModuleInstance>>
     */
    this.__moduleInstances = {};
};

tuna.utils.extend(Container, tuna.ui.ModuleInstance);

/**
 * @param {Node} element
 */
Container.prototype.render = function(element) {
    if (element !== undefined) {
        this.clear();
        this._target.appendChild(element);
    }
};

/**
 *
 */
Container.prototype.clear = function() {
    this._target.innerHTML = '';
};

/**
 * @param {string} type
 * @param {...} var_args
 */
Container.prototype.requireModule = function(type, var_args) {
    var args = tuna.utils.toArray(arguments);
    args.shift();

    if (this.__moduleArgs[type] === undefined) {
        this.__moduleArgs[type] = [null];
    }

    if (args.length > 0) {
        this.__moduleArgs[type].push(args);
    } else {
        this.__moduleArgs[type][0] = [];
    }
};

/**
 *
 * @param {Node=} target
 */
Container.prototype.initModules = function(target) {
    target = target || this._target;

    var module = null;
    var instances = null;
    for (var type in this.__moduleArgs) {
        module = tuna.ui.modules.getModule(type);

        if (module !== null) {
            if (this.__moduleInstances[type] === undefined) {
                this.__moduleInstances[type] = [];
            }

            instances
                = this.__initModule(module, target, this.__moduleArgs[type]);

            this.__moduleInstances[type]
                = this.__moduleInstances[type].concat(instances);

        } else {
            alert('Unknown module "' + type + '"');
        }
    }
};

/**
 * @param {string} type
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.getModuleInstances = function(type) {
    if (this.__moduleInstances[type] !== undefined) {
        return this.__moduleInstances[type];
    }

    return null;
};

/**
 * @param {string} type
 * @return {tuna.ui.ModuleInstance}
 */
Container.prototype.getOneModuleInstance = function(type) {
    if (this.__moduleInstances[type] !== undefined &&
        this.__moduleInstances[type][0] !== undefined) {
        return this.__moduleInstances[type][0];
    }

    return null;
};

Container.prototype.getModuleInstanceByName = function(type, name) {
    if (this.__moduleInstances[type] !== undefined) {
        var instances = this.__moduleInstances[type];

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
Container.prototype.destroyModules = function() {
    for (var name in this.__moduleInstances) {
        tuna.ui.modules.getModule(name)
                       .destroy(this.__moduleInstances[name]);

        this.__moduleInstances[name].length = 0;
    }
};

/**
 * @param {tuna.ui.Module} module
 * @param {Node} target
 * @param {Array} moduleArgs
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Container.prototype.__initModule = function(module, target, moduleArgs) {
    var result = [];

    var commonArgs = [target, this];

    var i = moduleArgs.length - 1;
    while (i >= 0) {
        if (moduleArgs[i] !== null) {
            result = result.concat(
                module.init.apply(module, commonArgs.concat(moduleArgs[i]))
            );
        }

        i--;
    }

    return result;
};

/**
 * @constructor
 * @extends {Container}
 */
tuna.ui.container.Container = Container;
