

/**
 * Настройки шаблона трансформации.
 *
 * @constructor
 * @implements {tuna.tmpl.settings.IItemSettings}
 */
tuna.tmpl.settings.TemplateSettings = function() {

    /**
     * Список элементов вставки данных.
     *
     * @type {!Array.<!tuna.tmpl.settings.SpotSettings>}
     */
    this.spots = [];

    /**
     * Список элементов отображения списков.
     *
     * @type {!Array.<!tuna.tmpl.settings.ListSettings>}
     */
    this.lists = [];

    /**
     * Список элементов установки аттрибута.
     *
     * @type {!Array.<!tuna.tmpl.settings.AttributeSettings>}
     */
    this.attributes = [];

    /**
     * Список элементов обработки условий.
     *
     * @type {!Array.<!tuna.tmpl.settings.ConditionSettings>}
     */
    this.conditions = [];

    /**
     * Список элементов отображения данных в DOM-элементы input типа checkbox.
     *
     * @type {!Array.<!tuna.tmpl.settings.CheckboxSettings>}
     */
    this.checkboxex = [];
};

