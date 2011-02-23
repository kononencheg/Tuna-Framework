///////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл ReplaceNodeCommand.js
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
//////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.command.Command");

///////////////////////////////////////////////////////////////////////////////
//	Область имен.
//////////////////////////////////////////////////////////////////////////////

var tuna;
if (!tuna) tuna = {};
if (!tuna.command) tuna.command = {};

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.command.ReplaceNodeCommand
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс командв перемещения узла DOM дерева
 * @extends tuna.command.Command
 */

/**
 * Конструктор
 */
tuna.command.ReplaceNodeCommand = function()
{
	/**
	 * Даные о перемещении.
	 *
	 * @type Object
	 */
	this.__data = null;

	/**
	 * Старый родитель
	 *
	 * @type Element
	 */
	this.__oldParent = null;

	/**
	 * Старый последующий элемент
	 *
	 * @type Element
	 */
	this.__oldNextSibling = null;
}

///////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.command.Command
///////////////////////////////////////////////////////////////////////////////

tuna.command.ReplaceNodeCommand.prototype = new tuna.command.Command();
tuna.command.ReplaceNodeCommand.prototype.constructor
	= tuna.command.ReplaceNodeCommand;

/**
 * Операция выполнения команды.
 *
 * @param {Object} data Данные перемещения.
 *		  {Element} data.node Перемещаемй узел.
 *		  {Element} data.target Узел назначения перемещения
 *		  {String} data.position Отношение к узлу перемещения. Может быть "before",
 *		  "after", "child".
 * @return {Boolean} Успех выполнения команды.
 */
tuna.command.ReplaceNodeCommand.prototype.execute = function(data)
{
	var result = true;

	//Если это не повторный вызов команда
	if (data != null)
	{
		//Если не установлен перемещаемый или целевой узел либо они не узлы -
		//ошибка
		if (data.node == null || data.target == null ||
			data.node.nodeType == null || data.target.nodeType == null)
			alert("Неверный формат данных выполенния команды: " + 909);


		//Если не установленно расположение относитлеьного узла назначения,
		//по-умолчанию - "before"
		if (data.position == null)
			data.position = "before";

		//Если целевой узел не находится в DOM дереве но требуется поставить
		//рядом с ним
		if (data.position != "child" && (data.target.parentNode == null ||
			data.target.parentNode.nodeType == null))
			alert("Узел не находится в DOM дереве: " + 709);

		//Сохраняем данные
		this.__data = data;

		//Сохраняем старого родителя
		this.__oldParent = data.node.parentNode;

		//Сохраняем последующий узел
		this.__oldNextSibling = data.node.nextSibling;
	}

	//Целевой узел
	var target = this.__data.target;

	//Перемещаемый узел
	var node = this.__data.node;

	try
	{
		//В зависимости от позиции перемещаем узел
		switch (this.__data.position)
		{
			case "after":
				//Если целевой узел последний
				if (target.nextSibling == null)
					target.parentNode.appendChild(node);
				//Если не последний ставим перед следующим
				else target.parentNode.insertBefore(node, target.nextSibling);
			break;

			case "before":
				target.parentNode.insertBefore(node, target);
			break;

			case "child":
				target.appendChild(node);
			break;

			default: alert("Неизвестное пложоление перемещения:" + 708);
		}
	}
	catch (error) { result = false; }

	node = target = null;

	return result;
}

/**
 * Операция отмены действия команды.
 *
 * @return {Boolean} Успех выполнения команды.
 */
tuna.command.ReplaceNodeCommand.prototype.cancel = function()
{
	var result = true;

	//Перемещаемый узел
	var node = this.__data.node;

	try
	{
		//Если старый родитель был
		if (this.__oldParent != null)
		{
			//И был последующий узел
			if (this.__oldNextSibling != null)
				//Ставим перед ним
				this.__oldParent.insertBefore(node, this.__oldNextSibling);
			//Если не было просто добавляем в конец
			else this.__oldParent.appendChild(node);
		}
		//Если его не было то просто удаляем
		else this.__data.node.parentNode.removeChild(this.__data.node);
	}
	catch (error) { result = false; }

	node = null;

	return result;
}

/**
 * Клонирование команды.
 *
 * @return {tuna.command.Command} Копия даной команды.
 */
tuna.command.ReplaceNodeCommand.prototype.clone = function()
{
	return new tuna.command.ReplaceNodeCommand();
}

///////////////////////////////////////////////////////////////////////////////
//	Глобальные переменные и сокращения
///////////////////////////////////////////////////////////////////////////////

/**
 * Объявление классов без префикса области имен.
 */
var ReplaceNodeCommand = tuna.command.ReplaceNodeCommand;