/**
 * @constructor
 * @extends {tuna.view.ViewController}
 */
var NavigationViewController = function() {
    tuna.view.ViewController.call(this);

    /**
     * @protected
     * @type (tuna.ui.selection.Navigation|tuna.ui.ModuleInstance)
     */
    this._navigation = null;

    /**
     * @protected
     * @type Node
     */
    this._currentPage = null;

    /**
     * @private
     * @type Object.<string, tuna.view.ViewController>
     */
    this.__pageControllers = {};
};

tuna.utils.extend(NavigationViewController, tuna.view.ViewController);

/**
 * @return {tuna.view.ViewController}
 */
NavigationViewController.prototype.getCurrentController = function() {
    if (this._currentPage !== null) {
        return this._getPageController(this._currentPage);
    }

    return null;
};

/**
 * @override
 */
NavigationViewController.prototype._requireModules = function() {
    this._container.requireModule('control-container');
    this._container.requireModule('navigation');
};

/**
 * @override
 */
NavigationViewController.prototype._initActions = function() {
    this._navigation = this._container.getOneModuleInstance('navigation');
    if (this._navigation !== null) {
        var self = this;

        this._navigation.addEventListener('select', function(event) {
            if (!self._canClose()) {
                event.preventDefault();
            }
        });

        this._navigation.addEventListener('open', function(event, data) {
            self._setCurrentPage
                (self._navigation.getLastSelectedIndex(), data);
        });

        var currentIndex = this._navigation.getLastSelectedIndex();
        if (currentIndex !== null) {
            this._setCurrentPage(currentIndex);
        }
    }
};

/**
 * @protected
 * @return {boolean}
 */
NavigationViewController.prototype._canClose = function() {
    if (this._currentPage !== null) {
        var controller = this._getPageController(this._currentPage);
        if (controller !== null) {
            return controller.canClose();
        }
    }

    return true;
};

/**
 * @param {string} index
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._setCurrentPage = function(index, args) {
    var newPage = this._navigation.getItemAt(index);
    var oldPage = this._currentPage;

    if (oldPage !== null) {
        this._handlePageClose(oldPage, newPage);
        this._closePage();
    }

    this._currentPage = newPage;

    this._openPage(args);
    this._handlePageOpen(newPage, oldPage);
};

/**
 * @protected
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._openPage = function(args) {
    if (!this.__isPageInit(this._currentPage)) {
        this.__initPage(this._currentPage);
    }

    var controller = this._getPageController(this._currentPage);
    if (controller !== null) {
        controller.open(args);
    }
};

/**
 * @protected
 */
NavigationViewController.prototype._closePage = function() {
    var controller = this._getPageController(this._currentPage);
    if (controller !== null) {
        controller.close();
    }
};

/**
 * @param {Node} page
 * @return {tuna.view.ViewController}
 */
NavigationViewController.prototype._getPageController = function(page) {
    if (this.__isPageInit(page)) {
        return this.__pageControllers[page.id];
    }

    return null;
};

/**
 * @private
 * @param {Node} page
 */
NavigationViewController.prototype.__initPage = function(page) {
    var controller = null;
    var container
        = this._container.getModuleInstanceByName('control-container', page.id);

    if (container !== null) {
        container.initController();
        controller = container.getController();
    }

    if (controller !== null) {
        controller.setNavigation(this._navigation);
    }

    this.__pageControllers[page.id] = controller;
};

/**
 * @private
 * @param {Node} page
 * @return {boolean}
 */
NavigationViewController.prototype.__isPageInit = function(page) {
    return this.__pageControllers[page.id] !== undefined;
};

/**
 * @protected
 * @param {Node} currentPage
 * @param {Node} newPage
 */
NavigationViewController.prototype._handlePageClose
    = function(currentPage, newPage) {};

/**
 * @protected
 * @param {Node} currentPage
 * @param {?Node} oldPage
 */
NavigationViewController.prototype._handlePageOpen
    = function(currentPage, oldPage) {};

/**
 * @constructor
 * @extends {NavigationViewController}
 */
tuna.view.NavigationViewController = NavigationViewController;
