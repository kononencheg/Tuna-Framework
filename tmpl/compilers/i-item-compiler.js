


/**
 * Интерфейс класса компилятора элементов шаблона.
 *
 * @interface
 */
tuna.tmpl.compilers.IItemCompiler = function() {};


/**
 * Компиляция элемента шаблона.
 *
 * @param {!Node} element Целевой DOM-элемент элемента шаблона.
 * @param {!tuna.tmpl.settings.IItemSettings} settings Настройки элемента
 *        шаблона.
 * @param {!tuna.tmpl.units.Template} root Корневой элемент шаблона.
 * @return {!Array.<!tuna.tmpl.units.IUnit>|tuna.tmpl.units.IUnit}
 *         Скомпилированный элемент, массив элементов или <code>null</code> в
 *         случае неудачи.
 */
tuna.tmpl.compilers.IItemCompiler.prototype.compile =
    function(element, settings, root) {};

