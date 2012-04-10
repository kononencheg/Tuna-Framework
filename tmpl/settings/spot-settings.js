


/**
 * Настройки элемента шаблонизатора вставки данных в DOM-элемент.
 *
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 * @param {string} targetSelector CSS-селектор целевых для элемента
 *        шаблонизатора DOM-элементов.
 * @param {string} dataPath Путь к данным для отображения элементом
 *        шаблонизатора.
 */
tuna.tmpl.settings.SpotSettings = function(targetSelector, dataPath) {
    
    /**
     * CSS-селектор целевых для элемента шаблонизатора DOM-элементов.
     *
     * @public
     * @type {string}
     */
    this.targetSelector = targetSelector;

    /**
     * Путь к данным для отображения элементом шаблонизатора.
     *
     * @public
     * @type {string}
     */
    this.dataPath = dataPath;

    /**
     * Разбитая строка образца отображения данных.
     *
     * @public
     * @type {?string}
     */
    this.pattern = null;
};


/**
 * @inheritDoc
 */
tuna.tmpl.settings.SpotSettings.prototype.getType = function() {
    return tuna.tmpl.units.Spot.NAME;
};
