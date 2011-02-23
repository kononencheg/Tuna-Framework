/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл YaList.js
//
//	Реализация класса tuna.ya.YaList.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.ext.SafeObject");

tuna.include("tuna.ya.YaRenderer");
tuna.include("tuna.ya.YaSpot");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.ya");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.ya.YaList
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс списка элементов трансформации.
 *
 * @public
 * @extend tuna.ya.YaSpot
 *
 * @constructor
 * @param {String} id Идентификатор узла списка трансформации.
 * @param {String} bind Путь в наборе данных к которому привязан список.
 * @param {String} renderer Идентификатор узла c разметкой элемента отрисовум.
 * @param {String} key Путь к ключевому индексу элемента в наборе данных.
 */
pkg.YaList = function(id, bind, renderer, key)
{
	tuna.checkArgs(arguments, ["String", "String", "String"]);

	/**
	 * Данные элемента отрисовки.
	 *
	 * @private
	 * @type {tuna.ya.YaRenderer}
	 */
	this.__renderer = new tuna.ya.YaRenderer(renderer);

	/**
	 * Массив доменов-узлов списка.
	 *
	 * Домен соответсвует ключевому идентификатору элементу набора данных.
	 *
	 * @private
	 * @type {Array.<tuna.ya.YaDomain>}
	 */
	this.__domains = {};

	/**
	 * Ключевой индентфикатор элемента набора данных для связи с элементов отображения.
	 *
	 * Должен быть уникальным.
	 *
	 * @private
	 * @type {Array.<String>}
	 */
	this.__key = key.split('.');

	//Родительский конструктор.
	tuna.ya.YaList._super.constructor.call(this, id, bind);
};

//Наследуем элементарный элемент оттображения
tuna.extend(pkg.YaList, tuna.ya.YaSpot);

/**
 * Применение данных.
 * 
 * Обновление элементов точечных данных для изменившихся данных.
 *
 * @param {Array.<Object>} data Данные требуемой области видимости данных.
 */
pkg.YaList.prototype.renderData = function(data)
{
	tuna.checkArgs(arguments, ["Array"]);

	//Пробегаем по всем элементам массива, и ищем уже отрисованные элементы, если не
	//находим, то отрисовываем новые
	
	//Данные элемента отрисовки
	var safeDataItem;

	//Индес элемента данных
	var dataItemKey;

	//Идентификатор строки списка
	var rowID;

	//Облать отрисовки строки
	var rowDomain;
	
	var l = data.length, i = 0, j;
	while (i < l)
	{
		safeDataItem = new tuna.data.ext.SafeObject(data[i]);
		dataItemKey = safeDataItem.get(this.__key);

		rowDomain = this.__domains[dataItemKey];
		rowID = this.targetID + ":" + dataItemKey;

		//Если нет области данных для данной строки ..
		if (rowDomain == null)
		{
			//..создаем ее.

			//Если строка еще не отрисована ..
			if (!document.getElementById(rowID))
				//..отрисовываем сами
				this.__renderer.renderItem(this._target, rowID);

			this.__domains[dataItemKey] = this.__renderer.bindItem(rowID);
		}

		this.__domains[dataItemKey].renderData(data[i]);

		
		i++;
	}

	/*
	//Элемент данных строки
	var safeDataItem;

	//Идентификатор строки списка
	var idPrefix;

	//Строка списка
	var row;

	//Информация о точечном элементе отрисовки данных
	var spot;

	//Узел отрисовки данных
	var spotNode;

	var l = data.length, i = 0, j;
	while (i < l)
	{
		safeDataItem = new tuna.data.ext.SafeObject(data[i]);

		//Префикс элемента отрисовки
		idPrefix = this.__targetID + "_" + safeDataItem.get(this.__itemBind);
		row = document.getElementById(idPrefix);

		//Если элемент отрисовки нашелся
		if (row != null)
		{
			j = this.__spots.length - 1;
			while (j >= 0)
			{
				spot = this.__spots[j];
				spotNode = document.getElementById(idPrefix + "/" + spot.targetID);
				spotNode.innerHTML = safeDataItem.get(spot.bind);

				j--;
			}
		}
		//Если нет
		else
		{
			//Заменяем данные в рендерере и заменяем идентификаторы
			j = this.__spots.length - 1;
			while (j >= 0)
			{
				spot = this.__spots[j];
				spot.target.innerHTML = safeDataItem.get(spot.bind);
				spot.target.id = idPrefix + "/" + spot.targetID;

				j--;
			}

			//Копируем рендерер
			row = this.__renderer.cloneNode(true);
			row.id = idPrefix;

			//Возвращем идентификаторы в исходном
			j = this.__spots.length - 1;
			while (j >= 0)
			{
				spot = this.__spots[j];
				spot.target.id = spot.targetID;

				j--;
			}

			//Ставим элемент на должное место - в конец :)
			this.__target.appendChild(row);
		}

		i++;
	}
	*/
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.YaList, "YaList");