(function() {

    var AttributeCompiler = function() {
        tuna.tmpl.compilers.SpotCompiler.call(this);
    };

    tuna.utils.extend(AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);


    AttributeCompiler.prototype._getItemsSettings = function(settings) {
        return settings.getAttributes();
    };

    AttributeCompiler.prototype._createItem = function(rootTemplate) {
        return new tuna.tmpl.units.Attribute(rootTemplate);
    };

    AttributeCompiler.prototype._compileItem = function(element, settings, item) {
        tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                        (this, element, settings, item);

        item.setAttributeName(settings.getAttributeName());
        item.setEvent(settings.hasEvent());
    };
    
    tuna.tmpl.compilers.AttributeCompiler = AttributeCompiler;
    
})();