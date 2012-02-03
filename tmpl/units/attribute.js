(function() {

    var Attribute = function(rootTemplate) {
        tuna.tmpl.units.Spot.call(this, rootTemplate);

        this.__attributeName = null;
        this.__eventName = null;

        this.__hasEvent = false;
    };

    tuna.utils.extend(Attribute, tuna.tmpl.units.Spot);

    Attribute.prototype.setAttributeName = function(attributeName) {
        this.__attributeName = attributeName;
        this.__eventName = attributeName + '-change';
    };

    Attribute.prototype.setEvent = function(hasEvent) {
        this.__hasEvent = hasEvent;
    };

    Attribute.prototype._applyValue = function(value) {
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

    Attribute.prototype.__setAttribute = function(value) {
        var i = this._nodes.length - 1;
        while (i >= 0) {
            this._nodes[i].setAttribute(this.__attributeName, value);
            i--;
        }
    };

    Attribute.prototype.__removeAttribute = function() {
        var i = this._nodes.length - 1;
        while (i >= 0) {
            this._nodes[i].removeAttribute(this.__attributeName);
            i--;
        }
    };

    Attribute.prototype.__dispatchAttribute = function(value) {
        var i = this._nodes.length - 1;
        while (i >= 0) {
            tuna.dom.dispatchEvent(this._nodes[i], this.__eventName, value);

            i--;
        }
    };

    tuna.tmpl.units.Attribute = Attribute;
})();