/**
 * @constructor
 * @implements {tuna.ui.transformers.ITransformHandler}
 */
var ViewController = function() {

    /**
     * @protected
     * @type tuna.ui.ModuleContainer
     */
    this._container = null;

    /**
     * @type {boolean}
     * @protected
     */
    this._isActive = false;

    /**
     * @type {Array.<string>}
     * @protected
     */
    this._modules = [];
};

tuna.utils.implement(ViewController, tuna.ui.transformers.ITransformHandler);

/**
 * @return {boolean}
 */
ViewController.prototype.isActive = function() {
    return this._isActive;
};

/**
 * @param {!Node} target
 */
ViewController.prototype.bootstrap = function(target) {
    this._container = new tuna.ui.ModuleContainer(target);
    this._requireModules();
    this._container.initModules();
    this._initActions();
    this._isActive = true;
};

/**
 *
 */
ViewController.prototype.terminate = function() {
    this._destroyActions();
    this._container.destroyModules();
    this._isActive = false;
};

/**
 * @protected
 */
ViewController.prototype._requireModules = function() {
    var i = 0,
        l = this._modules.length;

    while (i < l) {
        this._container.requireModule(this._modules[i]);
        i++;
    }
};

/**
 * @protected
 */
ViewController.prototype._initActions = function() {};

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

