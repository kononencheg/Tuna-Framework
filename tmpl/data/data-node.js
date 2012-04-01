/**
 * @constructor
 * @param {!*} value
 * @param {!tuna.tmpl.data.DataNode=} opt_parent
 * @param {string=} opt_key
 */
var DataNode = function(value, opt_parent, opt_key) {
    /**
     * @private
     * @type {!*}
     */
    this.__value = value;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__parent = opt_parent || null;

    /**
     * @private
     * @type ?string
     */
    this.__key = opt_key || null;

    /**
     * @private
     * @type tuna.tmpl.data.DataNode
     */
    this.__keyNode = null;

    /**
     * @private
     * @type Object.<string, tuna.tmpl.data.DataNode>
     */
    this.__children = {};
};

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
    if (this.__keyNode === null) {
        this.__keyNode = new tuna.tmpl.data.DataNode(this.__key);
    }

    return this.__keyNode;
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
 * @return {?string}
 */
DataNode.prototype.getStringValue = function() {
  if (this.__value !== null) {
    return this.__value.toString();
  }

  return null;
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
            this.__children[key] = tuna.tmpl.data.NULL_NODE;
        }
    }

    return result;
};

/**
 * @constructor
 * @extends {DataNode}
 */
tuna.tmpl.data.DataNode = DataNode;

/**
 * @type {tuna.tmpl.data.DataNode}
 */
tuna.tmpl.data.NULL_NODE = new tuna.tmpl.data.DataNode(null);