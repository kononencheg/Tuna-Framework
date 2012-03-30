


/**
 * Класс базового события событийной модели объектов реализующих интерфейс
 * <code>tuna.events.IEventDispatcher</code>.
 *
 * @see tuna.events.IEventDispatcher
 * @see tuna.events.EventDispatcher
 * @constructor
 * @param {!tuna.events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {boolean=} opt_isBubbling Флаг использования баблинга.
 */
tuna.events.BasicEvent = function(target, type, opt_isBubbling) {

  /**
   * Объект событие которого произошло.
   *
   * @protected
   * @type {tuna.events.IEventDispatcher}
   */
  this._target = target;

  /**
   * Тип события.
   *
   * @protected
   * @type {string}
   */
  this._type = type;

  /**
   * Флаг использования баблинга.
   *
   * @protected
   * @type {boolean}
   */
  this._isBubbling = !!opt_isBubbling;

  /**
   * Флаг остановки действие по-умолчанию.
   *
   * @see tuna.events.BasicEvent#preventDefault
   * @see tuna.events.BasicEvent#isDefaultPrevented
   * @protected
   * @type {boolean}
   */
  this._isCanceled = false;

  /**
   * Флаг остановки распространения события баблингом.
   *
   * @see tuna.events.BasicEvent#stopPropagation
   * @see tuna.events.BasicEvent#isPropagationStopped
   * @protected
   * @type {boolean}
   */
  this._isStopped = false;

  /**
   * Флаг полной остановки обработки события.
   *
   * @see tuna.events.BasicEvent#stopImmediatePropagation
   * @see tuna.events.BasicEvent#isImmediatePropagationStopped
   * @protected
   * @type {boolean}
   */
  this._isImmediateStopped = false;
};


/**
 * Возврвщение объекта, с которым произошло событие.
 *
 * @return {tuna.events.IEventDispatcher} Объект с которым произошло событие.
 */
tuna.events.BasicEvent.prototype.getTarget = function() {
  return this._target;
};


/**
 * Возвращение типа события.
 *
 * @return {string} Тип события.
 */
tuna.events.BasicEvent.prototype.getType = function() {
  return this._type;
};


/**
 * Используется ли баблинг для данного события.
 *
 * @return {boolean} Флаг использования баблинга.
 */
tuna.events.BasicEvent.prototype.isBubbling = function() {
  return this._isBubbling;
};


/**
 * Отмена обработки события по-умолчанию.
 */
tuna.events.BasicEvent.prototype.preventDefault = function() {
  this._isCanceled = true;
};


/**
 * Отменена ли обработка события по-умолчанию.
 *
 * @return {boolean} Флаг отмены обработки по-умолчанию.
 */
tuna.events.BasicEvent.prototype.isDefaultPrevented = function() {
  return this._isCanceled;
};


/**
 * Полная остановка обработки события.
 *
 * Полная остановка означает, что ни один обработчик данного события не будет
 * вызван.
 */
tuna.events.BasicEvent.prototype.stopImmediatePropagation = function() {
  this._isImmediateStopped = true;
};


/**
 * Остановлена ли полностью обработка события.
 *
 * @return {boolean} Флаг полной остановки обработки события.
 */
tuna.events.BasicEvent.prototype.isImmediatePropagationStopped = function() {
  return this._isImmediateStopped;
};


/**
 * Остановка баблинга события.
 *
 * Обработчики находящиеся выше по иерархии растпростанения вызваны не будут.
 */
tuna.events.BasicEvent.prototype.stopPropagation = function() {
  this._isStopped = true;
};


/**
 * Остановлен ли баблинг события.
 *
 * @return {boolean} Флаг остановки баблинга.
 */
tuna.events.BasicEvent.prototype.isPropagationStopped = function() {
  return this._isImmediateStopped || this._isStopped;
};
