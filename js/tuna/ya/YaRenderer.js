/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл YaRenderer.js
//
//	Реализация класса tuna.ya.YaRenderer.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.ya");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.ya.YaRenderer
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс информации о разметке шаблона.
 *
 * @public
 * @constructor
 * @param {String} id Идентификатор узла с разметкой шаблона.
 */
pkg.YaRenderer = function(id)
{
	tuna.checkArgs(arguments, ["String"]);

	/**
	 * Сохраненная разметка данных.
	 *
	 * @public
	 * @type {Object}
	 */
	this.map =
	{
		lists: [],
		spots: []
	};

	/**
	 * Узел элемента разметки.
	 *
	 * @public
	 * @type {HTMLElement}
	 */
	this.blankNode = null;

	var target = document.getElementById(id);

	//Анализ разметки
	var spotsNodes = target.getElementsByTagName(tuna.IS_IE ? "spot" : "ya:spot");

	var i = spotsNodes.length - 1;
	while (i >= 0)
	{
		this.map.spots.push
		({
			target: spotsNodes[i].getAttribute("ya:target"),
			bind: spotsNodes[i].getAttribute("ya:bind")
		});

		i--;
	}

	var rerndererNode =
		target.getElementsByTagName(tuna.IS_IE ? "renderer" : "ya:renderer");

	this.blankNode =
		document.getElementById(rerndererNode[0].getAttribute("ya:item"));
};

/**
 * Клонирование шаблона.
 *
 * @public
 * @param {HTMLElement} list Список, в который будет отрисовка копии.
 * @param {String} itemID Идентификатор элемента списка.
 */
pkg.YaRenderer.prototype.renderItem = function(list, itemID)
{
	//Заменяем идентификаторы в копии
	var spot;
	var i = this.map.spots.length - 1;
	while (i >= 0)
	{
		spot = this.map.spots[i];
		document.getElementById(spot.target).id = itemID + "." + spot.target;
		
		debugger;

		i--;
	}

	var item = this.blankNode.cloneNode(true);
	item.id = itemID;

	i = this.map.spots.length - 1;
	while (i >= 0)
	{
		spot = this.map.spots[i];
		document.getElementById(itemID + "." + spot.target).id = spot.target;

		debugger;

		i--;
	}


	list.appendChild(item);
};

pkg.YaRenderer.prototype.bindItem = function(itemID)
{
	var result = new tuna.ya.YaDomain(itemID);
	var spot;
	var spotData;
	var i = this.map.spots.length - 1;
	while (i >= 0)
	{
		spotData = this.map.spots[i];
		result.addSpot(new tuna.ya.YaSpot(itemID + "." + spotData.target, spotData.bind));

		i--;
	}

	return result;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.YaRenderer, "YaRenderer");