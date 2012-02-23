/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Navigation = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, 'id');

    /**
     * @private
     * @type Object.<string, string>
     */
    this.__openData = null;

    /**
     * @private
     * @type Array.<string|number>
     */
    this.__history = [];

    /**
     * @private
     * @type {tuna.ui.buttons.ButtonGroup}
     */
    this.__controls = null;

    /**
     * @private
     * @type {Object.<string|number, Array.<tuna.ui.buttons.Button>>}
     */
    this.__menuLinks = {};

    this.setOption('is-multiple', null);
    this._setDefaultOption('item-selector', '.j-navigation-page');
    this._setDefaultOption('menu-selector', '.j-navigation-menu');
};

tuna.utils.extend(Navigation, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Navigation.prototype.init = function() {
    tuna.ui.selection.SelectionGroup.prototype.init.call(this);

    var self = this;

    this.addEventListener('deselected', function(event, index) {
        self.__updateMenu(index, false);
        self.dispatch('close');
    });

    this.addEventListener('selected', function(event, index) {
        self.__updateMenu(index, true);
        self.dispatch('open', self.__openData);
    });

    this.__controls = new tuna.ui.buttons.ButtonGroup(this._target);
    this.__controls.setOption('button-selector', '.j-navigation-link');
    this.__controls.setDefaultAction('navigate');

    this.__controls.addEventListener('navigate', function(event, button) {
        var index = button.getOption('href');
        if (index !== null) {
            if (self.navigate(index, button.getOptions())) {
                event.preventDefault();
            }
        }
    });

    this.__controls.addEventListener('back', function(event, button) {
        self.back();
    });

    this.__controls.init();

    this.__initMenu();
};

/**
 * @private
 */
Navigation.prototype.__initMenu = function() {
    var menuSelector = this.getOption('menu-selector');
    var buttonSelector = this.getOption('button-selector');

    if (menuSelector !== null && buttonSelector !== null) {
        var menu = tuna.dom.selectOne(menuSelector, this._target);
        var buttons = tuna.dom.select(buttonSelector, menu);

        var i = 0,
            l = buttons.length;

        var href = null;
        var button = null;
        while (i < l) {
            button = tuna.ui.buttons.create(buttons[i]);
            href = button.getOption('href');
            if (href !== null) {
                if (this.__menuLinks[href] === undefined) {
                    this.__menuLinks[href] = [];
                }

                this.__menuLinks[href].push(button);
            }

            i++;
        }

    }

    var index = this.getLastSelectedIndex();
    if (index !== null) {
        this.__updateMenu(index, true);
    }
};

/**
 *
 * @param {number|string} index
 * @param {boolean} isSelected
 */
Navigation.prototype.__updateMenu = function(index, isSelected) {
    var buttons = this.__menuLinks[index];
    if (buttons !== undefined) {
        var i = 0,
            l = buttons.length;

        while (i < l) {
            buttons[i].setActive(isSelected);

            i++;
        }
    }
};

/**
 * @param {string|number} index
 * @param {Object.<string, string>=} data
 */
Navigation.prototype.navigate = function(index, data) {
    var currentIndex = this.getLastSelectedIndex();
    if (currentIndex !== null) {
        this.__history.push(currentIndex);
    }

    this.__openData = data || null;
    var result = this.selectIndex(index);
    this.__openData = null;

    return result;
};

/**
 *
 */
Navigation.prototype.back = function() {
    this.selectIndex(this.__history.pop());
};

/**
 * @constructor
 * @extends {Navigation}
 */
tuna.ui.selection.Navigation = Navigation;