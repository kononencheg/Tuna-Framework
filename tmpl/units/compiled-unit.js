/**
 * @constructor
 * @param {tuna.tmpl.units.Template} root
 */
var CompiledUnit = function(root) {
    this.__rootTemplate = root;
};

/**
 * @return {tuna.tmpl.units.Template}
 */
CompiledUnit.prototype.getRootTemplate = function() {
    return this.__rootTemplate;
};

/**
 *
 */
CompiledUnit.prototype.destroy = function() {};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 */
CompiledUnit.prototype.applyData = function(dataNode) {}

/**
 * @constructor
 * @extends {CompiledUnit}
 */
tuna.tmpl.units.CompiledUnit = CompiledUnit;
