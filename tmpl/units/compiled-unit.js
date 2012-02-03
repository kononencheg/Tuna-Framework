/**
 * TUNA FRAMEWORK
 * 
 * @file i-compiled-unit.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    var CompiledUnit = function(rootTemplate) {
        this.__rootTemplate = rootTemplate;
    };

    CompiledUnit.prototype.getRootTemplate = function() {
        return this.__rootTemplate;
    };

    CompiledUnit.prototype.destroy = function() {};

    tuna.tmpl.units.CompiledUnit = CompiledUnit;
})();