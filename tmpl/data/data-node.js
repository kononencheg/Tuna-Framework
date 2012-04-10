


/**
 * Узел парсинга объекта данных передаваемого шаблону.
 *
 * @constructor
 * @param {!*} value Данные узла.
 * @param {!tuna.tmpl.data.DataNode=} opt_parent Родительский узел данных.
 * @param {string=} opt_key Ключ узла данных в родительском.
 */
tuna.tmpl.data.DataNode = function(value, opt_parent, opt_key) {
    /**
     * @private
     * @type {!*}
     */
    this.__value = value;

    /**
     * @private
     * @type {!tuna.tmpl.data.DataNode}
     */
    this.__parent = opt_parent || tuna.tmpl.data.NULL_NODE;

    /**
     * @private
     * @type {?string}
     */
    this.__key = opt_key || null;

    /**
     * @private
     * @type {tuna.tmpl.data.DataNode}
     */
    this.__keyNode = null;

    /**
     * @private
     * @type {!Object.<string, !tuna.tmpl.data.DataNode>}
     */
    this.__children = {};
};


/**
 * Родительский узел данных.
 *
 * @return {!tuna.tmpl.data.DataNode}
 */
tuna.tmpl.data.DataNode.prototype.getParent = function() {
    return this.__parent;
};

/**
 * Получение узла-ключа данных текущего узла.
 *
 * @return {!tuna.tmpl.data.DataNode} Узел-ключ данных текущего узла.
 */
tuna.tmpl.data.DataNode.prototype.getKey = function() {
    if (this.__keyNode === null) {
        this.__keyNode = new tuna.tmpl.data.DataNode(this.__key);
    }

    return this.__keyNode;
};


/**
 * @return {!tuna.tmpl.data.DataNode}
 */
tuna.tmpl.data.DataNode.prototype.getRoot = function() {
    return this.__parent !== tuna.tmpl.data.NULL_NODE ?
           this.__parent.getRoot() : this;
};


/**
 * Получение значений узла данных.
 *
 * @return {!*} Значение узла данных.
 */
tuna.tmpl.data.DataNode.prototype.getValue = function() {
    return this.__value;
};


/**
 * Получение строкового значения узла данных.
 *
 * @return {?string} Строковое значение узла данных.
 */
tuna.tmpl.data.DataNode.prototype.getStringValue = function() {
  if (this.__value !== null) {
    return this.__value.toString();
  }

  return null;
};


/**
 * Создание и возвращение дочернего узда данных по ключу.
 *
 * @param {string} key Ключ дочернего узла.
 * @return {!tuna.tmpl.data.DataNode} Новый узел данных,
 *         <code>tuna.tmpl.data.NULL_NODE</code> в случае неудачи.
 */
tuna.tmpl.data.DataNode.prototype.growChild = function(key) {
    if (this === tuna.tmpl.data.NULL_NODE) {
        return this;
    }

    if (this.__children[key] === undefined) {
        if (this.__value !== null && this.__value[key] !== undefined) {
            this.__children[key] =
                new tuna.tmpl.data.DataNode(this.__value[key], this, key);
        } else {
            this.__children[key] = tuna.tmpl.data.NULL_NODE;
        }
    }

    return this.__children[key];
};

/**
 * Нулевой узел данных.
 *
 * По сути является флагом отсутствия данных.
 *
 * @const
 * @type {!tuna.tmpl.data.DataNode}
 */
tuna.tmpl.data.NULL_NODE = new tuna.tmpl.data.DataNode(null);
