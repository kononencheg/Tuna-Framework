/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var CheckboxCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(CheckboxCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
CheckboxCompiler.prototype._getItemsSettings = function(settings) {
    return settings.checkboxex;
};

/**
 * @override
 */
CheckboxCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Checkbox(rootTemplate);
};

/**
 * @constructor
 * @extends {CheckboxCompiler}
 */
tuna.tmpl.compilers.CheckboxCompiler = CheckboxCompiler;
