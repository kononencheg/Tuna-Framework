/**
 * MarkupFactory.js
 * 
 * Реализация класса tuna.tmpl.MarkupFactory.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	tuna.include("tuna.tmpl.ITemplateFactory");
}

/**
 * Класс фабрики шаблонов, котрая создает их с помощью специальнйо разметки 
 * внутри страницы.
 *
 * @public
 * @class
 * @implements {tuna.tmpl.ITemplateFactory}
 *
 * @constructor
 * @param {Node} templateNode Узел с разметкой трансформации.
 */
tuna.tmpl.MarkupFactory = function(templateNode) {

};

tuna.implement(tuna.tmpl.MarkupFactory, tuna.tmpl.ITemplateFactory);

/**
 * Создание объекта шаблона.
 *
 * @public
 * @return {tuna.tmpl.Template} Шаблон трансформации.
 */
tuna.tmpl.MarkupFactory.prototype.build = function() {

};

/**
 * Инициализация глобальной фабрики
 * 
 * @param {HTMLElement} templateContainer
 */
tuna.tmpl.MarkupFactory.init = function(templateContainer) {
	
};

/**
 * Взятие шаблона по имени.
 * 
 * @public
 * @static
 * @param {string} templateName Имя шаблона.
 * @param {HTMLElement} targetNode Целевой шаблон трансформации.
 * @param {boolean} isUnique Флаг об уникальности идентификаторов целей 
 * 							 трансформации.
 * 
 * @return {tuna.tmpl.Template} Шаблон трансформации.
 */
tuna.tmpl.MarkupFactory.buildTemplate = function(templateName, targetNode, 
												 isUnique) {
	
};