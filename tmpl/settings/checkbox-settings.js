/**
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
var CheckboxSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);
};

tuna.utils.extend(CheckboxSettings, tuna.tmpl.settings.SpotSettings);

/**
 * @constructor
 * @extends {CheckboxSettings}
 */
tuna.tmpl.settings.CheckboxSettings = CheckboxSettings;
