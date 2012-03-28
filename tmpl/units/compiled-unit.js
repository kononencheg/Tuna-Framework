/**
 * @constructor
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.CompiledUnit = function(root) {
    this.__rootTemplate = root;
};

/**
 * @return {tuna.tmpl.units.Template}
 */
tuna.tmpl.units.CompiledUnit.prototype.getRootTemplate = function() {
    return this.__rootTemplate;
};

/**
 *
 */
tuna.tmpl.units.CompiledUnit.prototype.destroy = function() {};

/**
 *
 */
tuna.tmpl.units.CompiledUnit.prototype.remove = function() {};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 */
tuna.tmpl.units.CompiledUnit.prototype.applyData = function(dataNode) {};