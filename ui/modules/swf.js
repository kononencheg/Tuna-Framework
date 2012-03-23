/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SWFModule = function() {
    tuna.ui.Module.call(this, '.j-swf');
};

tuna.utils.extend(SWFModule, tuna.ui.Module);

/**
 * @override
 */
SWFModule.prototype.initInstance = function(target) {
    return new tuna.ui.flash.SWF(target);
};

tuna.ui.modules.register('swf', new SWFModule());
