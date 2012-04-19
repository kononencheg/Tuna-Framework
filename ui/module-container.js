


/**
 * Класс управления экземплярами модулей отображения в целевом DOM-элементе
 *
 * @see tuna.ui.Module
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.ModuleContainer = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @type {!Array.<string>}
     * @private
     */
    this.__modules = [];

    /**
     * @type {!Object.<string, !Object.<string, !Array.<!tuna.ui.ModuleInstance>>>}
     * @private
     */
    this.__instances = {};
};


tuna.utils.extend(tuna.ui.ModuleContainer, tuna.ui.ModuleInstance);


/**
 * @inheritDoc
 */
tuna.ui.ModuleContainer.prototype.init = function() {
    this.initModules(this._target);
};


/**
 * @inheritDoc
 */
tuna.ui.ModuleContainer.prototype.destroy = function() {
    for (var targetId in this.__instances) {
        this.__destroyModulesById(targetId);
    }
};


/**
 * Проверка активности контейнера с модулями.
 *
 * @return {boolean} Результат проверки.
 */
tuna.ui.ModuleContainer.prototype.isActive = function() {
    return document.getElementById(this._target.id) === this._target;
};


/**
 * Установка списка имен модулей, которые требуются в этом контейнере.
 *
 * @param {!Array.<string>} modules Список модулей.
 */
tuna.ui.ModuleContainer.prototype.requireModules = function(modules) {
    this.__modules = modules;
};


/**
 * Инициализация модулей в DOM-элементе.
 *
 * Данный метод стоит использовать в том случае, если внутри целевого
 * DOM-элемента появились дочерние элементы, в которых так же требуется
 * проинициализировать экземпляры модулей.
 *
 * @see tuna.ui.Module#init
 * @param {!Node} target DOM-элемент в котором требуется проинициализировать
 *        экземпляры модулей.
 */
tuna.ui.ModuleContainer.prototype.initModules = function(target) {
    if (target.id === null) {
        target.id = 'container_' + tuna.ui.__lastId++;
    }

    var targetId = target.id;
    if (this.__instances[targetId] === undefined) {
        this.__instances[targetId] = {};
    }

    var instances = this.__instances[targetId];

    var i = 0,
        l = this.__modules.length;

    var type = null;
    var module = null;
    while (i < l) {
        type = this.__modules[i];
        module = tuna.ui.getModule(type);

        if (module !== null) {
            if (instances[type] === undefined) {
                instances[type] = [];
            }

            instances[type] = instances[type].concat(module.init(target, this));
        } else {
            throw 'Unknown module "' + type + '"';
        }

        i++;
    }
};


/**
 * Уничтожение всех экземпляров модулей проинициализированных в данном
 * контейнере.
 *
 * @param {!Node} target
 */
tuna.ui.ModuleContainer.prototype.destroyModules = function(target) {
    this.__destroyModulesById(target.id);
};


/**
 * Получение всех экземпляров модулей отображения определенного типа.
 *
 * @param {string} type Тип модуля отображения.
 * @param {!Node=} target DOM-элемент модули которого н еобходимо вренуть.
 * @return {!Array.<!tuna.ui.ModuleInstance>} Массив модулей отображения.
 */
tuna.ui.ModuleContainer.prototype.getModuleInstances =
    function(type, target) {

    var result = [];

    var targetId = null;
    if (target !== undefined) {
        targetId = target.id;
        if (this.__instances[targetId] !== undefined &&
            this.__instances[targetId][type] !== undefined) {
            result = this.__instances[targetId][type];
        }
    } else {
        for (targetId in this.__instances) {
            if (this.__instances[targetId][type] !== undefined) {
                result = result.concat(this.__instances[targetId][type]);
            }
        }
    }


    return result;
};


/**
 * Получение экземпляра модуля отображения по типу модйля и имени экземпляра.
 *
 * @see tuna.ui.ModuleInstance#getName
 * @param {string} type Тип модуля.
 * @param {string} name Имя экземпляра.
 * @return {tuna.ui.ModuleInstance} Экземпляр модуля отображения.
 */
tuna.ui.ModuleContainer.prototype.getModuleInstanceByName =
    function(type, name) {

    for (var targetId in this.__instances) {
        if (this.__instances[targetId][type] !== undefined) {
            var instances = this.__instances[targetId][type];

            var i = 0,
                l = instances.length;

            while (i < l) {
                if (instances[i].getName() === name) {
                    return instances[i];
                }

                i++;
            }
        }
    }

    return null;
};


/**
 * @param {string} targetId
 * @private
 */
tuna.ui.ModuleContainer.prototype.__destroyModulesById = function(targetId) {
    var module = null;
    for (var name in this.__instances[targetId]) {
        module = tuna.ui.getModule(name);
        if (module !== null) {
            module.destroy(this.__instances[targetId][name]);
        }

        this.__instances[targetId][name].length = 0;
    }

    delete this.__instances[targetId];
};
