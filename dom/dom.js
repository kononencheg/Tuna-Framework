

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
tuna.dom.setSelectorEngine = function(engine) {
    tuna.dom.__selectorEngine = engine;
};


/**
 * Поиск элементов с помощью CSS-селектора в определенном контексте.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        найденные элементы.
 * @param {Node=} opt_context Контекст поиска - DOM-элемент в котором должен
 *        производиться поиск элементов.
 * @return {!Array.<!Node>} Массив найденных элементов.
 */
tuna.dom.select = function(selector, opt_context) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine(selector, opt_context);
    }

    return [];
};


/**
 * Поиск единственного элемента соответсующего CSS-селектору.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        найденный элемент.
 * @param {Node=} opt_context Контекст поиска - DOM-элемент в котором должен
 *        производиться поиск элемента.
 * @return {Node} Найденный элемент.
 */
tuna.dom.selectOne = function(selector, opt_context) {
    if (tuna.dom.__selectorEngine !== null) {
        var result = tuna.dom.__selectorEngine(selector, opt_context);
        if (result.length > 0) {
            return result[0];
        }
    }

    return null;
};


/**
 * Фильтрация набора элементов с условием соответствия CSS-селектору.
 *
 * @param {string} selector CSS-селектор которому должны соответсвовать
 *        элементы.
 * @param {!Array.<Node>} elements Массив элементов, которые необходимо
 *        отфильтровать.
 * @return {!Array.<Node>} Отфильтрованный массив элементов.
 */
tuna.dom.matches = function(selector, elements) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine.matches(selector, elements);
    }

    return [];
};

/**
 * Проверка соответствия элемента CSS-селектору.
 *
 * @param {!Node} element DOM-элемент соответствие которого нужно проверить.
 * @param {string} selector CSS-селектор которому должен соответсвовать
 *        элемент.
 * @return {boolean} Результат проверки.
 */
tuna.dom.matchesSelector = function(element, selector) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine.matchesSelector(element, selector);
    }

    return false;
};


/**
 * @private
 * @see tuna.dom.setSelectorEngine
 */
tuna.dom.__selectorEngine = null;


/**
 * Оповещение слушателей о событии DOM-элемента типа <code>type</code>.
 *
 * @see tuna.dom.addEventListener
 * @see tuna.dom.removeEventListener
 * @param {!Node} element DOM-элемент о событии которого необходимо оповестить.
 * @param {string} type Тип события.
 * @return {boolean} Успех результата оповещения.
 */
tuna.dom.dispatchEvent = function(element, type) {
    var result = false;

    var event = null;
    if (document.createEventObject !== undefined) {
        event = document.createEventObject();

        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__dispatchCustomIEEvent(element, event, type);
        } else {
            result = element.fireEvent(eventName, event);
        }
    } else {
        event = document.createEvent('UIEvents');
        event.initUIEvent(type, true, true, window, 1);

        result = !element.dispatchEvent(event);
    }

    return result;
};


/**
 * Добавление обработчика события DOM-елемента.
 *
 * Все обработчик событий вызываются в контексте элемента, оповещение о событии
 * которого произошло.
 *
 * @see tuna.dom.dispatchEvent
 * @param {!Node} element DOM-элемент, событие которого нужно обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.addEventListener = function(element, type, handler) {
    if (element.addEventListener !== undefined) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__addCustomIEListener(element, type, handler);
        } else {
            if (element.__ieTargetId === undefined) {
                element.__ieTargetId = 'element_' + tuna.dom.__lastElementId++;
            }

            var listenerId = element.__ieTargetId + '_' + type;
            handler[listenerId] = function(event) {
                handler.call(element, event);
            };

            element.attachEvent(eventName, handler[listenerId]);
        }
    }
};


/**
 * Удаление обработчика события DOM-элемента.
 *
 * @param {!Node} element DOM-элемент, обработчик события которого нужно
 *        удалить.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.removeEventListener = function(element, type, handler) {
    if (element.removeEventListener !== undefined) {
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__removeCustomIEListener(element, type, handler);
        } else {
            var listenerId = element.__ieTargetId + '_' + type;
            if (handler[listenerId] !== undefined) {
                element.detachEvent('on' + type, handler[listenerId]);

                delete handler[listenerId];
            }
        }
    }
};


/**
 * Добавление единовременного обработчика события.
 *
 * После первого вызова обработчик события удаляется.
 *
 * @param {!Node} element DOM-элемент, событие которого нужно обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.addOneEventListener = function(element, type, handler) {
    if (element.__onceTargetId === undefined) {
        element.__onceTargetId = 'element_' + tuna.dom.__lastElementId++;
    }

    var listenerId = element.__onceTargetId + '_' + type;
    handler[listenerId] = function(event) {
        handler.call(element, event);
        tuna.dom.removeOneEventListener(element, type, handler);
    };

    tuna.dom.addEventListener(element, type, handler[listenerId]);
};


/**
 * Удаление единовременного обработчика события.
 *
 * @see tuna.dom.addOneEventListener
 * @param {!Node} element DOM-элемент, единовременный обработчик события
 *        которого нужно удалить.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.removeOneEventListener = function(element, type, handler) {
    var listenerId = element.__onceTargetId + '_' + type;

    if (handler[listenerId] !== undefined) {
        tuna.dom.removeEventListener(element, type, handler[listenerId]);

        delete handler[listenerId];
    }
};


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
 * @see tuna.dom.getParentMatches
 * @param {!Node} element DOM-элемент, событие дочерних элементов которого
 *        нужно обрабатывать.
 * @param {string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.addChildEventListener = function(element, selector, type, handler) {
    if (element.__childTargetId === undefined) {
        element.__childTargetId = 'element_' + tuna.dom.__lastElementId++;
    }

    var listenerId = element.__childTargetId + '_' + type + '_' + selector;
    handler[listenerId] = function(event) {
        var target = event.target || event.srcElement;

        var child = null;

        var matches = tuna.dom.matches(selector, [target]);
        if (matches.length === 0) {
            child = tuna.dom.getParentMatches(target, selector, element);
        } else {
            child = target;
        }

        if (child !== null) {
            handler.call(child, event);
        }
    };

    tuna.dom.addEventListener(element, type, handler[listenerId]);
};


/**
 * Удаление обработчика событий дочерних элементов выбранного DOM-элемента.
 *
 * @see tuna.dom.addChildEventListener
 * @param {!Node} element DOM-элемент, обработчик события дочерних элементов
 *        которого нужно удалить.
 * @param {string} selector CSS-селектор дочерних элементов.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.removeChildEventListener = function(element, selector, type, handler) {
    var listenerId = element.__childTargetId + '_' + type + '_' + selector;
    if (handler[listenerId] !== undefined) {
        tuna.dom.removeEventListener(element, type, handler[listenerId]);

        delete handler[listenerId];
    }
};


/**
 * Добавление обработчика нестандартного события в Internet Explorer.
 *
 * В качестве вспомогательного события, данный метод использует событие
 * <code>'onhelp'</code>.
 *
 * @see tuna.dom.__dispatchCustomIEEvent
 * @param {!Node} element DOM-елемент, событие которого нужно обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
tuna.dom.__addCustomIEListener = function(element, type, handler) {
    if (element.__customListener === undefined) {
        element.__customListener = function(event) {
            if (event.__type !== undefined) {
                var type = event.__type;
                delete event.__type;

                var handlers = element['__' + type];
                for (var i in handlers) {
                    handlers[i].call(element, event);
                }
            }
        };

        element.attachEvent('onhelp', element.__customListener);
    }

    if (element['__' + type] === undefined) {
        element['__' + type] = [];
    }

    element['__' + type].push(handler);
};


/**
 * Удаление нестандартного события в Internet Explorer.
 *
 * @see tuna.dom.__addCustomIEListener
 * @param {!Node} element DOM-елемент, слушатель события которого нужно удалить.
 * @param {string} type Тип удаляемого события.
 * @param {!function(Event)} handler Удаляемая функция-обработчик события.
 */
tuna.dom.__removeCustomIEListener = function(element, type, handler) {
    var handlers = element['__' + type];
    if (handlers !== undefined) {
        var i = handlers.length - 1;
        while (i >= 0) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }

            i--;
        }
    }
};


/**
 * Оповещение слушателей нестандартного события в Internet Explorer.
 *
 * Также как и функция <code>tuna.dom.__addCustomIEListener()</code> использует
 * в качестве вспомогательного событие <code>'onhelp'/code>.
 *
 * @see tuna.dom.__addCustomIEListener
 * @param {!Node} element DOM-елемент, событие которого нужно обрабатывать.
 * @param {!Event} event Объект события стандартной событийной модели браузера.
 * @param {string} type Тип не стандартного события.
 * @return {boolean} Успех оповещения о событии.
 */
tuna.dom.__dispatchCustomIEEvent = function(element, event, type) {
    event.__type = type;
    return element.fireEvent('onhelp', event);
};


/**
 * @private
 * @type {number}
 */
tuna.dom.__lastElementId = 0;


/**
 * Кросс-браузерная обертка остановки дествия события по-умолчанию.
 *
 * @param {!Event} event Объект DOM-события.
 */
tuna.dom.preventDefault = function(event) {
    if (event.preventDefault !== undefined) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};


/**
 * Кросс-браузерная обертка остановки распространения события.
 *
 * @param {!Event} event Объект DOM-события.
 */
tuna.dom.stopPropagation = function(event) {
    if (event.stopPropagation !== undefined) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};


/**
 * Взятие ближайшего родителя DOM-элемента соответсвующего выбранному
 * CSS-селектору.
 *
 * @see tuna.dom.matches
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {string} selector CSS-селектор которому должен соответсовать
 *        родительский элемент.
 * @param {Node=} opt_context DOM-элемент ограничивающий поиск родителя.
 * @return {Node} Hайденный родительский элемент или <code>null</code>.
 */
tuna.dom.getParentMatches = function(element, selector, opt_context) {
    var parent = element.parentNode;

    while (parent !== null && parent !== opt_context &&
           !tuna.dom.matchesSelector(parent, selector)) {

        parent = parent.parentNode;
    }

    return parent === opt_context ? null : parent;
};


/**
 * Взятие ближайшего родителя DOM-элемента который имеет выбранный CSS-класс.
 *
 * @param {!Node} element DOM-элемент родителя которого нужно найти.
 * @param {string} className Название CSS-класса родителя с которым необходимо
 *        найти.
 * @param {Node=} opt_context DOM-элемент ограничивающий поиск родителя.
 * @return {Node} Hайденный родительский элемент или <code>null</code>.
 */
tuna.dom.getParentWithClass = function(element, className, opt_context) {
    var parent = element.parentNode;

    while (parent !== null && parent !== opt_context &&
           !tuna.dom.hasClass(parent, className)) {

        parent = parent.parentNode;
    }

    return parent === opt_context ? null : parent;
};


/**
 * Проверка наличия CSS-класса элемента.
 *
 * @param {!Node} element DOM-элемент наличие класса которого нужно проверить.
 * @param {string} className Название CSS-класса.
 * @return {boolean} Результат проверки.
 */
tuna.dom.hasClass = function(element, className) {
    if (element.classList !== undefined) {
        return element.classList.contains(className);
    } else if (element.className !== undefined) {
        var classRegExp = new RegExp('(\\s|^)' + className + '(\\s|$)');
        return element.className.match(classRegExp) !== null;
    }

    return false;
};


/**
 * Добавление CSS-класса элементу.
 *
 * В случае наличия класса у элемента ничего не происходит.
 *
 * @param {!Node} element DOM-элемент класс которому нужно добавить.
 * @param {string} className CSS-класс который нужно добавить.
 */
tuna.dom.addClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.add(className);
    } else if (!tuna.dom.hasClass(element, className)) {
        element.className += ' ' + className;
    }
};


/**
 * Удаление CSS-класса у элемента.
 *
 * @param {!Node} element DOM-элемент класс готорого нужно удалить.
 * @param {string} className CSS-класс который нужно удалить.
 */
tuna.dom.removeClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.remove(className);
    } else if (tuna.dom.hasClass(element, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
};


/**
 * Установка наличия CSS-класса у DOM-элемента.
 *
 * @param {!Node} element DOM-элемент наличие CSS-класса которого необходимо
 *        установить.
 * @param {string} className CSS-класс наличие которого необходимо установить.
 * @param {boolean} isExist Флаг наличия CSS-класса.
 */
tuna.dom.setClassExist = function(element, className, isExist) {
    if (!isExist && tuna.dom.hasClass(element, className)) {
        tuna.dom.removeClass(element, className);
    } else if (isExist && !tuna.dom.hasClass(element, className)) {
        tuna.dom.addClass(element, className);
    }
};


/**
 * Извлечение данных DOM-элемента установленных в аттрибутах с префиксом
 * <code>data-</code>.
 *
 * Результатом извлечения является хеш-таблица в которой ключами являются имена
 * аттрибутов без префикса <code>data-</code>.
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
 * @return {!Object.<string, string>} Таблица данных элемента.
 */
tuna.dom.getAttributesData = function(element) {
    var result = {};

    var prefix = 'data-';

    var attrs = element.attributes;
    var i = 0,
        l = attrs.length;

    while (i < l) {
        if (attrs[i].name.indexOf(prefix) === 0) {
            result[attrs[i].name.substr(prefix.length)] = attrs[i].value;
        }

        i++;
    }

    return result;
};


/**
 * Создание экземпряра класса DocumentFragment cожержащий указанный HTML
 * контент.
 *
 * @param {string} html Строка HTML-верстки контента.
 * @return {DocumentFragment} Экземпляр класса DocumentFragment.
 */
tuna.dom.createFragment = function(html) {
    var fragment = document.createDocumentFragment();

    var tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    var children = tempContainer.childNodes;
    var i = 0,
        l = children.length;

    while (i < l) {
        fragment.appendChild(children.item(0));

        i++;
    }

    return fragment;
};
