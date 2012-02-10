/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var ControlContainerModule = function() {
    tuna.ui.Module.call(this, '.j-control-container');
};

tuna.utils.extend(ControlContainerModule, tuna.ui.Module);

/**
 * @override
 */
ControlContainerModule.prototype._findTargets = function(context) {
    return tuna.dom.select(this._selector, context);
};

/**
 * @override
 */
ControlContainerModule.prototype.initInstance = function(target) {
    return new tuna.ui.containers.ControlContainer(target);
};

tuna.ui.modules.register
    ('control-container', new ControlContainerModule(), true);
