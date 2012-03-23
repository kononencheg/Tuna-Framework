/**
 * @private
 * @type Array.<string>
 */
tuna.ui.modules.__isolators = [];

/**
 * @return Array.<string>
 */
tuna.ui.modules.getIsolators = function() {
    return tuna.ui.modules.__isolators;
};

/**
 * @param {string} className
 */
tuna.ui.modules.addIsolator = function(className) {
    if (tuna.utils.indexOf(className, tuna.ui.modules.__isolators) === -1) {
        tuna.ui.modules.__isolators.push(className);
    }
};
