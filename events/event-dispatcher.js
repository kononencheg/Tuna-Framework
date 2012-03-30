


/**
 * Базовая реализация интерфейса <code>tuna.events.IEventDispatcher</code>.
 *
 * При необходимости добавить возможность генерировать события для любого
 * класса достаточно сделать его наследником данного класса. В случае, когда
 * наследование не возможно, на данный класс можно делегировать реализацию
 * <code>tuna.events.IEventDispatcher</code>.
 *
 * @constructor
 * @implements {tuna.events.IEventDispatcher}
 * @param {tuna.events.IEventDispatcher=} opt_propagationParent Родительский
 *        объект иерархии распростанения (баблинга).
 */
tuna.events.EventDispatcher = function(opt_propagationParent) {

  /**
   * Родительский объект иерархии распростанения (баблинга).
   *
   * @protected
   * @type {tuna.events.IEventDispatcher}
   */
  this._propagationParent = opt_propagationParent || null;

  /**
   * Таблица слушателей событий определенных типов.
   *
   * @protected
   * @type {Object.<string, Array.<function(tuna.events.BasicEvent, *)>>}
   */
  this._listeners = {};
};


/**
 * @inheritDoc
 */
tuna.events.EventDispatcher.prototype.dispatch = function(event, opt_data) {
  if (!(event instanceof tuna.events.BasicEvent)) {
    event = new tuna.events.BasicEvent(this, event);
  }

  var data = opt_data !== undefined ? opt_data : null;
  var type = event.getType();

  if (this._listeners[type] !== undefined) {
    var i = 0,
        l = this._listeners[type].length;

    while (i < l) {
      this._listeners[type][i].call(this, event, data);

      if (event.isImmediatePropagationStopped()) {
        break;
      }

      i++;
    }

    if (this._propagationParent !== null &&
        event.isBubbling() && !event.isPropagationStopped()) {

      this._propagationParent.dispatch(event);
    }
  }

  return !event.isDefaultPrevented();
};


/**
 * @inheritDoc
 */
tuna.events.EventDispatcher.prototype.addEventListener =
    function(type, listener) {

  if (this._listeners[type] === undefined) {
    this._listeners[type] = [listener];
  } else if (!this.hasEventListener(type, listener)) {
    this._listeners[type].push(listener);
  }
};


/**
 * @inheritDoc
 */
tuna.events.EventDispatcher.prototype.removeEventListener =
    function(type, listener) {

  if (this._listeners[type] !== undefined) {
    var listenerIndex =
        tuna.utils.indexOf(listener, this._listeners[type]);

    if (listenerIndex !== -1) {
      this._listeners[type].splice(listenerIndex, 1);
    }
  }
};


/**
 * @inheritDoc
 */
tuna.events.EventDispatcher.prototype.hasEventListener =
    function(type, listener) {

  if (this._listeners[type] !== undefined) {
    return tuna.utils.indexOf(listener, this._listeners[type]) !== -1;
  }

  return false;
};
