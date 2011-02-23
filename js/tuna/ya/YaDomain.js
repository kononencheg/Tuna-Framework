/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
//	Файл YaDomain.js
//
//	Реализация класса tuna.ya.YaDomain.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.ext.SafeObject");
tuna.include("tuna.ya.YaList");
tuna.include("tuna.ya.YaSpot");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.ya");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.ya.YaDomain
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс области динамической отрисовки.
 *
 * @public
 * @constructor
 * @param {String} id Идентификатор контейнера содержащего домен трансформации.
 * @param {String} bind Путь в наборе данныхк которому пивязана облать.
 */
pkg.YaDomain = function(id, bind)
{
	tuna.checkArgs(arguments, ["String"]);

	/**
	 * Массив элементов разметки точечных данных данных
	 *
	 * @private
	 * @type {Array.<tuna.ya.YaSpot>}
	 */
	this.__spots = [];

	//Родительский конструктор.
	tuna.ya.YaDomain._super.constructor.call(this, id, bind);

	//Анализирцем разметку.
	this._initMarkup();
};

//Наследуем элементарный элемент оттображения
tuna.extend(pkg.YaDomain, tuna.ya.YaSpot);

/**
 * Анализ и применение разметки
 *
 * @protected
 */
pkg.YaDomain.prototype._initMarkup = function()
{
	var i;

	//Ищем динамические элементы
	var spotsNodes = this._target.getElementsByTagName(tuna.IS_IE ? "spot" : "ya:spot");
	i = spotsNodes.length - 1;
	while (i >= 0)
	{
		this.addSpot
		(
			new tuna.ya.YaSpot
			(
				spotsNodes[i].getAttribute("ya:target"),
				spotsNodes[i].getAttribute("ya:bind")
			)
		);

		i--;
	}

	//Ищем динамические списки
	var listNodes = this._target.getElementsByTagName(tuna.IS_IE ? "list" : "ya:list");
	i = listNodes.length - 1;
	while (i >= 0)
	{
		this.addSpot
		(
			new tuna.ya.YaList(
				listNodes[i].getAttribute("ya:target"),
				listNodes[i].getAttribute("ya:bind"),
				listNodes[i].getAttribute("ya:renderer"),
				listNodes[i].getAttribute("ya:key")
			)
		);

		i--;
	}
};

/**
 * Добавдение динамически обновляемого элемента разметки
 *
 * @public
 * @param {tuna.ya.YaSpot} spot Элемент динамического принятия данных
 */
pkg.YaDomain.prototype.addSpot = function(spot)
{
	this.__spots.push(spot);
};

/**
 * Отрисовка данных.
 * 
 * Отправка данных динамически перерисовываемым элементам.
 *
 * @public
 * @override
 * @param {Object} data Данные требуемой области видимости данных.
 */
pkg.YaDomain.prototype.renderData = function(data)
{
	var safeData = new tuna.data.ext.SafeObject(data);

	//Обновляем изменившиеся данные
	var spot;
	var i = this.__spots.length - 1;
	while (i >= 0)
	{
		spot = this.__spots[i];
		spot.renderData(safeData.get(spot.bind));

		i--;
	}
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.YaDomain, "YaDomain");
