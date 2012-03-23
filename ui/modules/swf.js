/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var SWFModule = function() {
    tuna.ui.Module.call(this, 'swf', '.j-swf');
};

tuna.utils.extend(SWFModule, tuna.ui.Module);

/**
 * @override
 */
SWFModule.prototype.initInstance = function(target) {
    return new tuna.ui.flash.SWF(target);
};

tuna.ui.modules.swf = new SWFModule();
