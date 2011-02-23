///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл ListDragHandler.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
//////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.command.CommandHolder");

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
///////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.act) tuna.act = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.act.ListDragHandler
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс стандатртного обработчика перетаскивания для списков.
 *
 * @implements tuna.act.IDragHandler
 */

/**
 * Конструктор.
 *
 * @param {String} replaceCommanName Имя команды изменения положения
 * расположения узла.
 */
tuna.act.ListDragHandler = function(replaceCommanName)
{
	/**
	 * Имя команды изменения положения расположения узла.
	 *
	 * @type String
	 */
	this.__replaceCommandName = replaceCommanName;
}

///////////////////////////////////////////////////////////////////////////////
//	Реализация tuna.act.IDragHandler
///////////////////////////////////////////////////////////////////////////////

/**
 * Обработка отпускания перетаскиваемого объекта
 *
 * @param {tuna.act.DragEngine} engine Объект управления перетаскиванием.
 * @param {Event} event Событие мыши.
 */
tuna.act.ListDragHandler.prototype.handleDrop = function(engine, event)
{
	var dragTarget = engine.getDragTarget()
	var dropTarget = engine.getCurrentDropTarget();
	var shadow = engine.getShadow();
	
	if (dropTarget != null)
	{
		//Если зарегистрирована команда перемещения - переставляем с помощью нее
		if (this.__replaceCommandName != null)
		{
			var replacePosition = 'before';
			var replaceTarget = shadow.nextSibling

			//Если "тень" это последний элемент
			if (replaceTarget == null)
			{
				//То необходимо добвать просто в конец.
				replaceTarget = dropTarget;
				replacePosition = 'child';
			}

			CommandHolder.getInstance().doCommand
			(
				this.__replaceCommandName,
				{
					node: dragTarget,
					target: replaceTarget,
					position: replacePosition
				}
			);
		}
		//Если не зарегистрирована - то просто ставим на место тени.
		else dropTarget.insertBefore(dragTarget, shadow);
	}

	dragTarget.style.display = '';
}

/**
 * Обработка процесса перетаскивания
 *
 * @param {tuna.act.DragEngine} engine Объект управления перетаскиванием.
 * @param {Event} event Событие мыши.
 */
tuna.act.ListDragHandler.prototype.handleDrag = function(engine, event)
{
	var dropTarget = engine.getCurrentDropTarget();
	var shadow = engine.getShadow();

	if (dropTarget != null)
	{
		var mousePos = Layout.getMousePosition(event);
		var targetChild = Layout.getChildUnderThePoint(dropTarget, mousePos);

		if (targetChild != null)
		{
			var top = Layout.getElementPosition(targetChild).y;
			var bottom = targetChild.offsetHeight + top;

			//Если мышь ближе к верхнему краю
			if (Math.abs(top - mousePos.y) < Math.abs(bottom - mousePos.y))
				dropTarget.insertBefore(shadow, targetChild);
			else if (targetChild.nextSibling)
				dropTarget.insertBefore(shadow, targetChild.nextSibling);
			else dropTarget.appendChild(shadow);
		}
		else dropTarget.appendChild(shadow);
	}
	else if (shadow.parentNode != null) shadow.parentNode.removeChild(shadow);
}

/**
 * Обработка начала перетаскивания объекта
 *
 * @param {tuna.act.DragEngine} engine Объект управления перетаскиванием.
 * @param {Event} event Событие мыши.
 */
tuna.act.ListDragHandler.prototype.handleStart = function(engine, event)
{
	var dragTarget = engine.getDragTarget();
	var shadow = engine.getShadow();

	dragTarget.style.display = 'none';
	dragTarget.parentNode.insertBefore(shadow, dragTarget);
};


///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var ListDragHandler = tuna.act.ListDragHandler;