/**
 * @constructor
 */
var PathEvaluator = function() {

    /**
     * @private
     * @type Array.<string>
     */
    this.__parsedPath = null;
};

/**
 */
PathEvaluator.prototype.setPath = function(path) {
    this.__parsedPath = path.split('/');
};

/**
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.evaluate = function(dataNode) {
    var node = this.__applyNextToken(this.__parsedPath, dataNode, 0);
    if (node !== null) {
        return node;
    }

    return new tuna.tmpl.data.DataNode(null);
};

/**
 *
 * @param {Array.<string>} path
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @param {number} index
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyNextToken = function(path, dataNode, index) {
    var token = path[index];
    if (dataNode !== null && token !== undefined) {
        return this.__applyNextToken
            (path, this.__applyToken(token, dataNode), ++index);
    }

    return dataNode;
};

/**
 *
 * @param {string} token
 * @param {tuna.tmpl.data.DataNode} dataNode
 * @return {tuna.tmpl.data.DataNode}
 */
PathEvaluator.prototype.__applyToken = function(token, dataNode) {

    switch (token) {
        case '': return dataNode.getRoot();
        case '.': return dataNode;
        case '..': return dataNode.getParent();

        case '$key': return dataNode.getKey();
    }

    return dataNode.growChild(token);
};

/**
 * @constructor
 * @extends {PathEvaluator}
 */
tuna.tmpl.data.PathEvaluator = PathEvaluator;
