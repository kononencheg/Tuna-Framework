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
 */
tuna.ui.modules.register = function(type, module) {
    tuna.ui.modules.__typeTable[type] = module;
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
 * @param {string} className
 */
tuna.ui.modules.addIsolator = function(className) {
    tuna.ui.modules.__isolators.push(className);
};

/**
 * @return Array.<string>
 */
tuna.ui.modules.getIsolators = function() {
    return tuna.ui.modules.__isolators;
};
