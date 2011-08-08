/**
 * ITemplateFactory.js
 * 
 * Объявление интерфейса tuna.tmpl.ITemplateFactoryr.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	tuna.include("tuna.tmpl.Template");
}

/**
 * Интерфейс классов создателей (фабрик) шаблонов трансформации.
 *
 * @public
 * @interface
 */
tuna.tmpl.ITemplateFactory = function() {};

/**
 * Создание шаблонов
 * 
 * @return {tuna.tmpl.Template} Шаблон трансформации.
 */
tuna.tmpl.ITemplateFactory.prototype.build = function() {};
