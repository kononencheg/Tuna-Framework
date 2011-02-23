/**
 * Spot.js
 * 
 * Реализация класса tuna.tmpl.Spot.
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.tmpl");
}

/**
 * Класс управления отображением текстовых данных узла.
 *
 * @public
 * @class
 * @extends {tuna.tmpl.DataNode} 
 * 
 * @constructor
 * @param {!HTMLElement} target
 */
tuna.tmpl.Spot = function(target) {
	
	/**
	 * Узел установки текста внутрь.
	 *
	 * @protected
	 * @type {!HTMLElement}
	 */
	this._target = target;
};

/**
 * Обработка данных.
 * 
 * @protected
 * @override
 * @param {Object} data Данные для вывода в узел.
 */
tuna.tmpl.Spot.prototype._process = function(data) {
	this._target.innerHTML = data && data.toString();
};
