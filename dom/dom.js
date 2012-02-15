/**
 * TUNA FRAMEWORK
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

tuna.dom.__addCustomIEListener = function(element, type, handler) {
    if (element.__customListener == undefined) {
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

tuna.dom.__dispatchCustomIEEvent = function(element, event, type) {
    event.__type = type;
    return element.fireEvent('onhelp', event);
};

tuna.dom.__selectorEngine = null;

/**
 * @param {*} engine
 */
tuna.dom.setSelectorEngine = function(engine) {
    tuna.dom.__selectorEngine = engine;
};

/**
 * @param {string} selector
 * @param {Node} context
 * @return {Array.<!Node>}
 */
tuna.dom.select = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        return tuna.dom.__selectorEngine(selector, context);
    }

    return null;
};

/**
 * @param {string} selector
 * @param {Array.<Node>} elements
 * @return {Array.<Node>}
 */
tuna.dom.filter = function(selector, elements) {
    if (tuna.dom.__selectorEngine !== null &&
        tuna.dom.__selectorEngine.filter !== undefined) {
        return tuna.dom.__selectorEngine.filter(selector, elements);
    }

    return null;
};

/**
 *
 * @param {string} selector
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.selectOne = function(selector, context) {
    if (tuna.dom.__selectorEngine !== null) {
        var result = tuna.dom.__selectorEngine(selector, context);
        if (result.length > 0) {
            return result[0];
        }
    }

    return null;
};

/**
 *
 * @param {string} html
 * @param {HTMLDocument} doc
 * @return {DocumentFragment}
 */
tuna.dom.createFragment = function(html, doc) {
    var fragment = doc.createDocumentFragment();

    var tempContainer = doc.createElement('div');
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

/**
 * TODO: Make remove child listener
 * @param {Node} element
 * @param {string} childSelector
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addChildEventListener = function(element, childSelector, type, handler) {
    tuna.dom.addEventListener(element, type, function(event) {
        var eventTarget = event.target || event.srcElement;

        var target = tuna.dom.__selectorEngine.matches(childSelector, [eventTarget])[0];

        if (target === undefined) {
            target = tuna.dom.getParentMatches(eventTarget, childSelector, element);
        }

        if (target !== null) {
            handler.call(target, event);
        }
    });
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addEventListener = function(element, type, handler) {
    if (element.addEventListener !== undefined) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__addCustomIEListener(element, type, handler);
        } else {
            element.attachEvent(eventName, handler);
        }
    }
};

/**
 * TODO: Make remove listener
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.addOneEventListener = function(element, type, handler) {
    var listener = function(event) {
        handler.call(element, event);
        tuna.dom.removeEventListener(element, type, listener);
    };

    tuna.dom.addEventListener(element, type, listener);
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {function(Event)} handler
 */
tuna.dom.removeEventListener = function(element, type, handler) {
    if (element.removeEventListener !== undefined) {
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent !== undefined) {
        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__removeCustomIEListener(element, type, handler);
        } else {
            element.detachEvent("on" + type, handler);
        }

    }
};

/**
 * @param {Node} element
 * @param {string} type
 * @param {string=} data
 */
tuna.dom.dispatchEvent = function(element, type, data) {
    var result = false;
    var doc = element.ownerDocument;

    var event = null;
    if (doc.createEventObject !== undefined){
        event = doc.createEventObject();
        data && (event.data = data);

        var eventName = 'on' + type;
        if (element[eventName] === undefined) {
            tuna.dom.__dispatchCustomIEEvent(element, event, type);
        } else {
            result = element.fireEvent(eventName, event);
        }
    } else {
        event = document.createEvent('UIEvents');
        event.initUIEvent(type, true, true, window, 1);
        data && (event.data = data);

        result = !element.dispatchEvent(event);
    }

    return result;
};

/**
 * @param {Event} event
 */
tuna.dom.preventDefault = function(event) {
    if (event.preventDefault !== undefined) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};

/**
 * @param {Event} event
 */
tuna.dom.stopPropagation = function(event) {
    if (event.stopPropagation !== undefined) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};

/**
 * @param {Node} element
 * @param {Node} parent
 * @return {number}
 */
tuna.dom.getChildIndex = function(element, parent) {
    var result = -1;

    var child;
    if (element.parentNode === parent) {
        result = 0;
        child = parent.firstChild;

        while (child !== undefined && child !== element) {
            result++;

            child = child.nextSibling;
        }
    }

    return result;
};

/**
 * @param {Node} parent
 * @param {number} index
 * @return {Node}
 */
tuna.dom.getChildAt = function(parent, index) {
    return parent.childNodes[index] || null;
};

/**
 * @param {Node} element
 * @param {string} selector
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentMatches = function(element, selector, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           tuna.dom.__selectorEngine.matches(selector, [parent]).length === 0) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @param {Node=} context
 * @return {Node}
 */
tuna.dom.getParentWithClass = function(element, className, context) {
    var parent = element.parentNode;

    while (parent !== null &&
           parent !== context &&
           !tuna.dom.hasClass(parent, className)) {

        parent = parent.parentNode;
    }

    return parent === context ? null : parent;
};

/**
 * @param {Node} element
 * @param {string} className
 * @return {boolean}
 */
tuna.dom.hasClass = function(element, className) {
    if (element.classList !== undefined) {
        return element.classList.contains(className);
    } else if (element.className !== undefined) {
        return element.className.match
            (new RegExp('(\\s|^)' + className + '(\\s|$)')) !== null;
    }

    return false;
};

/**
 * @param {Node} element
 * @param {string} className
 */
tuna.dom.addClass = function(element, className) {
    if (element.classList !== undefined) {
        element.classList.add(className);
    } else if (!tuna.dom.hasClass(element, className)) {
        element.className += " " + className;
    }

};

/**
 * @param {Node} element
 * @param {string} className
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
 * @param {Node} element
 * @param {string} className
 * @param {boolean} isExist
 */
tuna.dom.setClassExist = function(element, className, isExist) {
    if (!isExist && tuna.dom.hasClass(element, className)) {
        tuna.dom.removeClass(element, className);
    } else if (isExist && !tuna.dom.hasClass(element, className)) {
        tuna.dom.addClass(element, className);
    }
};

/**
 * @param {Node} element
 * @param {string=} prefix
 * @return {Object.<string, string>}
 */
tuna.dom.getAttributesData = function(element, prefix) {
    if (prefix === undefined) {
        prefix = 'data-';
    }

    var result = {};

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