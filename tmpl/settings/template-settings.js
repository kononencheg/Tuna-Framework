


/**
 * Настройки шаблона трансформации.
 *
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
tuna.tmpl.settings.TemplateSettings = function() {

    /**
     * Список настроек элементов.
     *
     * @type {!Array.<!tuna.tmpl.settings.IItemSettings>}
     */
    this.items = [];
};


/**
 * @inheritDoc
 */
tuna.tmpl.settings.TemplateSettings.prototype.getType = function() {
    return tuna.tmpl.units.Template.NAME;
};