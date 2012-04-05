


/**
 * Настройки элемента шаблонизатора вставки данных в DOM-элемент.
 *
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
tuna.tmpl.settings.SpotSettings = function() {
    
    /**
     * CSS-селектор целевых для элемента шаблонизатора DOM-элементов.
     *
     * @public
     * @type {?string}
     */
    this.targetSelector = null;

    /**
     * Путь к данным для отображения элементом шаблонизатора.
     *
     * @public
     * @type {?string}
     */
    this.dataPath = null;

    /**
     * Разбитая строка образца отображения данных.
     *
     * @public
     * @type {Array.<string>}
     */
    this.pattern = null;
};


/**
 * @inheritDoc
 */
tuna.tmpl.settings.SpotSettings.prototype.getType = function() {
    return tuna.tmpl.units.Spot.NAME;
};
