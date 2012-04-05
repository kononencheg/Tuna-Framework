


/**
 * Класс объектов компилирующих элементы шаблона отображающие данные в целевом
 * DOM-элементе.
 *
 * @constructor
 * @implements {tuna.tmpl.compilers.IItemCompiler}
 */
tuna.tmpl.compilers.SpotCompiler = function() {};


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.SpotCompiler.prototype.compile =
    function(element, settings, root) {

    if (settings instanceof tuna.tmpl.settings.SpotSettings) {
        var spot = new tuna.tmpl.units.Spot(root);

        this._setupSpot(spot, settings);

        return spot;
    }

    return null;
};


/**
 * Установка настроек элемента.
 *
 * Элемент шаблона должен наследовать от класса
 * <code>tuna.tmpl.units.Spot</code>.
 *
 * @protected
 * @param {tuna.tmpl.units.Spot} spot Элемент шаблона.
 * @param {!tuna.tmpl.settings.SpotSettings} settings Настройки элемента.
 */
tuna.tmpl.compilers.SpotCompiler.prototype._setupSpot =
    function(spot, settings) {

    spot.setPath(settings.dataPath);

    if (settings.pattern !== null) {
        spot.setPattern(settings.pattern.split('$$'));
    }

    var selector = settings.targetSelector;
    if (tuna.dom.matchesSelector(element, selector)) {
        spot.addTargets(element);
    } else {
        spot.addTargets(tuna.dom.select(selector, element));
    }
};