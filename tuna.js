/**
 * TUNA FRAMEWORK
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Глобальная область имен.
 *
 * @namespace
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @const
 * @type string
 */
tuna.VERSION = '1.0.570';

/**
 * Является ли текущий браузер Internet Explorer'ом.
 *
 * @const
 * @type boolean
 */
tuna.IS_IE = !!eval("'\v' == 'v'");


/**
 * @namespace Область имен классов компонентов отображения.
 */
tuna.ui = {};

/**
 * @namespace Область имен компонентов типа кнопка.
 */
tuna.ui.buttons = {};

/**
 * @namespace Область имен компонентов связанных с Flash.
 */
tuna.ui.flash = {};

/**
 * @namespace Область имен компонентов связанных с формами.
 */
tuna.ui.forms = {};

/**
 * @namespace Область имен компонентов связанных с всплывающими окнами.
 */
tuna.ui.popups = {};

/**
 * @namespace Область имен компонентов связанных с выделением, например, списки
 * и навигация.
 */
tuna.ui.selection = {};

/**
 * @namespace Область имен классов-наборов элементов в списках выделения.
 */
tuna.ui.selection.items = {};

/**
 * @namespace Область имен классов-правил выделения элементов.
 */
tuna.ui.selection.rule = {};

/**
 * @namespace Область имен классов управления отображением выделенных элементов.
 */
tuna.ui.selection.view = {};

/**
 * @namespace Область имен компонентов связанных с трансформацией DOM-дерева.
 */
tuna.ui.transformers = {};



/**
 * @namespace Область имен классов предназначенных для работы с моделью данных
 * приложения.
 */
tuna.model = {};

/**
 * @namespace Область имен классов предназначенных для работы с REST
 * интерфейсом.
 */
tuna.rest = {};



/**
 * @namespace Область имен классов управления приложением.
 */
tuna.control = {};



/**
 * @namespace Область имен классов реализующих AJAX запросы.
 */
tuna.net = {};

/**
 * @namespace Область имен функций для работы с DOM-моделью.
 */
tuna.dom = {};

/**
 * @namespace Область имен классов обработки и генерации событий.
 */
tuna.events = {};

/**
 * @namespace Область имен классов шаблонизатора.
 */
tuna.tmpl = {};

/**
 * @namespace Область имен классов компиляции шаблонов.
 */
tuna.tmpl.compilers = {};

/**
 * @namespace Область имен классов работы с данными шаблонизатора.
 */
tuna.tmpl.data = {};

/**
 * @namespace Область имен классов обработки разметки шаблона.
 */
tuna.tmpl.markup = {};

/**
 * @namespace Область имен классов описывающих шаблон трансформации.
 */
tuna.tmpl.settings = {};

/**
 * @namespace Область имен классов реализующих трансформацию.
 */
tuna.tmpl.units = {};

/**
 * @namespace Область имен классов вспомогательных для элемента списка.
 */
tuna.tmpl.units.list = {};

/**
 * @namespace Область имен классов вспомогательных для элемента условия.
 */
tuna.tmpl.units.condition = {};

/**
 * @namespace Область имен вспомогательных функций.
 */
tuna.utils = {};
