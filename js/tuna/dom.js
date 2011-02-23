/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
// 	Файл dom.js
//
// 	Набор утилитарных функций работы с DOM моделью HTML документа.
//
// 	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.dom");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Статические функции области имен
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Добавление слушателя события DOM модели.
 *
 * @param {HTMLElement} element Элемент слушатель события которого необходимо установить.
 * @param {String} type Тип события.
 * @param {Function} handler Обработчик события.
 * @param {String} lambdaIndex Индекс лямбда функции, при повторной записи на
 * один индекс возможны утечки памяти.
 */
pkg.addEventListener = function(element, type, handler, lambdaIndex)
{
	if (element.addEventListener) element.addEventListener(type, handler, false);
	else if (element.attachEvent) element.attachEvent("on" + type, handler);

	//Костыль для замыканий
	if (lambdaIndex != null)
	{
		if (element.__listeners == null) element.__listeners = {};
		element.__listeners[lambdaIndex] = handler;
	}
}

/**
 * Удаление слушателя события DOM модели.
 *
 * @param {HTMLElement} element Элемент слушатель события которого необходимо удалить.
 * @param {String} type Тип события.
 * @param {Function|String} handler Обработчик события либо индекс лямбда функции.
 */
pkg.removeEventListener = function(element, type, handler)
{
	if (typeof handler == "string")
	{
		if (element.__listeners == null)
			throw new Error("Лямбда функция не зарегистрирована", 710);

		handler = element.__listeners[handler];
		element.__listeners[handler] = null;
	}

	if (element.removeEventListener) element.removeEventListener(type, handler, false);
	else if (element.detachEvent) element.detachEvent("on" + type, handler);
}

/**
 * Определение индекса элемета в родительском контейнере.
 *
 * @param {HTMLElement} element Елемент, индекс которого требуется найти.
 * @param {HTMLElement} parent Контейнер в котором должен находится элемент.
 * @return {Number} Индекс узла.
 */
pkg.getChildIndex = function(element, parent)
{
	var result, child;
	if (element.parentNode == parent)
	{
		result = 0;
		child = parent.firstChild;

		while (child && child != element)
		{
			result++;

			child = child.nextSibling;
		}
	}
	else result = -1;

	return result;
}

/**
 * Возвращение дочернего элемента по индексу месторасположения.
 *
 * @param {HTMLElement} parent Контейнер, дочерний элемент которого требуется.
 * @param {Number} index Индекс элемента.
 * @return {HTMLElement} Наденный элемент, null если на данном месте нет элемента.
 */
pkg.getChildAt = function(parent, index)
{
	if (parent.childNodes[index] == null)
		throw new Error("Индекс выходит за границы массива дочерних элементов.");

	return parent.childNodes[index];
}



pkg.getParentWithClass = function(node, className)
{
	var parent = node;
	
	var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	while (parent && !re.test(parent.className))
		parent = parent.parentNode;

	return parent;
}
