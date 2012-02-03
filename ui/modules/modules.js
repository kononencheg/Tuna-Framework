(function() {

    var modulesTable = {};
    var isolators = [];

    tuna.ui.modules.register = function(module) {
        modulesTable[module.getName()] = module;
    };

    tuna.ui.modules.getModule = function(name) {
        if (modulesTable[name] !== undefined) {
            return modulesTable[name];
        }

        return null;
    };

    tuna.ui.modules.addIsolator = function(className) {
        isolators.push(className);
    };

    tuna.ui.modules.getIsolators = function() {
        return isolators;
    };

})();