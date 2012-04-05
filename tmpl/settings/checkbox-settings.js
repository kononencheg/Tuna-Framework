


/**
 * Настройки элемента отображения данных в DOM-элементы input типа checkbox.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @param {string} targetSelector CSS-селектор целевых для элемента
 *        шаблонизатора DOM-элементов.
 * @param {string} dataPath Путь к данным для отображения элементом
 *        шаблонизатора.
 */
tuna.tmpl.settings.CheckboxSettings = function(targetSelector, dataPath) {
    tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);
};


tuna.utils.extend
    (tuna.tmpl.settings.CheckboxSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.CheckboxSettings.prototype.getType = function() {
    return tuna.tmpl.units.Checkbox.NAME;
};
