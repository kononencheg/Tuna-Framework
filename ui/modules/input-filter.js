/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var InputFilterModule = function() {
    tuna.ui.Module.call(this, '.j-input-filter');
};

tuna.utils.extend(InputFilterModule, tuna.ui.Module);

/**
 * @override
 */
InputFilterModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.InputFilter(target);
};

tuna.ui.modules.register('input-filter', new InputFilterModule());
