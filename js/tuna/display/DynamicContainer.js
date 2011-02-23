/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл Container.js
//
//	Реализация класса tuna.display.DynamicContainer
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.DataDistributor");
tuna.include("tuna.data.IDataProcessor");

tuna.include("tuna.dom");

tuna.include("tuna.display.Container");
tuna.include("tuna.display.IViewHandler");
tuna.include("tuna.display.ICondition");
tuna.include("tuna.display.IPositionMarker");

tuna.include("tuna.event.BasicEvent");

tuna.include("tuna.transform.ITransformer");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.display");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.display.DynamicContainer
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс контейнера с динамическим содержимым
 * 
 * @extends tuna.display.Container
 * @implements tuna.data.IDataProcessor
 * @constructor
 * @param {String} id Идентификатор контейнера.
 * @param {Array.<String>} dataIndexes Набор данных, от которых зависит контейнер.
 */
pkg.DynamicContainer = function(id, dataIndexes)
{
	/**
	 * Идентификатор контейнера.
	 *
	 * @type String
	 */
	this._targetID = id;

	/**
	 * Узел контенера.
	 *
	 * Доступен после обновления контента. Необходим для воостановления.
	 *
	 * @type Element
	 */
	this.__targetNode = null;

	/**
	 * Контроллер управляющий отображением
	 *
	 * @type tuna.display.IViewHandler
	 */
	this._controller = null;

	/**
	 * Флаг состояния запущенности.
	 *
	 * @type Boolean
	 */
	this._isInit = false;

	/**
	 * Массив имен набров данных от которых зависит даный контейнер.
	 *
	 * @type Array
	 */
	this.__dataIndexes = dataIndexes;

	/**
	 * Преобразователь входных даных в отображаемый контент.
	 *
	 * @type tuna.transform.ITransformer
	 */
	this.__transformer = null;

	/**
	 * Класс проверки условия.
	 *
	 * @type tuna.display.ICondition
	 */
	this.__condition = null;

	/**
	 * Индекс данного обработчика в дереве распределения данных
	 *
	 * @type Number
	 */
	this.__handlerIndex = -1;

	/**
	 * Индекс родительского обработчика в дереве распределения данных
	 *
	 * @type Number
	 */
	this.__parentIndex = -1;

	/**
	 * Контейнер с  резервной копией первыого слоя дочерних контенйеров.
	 *
	 * @type Element
	 */
	this.__backupContent = null;

	/**
	 * Маркер элементов, позици которых необходимо сохранить.
	 *
	 * @type tuna.display.IPositionMarker
	 */
	this.__positionMarker = null;

	/**
	 * Набор маркеров-идентификаторов для восстановления
	 *
	 * @type Array
	 */
	this.__markers = [];
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.display.Container
/////////////////////////////////////////////////////////////////////////////////////////

tuna.extend(pkg.DynamicContainer, tuna.display.Container);

/**
 * Инициализация контейнера.
 *
 * @override
 */
pkg.DynamicContainer.prototype.init = function()
{
	//Регистрируя текущий контейнер-обработчик
	this.__handlerIndex = tuna.data.DataDistributor.getInstance()
		.registerDataHandler(this, this.__parentIndex);

	this._isInit = true;
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Реализация tuna.data.IDataHandler
/////////////////////////////////////////////////////////////////////////////////////////

tuna.implement(pkg.DynamicContainer, tuna.data.IDataProcessor);

/**
 * Обработка обновленных данных.
 *
 * @param {Object} data Данные требуемые данному обработчику.
 */
pkg.DynamicContainer.prototype.update = function(data)
{
	//Проверяем на наличие преобразователя, если его нет - ошибка
	if (this.__transformer == null)
		alert("Преобразователь данных динамического контейнера не установлен: " + 905);

	//Обновляем ссылку на контейнер.
	this.__targetNode = document.getElementById(this._targetID);

	//Если установлен маркер позиции то необходимо попытаться сохранить позиции.
	var fixPosition = this.__positionMarker != null;

	//Проверяем на наличие контейнера на странице, если его нет - ошибка
	if (this.__targetNode == null)
		alert("Элемент \"" + this._targetID + "\" отсутствует на странице: " + 707);

	//Если поциии требуется зафиксировать
	if (fixPosition)
	{
		//Генерируем 3 массива идентификаторов:
		// - новых элементов
		// - перемещенных элементов
		// - присутствующих элементов

		//Сначала сохраняем занового сгенерированый массив в массив новых
		//(пришедших извне) элементов. В нем останутся те, для которых не нужно
		//сохранять позиции.
		var newMarkers = this.__positionMarker.getMarkerNodes(this._targetID);

		//Объявляем массивы перемещенных элементов и элементов находящихся в
		//своем контейнере
		var movedMarkers = [];
		var commonMarkers = [];

		//Таблицы данные о положении узлов
		var commonNodesHash = {};
		var movedNodesHash = {};
		var newNodesHash = {};

		//Идентификатор текущего узла
		var id;
		
		//Переменные целевого узла и его родителя
		var node, parent;

		//Массив индексов положений не идентифицируемых родительских элементов.
		var parentIndexHash;

		//Итераторы
		var i, j;

		//Флаг об отсутствии
		var isCommon;

		//Анализируем узлы
		i = this.__markers.length - 1;
		while (i >= 0)
		{
			//По умолчанию - отсутствует
			isCommon = false;

			//Если он есть среди новывх - то он оставшийся, если его там
			//нет - то он отсутствующий.
			j = newMarkers.length - 1;
			while (j >= 0)
			{
				if (this.__markers[i] == newMarkers[j])
				{
					isCommon = true;
					break;
				}

				j--;
			}

			//Если узел нашелся - то добаляем к "родным" узлам
			if (isCommon)
			{
				//Сохраняем идентификатор
				id = newMarkers[j];
				commonMarkers.push(id);
				
				//Это не новый, поэтому из новых удаляем
				newMarkers.splice(j, 1);

				//Запоминаем место узла
				node = document.getElementById(id);

				//И его родителя
				parent = node.parentNode;

				//Точнее первого родителя с идентификатором
				parentIndexHash = [];
				while (parent && parent.id == "")
				{
					parentIndexHash.push(tuna.dom.getChildIndex(parent));

					parent = parent.parentNode;
				}

				//Сохраняем данные узла
				commonNodesHash[id] =
				{
					//Идентификатор родительского элемента (на случай обновления)
					parent_id: parent.id,

					//Позиция узла для восстановления
					index: tuna.dom.getChildIndex(node),

					//Путь извне к родительскому элементу с индексами положения
					index_hash: parentIndexHash
				};
			}
			//Если внутри не нашелся, ногде-то есть отправляем к перемещенным
			//узлам.
			else if (document.getElementById(this.__markers[i]) != null)
			{
				//Сохраняем идентификатор перемещенного элемента
				id = this.__markers[i];
				movedMarkers.push(id);

				//Находим узел
				node = document.getElementById(id);

				//Сохраняем данные перемещенного узла, ссылку на родительский
				//узел, так как останется на странице после обновления
				movedNodesHash[id] = { parent: node.parentNode };
			}
			//Нигде не нашелся - и фиг с ним :)
			//TODO: Генерировать ошибку, а вообще подумать об ошибке.

			i--;
		}

		//Обрабатываем оставшиеся - появившиеся "чужие" узлы
		i = newMarkers.length - 1;
		while (i >= 0)
		{
			//Находим появившийся элемент.
			id = newMarkers[i];
			node = document.getElementById(id);

			//И его родителя
			parent = node.parentNode;

			//Определяем идентификатор родительского узла, если идентификатор
			//не установлен, ищем его выше, запоминая положение текущего
			//родительского узла.
			parentIndexHash = [];
			while (parent && parent.id == "")
			{
				parentIndexHash.push(tuna.dom.getChildIndex(parent));
				
				parent = parent.parentNode;
			}

			//Сохраняем требуемые данные нового узла
			newNodesHash[id] =
			{
				//Его положение в родительском
				index: tuna.dom.getChildIndex(node),

				//Сам узел (не убираем со страницы для сохраннеия структуры)
				node: node,

				//Идентификатор родительского элемента (на случай обновления)
				parent_id: parent.id,

				//Путь извне к родительскому элементу с индексами положения
				index_hash: parentIndexHash
			};

			i--;
		}

		//А вот теперь убираем все "чужие".
		i = newMarkers.length - 1;
		while (i >= 0)
		{
			node = document.getElementById(newMarkers[i]);
			node.parentNode.removeChild(node);

			i--;
		}
	}

	//Если установлен контроллер отображения, останваливаем его работу
	if (this._controller != null)
		this._controller.stop();

	//Помечаем перемещенные узла как старые, чтобы все иденотификаторы были
	//уникальны.
	if (fixPosition)
	{
		i = movedMarkers.length - 1;
		while (i >= 0)
		{
			node = document.getElementById(movedMarkers[i]);

			//Помечаем как устаревший, изменяя индекс.
			node.id = movedMarkers[i] + "_old";

			i--;
		}
	}

	//Преобразовываем данные
	var content = this.__transformer.transform(data);

	//Данные отображенные в HTML контейнере могут быть двух типов:
	// - строка HTML разметки;
	// - DOM узел.

	//Если данные не существуют - ошибка
	if (content == null)
		alert("Ошибка преобразования данных: " + 706);

	//Проверяем тип данных:
	// - если элемнт это DOM узел - очищаем контейнер и добавляем новый узел;
	if (content.nodeType != null)
	{
		this.__targetNode.innerHTML = "";
		this.__targetNode.appendChild(content);
	}
	// - если строка - устанавдиваем innerHTML;
	else if (typeof content == "string") this.__targetNode.innerHTML = content;
	// - если еще что-то - ошибка.
	else alert("Результат преобразования неизвестного типа: " + 706);
	
	//Опять же если установлен контроллер отображения - перезапускаем его.
	if (this._controller != null)
		this._controller.run();

	//Если установлен маркер позиции
	if (fixPosition)
	{
		//Генерируем новые маркеры элементов для восстановления
		this.__markers = this.__positionMarker.getMarkerNodes(this._targetID);

		//Данные нового элемента
		var nodeData;

		//Следующий узел.
		var nextSibling;

		//Восстанавливаем положение "родных" элементов (в обратном порядке)
		i = commonMarkers.length - 1;
		while (i >= 0)
		{
			//Берем данные для восстановления
			nodeData = commonNodesHash[commonMarkers[i]];

			//Находим узел по маркеру маркеру
			node = document.getElementById(commonMarkers[i]);

			//Находим родителя
			parent = document.getElementById(nodeData.parent_id);
			while (nodeData.index_hash.length > 0)
				parent = tuna.dom.getChildAt(parent, nodeData.index_hash.pop());

			//Если узел не появился в обновленном контейнере, то и
			//восстанавливать не стоит
			if (node != null)
				//Ставим просто так, в следующем цикле поставим на место
				//if (node.parentNode != parent)
					parent.appendChild(node);
			//В этом случае удаляем данные
			else
			{
				delete commonNodesHash[commonMarkers[i]];
				commonMarkers[i] = null;
			}

			i--;
		}

		//Восстанавливаем пришедшие извне элементы (тоже в обратном порядке)
		i = newMarkers.length - 1;
		while (i >= 0)
		{
			//Берем данные
			nodeData = newNodesHash[newMarkers[i]];

			//Ищем родителя
			//TODO: Устанавлибать ссылку на <body /> если идентификатора нет
			parent = document.getElementById(nodeData.parent_id);
			while (nodeData.index_hash.length > 0)
				parent = tuna.dom.getChildAt(parent, nodeData.index_hash.pop());

			//Ставим на любое место
			parent.appendChild(nodeData.node);

			i--;
		}

		//А перемещенные узла ставим на место где стояли
		//Восстанавливаем пришедшие извне элементы (тоже в обратном порядке)
		i = movedMarkers.length - 1;
		while (i >= 0)
		{
			//Находим данные
			nodeData = movedNodesHash[movedMarkers[i]];

			//И ставим на предыдущее место, заменяя страый
			//TODO: Проверять на доступность - может остуствовать.
			nodeData.parent.replaceChild
			(
				document.getElementById(movedMarkers[i]),
				document.getElementById(movedMarkers[i] + "_old")
			);

			i--;
		}

		//Объединяем массив идентификаторов "родных" и новых с метками о типе, и сортируем по индексу.
		var mergedMarkers = commonMarkers.concat(newMarkers);
		//Массив отсортированных данных
		var sortedData = [];
		var isNew;

		i = mergedMarkers.length - 1;
		while (i >= 0)
		{
			isNew = false;

			//берем элемент данных из одной из таблиц
			id = mergedMarkers[i];
			
			if (id != null)
			{
				nodeData = commonNodesHash[id];

				//Если не удалось - берем из другой
				if (nodeData == null)
				{
					nodeData = newNodesHash[id];
					isNew = true;
				}

				//Если опять еще не удалось - ошибко
				if (nodeData == null)
					throw new Error("Неизвестный идентификатор");

				sortedData.push({id: id, index: nodeData.index, isNew: isNew});
			}
			
			i--;
		}

		//Сортируем
		var compare = function(a, b) { return a.index - b.index; };
		sortedData = sortedData.sort(compare);
		compare = null;

		//Теперь расставляем на свои места
		i = 0;
		while (i < sortedData.length)
		{
			id = sortedData[i].id;

			if (sortedData[i].isNew)
			{
				//Берем данные
				nodeData = newNodesHash[id];

				//Родитель - текущий
				nextSibling = tuna.dom.getChildAt(node.parentNode, nodeData.index);

				node.parentNode.insertBefore(nodeData.node, nextSibling);

				//Удаляем элемент данных
				delete newNodesHash[id];
			}
			else
			{
				//Берем данные для восстановления положения
				nodeData = commonNodesHash[id];

				//Находим узел по маркеру маркеру
				node = document.getElementById(id);

				//Родитель - текущий
				nextSibling = tuna.dom.getChildAt(node.parentNode, nodeData.index);

				node.parentNode.insertBefore(node, nextSibling);

				//Удаляем элемент данных
				delete commonNodesHash[id];
			}

			i++;
		}
	}
};

/**
 * Создание резервной копии.
 */
pkg.DynamicContainer.prototype.backup = function()
{
	//Проверяем на наличие  корневого контейнера на странице
	if (this.__targetNode == null)
		throw new Error("Восстановление не активного обработчика данных");

	//Если установлен маркер сохранения позиций
	if (this.__positionMarker != null)
	{
		//Массив для восстановления перемещенны узлов
		this.__backupMovedNodes = [];

		//Сначала берем занового сгенерированый массив маркеров
		var tempMarkers = this.__positionMarker.getMarkerNodes(this._targetID);
		var node, parent, parentIndexHash;

		//Анализируем узлы
		var i = this.__markers.length - 1, j, isCommon;
		while (i >= 0)
		{
			//По умолчанию - отсутствует
			isCommon = false;

			//Если он есть среди новывх - то он оставшийся, если его там
			//нет - то он отсутствующий.
			j = tempMarkers.length - 1;
			while (j >= 0)
			{
				if (this.__markers[i] == tempMarkers[j])
				{
					isCommon = true;

					break;
				}

				j--;
			}

			//Если узел не нашелся среди отмеченных, но нашелся на странице - то это то,
			//что нам нужно
			if (!isCommon && document.getElementById(this.__markers[i]))
			{
				//Так как после всякой перестрокий на странице ссылки на соседние и
				//родительские узлы для данного узла могут утерятся, поэтому ищем
				//относительные координаты.
				
				//Узел
				node = document.getElementById(this.__markers[i]);

				//Его текущий родитель
				parent = node.parentNode;

				//И путь к первому с идентификатором
				parentIndexHash = [];
				while (parent && parent.id == "")
				{
					parentIndexHash.push(tuna.dom.getChildIndex(parent));

					parent = parent.parentNode;
				}

				//И сохраняем данные
				this.__backupMovedNodes.push
				({
					//Его положение в родительском
					index: tuna.dom.getChildIndex(node),

					//Сам узел (не убираем со страницы для сохраннеия структуры)
					node: node,

					//Идентификатор родительского элемента (на случай обновления)
					parent_id: parent.id,

					//Путь извне к родительскому элементу с индексами положения
					index_hash: parentIndexHash
				});

				//Временно возвращем узел в "родной" контейнер.
				this.__targetNode.appendChild(node);
			}

			i--;
		}
	}

	//Теперь, когда все узлы в исходном контейнере извлекаем из контерйнера его дочерние
	//объекты и помещаем их в резервынй массив
	this.__backupContent = document.createElement("DIV");
	this.__backupContent.style.display = 'none';
	document.body.appendChild(this.__backupContent);

	var child = this.__targetNode.firstChild;
	while (child)
	{
		this.__backupContent.appendChild(child);

		child = this.__targetNode.firstChild;
	}
	child = null;
};

/**
 * Восстановление очищенного обработчика данных.
 */
pkg.DynamicContainer.prototype.restore = function()
{
	//Проверяем на наличие  корневого контейнера на странице
	if (this.__targetNode == null)
		throw new Error("Восстановление не активного обработчика данных.");

	//Ссылка на новый контейнер
	this.__targetNode = document.getElementById(this._targetID);

	//Проверяем на наличие контейнера на странице, если его нет - ошибка
	if (this.__targetNode == null)
		throw new Error("Элемент \"" + this._targetID + "\" отсутствует на странице.");

	this.__targetNode.innerHTML = "";

	//Пока что-то есть для восстановления - восстанавливаем
	var child = this.__backupContent.firstChild;
	while (child)
	{
		this.__targetNode.appendChild(child);

		child = this.__backupContent.firstChild;
	}

	document.body.removeChild(this.__backupContent);

	this.__backupContent = null;

	//Когда все восстановили на места, и если требуется восстановить перемещенные
	//элементы
	//Если установлен маркер сохранения позиций
	if (this.__positionMarker != null)
	{
		//Берем набор данных перемещенных узлов, сортируем по индексу и ставим на место
		//Если его нет - ошибка, хотя бы пустой но он должен быть
		if (this.__backupMovedNodes == null)
			throw new Error("Ошибка восстановления перемещенных узлов.");

		//Сортируем
		var compare = function(a, b) { return a.index - b.index; };
		this.__backupMovedNodes = this.__backupMovedNodes.sort(compare);
		compare = null;

		var parent, nextSibling, nodeData;

		//Восстанавливаем на места
		while (this.__backupMovedNodes.length > 0)
		{
			nodeData = this.__backupMovedNodes.shift();

			//Находим родителя
			parent = document.getElementById(nodeData.parent_id);
			while (nodeData.index_hash.length > 0)
				parent = tuna.dom.getChildAt(parent, nodeData.index_hash.pop());

			//Если не нашелся контейнер для возвращения
			if (parent == null)
			{
				//TODO: Подумать, что делать с восстановлением в никуда.
				//Удаляем контейнер со траницы
				nodeData.node.style.display = 'none';

				continue;
			}

			//Последующий элемент
			nextSibling = tuna.dom.getChildAt(parent, nodeData.index);

			parent.insertBefore(nodeData.node, nextSibling);
		}
	}
	//Если восстановить не требуется, а узлы для восстановления есть - ошибка
	else if (this.__backupMovedNodes != null)
		throw new Error("Ошибка восстановления перемещенных узлов: " + 913);
};

/**
 * Очищение обработчика данных.
 */
pkg.DynamicContainer.prototype.clear = function()
{
	//Если установлен контроллер отображения, останваливаем его работу
	if (this._controller != null)
		this._controller.stop();
	
	//Удаляем ссылку на целевой контейнер.
	this.__targetNode = null;
};

/**
 * Проверка условия работы обработчика данных.
 *
 * @return {Boolean} Значение выполнимости условия.
 */
pkg.DynamicContainer.prototype.test = function()
{
	return this.__condition == null || this.__condition.test();
};

/**
 * Возвращение набора имен наборов данных, от которых зависит данный контенер.
 *
 * @return {Array} Массив имен наборов данных.
 */
pkg.DynamicContainer.prototype.getDataIndexes = function()
{
	return this.__dataIndexes;
};

/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Возвращение индекса зарегистрированного обработчика.
 *
 * @return {Number} Индекс обработчика.
 */
pkg.DynamicContainer.prototype.getHandlerIndex = function()
{
	if (this.__handlerIndex == -1)
		alert("Обработчик не зарегистрирован: " + 908);

	return this.__handlerIndex;
};

/**
 * Установка индекса родительского обработчика.
 *
 * @param {Number} value Значение индекса родительского обработчика.
 */
pkg.DynamicContainer.prototype.setParentHandlerIndex = function(value)
{
	if (value == -1)
		throw new Error("Родительский обработчик не зарегистрирован.");

	this.__parentIndex = value;

	if (this._isInit)
	{
		this.__handlerIndex = DataDistributor.getInstance()
			.terminateDataHandler(this.__handlerIndex);

		this.__handlerIndex = DataDistributor.getInstance()
			.registerDataHandler(this, this.__parentIndex);
	}
};

/**
 * Установка преобразователя данных.
 *
 * @param {tuna.transform.ITransformer} value Объект преобразователя.
 */
pkg.DynamicContainer.prototype.setTransformer = function(value)
{
	tuna.checkType
	(
		value, tuna.transform.ITransformer,
		"value", "tuna.transform.ITransformer"
	);

	this.__transformer = value;
};

/**
 * Установка условия работы.
 *
 * @param {tuna.data.ICondition} value Объект условия.
 */
pkg.DynamicContainer.prototype.setCondition = function(value)
{
	tuna.checkType
	(
		value, tuna.display.ICondition,
		"value", "tuna.display.ICondition"
	);

	this.__condition = value;
};

/**
 * Установка маркера восстановления.
 *
 * @param {tuna.display.IPositionMarker} value Объект маркера
 * восстановления.
 */
pkg.DynamicContainer.prototype.setPositionMarker = function(value)
{
	tuna.checkType
	(
		value, tuna.display.IPositionMarker,
		"value", "tuna.display.IPositionMarker"
	);

	this.__positionMarker = value;
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.DynamicContainer, "DynamicContainer");