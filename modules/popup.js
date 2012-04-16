/**
 * @private
 * @constructor
 * @extends {tuna.ui.Module}
 */
var PopupModule = function() {
    tuna.ui.Module.call(this, '.j-popup');
};

tuna.utils.extend(PopupModule, tuna.ui.Module);

/**
 * @override
 * @param target
 */
PopupModule.prototype.initInstance = function(target) {
    return tuna.ui.popups.create(target);
};

tuna.ui.registerModule('popup', new PopupModule());