/**
 * @constructor
 * @param {string} selector
 */
tuna.ui.Module = function(selector) {
    /**
     * @protected
     * @type {string}
     */
    this._selector = selector;
};

/**
 * @param {Node} context
 * @param {tuna.ui.ModuleContainer} container
 * @return {Array.<tuna.ui.ModuleInstance>}
 */
tuna.ui.Module.prototype.init = function(context, container) {
    var instances = [];

    var targets = this._findTargets(context);

    var i = 0,
        l = targets.length;

    var instance = null;
    while (i < l) {
        if (this.__isInContext(targets[i], context)) {
            instance = this.initInstance(targets[i], container);
            if (instance !== null) {
                instances.push(instance);

                if (!instance.getBooleanOption('not-init')) {
                    instance.init();
                }
            }
        }

        i++;
    }

    return instances;
};

/**
 * @protected
 * @param {Node} context
 */
tuna.ui.Module.prototype._findTargets = function(context) {
    var targets = tuna.dom.select(this._selector, context);
    targets = targets.concat(tuna.dom.filter(this._selector, [context]));

    return targets;
};

/**
 * @private
 * @param {Node} target
 * @param {Node} context
 */
tuna.ui.Module.prototype.__isInContext = function(target, context) {
    var result = true;

    var isolators = tuna.ui.getIsolators();

    var i = 0,
        l = isolators.length;
    while (i < l) {
        if (target !== context) {
            result = result && !tuna.dom.hasClass(target, isolators[i]) &&
                                tuna.dom.getParentWithClass
                                    (target, isolators[i], context) === null;
            if (!result) {
                break;
            }
        }

        i++;
    }


    return result;
};

/**
 * @param {Array.<tuna.ui.ModuleInstance>} instances
 */
tuna.ui.Module.prototype.destroy = function(instances) {
    var i = 0,
        l = instances.length;

    while (i < l) {
        this.destroyInstance(instances[i]);

        i++;
    }

};

/**
 * @param {!Node} target
 * @param {tuna.ui.ModuleContainer} container
 * @return {tuna.ui.ModuleInstance}
 */
tuna.ui.Module.prototype.initInstance = function(target, container) {};

/**
 * @param {tuna.ui.ModuleInstance} instance
 */
tuna.ui.Module.prototype.destroyInstance = function(instance) {};


