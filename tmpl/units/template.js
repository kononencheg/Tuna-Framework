


/**
 * Класс элемента шаблона - контейнер шаблона.
 *
 * @constructor
 * @extends {tuna.tmpl.units.Unit}
 * @param {!tuna.tmpl.units.Template=} opt_root Корневой элемент шаблона. Если
 *        параметр не задан, то в качестве корневого элемента выступает сам
 *        элемент.
 */
tuna.tmpl.units.Template = function(opt_root) {
  tuna.tmpl.units.Unit.call(this, opt_root || this);

  /**
   * @private
   * @type {!Array.<!tuna.tmpl.units.IUnit>}
   */
  this.__items = [];

  /**
   * @private
   * @type {!Array.<!Node>}
   */
  this.__createdChildren = [];

  /**
   * @private
   * @type {!Array.<!Node>}
   */
  this.__removedChildren = [];

  /**
   * @private
   * @type {Node}
   */
  this.__target = null;
};


tuna.utils.extend(tuna.tmpl.units.Template, tuna.tmpl.units.Unit);


/**
 * Получение корневого элемента шаблона.
 *
 * @return {!tuna.tmpl.units.Template} Корневой элемент шаблона.
 */
tuna.tmpl.units.Template.prototype.getRootTemplate = function() {
  return this._rootTemplate;
};


/**
 * Установка целевого DOM-элемента шаблона трансформации.
 *
 * @param {!Node} element DOM-элемента, являющийся контейнером шаблона.
 */
tuna.tmpl.units.Template.prototype.setTarget = function(element) {
  this.__target = element;
};


/**
 * Получение целевого DOM-элемента шаблона трансформации.
 *
 * @return {!Node} DOM-элемент, являющийся контейнером шаблона.
 */
tuna.tmpl.units.Template.prototype.getTarget = function() {
  return this.__target;
};


/**
 * Добавление элементов трансформации в шаблон.
 *
 * @param {!Array.<!tuna.tmpl.units.IUnit>|!tuna.tmpl.units.IUnit} items Элемент
 *        или набор элементов шаблона трансформации.
 */
tuna.tmpl.units.Template.prototype.addItems = function(items) {
  this.__items = this.__items.concat(items);
};


/**
 * Регистрация создания DOM-элемента в шаблоне трансформации.
 *
 * @param {!Node} child Создаваемый DOM-элемент.
 */
tuna.tmpl.units.Template.prototype.registerChildCreation = function(child) {
  this.__createdChildren = this.__createdChildren.concat(child);
};


/**
 * Извлечение созданных DOM-элементов в ходе работы трансформации.
 *
 * @return {!Array.<!Node>} Массив созданных DOM-элементом.
 */
tuna.tmpl.units.Template.prototype.fetchCreatedChildren = function() {
  return this.__createdChildren.splice(0, this.__createdChildren.length);
};


/**
 * Регистрация удаления DOM-элемента в шаблоне трансформации.
 *
 * @param {!Node} child Удаляемый DOM-элемент.
 */
tuna.tmpl.units.Template.prototype.registerChildRemoval = function(child) {
  this.__removedChildren = this.__removedChildren.concat(child);
};


/**
 * Извлечение удаленных DOM-элементов в ходе работы трансформации.
 *
 * @return {!Array.<!Node>} Массив удаленных DOM-элементом.
 */
tuna.tmpl.units.Template.prototype.fetchRemovedChildren = function() {
  return this.__removedChildren.splice(0, this.__removedChildren.length);
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Template.prototype.applyData = function(dataNode) {
  var i = this.__items.length - 1;
  while (i >= 0) {
    this.__items[i].applyData(dataNode);

    i--;
  }
};


/**
 * @inheritDoc
 */
tuna.tmpl.units.Template.prototype.destroy = function() {
  while (this.__items.length > 0) {
    this.__items.shift().destroy();
  }

  this.__target = null;
};
