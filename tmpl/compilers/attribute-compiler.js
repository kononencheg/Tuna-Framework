


/**
 * Компилятор элемента шаблона устанавливающий данные в аттрибут.
 *
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
tuna.tmpl.compilers.AttributeCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};


tuna.utils.extend
    (tuna.tmpl.compilers.AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);


/**
 * @inheritDoc
 */
tuna.tmpl.compilers.AttributeCompiler.prototype.compile =
    function(element, settings, root) {

    if (settings instanceof tuna.tmpl.settings.AttributeSettings) {
        var attribute =
            new tuna.tmpl.units.Attribute(root, settings.attributeName);

        this._setupSpot(attribute, settings);

        attribute.setEvent(settings.hasEvent);

        return attribute;
    }

    return null;
};

