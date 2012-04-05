


/**
 * Элемент шаблона трансформации отображающий массив данных в виде набора
 * DOM-элементов.
 *
 * Порядком отображения управляют классы реализующие интерфейс
 * <code>tuna.tmpl.units.list.IListItemRouter</code>
 *
 * @see tuna.tmpl.units.list.IListItemRouter
 * @constructor
 * @extends {tuna.tmpl.units.Unit}
 * @param {!tuna.tmpl.units.Template} root Корневой элемент трансформации.
 */
tuna.tmpl.units.List = function(root) {
    tuna.tmpl.units.Unit.call(this, root);

    /**
     * @private
     * @type {tuna.tmpl.compilers.TemplateCompiler}
     */
    this.__templateCompiler = null;

    /**
     * @private
     * @type {Node}
     */
    this.__itemRenderer = null;

    /**
     * @private
     * @type {tuna.tmpl.settings.TemplateSettings}
     */
    this.__itemSettings = null;

    /**
     * @private
     * @type {!Object.<string, !tuna.tmpl.units.Template>}
     */
    this.__itemsTable = {};

    /**
     * @private
     * @type {!tuna.tmpl.data.PathEvaluator}
     */
    this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type {!tuna.tmpl.data.PathEvaluator}
     */
    this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator();

    /**
     * @private
     * @type {tuna.tmpl.units.list.IListItemRouter}
     */
    this.__listNodeRouter = null;
};


tuna.utils.extend(tuna.tmpl.units.List, tuna.tmpl.units.Unit);


/**
 * Установка объекта управления порядком отображения списка.
 *
 * @param {!tuna.tmpl.units.list.IListItemRouter} router Объект управления
 *        отображением списка.
 */
tuna.tmpl.units.List.prototype.setListNodeRouter = function(router) {
    this.__listNodeRouter = router;
};


/**
 * Установка пути извлечения данных для отображения.
 *
 * @see tuna.tmpl.data.PathEvaluator
 * @param {string} path Строка пути извлечения данных.
 */
tuna.tmpl.units.List.prototype.setPath = function(path) {
    this.__pathEvaluator.setPath(path);
};


/**
 * Установка пути извлечения ключа элемента списка.
 *
 * Ключ элемента списка необходим для сохранения неизменных элементов списка. То
 * есть, при измененнии элемента с указанным ключем, он не будет создаваться
 * заново.
 *
 * @param {string} path трока пути извлечения данных.
 */
tuna.tmpl.units.List.prototype.setKeyPath = function(path) {
    this.__keyPathEvaluator.setPath(path);
};


/**
 * Установка компилятора шаблонов.
 *
 * Компилятор шаблона необходим для, компиляции шаблонов элемента списка.
 *
 * @param {!tuna.tmpl.compilers.TemplateCompiler} compiler Компилятор шаблонов.
 */
tuna.tmpl.units.List.prototype.setCompiler = function(compiler) {
    this.__templateCompiler = compiler;
};


/**
 * Установка элемента-прототипа элементов списка.
 *
 * @param {!Node} element DOM-элемент списка, прототип элементов списка.
 */
tuna.tmpl.units.List.prototype.setItemRenderer = function(element) {
    this.__itemRenderer = element;
};


/**
 * Уствновка настроек шаблона элемента списка.
 *
 * @param {!tuna.tmpl.settings.TemplateSettings} settings Настройки шаблона
 *        элемента списка.
 */
tuna.tmpl.units.List.prototype.setItemSettings = function(settings) {
    this.__itemSettings = settings;
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.List.prototype.applyData = function(dataNode) {
    var oldItemsTable = this.__itemsTable;
    this.__itemsTable = {};

    var sampleNode = this.__pathEvaluator.evaluate(dataNode);
    if (sampleNode !== null) {
        var sample = sampleNode.getValue();

        var itemTemplate = null;
        var itemNode = null;
        var key = null;
        for (var index in sample) {
            itemTemplate = null;
            itemNode = sampleNode.growChild(index);
            key = this.__getKey(itemNode);

            if (key !== null) {
                if (oldItemsTable[key] === undefined) {
                    itemTemplate = this.__makeItemTemplate();
                } else {
                    itemTemplate = oldItemsTable[key];
                    delete oldItemsTable[key];
                }

                if (itemTemplate !== null) {
                    itemTemplate.applyData(itemNode);

                    this.__itemsTable[key] = itemTemplate;
                }
            }
        }
    }

    this.__removeItems(oldItemsTable);

};


/**
 * @inheritDoc
 */
tuna.tmpl.units.List.prototype.destroy = function() {
    for (var key in this.__itemsTable) {
        this.__itemsTable[key].destroy();
    }

    this.__itemsTable = {};
};


/**
 * Получение ключа элемента списка по соответсвующим данным.
 *
 * @private
 * @param {!tuna.tmpl.data.DataNode} itemNode Узел соответсвующих данных.
 * @return {?string} Ключ элемента.
 */
tuna.tmpl.units.List.prototype.__getKey = function(itemNode) {
    var keyNode = this.__keyPathEvaluator.evaluate(itemNode);
    if (keyNode !== null) {
        return keyNode.getStringValue();
    }

    return null;
};


/**
 * Удаление элементов списка и разрушения их шаблонов.
 *
 * @private
 * @param {!Object.<string, !tuna.tmpl.units.Template>} itemsTable Таблица
 *        шаблонов элемента списка.
 */
tuna.tmpl.units.List.prototype.__removeItems = function(itemsTable) {
    var template = null;
    var templateTarget = null;

    for (var key in itemsTable) {
        template = itemsTable[key];

        templateTarget = template.getTarget();
        if (templateTarget !== null) {
            this.__listNodeRouter.remove(templateTarget);
        }

        template.destroy();
    }
};


/**
 * Создание шаблона элемента списка.
 *
 * @return {tuna.tmpl.units.Template} Созданный шаблон элемента списка.
 */
tuna.tmpl.units.List.prototype.__makeItemTemplate = function() {
    var templateTarget = this.__itemRenderer.cloneNode(true);
    if (templateTarget !== null && this.__itemSettings !== null) {
        var template = this.__templateCompiler.compile
            (this.__itemSettings, templateTarget, this._rootTemplate);

        this.__listNodeRouter.append(templateTarget);

        return template;
    }

    return null;
};
