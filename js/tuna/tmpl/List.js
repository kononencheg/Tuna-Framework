/**
 * TUNA FRAMEWORK
 * 
 * @file List.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	
	tuna.include('tuna.tmpl.Spot');
}

tuna.tmpl.List = function() {
	tuna.tmpl.Spot.call(this);
	
	this.__keyPath = '';
	
	this.__itemRenderer = null;
	this.__itemTemplate = null;
};

tuna.extend(tuna.tmpl.List, tuna.tmpl.Spot);

tuna.tmpl.List.prototype.setItemKeyDataPath = function(path) {
	this.__keyPath = path;
};

tuna.tmpl.List.prototype.getItemKeyDataPath = function() {
	return this.__keyPath;
};

tuna.tmpl.List.prototype.setItemRendererID = function(id) {
	this.__itemRendererID = id;
};

tuna.tmpl.List.prototype.getItemRendererID = function() {
	return this.__itemRendererID;
};

tuna.tmpl.List.prototype.setItemTemplate = function(template) {
	this.__itemTemplate = template;
};

tuna.tmpl.List.prototype.getItemTemplate = function() {
	return this.__itemTemplate;
};


