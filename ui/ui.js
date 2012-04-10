/**
 * @private
 * @type number
 */
tuna.ui.__lastId = 0;

/**
 * @private
 * @type Object.<string, tuna.ui.Module>
 */
tuna.ui.__typeTable = {};

/**
 * @private
 * @type Array.<string>
 */
tuna.ui.__isolators = [];

/**
 * @param {string} type
 * @param {tuna.ui.Module} module
 */
tuna.ui.registerModule = function(type, module) {
    tuna.ui.__typeTable[type] = module;
};

/**
 * @param {string} type
 * @return {tuna.ui.Module}
 */
tuna.ui.getModule = function(type) {
    if (tuna.ui.__typeTable[type] !== undefined) {
        return tuna.ui.__typeTable[type];
    }

    return null;
};

/**
 * @return Array.<string>
 */
tuna.ui.getIsolators = function() {
    return tuna.ui.__isolators;
};

/**
 * @param {string} className
 */
tuna.ui.addIsolator = function(className) {
    if (tuna.utils.indexOf(className, tuna.ui.__isolators) === -1) {
        tuna.ui.__isolators.push(className);
    }
};
