///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл Layout.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
//////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.geom.Point");

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
//////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.geom) tuna.geom = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.geom.Layout
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс вспомогательных функций, используемых для расчета положений объектов
 * на страние.
 */

/**
 * Констркуктора нет - все функции статичны.
 */
tuna.geom.Layout = function() {};

/**
 * Функция возравщающая положение мыши.
 *
 * @param {Event} event событие мыши.
 * @return {tuna.geom.Point} Положение мыши.
 */
tuna.geom.Layout.getMousePosition = function(event)
{
	var result = new Point();
	var isIE = window.execScript != null;

	result.x = Math.round(isIE ?
		(event.clientX + document.documentElement.scrollLeft +
			document.body.scrollLeft) :
		(event.clientX + window.scrollX));
	result.y = Math.round(isIE ?
		(event.clientY + document.documentElement.scrollTop +
			document.body.scrollTop) :
		(event.clientY + window.scrollY));

	return result;
}

/**
 * Функция возвращающаяя позицию элемента на странице.
 *
 * @param {Element} target Ссылка на узел.
 * @return {tuna.geom.Point} Положение мыши.
 */
tuna.geom.Layout.getElementPosition = function(target)
{
	var x = 0, y = 0;
	var tempNode = target;

	while(tempNode)
	{
		x += tempNode.offsetLeft;
		y += tempNode.offsetTop;

		tempNode = tempNode.offsetParent;
	}

	return new Point(x, y);
}

/**
 * Проверка попадания точки в границы объекта
 *
 * @param {Element} target Ссылка на узел.
 * @param {tuna.geom.Point} point Координата.
 * @return {Boolean} Результат проверки.
 */
tuna.geom.Layout.hitTest = function(target, point)
{
	var pos = tuna.geom.Layout.getElementPosition(target);
	var left = pos.x, top = pos.y;
	var right = left + target.offsetWidth;
	var bottom = top + target.offsetHeight;

	return left <= point.x && point.x <= right &&
			top <= point.y && point.y <= bottom;

}

/**
 * Возвращение одного дочернего узла под координатой.
 *
 * @param {Element} parent Узел, для которого необходимо найти дочерний.
 * @param {tuna.geom.Point} point Координата.
 * @return {Element} Дочерний узел с точкой.
 */
tuna.geom.Layout.getChildUnderThePoint = function(parent, point)
{
	var child = parent.firstChild;
	while (child)
	{
		if (tuna.geom.Layout.hitTest(child, point))
			return child;

		child = child.nextSibling;
	}

	return null;
}

/**
 * Возвращение всех дочерних узлов под координатой.
 *
 * @param {Element} parent Узел, для которого необходимо найти дочерний.
 * @param {tuna.geom.Point} point Координата.
 * @return {Array} Дочерниt узлs с точкой.
 */
tuna.geom.Layout.getAllChildrenUnderThePoint = function(parent, point)
{
	var result = [];
	var child = parent.firstChild;
	while (child)
	{
		if (tuna.geom.Layout.hitTest(child, point)) 
			result.push(child);
		
		child = child.nextSibling;
	}

	return result;
}

///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var Layout = tuna.geom.Layout;