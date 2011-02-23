/**
 * DataNode.js
 * 
 * Реализация класса tuna.tmpl.DataNode.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	tuna.include("tuna.tmpl.DataNode");
	tuna.include("tuna.tmpl.PathEvaluator");
}

/**
 * Абстрактный класс узла шаблона трансформации.
 *
 * @public
 * @class
 * @implements {tuna.tmpl.ITemplateNode}
 *
 * @constructor
 */
tuna.tmpl.DataNode = function() {
	
	/**
	 * Обработчик пути данных
	 * 
	 * @protected
	 * @type {tuna.tmpl.PathEvaluator}
	 */
	this._pathEvaluator = new tuna.tmpl.PathEvaluator();
};

tuna.implement(tuna.tmpl.DataNode, tuna.tmpl.ITemplateNode);

/**
 * Обрабока данных узлом.
 *
 * @public
 * @param {Object} data Данные для оработки.
 */
tuna.tmpl.DataNode.prototype.apply = function(data) {
	this._process(this._pathEvaluator.evaluate(data));
};

/**
 * Установка правила выборки данных.
 * 
 * @public
 * @param {string} path Выборка требуемой части данных.
 */
tuna.tmpl.DataNode.prototype.setPath = function(path) {
	this._pathEvaluator.compile(path);
};

/**
 * Обработка необходимых данных.
 * 
 * @protected
 * @abstract
 * @param {Object} data Данные для обработки
 */
tuna.tmpl.DataNode.prototype._process = function(data) {
	throw Error("Method _process(data:Object) must be overriden in inheritor!");
};