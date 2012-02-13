/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var ButtonGroup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    this._setDefaultOption('button-selector', '.j-button');
};

tuna.utils.extend(ButtonGroup, tuna.ui.ModuleInstance);

/**
 * @override
 */
ButtonGroup.prototype.init = function() {
    var self = this;

    var buttonSelector = this.getOption('button-selector');
    if (buttonSelector !== null) {
        tuna.dom.addChildEventListener(
            this._target, buttonSelector, 'click', function(event) {
                var button = tuna.ui.buttons.create(this);
                if (button.getOption('type') !== null) {
                    self.dispatch(button.getOption('type'), button);
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