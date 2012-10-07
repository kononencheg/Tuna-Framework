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
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


if (typeof util === 'undefined' ||
    typeof util.dom === 'undefined' ||
    typeof util.VERSION === 'undefined') {
  throw Error('Tuna "util" library must exists.');
}

if (typeof events === 'undefined') {
  throw Error('Tuna "events" library must exists.');
}
'use strict';var net = {};
net.VERSION = "0.0.1";
net.CAN_USE_CORS = window["XMLHttpRequest"] !== undefined && (new window["XMLHttpRequest"])["withCredentials"] !== undefined;
net.__CURRENT_URL = location.protocol + "//" + location.host + "/";
net.createRequest = function(opt_hostOrUrl, opt_isSecure, opt_port, opt_needResult) {
  var url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port);
  if(net.CAN_USE_CORS || url.indexOf(net.__CURRENT_URL) === 0) {
    return new net.XhrRequest(url)
  }
  if(opt_needResult === undefined ? true : opt_needResult) {
    return new net.JsonpRequest(url)
  }
  return new net.FormRequest(url)
};
net.createSocket = function(opt_hostOrUrl, opt_isSecure, opt_port) {
  var url = net.makeUrl(opt_hostOrUrl, opt_isSecure, opt_port, "ws");
  if(window["WebSocket"] !== undefined) {
    return new WebSocket(url)
  }else {
    if(window["MozWebSocket"] !== undefined) {
      return new window["MozWebSocket"](url)
    }
  }
  return null
};
net.makeUrl = function(opt_hostOrUrl, opt_isSecure, opt_port, opt_protocol) {
  if(opt_hostOrUrl.indexOf("://") !== -1) {
    return opt_hostOrUrl
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
net.RequestData = function(status, data) {
  this.__status = status;
  this.__data = data
};
net.RequestData.prototype.getStatus = function() {
  return this.__status
};
net.RequestData.prototype.getData = function() {
  return this.__data
};
net.Request = function(url) {
  events.EventDispatcher.call(this);
  this.__url = url.charAt(url.length - 1) === "/" ? url : url + "/";
  this.__sendQueue = [];
  this.__method = net.Request.METHOD_GET
};
util.inherits(net.Request, events.EventDispatcher);
net.Request.METHOD_GET = "GET";
net.Request.METHOD_POST = "POST";
net.Request.prototype.getMethod = function() {
  return this.__method
};
net.Request.prototype.setMethod = function(method) {
  this.__method = method
};
net.Request.prototype.getUrl = function() {
  return this.__url
};
net.Request.prototype.send = function(opt_path, opt_data) {
  if(opt_path === undefined) {
    arguments[0] = ""
  }else {
    if(opt_path.charAt(0) === "/") {
      arguments[0] = opt_path.substr(1)
    }
  }
  this.__sendQueue.push(arguments);
  this._process()
};
net.Request.prototype.abort = function() {
  this.__sendQueue.length = 0
};
net.Request.prototype._process = function() {
  if(this._canSend()) {
    while(this.__sendQueue.length > 0) {
      this._doSend.apply(this, this.__sendQueue.shift())
    }
  }
};
net.Request.prototype._canSend = function() {
  return false
};
net.Request.prototype._doSend = function(path, opt_data) {
};
net.JsonpRequest = function(url) {
  net.Request.call(this, url);
  this.__id = net.JsonpRequest.ID_PREFIX + (net.JsonpRequest.__lastId += 1);
  this.__script = null
};
util.inherits(net.JsonpRequest, net.Request);
net.JsonpRequest.__lastId = 0;
net.JsonpRequest.ID_PREFIX = "jspr_";
net.JsonpRequest.ERROR_TIMEOUT = 3E4;
net.JsonpRequest.CALLBACK_TABLE = "__jsonp";
net.JsonpRequest.prototype.abort = function() {
  net.Request.prototype.abort.call(this);
  if(this.__script !== null) {
    window[net.JsonpRequest.CALLBACK_TABLE][this.__id](0)
  }
};
net.JsonpRequest.prototype._canSend = function() {
  return this.__script === null
};
net.JsonpRequest.prototype._doSend = function(path, opt_data) {
  var requestURL = this.getUrl() + path;
  var metaData = {"__m":this.getMethod(), "__c":net.JsonpRequest.CALLBACK_TABLE + '["' + this.__id + '"]'};
  if(requestURL.indexOf("?") === -1) {
    requestURL += "?"
  }
  if(opt_data instanceof Object) {
    requestURL += util.encodeFormData(opt_data)
  }else {
    if(opt_data !== undefined) {
      metaData["__p"] = opt_data
    }
  }
  requestURL += "&__&" + util.encodeFormData(metaData);
  var self = this;
  var timeout = -1;
  function callback(opt_status, opt_data) {
    var status = opt_status === undefined ? 404 : opt_status;
    var data = opt_data || "";
    clearTimeout(timeout);
    self.__handleResult(status, data)
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
  timeout = setTimeout(callback, net.JsonpRequest.ERROR_TIMEOUT);
  document.body.appendChild(this.__script)
};
net.JsonpRequest.prototype.__handleResult = function(status, data) {
  this.__script.onreadystatechange = util.nop;
  this.__script.onload = util.nop;
  document.body.removeChild(this.__script);
  this.__script = null;
  delete window[net.JsonpRequest.CALLBACK_TABLE][this.__id];
  if(status !== 0) {
    this._process();
    this.dispatch("complete", new net.RequestData(status, data))
  }
};
net.XhrRequest = function(url) {
  net.Request.call(this, url);
  var self = this;
  this.__request = null;
  this.__handleReadyStateChange = function() {
    if(self.__request !== null && self.__request.readyState === 4) {
      self.__handleResult()
    }
  }
};
util.inherits(net.XhrRequest, net.Request);
net.XhrRequest.prototype.abort = function() {
  net.Request.prototype.abort.call(this);
  if(this.__request !== null) {
    this.__request.onreadystatechange = util.nop;
    this.__request.abort();
    this.__request = null
  }
};
net.XhrRequest.prototype._canSend = function() {
  return this.__request === null
};
net.XhrRequest.prototype._doSend = function(path, opt_data) {
  this.__request = this.__createRequest();
  if(this.__request !== null) {
    var sendData = null;
    var requestURL = this.getUrl() + path;
    var requestMethod = this.getMethod();
    var dataString = "";
    if(opt_data instanceof Object) {
      dataString += util.encodeFormData(opt_data)
    }else {
      if(opt_data !== undefined) {
        dataString += opt_data
      }
    }
    if(requestMethod === net.Request.METHOD_GET && dataString !== "") {
      requestURL += (requestURL.indexOf("?") === -1 ? "?" : "&") + dataString
    }
    this.__request.onreadystatechange = this.__handleReadyStateChange;
    this.__request.open(requestMethod, encodeURI(requestURL), true);
    if(requestMethod !== net.Request.METHOD_GET) {
      this.__request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      sendData = dataString
    }else {
      this.__request.setRequestHeader("Content-Type", "text/plain")
    }
    this.__request.send(sendData)
  }else {
    console.error("Can't create native XMLHttpRequest.")
  }
};
net.XhrRequest.prototype.__handleResult = function() {
  var status = this.__request.status || 500;
  if(status === 1223) {
    status = 204
  }
  var data = this.__request.responseText || "";
  this.__request.onreadystatechange = util.nop;
  this.__request = null;
  this._process();
  this.dispatch("complete", new net.RequestData(status, data))
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
net.FormRequest.prototype.abort = function() {
  net.Request.prototype.abort.call(this);
  this.__clearRequest()
};
net.FormRequest.prototype._doSend = function(path, opt_data) {
  this.__form = document.body.appendChild(document.createElement("FORM"));
  this.__form.style.display = "none";
  this.__form.method = this.getMethod();
  this.__form.action = this.getUrl() + path;
  this.__form.target = this.__frame.name;
  var inputs = [];
  if(opt_data instanceof Object) {
    var tokens = util.tokenizeUrlData(opt_data);
    while(tokens.length > 0) {
      inputs.push(this.__createInput(tokens.shift()))
    }
  }else {
    if(opt_data !== undefined) {
      inputs.push(this.__createInput("_=" + opt_data))
    }
  }
  while(inputs.length > 0) {
    this.__form.appendChild(inputs.shift())
  }
  var self = this;
  this.__frame.onreadystatechange = function() {
    if(self.__frame.readyState === "complete" || self.__frame.readyState === "loaded") {
      self.__handleResult()
    }
  };
  this.__frame.onload = function() {
    self.__handleResult()
  };
  this.__form.submit()
};
net.FormRequest.prototype.__handleResult = function() {
  this.__clearRequest();
  this.dispatch("complete", new net.RequestData(200, ""));
  this._process()
};
net.FormRequest.prototype.__clearRequest = function() {
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

