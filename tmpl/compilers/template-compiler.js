


/**
 * Компилятор шаблона трансформации.
 *
 * @constructor
 */
tuna.tmpl.compilers.TemplateCompiler = function() {

    /**
     * @private
     * @type {!Object.<string, !tuna.tmpl.compilers.IItemCompiler>}
     */
    this.__itemCompilers = {};
};


/**
 * Регистрация компиляторов элементов шаблона определенного типа.
 *
 * @param {string} type Тип элементов шаблона.
 * @param {!tuna.tmpl.compilers.IItemCompiler} compiler Компилятор элементов
 *        соответсвующего типа.
 */
tuna.tmpl.compilers.TemplateCompiler.prototype.registerCompiler =
    function(type, compiler) {

    this.__itemCompilers[type] = compiler;
};


/**
 * Компиляция шаблона трансформации.
 *
 * @param {!Node} element Целевой DOM-элемент элемента шаблона.
 * @param {!tuna.tmpl.settings.TemplateSettings} settings Настройки шаблона.
 * @param {!tuna.tmpl.units.Template=} opt_root Корневой элемент шаблона.
 * @return {!tuna.tmpl.units.Template} Скомпилированный шаблон.
 */
tuna.tmpl.compilers.TemplateCompiler.prototype.compile =
    function(settings, element, opt_root) {

    var template = new tuna.tmpl.units.Template(opt_root);
    template.setTarget(element);

    var i = 0,
        l = settings.items.length;

    var root = opt_root || template;
    var item = null;
    var compiler = null;
    var itemSettings = null;
    while (i < l) {
        itemSettings = settings.items[i];
        compiler = this.__itemCompilers[itemSettings.getType()];

        if (compiler !== undefined) {
            item = compiler.compile(element, itemSettings, root);

            if (item !== null) {
                template.addItems(item);
            }
        }

        i++;
    }

    return template;
};
