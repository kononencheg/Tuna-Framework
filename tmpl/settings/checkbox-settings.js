


/**
 * Настройки элемента отображения данных в DOM-элементы input типа checkbox.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 */
tuna.tmpl.settings.CheckboxSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);
};


tuna.utils.extend
    (tuna.tmpl.settings.CheckboxSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.CheckboxSettings.prototype.getType = function() {
    return 'checkbox';
};
