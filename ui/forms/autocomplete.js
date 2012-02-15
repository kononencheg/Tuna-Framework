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


    this.__selectionGroup.init();
};

/**
 * @return {Array.<Object>}
 */
Autocomplete.prototype.getSelectedData = function() {
    return this.__selectedData;
};

Autocomplete.prototype.selectValue = function(value) {
    var filteredData = this._filterData(value);
    if (filteredData.length === 1) {
        this.__selectedData = filteredData[0];
        this._input.value = value;

        this.dispatch('change');
    }
};

Autocomplete.prototype.selectIndex = function(index) {
    if (this._currentData.length > 0) {
        this.__selectedData = this._currentData[index];
        this._input.value = this._filterCallback(this.__selectedData);

        this.dispatch('change');
    }
};

Autocomplete.prototype.clearSelection = function() {
    if (this.__selectedData !== null) {
        this.__selectedData = null;

        this.dispatch('change');
    }
};

Autocomplete.prototype.update = function() {
    ui.Filtration.prototype.update.call(this);
    this.__selectionGroup.updateView();
};

Autocomplete.prototype._handleKeyup = function(event) {
    ui.Filtration.prototype._handleKeyup.call(this, event);
    this.clearSelection();
};


/**
 * @constructor
 * @extends {Autocomplete}
 */
tuna.ui.forms.Autocomplete = Autocomplete;