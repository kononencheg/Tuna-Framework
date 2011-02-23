/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK
//	
//	Файл DataDistributor.js
//
//	Реализация класса tuna.data.DataDistributor и tuna.data.__ProcessorNode
//	
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.data.DataStorage");
tuna.include("tuna.data.IDataComposer");
tuna.include("tuna.data.IDataProcessor");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tuna.data");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.data.DataDistributor
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс распределения данных между обработчиками данных.
 *
 * @constructor
 */
pkg.DataDistributor = function()
{
	/**
	 * Корень дерева зависимостей обработчиков данных.
	 *
	 * @type tuna.data.__ProcessorNode
	 */
	this.__root	= new tuna.data.__ProcessorNode();
	this.__root.state = tuna.data.__ProcessorNode.NOTHING;

	/**
	 * Индексированный набор ссылок на узлы.
	 *
	 * @type Array
	 */
	this.__nodeHash = [];

	/**
	 * Компоновщик данных.
	 *
	 * @type tuna.data.IDataComposer
	 */
	this.__composer = null;
}

/**
 * Регистрация обработчика данных.
 *
 * @param {tuna.data.IDataProcessor} processor Сслыка на обработчик данных.
 * @param {Number} parentIndex Индекс родительского обработчика.
 * @return {Number} Индекс созданого узла данных.
 */
pkg.DataDistributor.prototype.registerDataProcessor = function(processor, parentIndex)
{
	tuna.checkType
	(
		processor, tuna.data.IDataProcessor,
		"processor", "tuna.data.IDataProcessor"
	);

	//Родительский узел
	var parentNode = this.__nodeHash[parentIndex];

	//Если родительский узел не задан - берем корневой узел, если задан ищем.
	if (parentNode == null) parentNode = this.__root;

	//Создаем новый узел.
	var node = new tuna.data.__ProcessorNode(processor, parentNode);

	//Добавляем его к родительскому.
	parentNode.appendNode(node);

	//Обрабатываем состояние узла.
	this.__updateStates(null, node);

	//Обрабатываем данные узла.
	this.__processData(null, node);

	//Добавляем в таблицу соответствия.
	this.__nodeHash.push(node);

	//Возвращаам индекс.
	return this.__nodeHash.length - 1;
}

/**
 * Отмена решистрации обработчика данных.
 *
 * @param {Number} processorIndex Индек удаляемого узла данных.
 */
pkg.DataDistributor.prototype.terminateDataProcessor = function(processorIndex)
{
	//Ищем узел со ссылкой на удаляемый разарботчик.
	var node = this.__nodeHash[processorIndex];

	//Если узел не очищен
	if (node.state != tuna.data.__ProcessorNode.CLEAR)
	{
		//Устанавливаем ему состояние очищения
		node.state = tuna.data.__ProcessorNode.CLEAR;

		//А всем дочерние обновляем с новым состоянием
		var i = node.children.length - 1;
		while (i >= 0)
		{
			//Обрабатываем состояние узла.
			this.__updateStates(null, node.children[i]);

			//Обрабатываем данные узла.
			this.__processData(null, node.children[i]);

			i--;
		}

		//И очищаем
		node.target.clear();
	}

	//А потом удаляем удаляем.
	if (node != null)
		node.parent.removeNode(node);
}

/**
 * Применение набора данных - обновление всех зависсящих обработчиков.
 *
 * @param {Srting} changedDataSet Имя набора данных.
 */
pkg.DataDistributor.prototype.applyData = function(changedDataSet)
{
	//Устанваливаем состояния узлам дерева.
	this.__updateStates(changedDataSet);

	//Пробегаем по узлам дерева и произовдим соответствующие состояниям
	//действия
	this.__processData(changedDataSet);
}

/**
 * Обновление обработчика по индексу.
 *
 * @param {Number} processorIndex Индекс обработчика для обновленияю
 */
pkg.DataDistributor.prototype.updateProcessor = function(processorIndex)
{
	var node = this.__nodeHash[processorIndex];
	
	//Обрабатываем состояние узла.
	this.__updateStates(null, node);

	//Обрабатываем данные узла.
	this.__processData(null, node);
}

/**
 * Рекурсивнафя установка состояний узлов.
 *
 * @param {String} changedDataSet Имя набора данных.
 * @param {tuna.data.__ProcessorNode} node Вершина поддерева.
 */
pkg.DataDistributor.prototype.__updateStates = function(changedDataSet, node)
{
	//Итератор
	var i;

	//Если узел задан, обновляем его статус.
	if (node != null)
	{
		//Набор имен наборов данных требуемых обработчику.
		var names = node.target.getDataIndexes();
		node.lastState = node.state;

		//Проверяем на наличие всех наборов данных
		var allDataSetReady = true;
		i = names.length - 1;
		while (i >= 0)
		{
			//Если нет хотя вы одного, то всех точно нет :)
			if (tuna.data.DataStorage.getInstance().load(names[i]) == null)
			{
				allDataSetReady = false;

				break;
			}

			i--;
		}

		//Если обработчик продолжит работать..
		if (allDataSetReady && node.target.test() &&
			node.parent.state != tuna.data.__ProcessorNode.CLEAR)
		{
			//..проверим нужно ли обновлять его данные.

			//Сначала установим флаг о том, что ничего не нужно
			node.state = tuna.data.__ProcessorNode.NOTHING;

			//Если с родителским обработчиком что-то случилость..
			if (node.parent.state != tuna.data.__ProcessorNode.NOTHING)
				//..ставим флаг о восстановлении без обновления.
				node.state = tuna.data.__ProcessorNode.RESTORE;

			//Если этот был очищен, а теперь есть все данные для построения - то обновляем
			if (node.lastState == tuna.data.__ProcessorNode.CLEAR)
				node.state = tuna.data.__ProcessorNode.UPDATE;

			//Проверяем наличие измененного набора в массиве имен наборов узла
			i = names.length - 1;
			while (i >= 0)
			{
				//Если сменился необходимый набор данных..
				if (names[i] == changedDataSet || changedDataSet == null)
				{
					//.. то необходимо обновление обработчика.
					node.state = tuna.data.__ProcessorNode.UPDATE;
					break;
				}

				i--;
			}
		}
		//Если обработчик работать не будет - учтанавливаем стату на его
		//очищение.
		else node.state = tuna.data.__ProcessorNode.CLEAR;

		//Если был очищен и ничего не изменилось
		if (node.state == tuna.data.__ProcessorNode.NOTHING &&
			node.lastState == tuna.data.__ProcessorNode.CLEAR)
			node.state = tuna.data.__ProcessorNode.CLEAR;
	}
	else node = this.__root;

	//Обрабатываем все дочерние узлы
	i = node.children.length - 1;
	while (i >= 0)
	{
		this.__updateStates(changedDataSet, node.children[i]);

		i--;
	}

	if (node.state == tuna.data.__ProcessorNode.RESTORE ||
		(node.state == tuna.data.__ProcessorNode.UPDATE &&
		node.parent.state == tuna.data.__ProcessorNode.UPDATE &&
		node.lastState != tuna.data.__ProcessorNode.CLEAR))
		node.target.backup();
}

/**
 * Рекурсивная обновление обработчиков данных.
 *
 * @param {String} changedDataSet Имя набора данных.
 * @param {tuna.data.__ProcessorNode} node Вершина поддерева.
 */
pkg.DataDistributor.prototype.__processData = function(changedDataSet, node)
{
	//Итератор
	var i;

	//Если узел задан, обновляем его статус.
	if (node != null)
	{
		//Набор имен наборов данных требуемых обработчику.
		var names = node.target.getDataIndexes();

		//Действие зависисмости от состояния узла:
		if (node.state == tuna.data.__ProcessorNode.UPDATE)
		{
			//Данные для обновления
			var data, rawData = [];

			//Собираем массив требуемых данных
			i = names.length - 1;
			while (i >= 0)
			{
				rawData.push(tuna.data.DataStorage.getInstance().load(names[i]));

				i--;
			}

			//Компонуем данные требуемых наборов с помощью компоновщика

			//Если компоновщик не задан и требуется единственный элемент
			if (this.__composer == null && rawData.length == 1)
				//Устанваливаем первый элемент
				data = rawData[0];
			//Есди компоновщика нет а объектов данных несколько - ошибка
			else if (this.__composer == null && rawData.length > 1)
				throw new Error("Не уставнолен компоновщик массива данных.");
			//Если задан
			else data = this.__composer.compose(rawData)

			//Если требуется восстановить - восстанавливаем
			if (node.parent.state == tuna.data.__ProcessorNode.UPDATE &&
				node.lastState != tuna.data.__ProcessorNode.CLEAR)
				node.target.restore();

			//Обновляем узел и переходим к потомкам.
			node.target.update(data);
		}
		//Действие зависисмости от состояния узла:
		else if (node.state == tuna.data.__ProcessorNode.RESTORE)
			node.target.restore();
	}
	else node = this.__root;

	//Обрабатываем все дочерние узлы
	i = node.children.length - 1;
	while (i >= 0)
	{
		this.__processData(changedDataSet, node.children[i]);
		
		i--;
	}

	if (node.state == tuna.data.__ProcessorNode.CLEAR &&
		node.lastState != node.state)
		//Очищаем, так как он уже не будет использоваться
		node.target.clear();
}

/**
 * Установка компоновщика данных.
 *
 * @param {tuna.data.IDataComposer} value Компоновщик.
 */
pkg.DataDistributor.prototype.setDataComposer = function(value)
{
	tuna.checkType(value, tuna.data.IDataComposer, 'value', 'tuna.data.IDataComposer');

	this.__composer = value;
}

///////////////////////////////////////////////////////////////////////////////
//
//	Класс tuna.data.__ProcessorNode
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Класс элемента дерева дерева зависимостей обработчиков занных.
 *
 * @param {tuna.data.IDataProcessor} target Сслыка на обработчик данных.
 * @param {tuna.data.__ProcessorNode} parent Ссылка на родительский узел данных.
 * @constructor
 */
pkg.__ProcessorNode = function(target, parent)
{
	tuna.checkType(target, tuna.data.IDataProcessor, "target", "tuna.data.IDataProcessor");
	tuna.checkType(parent, tuna.data.__ProcessorNode, "parent", "tuna.data.__ProcessorNode");

	/**
	 * Обработчик данных.
	 *
	 * @type tuna.data.IDataProcessor
	 */
	this.target = target;

	/**
	 * Родительский узел данных.
	 *
	 * @type tuna.data.ProcessorNode
	 */
	this.parent = parent;

	/**
	 * Дочерние узлы данных.
	 *
	 * @type Array
	 */
	this.children = [];

	/**
	 * Текущее состояние обработчика даных.
	 *
	 * @type Number
	 */
	this.state = tuna.data.__ProcessorNode.CLEAR;

	/**
	 * Последнее состояние обработчика.
	 *
	 * @type Number
	 */
	this.lastState = tuna.data.__ProcessorNode.CLEAR;
}

/**
 * Состояние обработчика - не может быть отбаботан.
 */
pkg.__ProcessorNode.CLEAR = "clear";

/**
 * Состояние обработчика - не требует ничего-.
 */
pkg.__ProcessorNode.NOTHING = "nothing";

/**
 * Состояние обработчика - требудет обновления.
 */
pkg.__ProcessorNode.UPDATE = "update";

/**
 * Состояние обработчика - требует восстановления в связи с обновлением
 * родителя.
 */
pkg.__ProcessorNode.RESTORE = "restore";

/**
 * Добавление дочернего узла.
 *
 * @param {tuna.data.__ProcessorNode} node Ссылка узел данных.
 */
pkg.__ProcessorNode.prototype.appendNode = function(node)
{
	node.parent = this;

	//Проверяем на наличие в массие дочерних узлов. если находим не возвращаем.
	var i = this.children.length - 1;
	while (i >= 0)
	{
		if (this.children[i] === node)
			return;
		
		i--;
	}

	this.children.push(node);
}

/**
 * Удаление дочернего узла.
 *
 * @param {tuna.data.ProcessorNode} node Ссылка узел данных.
 * @return {tuna.data.ProcessorNode} Удаленный узел.
 */
pkg.__ProcessorNode.prototype.removeNode = function(node)
{
	//Если у удаляемого узла родитель не текущий - возвращаем ничего.
	if (node.parent != this)
		return null;

	//Проверяем на наличие в массие дочерних узлов. если находим не возвращаем.
	var i = this.children.length - 1;
	while (i >= 0)
	{
		if (this.children[i] == node)
			this.children.splice(i, 1);

		i--;
	}

	node.parent = null;

	return node;
}

/**
 * Переменная уникального екземпляра CommandHolder;
 *
 * @type tuna.data.DataDistributor
 * @private
 */
pkg.DataDistributor.__instance = null;

/**
 * Возвращение уникального экземпляра.
 *
 * @return {tuna.data.DataDistributor} уникальный экземпляр.
 */
pkg.DataDistributor.getInstance = function()
{
	if (tuna.data.DataDistributor.__instance == null)
		tuna.data.DataDistributor.__instance = new tuna.data.DataDistributor();

	return tuna.data.DataDistributor.__instance;
}

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.DataDistributor, "DataDistributor");

f = {
    g: 9,
    hh: [0, 'l'],
    ff: 'l'
};