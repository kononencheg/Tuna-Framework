/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
var Spot = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @protected
     * @type Array.<Node>
     */
    this._nodes = [];
};

tuna.utils.extend(Spot, tuna.tmpl.units.CompiledUnit);

/**
 * @param {string} path
 */
Spot.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {Array.<Node>} elements
 */
Spot.prototype.addTargets = function(elements) {
    this._nodes = this._nodes.concat(elements);
};

/**
 * @override
 */
Spot.prototype.applyData = function(dataNode) {
    var valueNode = this.__pathEvaluator.evaluate(dataNode);
    if (valueNode !== null) {
        this._applyValue(valueNode.getValue());
    }
};

/**
 * @protected
 * @param {*} value
 */
Spot.prototype._applyValue = function(value) {
    if (value === null) {
        value = '';
    }

    var html = value.toString();

    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i].innerHTML !== html) {
            this._nodes[i].innerHTML = html;
        }

        i--;
    }
};

/**
 * @constructor
 * @extends {Spot}
 */
tuna.tmpl.units.Spot = Spot;
