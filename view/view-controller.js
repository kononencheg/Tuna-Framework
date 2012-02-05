/**
 * @constructor
 * @implements {tuna.tmpl.ITransformHandler}
 */
var ViewController = function() {

    /**
     * @protected
     * @type tuna.ui.container.Container
     */
    this._container = null;
};

tuna.utils.implement(ViewController, tuna.tmpl.ITransformHandler);

/**
 * @param {tuna.ui.container.Container} container
 */
ViewController.prototype.setContainer = function(container) {
    this._container = container;
};

/**
 *
 */
ViewController.prototype.bootstrap = function() {
    this.init();
};

/**
 *
 */
ViewController.prototype.terminate = function() {
    this.destroy();
};

/**
 * @protected
 */
ViewController.prototype.init = function() {
    this._requireModules();
    this._container.initModules();
    this._initActions();
};

/**
 * @protected
 */
ViewController.prototype._requireModules = function() {};

/**
 * @protected
 */
ViewController.prototype._initActions = function() {};

/**
 * @protected
 */
ViewController.prototype.destroy = function() {
    this._destroyActions();
    this._container.destroyModules();
};

/**
 * @protected
 */
ViewController.prototype._destroyActions = function() {};

/**
 * @override
 */
ViewController.prototype.handleTransformComplete
    = function(target, createdElements, removedElements) {

    var i = 0,
        l = createdElements.length;

    while (i < l) {
        this._container.initModules(createdElements[i]);
        i++;
    }
};

/**
 * @override
 */
ViewController.prototype.handleTransformStart = function(target) {};

/**
 * @override
 */
ViewController.prototype.handleDestroy = function(target, removedElements) {};


/**
 * @constructor
 * @extends {ViewController}
 */
tuna.view.ViewController = ViewController;

