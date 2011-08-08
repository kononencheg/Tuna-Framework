/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл XSLTransformer.js
//	
//	Реализация класса tuna.transform.XSLTransformer.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.transform.ITransformer");
tuna.include("tuna.net.Request");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.transform");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.transform.XSLTransformer
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс трансформации данных с помощью XSLT преобразования.
 *
 * @implements tuna.transform.ITransformer
 * @constructor
 * @param {String} url URI XML документа трансформации.
 */
pkg.XSLTransformer = function(url)
{
	/**
	 * Объект запроса документа трансформации.
	 *
	 * @type tuna.net.Request
	 */
	var request = new tuna.net.Request(url);

	//Синхронно запрашиваем документ
	request.isSync = true;
	request.send();

	/**
	 * Объект документа трансформации.
	 *
	 * @type Document
	 * @property
	 * @private
	 */
	this.__template = request.getResponseXML();
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Реализация tuna.transform.ITransformer
/////////////////////////////////////////////////////////////////////////////////////////

tuna.implement(pkg.XSLTransformer, tuna.transform.ITransformer);

/**
 * Трансформация данных.
 *
 * @param {Object} data XML документ с данными преодразования.
 * @return {Object} Результат трансформации, в зависимости от браузера возвращает строку
 * HTML (IE) либо DOM узел (Other).
 */
pkg.XSLTransformer.prototype.transform = function(data)
{
	var result = null;

	try
	{
		if (!tuna.IS_IE)
		{
			var processor = new XSLTProcessor();
			processor.importStylesheet(this.__template);

			result = processor.transformToFragment(data, window.document);
		}
		else result = data.transformNode(this.__template);
	}
	catch (error)
	{
		if (!tuna.isDebug()) throw error;
		else tuna.debug.logger.error(error);
	}

	return result;
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.XSLTransformer, "XSLTransformer");