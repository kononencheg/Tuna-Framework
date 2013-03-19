var util = {};
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
    if(object !== undefined) {
      result = [opt_path.shift() + (opt_path.length > 0 ? "[" + opt_path.join("][") + "]=" : "=") + encodeURIComponent(String(object))]
    }
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
util.setCookie = function(name, value, opt_time) {
  var expires = "";
  if(typeof opt_time === "number") {
    var date = new Date;
    date.setTime(opt_time + date.getTime());
    expires = "; expires=" + date.toGMTString()
  }
  document.cookie = name + "=" + value + expires + "; path=/"
};
util.getCookie = function(name) {
  var cookies = document.cookie;
  var token = name + "=";
  var tokenIndex = cookies.indexOf(token);
  if(tokenIndex !== -1) {
    var semicolonIndex = cookies.indexOf(";", tokenIndex);
    if(semicolonIndex === -1) {
      return cookies.substring(tokenIndex + token.length)
    }else {
      return cookies.substring(tokenIndex + token.length, semicolonIndex)
    }
  }
  return""
};
util.removeCookie = function(name) {
  var date = new Date;
  date.setTime(date.getTime() - 1E3);
  document.cookie = name + "=0; expires=" + date.toGMTString() + "; path=/"
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
var events = {};
events.VERSION = "0.0.1";
events.Event = function(target, type, opt_isBubbling) {
  this._target = target;
  this._type = type;
  this._isBubbling = !!opt_isBubbling;
  this._isCanceled = false;
  this._isStopped = false;
  this._isImmediateStopped = false
};
events.Event.prototype.getTarget = function() {
  return this._target
};
events.Event.prototype.getType = function() {
  return this._type
};
events.Event.prototype.isBubbling = function() {
  return this._isBubbling
};
events.Event.prototype.preventDefault = function() {
  this._isCanceled = true
};
events.Event.prototype.isDefaultPrevented = function() {
  return this._isCanceled
};
events.Event.prototype.stopImmediatePropagation = function() {
  this._isImmediateStopped = true
};
events.Event.prototype.isImmediatePropagationStopped = function() {
  return this._isImmediateStopped
};
events.Event.prototype.stopPropagation = function() {
  this._isStopped = true
};
events.Event.prototype.isPropagationStopped = function() {
  return this._isImmediateStopped || this._isStopped
};
events.IEventDispatcher = function() {
};
events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {
};
events.IEventDispatcher.prototype.addEventListener = function(type, listener) {
};
events.IEventDispatcher.prototype.removeEventListener = function(type, listener) {
};
events.IEventDispatcher.prototype.hasEventListener = function(type, listener) {
};
events.EventDispatcher = function(opt_propagationParent) {
  this._propagationParent = opt_propagationParent || null;
  this._listeners = {}
};
events.EventDispatcher.prototype.dispatch = function(event, opt_data) {
  if(!(event instanceof events.Event)) {
    event = new events.Event(this, event)
  }
  var type = event.getType();
  if(this._listeners[type] !== undefined) {
    var i = 0, l = this._listeners[type].length;
    while(i < l) {
      this._listeners[type][i].call(this, event, opt_data);
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
events.EventDispatcher.prototype.addEventListener = function(type, listener) {
  if(this._listeners[type] === undefined) {
    this._listeners[type] = [listener]
  }else {
    if(!this.hasEventListener(type, listener)) {
      this._listeners[type].push(listener)
    }
  }
};
events.EventDispatcher.prototype.removeEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    var listenerIndex = util.indexOf(listener, this._listeners[type]);
    if(listenerIndex !== -1) {
      this._listeners[type].splice(listenerIndex, 1)
    }
  }
};
events.EventDispatcher.prototype.hasEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    return util.indexOf(listener, this._listeners[type]) !== -1
  }
  return false
};
var net = {};
net.factory = {};
net.CAN_USE_CORS = window["XMLHttpRequest"] !== undefined && (new XMLHttpRequest)["withCredentials"] !== undefined;
net.createRequest = function(opt_hostOrUrl, opt_isSecure, opt_port, opt_needResult) {
  return(new net.factory.RequestFactory(opt_hostOrUrl, opt_isSecure, opt_port)).createRequest(opt_needResult)
};
net.createSocket = function(opt_hostOrUrl, opt_isSecure, opt_port) {
  return(new net.factory.SocketFactory(opt_hostOrUrl, opt_isSecure, opt_port)).createSocket()
};
net.makeUrl = function(opt_hostOrUrl, opt_isSecure, opt_port, opt_protocol) {
  if(opt_hostOrUrl !== undefined) {
    if(opt_hostOrUrl.indexOf("://") !== -1) {
      return opt_hostOrUrl
    }
    if(opt_hostOrUrl.indexOf("//") === 0) {
      if(opt_protocol !== undefined) {
        return opt_protocol + ":" + opt_hostOrUrl
      }else {
        return opt_hostOrUrl
      }
    }
  }
  var host = opt_hostOrUrl || location.hostname;
  var isSecure = opt_isSecure || location.protocol === "https:";
  var port = (opt_port || location.port || (isSecure ? 443 : 80)) + "";
  var protocol = opt_protocol || "http";
  var url = protocol + (isSecure ? "s" : "") + "://" + host;
  if(port === "443" && isSecure || port === "80" && !isSecure) {
    url += "/"
  }else {
    url += ":" + port + "/"
  }
  return url
};
net.RequestMethod = {GET:"GET", POST:"POST"};
net.RequestEvent = function(target, type, responseStatus) {
  events.Event.call(this, target, type);
  this.__responseStatus = responseStatus
};
util.inherits(net.RequestEvent, events.Event);
net.RequestEvent.COMPLETE = "complete";
net.RequestEvent.prototype.getResponseStatus = function() {
  return this.__responseStatus
};
net.Request = function(url) {
  events.EventDispatcher.call(this);
  this.__url = url.charAt(url.length - 1) === "/" ? url : url + "/";
  this.__method = net.RequestMethod.GET;
  this.__sendQueue = [];
  this.__flush = util.bind(this.__flush, this)
};
util.inherits(net.Request, events.EventDispatcher);
net.Request.prototype.getUrl = function() {
  return this.__url
};
net.Request.prototype.setMethod = function(method) {
  this.__method = method
};
net.Request.prototype.getMethod = function() {
  return this.__method
};
net.Request.prototype.send = function(data, opt_path) {
  if(opt_path === undefined) {
    arguments[1] = ""
  }else {
    if(opt_path.charAt(0) === "/") {
      arguments[1] = opt_path.substr(1)
    }
  }
  this.__sendQueue.push(arguments);
  util.async(this.__flush)
};
net.Request.prototype.cancel = function() {
  this.__sendQueue.length = 0
};
net.Request.prototype.abort = function() {
  if(!this._canSend()) {
    this._handleResult(0)
  }
};
net.Request.prototype._canSend = function() {
  return false
};
net.Request.prototype._doSend = function(data, path) {
};
net.Request.prototype._handleResult = function(status, opt_data) {
  this._reset();
  util.async(this.__flush);
  this.dispatch(new net.RequestEvent(this, net.RequestEvent.COMPLETE, status), opt_data)
};
net.Request.prototype._reset = function() {
};
net.Request.prototype.__flush = function() {
  while(this._canSend() && this.__sendQueue.length > 0) {
    this._doSend.apply(this, this.__sendQueue.shift())
  }
};
net.XhrRequest = function(url) {
  net.Request.call(this, url);
  this.__request = null
};
util.inherits(net.XhrRequest, net.Request);
net.XhrRequest.prototype._canSend = function() {
  return this.__request === null
};
net.XhrRequest.prototype._doSend = function(data, path) {
  this.__request = this.__createRequest();
  if(this.__request !== null) {
    var method = this.getMethod();
    var self = this;
    this.__request.onreadystatechange = function() {
      if(self.__request !== null && self.__request.readyState === 4) {
        var data = self.__request.responseText || "";
        var status = self.__request.status || 500;
        if(status === 1223) {
          status = 204
        }
        self._handleResult(status, data)
      }
    };
    var requestURL = this.getUrl() + path;
    if(method === net.RequestMethod.GET && data.length !== 0) {
      requestURL += (requestURL.indexOf("?") === -1 ? "?" : "&") + data
    }
    this.__request.open(method, encodeURI(requestURL), true);
    var sendData = null;
    if(method !== net.RequestMethod.GET) {
      this.__request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      sendData = data
    }else {
      this.__request.setRequestHeader("Content-Type", "text/plain")
    }
    try {
      this.__request.send(sendData)
    }catch(error) {
      console.error(error.message);
      this._handleResult(500)
    }
  }else {
    console.error("Unable to create instance of XMLHttpRequest.");
    this._handleResult(500)
  }
};
net.XhrRequest.prototype._reset = function() {
  if(this.__request !== null) {
    this.__request.onreadystatechange = util.nop;
    this.__request.abort();
    this.__request = null
  }
};
net.XhrRequest.prototype.__createRequest = function() {
  if(window["XMLHttpRequest"] !== undefined) {
    return new XMLHttpRequest
  }
  if(window["ActiveXObject"] !== undefined) {
    return new ActiveXObject("Microsoft.XMLHTTP")
  }
  return null
};
net.JsonpRequest = function(url) {
  net.Request.call(this, url);
  this.__id = "jspr_" + net.JsonpRequest.__lastId++;
  this.__script = null;
  this.__timeout = -1
};
util.inherits(net.JsonpRequest, net.Request);
net.JsonpRequest.__lastId = 0;
net.JsonpRequest.ERROR_TIMEOUT = 3E4;
net.JsonpRequest.CALLBACK_TABLE = "__jsonp";
net.JsonpRequest.prototype._canSend = function() {
  return this.__script === null
};
net.JsonpRequest.prototype._doSend = function(data, path) {
  var requestURL = this.getUrl() + path;
  if(requestURL.indexOf("?") === -1) {
    requestURL += "?"
  }
  requestURL += util.encodeFormData({"__m":this.getMethod(), "__c":net.JsonpRequest.CALLBACK_TABLE + '["' + this.__id + '"]', "__p":data || undefined}) + "&jsonp";
  var self = this;
  function callback(opt_status, opt_data) {
    self._handleResult(opt_status === undefined ? 404 : 0, opt_data)
  }
  if(window[net.JsonpRequest.CALLBACK_TABLE] === undefined) {
    window[net.JsonpRequest.CALLBACK_TABLE] = {}
  }
  window[net.JsonpRequest.CALLBACK_TABLE][this.__id] = callback;
  this.__script = document.createElement("SCRIPT");
  this.__script.id = this.__id;
  this.__script.src = requestURL;
  this.__script.onreadystatechange = function() {
    if(self.__script.readyState === "complete" || self.__script.readyState === "loaded") {
      callback()
    }
  };
  this.__script.onload = function() {
    callback()
  };
  this.__timeout = setTimeout(callback, net.JsonpRequest.ERROR_TIMEOUT);
  document.body.appendChild(this.__script)
};
net.JsonpRequest.prototype._reset = function() {
  if(this.__timeout !== -1) {
    clearTimeout(this.__timeout)
  }
  if(this.__script !== null) {
    this.__script.onreadystatechange = util.nop;
    this.__script.onload = util.nop;
    document.body.removeChild(this.__script);
    delete window[net.JsonpRequest.CALLBACK_TABLE][this.__script.id];
    this.__script = null
  }
};
net.FormRequest = function(url) {
  net.Request.call(this, url);
  this.__frame = this.__createFrame();
  this.__frame.style.display = "none";
  this.__form = null;
  document.body.appendChild(this.__frame)
};
util.inherits(net.FormRequest, net.Request);
net.FormRequest.__lastId = 0;
net.FormRequest.FRAME_PREFIX = "fr_";
net.FormRequest.prototype._canSend = function() {
  return this.__form === null
};
net.FormRequest.prototype._doSend = function(path, opt_data) {
  this.__form = document.body.appendChild(document.createElement("FORM"));
  this.__form.style.display = "none";
  this.__form.method = this.getMethod();
  this.__form.action = this.getUrl() + path;
  this.__form.target = this.__frame.name;
  if(opt_data !== undefined) {
    this.__form.appendChild(this.__createInput("_=" + opt_data))
  }
  var self = this;
  this.__frame.onreadystatechange = function() {
    if(self.__frame.readyState === "complete" || self.__frame.readyState === "loaded") {
      self._handleResult(200)
    }
  };
  this.__frame.onload = function() {
    self._handleResult(200)
  };
  this.__form.submit()
};
net.FormRequest.prototype._reset = function() {
  this.__frame.onreadystatechange = util.nop;
  this.__frame.onload = util.nop;
  if(this.__form !== null) {
    document.body.removeChild(this.__form);
    this.__form = null
  }
};
net.FormRequest.prototype.__createInput = function(urlToken) {
  var parsedToken = urlToken.split("=");
  var input = document.createElement("INPUT");
  input.type = "hidden";
  input.name = parsedToken[0];
  input.value = parsedToken[1];
  return input
};
net.FormRequest.prototype.__createFrame = function() {
  var name = net.FormRequest.FRAME_PREFIX + (net.FormRequest.__lastId += 1);
  try {
    return document.createElement('<iframe name="' + name + '">')
  }catch(error) {
    var frame = document.createElement("IFRAME");
    frame.name = name;
    return frame
  }
};
net.factory.IRequestFactory = function() {
};
net.factory.IRequestFactory.prototype.createRequest = function(opt_needResult) {
};
net.factory.ISocketFactory = function() {
};
net.factory.ISocketFactory.prototype.createSocket = function() {
};
net.factory.RequestFactory = function(opt_hostOrUrl, opt_isSecure, opt_port) {
  this.__url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port);
  this.__sameDomain = this.__url.indexOf(location.protocol + "//" + location.host + "/") === 0
};
net.factory.RequestFactory.prototype.createRequest = function(opt_needResult) {
  if(this.__sameDomain || net.CAN_USE_CORS) {
    return new net.XhrRequest(this.__url)
  }
  if(opt_needResult === undefined || opt_needResult) {
    return new net.JsonpRequest(this.__url)
  }
  return new net.FormRequest(this.__url)
};
net.factory.SocketFactory = function(opt_hostOrUrl, opt_isSecure, opt_port) {
  this.__url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port, "ws")
};
net.factory.SocketFactory.prototype.createSocket = function() {
  try {
    if(window["WebSocket"] !== undefined) {
      return new WebSocket(this.__url)
    }else {
      if(window["MozWebSocket"] !== undefined) {
        return new window["MozWebSocket"](this.__url)
      }
    }
  }catch(error) {
  }
  return null
};
var tt = {};
tt.VERSION = "0.1.0";
tt.rules = {};
tt.data = {};
tt.view = {};
tt.view.helpers = {};
tt.createTemplate = function(target, sign) {
  return tt.createTemplateFromRules(target, tt.createRules(sign))
};
tt.createTemplateFromRules = function(target, rules) {
  var units = [];
  var i = 0, l = rules.length;
  while(i < l) {
    units = units.concat(rules[i].createTemplateUnits(target));
    i += 1
  }
  return new tt.Template(target, units)
};
tt.createRules = function(sign) {
  var rules = [];
  for(var key in sign) {
    var atIndex = key.indexOf("@");
    var colonIndex = key.indexOf(":");
    if(atIndex !== -1 && colonIndex !== -1 && colonIndex > atIndex) {
      var type = key.substring(0, atIndex);
      var viewHelper = tt.view.createViewHelper(type, sign[key]);
      if(viewHelper !== null) {
        rules.push(new tt.TemplateRule(type, key.substring(atIndex + 1, colonIndex), key.substring(colonIndex + 1), viewHelper))
      }
    }
  }
  return rules
};
tt.Template = function(target, units) {
  this.__target = target;
  this.__units = units
};
tt.Template.prototype.getTarget = function() {
  return this.__target
};
tt.Template.prototype.processData = function(data) {
  this.applyData(new tt.data.DataNode(data))
};
tt.Template.prototype.applyData = function(dataNode) {
  var i = 0, l = this.__units.length;
  while(i < l) {
    this.__units[i].applyData(dataNode);
    i += 1
  }
};
tt.TemplateUnit = function(view, pathEvaluator) {
  this.__view = view;
  this.__pathEvaluator = pathEvaluator
};
tt.TemplateUnit.prototype.applyData = function(dataNode) {
  this.__view.applyTransformation(this.__pathEvaluator.evaluate(dataNode))
};
tt.TemplateRule = function(type, className, dataPath, viewHelper) {
  this.__type = type;
  this.__className = className;
  this.__pathEvaluator = new tt.data.PathEvaluator(dataPath);
  this.__viewHelper = viewHelper
};
tt.TemplateRule.prototype.createTemplateUnits = function(parent) {
  var elements = this.__findTemplateElements(parent);
  var i = 0, l = elements.length;
  var items = new Array(l);
  while(i < l) {
    items[i] = new tt.TemplateUnit(this.__viewHelper.createView(elements[i]), this.__pathEvaluator);
    i += 1
  }
  return items
};
tt.TemplateRule.prototype.__findTemplateElements = function(parent) {
  if(util.dom.hasClass(parent, this.__className)) {
    return[parent]
  }
  return util.dom.getElementsByClassName(this.__className, parent)
};
tt.data.PathEvaluator = function(path) {
  this.__path = path.split("/")
};
tt.data.PathEvaluator.prototype.evaluate = function(node) {
  return this.__applyToken(node, 0)
};
tt.data.PathEvaluator.prototype.__applyToken = function(node, index) {
  if(this.__path.length > index && node.getValue() !== null) {
    return this.__applyToken(this.__fetchNode(this.__path[index], node), index + 1)
  }
  return node
};
tt.data.PathEvaluator.prototype.__fetchNode = function(token, node) {
  if(token.length > 2) {
    return node.growChild(token)
  }
  if(token.length === 0) {
    return node.getRoot()
  }
  if(token === "$") {
    return node.getKey()
  }
  if(token === ".") {
    return node
  }
  if(token === "..") {
    return node.getParent()
  }
  return node.growChild(token)
};
tt.data.DataNode = function(value, opt_parent, opt_key) {
  this.__value = value;
  this.__parent = opt_parent || null;
  this.__key = opt_key === undefined ? "" : opt_key;
  this.__keyNode = null;
  this.__children = {}
};
tt.data.DataNode.__NULL_NODE = new tt.data.DataNode(null);
tt.data.DataNode.prototype.getParent = function() {
  return this.__parent || tt.data.DataNode.__NULL_NODE
};
tt.data.DataNode.prototype.getKey = function() {
  if(this.__keyNode === null) {
    this.__keyNode = new tt.data.DataNode(this.__key)
  }
  return this.__keyNode
};
tt.data.DataNode.prototype.getRoot = function() {
  return this.__parent !== null ? this.__parent.getRoot() : this
};
tt.data.DataNode.prototype.getValue = function() {
  return this.__value
};
tt.data.DataNode.prototype.growChild = function(key) {
  if(this.__children[key] === undefined) {
    if(this.__value !== null && this.__value[key] !== undefined) {
      var node = new tt.data.DataNode(this.__value[key], this, key);
      this.__children[key] = node;
      return node
    }
    return tt.data.DataNode.__NULL_NODE
  }
  return this.__children[key]
};
tt.data.DataNode.prototype.growChildren = function() {
  if(this.__value instanceof Array) {
    var i = 0, l = this.__value.length;
    var items = new Array(l);
    while(i < l) {
      if(this.__children[i] === undefined) {
        this.__children[i] = new tt.data.DataNode(this.__value[i], this, i)
      }
      items[i] = this.__children[i];
      i += 1
    }
    return items
  }else {
    var nodes = [];
    for(var k in this.__value) {
      if(this.__children[k] === undefined) {
        this.__children[k] = new tt.data.DataNode(this.__value[k], this, k)
      }
      nodes.push(this.__children[k])
    }
    return nodes
  }
};
tt.view.helpers.ITemplateViewHelper = function() {
};
tt.view.helpers.ITemplateViewHelper.prototype.createView = function(element) {
};
tt.view.helpers.SimpleViewHelper = function() {
};
tt.view.helpers.SimpleViewHelper.prototype.createView = function(element) {
  return new tt.view.SimpleView(element, this)
};
tt.view.helpers.SimpleViewHelper.prototype.process = function(element, value) {
};
tt.view.helpers.CaseViewHelper = function(cases, caseClasses, regExps, regExpsClasses) {
  this.__cases = cases;
  this.__caseClasses = caseClasses;
  this.__regExps = regExps;
  this.__regExpsClasses = regExpsClasses
};
util.inherits(tt.view.helpers.CaseViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.CaseViewHelper.prototype.process = function(element, value) {
  var str = value === null ? "" : value.toString();
  var i = 0, l = this.__cases.length;
  while(i < l) {
    if(this.__caseClasses[i] !== undefined) {
      util.dom.setClassExist(element, this.__caseClasses[i], this.__cases[i] === str)
    }
    i += 1
  }
  i = 0;
  l = this.__regExps.length;
  while(i < l) {
    if(this.__regExpsClasses[i] !== undefined) {
      util.dom.setClassExist(element, this.__regExpsClasses[i], this.__regExps[i].test(str))
    }
    i += 1
  }
};
tt.view.helpers.TextViewHelper = function(pattern) {
  this.__pattern = pattern
};
util.inherits(tt.view.helpers.TextViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.TextViewHelper.prototype.process = function(element, value) {
  if(this.__pattern.length === 0) {
    element.innerHTML = value
  }else {
    element.innerHTML = this.__pattern.join(value)
  }
};
tt.view.helpers.AttributeViewHelper = function(name, pattern) {
  this.__pattern = pattern;
  this.__attributeName = name
};
util.inherits(tt.view.helpers.AttributeViewHelper, tt.view.helpers.SimpleViewHelper);
tt.view.helpers.AttributeViewHelper.prototype.process = function(element, value) {
  var name = this.__attributeName;
  if(value !== null) {
    var attrValue = this.__pattern.length > 0 ? this.__pattern.join(value) : value;
    if(element[name] === undefined || name === "style") {
      element.setAttribute(name, attrValue)
    }else {
      element[name] = attrValue
    }
  }else {
    if(element[name] === undefined) {
      element.removeAttribute(name)
    }else {
      element[name] = ""
    }
  }
};
tt.view.helpers.ListViewHelper = function(itemRenderer, itemRules, opt_keyPath) {
  this.__itemRenderer = itemRenderer;
  this.__itemRules = itemRules;
  this.__keyPathEvaluator = opt_keyPath === undefined ? null : new tt.data.PathEvaluator(opt_keyPath)
};
tt.view.helpers.ListViewHelper.prototype.createView = function(element) {
  return new tt.view.ListView(element, this)
};
tt.view.helpers.ListViewHelper.prototype.evaluateKey = function(dataNode) {
  if(this.__keyPathEvaluator !== null) {
    return this.__keyPathEvaluator.evaluate(dataNode).getValue()
  }
  return dataNode.getKey().getValue()
};
tt.view.helpers.ListViewHelper.prototype.createItem = function(parent) {
  var target = this.__itemRenderer.cloneNode(true);
  if(target !== null) {
    parent.appendChild(target);
    return tt.createTemplateFromRules(target, this.__itemRules)
  }
  return null
};
tt.view.helpers.ListViewHelper.prototype.removeItem = function(parent, item) {
  parent.removeChild(item.getTarget())
};
tt.view.ITemplateView = function() {
};
tt.view.ITemplateView.prototype.applyTransformation = function(dataNode) {
};
tt.view.SimpleView = function(target, helper) {
  this.__target = target;
  this.__helper = helper;
  this.__lastValue = undefined
};
tt.view.SimpleView.prototype.applyTransformation = function(dataNode) {
  var value = dataNode.getValue();
  if(this.__lastValue !== value) {
    this.__helper.process(this.__target, value);
    this.__lastValue = value
  }
};
tt.view.ListView = function(target, helper) {
  this.__target = target;
  this.__helper = helper;
  this.__items = {}
};
tt.view.ListView.prototype.applyTransformation = function(dataNode) {
  var oldItems = this.__items;
  var newItems = {};
  var dataNodes = dataNode.growChildren();
  var i = 0, l = dataNodes.length;
  while(i < l) {
    var itemDataNode = dataNodes[i];
    var itemTemplate = null;
    var key = this.__helper.evaluateKey(itemDataNode);
    if(oldItems[key] === undefined) {
      itemTemplate = this.__helper.createItem(this.__target)
    }else {
      itemTemplate = oldItems[key];
      delete oldItems[key]
    }
    if(itemTemplate !== null) {
      itemTemplate.applyData(itemDataNode);
      newItems[key] = itemTemplate
    }
    i += 1
  }
  for(key in oldItems) {
    this.__helper.removeItem(this.__target, oldItems[key])
  }
  this.__items = newItems
};
tt.view.TEXT = "text";
tt.view.ATTR = "attr";
tt.view.CASE = "case";
tt.view.LIST = "list";
tt.view.createViewHelper = function(type, options) {
  switch(type) {
    case tt.view.TEXT:
      return tt.view.__createTextViewHelper(options);
    case tt.view.ATTR:
      return tt.view.__createAttributeViewHelper(options);
    case tt.view.CASE:
      return tt.view.__createCaseViewHelper(options);
    case tt.view.LIST:
      return tt.view.__createListViewHelper(options)
  }
  return null
};
tt.view.__createListViewHelper = function(options) {
  var itemRules = [];
  var itemRenderer = null;
  if(typeof options["item-renderer-id"] === "string") {
    var itemRendererPrototype = document.getElementById(options["item-renderer-id"]);
    if(itemRendererPrototype !== null) {
      itemRenderer = itemRendererPrototype.cloneNode(true);
      if(itemRenderer !== null) {
        itemRenderer.removeAttribute("id")
      }
    }
  }
  if(options["item-template"] instanceof Object) {
    itemRules = tt.createRules(options["item-template"])
  }
  if(itemRenderer !== null) {
    return new tt.view.helpers.ListViewHelper(itemRenderer, itemRules)
  }
  return null
};
tt.view.__createTextViewHelper = function(options) {
  var pattern = [];
  if(typeof options["pattern"] === "string") {
    pattern = options["pattern"].split("$$")
  }
  return new tt.view.helpers.TextViewHelper(pattern)
};
tt.view.__createAttributeViewHelper = function(options) {
  var pattern = [];
  if(typeof options["pattern"] === "string") {
    pattern = options["pattern"].split("$$")
  }
  if(typeof options["name"] === "string") {
    return new tt.view.helpers.AttributeViewHelper(options["name"], pattern)
  }
  return null
};
tt.view.__createCaseViewHelper = function(options) {
  var isRegExp = Boolean(options["is-reg-exp"]);
  var cases = [];
  var caseClasses = [];
  var regExps = [];
  var regExpClasses = [];
  for(var key in options["cases"]) {
    if(isRegExp) {
      try {
        regExps.push(new RegExp(key));
        regExpClasses.push(options["cases"][key])
      }catch(error) {
      }
    }else {
      cases.push(key);
      caseClasses.push(options["cases"][key])
    }
  }
  return new tt.view.helpers.CaseViewHelper(cases, caseClasses, regExps, regExpClasses)
};

