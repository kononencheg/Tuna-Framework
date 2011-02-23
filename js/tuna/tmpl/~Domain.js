/**
 * Domain.js
 * 
 * Реализация класса tuna.tmpl.Domain.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
	
	tuna.include("tuna.tmpl.Spot");
}

/**
 * Класс управления отображением динамически изменяемых сложных данных в узле 
 * DOM дерева.
 *
 * @public
 * @class
 * @extends {tuna.tmpl.Spot}
 *
 * @constructor
 * @param {!HTMLElement} target Идентификатор узла содержащего разметку 
 *		преобразования данных.
 * @param {string=} path Путь в наборе данных, к которому привязывается узел. 
 *		Если путь не установлен, в качестве данных для отрисовки будет взят сам 
 *		набор данных.
 */
tuna.tmpl.Domain = function(target, path) {

	/**
	 * Массив дочерних узлов управления отображением.
	 *
	 * @private
	 * @type {!Array.<tuna.tmpl.Spot>}
	 */
	this.__children = [];

	// Родительский конструктор.
	tuna.tmpl.Domain._super.constructor.call(this, target, path);
};

tuna.extend(tuna.tmpl.Domain, tuna.tmpl.Spot);

/**
 * Отрисовка данных всех дочерних элементов.
 *
 * @public
 * @override
 * @param {!Object} data Данные требуемой области видимости данных.
 */
tuna.tmpl.Domain.prototype.renderData = function(data) {
	var i = 0, l = this.__children.length;
	
	while (i < l) {
		this.__children[i].render(data);
		i++;
	}
};

