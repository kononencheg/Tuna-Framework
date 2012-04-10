


/**
 * Класс объектов извлечения данных шаблона из верстки.
 *
 * @interface
 */
tuna.tmpl.markup.IMarkupExtractor = function() {};



/**
 * Извлечение настроек элемента шаблона из узла верстки.
 *
 * @param {!Node} element DOM-элемент разметки шаблона.
 * @return {!Array.<tuna.tmpl.settings.IItemSettings>} settings Настройки
 *         элементов шаблона.
 */
tuna.tmpl.markup.IMarkupExtractor.prototype.extract = function(element) {};
