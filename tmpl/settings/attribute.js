/**
 * TUNA FRAMEWORK
 * 
 * @file attribute.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {


    var Attribute = function() {
        tuna.tmpl.settings.Spot.call(this);

        this.__attributeName = null;
        
        this.__hasEvent = false;
    };

    tuna.utils.extend(Attribute, tuna.tmpl.settings.Spot);

    Attribute.prototype.setEvent = function(hasEvent) {
        this.__hasEvent = hasEvent;
    };

    Attribute.prototype.hasEvent = function() {
        return this.__hasEvent;
    };

    Attribute.prototype.setAttributeName = function(attributeName) {
        this.__attributeName = attributeName;
    };

    Attribute.prototype.getAttributeName = function() {
        return this.__attributeName;
    };

    tuna.tmpl.settings.Attribute = Attribute;
})();