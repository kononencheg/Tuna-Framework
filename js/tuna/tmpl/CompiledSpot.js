/**
 * TUNA FRAMEWORK
 * 
 * @file CompiledSpot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	
	tuma.include("tuna.tmpl.ICompiledUnit");
	tuma.include("tuna.tmpl.PathEvaluator");
}

tuna.tmpl.__CompiledSpot = function() {
	this.__pathEvaluator = new tuna.tmpl.PathEvaluator();
	this.__nodes = [];
};

tuna.implement(tuna.tmpl.__CompiledSpot, tuna.tmpl.__ICompiledUnit);

tuna.tmpl.__CompiledSpot.prototype.setPath = function(path) {
	this.__pathEvaluator.setPath(path);
};

tuna.tmpl.__CompiledSpot.prototype.applyData = function(dataNode) {
	var sampleNode = this.__pathEvaluator.evaluate(dataNode);
	if (sampleNode !== undefined) {
		
		var i = this.__nodes.length - 1;
		var value = sampleNode.getValue().toString();
		while (i >= 0) {
			if (this.__nodes[i].innerHTML !== value) {
				this.__nodes[i].innerHTML = value;
			}
			
			i--;
		}
	}
};

tuna.tmpl.__CompiledSpot.prototype.addTargets = function(elements) {
	this.__nodes = this.__nodes.concat(elements);
};