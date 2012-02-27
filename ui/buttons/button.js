/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Button = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type boolean
     */
    this.__isInit = false;
};

tuna.utils.extend(Button, tuna.ui.ModuleInstance);

/**
 * @override
 */
Button.prototype.init = function() {
    if (!this.__isInit) {
        this.__isInit = true;
    }
};

/**
 * @param {boolean} isEnabled
 */
Button.prototype.setEnabled = function(isEnabled) {
    this._isEnabled = isEnabled;
    tuna.dom.setClassExist(this._target, 'disabled', !isEnabled);
};

/**
 * @param {boolean} isActive
 */
Button.prototype.setActive = function(isActive) {
    tuna.dom.setClassExist(this._target, 'active', isActive);
};

/**
 * @constructor
 * @extends {Button}
 */
tuna.ui.buttons.Button = Button;