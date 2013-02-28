/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @namespace
 */
var util = {};


/**
 * Версия библиотеки.
 *
 * @const
 * @type {string}
 */
util.VERSION = '0.0.1';


/**
 * Является ли текущий браузер Internet Explorer'ом.
 *
 * @const
 * @type {boolean}
 */
util.IS_IE = !!eval("'\v' == 'v'");


/**
 * @namespace
 */
util.dom = {};



/**
 * @constructor
 */
util.__ExtendLink = function() {};


/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на
 * него, сохраняя конструктор.
 *
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */
util.inherits = function(Class, Parent) {};


/**
 * Привязывание определенного контекста к функции или методу.
 *
 * @param {!Function} func Функция.
 * @param {Object} context Контекст.
 * @return {!Function} Привязанная к контексту функция.
 */
util.bind = function(func, context) {};


/**
 * Отложенное выполнение функции.
 *
 * @param {function()} callback Функция.
 */
util.async = function(callback) {};


/**
 * Ничего не выполняющая функция.
 */
util.nop = function() {};


/**
 * Клонирование объекта.
 *
 * @param {*} object Объект.
 * @return {*} Копия объекта.
 */
util.clone = function(object) {};


/**
 * @param {!Object} base Базовый объект.
 * @param {!Object} target Объект для наложения на базовый.
 */
util.merge = function(base, target) {};


/**
 * @param {Object} first Объект для сравнения.
 * @param {Object} second Другой объект для сравнения.
 * @return {boolean} Результат сравнения.
 */
util.areEqual = function(first, second) {};


/**
 * Преобразование объекта с индесами в массив.
 *
 * @param {!Object} list Объект похожий на массив.
 * @return {!Array} Массив.
 */
util.toArray = function(list) {};


/**
 * Клонирование массива.
 *
 * @param {!Array} array Массив.
 * @return {!Array} Копия массива.
 */
util.cloneArray = function(array) {};


/**
 * Поиск индекса объекта в массиве.
 *
 * @param {*} element Объект поиска.
 * @param {!Array} array Массив.
 * @return {number} Индекс найденного элемента.
 */
util.indexOf = function(element, array) {};


/**
 * @param {Object} object Объект кодирования.
 * @return {string} Кодированный в строку объект.
 */
util.encodeJsonData = function(object) {};


/**
 * @param {string} data Закодированный объект.
 * @return {*} Раскодированный объект.
 */
util.decodeJsonData = function(data) {};


/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 *
 * @param {!Object} object Объект кодирования.
 * @return {string} Перекодированный в строку объект.
 */
util.encodeFormData = function(object) {};


/**
 * Рекурсивное разбиение объекта н данные для кодирования в
 * x-www-form-urlencoded.
 *
 * @param {!Object} object Объект кодирования.
 * @param {!Array.<string>=} opt_path Путь к элементарной единице данных.
 * @return {!Array.<string>} Массив элементарных данных составляющих объект.
 */
util.tokenizeUrlData = function(object, opt_path) {};


/**
 * @param {string} data Закодированный объект.
 * @return {*} Раскодированный объект.
 */
util.decodeFormData = function(data) {};


/**
 * @param {string} token Имя элементарного узла данных.
 * @return {!Array.<string>} Массив строк пути к узлу.
 */
util.parseUrlPathToken = function(token) {};


/**
 * @param {string} name Имя переменной.
 * @param {string} value Значение.
 * @param {number=} opt_time Время хранения.
 */
util.setCookie = function(name, value, opt_time) {};


/**
 * @param {string} name Имя переменной.
 * @return {string} Значение переменной.
 */
util.getCookie = function(name) {};


/**
 * @param {string} name Имя переменной.
 */
util.removeCookie = function(name) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * @constructor
 * @param {!Object} data Исходные данные.
 */
util.SafeObject = function(data) {};


/**
 * @return {!Object} Исходные данные.
 */
util.SafeObject.prototype.getCore = function() {};


/**
 * @param {...(string|number)} var_keys Путь к значению.
 * @return {string|number|boolean|Object} Данные.
 */
util.SafeObject.prototype.get = function(var_keys) {};


/**
 * @param {string|number|boolean|Object} value Данные.
 * @param {...(string|number)} var_keys Путь к значению.
 */
util.SafeObject.prototype.set = function(value, var_keys) {};


/**
 * @param {!Array.<(string|number)>} path Путь к значению.
 * @return {string|number|boolean|Object} Данные.
 */
util.SafeObject.prototype.getByPath = function(path) {};


/**
 * @param {string|number|boolean|Object} value Данные.
 * @param {!Array.<(string|number)>} path Путь к значению.
 */
util.SafeObject.prototype.setByPath = function(value, path) {};

/**
 * util FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * Установка движка поиска элементов с помощью CSS-селекторов.
 *
 * Объект установленный с помощью этой функции используется во многих функциях
 * работающих с DOM-моделью.
 *
 * Интерфейс устанавливаемого объекта должен соответсвовать внешнему интерфейсу
 * класса Sizzle.
 *
 * В случае если движок не установлен, методы, которые его используют возвратят
 * пустой результат при вызове.
 *
 * @see <a href="http://sizzlejs.com">Sizzle</a>.
 * @param {*} engine Движок CSS-селекторов.
 */
util.dom.setSelectorEngine = function(engine) {};


/**
 * Поиск элементов с помощью CSS-селектора в определенном контексте.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        найденные элементы.
 * @param {Node=} opt_context Контекст поиска - DOM-элемент в котором должен
 *        производиться поиск элементов.
 * @return {!Array.<!Node>} Массив найденных элементов.
 */
util.dom.select = function(selector, opt_context) {};


/**
 * Поиск единственного элемента соответсующего CSS-селектору.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        найденный элемент.
 * @param {Node=} opt_context Контекст поиска - DOM-элемент в котором должен
 *        производиться поиск элемента.
 * @return {Node} Найденный элемент.
 */
util.dom.selectOne = function(selector, opt_context) {};


/**
 * Фильтрация набора элементов с условием соответствия CSS-селектору.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        элементы.
 * @param {!Array.<Node>} elements Массив элементов, которые необходимо
 *        отфильтровать.
 * @return {!Array.<Node>} Отфильтрованный массив элементов.
 */
util.dom.matches = function(selector, elements) {};


/**
 * Проверка соответствия элемента CSS-селектору.
 *
 * @param {!Node} element DOM-элемент соответствие которого нужно проверить.
 * @param {string} selector CSS-селектор которому должен соответсвовать
 *        элемент.
 * @return {boolean} Результат проверки.
 */
util.dom.matchesSelector = function(element, selector) {};


/**
 * @see util.dom.setSelectorEngine
 */
util.dom.__selectorEngine = null;


/**
 * Оповещение слушателей о событии DOM-элемента типа <code>type</code>.
 *
 * @see util.dom.addEventListener
 * @see util.dom.removeEventListener
 * @param {!Node|!Window} element DOM-элемент о событии которого необходимо
 *        оповестить.
 * @param {string} type Тип события.
 * @return {boolean} Успех результата оповещения.
 */
util.dom.dispatchEvent = function(element, type) {};


/**
 * Добавление обработчика события DOM-елемента.
 *
 * Все обработчик событий вызываются в контексте элемента, оповещение о событии
 * которого произошло.
 *
 * @see util.dom.dispatchEvent
 * @param {!Node|!Window} element DOM-элемент, событие которого нужно
 *    обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.addEventListener = function(element, type, handler) {};


/**
 * Удаление обработчика события DOM-элемента.
 *
 * @param {!Node|!Window} element DOM-элемент, обработчик события которого нужно
 *        удалить.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.removeEventListener = function(element, type, handler) {};


/**
 * Добавление единовременного обработчика события.
 *
 * После первого вызова обработчик события удаляется.
 *
 * @param {!Node} element DOM-элемент, событие которого нужно обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.addOneEventListener = function(element, type, handler) {};


/**
 * Удаление единовременного обработчика события.
 *
 * @see util.dom.addOneEventListener
 * @param {!Node} element DOM-элемент, единовременный обработчик события
 *        которого нужно удалить.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.removeOneEventListener = function(element, type, handler) {};


/**
 * Установка обработчика событий дочерних элементов выбранного DOM-элемента.
 *
 * Данный обработчик возможно использовать лишь для тех событий, для которых
 * возможен баблинг.
 *
 * Для указания дочерних элементов, события которых необходимо отлавливать
 * используется CSS-селектор. В случае если выбранный DOM-элемент удовлетворяет
 * селектору дочерних элементов обработчик не срабатывает.
 *
 * @see util.dom.getParentMatches
 * @param {!Node} element DOM-элемент, событие дочерних элементов которого
 *        нужно обрабатывать.
 * @param {?string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.addChildEventListener = function(element, selector, type, handler) {};


/**
 * @param {!Node} element DOM-элемент, событие дочерних элементов которого
 *        нужно обрабатывать.
 * @param {string} selector CSS-селектор дочерних элементов.
 * @param {!function(Event)} handler Функция-обработчик события.
 * @return {} Созданный обработчик события.
 */
util.dom.__createChildListener = function(element, selector, handler) {};


/**
 * Удаление обработчика событий дочерних элементов выбранного DOM-элемента.
 *
 * @see util.dom.addChildEventListener
 * @param {!Node} element DOM-элемент, обработчик события дочерних элементов
 *        которого нужно удалить.
 * @param {?string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.removeChildEventListener = function(element, selector, type, handler) {};


/**
 * Добавление обработчика нестандартного события в Internet Explorer.
 *
 * В качестве вспомогательного события, данный метод использует событие
 * <code>'onhelp'</code>.
 *
 * @see util.dom.__dispatchCustomIEEvent
 * @param {!Node|!Window} element DOM-елемент, событие которого нужно
 *    обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
util.dom.__addCustomIEListener = function(element, type, handler) {};


/**
 * Удаление нестандартного события в Internet Explorer.
 *
 * @see util.dom.__addCustomIEListener
 * @param {!Node|!Window} element DOM-елемент, слушатель события которого нужно
 *    удалить.
 * @param {string} type Тип удаляемого события.
 * @param {!function(Event)} handler Удаляемая функция-обработчик события.
 */
util.dom.__removeCustomIEListener = function(element, type, handler) {};


/**
 * Оповещение слушателей нестандартного события в Internet Explorer.
 *
 * Также как и функция <code>util.dom.__addCustomIEListener()</code> использует
 * в качестве вспомогательного событие <code>'onhelp'/code>.
 *
 * @see util.dom.__addCustomIEListener
 * @param {!Node|!Window} element DOM-елемент, событие которого нужно
 *    обрабатывать.
 * @param {!Event} event Объект события стандартной событийной модели браузера.
 * @param {string} type Тип не стандартного события.
 * @return {boolean} Успех оповещения о событии.
 */
util.dom.__dispatchCustomIEEvent = function(element, event, type) {};


/**
 * @type {number}
 */
util.dom.__lastElementId = 0;


/**
 * Кросс-браузерная обертка остановки дествия события по-умолчанию.
 *
 * @param {Event} event Объект DOM-события.
 */
util.dom.preventDefault = function(event) {};


/**
 * Кросс-браузерная обертка остановки распространения события.
 *
 * @param {Event} event Объект DOM-события.
 */
util.dom.stopPropagation = function(event) {};


/**
 * Взятие ближайшего родителя DOM-элемента соответсвующего выбранному
 * CSS-селектору.
 *
 * @see util.dom.matches
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {string} selector CSS-селектор которому должен соответсовать
 *        родительский элемент.
 * @param {Node=} opt_context DOM-элемент ограничивающий поиск родителя.
 * @return {Node} Hайденный родительский элемент или <code>null</code>.
 */
util.dom.getParentMatches = function(element, selector, opt_context) {};


/**
 * Взятие ближайшего родителя DOM-элемента который имеет выбранный CSS-класс.
 *
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {string} className Название CSS-класса родителя с которым необходимо
 *        найти.
 * @param {Node=} opt_context DOM-элемент ограничивающий поиск родителя.
 * @return {Node} Hайденный родительский элемент или <code>null</code>.
 */
util.dom.getParentWithClass = function(element, className, opt_context) {};


/**
 * Поиск элементов с указанным CSS-классом, в указанном контексте.
 *
 * @param {string} className Название CSS-класса.
 * @param {!Node=} opt_element DOM-элемент в котором необходимо провести поиск.
 * @return {!Array.<!Node>} Массив  найденных элементов.
 */
util.dom.getElementsByClassName = function(className, opt_element) {};


/**
 * Проверка наличия CSS-класса элемента.
 *
 * @param {!Node} element DOM-элемент наличие класса которого нужно проверить.
 * @param {string} className Название CSS-класса.
 * @return {boolean} Результат проверки.
 */
util.dom.hasClass = function(element, className) {};


/**
 * Добавление CSS-класса элементу.
 *
 * В случае наличия класса у элемента ничего не происходит.
 *
 * @param {!Node} element DOM-элемент класс которому нужно добавить.
 * @param {string} className CSS-класс который нужно добавить.
 */
util.dom.addClass = function(element, className) {};


/**
 * Удаление CSS-класса у элемента.
 *
 * @param {!Node} element DOM-элемент класс готорого нужно удалить.
 * @param {string} className CSS-класс который нужно удалить.
 */
util.dom.removeClass = function(element, className) {};


/**
 * Установка наличия CSS-класса у DOM-элемента.
 *
 * @param {!Node} element DOM-элемент наличие CSS-класса которого необходимо
 *        установить.
 * @param {string} className CSS-класс наличие которого необходимо установить.
 * @param {boolean} isExist Флаг наличия CSS-класса.
 */
util.dom.setClassExist = function(element, className, isExist) {};


/**
 * Извлечение данных DOM-элемента установленных в аттрибутах с префиксом
 * <code>data-</code>.
 *
 * Результатом извлечения является хеш-таблица в которой ключами являются имена
 * аттрибутов без указанного префикса (Поу молчанию <code>data-</code>).
 *
 * Например, для элемента
 * <code>
 *     <p data-name="Paragraph" data-some-value="23"></p>
 * </code>
 * извлеченные данные будут иметь вид:
 * <code>
 *     { 'name': 'Paragraph', 'some-value': '23' }
 * </code>
 *
 * @param {!Node} element DOM-элемент, данные которого необходимо извлечь.
 * @param {string=} opt_prefix Префикс аттрибутов.
 * @return {!Object.<string, string>} Таблица данных элемента.
 */
util.dom.getAttributesData = function(element, opt_prefix) {};


/**
 * Создание экземпряра класса DocumentFragment cожержащий указанный HTML
 * контент.
 *
 * @param {string} html Строка HTML-верстки контента.
 * @return {DocumentFragment} Экземпляр класса DocumentFragment.
 */
util.dom.createFragment = function(html) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @namespace
 */
var events = {};


/**
 * Версия библиотеки.
 *
 * @const
 * @type {string}
 */
events.VERSION = '0.0.1';

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Класс базового события событийной модели объектов реализующих интерфейс
 * <code>events.IEventDispatcher</code>.
 *
 * @see events.IEventDispatcher
 * @see events.EventDispatcher
 * @constructor
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {boolean=} opt_isBubbling Флаг использования баблинга.
 */
events.Event = function(target, type, opt_isBubbling) {};


/**
 * Возврвщение объекта, с которым произошло событие.
 *
 * @return {!events.IEventDispatcher} Объект с которым произошло событие.
 */
events.Event.prototype.getTarget = function() {};


/**
 * Возвращение типа события.
 *
 * @return {string} Тип события.
 */
events.Event.prototype.getType = function() {};


/**
 * Используется ли баблинг для данного события.
 *
 * @return {boolean} Флаг использования баблинга.
 */
events.Event.prototype.isBubbling = function() {};


/**
 * Отмена обработки события по-умолчанию.
 */
events.Event.prototype.preventDefault = function() {};


/**
 * Отменена ли обработка события по-умолчанию.
 *
 * @return {boolean} Флаг отмены обработки по-умолчанию.
 */
events.Event.prototype.isDefaultPrevented = function() {};


/**
 * Полная остановка обработки события.
 *
 * Полная остановка означает, что ни один обработчик данного события не будет
 * вызван.
 */
events.Event.prototype.stopImmediatePropagation = function() {};


/**
 * Остановлена ли полностью обработка события.
 *
 * @return {boolean} Флаг полной остановки обработки события.
 */
events.Event.prototype.isImmediatePropagationStopped = function() {};


/**
 * Остановка баблинга события.
 *
 * Обработчики находящиеся выше по иерархии растпростанения вызваны не будут.
 */
events.Event.prototype.stopPropagation = function() {};


/**
 * Остановлен ли баблинг события.
 *
 * @return {boolean} Флаг остановки баблинга.
 */
events.Event.prototype.isPropagationStopped = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Основной интерфейс классов генерирующих события и предоставляющих возможность
 * их обработки.
 *
 * @see events.Event
 * @see events.EventDispatcher
 * @interface
 */
events.IEventDispatcher = function() {};


/**
 * Оповещение слушателей о наступлении события.
 *
 * @see events.Event#preventDefault
 * @param {!events.Event|string} event Событие, о котором необходимо
 *        оповестить. В качестве данного аргумента может выступать либо объект
 *        события, либо тип события. В случае если передан тип события объект
 *        события должен быть создан автоматически.
 * @param {*=} opt_data Сопуствующие событию данные.
 * @return {boolean} Флаг отсутствия отмены обрабтки по-умолчанию.
 */
events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {};


/**
 * Добавление обработчика события.
 *
 * Обработчиком события должна быть функция принимающая в качестве аргументов
 * объект события и сопуствующие ему данные. В случае, если сопутствующие данные
 * не были заданы в качестве данных передается <code>null</code>.
 *
 * По-умолчанию функция обработчик будет вызвана в контексте объекта который
 * оповестил о событии.
 *
 * @see events.IEventDispatcher#dispatch
 * @param {string} type Тип события который необходимо обрабатывать.
 * @param {!function(events.Event, *=)} listener Функция-обработчик
 *        события.
 */
events.IEventDispatcher.prototype.addEventListener =
    function(type, listener) {};


/**
 * Удаление слушателя события.
 *
 * @see events.IEventDispatcher#addEventListener
 * @param {string} type Тип события который не нужно больше обрабатывать.
 * @param {!function(events.Event, *=)} listener Функция-обработчик.
 */
events.IEventDispatcher.prototype.removeEventListener =
    function(type, listener) {};


/**
 * Проверка наличия обработчика события определенного типа.
 *
 * @param {string} type Тип события который, наличие обработчика которого
 *        следует определить.
 * @param {!function(events.Event, *=)} listener Функция-обработчик.
 * @return {} Результат проверки наличия обработчика.
 */
events.IEventDispatcher.prototype.hasEventListener =
    function(type, listener) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Базовая реализация интерфейса <code>events.IEventDispatcher</code>.
 *
 * При необходимости добавить возможность генерировать события для любого
 * класса достаточно сделать его наследником данного класса. В случае, когда
 * наследование не возможно, на данный класс можно делегировать реализацию
 * <code>events.IEventDispatcher</code>.
 *
 * @constructor
 * @implements {events.IEventDispatcher}
 * @param {!events.IEventDispatcher=} opt_propagationParent Родительский
 *        объект иерархии распростанения (баблинга).
 */
events.EventDispatcher = function(opt_propagationParent) {};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.dispatch = function(event, opt_data) {};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.addEventListener = function(type, listener) {};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.removeEventListener =
    function(type, listener) {};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.hasEventListener = function(type, listener) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @namespace
 */
var net = {};


/**
 * @namespace
 */
net.factory = {};


/**
 * @type {boolean}
 */
net.CAN_USE_CORS = (window['XMLHttpRequest'] !== undefined) &&
    ((new XMLHttpRequest())['withCredentials'] !== undefined);


/**
 * @param {string=} opt_hostOrUrl Хост либо адрес.
 * @param {boolean=} opt_isSecure Флаг защищенности соединенияю.
 * @param {number=} opt_port Порт.
 * @param {boolean=} opt_needResult Флаг необходимости получения результата
 *    запроса. По-умочанию результат считается необходимым.
 * @return {!net.Request} Объект запроса.
 */
net.createRequest =
    function(opt_hostOrUrl, opt_isSecure, opt_port, opt_needResult) {};


/**
 * @param {string=} opt_hostOrUrl Хост либо адрес.
 * @param {boolean=} opt_isSecure Флаг защищенности соединенияю.
 * @param {number=} opt_port Порт.
 * @return {WebSocket} Объект соединения, в том случае, если его можно создать.
 */
net.createSocket = function(opt_hostOrUrl, opt_isSecure, opt_port) {};


/**
 * @param {string=} opt_hostOrUrl Хост либо адрес.
 * @param {boolean=} opt_isSecure Флаг защищенности соединенияю.
 * @param {number=} opt_port Порт.
 * @param {string=} opt_protocol Протокол ws or http.
 * @return {string} Скомпонованная строка адреса.
 */
net.makeUrl = function(opt_hostOrUrl, opt_isSecure, opt_port, opt_protocol) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * Метод HTTP-запроса.
 *
 * @enum {string}
 */
net.RequestMethod = {
  GET: 'GET',
  POST: 'POST'
};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * События завершения HTTP-запроса к серверу.
 *
 * @constructor
 * @extends {events.Event}
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {number} responseStatus HTTP-статус ответа.
 */
net.RequestEvent = function(target, type, responseStatus) {};

util.inherits(net.RequestEvent, events.Event);


/**
 * @type {string}
 */
net.RequestEvent.COMPLETE = 'complete';


/**
 * @return {number} HTTP-статус ответа.
 */
net.RequestEvent.prototype.getResponseStatus = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Абстрактный класс HTTP-запроса.
 *
 * @constructor
 * @extends {events.EventDispatcher}
 *
 * @event {net.RequestEvent} complete Событие завершения обработки запроса.
 *    Сопутствующими данными события может являтся строка ответа, в том случае
 *    если  запрос может ее обработать.
 *
 * @param {string} url Базовый адрес запроса.
 */
net.Request = function(url) {};

util.inherits(net.Request, events.EventDispatcher);


/**
 * @return {string} Базовый адрес запроса.
 */
net.Request.prototype.getUrl = function() {};


/**
 * @param {!net.RequestMethod} method Тип метода запроса.
 */
net.Request.prototype.setMethod = function(method) {};


/**
 * @return {!net.RequestMethod} Тип метода запроса.
 */
net.Request.prototype.getMethod = function() {};


/**
 * Отсылка запроса.
 *
 * При отсылке, данные помещаются в очередь для отправки.
 *
 * @param {string} data Данные запроса.
 * @param {string=} opt_path Добавочный адрес для отсылки данных. По-умолчанию
 *    пустая строка.
 */
net.Request.prototype.send = function(data, opt_path) {};


/**
 * Очищение очереди отправки.
 */
net.Request.prototype.cancel = function() {};


/**
 * Вынужденное завершение обработки запроса.
 *
 * Статус ответа оборванного запроса будет равен <code>0</code>.
 */
net.Request.prototype.abort = function() {};


/**
 * Проверка возможности отсылки запроса.
 *
 * @return {boolean} Результат проверки.
 */
net.Request.prototype._canSend = function() {};


/**
 * Конкретная реализация отправки запроса.
 *
 * @param {string} data Данные запроса.
 * @param {string} path Добавочный адрес для отсылки данных.
 */
net.Request.prototype._doSend = function(data, path) {};


/**
 * Обработчка результата.
 *
 * @param {number} status Статус реузльтата.
 * @param {string=} opt_data Данные результата.
 */
net.Request.prototype._handleResult = function(status, opt_data) {};


/**
 * Очищение результатов запроса.
 */
net.Request.prototype._reset = function() {};


/**
 * Отправка следующего запроса.
 */
net.Request.prototype.__flush = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Релизация HTTP-запроса с использованием <code>XMLHttpRequest</code>.
 *
 * @see net.Request
 * @constructor
 * @extends {net.Request}
 * @param {string} url Базовый адрес запроса.
 */
net.XhrRequest = function(url) {};

util.inherits(net.XhrRequest, net.Request);


/**
 * @inheritDoc
 */
net.XhrRequest.prototype._canSend = function() {};


/**
 * @inheritDoc
 */
net.XhrRequest.prototype._doSend = function(data, path) {};


/**
 * Уничтожение текущего объекта запроса.
 */
net.XhrRequest.prototype._reset = function() {};


/**
 * Создание экземпляра объекта <code>XMLHttpRequest</code>.
 *
 * @return {XMLHttpRequest} Объект запроса.
 */
net.XhrRequest.prototype.__createRequest = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * @constructor
 * @extends {net.Request}
 * @param {string} url Базовый адрес запроса.
 */
net.JsonpRequest = function(url) {};

util.inherits(net.JsonpRequest, net.Request);


/**
 * @type {number}
 */
net.JsonpRequest.__lastId = 0;


/**
 * @type {number}
 */
net.JsonpRequest.ERROR_TIMEOUT = 30000;


/**
 * @type {string}
 */
net.JsonpRequest.CALLBACK_TABLE = '__jsonp';


/**
 * @inheritDoc
 */
net.JsonpRequest.prototype._canSend = function() {};


/**
 * @inheritDoc
 */
net.JsonpRequest.prototype._doSend = function(data, path) {};


/**
 * @inheritDoc
 */
net.JsonpRequest.prototype._reset = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * @constructor
 * @extends {net.Request}
 * @param {string} url Базовый адрес запроса.
 */
net.FormRequest = function(url) {};

util.inherits(net.FormRequest, net.Request);


/**
 * @type {number}
 */
net.FormRequest.__lastId = 0;


/**
 * @type {string}
 */
net.FormRequest.FRAME_PREFIX = 'fr_';


/**
 * @inheritDoc
 */
net.FormRequest.prototype._canSend = function() {};


/**
 * @inheritDoc
 */
net.FormRequest.prototype._doSend = function(path, opt_data) {};


/**
 * @inheritDoc
 */
net.FormRequest.prototype._reset = function() {};


/**
 * Создание элемента данных формы.
 *
 * @param {string} urlToken Имя и данные разделенные знаком `=`.
 * @return {!Node} Созданный элемент формы.
 */
net.FormRequest.prototype.__createInput = function(urlToken) {};


/**
 * Создание фрейма для запроса.
 *
 * @return {!Node} Созданный фрейм.
 */
net.FormRequest.prototype.__createFrame = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Интерфейс фабрики HTTP-запросов.
 *
 * @interface
 */
net.factory.IRequestFactory = function() {};


/**
 * Создание HTTP-запроса.
 *
 * @param {boolean=} opt_needResult Флаг необходимости получения результата
 *    запроса. По-умочанию результат считается необходимым.
 * @return {!net.Request} Объект запроса.
 */
net.factory.IRequestFactory.prototype.createRequest =
    function(opt_needResult) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Интерфейс фабрики постоянных соединенйи с сервером.
 *
 * @interface
 */
net.factory.ISocketFactory = function() {};


/**
 * Создание постоянного соединения.
 *
 * @return {WebSocket} Объект соединения.
 */
net.factory.ISocketFactory.prototype.createSocket = function() {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Стандартная фабрика HTTP-запросов.
 *
 * @constructor
 * @implements {net.factory.IRequestFactory}
 * @param {string=} opt_hostOrUrl Хост либо адрес.
 * @param {boolean=} opt_isSecure Флаг защищенности соединенияю.
 * @param {number=} opt_port Порт.
 */
net.factory.RequestFactory = function(opt_hostOrUrl, opt_isSecure, opt_port) {};


/**
 * @inheritDoc
 */
net.factory.RequestFactory.prototype.createRequest = function(opt_needResult) {};

/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Стандартная фабрика постоянных соединенйи с сервером.
 *
 * @constructor
 * @implements {net.factory.ISocketFactory}
 * @param {string=} opt_hostOrUrl Хост либо адрес.
 * @param {boolean=} opt_isSecure Флаг защищенности соединенияю.
 * @param {number=} opt_port Порт.
 */
net.factory.SocketFactory = function(opt_hostOrUrl, opt_isSecure, opt_port) {};


/**
 * @inheritDoc
 */
net.factory.SocketFactory.prototype.createSocket = function() {};

