/**
 * @constructor
 * @param {string} selector
 */
var Module = function(selector) {

    /**
     * @protected
     * @type {string}
     */
    this._selector = selector;
};

/**
 * @return {string}
 */
Module.prototype.getSelector = function() {
    return this._selector;
};

/**
 * @param {Node} context
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
Module.prototype.init = function(context, container, options) {
    var instances = [];

    var targets = this._findTargets(context);

    var i = 0,
        l = targets.length;

    var instance = null;
    while (i < l) {
        if (this.__isInContext(targets[i], context)) {
            instance = this.initInstance(targets[i], container, options);
            instance.init && instance.init();

            instances.push(instance);
        }

        i++;
    }

    return instances;
};

/**
 * @protected
 * @param {Node} context
 */
Module.prototype._findTargets = function(context) {
    var targets = tuna.dom.select(this._selector, context);
    targets = targets.concat(tuna.dom.filter(this._selector, [context]));

    return targets;
};

/**
 * @private
 * @param {Node} target
 * @param {Node} context
 */
Module.prototype.__isInContext = function(target, context) {
    var result = true;

    var isolators = tuna.ui.modules.getIsolators();

    var i = 0,
        l = isolators.length;
    while (i < l) {
        result = result && tuna.dom.getParentWithClass
                            (target, isolators[i], context) === null;

        if (!result) {
            break;
        }

        i++;
    }


    return result;
};

/**
 * @param {Array.<tuna.ui.ModuleInstance>} instances
 */
Module.prototype.destroy = function(instances) {
    var i = 0,
        l = instances.length;

    while (i < l) {
        this.destroyInstance(instances[i]);

        i++;
    }

};

/**
 * @param {!Node} target
 * @param {tuna.ui.containers.Container} container
 * @param {Object=} options
 * @return {tuna.ui.ModuleInstance}
 */
Module.prototype.initInstance = function(target, container, options) {};

/**
 * @param {tuna.ui.ModuleInstance} instance
 */
Module.prototype.destroyInstance = function(instance) {};

/**
 * @constructor
 * @extends {Module}
 */
tuna.ui.Module = Module;

