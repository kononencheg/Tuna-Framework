///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл DragEngine.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
//////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.dom");
tuna.include("tuna.geom.Layout");

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
//////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.act) tuna.act = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.act.DragEngine
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс управления перетаскиванием
 */

/**
 * Констркуктор.
 *
 * @param {tuna.act.IDragHandler} dragHandler Обработчик перетаскивания
 * @param {Array} dropTargets Цели перетаскивания
 */
tuna.act.DragEngine = function(dragHandler)
{
	/**
	 * Перетаскиваемый элемент.
	 *
	 * @type Element
	 */
	this.__dragTarget = null;

	/**
	 * Индикатор перетаскиваемого элемента.
	 *
	 * @type Element
	 */
	this.__dragReflection = null;

	/**
	 * Индикатор нового месторасположений перетаскиваемого объекта.
	 *
	 * @type Element
	 */
	this.__dragShadow = null;

	/**
	 * Текущий целевой элемент отпускания.
	 * Необходим для сохранения ссылки перед отпусканием.
	 *
	 * @type Element
	 */
	this.__currentDropTarget = null;

	/**
	 * Целевой элемент отпускания.
	 *
	 * @type Element
	 */
	this.__dropTarget = null;

	/**
	 * Обработчик перетаскивания.
	 *
	 * @type tuna.act.IDragHandler
	 */
	this.__dragHandler = dragHandler != null ? dragHandler : 
	{ 
		handleDrag: function() {},
		handleDrop: function() {},
		handleStart: function() {}
	};

	/**
	 * Цели перетаскивания.
	 *
	 * @type Array
	 */
	this.__dropTargets = [];
}

/**
 * Добавление цели перетаскивания.
 *
 * @param {Element} target Элемент перетаскивания.
 */
tuna.act.DragEngine.prototype.addDropTarget = function(target)
{
	this.__dropTargets.push(target);
}

/**
 * Удаление цели перетаскивания.
 *
 * @param {Element} target Элемент перетаскивания, который следует удалить.
 */
tuna.act.DragEngine.prototype.removeDropTarget = function(target)
{
	var i = this.__dropTargets.length - 1;
	while (i >= 0)
	{
		if (this.__dropTargets[i] == target)
		{
			this.__dropTargets.splice(i, 1);
			
			break;
		}

		i--;
	}
}


/**
 * Установка слушателей перетаскивания.
 */
tuna.act.DragEngine.prototype.__addDragListeners = function()
{
	//Слушатель движения мыши
	var listen = function(self)
	{
		tuna.dom.addEventListener
		(
			document, 'mousemove',
			function(event) { self.__doDrag(event); },
			'doDrag'
		)
	};
	listen(this);

	//Слушатель отпускания мыши
	listen = function(self)
	{
		tuna.dom.addEventListener
		(
			document, 'mouseup', function(event) { self.__doDrop(event); },
			'doDrop'
		)
	};
	listen(this);

	listen = null;
}

/**
 * Удаление слушателей перетаскивания.
 */
tuna.act.DragEngine.prototype.__removeDragListeners = function()
{
	tuna.dom.removeEventListener(document, 'mousemove', 'doDrag');
	tuna.dom.removeEventListener(document, 'mouseup', 'doDrop');
}
/**
 * Перемщение
 *
 * @param {Event} event Событие перетаскивания.
 */
tuna.act.DragEngine.prototype.__doDrag = function(event)
{
	var mousePos = Layout.getMousePosition(event);

	var i = this.__dropTargets.length - 1;
	while (i >= 0)
	{
		if (Layout.hitTest(this.__dropTargets[i], mousePos))
		{
			this.__dropTarget = this.__dropTargets[i];
			
			break;
		}

		i--;
	}

	if (this.__dragReflection != null)
	{
		this.__dragReflection.style.top  = mousePos.y - this.__shiftY + 'px';
		this.__dragReflection.style.left = mousePos.x - this.__shiftX + 'px';
	}

	//Сохраняем целевой объект на случай отпускания.
	this.__currentDropTarget = this.__dropTarget

	//Передаем обоаботчику событие перемещения
	this.__dragHandler.handleDrag(this, event);

	this.__dropTarget = null
}

/**
 * Остановка перетаскивания
 *
 * @param {Event} event Событие перетаскивания.
 */
tuna.act.DragEngine.prototype.__doDrop = function(event)
{
	this.__dragHandler.handleDrop(this, event);

	//Удаляем отображатель перемещения
	if (this.__dragReflection != null)
		document.body.removeChild(this.__dragReflection);

	if (this.__dragShadow != null && this.__dragShadow.parentNode != null)
		this.__dragShadow.parentNode.removeChild(this.__dragShadow);

	this.__dragReflection = null;
	this.__dragShadow = null;

	//Удаляем слушатели перетачкивания.
	this.__removeDragListeners();

	this.__isDragOn = false;
}


/**
 * Начало перетаскивания.
 *
 * @param {Element} target Объект перетаскивания.
 * @param {Element} reflection Объект индикатор перетаскивания
 * @param {Element} shadow Объект индиеатор нового положения
 * @param {Event} event Событие мыши.
 */
tuna.act.DragEngine.prototype.startDrag
	= function(target, reflection, shadow, event)
{
	if (this.__isDragOn)
	{
		this.__doDrop(event);
		return;
	}

	this.__isDragOn = true;

	//Устанваливаем текущие параметры перетаскивания
	this.__dragTarget = target;
	this.__dragShadow = shadow;

	//Определяем смещение относительно мыши
	var mousePos = Layout.getMousePosition(event);
	var targetPos = Layout.getElementPosition(target);
	this.__shiftX = mousePos.x - targetPos.x;
	this.__shiftY = mousePos.y - targetPos.y;

	//Удаляем отображатель перемещения
	if (this.__dragReflection != null)
		document.body.removeChild(this.__dragReflection);

	this.__dragReflection = reflection;

	//Добавляем в тело страницы
	if (this.__dragReflection != null)
	{
		document.body.appendChild(this.__dragReflection);
		this.__dragReflection.style.position = 'absolute';
	}

	//Включаем перемещение.
	this.__addDragListeners();

	this.__dragHandler.handleStart(this, event);

	//Начинаем перемещать
	this.__doDrag(event);

	//Останавливаем распространение событий вверх
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
}

/**
 * Возвращение текущей цели перемещения
 *
 * @return {Element} Объект цели
 */
tuna.act.DragEngine.prototype.getCurrentDropTarget= function()
{
	return this.__currentDropTarget;
}

/**
 * Возвращение текущего объекта перемещения
 *
 * @return {Element} Объект перемещения
 */
tuna.act.DragEngine.prototype.getDragTarget= function()
{
	return this.__dragTarget;
}

/**
 * Возвращение текущего ндикатора перемещения
 *
 * @return {Element} Объект индикатора
 */
tuna.act.DragEngine.prototype.getReflection = function()
{
	return this.__dragReflection;
}

/**
 * Возвращение текущего ндикатора нового положения.
 *
 * @return {Element} Объект индикатора
 */
tuna.act.DragEngine.prototype.getShadow = function()
{
	return this.__dragShadow;
}

///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var DragEngine = tuna.act.DragEngine;