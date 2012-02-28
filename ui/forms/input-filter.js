/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var InputFilter = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {Array.<Object>}
     */
    this._data = null;

    /**
     * @private
     * @type {Array.<Object>}
     */
    this._currentData = null;

    /**
     * @protected
     * @type Node
     */
    this._input = null;

    /**
     * @protected
     * @type function(Object):string
     */
    this._itemSerializeCallback = function(item) {
        return item.name !== undefined ? ('' + item.name) : '';
    };

    /**
     * @protected
     * @type tuna.ui.transformers.TemplateTransformer
     */
    this._transformer = new tuna.ui.transformers.TemplateTransformer(target);
};

tuna.utils.extend(InputFilter, tuna.ui.ModuleInstance);

/**
 * @override
 */
InputFilter.prototype.init = function() {
    this._input = tuna.dom.selectOne('input.j-filtration', this._target);
    if (this._input !== null) {
        var self = this;

        var lastValue = null;
        tuna.dom.addEventListener(this._input, 'keyup', function(event) {
            if (this.value !== lastValue) {
                self.filter(this.value);
                lastValue = this.value;
            }
        });
    }

    this._transformer.init();
};

/**
 * @param {function(Object):string} callback
 */
InputFilter.prototype.setItemSerializeCallback = function(callback) {
    this._itemSerializeCallback = callback;
};

/**
 * @param {Array.<Object>} data
 */
InputFilter.prototype.setData = function(data) {
    this._currentData = this._data = data;
    this.update();
};

/**
 * @param {string} term
 */
InputFilter.prototype.filter = function(term) {
    this._currentData = this._filterData(term);
    this.update();
};

/**
 *
 */
InputFilter.prototype.update = function() {
    this._transformer.applyTransform(this._currentData);
};

/**
 *
 */
InputFilter.prototype.clear = function() {
    this._input.value = '';
    this.filter('');
};

/**
 * @protected
 * @param {string} term
 */
InputFilter.prototype._filterData = function(term) {
    var result = [];

    if (!term || term.length === 0) {
        result = this._data;
    } else {
        var needle = term.toUpperCase();

        var i = 0,
            l = this._data.length;

        var core = null;
        while (i < l) {
            core = this._itemSerializeCallback(this._data[i]);

            if (core.toUpperCase().indexOf(needle) !== -1) {
                result.push(this._data[i]);
            }

            i++;
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {InputFilter}
 */
tuna.ui.forms.InputFilter = InputFilter;