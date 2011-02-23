/**
 * Template.js
 * 
 * Реализация класса tuna.tmpl.Template.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	tuna.include("tuna.tmpl.ITemplateNode");
}

/**
 * Класс шаблона ленивой трансформации.
 *
 * @public
 * @class
 * @implements {tuna.tmpl.ITemplateNode}
 *
 * @constructor
 */
tuna.tmpl.Template = function() {
	
	/**
	 * Массив дочерних узлов обработки данных.
	 *  
	 * @private
	 * @type {Array.<tuna.tmpl.DataNode>}
	 */	
	this.__children = [];
	
	/**
	 * Узел в котором требуется произвести трансформацию по шаблону.
	 * 
	 * @private
	 * @type {HTMLElement}
	 */
	this.__targetNode = null;
	
	/**
	 * Флаг об уникальности идентификаторов целей трансформации.
	 * 
	 * @private
	 * @type {boolean}
	 */
	this.__isUnique = false;
};

tuna.implement(tuna.tmpl.Template, tuna.tmpl.ITemplateNode);

/**
 * Отрисовка шаблона с использованием данных.
 *
 * @public
 * @param {Object} data Данные для отрисовки.
 */
tuna.tmpl.Template.prototype.apply = function(data) {
	if (this.__targetNode) {
		
	}
};

/**
 * Установка целевого узла трансфомации, с флагом об уникальности 
 * идентификаторов целей трансформации.
 * 
 * Флаг уникальности отмечает, будет ли идентификаторы рабочих элементов 
 * трансформации содержать префикс - идентификатор целевого узда. Если целевой
 * узел не имеет идентификатора, то флагу устанавливается значение об 
 * уникальности дочерних узлов, так как нечего ставить в качестве префикса.
 * 
 * @param {!HTMLElement} node Целевой узел трансформации.
 * @param {boolean} isUnique Флаг об уникальности идентификаторов.
 */
tuna.tmpl.Template.prototype.setTarget = function(node, isUnique) {

	if (!isUnique) {
		var nodeID = node.getAttribute('id');
		
		if (!nodeID || nodeID.length === 0) {
			isUnique = true;
		}
	}
	
	this.__targetNode = node;
	this.__isUnique = !!isUnique;
};
