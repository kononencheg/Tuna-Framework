/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Navigation = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, 'id');

    this._setOption('is-multiple', null);

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
};

tuna.utils.extend(Navigation, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Navigation.prototype.init = function() {
    var self = this;

    this.addEventListener('deselected', function(event, index) {
        self.dispatch('close');
    });

    this.addEventListener('selected', function(event, index) {
        self.dispatch('open', self.__openData);
    });

    tuna.ui.selection.SelectionGroup.prototype.init.call(this);
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
    this.selectIndex(index);
    this.__openData = null;
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