/**
 * @constructor
 * @extends {tuna.control.ViewController}
 */
var PageViewController = function() {
    tuna.control.ViewController.call(this);

    /**
     * @protected
     * @type tuna.ui.selection.Navigation
     */
    this._navigation = null;
};

tuna.utils.extend(PageViewController, tuna.control.ViewController);

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
PageViewController.prototype.setNavigation = function(navigation) {
    this._navigation = navigation;
};

/**
 * @param {string|number} index
 */
PageViewController.prototype.canClose = function(index) {
    return true;
};

/**
 *
 */
PageViewController.prototype.close = function() {};

/**
 * @param {Object.<string, string>} args
 */
PageViewController.prototype.open = function(args) {};

/**
 * @constructor
 * @extends {PageViewController}
 */
tuna.control.PageViewController = PageViewController;