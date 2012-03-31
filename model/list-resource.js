


/**
 * Класс хранилища набора экземпляров модели данных приложения.
 *
 * В случае, если данный набор соотвествует удаленномй набору данных, получить
 * который возможно при вызове REST-метода, то в качестве аргументов
 * конструктора можно задать имя удаленного метода, тогда при вызове метода
 * <code>load</code> данного класса, удаленный набор данных будет загружен и
 * преобразован в массив экземпляров данных зарегистрированнаого в фабрике
 * <code>tuna.model.recordFactory</code> под указанным вторым аргументом именем.
 *
 * @see tuna.rest.call
 * @see tuna.model.recordFactory
 * @see tuna.model.ListResource#load
 * @constructor
 * @implements {tuna.model.IResource}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} opt_methodName Имя удаленного REST-метода, при вызове
 *        которого возвращается соответсвующий набор данных.
 * @param {string=} opt_recordName Имя экземпляра данных.
 */
tuna.model.ListResource = function(opt_methodName, opt_recordName) {
  tuna.events.EventDispatcher.call(this);

  /**
     * @type {Object}
     * @private
     */
  this.__lastArgs = null;

  /**
     * Имя удаленного REST-метода, при вызове которого возвращается
     * соответсвующий набор данных.
     *
     * @type {?string}
     * @protected
     */
  this._methodName = opt_methodName || null;

  /**
     * Имя экземпляра данных.
     *
     * @type {?string}
     * @protected
     */
  this._recordName = opt_recordName || null;

  /**
     * Хранымый набор экземпляров данных.
     *
     * @type {!Array.<!tuna.model.Record>}
     * @private
     */
  this._list = [];
};


tuna.utils.extend(tuna.model.ListResource, tuna.events.EventDispatcher);


/**
 * Загрузка соотвествующего набора данных.
 *
 * Загрузка заключается в вызове указанного в конструкторе REST-метода. В
 * случае если загрузка вызывается повторно с теми же аргументами что и ранее и
 * флаг вынужденной загрузки не установлен, то ничего не происходит.
 *
 * @param {!Object=} opt_args Аргументы указанного в конструкторе REST-метода.
 * @param {boolean=} opt_isForce Флаг вынужденной загрузки.
 */
tuna.model.ListResource.prototype.load = function(opt_args, opt_isForce) {
  if (this._methodName !== null && this._recordName !== null) {
    if (opt_isForce || opt_args === undefined ||
        !tuna.utils.isObjectsEquals(this.__lastArgs, opt_args)) {

      var self = this;
      tuna.rest.call(this._methodName, opt_args || null, function(records) {
        self.set(records);
      }, this._recordName);
    }

    this.__lastArgs = opt_args || null;
  }
};


/**
 * Установка нового набора экземпляров данных для хранения.
 *
 * @param {!Array.<!tuna.model.Record>} list Новый набор экземпляров.
 */
tuna.model.ListResource.prototype.set = function(list) {
  if (this._list !== list) {
    this._list = list;

    this.dispatch('update', this._list);
  }
};


/**
 * Получение всего набора экземпряров.
 *
 * @return {!Array.<!tuna.model.Record>} Хранимый набор экземпляров.
 */
tuna.model.ListResource.prototype.get = function() {
  return this._list;
};


/**
 * @inheritDoc
 */
tuna.model.ListResource.prototype.clear = function() {
  if (this._list.length > 0) {
    this._list.length = 0;

    this.dispatch('update', this._list);
  }
};


/**
 * Добавление экземпляра данных в набор.
 *
 * В случае существования, экземпляр с тем же идентификатором, что и выбранный
 * заменяется.
 *
 * @see tuna.model.Record#id
 * @param {!tuna.model.Record} record Экземпляр данных, который необходимо
 *        добавить либо заменить.
 */
tuna.model.ListResource.prototype.addItem = function(record) {
  var i = 0,
      l = this._list.length;

  while (i < l) {
    if (this._list[i].id === record.id) {
      break;
    }

    i++;
  }

  this._list[i] = record;

  this.dispatch('update', this._list);
};


/**
 * Удаление экземпляра из набора.
 *
 * Поиск экземпляра для удаления производиться по идентификатору.
 *
 * @see tuna.model.Record#id
 * @param {!tuna.model.Record} record Экземпляр данных, который необходимо
 *        удалить.
 */
tuna.model.ListResource.prototype.removeItem = function(record) {
  if (record.id !== null) {
    this.removeItemById(record.id);
  }
};


/**
 * Поиск и удаление экземпляра данных по его идентификатору.
 *
 * @see tuna.model.Record#id
 * @param {string} id Идентификатор экземпляра, который необходимо удалить.
 */
tuna.model.ListResource.prototype.removeItemById = function(id) {
  var i = 0,
      l = this._list.length;

  while (i < l) {
    if (this._list[i].id === id) {

      this._list.splice(i, 1);
      this.dispatch('update', this._list);

      break;
    }

    i++;
  }
};


/**
 * Поиск экземпляра данных в наборе по идентификатору.
 *
 * @param {string} id Идентификатор необходимого экземпляра.
 * @return {tuna.model.Record} Найденный экземпляр или <code>null</code>.
 */
tuna.model.ListResource.prototype.getItemById = function(id) {
  var i = 0,
      l = this._list.length;

  while (i < l) {
    if (this._list[i].id === id) {
      return this._list[i];
    }

    i++;
  }

  return null;
};


/**
 * Поиск экземпляров данных удовлетворяющих условию.
 *
 * Условие поиска задается специальной функцией, принимающий как аргумент
 * экземпляр данных и возвращающей результат проверки.
 *
 * @param {!function(!tuna.model.Record):boolean} callback Функция-условие.
 *        проверки.
 * @return {!Array.<!tuna.model.Record>} Массив найденных экземпляров.
 */
tuna.model.ListResource.prototype.find = function(callback) {
  var result = [];

  var i = 0,
      l = this._list.length;

  while (i < l) {
    if (callback(this._list[i])) {
      result.push(this._list[i]);
    }

    i++;
  }

  return result;
};


/**
 * Поиск первого экземпляра данных удовлетворяющего условию.
 *
 * @see tuna.model.ListResource#find
 * @param {!function(!tuna.model.Record):boolean} callback Функция-условие.
 * @return {tuna.model.Record} Найденный экземпляр или <code>null</code>.
 */
tuna.model.ListResource.prototype.findOne = function(callback) {
  var i = 0,
      l = this._list.length;

  while (i < l) {
    if (callback(this._list[i])) {
      return this._list[i];
    }

    i++;
  }

  return null;
};


/**
 *  Вызов выбранной функции-обработчика для каждого элемента набора.
 *
 * @param {!function(!tuna.model.Record)} callback Функция-обработчик.
 */
tuna.model.ListResource.prototype.each = function(callback) {
  var i = 0,
      l = this._list.length;

  while (i < l) {
    callback(this._list[i]);

    i++;
  }
};


/**
 * Вызов выбранной функции-обработчика для каждого элемента набора и сохранение
 * ее результатов в массив.
 *
 * @param {!function(!tuna.model.Record):*} callback Функция-обработчик.
 * @return {!Array} Массив результатов вызова.
 */
tuna.model.ListResource.prototype.map = function(callback) {
  var result = [];

  var i = 0,
      l = this._list.length;

  var item = null;
  while (i < l) {
    item = callback(this._list[i]);
    if (item !== null) {
      result.push(item);
    }

    i++;
  }

  return result;
};

