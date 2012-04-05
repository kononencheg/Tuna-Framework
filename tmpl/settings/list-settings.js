


/**
 * Настройки элемента шаблона отображения списка.
 *
 * @constructor
 * @extends {tuna.tmpl.settings.SpotSettings}
 */
tuna.tmpl.settings.ListSettings = function() {
    tuna.tmpl.settings.SpotSettings.call(this);

    /**
     * Путь выборки данных ключа элемента списка.
     *
     * @type {?string}
     */
    this.keyPath = null;

    /**
     * Идентификатор прототипа элемента списка.
     *
     * @type {?string}
     */
    this.itemRendererID = null;

    /**
     * Настройки шаблона элемента списка.
     *
     * @type {tuna.tmpl.settings.TemplateSettings}
     */
    this.itemSettings = null;
};


tuna.utils.extend
    (tuna.tmpl.settings.ListSettings, tuna.tmpl.settings.SpotSettings);


/**
 * @inheritDoc
 */
tuna.tmpl.settings.ListSettings.prototype.getType = function() {
    return 'list';
};
