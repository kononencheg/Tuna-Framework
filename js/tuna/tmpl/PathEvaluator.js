/**
 * TUNA FRAMEWORK
 * 
 * @file PathEvaluator.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

tuna.tmpl.PathEvaluator = function() {
	this.__parsedPath = null;
};

tuna.tmpl.PathEvaluator.prototype.setPath = function(path) {
	this.__parsedPath = path.split('/');
};

tuna.tmpl.PathEvaluator.prototype.evaluate = function(dataNode) {
	return this.__applyNextToken(this.__parsedPath, dataNode, 0);	
};

tuna.tmpl.PathEvaluator.prototype.__applyNextToken 
	= function(tokens, dataNode, index) {
	
	var token = tokens[index];
	if (dataNode !== undefined && token !== undefined) {
		var newNode = this.__applyToken(token, dataNode);
		return this.__applyNextToken(tokens, newNode, ++index);
	} 
		
	return dataNode;
};

tuna.tmpl.PathEvaluator.prototype.__applyToken = function(token, dataNode) {
	var result = null;
	
	switch (token) {
		case '': {
			result = dataNode.getRoot();
			
			break;
		}
		
		case '.': {
			result = dataNode;
			break;
		}
		
		case '..': {
			result = dataNode.getParent();
			break;
		}
		
		default: {
			result = dataNode.growChild(token);
		}
	}
	
	return result;
};