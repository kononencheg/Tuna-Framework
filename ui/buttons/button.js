/**
 * TODO: Button factory and stuff
 *
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Button = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @protected
     * @type boolean
     */
    this._isInit = false;
};

tuna.utils.extend(Button, tuna.ui.ModuleInstance);

/**
 * @override
 */
Button.prototype.init = function() {
    if (!this._isInit) {
        this._isInit = true;
        // TODO: Stop events in disabled.

        var self = this;
        tuna.dom.addEventListener(this._target, 'click', function(event) {
            if (self.isEnabled()) {
                self.dispatch('click');
            } else {
                tuna.dom.stopPropagation(event);
            }
        });
    }
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