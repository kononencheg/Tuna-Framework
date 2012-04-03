/**
 * @constructor
 * @extends {tuna.tmpl.compilers.SpotCompiler}
 */
tuna.tmpl.compilers.AttributeCompiler = function() {
    tuna.tmpl.compilers.SpotCompiler.call(this);
};

tuna.utils.extend(
  tuna.tmpl.compilers.AttributeCompiler,
  tuna.tmpl.compilers.SpotCompiler
);

/**
 * @override
 */
tuna.tmpl.compilers.AttributeCompiler.prototype._getItemsSettings =
    function(settings) {
  return settings.attributes;
};

/**
 * @override
 */
tuna.tmpl.compilers.AttributeCompiler.prototype._createItem =
    function(rootTemplate) {
  return new tuna.tmpl.units.Attribute(rootTemplate);
};

/**
 * @override
 */
tuna.tmpl.compilers.AttributeCompiler.prototype._compileItem =
    function(element, settings, item) {

  tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                  (this, element, settings, item);

  item.setAttributeName(settings.attributeName);
  item.setEvent(settings.hasEvent);
};

