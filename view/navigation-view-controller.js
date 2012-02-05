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
    this._pageNavigation = null;

    /**
     * @protected
     * @type (tuna.view.PageViewController|tuna.view.ViewController)
     */
    this._currentController = null;

    /**
     * @protected
     * @type Node
     */
    this._currentPage = null;
};

tuna.utils.extend(NavigationViewController, tuna.view.ViewController);

/**
 * @override
 */
NavigationViewController.prototype._requireModules = function() {
    this._container.requireModule('transform-container');
    this._container.requireModule('navigation');
};

/**
 * @override
 */
NavigationViewController.prototype._initActions = function() {
    this._pageNavigation = this._container.getOneModuleInstance('navigation');

    if (this._pageNavigation !== null) {
        var self = this;

        this._pageNavigation.addEventListener('select',
            /**
             * @param {tuna.events.BasicEvent} event
             * @param {*} index
             */
            function(event, index) {
                if (!self._canClose(index)) {
                    event.preventDefault();
                }
            }
        );

        this._pageNavigation.addEventListener('close',
            /**
             * @param {tuna.events.BasicEvent} event
             */
            function(event) {
                if (self._currentController !== null) {
                    self._currentController.close();
                }
            }
        );

        this._pageNavigation.addEventListener('open',
            /**
             * @param {tuna.events.BasicEvent} event
             * @param {*} data
             */
            function(event, data) {
                self._setCurrentPage
                    (self._pageNavigation.getLastSelectedIndex(), data);
            }
        );

        this._pageNavigation.mapItems(function(index, page) {
            var pageController = tuna.view.getController(page);
            if (pageController !== null) {
                pageController.setNavigation(self._pageNavigation);
            }
        });

        this._setCurrentPage(this._pageNavigation.getLastSelectedIndex());
    }

};

/**
 * @protected
 * @param {string} index
 * @return {boolean}
 */
NavigationViewController.prototype._canClose = function(index) {
    if (this._currentController !== null) {
        return this._currentController.canClose(index);
    }

    return true;
};

/**
 * @param {string} index
 * @param {Object.<string, string>=} args
 */
NavigationViewController.prototype._setCurrentPage = function(index, args) {
    var newPage = this._pageNavigation.getItemAt(index);
    var oldPage = this._currentPage;

    if (this._currentPage !== null) {
        this._handlePageClose(this._currentPage, newPage);
    }

    this._currentPage = newPage;

    this._currentController = tuna.view.getController(this._currentPage);
    if (this._currentController !== null) {
        this._currentController.open(args || null);
    }

    this._handlePageOpen(this._currentPage, oldPage);
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
 * @param {Node} oldPage
 */
NavigationViewController.prototype._handlePageOpen
    = function(currentPage, oldPage) {};

/**
 * @constructor
 * @extends {NavigationViewController}
 */
tuna.view.NavigationViewController = NavigationViewController;
