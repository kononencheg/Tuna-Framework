


/**
 * Класс управления страницей отображения. Страница отображения представляет
 * собой DOM-элемент, являющийся элементом выделения модуля управлением
 * навигацией <code>tuna.ui.selection.Navigation</code>.
 *
 * В данном классе к базовой логике работы класса управления отображением
 * добавлена логика обработки "открытия" и "закрытия" станицы отображения.
 *
 * @see tuna.ui.selection.Navigation
 * @see tuna.ui.selection.rule.NavigationSelectionRule
 * @constructor
 * @extends {tuna.control.ViewController}
 */
tuna.control.PageViewController = function() {
  tuna.control.ViewController.call(this);

  /**
     * Модуль упарвления навигацией, страницей которого управляет данный
     * контроллер.
     *
     * @protected
     * @type {tuna.ui.selection.Navigation}
     */
  this._navigation = null;
};

tuna.utils.extend(tuna.control.PageViewController, tuna.control.ViewController);


/**
 * Установка соответсующего модуля упарвления навигацией.
 *
 * @see tuna.ui.selection.rule.NavigationSelectionRule
 * @param {tuna.ui.selection.Navigation} navigation Модуль упарвления
 *        навигацией.
 */
tuna.control.PageViewController.prototype.setNavigation = function(navigation) {
  this._navigation = navigation;
};


/**
 * Проверка возможности "закрытия" соответсующей контроллеру страницы
 * отображения.
 *
 * Если возможность закрытия по каким-либо причинам отсутствует, переход к
 * следующей странице с индеком <code>index</code> не произойдет.
 *
 * Реализация проверки возможности закрытия переопределяется в наследниках
 * класса.
 *
 * @see tuna.ui.selection.rule.NavigationSelectionRule
 * @param {string|number} index Индекс открываемой страницы.
 * @return {boolean} Возможность закрытия.
 */
tuna.control.PageViewController.prototype.canClose = function(index) {
  return true;
};


/**
 * Обработка закрытия соответсующей страницы отображения.
 *
 * Реализация обработки закрытия переопределяется в наследниках класса.
 *
 * @see tuna.ui.selection.rule.NavigationSelectionRule
 */
tuna.control.PageViewController.prototype.close = function() {};


/**
 * Обработка открытия соответсующей страницы отображения.
 *
 * В качестве сопуствующих данных, можуг передаваться дополнительные аргументы
 * открытия страницы.
 *
 * Реализация обработки открытия и обработка сопутствующих данных
 * переопределяется в наследниках класса.
 *
 * @param {Object.<string, string>} args Данные сопуствующие открытию.
 */
tuna.control.PageViewController.prototype.open = function(args) {};

