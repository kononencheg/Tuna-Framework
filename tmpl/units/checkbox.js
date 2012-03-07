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
    var arrayValue = [];

    if (value instanceof Array) {
        arrayValue = tuna.utils.cloneArray(value);
    } else {
        arrayValue = [ value + '' ];
    }

    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].checked =
            tuna.utils.indexOf(this._nodes.value, arrayValue) !== -1;

        i--;
    }
};

/**
 * @constructor
 * @extends {Checkbox}
 */
tuna.tmpl.units.Checkbox = Checkbox;