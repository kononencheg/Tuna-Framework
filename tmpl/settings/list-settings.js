


/**
 * Настройки элемента шаблона отображения списка.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @param {string} targetSelector CSS-селектор целевых для элемента
 *        шаблонизатора DOM-элементов.
 * @param {string} dataPath Путь к данным для отображения элементом
 *        шаблонизатора.
 * @param {string} keyPath Путь к ключу элемента списка.
 * @param {string} itemRendererID Идектификатор DOM-элемента прототипа списка.
 * @param {!tuna.tmpl.settings.TemplateSettings} itemSettings Настройки шаблона
 *        элемента списка.
 */
tuna.tmpl.settings.ListSettings =
    function(targetSelector, dataPath, keyPath, itemRendererID, itemSettings) {

    tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);

    /**
     * Путь выборки данных ключа элемента списка.
     *
     * @type {string}
     */
    this.keyPath = keyPath;

    /**
     * Идентификатор прототипа элемента списка.
     *
     * @type {string}
     */
    this.itemRendererID = itemRendererID;

    /**
     * Настройки шаблона элемента списка.
     *
     * @type {!tuna.tmpl.settings.TemplateSettings}
     */
    this.itemSettings = itemSettings;
};


tuna.utils.extend
    (tuna.tmpl.settings.ListSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.ListSettings.prototype.getType = function() {
    return tuna.tmpl.units.List.NAME;
};
