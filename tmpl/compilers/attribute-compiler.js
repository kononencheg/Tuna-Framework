/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
var AttributeCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);

/**
 * @override
 */
AttributeCompiler.prototype._getItemsSettings = function(settings) {
    return settings.getAttributes();
};

/**
 * @override
 */
AttributeCompiler.prototype._createItem = function(rootTemplate) {
    return new tuna.tmpl.units.Attribute(rootTemplate);
};

/**
 * @override
 */
AttributeCompiler.prototype._compileItem = function(element, settings, item) {
    tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                    (this, element, settings, item);

    item.setAttributeName(settings.getAttributeName());
    item.setEvent(settings.hasEvent());
};

/**
 * @constructor
 * @extends {AttributeCompiler}
 */
tuna.tmpl.compilers.AttributeCompiler = AttributeCompiler;
