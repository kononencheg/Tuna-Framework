


/**
 * Настройки элемента установки аттрибута.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 * @param {string} targetSelector CSS-селектор целевых для элемента
 *        шаблонизатора DOM-элементов.
 * @param {string} dataPath Путь к данным для отображения элементом
 *        шаблонизатора.
 * @param {string} attributeName Имя аттрибута для установки.
 */
tuna.tmpl.settings.AttributeSettings =
    function(targetSelector, dataPath, attributeName) {

    tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);

    /**
     * Имя аттрибута.
     *
     * @private
     * @type {string}
     */
    this.attributeName = attributeName;

    /**
     * Флаг наличия события.
     *
     * @private
     * @type {boolean}
     */
    this.hasEvent = false;
};


tuna.utils.extend
    (tuna.tmpl.settings.AttributeSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.AttributeSettings.prototype.getType = function() {
    return tuna.tmpl.units.Attribute.NAME;
};
