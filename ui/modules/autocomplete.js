/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var AutocompleteModule = function() {
    tuna.ui.Module.call(this, 'autocomplete', '.j-autocomplete');
};

tuna.utils.extend(AutocompleteModule, tuna.ui.Module);

/**
 * @override
 */
AutocompleteModule.prototype.initInstance = function(target) {
    return new tuna.ui.forms.Autocomplete(target);
};

tuna.ui.modules.autocomplete = new AutocompleteModule();
