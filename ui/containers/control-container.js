/**
 * @constructor
 * @extends {tuna.ui.containers.Container}
 * @param {!Node} target
 */
var ControlContainer = function(target) {
    tuna.ui.containers.Container.call(this, target);

    /**
     * @private
     * @type tuna.view.ViewController
     */
    this.__controller = null;

    this._setDefaultOption('init-event', null);
};

tuna.utils.extend(ControlContainer, tuna.ui.containers.Container);

/**
 * @override
 */
ControlContainer.prototype.render = function(element) {
    tuna.ui.containers.Container.prototype.render.call(this, element);

    if (this.__controller !== null) {
        this.__controller.init();
    }
};

/**
 * @override
 */
ControlContainer.prototype.clear = function() {
    tuna.ui.containers.Container.prototype.clear.call(this);

    if (this.__controller !== null) {
        this.__controller.destroy();
    }
};

/**
 * @override
 */
ControlContainer.prototype.init = function() {
    if (this.getOption('is-auto-init')) {
        this.initController();
    }
};

/**
 * @public
 */
ControlContainer.prototype.initController = function() {
    this.__controller = tuna.view.getController(this._target);

    if (this.__controller !== null) {
        this.__controller.setContainer(this);
        this.__controller.bootstrap();
    } else {
        alert('Can\'t find controller for ' + this._target.tagName +
                                        '#' + this._target.id);
    }
};

/**
 * @public
 * @return tuna.view.ViewController
 */
ControlContainer.prototype.getController = function() {
    return this.__controller;
};

tuna.ui.containers.ControlContainer = ControlContainer;
