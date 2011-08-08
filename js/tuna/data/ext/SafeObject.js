/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл SafeObject.js
//
//	Реализация класса tuna.data.ext.SafeObject
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.data.ext");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.data.ext.SafeObject
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс безопасного хранения структур данных.
 *
 * @constructor
 * @param {Object} target Объект для обертки, если не задан создается пустой.
 */
pkg.SafeObject = function(target)
{
	/**
	 * Объект с данными.
	 *
	 * @type Object
	 */
	this.data = target == null ? {} : target;
};

/**
 * Установка значения по заданному пути.
 *
 * @param {Object} path Массив или строка пути в объекте данных.
 * @param {Object} value Устанавливаемое занчение.
 */
pkg.SafeObject.prototype.set = function(path, value)
{
	tuna.checkArgs(arguments, ["Object", "Object"]);

	//Если путь задан массивом
	if(tuna.isInstanceOf(path, "Array"))
	{
		var scope = this, key;

		//Пробегаем по пути и создаем объект
		var l = path.length, i = 0;
		while (i < l)
		{
			key = path[i++];

			if (scope[key] == null)
				scope[key] = {};

			if (i == l) scope[key] = value;
			else scope = scope[key];
		}
	}
	else this.data[path.toString()] = value;
}

/**
 * Возвращение значения по заданному пути.
 *
 * @param {Object} path Массив или строка пути в объекте данных.
 * @return {Object} Требуеемое значение.
 */
pkg.SafeObject.prototype.get = function(path)
{
	tuna.checkArgs(arguments, ["Object"]);

	var result = null;

	if(tuna.isInstanceOf(path, "Array"))
	{
		var scope = this.data;
		var key;

		var l = path.length, i = 0;
		while (i < l)
		{
			key = path[i++];

			if (scope == null)
				break;

			if (i == l) result = scope[key];
			else scope = scope[key];
		}
	}
	else result = this.data[path.toString()]

	return result;
}

/**
 * Уделение объекта по пути
 *
 * @param {Object} path Массив или строка пути в объекте данных.
 */
pkg.SafeObject.prototype.unset = function(path)
{
	tuna.checkNotNull(path, 'path');

	if(tuna.isArray(path))
	{
		var scope = this, key;

		var l = path.length, i = 0;
		while (i < l)
		{
			key = path[i++];

			if (i == l) delete scope[key];
			else scope = scope[key];

			if (scope == null)
				break;
		}
	}
	else delete this.data[path.toString()]
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.SafeObject, "SafeObject");