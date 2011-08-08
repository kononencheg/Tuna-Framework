/////////////////////////////////////////////////////////////////////////////////////////
//
//	TUNA FRAMEWORK
//
// 	Файл xml.js
//
// 	Набор утилитарных функций работы с XML документами.
//
// 	Author Kononenko Sergey <kononenheg@gmail.com>
//
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.data.xml");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Статические функции области имен
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Создание XML документа.
 *
 * @param {String|Node} root Имя корневого элемента либо корневой узел.
 */
pkg.createDocument = function(root)
{
	var result = tuna.IS_IE ? new ActiveXObject("Microsoft.XMLDOM") :
		document.implementation.createDocument("", "", null);

	if (typeof root == 'string')
		result.appendChild(result.createElement(root));
	else result.appendChild(root);

	return result;
}

/**
 * Преобразование строки правильной XML разметки в DOM документ.
 *
 * @param {String} xmlString Строка XML разметки.
 * @return {Document} XML документ.
 */
pkg.parseXML = function(xmlString)
{
	var result;

	if (tuna.IS_IE)
	{
		result = new ActiveXObject("Microsoft.XMLDOM");
		result.async = false;
		result.loadXML(xmlString);
	}
	else result = new DOMParser().parseFromString(xmlString, "text/xml");

	return result;
}