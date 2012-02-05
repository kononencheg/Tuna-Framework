/**
 * @constructor
 * @param {*} value
 * @param {tuna.tmpl.data.DataNode=} parent
 * @param {string=} key
 */
var DataNode = function(value, parent, key) {
    /**
     * @private
     * @type *
     */
    this.__value = null;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__parent = parent || null;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__key = new tuna.tmpl.data.DataNode(key || null);

    /**
     * @private
     * @type Object.<string, tuna.tmpl.data.DataNode>
     */
    this.__children = {};
};

/**
 * @const
 * @type tuna.tmpl.data.DataNode
 */
DataNode.NULL_NODE = new tuna.tmpl.data.DataNode(null);

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getParent = function() {
    return this.__parent;
};

/**
 * @return  {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getKey = function() {
    return this.__key;
};

/**
 * @return {tuna.tmpl.data.DataNode}
 */
DataNode.prototype.getRoot = function() {
    return this.__parent !== null ? this.__parent.getRoot() : this;
};

/**
 * @return  {*}
 */
DataNode.prototype.getValue = function() {
    return this.__value;
};

/**
 * @param {string} key
 */
DataNode.prototype.growChild = function(key) {
    var result = null;

    if (this.__children[key] !== undefined) {
        result = this.__children[key];
    } else if (this.__value !== null) {
        var keyValue = this.__value[key];

        if (keyValue !== undefined) {
            this.__children[key]
                = new tuna.tmpl.data.DataNode(keyValue, this, key);

            result = this.__children[key];
        } else {
            this.__children[key] = tuna.tmpl.data.DataNode.NULL_NODE;
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {DataNode}
 */
tuna.tmpl.data.DataNode = DataNode;