/**
 * TUNA FRAMEWORK
 * 
 * @file compiled-template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    var Template = function(rootTemplate) {
        tuna.tmpl.units.CompiledUnit.call(this, rootTemplate || this);

        this.__items = [];

        this.__createdChildren = [];
        this.__removedChildren = [];

        this.__target = null;
    };

    tuna.utils.extend(Template, tuna.tmpl.units.CompiledUnit);

    Template.prototype.setTarget = function(element) {
        this.__target = element;
    };

    Template.prototype.addItems = function(items) {
        this.__items = this.__items.concat(items);
    };

    // TODO: rename to registerElementCreation
    Template.prototype.registerChildCreation = function(child) {
        this.__createdChildren.push(child);
    };

    Template.prototype.fetchCreatedChildren = function() {
        return this.__createdChildren.splice(0, this.__createdChildren.length);
    };

    Template.prototype.registerChildRemoval = function(child) {
        this.__removedChildren.push(child);
    };

    Template.prototype.fetchRemovedChildren = function() {
        return this.__removedChildren.splice(0, this.__removedChildren.length);
    };

    Template.prototype.applyData = function(dataNode) {
        var i = this.__items.length - 1;
        while (i >= 0) {
            this.__items[i].applyData(dataNode);

            i--;
        }
    };

    Template.prototype.destroy = function() {
        var i = this.__items.length - 1;
        while (i >= 0) {
            this.__items[i].destroy();

            i--;
        }

        this.__target.parentNode.removeChild(this.__target);

        this.getRootTemplate().registerChildRemoval(this.__target);
    };

    tuna.tmpl.units.Template = Template;
})();