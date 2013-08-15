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
 * @type {string}
 */
util.VERSION = '0.0.1';

/**
 * @namespace
 */
util.dom = {};

/**
 * Наследование типа.
 *
 * Передает прототип родительского класса дочернему классу без ссылки на
 * него, сохраняя конструктор.
 *
 * @param {!Object} Class Класс который должен наследовать тип.
 * @param {!Object} Parent Родительский класс.
 */

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
 * @param {string=} opt_separator Разделитель.
 * @return {string} Перекодированный в строку объект.
 */
util.encodeFormData = function(object, opt_separator) {};

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
 * @param {string} string
 * @param {boolean=} opt_forUrl
 * @return {string}
 */
util.encodeBase64 = function(string, opt_forUrl) {};

/**
 * @param {string} string
 * @param {boolean=} opt_forUrl
 * @return {string}
 */
util.decodeBase64 = function(string, opt_forUrl) {};

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
 * @param {string} pattern Шаблон regexp.
 * @return {!Array.<string>} Набор кукисов.
 */
util.getCookies = function(pattern) {};

/**
 * @param {string} pattern Cookies pattern.
 * @return {!Object} Cookies object.
 */
util.getCookiesValues = function(pattern) {};

/**
 * @param {string} name Имя переменной.
 */
util.removeCookie = function(name) {};

/**
 * @return {number} Ширина экрана.
 */
util.getWindowWidth = function() {};

/**
 * @return {number} Высота экрана.
 */
util.getWindowHeight = function() {};

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
 * @type {!Node}
 */
util.dom.DUMMY_NODE = document;

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
 * @param {string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {function(!Event, !Node)} handler Функция-обработчик события.
 */
util.dom.addChildEventListener = function(element, selector, type, handler) {};

/**
 * Удаление обработчика событий дочерних элементов выбранного DOM-элемента.
 *
 * @see util.dom.addChildEventListener
 * @param {!Node} element DOM-элемент, обработчик события дочерних элементов
 *        которого нужно удалить.
 * @param {string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {function(!Event, !Node)} handler Функция-обработчик события.
 */
util.dom.removeChildEventListener = function(element, selector, type, handler) {};

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
 * @param {!Event} event Объект DOM-события.
 * @return {Node} Узел с которым произошло событие.
 */
util.dom.getEventTarget = function(event) {};

/**
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {!Node} parent Родителя которого необходимо найти.
 * @return {boolean} Есть ли такой родитель.
 */
util.dom.hasParent = function(element, parent) {};

/**
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {Node=} opt_context DOM-элемент ограничивающий поиск родителя.
 * @return {!Array.<!Node>} Есть ли такой родитель.
 */
util.dom.getParents = function(element, opt_context) {};

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
 * Поиск первого элемента с указанным CSS-классом, в указанном контексте.
 *
 * @param {string} className Название CSS-класса.
 * @param {!Node=} opt_element DOM-элемент в котором необходимо провести поиск.
 * @return {Node} Найденный элемент.
 */
util.dom.getElementByClassName = function(className, opt_element) {};

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
 * @param {!function(!events.Event, *=)} listener Функция-обработчик
 *        события.
 */
events.IEventDispatcher.prototype.addEventListener =
    function(type, listener) {};

/**
 * Удаление слушателя события.
 *
 * @see events.IEventDispatcher#addEventListener
 * @param {string} type Тип события который не нужно больше обрабатывать.
 * @param {!function(!events.Event, *=)} listener Функция-обработчик.
 */
events.IEventDispatcher.prototype.removeEventListener =
    function(type, listener) {};

/**
 * Проверка наличия обработчика события определенного типа.
 *
 * @param {string} type Тип события который, наличие обработчика которого
 *        следует определить.
 * @param {!function(!events.Event, *=)} listener Функция-обработчик.
 * @return {boolean} Результат проверки наличия обработчика.
 */
events.IEventDispatcher.prototype.hasEventListener =
    function(type, listener) {};

/**
 * Удаление всех слушателя события.
 *
 * @see events.IEventDispatcher#addEventListener
 * @param {string=} opt_type Тип события который не нужно больше обрабатывать.
 */
events.IEventDispatcher.prototype.removeAllEventListeners =
    function(opt_type) {};

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
 * @inheritDoc
 */
events.EventDispatcher.prototype.removeAllEventListeners = function(opt_type) {};

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
 * @type {boolean}
 */
net.CAN_USE_XDM = window['XDomainRequest'] !== undefined;

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
 * @param {boolean=} opt_useCors Использовать ли кроссдоменные куки.
 */
net.XhrRequest = function(url, opt_useCors) {};

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
 * Релизация HTTP-запроса с использованием <code>XDomainRequest</code>.
 *
 * @see net.Request
 * @constructor
 * @extends {net.Request}
 * @param {string} url Базовый адрес запроса.
 */
net.XdmRequest = function(url) {};

/**
 * @inheritDoc
 */
net.XdmRequest.prototype._canSend = function() {};

/**
 * @inheritDoc
 */
net.XdmRequest.prototype._doSend = function(data, path) {};

/**
 * @inheritDoc
 */
net.XdmRequest.prototype._reset = function() {};

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

/**
 * @inheritDoc
 */
net.FormRequest.prototype._canSend = function() {};

/**
 * @inheritDoc
 */
net.FormRequest.prototype._doSend = function(data, path) {};

/**
 * @inheritDoc
 */
net.FormRequest.prototype._reset = function() {};

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
var tt = {};

/**
 * Версия библиотеки.
 *
 * @type {string}
 */
tt.VERSION = '0.1.0';

/**
 * @namespace
 */
tt.rules = {};

/**
 * @namespace
 */
tt.data = {};

/**
 * @namespace
 */
tt.view = {};

/**
 * @namespace
 */
tt.view.helpers = {};

/**
 * @param {!Node} target Целевой узел.
 * @param {!Object.<string, !Object>} sign Разметка шаблона.
 * @return {!tt.Template} Объект шаблона.
 */
tt.createTemplate = function(target, sign) {};

/**
 * @param {!Node} target Целевой узел.
 * @param {!Array.<!tt.TemplateRule>} rules Правила трансформации шаблона.
 * @return {!tt.Template} Объект шаблона.
 */
tt.createTemplateFromRules = function(target, rules) {};

/**
 * @param {!Object.<string, !Object>} sign Разметка шаблона.
 * @return {!Array.<!tt.TemplateRule>}  Правила трансформации шаблона.
 */
tt.createRules = function(sign) {};

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
 * Класс шаблона.
 *
 * @constructor
 * @param {!Node} target Целевой элемент шаблона.
 * @param {!Array.<!tt.TemplateUnit>} units Узлы шаблонизатора.
 */
tt.Template = function(target, units) {};

/**
 * @return {!Node} Целевой элемент шаблона.
 */
tt.Template.prototype.getTarget = function() {};

/**
 * @param {*} data Данные для отображения.
 * @param {!Array.<!Node>=} opt_createdNodes Созданные DOM-элеметны.
 * @param {!Array.<!Node>=} opt_removedNodes Удаленные DOM-элеметны.
 */
tt.Template.prototype.processData =
    function(data, opt_createdNodes, opt_removedNodes) {};

/**
 * @param {!tt.data.DataNode} dataNode Узел данных.
 * @param {!Array.<!Node>=} opt_createdNodes Созданные DOM-элеметны.
 * @param {!Array.<!Node>=} opt_removedNodes Удаленные DOM-элеметны.
 */
tt.Template.prototype.applyData =
    function(dataNode, opt_createdNodes, opt_removedNodes) {};

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
 * @param {!tt.view.ITemplateView} view Объект управления отображением.
 * @param {!tt.data.PathEvaluator} pathEvaluator Правило отображения данных.
 */
tt.TemplateUnit = function(view, pathEvaluator) {};

/**
 * @param {!tt.data.DataNode} dataNode Узел данных.
 * @param {!Array.<!Node>=} opt_createdNodes Созданные DOM-элеметны.
 * @param {!Array.<!Node>=} opt_removedNodes Удаленные DOM-элеметны.
 */
tt.TemplateUnit.prototype.applyData =
    function(dataNode, opt_createdNodes, opt_removedNodes) {};

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
 * Базовый класс правил элемента шаблона.
 *
 * @constructor
 * @param {string} type Тип правила.
 * @param {string} className Имя CSS-класса целевых DOM-элементов.
 * @param {string} dataPath Путь к данным в для отображения.
 * @param {!tt.view.helpers.ITemplateViewHelper} viewHelper Правила отображения.
 */
tt.TemplateRule = function(type, className, dataPath, viewHelper) {};

/**
 * @param {!Node} parent Родительский элемент отображения.
 * @return {!Array.<!tt.TemplateUnit>} Созданные элементы трансформации.
 */
tt.TemplateRule.prototype.createTemplateUnits = function(parent) {};

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
 * Класс объекта взятия данных по выбранному пути.
 *
 * @constructor
 * @param {string} path Путь к данным.
 */
tt.data.PathEvaluator = function(path) {};

/**
 * Выборка данных из узла по установленному пути.
 *
 * @param {!tt.data.DataNode} node Узел данных для выборки.
 * @return {!tt.data.DataNode} Узел-результат выборки.
 */
tt.data.PathEvaluator.prototype.evaluate = function(node) {};

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
 * Узел парсинга объекта данных передаваемого шаблону.
 *
 * @constructor
 * @param {*} value Данные узла.
 * @param {!tt.data.DataNode=} opt_parent Родительский узел данных.
 * @param {(number|string)=} opt_key Ключ узла данных в родительском.
 */
tt.data.DataNode = function(value, opt_parent, opt_key) {};

/**
 * Родительский узел данных.
 *
 * @return {!tt.data.DataNode} Родительский узел данных.
 */
tt.data.DataNode.prototype.getParent = function() {};

/**
 * Получение узла-ключа данных текущего узла.
 *
 * @return {!tt.data.DataNode} Узел-ключ данных текущего узла.
 */
tt.data.DataNode.prototype.getKey = function() {};

/**
 * @return {!tt.data.DataNode} Корневой узел данных.
 */
tt.data.DataNode.prototype.getRoot = function() {};

/**
 * Получение значений узла данных.
 *
 * @return {*} Значение узла данных.
 */
tt.data.DataNode.prototype.getValue = function() {};

/**
 * Создание и возвращение дочернего узда данных по ключу.
 *
 * @param {(number|string)} key Ключ дочернего узла.
 * @return {!tt.data.DataNode} Новый узел данных.
 */
tt.data.DataNode.prototype.growChild = function(key) {};

/**
 * Создание и возвращение дочернего узда данных.
 *
 * @return {!Array.<!tt.data.DataNode>} Массив узлов данных.
 */
tt.data.DataNode.prototype.growChildren = function() {};

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
 * @interface
 */
tt.view.helpers.ITemplateViewHelper = function() {};

/**
 * @param {!Node} element Объект отображения трансформации.
 * @return {!tt.view.ITemplateView} Объект проведения трансформации.
 */
tt.view.helpers.ITemplateViewHelper.prototype.createView = function(element) {};

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
 * @implements {tt.view.helpers.ITemplateViewHelper}
 */
tt.view.helpers.SimpleViewHelper = function() {};

/**
 * @inheritDoc
 */
tt.view.helpers.SimpleViewHelper.prototype.createView = function(element) {};

/**
 * @param {!Node} element Элемент.
 * @param {*} value Значение.
 */
tt.view.helpers.SimpleViewHelper.prototype.process =
    function(element, value) {};

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
 * @extends {tt.view.helpers.SimpleViewHelper}
 * @param {!Array.<string>} cases Список ожидаемых строковых значений.
 * @param {!Array.<string>} caseClasses Соответсвующие значениям классы.
 * @param {!Array.<!RegExp>} regExps Регулярные выражения.
 * @param {!Array.<string>} regExpsClasses Соответсвующие регулярным выражениям
 *    классы.
 */
tt.view.helpers.CaseViewHelper =
    function(cases, caseClasses, regExps, regExpsClasses) {};

/**
 * @param {!Node} element Элемент.
 * @param {*} value Значение.
 */
tt.view.helpers.CaseViewHelper.prototype.process = function(element, value) {};

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
 * @extends {tt.view.helpers.SimpleViewHelper}
 * @param {!Array.<string>} pattern Шаблон отображения текста.
 */
tt.view.helpers.TextViewHelper = function(pattern) {};

/**
 * @param {!Node} element Элемент.
 * @param {*} value Значение.
 */
tt.view.helpers.TextViewHelper.prototype.process = function(element, value) {};

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
 * @extends {tt.view.helpers.SimpleViewHelper}
 * @param {string} name Имя аттрибута.
 * @param {!Array.<string>} pattern Шаблон отображения текста.
 */
tt.view.helpers.AttributeViewHelper = function(name, pattern) {};

/**
 * @inheritDoc
 */
tt.view.helpers.AttributeViewHelper.prototype.process =
    function(element, value) {};

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
 * @implements {tt.view.helpers.ITemplateViewHelper}
 * @param {!Node} itemRenderer Прототип элементов списка.
 * @param {!Array.<!tt.TemplateRule>} itemRules Шаблон элементов списка.
 * @param {string=} opt_keyPath Путь к ключу элемента.
 */
tt.view.helpers.ListViewHelper =
    function(itemRenderer, itemRules, opt_keyPath) {};

/**
 * @inheritDoc
 */
tt.view.helpers.ListViewHelper.prototype.createView = function(element) {};

/**
 * @param {!tt.data.DataNode} dataNode Узел данных.
 * @return {*} Ключ.
 */
tt.view.helpers.ListViewHelper.prototype.evaluateKey = function(dataNode) {};

/**
 * @param {!Node} parent Список.
 * @return {tt.Template} Созданный элемент списка.
 */
tt.view.helpers.ListViewHelper.prototype.createItem = function(parent) {};

/**
 * @param {!Node} parent Список.
 * @param {!tt.Template} item Элемент списка.
 */
tt.view.helpers.ListViewHelper.prototype.removeItem = function(parent, item) {};

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
 * Объекты, классы которых реализуют данный интерфейс, предназначены для
 * хранения состояния отображения.
 *
 * @interface
 */
tt.view.ITemplateView = function() {};

/**
 * @param {!tt.data.DataNode} dataNode Узел дерева данных.
 * @param {!Array.<!Node>=} opt_createdNodes Созданные DOM-элеметны.
 * @param {!Array.<!Node>=} opt_removedNodes Удаленные DOM-элеметны.
 */
tt.view.ITemplateView.prototype.applyTransformation =
    function(dataNode, opt_createdNodes, opt_removedNodes) {};

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
 * @implements {tt.view.ITemplateView}
 * @param {!Node} target Элемент отображения.
 * @param {!tt.view.helpers.SimpleViewHelper} helper Помошник отображения.
 */
tt.view.SimpleView = function(target, helper) {};

/**
 * @inheritDoc
 */
tt.view.SimpleView.prototype.applyTransformation = function(dataNode) {};

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
 * @implements {tt.view.ITemplateView}
 * @param {!Node} target Элемент отображения.
 * @param {!tt.view.helpers.ListViewHelper} helper Объект поддержки
 *    дополнительных настроек.
 */
tt.view.ListView = function(target, helper) {};

/**
 * @inheritDoc
 */
tt.view.ListView.prototype.applyTransformation =
    function(dataNode, opt_createdNodes, opt_removedNodes) {};

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
 * @type {string}
 */
tt.view.TEXT = 'text';

/**
 * @type {string}
 */
tt.view.ATTR = 'attr';

/**
 * @type {string}
 */
tt.view.CASE = 'case';

/**
 * @type {string}
 */
tt.view.LIST = 'list';

/**
 *
 * @param {string} type Тип объекта управления отображением.
 * @param {!Object} options Данные настроек.
 * @return {tt.view.helpers.ITemplateViewHelper} Объект настроек.
 */
tt.view.createViewHelper = function(type, options) {};

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
var rest = {};

/**
 * @type {string}
 */
rest.VERSION = '0.0.1';

/**
 * @param {!rest.IMethodFactory} factory Фабрика методов.
 */
rest.setMethodFactory = function(factory) {};

/**
 * @param {!net.factory.IRequestFactory} factory Фабрика запросов.
 */
rest.setRequestFactory = function(factory) {};

/**
 * @param {string} name Имя метода.
 * @return {!rest.IMethod} Объект вызова метода.
 */
rest.createMethod = function(name) {};

/**
 * @param {string} name Имя метода REST-API.
 * @param {!Object|!rest.MethodArgs} args Аргументы.
 * @param {function(string)=} opt_callback Обработчик результата выполнения.
 */
rest.call = function(name, args, opt_callback) {};

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
 * @interface
 */
rest.IMethod = function() {};

/**
 * @param {!Object|!rest.MethodArgs} args Аргументы.
 * @param {function(string)} callback Обработчик результата вызова.
 */
rest.IMethod.prototype.call = function(args, callback) {};

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
 * @interface
 */
rest.IMethodFactory = function() {};

/**
 * @param {string} name Имя метода.
 * @return {rest.IMethod} Объект вызова метода.
 */
rest.IMethodFactory.prototype.createMethod = function(name) {};

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
 * @implements {rest.IMethod}
 * @param {!net.factory.IRequestFactory} requestFactory Фабркиа запросов.
 * @param {string} path Путь запроса.
 */
rest.Method = function(requestFactory, path) {};

/**
 * @inheritDoc
 */
rest.Method.prototype.call = function(args, callback) {};

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
 */
rest.MethodArgs = function() {};

/**
 * @return {string}
 */
rest.MethodArgs.prototype.serialize = function() {};

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
var ui = {};

/**
 * @type {string}
 */
ui.VERSION = '0.0.1';

/**
 * @namespace
 */
ui.buttons = {};

/**
 * @namespace
 */
ui.forms = {};

/**
 * @namespace
 */
ui.templates = {};

/**
 * @namespace
 */
ui.lists = {};

/**
 * @param {string} selector Селектор-изолятор.
 */
ui.addIsolator = function(selector) {};

/**
 * @return {string} Идентфикатор.
 */
ui.getNextId = function() {};

/**
 * @param {!Node} body Тело документа.
 * @param {!ui.IWidgetFactory} factory Фабрика виджетов.
 */
ui.init = function(body, factory) {};

/**
 * @param {string} type Тип создаваемого виджета.
 * @param {!Node} target Целевой DOM-элемент.
 * @return {ui.Widget} Виджет.
 */
ui.createWidget = function(type, target) {};

/**
 * @param {string} type Тип виджетов.
 * @param {!ui.Widget} widget Виджет.
 */
ui.registerWidget = function(type, widget) {};

/**
 * @param {string} type Тип виджетов.
 * @param {!ui.Widget} widget Виджет.
 */
ui.terminateWidget = function(type, widget) {};

/**
 * @param {!Node} target Целефой узел.
 */
ui.terminateWidgetsAt = function(target) {};

/**
 * @param {!Node} target Целефой узел.
 * @return {string} Виджет.
 */
ui.getWidgetName = function(target) {};

/**
 * @param {!Node} target Целефой узел.
 * @return {!Array.<!ui.Widget>} Виджет.
 */
ui.getWidgetsAt = function(target) {};

/**
 * @param {!Node} target Целефой узел.
 * @return {number} Виджет.
 */
ui.getWidgetsCount = function(target) {};

/**
 * @param {string} type Тип виждета.
 * @param {!Node} target Целефой узел.
 * @return {ui.Widget} Виджет.
 */
ui.getWidgetAt = function(type, target) {};

/**
 * @param {!Node} target Целефой узел.
 * @return {ui.Container} Виджет.
 */
ui.getContainerAt = function(target) {};

/**
 * @param {!Node} target Узел DOM-дерева.
 * @return {ui.Container} Контейнер, которому он принадлежит.
 */
ui.getParentContainer = function(target) {};

/**
 * @param {string} type Тип создаваемого виджета.
 * @return {string} Селктор.
 */
ui.getTargetSelector = function(type) {};

/**
 * @param {string} type Тип создаваемого виджета.
 * @param {!Node} context Контекст поиска элементов.
 * @param {boolean} useContext Включаит ли элемент контекста в поиск.
 * @param {boolean} useIsolators Принимать ли во внимание классы изоляторы
 *    поиска.
 * @return {!Array.<!Node>} Массив узлов целевых для создания виджетов.
 */
ui.findWidgetTargets = function(type, context, useContext, useIsolators) {};

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
 * @interface
 */
ui.IWidgetFactory = function() {};

/**
 * @param {string} type Тип виджета.
 * @param {!Node} target Целевой DOM-элемент.
 * @return {ui.Widget} Виджет.
 */
ui.IWidgetFactory.prototype.createWidget = function(type, target) {};

/**
 * @param {string} type Тип виджета.
 * @return {string} Селектор.
 */
ui.IWidgetFactory.prototype.getTargetSelector = function(type) {};

/**
 * @return {string} Имя типа контейнера.
 */
ui.IWidgetFactory.prototype.getContainerType = function() {};

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
 * @name Виджет.
 *
 * @description Служит для обобщения функциональности объекта отображения.
 *
 * @constructor
 * @extends {events.EventDispatcher}
 *
 * @event {ui.WidgetEvent} init Событие инициализации виджета.
 * @event {ui.WidgetEvent} destroy Событие уничтожения виджета.
 *
 * @param {!Node} target Целевой DOM-элемент. В том случае, если у DOM-элемента
 * не задан идентификатор, то он задается уникальным на странице.
 */
ui.Widget = function(target) {};

/**
 * Получение целевого DOM-элемента виджета.
 *
 * @return {!Node} Целевой DOM-элемент.
 */
ui.Widget.prototype.getTarget = function() {};

/**
 * @return {string} Идентфикатор целевого DOM-элемента.
 */
ui.Widget.prototype.getTargetId = function() {};

/**
 * Получение имени виджета.
 *
 * Имя виджета устанавливается в аттрибуте целевого DOM-элемента
 * <code>data-name</code>.
 *
 * @return {string} Имя экземпляра.
 */
ui.Widget.prototype.getName = function() {};

/**
 * Инициализация виджета.
 */
ui.Widget.prototype.init = function() {};

/**
 * Уничтожение виджета.
 */
ui.Widget.prototype.destroy = function() {};

/**
 * Отключение работоспособности виджета.
 */
ui.Widget.prototype.disable = function() {};

/**
 * Включение работоспособности виджета.
 */
ui.Widget.prototype.enable = function() {};

/**
 * Проверка работоспособности виджета.
 *
 * @return {boolean} Результат проверки.
 */
ui.Widget.prototype.isEnabled = function() {};

/**
 * Выделение объекта отображения.
 */
ui.Widget.prototype.select = function() {};

/**
 * Снятие выделения с объекта.
 */
ui.Widget.prototype.deselect = function() {};

/**
 * @return {boolean} Результат проверки.
 */
ui.Widget.prototype.isSelected = function() {};

/**
 * Установка видимости.
 */
ui.Widget.prototype.show = function() {};

/**
 * Установка видимости.
 */
ui.Widget.prototype.hide = function() {};

/**
 * @return {boolean} Результат проверки.
 */
ui.Widget.prototype.isHidden = function() {};

/**
 * Переключение вивдимости.
 */
ui.Widget.prototype.toggle = function() {};

/**
 * Установка параметра настроек виджета.
 *
 * @param {string} name Имя параметра настроек.
 * @param {null|string|boolean|number} value Значение параметра.
 */
ui.Widget.prototype.setOption = function(name, value) {};

/**
 * Получение таблицы настроек виджета.
 *
 * @return {!Object.<string, string>} Таблица настроек.
 */
ui.Widget.prototype.getOptions = function() {};

/**
 * Получение параметра настроек виджета.
 *
 * @param {string} name Имя параметра настроек.
 * @return {string} Значение параметра.
 */
ui.Widget.prototype.getOption = function(name) {};

/**
 * Получение числового параметра настроек виджета.
 *
 * @param {string} name Имя параметра настроек.
 * @return {number} Строковое значение параметра.
 */
ui.Widget.prototype.getNumberOption = function(name) {};

/**
 * Получение булева параметра настроек виджета.
 *
 * @param {string} name Имя параметра настроек.
 * @return {boolean} Булево значение параметра.
 */
ui.Widget.prototype.getBooleanOption = function(name) {};

/**
 * Получение параметра настроек виджета в виде массива.
 *
 * Для получения массива строка значения аттрибута параметра разбивается
 * разделителем.
 *
 * @param {string} name Имя параметра настроек.
 * @param {(string|RegExp)=} opt_separator Разделитель строки. По-умолчанию
 *    разделителем является строка удовлетворяющая регулярное выражение
 *    вида: <code>\s*,\s*</code>.
 * @return {!Array.<string>} Массив разбитого значения параметра.
 */
ui.Widget.prototype.getArrayOption = function(name, opt_separator) {};

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
 * @extends {events.Event}
 * @param {!ui.Widget} widget Виджет, событие которого произошло.
 * @param {string} type Тип события.
 */
ui.WidgetEvent = function(widget, type) {};

/**
 * @type {string}
 */
ui.WidgetEvent.INIT = 'init';

/**
 * @type {string}
 */
ui.WidgetEvent.DESTROY = 'destroy';

/**
 * @return {!ui.Widget} Виджет, с которым произошло событие.
 */
ui.WidgetEvent.prototype.getWidget = function() {};

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
 */
ui.WidgetNode = function() {};

/**
 * @return {number} Количество зарегистрированных виджетов.
 */
ui.WidgetNode.prototype.getWidgetsCount = function() {};

/**
 * @param {string} type Тип виджета.
 * @return {ui.Widget} Виджет.
 */
ui.WidgetNode.prototype.getWidget = function(type) {};

/**
 * @return {ui.Container} Виджет.
 */
ui.WidgetNode.prototype.getContainer = function() {};

/**
 * @return {!Array.<!ui.Widget>} Виджеты.
 */
ui.WidgetNode.prototype.getWidgets = function() {};

/**
 * @param {string} type Тип виджетов.
 * @param {!ui.Widget} widget Виджет.
 */
ui.WidgetNode.prototype.addWidget = function(type, widget) {};

/**
 * @param {string} type Тип виджетов.
 */
ui.WidgetNode.prototype.removeWidget = function(type) {};

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
 * Контейнер.
 *
 * Служит для автоматической инициализации виджетов вложенной
 * DOM-структуры в целевой DOM-элемент контейнера.
 *
 * Виджеты для инициализации задаются списком имен.
 *
 * Вложенная DOM-структура ограничена целевыми DOM-элементами вложенных
 * виджетов-контейнеров.
 *
 * @see ui.Widget
 * @constructor
 * @extends {ui.Widget}
 * @param {!Node} target Целевой DOM-элемент.
 */
ui.Container = function(target) {};

/**
 * @type {string}
 */
ui.Container.NAME = 'container';

/**
 * @inheritDoc
 */
ui.Container.prototype.init = function() {};

/**
 * @inheritDoc
 */
ui.Container.prototype.destroy = function() {};

/**
 * @param {string} type Тип виджета.
 */
ui.Container.prototype.registerWidgetType = function(type) {};

/**
 * @return {!Array.<string>} Используемые виджеты.
 */
ui.Container.prototype.getWidgetTypes = function() {};

/**
 * Инициализация виджетов в DOM-элемента.
 *
 * @param {!Node} node Целевой DOM-элемент для поиска и инициализации
 *    виджетов.
 */
ui.Container.prototype.initWidgetsAt = function(node) {};

/**
 * Инициализация виджетов контейнера.
 *
 * Регистрировать типы виджетов для будущей инициализации.
 *
 * @param {string} type Тип виджетов для инициализации.
 * @param {!Node} container Целефой контейнер.
 */
ui.Container.prototype.initWidgetsWithType = function(type, container) {};

/**
 * Разрушение виджетов DOM-элемента.
 *
 * @param {!Node} node Целевой DOM-элемент.
 */
ui.Container.prototype.destroyWidgetsAt = function(node) {};

/**
 * Очищение отстутсвующих в DOM-дереве, но зарегистрированных узлов.
 */
ui.Container.prototype.handleBroken = function() {};

/**
 * @param {string} type Тип виждета.
 * @param {string} name Имя экземпляра виждета.
 * @return {ui.Widget} Виджет.
 */
ui.Container.prototype.getWidget = function(type, name) {};

/**
 * @param {!ui.Widget} widget Тип виджета.
 */
ui.Container.prototype.registerWidget = function(widget) {};

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
 * @extends {ui.Widget}
 * @param {!Node} target DOM-элемент.
 */
ui.buttons.Button = function(target) {};

/**
 * @type {string}
 */
ui.buttons.Button.NAME = 'button';

/**
 * @inheritDoc
 */
ui.buttons.Button.prototype.init = function() {};

/**
 * @inheritDoc
 */
ui.buttons.Button.prototype.destroy = function() {};

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
 * @extends {ui.WidgetEvent}
 * @param {!ui.buttons.Button} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 */
ui.buttons.ButtonEvent = function(target, type) {};

/**
 * @type {string}
 */
ui.buttons.ButtonEvent.CLICK = 'click';

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
 * @param {ui.forms.IResponseHandler} handler Обработчик отвера формы.
 */
ui.forms.setResponseHandler = function(handler) {};

/**
 * @param {!ui.forms.Form} form Форма.
 * @param {string} data Дфнные обработки.
 */
ui.forms.handleFormResponse = function(form, data) {};

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
 * @interface
 */
ui.forms.IResponseHandler = function() {};

/**
 * @param {!ui.forms.Form} form Форма.
 * @param {string} data Данные обработки.
 */
ui.forms.IResponseHandler.prototype.handleData = function(form, data) {};

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
 * @extends {ui.Widget}
 * @param {!Node} target Целевой DOM-элемент.
 */
ui.forms.Form = function(target) {};

/**
 * @type {string}
 */
ui.forms.Form.NAME = 'form';

/**
 * @inheritDoc
 */
ui.forms.Form.prototype.init = function() {};

/**
 *
 */
ui.forms.Form.prototype.submit = function() {};

/**
 *
 */
ui.forms.Form.prototype.reset = function() {};

/**
 * @param {string} param Параметр с ошибкой.
 * @param {string} message Сообщение об ошибке.
 */
ui.forms.Form.prototype.showParamError = function(param, message) {};

/**
 * @param {string} message Сообщение об ошибке.
 */
ui.forms.Form.prototype.cancel = function(message) {};

/**
 * @param {*=} opt_result Сопуствующие событию данные.
 */
ui.forms.Form.prototype.complete = function(opt_result) {};

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
 * @extends {events.Event}
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 */
ui.forms.FormEvent = function(target, type) {};

/**
 * @type {string}
 */
ui.forms.FormEvent.SUBMIT = 'submit';

/**
 * @type {string}
 */
ui.forms.FormEvent.RESET = 'reset';

/**
 * @type {string}
 */
ui.forms.FormEvent.RESPONSE = 'response';

/**
 * @type {string}
 */
ui.forms.FormEvent.COMPLETE = 'complete';

/**
 * @type {string}
 */
ui.forms.FormEvent.CANCEL = 'cancel';

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
 * @extends {ui.Widget}
 * @param {!Node} target Целевой DOM-элемент.
 */
ui.templates.Template = function(target) {};

/**
 * @param {*} data Данные трансформации.
 */
ui.templates.Template.prototype.processTransform = function(data) {};

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
 * @extends {ui.templates.Template}
 * @param {!Node} target Целевой DOM-элемент.
 */
ui.templates.TunaTemplate = function(target) {};

/**
 * @type {string}
 */
ui.templates.TunaTemplate.NAME = 'tuna-template';

/**
 * @inheritDoc
 */
ui.templates.TunaTemplate.prototype.processTransform = function(data) {};

/**
 * @inheritDoc
 */
ui.templates.TunaTemplate.prototype.init = function() {};

/**
 * @inheritDoc
 */
ui.templates.TunaTemplate.prototype.destroy = function() {};

/**
 * @param {!Object.<string, !Object>} sign Разметка шаблона.
 */
ui.templates.TunaTemplate.prototype.setTemplateSign = function(sign) {};

/**
 * @param {string} url Адрес шаблона.
 */
ui.templates.TunaTemplate.prototype.loadTemplateSign = function(url) {};

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
 * @extends {ui.Container}
 * @param {!Node} target DOM-элемент.
 */
ui.lists.List = function(target) {};

/**
 * @type {string}
 */
ui.lists.List.NAME = 'list';

/**
 * @inheritDoc
 */
ui.lists.List.prototype.getWidgetTypes = function() {};

/**
 * @return {string} Тип виджета элемента списка.
 */
ui.lists.List.prototype.getItemType = function() {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.List.prototype.registerItem = function(item) {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.List.prototype.terminateItem = function(item) {};

/**
 * @param {number} index Индекс выделяемого элемента.
 */
ui.lists.List.prototype.selectItemAt = function(index) {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.List.prototype.selectItem = function(item) {};

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
 * @extends {events.Event}
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.ListEvent = function(target, type, item) {};

/**
 * @type {string}
 */
ui.lists.ListEvent.SELECT = 'select';

/**
 * @type {string}
 */
ui.lists.ListEvent.DESELECT = 'deselect';

/**
 * @return {!ui.lists.ListItem} Элемент списка.
 */
ui.lists.ListEvent.prototype.getItem = function() {};

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
 * @extends {ui.lists.List}
 * @param {!Node} target DOM-элемент.
 */
ui.lists.Menu = function(target) {};

/**
 * @type {string}
 */
ui.lists.Menu.NAME = 'menu';

/**
 * @inheritDoc
 */
ui.lists.Menu.prototype.init = function() {};

/**
 * @inheritDoc
 */
ui.lists.Menu.prototype.destroy = function() {};

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
 * @extends {ui.Widget}
 * @param {!Node} target DOM-элемент.
 */
ui.lists.ListItem = function(target) {};

/**
 * @type {string}
 */
ui.lists.ListItem.NAME = 'list-item';

/**
 * @inheritDoc
 */
ui.lists.ListItem.prototype.init = function() {};

/**
 * @inheritDoc
 */
ui.lists.ListItem.prototype.destroy = function() {};

/**
 * @return {string} Индекс.
 */
ui.lists.ListItem.prototype.getIndex = function() {};

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
 * @interface
 */
ui.lists.ISelectionRule = function() {};

/**
 * @return {!Array.<string|number>} Массив выделенных элементов.
 */
ui.lists.ISelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @param {string|number} index Выделяемый элемент.
 * @return {boolean} Был ли выделен элемент.
 */
ui.lists.ISelectionRule.prototype.selectIndex = function(index) {};

/**
 * Очищение выделения.
 */
ui.lists.ISelectionRule.prototype.clearSelection = function() {};

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
 * @interface
 */
ui.lists.IItemsCollection = function() {};

/**
 * @return {string|number} Индекс элемента.
 */
ui.lists.IItemsCollection.prototype.getNullIndex = function() {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.IItemsCollection.prototype.registerItem = function(item) {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 */
ui.lists.IItemsCollection.prototype.terminateItem = function(item) {};

/**
 * @param {string|number} index Индекс элемента.
 * @return {ui.lists.ListItem} Элемент.
 */
ui.lists.IItemsCollection.prototype.getItemAt = function(index) {};

/**
 * @param {!ui.lists.ListItem} item Элемент списка.
 * @return {string|number} Индекс элемента.
 */
ui.lists.IItemsCollection.prototype.getItemIndex = function(item) {};

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
 * @implements {ui.lists.IItemsCollection}
 */
ui.lists.ArrayCollection = function() {};

/**
 * @inheritDoc
 */
ui.lists.ArrayCollection.prototype.getNullIndex = function() {};

/**
 * @inheritDoc
 */
ui.lists.ArrayCollection.prototype.registerItem = function(item) {};

/**
 * @inheritDoc
 */
ui.lists.ArrayCollection.prototype.terminateItem = function(item) {};

/**
 * @inheritDoc
 */
ui.lists.ArrayCollection.prototype.getItemAt = function(index) {};

/**
 * @inheritDoc
 */
ui.lists.ArrayCollection.prototype.getItemIndex = function(item) {};

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
 * @implements {ui.lists.IItemsCollection}
 */
ui.lists.TableCollection = function() {};

/**
 * @inheritDoc
 */
ui.lists.TableCollection.prototype.getNullIndex = function() {};

/**
 * @inheritDoc
 */
ui.lists.TableCollection.prototype.registerItem = function(item) {};

/**
 * @inheritDoc
 */
ui.lists.TableCollection.prototype.terminateItem = function(item) {};

/**
 * @inheritDoc
 */
ui.lists.TableCollection.prototype.getItemAt = function(index) {};

/**
 * @inheritDoc
 */
ui.lists.TableCollection.prototype.getItemIndex = function(item) {};

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
 * @implements {ui.lists.ISelectionRule}
 * @param {!ui.lists.IItemsCollection} collection Коллекция элементов.
 * @param {!events.IEventDispatcher} eventDispatcher Объект обработки событий.
 */
ui.lists.SingleSelectionRule = function(collection, eventDispatcher) {};

/**
 * @inheritDoc
 */
ui.lists.SingleSelectionRule.prototype.selectIndex = function(index) {};

/**
 * @inheritDoc
 */
ui.lists.SingleSelectionRule.prototype.getSelectedIndexes = function() {};

/**
 * @inheritDoc
 */
ui.lists.SingleSelectionRule.prototype.clearSelection = function() {};

/**
 * @namespace
 */
var sm = {};

/**
 * @type {string}
 */
sm.VERSION = '0.0.1';

/**
 * @type {string}
 */
sm.NAME_SEPARATOR = ':';

/**
 * @type {string}
 */
sm.FIELD_SEPARATOR = '.';

/**
 * @type {string}
 */
sm.PARENT_SEPARATOR = ',';

/**
 * @param {!sm.IEntityFactory} factory Фабрика.
 */
sm.setEntityFactory = function(factory) {};

/**
 * @param {!sm.IEntitySerializer} serializer Фабрика.
 */
sm.setEntitySerializer = function(serializer) {};

/**
 * @param {string} name Имя сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!Array.<!sm.IEntity>=} opt_parents Родительская сущность.
 * @return {sm.IEntity} Созданная сущность.
 */
sm.createEntity = function(name, id, opt_parents) {};

/**
 * @param {string} fullName Полное имя сущности.
 * @param {sm.IEntitySource=} opt_source Сущность для поиска общего родителя.
 * @return {sm.IEntity} Созданная сущность.
 */
sm.createEntityByName = function(fullName, opt_source) {};

/**
 * @param {!Array.<!sm.IEntity>} entities Массив сущностей.
 * @return {string} Строка сущностей.
 */
sm.getParentsName = function(entities) {};

/**
 * @param {!Array.<!sm.IEntity>} entities Массив сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Object} Объект даных набора сущностей.
 */
sm.serializeEntities = function(entities, opt_type) {};

/**
 * @param {!sm.IEntity} entity Сущность.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Object} Объект даных набора сущностей.
 */
sm.serializeEntity = function(entity, opt_type) {};

/**
 * @param {!Object} data Объект даных набора сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Array.<!sm.IEntity>} Массив сущностей.
 */
sm.reconstructEntities = function(data, opt_type) {};

/**
 * @param {!Object} data Объект даных набора сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {sm.IEntity} Сущность.
 */
sm.reconstructEntity = function(data, opt_type) {};

/**
 * @param {!sm.IEntityStorage} storage Хранилище.
 */
sm.setEntityStorage = function(storage) {};

/**
 * @param {!sm.IEntity} entity Сущность.
 */
sm.save = function(entity) {};

/**
 * @param {!sm.IEntity} entity Сущность.
 */
sm.remove = function(entity) {};

/**
 * @param {string} name Имя типа сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.select = function(name) {};

/**
 * @param {string} name Имя типа сущности.
 * @return {sm.IEntity} Сущность.
 */
sm.selectOne = function(name) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.selectById = function(name, id) {};

/**
 * @param {string} fullName Имя сущности.
 * @return {sm.IEntity} Сущность.
 */
sm.selectByName = function(fullName) {};

/**
 * @param {!sm.IEntity} parent Имя типа сущности.
 * @param {string} name Имя типа сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.selectChildren = function(parent, name) {};

/**
 * Очищениу локального хранилища.
 */
sm.flush = function() {};

/**
 * @param {string} name Имя типа сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.addUpdateHandler = function(name, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.addEntityUpdateHandler = function(name, id, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.removeUpdateListener = function(name, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.removeEntityUpdateHandler = function(name, id, listener) {};

/**
 * @interface
 */
sm.IEntityFactory = function() {};

/**
 * @param {string} name Имя сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!Array.<!sm.IEntity>=} opt_parents Родительская сущность.
 * @return {sm.IEntity} Созданная сущность.
 */
sm.IEntityFactory.prototype.createEntity = function(name, id, opt_parents) {};

/**
 * @interface
 * @extends {sm.IEntitySource}
 */
sm.IEntity = function() {};

/**
 * @return {string} Идентификатор сущности.
 */
sm.IEntity.prototype.getId = function() {};

/**
 * @return {!Array.<!sm.IEntity>} Родительские сущности.
 */
sm.IEntity.prototype.getParents = function() {};

/**
 * @return {string} Имя сущности.
 */
sm.IEntity.prototype.getName = function() {};

/**
 * @return {string} Полное имя, включеющее имя родителей.
 */
sm.IEntity.prototype.getFullName = function() {};

/**
 * @param {string} key Ключ поля.
 * @return {string} Строковое значение поля.
 */
sm.IEntity.prototype.getField = function(key) {};

/**
 * @param {string} key Ключ поля.
 * @param {string} value Строковое значение поля.
 */
sm.IEntity.prototype.setField = function(key, value) {};

/**
 * @param {string} key Ключ хранения ссылок.
 * @param {!Array.<!sm.IEntity>} entities Сущности.
 */
sm.IEntity.prototype.setLinks = function(key, entities) {};

/**
 * @param {string} key Ключ хранения ссылок.
 * @param {!sm.IEntity} entity Сущность на которую необходимо ссылаться.
 */
sm.IEntity.prototype.addLink = function(key, entity) {};

/**
 * @param {string} key Ключ хранения ссылок.
 * @param {!sm.IEntity} entity Сущность на которую необходимо ссылаться.
 */
sm.IEntity.prototype.removeLink = function(key, entity) {};

/**
 * @param {string} key Ключ хранения ссылок.
 * @param {!sm.IEntity} entity Сущность на которую необходимо ссылаться.
 * @return {boolean} Имеется ли сссылка.
 */
sm.IEntity.prototype.hasLink = function(key, entity) {};

/**
 * @param {string=} opt_type Тип кодирования.
 * @return {!Object} Данные.
 */
sm.IEntity.prototype.serializeData = function(opt_type) {};

/**
 * @param {!Object} data Данные.
 * @param {string=} opt_type Тип кодирования.
 */
sm.IEntity.prototype.populateData = function(data, opt_type) {};

/**
 * @interface
 */
sm.IEntitySerializer = function() {};

/**
 * @param {!Array.<!sm.IEntity>} items Массив сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Object} Объект даных набора сущностей.
 */
sm.IEntitySerializer.prototype.serializeEntities =
    function(items, opt_type) {};

/**
 * @param {!Object} data Объект даных набора сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Array.<!sm.IEntity>} Массив сущностей.
 */
sm.IEntitySerializer.prototype.reconstructEntities =
    function(data, opt_type) {};

/**
 * @interface
 */
sm.IEntitySource = function() {};

/**
 * @param {string} fullName Полное имя сущности.
 * @return {sm.IEntity} Объект сущностей.
 */
sm.IEntitySource.prototype.getEntity = function(fullName) {};

/**
 * @interface
 * @extends {sm.IEntitySource}
 */
sm.IEntityStorage = function() {};

/**
 * @param {!sm.IEntity} entity Сущность.
 */
sm.IEntityStorage.prototype.save = function(entity) {};

/**
 * @param {!sm.IEntity} entity Сущность.
 */
sm.IEntityStorage.prototype.remove = function(entity) {};

/**
 * @param {string} name Имя типа сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.IEntityStorage.prototype.select = function(name) {};

/**
 * @param {string} name Имя типа сущности.
 * @return {sm.IEntity} Сущность выбранного типа.
 */
sm.IEntityStorage.prototype.selectOne = function(name) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.IEntityStorage.prototype.selectById = function(name, id) {};

/**
 * @param {string} fullName Имя сущности.
 * @return {sm.IEntity} Сущность.
 */
sm.IEntityStorage.prototype.selectByName = function(fullName) {};

/**
 * @param {!sm.IEntity} parent Имя типа сущности.
 * @param {string} name Имя типа сущности.
 * @return {!Array.<!sm.IEntity>} Массив сущностей выбранного типа.
 */
sm.IEntityStorage.prototype.selectChildren = function(parent, name) {};

/**
 * Очищение хранилища.
 */
sm.IEntityStorage.prototype.flush = function() {};

/**
 * @param {string} name Имя типа сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.IEntityStorage.prototype.addUpdateHandler =
    function(name, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.IEntityStorage.prototype.addEntityUpdateHandler =
    function(name, id, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.IEntityStorage.prototype.removeUpdateListener =
    function(name, listener) {};

/**
 * @param {string} name Имя типа сущности.
 * @param {string} id Идентификатор сущности.
 * @param {!function()} listener Функция-обработчик.
 */
sm.IEntityStorage.prototype.removeEntityUpdateHandler =
    function(name, id, listener) {};

/**
 * Класс сушности данных.
 *
 * @constructor
 * @implements {sm.IEntity}
 * @param {string} name Имя сущьности.
 * @param {string} id Идентификатор сущности.
 * @param {!Array.<!sm.IEntity>=} opt_parents Родительская сущность.
 */
sm.Entity = function(name, id, opt_parents) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getId = function() {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getParents = function() {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getEntity = function(fullName) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getName = function() {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getFullName = function() {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.getField = function(key) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.setField = function(key, value) {};

/**
 * @param {string} linkName Имя ссылки.
 * @return {Array.<!sm.Entity>} Коллекция.
 */
sm.Entity.prototype._getLinksCollection = function(linkName) {};

/**
 * @param {string} linkName Ключ хранения ссылок.
 * @param {!Array.<!sm.IEntity>} entities Сущности.
 */
sm.Entity.prototype.setLinks = function(linkName, entities) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.addLink = function(linkName, entity) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.removeLink = function(linkName, entity) {};

/**
 * @param {string} linkName Ключ хранения ссылок.
 * @param {!sm.IEntity} entity Сущность на которую необходимо ссылаться.
 * @return {boolean} Имеется ли сссылка.
 */
sm.Entity.prototype.hasLink = function(linkName, entity) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.serializeData = function(opt_type) {};

/**
 * @inheritDoc
 */
sm.Entity.prototype.populateData = function(data, opt_type) {};

/**
 * @inheritDoc
 * @final
 */
sm.Entity.prototype.toString = function() {};

/**
 * @constructor
 * @implements {sm.IEntitySerializer}
 * @param {!sm.IEntityStorage} storage Храниидище.
 */
sm.EntitySerializer = function(storage) {};

/**
 * @param {!Array.<!sm.IEntity>} items Массив сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Object} Объект даных набора сущностей.
 */
sm.EntitySerializer.prototype.serializeEntities = function(items, opt_type) {};

/**
 * @param {!Object} data Объект даных набора сущностей.
 * @param {string=} opt_type Тип кодирования данных.
 * @return {!Array.<!sm.IEntity>} Массив сущностей.
 */
sm.EntitySerializer.prototype.reconstructEntities = function(data, opt_type) {};

/**
 * @constructor
 * @implements {sm.IEntityStorage}
 */
sm.EntityStorage = function() {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.getEntity = function(fullName) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.save = function(entity) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.remove = function(entity) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.select = function(name) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.selectOne = function(name) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.selectById = function(name, id) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.selectByName = function(fullName) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.selectChildren = function(parent, name) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.flush = function() {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.addUpdateHandler = function(name, listener) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.addEntityUpdateHandler =
    function(name, id, listener) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.removeUpdateListener =
    function(name, listener) {};

/**
 * @inheritDoc
 */
sm.EntityStorage.prototype.removeEntityUpdateHandler =
    function(name, id, listener) {};

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
var app = {};

/**
 * @type {string}
 */
app.VERSION = '0.0.1';

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
 * @param {!ui.Container} container Контейнер.
 */
app.Controller = function(container) {};

/**
 * @return {!ui.Container}
 */
app.Controller.prototype.getContainer = function() {};

/**
 * @param {string} type Тип виждета.
 * @param {string} name Имя экземпляра виждета.
 * @return {ui.Widget} Виджет.
 */
app.Controller.prototype.getWidget = function(type, name) {};

/**
 * Привязка уонтроллеров к дочернм компонентам.
 */
app.Controller.prototype._bind = function() {};

/**
 * Инициализация.
 */
app.Controller.prototype._init = function() {};

/**
 * Разрушение.
 */
app.Controller.prototype._destroy = function() {};

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
var tuna = {};

/**
 * @type {string}
 */
tuna.VERSION = '0.0.1';

/**
 * @namespace
 */
tuna.ui = {};

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
 * @implements {ui.IWidgetFactory}
 */
tuna.ui.WidgetFactory = function() {};

/**
 * @inheritDoc
 */
tuna.ui.WidgetFactory.prototype.createWidget = function(type, target) {};

/**
 * @inheritDoc
 */
tuna.ui.WidgetFactory.prototype.getTargetSelector = function(type) {};

/**
 * @inheritDoc
 */
tuna.ui.WidgetFactory.prototype.getContainerType = function() {};

/**
 * @param {!Node} node Корневой контейнер.
 * @param {!*} sizzle Сиззл.
 */
window['main'] = function(node, sizzle) {};

/**
 * @param {!ui.Container} root Контейнер.
 * @param {!ui.Container} body Контейнер.
 * @param {!ui.Container} head Контейнер.
 * @param {!ui.buttons.Button} button Кнопка.
 */
function swap(root, body, head, button) {}

