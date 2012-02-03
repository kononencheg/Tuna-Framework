/**
 * TUNA FRAMEWORK
 * 
 * @file data-node.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    var DataNode = function(value, parent, key) {
        this.__value = null;
        this.__parent = null;
        this.__key = null;

        if (value !== undefined) {
            this.__value = value;
        }
        
        if (parent !== undefined) {
            this.__parent = parent;
        }

        if (key !== undefined) {
            this.__key = key;
        }

        this.__children = {};
    };

    DataNode.NULL_NODE = new DataNode(null, null, null);

    DataNode.prototype.getParent = function() {
        return this.__parent;
    };

    DataNode.prototype.getKey = function() {
        return this.__key;
    };

    DataNode.prototype.getRoot = function() {
        return this.__parent !== null ? this.__parent.getRoot() : this;
    };

    DataNode.prototype.getValue = function() {
        return this.__value;
    };

    DataNode.prototype.growChild = function(key) {
        var result = null;

        if (this.__children[key] !== undefined) {
            result = this.__children[key];
        } else if (this.__value !== null) {
            var keyValue = this.__value[key];
            if (keyValue !== undefined) {
                result = this.__children[key] = new DataNode(keyValue, this, key);
            } else {
                this.__children[key] = DataNode.NULL_NODE;
            }
        }

        return result;
    };

    tuna.tmpl.data.DataNode = DataNode;
})();