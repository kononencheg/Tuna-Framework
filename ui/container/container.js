(function() {

    var Container = function(target, parent) {
        this._target = target;
        this._parent = parent;

        this.__moduleArgs = {};
        this.__moduleInstances = {};
    };

    Container.prototype.getTarget = function() {
        return this._target;
    };

    Container.prototype.render = function(element) {
        if (element !== undefined) {
            this.clear();
            
            this._target.appendChild(element);
        }
    };

    Container.prototype.clear = function() {
        this._target.innerHTML = '';
    };

    Container.prototype.requireModule = function(names) {
        if (names instanceof Array) {
            var i = 0,
                l = names.length;

            while (i < l) {
                this.__requireOneModule(names[i]);
                i++;
            }
        } else {
            this.__requireOneModule.apply(this, arguments);
        }
    };

    Container.prototype.initModules = function(target) {
        var module = null;
        for (var name in this.__moduleArgs) {
            module = tuna.ui.modules.getModule(name);

            if (module === null) {
                console.error('Unknown module "' + name + '"');
                continue;
            }

            if (this.__moduleInstances[name] === undefined) {
                this.__moduleInstances[name] = [];
            }

            this.__moduleInstances[name] = this.__moduleInstances[name].concat
                (this.__initModule(module, target, this.__moduleArgs[name]));
        }
    };

    Container.prototype.getModuleInstances = function(name) {
        if (this.__moduleInstances[name] !== undefined) {
            return this.__moduleInstances[name];
        }

        return null;
    };

    Container.prototype.getOneModuleInstance = function(name) {
        if (this.__moduleInstances[name] !== undefined &&
            this.__moduleInstances[name][0] !== undefined) {
            return this.__moduleInstances[name][0];
        }
        
        return null;
    };

    Container.prototype.destroyModules = function() {
        for (var name in this.__moduleInstances) {
            tuna.ui.modules.getModule(name)
                           .destroy(this.__moduleInstances[name]);

            this.__moduleInstances[name].length = 0;
        }
    };

    Container.prototype.__initModule = function(module, target, moduleArgs) {
        var result = [];

        var commonArgs = [target || this._target, this];

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

    Container.prototype.__requireOneModule = function() {
        var args = tuna.utils.toArray(arguments);
        var name = args.shift();

        if (this.__moduleArgs[name] === undefined) {
            this.__moduleArgs[name] = [null];
        }

        if (args.length > 0) {
            this.__moduleArgs[name].push(args);
        } else {
            this.__moduleArgs[name][0] = [];
        }
    };

    tuna.ui.container.Container = Container;

})();