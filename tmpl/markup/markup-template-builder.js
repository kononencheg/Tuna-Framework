


/**
 * Класс извлечения настроек шаблона из верстки.
 *
 * @constructor
 */
tuna.tmpl.markup.MarkupTemplateBuilder = function() {

    /**
     * @type {!Object.<string, !tuna.tmpl.settings.TemplateSettings>}
     * @private
     */
    this.__templatesTable = {};

    /**
     * @type {!Array.<!tuna.tmpl.markup.IMarkupExtractor>}
     * @private
     */
    this.__extractors = [];
};


/**
 * Добавление объекта извлечения элементов шаблона из верстки.
 *
 * @param {!tuna.tmpl.markup.IMarkupExtractor} extractor
 */
tuna.tmpl.markup.MarkupTemplateBuilder.prototype.addExtractor =
    function(extractor) {

    this.__extractors.push(extractor);
};


/**
 * Извлечение настроек шаблона из верстки по идентификатору DOM-элемента.
 *
 * @param {string} templateID Идентификатор DOM-элемента.
 * @return {tuna.tmpl.settings.TemplateSettings} Настройки шаблона.
 */
tuna.tmpl.markup.MarkupTemplateBuilder.prototype.buildSettings =
    function(templateID) {

    if (this.__templatesTable[templateID] === undefined) {
        var element = document.getElementById(templateID);
        if (element !== null) {
            var template = new tuna.tmpl.settings.TemplateSettings();

            var i = 0,
                l = this.__extractors.length;

            var items = null;
            while (i < l) {
                items = this.__extractors[i].extract(element);

                if (items !== null) {
                    template.additems(items);
                }

                i++;
            }

            this.__templatesTable[templateID] = template;
        }
    }

    return this.__templatesTable[templateID] || null;
};
