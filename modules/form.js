/**
 * @private
 * @constructor
 * @extends {tuna.ui.Module}
 */
var FormModule = function() {
    tuna.ui.Module.call(this, 'form.j-form');
};

tuna.utils.extend(FormModule, tuna.ui.Module);

/**
 * @override
 */
FormModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.Form(target);
};

tuna.ui.registerModule('form', new FormModule());
