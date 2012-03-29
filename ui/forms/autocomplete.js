/**
 * @constructor
 * @extends tuna.ui.forms.InputFilter
 * @param {!Node} target
 */
tuna.ui.forms.Autocomplete = function(target) {
    tuna.ui.forms.InputFilter.call(this, target);

    /**
     * @type Node
     * @private
     */
    this.__listBody = null;

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

tuna.utils.extend(tuna.ui.forms.Autocomplete, tuna.ui.forms.InputFilter);

/**
 * @override
 */
tuna.ui.forms.Autocomplete.prototype.init = function() {
    tuna.ui.forms.InputFilter.prototype.init.call(this);

    var self = this;

    this.__listBody = tuna.dom.selectOne('.j-autocomplete-body', this._target);
    if (this.__listBody !== null && this._input !== null) {

        var isOpen = false;

        tuna.dom.addEventListener(this._input, 'focus', function() {
            if (!isOpen) {
                if (document.body !== null) {
                    tuna.dom.addOneEventListener(
                        document.body, 'click', function() {
                            self.selectValue(self._input.value);

                            if (self.getSelectedData() === null) {
                                self.clear();
                            }

                            tuna.dom.addClass(self.__listBody, 'hide');
                            isOpen = false;
                        }
                    );
                }

                self.filter('');

                tuna.dom.removeClass(self.__listBody, 'hide');
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
    }
};

/**
 * @return {Object}
 */
tuna.ui.forms.Autocomplete.prototype.getSelectedData = function() {
    return this.__selectedData;
};

/**
 * @param {string} value
 */
tuna.ui.forms.Autocomplete.prototype.selectValue = function(value) {
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
tuna.ui.forms.Autocomplete.prototype.selectIndex = function(index) {
    if (this._currentData.length > 0) {
        this.__selectData(this._currentData[index]);
    }
};

/**
 * @param {Object} dataItem
 * @private
 */
tuna.ui.forms.Autocomplete.prototype.__selectData = function(dataItem) {
    if (this.__selectedData !== dataItem) {

        this.__selectedData = dataItem;
        this._input.value = this._itemSerializeCallback(dataItem);

        this.dispatch('change');
    }
};

/**
 *
 */
tuna.ui.forms.Autocomplete.prototype.clearSelection = function() {
    if (this.__selectedData !== null) {
        this.__selectedData = null;

        this.dispatch('change');
    }
};

/**
 * @override
 */
tuna.ui.forms.Autocomplete.prototype.update = function() {
    tuna.ui.forms.InputFilter.prototype.update.call(this);
    this.__selectionGroup.updateView();
    this.clearSelection();
};