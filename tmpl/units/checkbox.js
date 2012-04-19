


/**
 * Класс элемента трансформации отображающий даныные с помощью элемента
 * checkbox.
 *
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент трансформации.
 */
tuna.tmpl.units.Checkbox = function(root) {
    tuna.tmpl.units.Spot.call(this, root);


    /**
     * @type {*}
     * @private
     */
    this.__value = null;


    /**
     * @type {function()}
     * @private
     */
    this.__applyChanges = tuna.utils.bind(this.__applyChanges, this);
};


tuna.utils.extend(tuna.tmpl.units.Checkbox, tuna.tmpl.units.Spot);


/**
 * @const
 * @type {string}
 */
tuna.tmpl.units.Checkbox.NAME = 'checkbox';


/**
 * @inheritDoc
 */
tuna.tmpl.units.Checkbox.prototype._applyValue = function(value) {
    this.__value = value;

    tuna.utils.nextTick(this.__applyChanges);
};


/**
 * @private
 */
tuna.tmpl.units.Checkbox.prototype.__applyChanges = function() {
    var value = this.__value;
    if (value !== null) {
        var i = this._nodes.length - 1;

        if (value === true || value === false) {
            while (i >= 0) {
                this._nodes[i].checked = value;

                i--;
            }
        } else if (value instanceof Array) {
            while (i >= 0) {
                this._nodes[i].checked =
                    tuna.utils.indexOf(this._nodes[i].value, value) !== -1;

                i--;
            }
        } else {
            value = value + '';

            while (i >= 0) {
                this._nodes[i].checked = this._nodes[i].value === value;

                i--;
            }
        }
    }

    this.__value = null;
};

