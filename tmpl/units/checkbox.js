/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
var Checkbox = function(root) {
    tuna.tmpl.units.Spot.call(this, root);
};

tuna.utils.extend(Checkbox, tuna.tmpl.units.Spot);

/**
 * @protected
 * @param {*} value
 */
Checkbox.prototype._applyValue = function(value) {
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
};

/**
 * @constructor
 * @extends {Checkbox}
 */
tuna.tmpl.units.Checkbox = Checkbox;