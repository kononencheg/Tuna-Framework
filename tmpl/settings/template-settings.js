


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
    this.__items = [];
};


/**
 * Добавление элементов настроек.
 *
 * @param {!Array.<!tuna.tmpl.settings.IItemSettings>} items Элемент настроек
 *        либо массив элементов.
 */
tuna.tmpl.settings.TemplateSettings.prototype.additems = function(items) {
    this.__items = this.__items.concat(items);
};


/**
 * Получение числа элементов настроек.
 *
 * @return {number} Число элементов настроек.
 */
tuna.tmpl.settings.TemplateSettings.prototype.getItemsCount = function() {
    return this.__items.length;
};

/**
 * Получение элемента по индексу.
 *
 * @param {number} index Индекс элемента.
 * @return {!tuna.tmpl.settings.IItemSettings} Элемент настройки.
 */
tuna.tmpl.settings.TemplateSettings.prototype.getItemAt = function(index) {
    return this.__items[index];
};

/**
 * @inheritDoc
 */
tuna.tmpl.settings.TemplateSettings.prototype.getType = function() {
    return tuna.tmpl.units.Template.NAME;
};