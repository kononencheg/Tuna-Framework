/**
 * TUNA FRAMEWORK
 * 
 * @file CompiledTemplate.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

tuna.tmpl.__CompiledTemplate = function() {
	this.__spots = [];
	this.__lists = [];
	
	this.__target = null;
};

tuna.tmpl.__CompiledTemplate.prototype.setTarget = function(element) {
	this.__target = element;
};

tuna.tmpl.__CompiledTemplate.prototype.addSpot = function(spot) {
	this.__spots.push(spot);
};

tuna.tmpl.__CompiledTemplate.prototype.addList = function(list) {
	this.__lists.push(list);
};

tuna.tmpl.__CompiledTemplate.prototype.applyData = function(dataNode) {
	var i = this.__spots.length - 1;
	while (i >= 0) {
		this.__spots[i].applyData(dataNode);
		
		i--;
	}
	
	i = this.__lists.length - 1;
	while (i >= 0) {
		this.__lists[i].applyData(dataNode);
		
		i--;
	}
};

tuna.tmpl.__CompiledTemplate.prototype.destroy = function() {
	this.__target.parentNode.removeChild(this.__target);
	
	var i = this.__lists.length - 1;
	while (i >= 0) {
		this.__lists[i].destroy();
		
		i--;
	}
};