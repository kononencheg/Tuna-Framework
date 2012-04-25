var tuna = {};
tuna.VERSION = "1.0.580";
tuna.IS_IE = !!eval("'\v' == 'v'");
tuna.net = {};
tuna.dom = {};
tuna.events = {};
tuna.utils = {};
tuna.utils.Config = function() {
  this.__data = null
};
tuna.utils.Config.prototype.init = function(data) {
  this.__data = data
};
tuna.utils.Config.prototype.get = function(var_keys) {
  var args = tuna.utils.toArray(arguments);
  var result = this.__data;
  var i = 0, l = args.length;
  var key = null;
  while(i < l) {
    key = args[i];
    if(result[key] !== undefined) {
      result = result[key]
    }else {
      result = null;
      break
    }
    i++
  }
  return result
};
tuna.utils.Config.prototype.set = function(key, value) {
  this.__data[key] = value
};
tuna.utils.toArray = function(list) {
  return list === null ? [] : Array.prototype.slice.call(list)
};
tuna.utils.dateToString = function(date) {
  return date.toJSON().substring(0, 16).replace("T", " ")
};
tuna.utils.__ExtendLink = function() {
};
tuna.utils.extend = function(Class, Parent) {
  tuna.utils.__ExtendLink.prototype = Parent.prototype;
  Class.prototype = new tuna.utils.__ExtendLink;
  Class.prototype.constructor = Class
};
tuna.utils.eval = function(code) {
  return window.execScript !== undefined ? window.execScript(code) : window.eval(code)
};
tuna.utils.bind = function(func, context) {
  if(func.bind !== undefined) {
    return func.bind(context)
  }else {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
      return func.apply(context, tuna.utils.toArray(arguments))
    }
  }
};
tuna.utils.nextTick = function(callback) {
  setTimeout(callback, 0)
};
tuna.utils.clone = function(object) {
  return JSON.parse(JSON.stringify(object))
};
tuna.utils.cloneArray = function(array) {
  return array.slice(0)
};
tuna.utils.isObjectsEquals = function(object1, object2) {
  var result = object1 === object2;
  if(!result && object1 !== null && object2 !== null) {
    result = true;
    for(var key in object1) {
      if(object1[key] instanceof Object && object2[key] instanceof Object) {
        result = result && tuna.utils.isObjectsEquals(object1[key], object2[key])
      }else {
        result = result && object1[key] === object2[key]
      }
    }
  }
  return result
};
tuna.utils.indexOf = function(element, array) {
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
tuna.utils.urlEncode = function(object) {
  return tuna.utils.__splitUrlData(object).join("&")
};
tuna.utils.__splitUrlData = function(object, path) {
  var result = [];
  if(path === undefined) {
    path = []
  }
  if(object !== null && !(object instanceof Function)) {
    if(object instanceof Object) {
      for(var key in object) {
        var newPath = path.length === 0 ? [key] : (path.join(",") + "," + key).split(",");
        result = result.concat(tuna.utils.__splitUrlData(object[key], newPath))
      }
    }else {
      result = [path.shift() + (path.length > 0 ? "[" + path.join("][") + "]=" : "=") + encodeURIComponent("" + object)]
    }
  }
  return result
};
tuna.utils.__DECODE_HELPER = "|";
tuna.utils.urlDecode = function(search) {
  var result = {};
  var parsedSearch = search.split("][").join(tuna.utils.__DECODE_HELPER);
  parsedSearch = parsedSearch.split("[").join(tuna.utils.__DECODE_HELPER);
  parsedSearch = parsedSearch.split("]").join("");
  var vars = parsedSearch.split("&");
  var i = 0, l = vars.length;
  var pair = null;
  var path = null;
  var pathToken = null;
  var context = null;
  while(i < l) {
    pair = vars[i].split("=");
    path = pair.shift().split(tuna.utils.__DECODE_HELPER);
    context = result;
    while(path.length > 0) {
      pathToken = path.shift();
      if(path.length === 0) {
        context[pathToken] = decodeURIComponent(pair.shift())
      }else {
        if(context[pathToken] === undefined) {
          context[pathToken] = {}
        }
      }
      context = context[pathToken]
    }
    i++
  }
  return result
};
tuna.utils.config = new tuna.utils.Config;
tuna.dom.setSelectorEngine = function(engine) {
  tuna.dom.__selectorEngine = engine
};
tuna.dom.select = function(selector, opt_context) {
  if(tuna.dom.__selectorEngine !== null) {
    return tuna.dom.__selectorEngine(selector, opt_context)
  }
  return[]
};
tuna.dom.selectOne = function(selector, opt_context) {
  if(tuna.dom.__selectorEngine !== null) {
    var result = tuna.dom.__selectorEngine(selector, opt_context);
    if(result.length > 0) {
      return result[0]
    }
  }
  return null
};
tuna.dom.matches = function(selector, elements) {
  if(tuna.dom.__selectorEngine !== null) {
    return tuna.dom.__selectorEngine.matches(selector, elements)
  }
  return[]
};
tuna.dom.matchesSelector = function(element, selector) {
  if(tuna.dom.__selectorEngine !== null) {
    return tuna.dom.__selectorEngine.matchesSelector(element, selector)
  }
  return false
};
tuna.dom.__selectorEngine = null;
tuna.dom.dispatchEvent = function(element, type) {
  var result = false;
  var event = null;
  if(document.createEventObject !== undefined) {
    event = document.createEventObject();
    var eventName = "on" + type;
    if(element[eventName] === undefined) {
      tuna.dom.__dispatchCustomIEEvent(element, event, type)
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
tuna.dom.addEventListener = function(element, type, handler) {
  if(element.addEventListener !== undefined) {
    element.addEventListener(type, handler, false)
  }else {
    if(element.attachEvent !== undefined) {
      var eventName = "on" + type;
      if(element[eventName] === undefined) {
        tuna.dom.__addCustomIEListener(element, type, handler)
      }else {
        if(element.__ieTargetId === undefined) {
          element.__ieTargetId = "element_" + tuna.dom.__lastElementId++
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
tuna.dom.removeEventListener = function(element, type, handler) {
  if(element.removeEventListener !== undefined) {
    element.removeEventListener(type, handler, false)
  }else {
    if(element.detachEvent !== undefined) {
      var eventName = "on" + type;
      if(element[eventName] === undefined) {
        tuna.dom.__removeCustomIEListener(element, type, handler)
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
tuna.dom.addOneEventListener = function(element, type, handler) {
  if(element.__onceTargetId === undefined) {
    element.__onceTargetId = "element_" + tuna.dom.__lastElementId++
  }
  var listenerId = element.__onceTargetId + "_" + type;
  handler[listenerId] = function(event) {
    handler.call(element, event);
    tuna.dom.removeOneEventListener(element, type, handler)
  };
  tuna.dom.addEventListener(element, type, handler[listenerId])
};
tuna.dom.removeOneEventListener = function(element, type, handler) {
  var listenerId = element.__onceTargetId + "_" + type;
  if(handler[listenerId] !== undefined) {
    tuna.dom.removeEventListener(element, type, handler[listenerId]);
    delete handler[listenerId]
  }
};
tuna.dom.addChildEventListener = function(element, selector, type, handler) {
  if(element.__childTargetId === undefined) {
    element.__childTargetId = "element_" + tuna.dom.__lastElementId++
  }
  var listenerId = element.__childTargetId + "_" + type + "_" + selector;
  handler[listenerId] = function(event) {
    var target = event.target || event.srcElement;
    var child = null;
    if(tuna.dom.matchesSelector(target, selector)) {
      child = target
    }else {
      child = tuna.dom.getParentMatches(target, selector, element)
    }
    if(child !== null) {
      handler.call(child, event);
      tuna.dom.stopPropagation(event)
    }
  };
  tuna.dom.addEventListener(element, type, handler[listenerId])
};
tuna.dom.removeChildEventListener = function(element, selector, type, handler) {
  var listenerId = element.__childTargetId + "_" + type + "_" + selector;
  if(handler[listenerId] !== undefined) {
    tuna.dom.removeEventListener(element, type, handler[listenerId]);
    delete handler[listenerId]
  }
};
tuna.dom.__addCustomIEListener = function(element, type, handler) {
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
tuna.dom.__removeCustomIEListener = function(element, type, handler) {
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
tuna.dom.__dispatchCustomIEEvent = function(element, event, type) {
  event.__type = type;
  return element.fireEvent("onhelp", event)
};
tuna.dom.__lastElementId = 0;
tuna.dom.preventDefault = function(event) {
  if(event.preventDefault !== undefined) {
    event.preventDefault()
  }else {
    event.returnValue = false
  }
};
tuna.dom.stopPropagation = function(event) {
  if(event.stopPropagation !== undefined) {
    event.stopPropagation()
  }else {
    event.cancelBubble = true
  }
};
tuna.dom.getParentMatches = function(element, selector, opt_context) {
  var parent = element.parentNode;
  while(parent !== null && parent !== opt_context && !tuna.dom.matchesSelector(parent, selector)) {
    parent = parent.parentNode
  }
  return parent === opt_context ? null : parent
};
tuna.dom.getParentWithClass = function(element, className, opt_context) {
  var parent = element.parentNode;
  while(parent !== null && parent !== opt_context && !tuna.dom.hasClass(parent, className)) {
    parent = parent.parentNode
  }
  return parent === opt_context ? null : parent
};
tuna.dom.getElementsByClassName = function(className, element) {
  element = element || document;
  if(element.getElementsByClassName !== undefined) {
    return tuna.utils.toArray(element.getElementsByClassName(className))
  }else {
    return tuna.dom.select("." + className, element)
  }
};
tuna.dom.hasClass = function(element, className) {
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
tuna.dom.addClass = function(element, className) {
  if(element.classList !== undefined) {
    element.classList.add(className)
  }else {
    if(!tuna.dom.hasClass(element, className)) {
      element.className += " " + className
    }
  }
};
tuna.dom.removeClass = function(element, className) {
  if(element.classList !== undefined) {
    element.classList.remove(className)
  }else {
    if(tuna.dom.hasClass(element, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      element.className = element.className.replace(reg, " ")
    }
  }
};
tuna.dom.setClassExist = function(element, className, isExist) {
  if(!isExist && tuna.dom.hasClass(element, className)) {
    tuna.dom.removeClass(element, className)
  }else {
    if(isExist && !tuna.dom.hasClass(element, className)) {
      tuna.dom.addClass(element, className)
    }
  }
};
tuna.dom.getAttributesData = function(element) {
  var result = {};
  var prefix = "data-";
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
tuna.dom.createFragment = function(html) {
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
tuna.events.BasicEvent = function(target, type, opt_isBubbling) {
  this._target = target;
  this._type = type;
  this._isBubbling = !!opt_isBubbling;
  this._isCanceled = false;
  this._isStopped = false;
  this._isImmediateStopped = false
};
tuna.events.BasicEvent.prototype.getTarget = function() {
  return this._target
};
tuna.events.BasicEvent.prototype.getType = function() {
  return this._type
};
tuna.events.BasicEvent.prototype.isBubbling = function() {
  return this._isBubbling
};
tuna.events.BasicEvent.prototype.preventDefault = function() {
  this._isCanceled = true
};
tuna.events.BasicEvent.prototype.isDefaultPrevented = function() {
  return this._isCanceled
};
tuna.events.BasicEvent.prototype.stopImmediatePropagation = function() {
  this._isImmediateStopped = true
};
tuna.events.BasicEvent.prototype.isImmediatePropagationStopped = function() {
  return this._isImmediateStopped
};
tuna.events.BasicEvent.prototype.stopPropagation = function() {
  this._isStopped = true
};
tuna.events.BasicEvent.prototype.isPropagationStopped = function() {
  return this._isImmediateStopped || this._isStopped
};
tuna.events.IEventDispatcher = function() {
};
tuna.events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {
};
tuna.events.IEventDispatcher.prototype.addEventListener = function(type, listener) {
};
tuna.events.IEventDispatcher.prototype.removeEventListener = function(type, listener) {
};
tuna.events.IEventDispatcher.prototype.hasEventListener = function(type, listener) {
};
tuna.events.EventDispatcher = function(opt_propagationParent) {
  this._propagationParent = opt_propagationParent || null;
  this._listeners = {}
};
tuna.events.EventDispatcher.prototype.dispatch = function(event, opt_data) {
  if(!(event instanceof tuna.events.BasicEvent)) {
    event = new tuna.events.BasicEvent(this, event)
  }
  var data = opt_data !== undefined ? opt_data : null;
  var type = event.getType();
  if(this._listeners[type] !== undefined) {
    var i = 0, l = this._listeners[type].length;
    while(i < l) {
      this._listeners[type][i].call(this, event, data);
      if(event.isImmediatePropagationStopped()) {
        break
      }
      i++
    }
    if(this._propagationParent !== null && event.isBubbling() && !event.isPropagationStopped()) {
      this._propagationParent.dispatch(event)
    }
  }
  return!event.isDefaultPrevented()
};
tuna.events.EventDispatcher.prototype.addEventListener = function(type, listener) {
  if(this._listeners[type] === undefined) {
    this._listeners[type] = [listener]
  }else {
    if(!this.hasEventListener(type, listener)) {
      this._listeners[type].push(listener)
    }
  }
};
tuna.events.EventDispatcher.prototype.removeEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    var listenerIndex = tuna.utils.indexOf(listener, this._listeners[type]);
    if(listenerIndex !== -1) {
      this._listeners[type].splice(listenerIndex, 1)
    }
  }
};
tuna.events.EventDispatcher.prototype.hasEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    return tuna.utils.indexOf(listener, this._listeners[type]) !== -1
  }
  return false
};
tuna.net.IRequest = function() {
};
tuna.utils.extend(tuna.net.IRequest, tuna.events.IEventDispatcher);
tuna.net.IRequest.prototype.send = function(opt_data) {
};
tuna.net.IRequest.prototype.abort = function() {
};
tuna.net.Request = function(opt_url, opt_isSync) {
  tuna.events.EventDispatcher.call(this);
  this.__url = opt_url || "/";
  this.__isSync = !!opt_isSync;
  this.__method = tuna.net.Request.METHOD_GET;
  this.__headers = {};
  this.__data = null;
  this.__requests = []
};
tuna.utils.extend(tuna.net.Request, tuna.events.EventDispatcher);
tuna.net.Request.METHOD_GET = "GET";
tuna.net.Request.METHOD_POST = "POST";
tuna.net.Request.prototype.setURL = function(url) {
  this.__url = url
};
tuna.net.Request.prototype.setData = function(data) {
  this.__data = data
};
tuna.net.Request.prototype.setMethod = function(method) {
  this.__method = method
};
tuna.net.Request.prototype.addHeader = function(name, value) {
  this.__headers[name] = value
};
tuna.net.Request.prototype.removeHeader = function(name) {
  delete this.__headers[name]
};
tuna.net.Request.prototype.send = function(opt_data) {
  if(opt_data !== undefined) {
    this.__data = opt_data
  }
  var request = !tuna.IS_IE ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
  if(!this.__isSync) {
    var self = this;
    request.onreadystatechange = function() {
      if(request.readyState === 4) {
        self.dispatch("complete", request.responseText);
        self.__removeRequest(request);
        request.abort()
      }
    }
  }
  for(var name in this.__headers) {
    request.setRequestHeader(name, this.__headers[name])
  }
  var requestURL = this.__url;
  var dataString = tuna.utils.urlEncode(this.__data);
  if(this.__method === tuna.net.Request.METHOD_GET && dataString.length !== 0) {
    requestURL += (requestURL.indexOf("?") === -1 ? "?" : "&") + dataString
  }
  request.open(this.__method, encodeURI(requestURL), !this.__isSync);
  var sendData = null;
  if(this.__method !== tuna.net.Request.METHOD_GET) {
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    sendData = dataString
  }
  request.send(sendData);
  if(this.__isSync) {
    this.dispatch("complete", request.responseText)
  }else {
    this.__requests.push(request)
  }
};
tuna.net.Request.prototype.abort = function() {
  while(this.__requests.length > 0) {
    this.__requests.shift().abort()
  }
};
tuna.net.Request.prototype.__removeRequest = function(request) {
  var i = 0, l = this.__requests.length;
  while(i < l) {
    if(this.__requests[i] === request) {
      this.__requests.splice(i, 1)
    }
    i++
  }
};

