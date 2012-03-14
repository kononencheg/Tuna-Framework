/**
 * @constructor
 * @extends {tuna.ui.forms.InputFilter}
 * @param {!Node} target
 */
var Autocomplete = function(target) {
    tuna.ui.forms.InputFilter.call(this, target);

    /**
     * @private
     * @type Object
     */
    this.__selectedData = null;

    /**
     * @private
     * @type tuna.ui.selection.SelectionGroup
     */
    this.__selectionGroup = new tuna.ui.selection.SelectionGroup(target, null);

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
                    self.selectValue(self._input.value);

                    if (self.getSelectedData() === null) {
                        self.clear();
                    }

                    tuna.dom.addClass(body, 'hide');
                    isOpen = false;
                }
            );

            self.filter('');
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
 * @return {Object}
 */
Autocomplete.prototype.getSelectedData = function() {
    return this.__selectedData;
};

/**
 * @param {string} value
 */
Autocomplete.prototype.selectValue = function(value) {
    this.__selectedData = null;

    var filteredData = this._filterData(value);

    var dataItem = filteredData.shift();
    if (dataItem !== undefined) {
        if (this._itemSerializeCallback(dataItem) === value) {
            this.__selectData(dataItem)
        }
    }
};

/**
 * @param {string|number} index
 */
Autocomplete.prototype.selectIndex = function(index) {
    if (this._currentData.length > 0) {
        this.__selectData(this._currentData[index]);
    }
};

/**
 * @param {Object} dataItem
 * @private
 */
Autocomplete.prototype.__selectData = function(dataItem) {
    if (this.__selectedData !== dataItem) {

        this.__selectedData = dataItem;
        this._input.value = this._itemSerializeCallback(dataItem);

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