/**
 * TUNA FRAMEWORK
 * 
 * @file DataNode.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

tuna.tmpl.__DataNode = function(value, parent) {
	this.__value = value;
	this.__parent = parent;
	
	this.__children = {};
};

tuna.tmpl.__DataNode.NULL_NODE = new tuna.tmpl.__DataNode();

tuna.tmpl.__DataNode.prototype.getParent = function() {
	return this.__parent;
};

tuna.tmpl.__DataNode.prototype.getRoot = function() {
	return this.__parent ? this.__parent.getRoot() : this;
};

tuna.tmpl.__DataNode.prototype.growChild = function(key) {
	var result = this.__children[key];
	
	if (result === undefined && this.__value !== undefined) {
		var keyValue = this.__value[key];
		if (keyValue !== undefined) {
			result = this.__children[key] 
						= new tuna.tmpl.__DataNode(keyValue, this);
		} else {
			this.__children[key] = tuna.tmpl.__DataNode.NULL_NODE;
		}
	}
	
	return result;
};

tuna.tmpl.__DataNode.prototype.getValue = function() {
	return this.__value;
};

