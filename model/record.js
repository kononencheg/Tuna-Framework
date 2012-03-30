


/**
 * Базовый абстрактный класс экземпляра модели данных приложения.
 *
 * @see tuna.model.Record#populate
 * @constructor
 * @param {!*=} opt_rawData Исходные данные экземпляра.
 */
tuna.model.Record = function(opt_rawData) {

  /**
   * Уникальный в своем роде идентификатор экземпляра модели данных.
   *
   * @type {?string}
   */
  this.id = null;

  if (opt_rawData !== undefined) {
    this.populate(opt_rawData);
  }
};


/**
 * Клонирование экземпляра класса.
 *
 * @see tuna.model.RecordFactory
 * @return {!tuna.model.Record} Копия данного экземпляра.
 */
tuna.model.Record.prototype.clone = function() {
  var clone = new this.constructor();

  for (var param in this) {
    clone[param] = this[param];
  }

  return clone;
};


/**
 * Заполнение экземпляра данными.
 *
 * При получении данных из внешнего источника, например, их ответа AJAX запроса,
 * обычно есть необходимость преобразовать их в данные, формат подходящий для
 * приложения.
 *
 * @param {!*} data Данные для заполнения.
 */
tuna.model.Record.prototype.populate = function(data) {};


/**
 * Сериализация данных экземпляра класса в определенный формат.
 *
 * В случае, если данные хранящиеся в экземпляре данного класса необходимы вне
 * приложения (например, при отсылки запроса на сервер или передаче во flash
 * приложение), причем в другом формате, то данные необходимо преобразовать в
 * другой формат.
 *
 * @see tuna.model.serialize
 * @param {!Object=} opt_options Аргументы преобразования. Аргументами
 *        могут понадобиться при наличии нескольких типов преобразования.
 * @return {!*} Результат преобразования.
 */
tuna.model.Record.prototype.serialize = function(opt_options) {};
