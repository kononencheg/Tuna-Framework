(function() {

    var Module = function(name, selector) {
        this._name = name;
        this._selector = selector;
    };

    Module.prototype.getName = function() {
        return this._name;
    };

    Module.prototype.getSelector = function() {
        return this._selector;
    };

    Module.prototype.init = function(context, container, options) {
        var instances = [];

        var targets = this._findTargets(context);

        var i = 0,
            l = targets.length;

        while (i < l) {
            if (this.__isInContext(targets[i], context)) {
                instances.push
                    (this.initInstance(targets[i], container, options));
            }

            i++;
        }

        return instances;
    };

    Module.prototype._findTargets = function(context) {
        var targets = tuna.dom.select(this._selector, context);
        targets = targets.concat(tuna.dom.filter(this._selector, [context]));

        return targets;
    };

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

    Module.prototype.destroy = function(instances) {
        var i = 0,
            l = instances.length;

        while (i < l) {
            this._destroyInstance(instances[i]);

            i++;
        }

    };

    Module.prototype.initInstance = function(target, container, options) {};

    Module.prototype.destroyInstance = function(instance) {};

    tuna.ui.modules.Module = Module;

})();