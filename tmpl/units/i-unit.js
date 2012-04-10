


/**
 * Интерфейс классов элемента шаблонизатора.
 *
 * @interface
 */
tuna.tmpl.units.IUnit = function() {};


/**
 * Обработка данных элементом шаблонизатора.
 *
 * Данные передаются в виде экземпляра узла дерева данных.
 *
 * @param {!tuna.tmpl.data.DataNode} dataNode Узел дерева данных.
 */
tuna.tmpl.units.IUnit.prototype.applyData = function(dataNode) {};


/**
 * Уничтожение функционала элемента шаблонизатора.
 */
tuna.tmpl.units.IUnit.prototype.destroy = function() {};
