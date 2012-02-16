/**
 * @constructor
 * @extends {tuna.ui.forms.InputFilter}
 * @param {!Node} target
 */
var Autocomplete = function(target) {
    tuna.ui.forms.InputFilter.call(this, target);

    /**
     * @private
     * @type Array.<string>
     */
    this.__selectedData = null;

    /**
     * @private
     * @type tuna.ui.selection.SelectionGroup
     */
    this.__selectionGroup = new tuna.ui.selection.SelectionGroup(target);

};

tuna.utils.extend(Autocomplete, tuna.ui.forms.InputFilter);

/**
 * @override
 */
Autocomplete.prototype.init = function() {
    tuna.ui.forms.InputFilter.prototype.init.call(this);
    var body = tuna.dom.selectOne('.j-autocomplete-body', this._target);

    var self = this;

    var isOpen = false;
    tuna.dom.addEventListener(this._input, 'focus', function(event) {
        if (!isOpen) {
            tuna.dom.addOneEventListener(
                document.body, 'click', function() {
                    var data = self.getSelectedData();
                    if (data === null) {
                        self.clear();
                    }

                    tuna.dom.addClass(body, 'hide');
                    isOpen = false;
                }
            );

            tuna.dom.removeClass(body, 'hide');

            isOpen = true;
        }
    });

    tuna.dom.addChildEventListener(
        this._target, '.j-autocomplete-item', 'click', function(event) {
            var index = self.__selectionGroup.getItemIndex(this);
            if (index !== null) {
                self.selectIndex(index);
            } else {
                tuna.dom.stopPropagation(event);
            }
        }
    );

    tuna.dom.addEventListener(this._input, 'click', function(event) {
        tuna.dom.stopPropagation(event);
    });

    this.__selectionGroup.setOption('item-selector', '.j-autocomplete-item');
    this.__selectionGroup.init();
};

/**
 * @return {Array.<Object>}
 */
Autocomplete.prototype.getSelectedData = function() {
    return this.__selectedData;
};

/**
 * @param {string} value
 */
Autocomplete.prototype.selectValue = function(value) {
    var filteredData = this._filterData(value);
    if (filteredData.length === 1) {
        this.__selectedData = filteredData[0];
        this._input.value = value;

        this.dispatch('change');
    }
};

/**
 * @param {string|number} index
 */
Autocomplete.prototype.selectIndex = function(index) {
    if (this._currentData.length > 0) {
        this.__selectedData = this._currentData[index];
        this._input.value = this._itemSerializeCallback(this.__selectedData);

        this.dispatch('change');
    }
};

/**
 *
 */
Autocomplete.prototype.clearSelection = function() {
    if (this.__selectedData !== null) {
        this.__selectedData = null;

        this.dispatch('change');
    }
};

/**
 * @override
 */
Autocomplete.prototype.update = function() {
    tuna.ui.forms.InputFilter.prototype.update.call(this);
    this.__selectionGroup.updateView();
    this.clearSelection();
};

/**
 * @constructor
 * @extends {Autocomplete}
 */
tuna.ui.forms.Autocomplete = Autocomplete;