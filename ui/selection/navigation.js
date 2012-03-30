/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.selection.Navigation = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type {tuna.ui.selection.rule.NavigationSelectionRule}
     * @private
     */
    this.__navigationRule = null;

    /**
     * @private
     * @type {Object.<string|number, Array.<tuna.ui.buttons.Button>>}
     */
    this.__menuLinks = {};

    /**
     * @protected
     * @type {tuna.ui.selection.Navigation}
     */
    this.__parent = null;

    /**
     * @type {Object.<string|number, tuna.ui.selection.Navigation>}
     * @private
     */
    this.__children = {};

    /**
     * @type {Array.<NavigationState>}
     * @private
     */
    this.__history = [];

    /**
     * @type {NavigationState}
     * @private
     */
    this.__currentState = null;

    this._setDefaultOption('selection-class', 'active');
    this._setDefaultOption('item-selector', '.j-navigation-page');
    this._setDefaultOption('menu-selector', '.j-navigation-menu');
};

tuna.utils.extend(tuna.ui.selection.Navigation, tuna.ui.ModuleInstance);

/**
 * @override
 */
tuna.ui.selection.Navigation.prototype.init = function() {
    this.__initNavigation();
    this.__initControls();
    this.__initMenu();
};

/**
 * @private
 */
tuna.ui.selection.Navigation.prototype.__initNavigation = function() {
    this.__navigationRule
        = new tuna.ui.selection.rule.NavigationSelectionRule();

    var itemsCollection =
        new tuna.ui.selection.items.NamedElementsCollection('data-name');

    var selectionView
        = new tuna.ui.selection.view.ClassSelectionView(this._target);

    selectionView.setSelectionClass(this.getStringOption('selection-class'));
    selectionView.setItemSelector(this.getStringOption('item-selector'));
    selectionView.setSelectionRule(this.__navigationRule);
    selectionView.setItemsCollection(itemsCollection);

    this.__navigationRule.setEventDispatcher(this);
    this.__navigationRule.setSelectionView(selectionView);
    this.__navigationRule.setItemsCollection(itemsCollection);
    this.__navigationRule.setNavigation(this);

    selectionView.update();
};

/**
 * @private
 */
tuna.ui.selection.Navigation.prototype.__initControls = function() {
    var self = this;

    var controls = new tuna.ui.buttons.ButtonGroup(this._target);
    controls.setOption('button-selector', '.j-navigation-link');
    controls.setDefaultAction('navigate');

    controls.addEventListener('navigate', function(event, button) {
        event.preventDefault();

        var index = button.getStringOption('href');
        if (index !== null) {
            var data = button.getOptions();
            delete data['href'];

            self.navigate(index, data);
        }
    });

    controls.addEventListener('back', function(event, button) {
        event.preventDefault();

        self.back();
    });

    controls.init();
};

/**
 * @private
 */
tuna.ui.selection.Navigation.prototype.__initMenu = function() {
    var menuSelector = this.getStringOption('menu-selector');
    var buttonSelector = this.getStringOption('button-selector');

    if (menuSelector !== null && buttonSelector !== null) {
        var menu = tuna.dom.selectOne(menuSelector, this._target);
        if (menu !== null) {
            var buttons = tuna.dom.select(buttonSelector, menu);

            var i = 0,
                l = buttons.length;

            var href = null;
            var index = null;
            var button = null;
            while (i < l) {
                button = tuna.ui.buttons.create(buttons[i]);
                href = button.getStringOption('href');
                if (href !== null) {
                    index = href.split('/').shift();

                    if (this.__menuLinks[index] === undefined) {
                        this.__menuLinks[index] = [];
                    }

                    this.__menuLinks[index].push(button);
                }

                i++;
            }
        }
    }

    var currentIndex = this.__navigationRule.getCurrentIndex();
    if (currentIndex !== null) {
        this.__updateMenu(currentIndex, true);
    }};

/**
 *
 * @param {?(string|number)} path
 * @param {boolean} isSelected
 */
tuna.ui.selection.Navigation.prototype.__updateMenu = function(path, isSelected) {
    if (path !== null) {
        var buttons = this.__menuLinks[path];
        if (buttons !== undefined) {
            var i = 0,
                l = buttons.length;

            while (i < l) {
                buttons[i].setActive(isSelected);

                i++;
            }
        }
    }
};

/**
 * @return {tuna.control.ViewController}
 */
tuna.ui.selection.Navigation.prototype.getCurrentController = function() {
    return this.__navigationRule.getCurrentController();
};

/**
 * @return {Array.<string>}
 */
tuna.ui.selection.Navigation.prototype.getPathDesc = function() {
    var result = [];

    var index = this.__navigationRule.getCurrentIndex();
    if (index !== null) {
        result.push(index);

        if (this.__children[index] !== undefined) {
            result = result.concat(this.__children[index].getPathDesc());
        }
    }

    return result;
};

/**
 * @return {Array.<string>}
 */
tuna.ui.selection.Navigation.prototype.getRelatedPath = function() {
    var result = [];

    if (this.__parent !== null) {
        result.push(this.getName());
        result = this.__parent.getRelatedPath().concat(result);
    }

    return result;
};

/**
 * @return {tuna.ui.selection.Navigation}
 */
tuna.ui.selection.Navigation.prototype.getRoot = function() {
    return this.isRoot() ? this : this.__parent.getRoot();
};

/**
 * @return {boolean}
 */
tuna.ui.selection.Navigation.prototype.isRoot = function() {
    return this.__parent === null;
};

/**
 *
 */
tuna.ui.selection.Navigation.prototype.back = function() {
    if (this.isRoot()) {
        if (this.__history.length > 0) {
            this.__currentState = this.__history.pop();

            this.navigatePath(
                this.__currentState.getPath(),
                this.__currentState.getData()
            );

            //window.history.back();
        }
    } else {
        this.getRoot().back();
    }

};

/**
 * @param {string|!Array.<string>} path
 * @param {Object.<string, string>=} data
 */
tuna.ui.selection.Navigation.prototype.navigate = function(path, data) {
    if (path instanceof Array) {

        if (this.isRoot()) {
            if (this.__currentState === null) {
                this.__currentState = new NavigationState(this.getPathDesc());
            }

            this.navigatePath(path, data);

            this.__history.push(this.__currentState);

            this.__currentState = new NavigationState(this.getPathDesc(), data);

            //window.history.pushState(null, '', this.__currentState.serialize());

        } else {
            this.navigatePath(path, data);
        }

    } else {
        var parsedPath = path.split('/');

        if (path.indexOf('/') !== 0) {
            parsedPath = this.getRelatedPath().concat(parsedPath);
        }

        this.getRoot().navigate(parsedPath, data);
    }
};

/**
 * @param {!Array.<string>} path
 * @param {Object.<string, string>=} data
 */
tuna.ui.selection.Navigation.prototype.navigatePath = function(path, data) {
    var index = path.shift();
    while (index === '' && path.length > 0) {
        index = path.shift();
    }

    this.__updateMenu(this.__navigationRule.getCurrentIndex(), false);

    this.__navigationRule.navigate(index, data || null);

    this.__updateMenu(this.__navigationRule.getCurrentIndex(), true);

    if (this.__children[index] !== undefined) {
        return this.__children[index].navigatePath(path, data);
    }
};



/**
 * @param {tuna.ui.ModuleInstance|tuna.ui.selection.Navigation} navigation
 */
tuna.ui.selection.Navigation.prototype.addChild = function(navigation) {
    if (navigation instanceof tuna.ui.selection.Navigation) {
        navigation.setParent(this);

        var name = navigation.getName();
        if (name !== null) {
            this.__children[name] = navigation;
        }
    }
};

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
tuna.ui.selection.Navigation.prototype.setParent = function(navigation) {
    this.__parent = navigation;
};

/**
 * @ignore
 * @param {Array.<string>} path
 * @param {Object.<string, string>=} data
 * @constructor
 */
var NavigationState = function(path, data) {
    /**
     * @type {Array.<string>}
     * @private
     */
    this.__path = path;

    /**
     * @type {Object.<string, string>}
     */
    this.__data = data || null;
};

/**
 * @ignore
 * @return {string}
 */
NavigationState.prototype.serialize = function() {
    var result = '';
    if (this.__data !== null) {
        result = tuna.net.encode(this.__data);
    }

    if (result !== '') {
        result = '?' + result;
    }

    return '/' + this.__path.join('/') + result;
};

/**
 * @ignore
 * @return {Array.<string>}
 */
NavigationState.prototype.getPath = function() {
    return tuna.utils.cloneArray(this.__path);
};

/**
 * @ignore
 * @return {Object}
 */
NavigationState.prototype.getData = function() {
    return this.__data;
};
