/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.Spot = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root);

    /**
     * @private
     * @type tuna.tmpl.data.PathEvaluator
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @protected
     * @type Array.<!Node>
     */
    this._nodes = [];

    /**
     *
     * @type {Array.<string>}
     * @private
     */
    this._filter = null;
};

tuna.utils.extend(tuna.tmpl.units.Spot, tuna.tmpl.units.CompiledUnit);

/**
 * @param {Array.<string>} filter
 */
tuna.tmpl.units.Spot.prototype.setFilter = function(filter) {
    this._filter = filter;
};

/**
 * @param {string} path
 */
tuna.tmpl.units.Spot.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};

/**
 * @param {Array.<Node>} elements
 */
tuna.tmpl.units.Spot.prototype.addTargets = function(elements) {
    this._nodes = this._nodes.concat(elements);
};

/**
 * @override
 */
tuna.tmpl.units.Spot.prototype.applyData = function(dataNode) {
    var valueNode = this.__pathEvaluator.evaluate(dataNode);
    if (valueNode !== null) {
        var value = valueNode.getValue();

        if (this._filter !== null) {
            value = this._filter.join(value);
        }

        this._applyValue(value);
    }
};

/**
 * @protected
 * @param {*} value
 */
tuna.tmpl.units.Spot.prototype._applyValue = function(value) {
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
 * @override
 */
tuna.tmpl.units.Spot.prototype.destroy = function() {
    this._nodes.length = 0;
    this.__pathEvaluator = null;
};

/**
 * @override
 */
tuna.tmpl.units.Spot.prototype.remove = function() {
    var node = null;
    while (this._nodes.length > 0) {
        node = this._nodes.shift();

        if (node.parentNode !== null) {
            node.parentNode.removeChild(node);

            this.getRootTemplate()
                .registerChildRemoval(node);
        }
    }

    this.__pathEvaluator = null;
};
