/**
 * ITemplateNode.js
 * 
 * Объявление интерфейса tuna.tmpl.ITemplateNode.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

/**
 * Интерфейс классов узлов шаблона трансформации.
 *
 * @public
 * @interface
 */
tuna.tmpl.ITemplateNode = function() {};

/**
 * Обработка данных узлом.
 * 
 * TODO: Подумть над необходимостью данного метода и отправки данных в него.
 *
 * @param {Object} data Данные для обработки.
 */
tuna.tmpl.ITemplateNode.prototype.apply = function(data) {};
