


/**
 * Настройки элемента установки аттрибута.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 */
tuna.tmpl.settings.AttributeSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * Имя аттрибута.
     *
     * @private
     * @type {?string}
     */
    this.attributeName = null;

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
