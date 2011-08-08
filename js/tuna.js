/**
 * TUNA FRAMEWORK
 * 
 * @file tuna.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Флаг о компиляции текущего файла.
 *
 * @define {boolean}
 */
var COMPILED = !false;

/**
 * Основная область имен.
 *
 * @namespace
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @public 
 * @static
 * @const
 * @type string
 */
tuna.VERSION = '2.2.70';

/**
 * Является ли текущий браузер IE.
 *
 * @public 
 * @static
 * @const
 * @type boolean
 */
tuna.IS_IE = !'\v1';

/**
 * Относителшьное URI сценария компоновки JavaScript файлов.
 *
 * @public 
 * @static
 * @type string
 */
tuna.MERGE_URI = 'tuna.php';

/**
 * Корневая директория импорта JavaScript классов относительно сценария
 * компоновки.
 *
 * @public 
 * @static
 * @type string
 */
tuna.MERGE_ROOT = 'js';

/**
 * Корневая директория импорта JavaScript классов для цепной последовательной
 * загрузки.
 *
 * @public 
 * @static
 * @type string
 */
tuna.JS_ROOT = 'js';

/**
 * Проверка переменной на соответствие типу Array.
 *
 * @public
 * @static
 * @param {Object} object Переменная, тип которой необходимо проверить.
 * @return {boolean} Результат проверки.
 */
tuna.isArray = function(object) {
	return object && typeof object.constructor.prototype === Array.prototype;
};

/**
 * Получение объекта по пути и контексту. Контекстом может являться объект из 
 * которого по указанному пути необходимо извлечь данные.
 * 
 * @param {!Array} path Путь, представляющий собой массив имен вложенных 
 * 		объектов. Элементами пути, могут являться числа. Например, массив
 *		<code>['items', 1, 'value']</code> обозначает, что в текущем контексте
 *		нужно найти массив <tt>items</tt>, в которм нужно вязть второй элемент,
 *		и его свойство <tt>value</tt>.
 * @param {Object=} context Контекст или, по-другому, объект из которого 
 *		нужно извлеч значение. Если не указан - данные беруться из глобальной
 *		области видимости.
 * @return {Object} Значение, если оно существует, null - в обратном случае.
 */
tuna.getByPath = function(path, context) {

	var result = null;
	
	var scope = !context ? window : context;
	
	var next;
	var i = 0, l = path.length;
	while(i < l) {
		next = path[i];
		
		scope = scope[next];
		
		if (!scope) { 
			break; 
		}
		i++;
	}
	
	result = scope;
	
	return result;
};


/**
 * Проверка на соответствие переменной требуемому типу.
 * 
 * <code>
 *  // Типы, на совпадение с которыми можно проверить:
 * 	"Object"
 * 	"Boolean"
 * 	"Number"
 * 	"String"
 * 	"Function"
 * </code>
 * а также все пользовательские типы, у них на соотвествие проверяются лишь 
 * прототипы.
 * 
 * Если тип локален в каком-либо контексте, необходимо указать его.
 *
 * Результатом является истинность соответствия.
 *
 * @public
 * @static
 * @param {!Object} object Переменная, тип которой необходимо проверить.
 * @param {!string} typeName Тип, интерфейст которого должна реализовывать 
 * 		переменная.
 * @param {Object=} typeScope Контекст видимости типа, по-умолчанию глобальная.
 * @return {boolean} Результат проверки.
 * @throws TypeError
 */
tuna.isInstanceOf = function(object, typeName, typeScope) {
	
	var result = true;
	
	//Если переменная не задана то она не совпадает с типом.
	if (object != null) {
		switch (typeName) {
			case 'Object': {
				result = true;
				break;
			}
				
			case 'Number': {
				result = (typeof object === 'number') && !isNaN(object);
				break;
			}
				
			case 'Boolean':
			case 'String':
			case 'Function': {
				result = typeof object === typeName.toLowerCase();
				break;
			}

			case 'Array': {
				result = tuna.isArray(object);
				break;
			}

			default: {
				var Class = tuna.getByPath(typeName.split('.'), typeScope);
				
				if (Class) {
					for (var method in Class.prototype) {
						if (!object[method]) {
							result = false;
							break;
						}
					}
				} else {
					throw new Error('Type ' + typeName + ' not defined!');
				}
			}
		}	
	}
	else if (object === null) {
		result = typeName === 'Object';
	} else {
		result = false;
	}

	return result;
};


/**
 * Объявление реализации интерфейса.
 *
 * Добавление либо замена (уже существующих) методов прототипа класса 
 * 'интерфейса', неоходимое для оповещения о не реализованных методах.
 *
 * При объявлении интерфейса в каждом объявленном методе следует генерировать 
 * ошибку типа <code>InterfaceMethodError</code>.
 *
 * Данную функцию следует вызывать перез вызовом функции 
 * <code>tuna.extend</code>.
 *
 * @public
 * @static
 * @param {!Object} Class Класс который должен реализовать интерфейс.
 * @param {!Object} Interface Класс "интерфейс" для реализации.
 */
tuna.implement = function(Class, Interface) {
	for (var method in Interface.prototype) {
		if (typeof Interface.prototype[method] === 'function') {
			Class.prototype[method] = Interface.prototype[method];
		}
	}
};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на него, 
 * сохраняя конструктор, а также создает глобальное свойчтво дочернего класса 
 * <code>_super</code> содержащее прототип родительского класса.
 * 
 * Свойство <code>_super</code> необходимо для вызова исходных методов и 
 * конструктора родительского класса.
 * 
 * Пример использования:
 * <code>
 * 		Class._super.constructor.call(this, argument);
 * </code>
 *
 * @public
 * @static
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
tuna.extend = function(Class, Parent) {
	var Link = function() {};
	Link.prototype = Parent.prototype;

	Class.prototype = new Link();
	Class.prototype.constructor = Class;
	Class.prototype._super = Parent.prototype;
};

/**
 * Создание сслыки на объект в глобальной области видимости.
 *
 * @public
 * @static
 * @param {!Object} object Объект с полным путем.
 * @param {!string} name Имя переменной в глобальной области видимости.
 */
tuna.typedef = function(object, name) {
	window[name] = object;
};

/**
 * Безопасное объявление области имен.
 *
 * @public
 * @static
 * @param {!string} path Полное имя области имен.
 * @return {Object} Ссылка на область имен.
 */
tuna.namespace = function(path) {

	var pathHash = path.split('.');
	var scope = window, next;

	while(pathHash.length > 0) {
		next = pathHash.shift();

		if (scope[next] == null) {
			scope[next] = {};
		}

		scope = scope[next];
	}

	return scope;
};


/**
 * Функция выполнения строки JavaScript кода в глобальной области имен.
 *
 * Не следует использовать нигде(!) в логике приложенния.
 *
 * @public
 * @static
 * @param {!string} code Строка кода.
 * @return {Object} Результат выполнения.
 * @throws Error
 * @deprecated
 */
tuna.eval = function(code) {
	return (window.execScript != null) ? 
			window.execScript(code) : window.eval(code);
};

/**
 * Синхронная загрузка данных.
 *
 * Загружает и возвращает текстовые данные по указанному адресу.
 * Следует осорожно использовать, так как при задержке ответа сервера, 
 * происходит 'зависание' web-станицы.
 *
 * @private
 * @static
 * @param {!string} url Адрес данных для загрузки.
 * @return {srting} Загруженные данные в текстовом формате.
 * @throws LoadError
 */
tuna.__load = function(url) {

	// Переменная запроса
	// TODO: Использовать более новые версии Mirosoft.XMLHTTP
	var request = (!window.ActiveXObject) ?
		new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	// Синхронно запрашиваем скрипт
	request.open('GET', url, false);
	request.send(null);

	// Если ответ не успешен - ошибка.
	if (request.status != 200 && request.status != 304) {
		throw new Error('Ошибка ' + request.status + ' HTTP запроса ' + url);
	}

	var result = request.responseText;

	// Очищаем переменную запроса
	request.abort();
	request = null;

	return result;
};

/**
 * Извлечение имен загружаемых в сценарий классов.
 *
 * В сценарии проводится поиск и удаление вызова функции
 * <code>tuna.include(className:String):void</code> такого вида:
 * <code>
 *		tuna.include("имя.пакета.ИмяКласса") ;
 * </code>.
 *
 * Поиск проводится в самой верхней области видимости загружаемого сценария, то 
 * есть вызов искомой функции в логике приложения удаляться не будет.
 * Например:
 * <code>
 *		//somefile.js
 *
 *		tuna.include("tuna.package.Class"); //Этот вызов удаляется.
 *		tuna.include("tuna.package.SubClass"); //Этот вызов удаляется тоже.
 *		
 *		function someFunction()
 *		{
 *			if (tuna.IS_IE)
 *				tuna.include("tuna.package.IEClass');		//Этот сохраняется.
 *			else tuna.include("tuna.package.NotIEClass");	//Этот тоже.
 *		}
 *
 *		var includeCall = "tuna.include('tuna.package.SomeClass');" //И этот.
 *		[tuna.include("tuna.package.HiddenIncludeClass")]; //И этот тоже.
 *
 *		//Это способы экранировать вызов загрузки на верхнем уровне.
 *		{ tuna.include("tuna.package.AnotherClass"); } //Этот тоже сохраняется.
 *		( tuna.include("tuna.package.OneMoreClass") ); //И этот.
 *
 *		tuna.include("tuna.package.OneMoreClassAgain"); //А этот удаляется.
 * </code>.
 *
 * Строку нельзя передать по ссылке, поэтому функция возвращает хеш-таблицу, с 
 * измененной строкой и массивом имен загружаемых файлов.
 *
 * @private
 * @static
 * @param {string} script Сценарий из которого требуется извлечь имена 
 * 		загружаемых классов.
 * 
 * @return {{includes: Array.<string>, script: string}} Хеш-таблица с данными 
 * 		результата: Массив имен классов для загрузки и преобразованная строка 
 * 		кода.
 */
tuna.__clearIncludes = function(script) {

	// Строка преобразованного сценария.
	var cleanScript = '';

	// Массив имен загружаемых классов.
	var includes = [];

	// С начала строки ищем вызов функции tuna.include, либо открытие кавычек, 
	// либо открытие скобок.

	//Регулярное выражение поиска
	var needle = /\"|\'|\/{2,}|\/\*|\{|\[|\(|tuna\s*.\s*include\s*\(\s*((\'[\w\.]+\')|(\"[\w\.]+\"))\s*\)/g;

	// Регулярное выражение поиска лишней ';'.
	var semicolonFlag = /\s*\;/;

	// Текущая позиция поиска.
	var position = script.search(needle);
	
	// Позиция с которой начинать следующий поиск.
	var cutPosition = -1;

	// Индексы следующей открывающей и закрывающей скобок
	//var openBracePos, closeBracePos;

	// Разность открытых и закрытых скобок
	var braceDiff;

	// Тип открывающей кавычки
	var quote;

	// Позиция открывающей кавычки
	var quotePos;

	// Имя загружаемого класса.
	var className;

	// Скобка с её парой
	var brace, bracePair;

	// Флаг нахождения в строке
	var stringFlag = null;

	while (position !== -1) {
		// Очищаем тип парной скобки и индекс лишней ';'
		bracePair = null;
		className = null;

		// В зависимости от того что нашлось на позиции, вырезаем исходный 
		// кусок и перемещаем в очищенную строку либо контент в скобках, либо 
		// очищаем от вызова загрузки и извлекаем имя класса для загрузки.
		switch(script[position]) {
		
			// Если это комментарий.
			case '/': {
				
				// Если он однострочный
				if (script[position + 1] === '/') {
					// Ищем символ окончания строки и запихиваем  в очищенную 
					// строку.
					cutPosition = script.indexOf('\n', position);
					
					// Если не нашли окончания строки - то это окончания файла, 
					// и тогда выреаем всю оставшуюся строку. Иначе вырезаем 
					// строку
					cleanScript += cutPosition === -1 ? 
						script : script.substring(0, cutPosition);
					
				} else {
					// Ищем символ "*", и проверяем что за символ за ним, если 
					// "/", то вырезаем весь комментарий
					cutPosition = script.indexOf('/', position + 1);

					// Ищем конец строки, либо окончание комемнтария
					while (cutPosition === -1 || 
						   script[cutPosition - 1] !== '*') {
						cutPosition = script.indexOf('/', cutPosition + 1);
					}

					// Вообще, если мы не нашли символ окнчания многострочного 
					// комментария, то это ошибка, но не важно - это функция 
					// извлечения кода загрузки.
					cleanScript += cutPosition === -1 ? 
						script : script.substring(0, ++cutPosition);
				}
				
				break;
			}

			// Если это скобка
			case '[': { bracePair = ']'; }
			case '(': {
				if (!bracePair) {
					bracePair = ')';
				}
			}
			case '{': {
				
				if (!bracePair) {
					bracePair = '}';
				}

				brace = script[position];

				// Отличие - в одну скобку.
				braceDiff = 1;
				cutPosition = position + 1;

				// Пробегаем все символы, исключая то, что в кавычках.
				while (braceDiff !== 0 || 
					   cutPosition === script[script.length - 1]) {
					// Есди встретили кавычку, то если это первая кавычка..
					if (script[cutPosition] === '\'' || 
						script[cutPosition] === '\"') {
						// И если мы уже в строке, и встерилась не экранируемая 
						// ка
						if (stringFlag === script[cutPosition]) {
							if (script[cutPosition - 1] !== '\\') 
								stringFlag = null;
						}
						// А если еще не встроке, то cтавим флаг
						else if (!stringFlag) {
							stringFlag = script[cutPosition];
						}
					}

					if (!stringFlag) {
						
						if (script[cutPosition] === brace) {
							braceDiff++;
						}

						if (script[cutPosition] === bracePair) {
							braceDiff--;
						}
					}

					cutPosition++;
				}
				
				// Отрезаем блок скобок
				cleanScript += cutPosition === -1 ? 
					script : script.substring(0, cutPosition);
				
				break;
			}

			// Если это кавычка
			case '\'':
			case '"': {
				
				// Ищем следующую таую же не экранированную кавычку
				cutPosition = script.indexOf(script[position], position + 1);
				
				while(script[cutPosition - 1] === '\\' || cutPosition === -1) {
					cutPosition = script.indexOf
						(script[position], cutPosition + 1);
				}

				cleanScript += cutPosition === -1 ? 
					script : script.substring(0, ++cutPosition);
				
				break;
			}

			// Если это вызов загрузки
			case 't': {
				
				// Удаляем его из исходной
				cutPosition = script.indexOf(')', position) + 1;

				// Вырезаем строку между скобок
				className = script.substring(
					script.indexOf('(', position + 1), 
					script.indexOf(')', position)
				);

				// Определяем положение кавычек
				quotePos = className.indexOf('"');
				quote = '\"';
				if (quotePos === -1) {
					quotePos = className.indexOf('\'');
					quote = '\'';
				}

				className = className.substring
					(quotePos + 1, className.indexOf(quote, quotePos + 1));

				includes.push(className);

				//И не включем в новую
				cleanScript += script.substring(0, position);
				
				break;
			}
		}

		if (cutPosition !== -1)	{
			script = script.substr(cutPosition);

			//Если от извлечения остался символ ';' - удаляем его.
			if (className != null && script.search(semicolonFlag) === 0) {
				script = script.substr(script.indexOf(';') + 1);
			}
		} else {
			script = '';
		}

		position = script.search(needle);
	}

	cleanScript += script;

	return {includes: includes, script: cleanScript};
};

/**
 * Функция загрузки кода класса и всх классов от которых он зависит.
 *
 * Загружает и выполняет код одного JavaScript класса.
 * Для загрузки зависимостей JavaScript класса лучше использовать версию 
 * includeMerged, так как цепочка загрузок может оказаться велика, 
 * и последовательная загрузка может затянуться.
 *
 * Важно использовать эту функцию для разметки зависимостей.
 *
 * Не стоит использовать данную функцию в логике приложения.
 *
 * @public
 * @static
 * @param {!string} className Полное имя требуемого класса.
 */
tuna.include = function(className) {

	var nameHash = className.toString().split('.');

	// Проверяем на загруженность класса и если класса нет - загружаем его.
	if (!tuna.__included[className]) {
		var exist = true;
		var script = null;
		
		try { 
			script = tuna.__load
				(tuna.JS_ROOT + '/' + nameHash.join('/') + '.js'); 
		
		} catch(error) { 
			exist = false; 
		}

		if (exist) {
		
			var result = tuna.__clearIncludes(script);

			tuna.__included[className] = true;

			var i = result.includes.length - 1;
			while (i >= 0) {
				tuna.include(result.includes[i]);
				i--;
			}

			tuna.eval(result.script);
		}
	}
};

/**
 * Хеш-таблица флагов загруженных файлов сценариев.
 *
 * Формат хеш-таблицы:
 * <code>
 *		tuna.__included =
 *		{
 *			'ClassName': true,
 *			'AnotherClassName': true
 *			// ...
 *		};
 * </code>
 *
 * @private
 * @static
 * @type {Object.<string, boolean>}
 */
tuna.__included = {};

/**
 * Функция импорта скомпонованного кода.
 *
 * Загружает и выполняет сценарий, состоящий из скомпонованных сценариев 
 * JavaScript классов.
 *
 * Запрос компоновки отправляется по адресу сервиса компоновки
 * <code>tuna.MERGE_URI</code>.
 * Сервису отправляется GET запрос, со следующими данными:
 *		'c' - массив имен классов, которые необходиом скомпоновать.
 *		'r' - путь к корневому каталогу JavaScript классов, относительно 
 *			  положения сценария компоновки.
 *
 * Например:
 * <code>
 *		c[]=путь.пакета.ИмяКласса&
 *		c[]=путь.пакета.ИмяДругогоКласса&
 *		c[]=путь.другого.пакета.ЕщеИмяКласса&
 *		r=js
 * </code>
 *
 * @public
 * @static
 * @param {Array.<string>} classes Набор полных имен классов.
 */
tuna.includeMerged = function(classes) {

	// Набор запроса классов
	var classesRequest = '';

	// Безопасно компонуем
	var i = classes.length - 1;
	while (i >= 0) {
		// Если имя класса существует, и этот класс еще не загружен - загружаем.
		if (classes[i] && classes[i] !== '' && !tuna.__included[classes[i]]) {
			classesRequest += 'c[]=' + classes[i] + '&';
			tuna.__included[classes[i]] = true;
		}

		i--;
	}

	//Запрашиваем сервис компоновки скрипта.
	tuna.eval(tuna.__load(
		tuna.MERGE_URI + '?' + classesRequest + 'r=' + tuna.MERGE_ROOT
	));
};

/**
 * Convert array-like object to array.
 * 
 * @param {Object} list Array-like object.
 * @return {Array} Converted array.
 */
tuna.toArray = function(list) {
	return Array.prototype.slice.call(list);
};
