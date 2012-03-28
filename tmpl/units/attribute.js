/**
 * @constructor
 * @extends {tuna.tmpl.units.Spot}
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.Attribute = function(root) {
    tuna.tmpl.units.Spot.call(this, root);

    /**
     * @private
     * @type {string}
     */
    this.__attributeName = '';

    /**
     * @private
     * @type {string}
     */
    this.__eventName = '';

    /**
     * @private
     * @type {boolean}
     */
    this.__hasEvent = false;
};

tuna.utils.extend(tuna.tmpl.units.Attribute, tuna.tmpl.units.Spot);

/**
 * @param {string} attributeName
 */
tuna.tmpl.units.Attribute.prototype.setAttributeName = function(attributeName) {
    this.__attributeName = attributeName;
    this.__eventName = attributeName + '-change';
};

/**
 * @param {boolean} hasEvent
 */
tuna.tmpl.units.Attribute.prototype.setEvent = function(hasEvent) {
    this.__hasEvent = hasEvent;
};

/**
 * @override
 */
tuna.tmpl.units.Attribute.prototype._applyValue = function(value) {
    if (value !== null) {
        this.__setAttribute(value);
    } else {
        this.__removeAttribute();
    }

    if (this.__hasEvent) {
        var self = this;
        setTimeout(function() {
            self.__dispatchAttribute(value);
        }, 0);
    }
};

/**
 * @private
 * @param {*} value
 */
tuna.tmpl.units.Attribute.prototype.__setAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        if (this._nodes[i][this.__attributeName] !== undefined) {
            this._nodes[i][this.__attributeName] = value;
        } else {
            this._nodes[i].setAttribute(this.__attributeName, value + '');
        }


        i--;
    }
};

/**
 * @private
 */
tuna.tmpl.units.Attribute.prototype.__removeAttribute = function() {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        this._nodes[i].removeAttribute(this.__attributeName);

        i--;
    }
};

/**
 * @private
 * @param {*} value
 */
tuna.tmpl.units.Attribute.prototype.__dispatchAttribute = function(value) {
    var i = this._nodes.length - 1;
    while (i >= 0) {
        tuna.dom.dispatchEvent(this._nodes[i], this.__eventName, '' + value);

        i--;
    }
};