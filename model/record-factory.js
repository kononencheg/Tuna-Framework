


/**
 * Класс фабрики экземпляров модели данных приложения.
 *
 * По сути экземпляр данного класса служит библиотекой возможных объектов
 * данных, которые по необходимости можно создать.
 *
 * @constructor
 */
tuna.model.RecordFactory = function() {

  /**
   * @private
   * @type {Object.<string, !tuna.model.Record>}
   */
  this.__prototypes = {};
};


/**
 * Регистрирование прототипа экземпляра модели данных с определенным именем.
 *
 * @see tuna.model.Record
 * @param {string} name Имя экземпляра данных.
 * @param {!tuna.model.Record} record Прототип экземпляра данных.
 */
tuna.model.RecordFactory.prototype.registerRecord = function(name, record) {
  this.__prototypes[name] = record;
};


/**
 * Проверка наличия прототипа экземпляра модели данных в библиотеке.
 *
 * @param {string} name Имя прототипа.
 * @return {boolean} Результат проверки.
 */
tuna.model.RecordFactory.prototype.isRecordRegistered = function(name) {
  return this.__prototypes[name] !== undefined;
};


/**
 * Создание экземпляра модели данных клонированием прототипа.
 *
 * @see tuna.model.Record#clone
 * @param {string} name Имя экземпляра данных.
 * @return {tuna.model.Record} Созданный экземпляр данных. <code>null</code>, в
 *         случае если соответсующий прототип не найден.
 */
tuna.model.RecordFactory.prototype.createRecord = function(name) {
  if (this.__prototypes[name] !== undefined) {
    return this.__prototypes[name].clone();
  }

  return null;
};
