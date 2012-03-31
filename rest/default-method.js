


/**
 * Абстрактный класс метода по-умлочанию.
 *
 * Отличие данного метода от класса <code>tuna.rest.Method</code>, в
 * возможности установки имени метода.
 *
 * @see tuna.rest.MethodFactory
 * @constructor
 * @extends {tuna.rest.Method}
 * @param {string=} opt_name Имя удаленного метода.
 */
tuna.rest.DefaultMethod = function(opt_name) {
  tuna.rest.Method.call(this);

  if (opt_name !== undefined) {
    this.setName(opt_name);
  }
};


tuna.utils.extend(tuna.rest.DefaultMethod, tuna.rest.Method);


/**
 * Установка имени метода.
 *
 * @param {string} name имя метода.
 */
tuna.rest.DefaultMethod.prototype.setName = function(name) {};
