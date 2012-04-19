


/**
 * Базовый абстрактный класс экземпляра модуля отображения - сущности
 * управления изолированным элементом отображения.
 *
 * Экземпляром модуля отображения может быть всплывающее окно, кнопка, список
 * отображения и тд.
 *
 * @constructor
 * @extends tuna.events.EventDispatcher
 * @param {!Node} target Целевой DOM-элемент.
 */
tuna.ui.ModuleInstance = function(target) {
    tuna.events.EventDispatcher.call(this);

    /**
     * Целевой DOM-элемент экземпляра модуля отображения.
     *
     * @protected
     * @type {!Node}
     */
    this._target = target;

    /**
     * Настройки экземпляра по-умолчанию.
     *
     * @private
     * @type Object.<string, null|string|boolean|number>
     */
    this.__defaultOptions = {};
};


tuna.utils.extend(tuna.ui.ModuleInstance, tuna.events.EventDispatcher);


/**
 * Инициализация логики экземпляра модуля отображения.
 */
tuna.ui.ModuleInstance.prototype.init = function() {};


/**
 * Удаление логики экземпляра модуля отображения.
 */
tuna.ui.ModuleInstance.prototype.destroy = function() {};


/**
 * Получение целевого DOM-элемента экземпляра модуля.
 *
 * @return {!Node} Целевой DOM-элемент.
 */
tuna.ui.ModuleInstance.prototype.getTarget = function() {
    return this._target;
};


/**
 * Получение имени экземпляра отображения.
 *
 * Имя экземпляра отображения устанавливается в аттрибуте целевого DOM-элемента
 * <code>data-name</code>.
 *
 * @return {?string} Имя экземпляра.
 */
tuna.ui.ModuleInstance.prototype.getName = function() {
    return this._target.getAttribute('data-name');
};


/**
 * Установка работоспособности экземпляра модуля.
 *
 * Работоспособность экземпляра устанавливается отсутствием CSS-класса
 * <code>disabled</code> у целевого DOM-элемента.
 *
 * @param {boolean} isEnabled Флаг работоспособности.
 */
tuna.ui.ModuleInstance.prototype.setEnabled = function(isEnabled) {
    tuna.dom.setClassExist(this._target, 'disabled', !isEnabled);
};

/**
 * Проверка работоспособности модуля отображения.
 *
 * @return {boolean} Результат проверки.
 */
tuna.ui.ModuleInstance.prototype.isEnabled = function() {
    return !tuna.dom.hasClass(this._target, 'disabled');
};


/**
 * Устанока параметра настроек экземпляра по умолчанию.
 *
 * @protected
 * @param {string} name Имя параметра настроек.
 * @param {null|string|boolean|number} value Значение параметра.
 */
tuna.ui.ModuleInstance.prototype._setDefaultOption = function(name, value) {
    if (value === null) {
        delete this.__defaultOptions[name];
    } else {
        this.__defaultOptions[name] = value;
    }
};


/**
 * Установка параметра настроек экземпляра.
 *
 * @param {string} name Имя параметра настроек.
 * @param {null|string|boolean|number} value Значение параметра.
 */
tuna.ui.ModuleInstance.prototype.setOption = function(name, value) {
    if (value) {
        this._target.setAttribute('data-' + name, value);
    } else {
        this._target.removeAttribute('data-' + value);
    }
};


/**
 * Получение параметра настроек экземпляра.
 *
 * @param {string} name Имя параметра настроек.
 * @return {null|string|boolean|number} Значение параметра.
 */
tuna.ui.ModuleInstance.prototype.getOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option;
};


/**
 * Получение строкового параметра настроек экземпляра.
 *
 * @param {string} name Имя параметра настроек.
 * @return {string} Строковое значение параметра.
 */
tuna.ui.ModuleInstance.prototype.getStringOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option || '';
};


/**
 * Получение числового параметра настроек экземпляра.
 *
 * @param {string} name Имя параметра настроек.
 * @return {number} Строковое значение параметра.
 */
tuna.ui.ModuleInstance.prototype.getNumberOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return option * 1 || 0;
};


/**
 * Получение булева параметра настроек экземпляра.
 *
 * @param {string} name Имя параметра настроек.
 * @return {boolean} Булево значение параметра.
 */
tuna.ui.ModuleInstance.prototype.getBooleanOption = function(name) {
    var option = this._target.getAttribute('data-' + name);
    if (option === null && this.__defaultOptions[name] !== undefined) {
        option = this.__defaultOptions[name];
    }

    return !!option;
};


/**
 * Получение таблицы настроек экземпляра.
 *
 * @return {!Object.<string, string>} Таблица настроек.
 */
tuna.ui.ModuleInstance.prototype.getOptions = function() {
    return tuna.dom.getAttributesData(this._target);
};
