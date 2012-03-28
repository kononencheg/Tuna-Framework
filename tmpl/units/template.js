/**
 * @constructor
 * @extends {tuna.tmpl.units.CompiledUnit}
 * @param {tuna.tmpl.units.Template} root
 */
tuna.tmpl.units.Template = function(root) {
    tuna.tmpl.units.CompiledUnit.call(this, root || this);

    /**
     * @private
     * @type Array.<tuna.tmpl.units.CompiledUnit>
     */
    this.__items = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__createdChildren = [];

    /**
     * @private
     * @type Array.<Node>
     */
    this.__removedChildren = [];

    /**
     * @private
     * @type Node
     */
    this.__target = null;
};

tuna.utils.extend(tuna.tmpl.units.Template, tuna.tmpl.units.CompiledUnit);

/**
 * @param {Node} element
 */
tuna.tmpl.units.Template.prototype.setTarget = function(element) {
    this.__target = element;
};

/**
 * @param {Array.<tuna.tmpl.units.CompiledUnit>|tuna.tmpl.units.CompiledUnit} items
 */
tuna.tmpl.units.Template.prototype.addItems = function(items) {
    this.__items = this.__items.concat(items);
};

/**
 * @param {Node} child
 */
tuna.tmpl.units.Template.prototype.registerChildCreation = function(child) {
    this.__createdChildren = this.__createdChildren.concat(child);
};

/**
 * @return {Array.<Node>}
 */
tuna.tmpl.units.Template.prototype.fetchCreatedChildren = function() {
    return this.__createdChildren.splice(0, this.__createdChildren.length);
};

/**
 * @param {Node} child
 */
tuna.tmpl.units.Template.prototype.registerChildRemoval = function(child) {
    this.__removedChildren = this.__removedChildren.concat(child);
};

/**
 * @return {Array.<Node>}
 */
tuna.tmpl.units.Template.prototype.fetchRemovedChildren = function() {
    return this.__removedChildren.splice(0, this.__removedChildren.length);
};

/**
 * @override
 */
tuna.tmpl.units.Template.prototype.applyData = function(dataNode) {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].applyData(dataNode);

        i--;
    }
};

/**
 * @override
 */
tuna.tmpl.units.Template.prototype.destroy = function() {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].destroy();

        i--;
    }

    this.__target = null;
};

/**
 * @override
 */
tuna.tmpl.units.Template.prototype.remove = function() {
    var i = this.__items.length - 1;
    while (i >= 0) {
        this.__items[i].remove();

        i--;
    }

    this.__target.parentNode.removeChild(this.__target);
};