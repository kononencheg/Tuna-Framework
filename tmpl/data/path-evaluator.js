


/**
 * Класс объекта взятия данных по выбранному пути.
 *
 * @constructor
 */
tuna.tmpl.data.PathEvaluator = function() {

    /**
     * @private
     * @type {Array.<string>}
     */
    this.__parsedPath = null;
};


/**
 * Установление пути к данным.
 *
 * @param {string} path Путь к данным.
 */
tuna.tmpl.data.PathEvaluator.prototype.setPath = function(path) {
    this.__parsedPath = path.split('/');
};


/**
 * Выборка данных из узла по установленному пути.
 *
 * @param {!tuna.tmpl.data.DataNode} dataNode Узел данных для выборки.
 * @return {!tuna.tmpl.data.DataNode} Узел-результат выборки.
 */
tuna.tmpl.data.PathEvaluator.prototype.evaluate = function(dataNode) {
    if (this.__parsedPath !== null) {
        return this.__applyNextToken(this.__parsedPath, dataNode, 0);
    }

    return tuna.tmpl.data.NULL_NODE;
};


/**
 * Функция рекурсивной выборки данных.
 *
 * @param {!Array.<string>} path Оставшийся путь выборки.
 * @param {!tuna.tmpl.data.DataNode} dataNode Узел для выборки.
 * @param {number} index Индекс элемента пути.
 * @return {!tuna.tmpl.data.DataNode} Ррезультат выборки.
 */
tuna.tmpl.data.PathEvaluator.prototype.__applyNextToken =
    function(path, dataNode, index) {

    var token = path[index];
    if (token !== undefined && dataNode !== tuna.tmpl.data.NULL_NODE) {
        return this.__applyNextToken(
            path, this.__applyToken(token, dataNode), ++index
        );
    }

    return dataNode;
};


/**
 * Применение элемента ключа пути к узлу данных.
 *
 * @param {string} token Ключ пути.
 * @param {!tuna.tmpl.data.DataNode} dataNode Узел данных.
 * @return {!tuna.tmpl.data.DataNode} Результат применения.
 */
tuna.tmpl.data.PathEvaluator.prototype.__applyToken =
    function(token, dataNode) {

    switch (token) {
        case '': return dataNode.getRoot();
        case '.': return dataNode;
        case '..': return dataNode.getParent();

        case '$key': return dataNode.getKey();
    }

    return dataNode.growChild(token);
};
