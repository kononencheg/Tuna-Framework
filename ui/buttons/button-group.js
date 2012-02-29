/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var ButtonGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {?string}
     */
    this.__defaultAction = null;

    /**
     * @type {boolean}
     * @private
     */
    this.__isPreventDefault = true;

    this._setDefaultOption('button-selector', '.j-button');
};

tuna.utils.extend(ButtonGroup, tuna.ui.ModuleInstance);

/**
 * @param {string} action
 */
ButtonGroup.prototype.setDefaultAction = function(action) {
    this.__defaultAction = action;
};

/**
 * @param {boolean} isPreventDefault
 */
ButtonGroup.prototype.setPreventDefault = function(isPreventDefault) {
    this.__isPreventDefault = isPreventDefault;
};

/**
 * @override
 */
ButtonGroup.prototype.init = function() {
    var self = this;

    var buttonSelector = this.getStringOption('button-selector');
    if (buttonSelector !== null) {
        tuna.dom.addChildEventListener(
            this._target, buttonSelector, 'click', function(event) {
                if (self.__isPreventDefault) {
                    tuna.dom.preventDefault(event);
                }

                var button = tuna.ui.buttons.create(this);
                var action = button.getStringOption('action');
                if (action === null) {
                    action = self.__defaultAction;
                }

                if (action !== null) {
                    if (!self.dispatch(action, button)) {
                        tuna.dom.stopPropagation(event);
                    }
                }
            }
        );
    }
};


/**
 * @constructor
 * @extends {ButtonGroup}
 */
tuna.ui.buttons.ButtonGroup = ButtonGroup;