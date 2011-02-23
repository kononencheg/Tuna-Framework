///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл Point.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
//////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.geom) tuna.geom = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.geom.Point
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс двумерной точки.
 */

/**
 * Констркуктор.
 *
 * @param {Number} x Положение по оси X.
 * @param {Number} y Положение по оси Y.
 */
tuna.geom.Point = function(x, y)
{
	/**
	 * Положение по оси X.
	 */
	this.x = (x == null) ? 0 : x;
	
	/**
	 * Положение по оси Y.
	 */
	this.y = (y == null) ? 0 : y;
};

///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var Point = tuna.geom.Point;