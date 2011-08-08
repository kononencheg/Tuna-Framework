/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл ParamSaver.js
//
//	Реализация класса tuna.data.ext.ParamSaver
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
//	Класс tuna.data.ext.ParamSaver
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс резервного копирования и восстановления свойств объекта.
 *
 * @constructor
 */
pkg.ParamSaver = function()
{
	/**
	 * Таблица идентификатор - набор свойств объекта
	 *
	 * @type Object
	 */
	this.__idHash = {};
};

/**
 * Сохранение параметров объекта
 *
 * @param {Object} target Объект свойства которого необходимо сохранить
 * @param {String} id Идентификатор объекта для восстановления.
 * @param {Array.<String>} params Массив имен свойств, значения которых необходимо
 * восстановить.
 */
pkg.ParamSaver.prototype.saveParams = function(target, id, params)
{
	tuna.checkNotNull(target, 'target');

	var propHash = {};

	var i = params.length - 1;
	while (i >= 0)
	{
		propHash[params[i]] = target[params[i]];
		
		i--;
	}
	
	this.__idHash[id] = propHash;
}

/**
 * Восстановление параметров объекта
 *
 * @param {Object} target Объект свойства которого необходимо восстановить.
 * @param {String} id Идентификатор объекта для восстановления.
 */
pkg.ParamSaver.prototype.loadParams = function(target, id)
{
	var propHash = this.__idHash[id];

	for (var key in propHash)
		target[key] = propHash[key];
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.ParamSaver, "ParamSaver");