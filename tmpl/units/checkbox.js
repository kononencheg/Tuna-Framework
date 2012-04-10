


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
};