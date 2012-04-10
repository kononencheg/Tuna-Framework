


/**
 * Компилятор элемента шаблона устанавливающий данные в элемент input типа
 * checkbox.
 *
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
tuna.tmpl.compilers.CheckboxCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};


tuna.utils.extend
    (tuna.tmpl.compilers.CheckboxCompiler, tuna.tmpl.compilers.SpotCompiler);


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.CheckboxCompiler.prototype.compile =
    function(element, settings, root) {

    if (settings instanceof tuna.tmpl.settings.CheckboxSettings) {
        var checkbox = new tuna.tmpl.units.Checkbox(root);

        this._setupSpot(element, checkbox, settings);

        return checkbox;
    }

    return null;
};
