/**
 * @private
 * @type Object.<string, tuna.ui.Module>
 */
tuna.ui.modules.__typeTable = {};

/**
 * @private
 * @type Array.<string>
 */
tuna.ui.modules.__isolators = [];

/**
 * @param {string} type
 * @param {tuna.ui.Module} module
 * @param {boolean=} isIsolator
 */
tuna.ui.modules.register = function(type, module, isIsolator) {
    tuna.ui.modules.__typeTable[type] = module;

    if (isIsolator) {
        tuna.ui.modules.__isolators.push(module.getSelector());
    }
};

/**
 * @param {string} type
 * @return {tuna.ui.Module}
 */
tuna.ui.modules.getModule = function(type) {
    if (tuna.ui.modules.__typeTable[type] !== undefined) {
        return tuna.ui.modules.__typeTable[type];
    }

    return null;
};

/**
 * @return Array.<string>
 */
tuna.ui.modules.getIsolators = function() {
    return tuna.ui.modules.__isolators;
};
