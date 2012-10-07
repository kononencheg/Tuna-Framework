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



if (typeof console !== 'object') {
  console = {};
}

if (typeof console.log !== 'function') {
  console.log = function(var_args) {
    alert(Array.prototype.slice.call(arguments).join(', '));
  };
}

if (typeof console.info !== 'function') {
  console.info = function(var_args) {
    console.log.apply(null, arguments);
  };
}

if (typeof console.warn !== 'function') {
  console.warn = function(var_args) {
    console.log.apply(null, arguments);
  };
}

if (typeof console.error !== 'function') {
  console.error = function(var_args) {
    console.log.apply(null, arguments);
  };
}

if (typeof JSON !== 'object') {
  throw Error('"JSON" object must exists.');
}

if (typeof JSON.stringify !== 'function') {
  throw Error('"JSON.stringify()" method must exists.');
}

if (typeof JSON.parse !== 'function') {
  throw Error('"JSON.parse()" method must exists.');
}
'use strict';var util = {};
util.VERSION = "0.0.1";
util.IS_IE = !!eval("'\v' == 'v'");
util.dom = {};
util.__ExtendLink = function() {
};
util.inherits = function(Class, Parent) {
  util.__ExtendLink.prototype = Parent.prototype;
  Class.prototype = new util.__ExtendLink;
  Class.prototype.constructor = Class
};
util.bind = function(func, context) {
  return function() {
    return func.apply(context, arguments)
  }
};
util.async = function(callback) {
  setTimeout(callback, 0)
};
util.nop = function() {
};
util.clone = function(object) {
  try {
    return JSON.parse(JSON.stringify(object))
  }catch(error) {
    console.error(error)
  }
  return null
};
util.merge = function(base, target) {
  for(var key in target) {
    base[key] = target[key]
  }
};
util.areEqual = function(first, second) {
  try {
    return first === second || JSON.stringify(first) === JSON.stringify(second)
  }catch(error) {
    console.error(error)
  }
  return false
};
util.toArray = function(list) {
  return Array.prototype.slice.call(list)
};
util.cloneArray = function(array) {
  return array.slice(0)
};
util.indexOf = function(element, array) {
  if(array.indexOf !== undefined) {
    return array.indexOf(element)
  }else {
    var i = 0, l = array.length;
    while(i < l) {
      if(array[i] === element) {
        return i
      }
      i++
    }
  }
  return-1
};
util.encodeJsonData = function(object) {
  try {
    return JSON.stringify(object)
  }catch(error) {
    console.error(error)
  }
  return""
};
util.decodeJsonData = function(data) {
  try {
    return JSON.parse(data)
  }catch(error) {
    console.error(error)
  }
  return null
};
util.encodeFormData = function(object) {
  return util.tokenizeUrlData(object).join("&")
};
util.tokenizeUrlData = function(object, opt_path) {
  var result = [];
  if(opt_path === undefined) {
    opt_path = []
  }
  if(typeof object === "object") {
    for(var key in object) {
      var newPath = opt_path.length === 0 ? [key] : (opt_path.join(",") + "," + key).split(",");
      result = result.concat(util.tokenizeUrlData(object[key], newPath))
    }
  }else {
    result = [opt_path.shift() + (opt_path.length > 0 ? "[" + opt_path.join("][") + "]=" : "=") + encodeURIComponent(String(object))]
  }
  return result
};
util.decodeFormData = function(data) {
  var result = new util.SafeObject({});
  var values = decodeURIComponent(data).split("&");
  var i = 0, l = values.length;
  var pair = [];
  while(i < l) {
    pair = values[i].split("=");
    if(pair[1] !== undefined) {
      result.setByPath(pair[1], util.parseUrlPathToken(pair[0]))
    }
    i++
  }
  return result.getCore()
};
util.parseUrlPathToken = function(token) {
  if(token.charAt(token.length - 1) !== "]") {
    return[token]
  }
  var nameLength = token.indexOf("[");
  return[token.substring(0, nameLength)].concat(token.substring(nameLength + 1, token.length - 1).split("]["))
};
util.SafeObject = function(data) {
  this.__core = data
};
util.SafeObject.prototype.getCore = function() {
  return this.__core
};
util.SafeObject.prototype.get = function(var_keys) {
  return this.getByPath(Array.prototype.slice.call(arguments))
};
util.SafeObject.prototype.set = function(value, var_keys) {
  var path = Array.prototype.slice.call(arguments);
  this.setByPath(path.shift(), path)
};
util.SafeObject.prototype.getByPath = function(path) {
  var result = this.__core;
  var i = 0, l = path.length;
  var value = null;
  while(i < l) {
    if(result === null || path[i] === "") {
      break
    }
    value = result[path[i]];
    if(value !== undefined) {
      result = value
    }else {
      result = null
    }
    i++
  }
  return result
};
util.SafeObject.prototype.setByPath = function(value, path) {
  var scope = this.__core;
  var i = 0, l = path.length;
  var key = null;
  while(i < l) {
    key = path[i += 1];
    if(key === "") {
      key = 0;
      while(scope[key] !== undefined) {
        key++
      }
    }
    if(i === l) {
      scope[key] = value
    }else {
      if(scope[key] === undefined) {
        scope[key] = isNaN(path[i]) ? {} : []
      }
    }
    scope = scope[key]
  }
};
util.dom.setSelectorEngine = function(engine) {
  util.dom.__selectorEngine = engine
};
util.dom.select = function(selector, opt_context) {
  if(util.dom.__selectorEngine !== null) {
    return util.dom.__selectorEngine(selector, opt_context)
  }
  return[]
};
util.dom.selectOne = function(selector, opt_context) {
  if(util.dom.__selectorEngine !== null) {
    var result = util.dom.__selectorEngine(selector, opt_context);
    if(result.length > 0) {
      return result[0]
    }
  }
  return null
};
util.dom.matches = function(selector, elements) {
  if(util.dom.__selectorEngine !== null) {
    return util.dom.__selectorEngine.matches(selector, elements)
  }
  return[]
};
util.dom.matchesSelector = function(element, selector) {
  if(util.dom.__selectorEngine !== null) {
    return util.dom.__selectorEngine.matchesSelector(element, selector)
  }
  return false
};
util.dom.__selectorEngine = null;
util.dom.dispatchEvent = function(element, type) {
  var result = false;
  var event = null;
  if(document.createEventObject !== undefined) {
    event = document.createEventObject();
    var eventName = "on" + type;
    if(element[eventName] === undefined) {
      util.dom.__dispatchCustomIEEvent(element, event, type)
    }else {
      result = element.fireEvent(eventName, event)
    }
  }else {
    event = document.createEvent("UIEvents");
    event.initUIEvent(type, true, true, window, 1);
    result = !element.dispatchEvent(event)
  }
  return result
};
util.dom.addEventListener = function(element, type, handler) {
  if(element.addEventListener !== undefined) {
    element.addEventListener(type, handler, false)
  }else {
    if(element.attachEvent !== undefined) {
      var eventName = "on" + type;
      if(element[eventName] === undefined) {
        util.dom.__addCustomIEListener(element, type, handler)
      }else {
        if(element.__ieTargetId === undefined) {
          element.__ieTargetId = "element_" + util.dom.__lastElementId++
        }
        var listenerId = element.__ieTargetId + "_" + type;
        handler[listenerId] = function(event) {
          handler.call(element, event)
        };
        element.attachEvent(eventName, handler[listenerId])
      }
    }
  }
};
util.dom.removeEventListener = function(element, type, handler) {
  if(element.removeEventListener !== undefined) {
    element.removeEventListener(type, handler, false)
  }else {
    if(element.detachEvent !== undefined) {
      var eventName = "on" + type;
      if(element[eventName] === undefined) {
        util.dom.__removeCustomIEListener(element, type, handler)
      }else {
        var listenerId = element.__ieTargetId + "_" + type;
        if(handler[listenerId] !== undefined) {
          element.detachEvent("on" + type, handler[listenerId]);
          delete handler[listenerId]
        }
      }
    }
  }
};
util.dom.addOneEventListener = function(element, type, handler) {
  if(element.__onceTargetId === undefined) {
    element.__onceTargetId = "element_" + util.dom.__lastElementId++
  }
  var listenerId = element.__onceTargetId + "_" + type;
  handler[listenerId] = function(event) {
    handler.call(element, event);
    util.dom.removeOneEventListener(element, type, handler)
  };
  util.dom.addEventListener(element, type, handler[listenerId])
};
util.dom.removeOneEventListener = function(element, type, handler) {
  var listenerId = element.__onceTargetId + "_" + type;
  if(handler[listenerId] !== undefined) {
    util.dom.removeEventListener(element, type, handler[listenerId]);
    delete handler[listenerId]
  }
};
util.dom.addChildEventListener = function(element, selector, type, handler) {
  if(selector !== null) {
    if(element.__childTargetId === undefined) {
      element.__childTargetId = "element_" + util.dom.__lastElementId++
    }
    var listenerId = element.__childTargetId + "_" + type + "_" + selector;
    handler[listenerId] = util.dom.__createChildListener(element, selector, handler);
    util.dom.addEventListener(element, type, handler[listenerId])
  }
};
util.dom.__createChildListener = function(element, selector, handler) {
  return function(event) {
    var target = event.target || event.srcElement;
    var child = null;
    if(util.dom.matchesSelector(target, selector)) {
      child = target
    }else {
      child = util.dom.getParentMatches(target, selector, element)
    }
    if(child !== null) {
      handler.call(child, event);
      util.dom.stopPropagation(event)
    }
  }
};
util.dom.removeChildEventListener = function(element, selector, type, handler) {
  if(selector !== null) {
    var listenerId = element.__childTargetId + "_" + type + "_" + selector;
    if(handler[listenerId] !== undefined) {
      util.dom.removeEventListener(element, type, handler[listenerId]);
      delete handler[listenerId]
    }
  }
};
util.dom.__addCustomIEListener = function(element, type, handler) {
  if(element.__customListener === undefined) {
    element.__customListener = function(event) {
      if(event.__type !== undefined) {
        var type = event.__type;
        delete event.__type;
        var handlers = element["__" + type];
        for(var i in handlers) {
          handlers[i].call(element, event)
        }
      }
    };
    element.attachEvent("onhelp", element.__customListener)
  }
  if(element["__" + type] === undefined) {
    element["__" + type] = []
  }
  element["__" + type].push(handler)
};
util.dom.__removeCustomIEListener = function(element, type, handler) {
  var handlers = element["__" + type];
  if(handlers !== undefined) {
    var i = handlers.length - 1;
    while(i >= 0) {
      if(handlers[i] === handler) {
        handlers.splice(i, 1)
      }
      i--
    }
  }
};
util.dom.__dispatchCustomIEEvent = function(element, event, type) {
  event.__type = type;
  return element.fireEvent("onhelp", event)
};
util.dom.__lastElementId = 0;
util.dom.preventDefault = function(event) {
  if(event !== null) {
    if(event.preventDefault !== undefined) {
      event.preventDefault()
    }else {
      event.returnValue = false
    }
  }
};
util.dom.stopPropagation = function(event) {
  if(event !== null) {
    if(event.stopPropagation !== undefined) {
      event.stopPropagation()
    }else {
      event.cancelBubble = true
    }
  }
};
util.dom.getParentMatches = function(element, selector, opt_context) {
  var parent = element.parentNode;
  while(parent !== null && parent !== opt_context && !util.dom.matchesSelector(parent, selector)) {
    parent = parent.parentNode
  }
  return parent === opt_context ? null : parent
};
util.dom.getParentWithClass = function(element, className, opt_context) {
  var parent = element.parentNode;
  while(parent !== null && parent !== opt_context && !util.dom.hasClass(parent, className)) {
    parent = parent.parentNode
  }
  return parent === opt_context ? null : parent
};
util.dom.getElementsByClassName = function(className, opt_element) {
  var element = opt_element || document;
  if(element.getElementsByClassName !== undefined) {
    return util.toArray(element.getElementsByClassName(className))
  }else {
    return util.dom.select("." + className, element)
  }
};
util.dom.hasClass = function(element, className) {
  if(element.classList !== undefined) {
    return element.classList.contains(className)
  }else {
    if(element.className !== undefined) {
      var classRegExp = new RegExp("(\\s|^)" + className + "(\\s|$)");
      return element.className.match(classRegExp) !== null
    }
  }
  return false
};
util.dom.addClass = function(element, className) {
  if(element.classList !== undefined) {
    element.classList.add(className)
  }else {
    if(!util.dom.hasClass(element, className)) {
      element.className += " " + className
    }
  }
};
util.dom.removeClass = function(element, className) {
  if(element.classList !== undefined) {
    element.classList.remove(className)
  }else {
    if(util.dom.hasClass(element, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      element.className = element.className.replace(reg, " ")
    }
  }
};
util.dom.setClassExist = function(element, className, isExist) {
  if(!isExist && util.dom.hasClass(element, className)) {
    util.dom.removeClass(element, className)
  }else {
    if(isExist && !util.dom.hasClass(element, className)) {
      util.dom.addClass(element, className)
    }
  }
};
util.dom.getAttributesData = function(element, opt_prefix) {
  var result = {};
  var prefix = opt_prefix || "data-";
  var attrs = element.attributes;
  var i = 0, l = attrs.length;
  while(i < l) {
    if(attrs[i].name.indexOf(prefix) === 0) {
      result[attrs[i].name.substr(prefix.length)] = attrs[i].value
    }
    i++
  }
  return result
};
util.dom.createFragment = function(html) {
  var fragment = document.createDocumentFragment();
  var tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  var children = tempContainer.childNodes;
  var i = 0, l = children.length;
  while(i < l) {
    fragment.appendChild(children.item(0));
    i++
  }
  return fragment
};

