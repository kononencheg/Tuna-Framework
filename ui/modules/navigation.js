/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var NavigationModule = function() {
    tuna.ui.Module.call(this, '.j-navigation');
};

tuna.utils.extend(NavigationModule, tuna.ui.Module);

/**
 * @override
 */
NavigationModule.prototype.initInstance = function(target) {
    return new tuna.ui.selection.Navigation(target);
};

tuna.ui.modules.register('navigation', new NavigationModule());
