/**
 * TUNA FRAMEWORK
 * 
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */


/**
 * @namespace Глобальная область имен.
 */
var tuna = {};

/**
 * Версия библиотеки.
 *
 * @const
 * @type string
 */
tuna.VERSION = '3.2.70';

/**
 * Является ли текущий браузер IE.
 *
 * @const
 * @type boolean
 */
tuna.IS_IE = !!eval("'\v' == 'v'");

/**
 * @define {boolean}
 */
tuna.IS_COMPILED = false;

/**
 * @namespace
 */
tuna.dom = {};

/**
 * @namespace
 */
tuna.events = {};

/**
 * @namespace
 */
tuna.model = {};

/**
 * @namespace
 */
tuna.net = {};

/**
 * @namespace
 */
tuna.rest = {};

/**
 * @namespace
 */
tuna.tmpl = {};

/**
 * @namespace
 */
tuna.tmpl.compilers = {};

/**
 * @namespace
 */
tuna.tmpl.data = {};

/**
 * @namespace
 */
tuna.tmpl.markup = {};

/**
 * @namespace
 */
tuna.tmpl.settings = {};

/**
 * @namespace
 */
tuna.tmpl.units = {};

/**
 * @namespace
 */
tuna.ui = {};

/**
 * @namespace
 */
tuna.ui.buttons = {};

/**
 * @namespace
 */
tuna.ui.containers = {};

/**
 * @namespace
 */
tuna.ui.flash = {};

/**
 * @namespace
 */
tuna.ui.forms = {};

/**
 * @namespace
 */
tuna.ui.popups = {};

/**
 * @namespace
 */
tuna.ui.modules = {};

/**
 * @namespace
 */
tuna.ui.selection = {};

/**
 * @namespace
 */
tuna.ui.transformers = {};

/**
 * @namespace
 */
tuna.ui.selection.items = {};

/**
 * @namespace
 */
tuna.ui.selection.rule = {};

/**
 * @namespace
 */
tuna.ui.selection.view = {};

/**
 * @namespace
 */
tuna.utils = {};

/**
 * @namespace
 */
tuna.view = {};