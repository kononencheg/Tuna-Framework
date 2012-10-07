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

if (typeof util === 'undefined' ||
    typeof util.dom === 'undefined' ||
    typeof util.VERSION === 'undefined') {
  throw Error('Tuna "util" library must exists.');
}
'use strict';var events = {};
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

