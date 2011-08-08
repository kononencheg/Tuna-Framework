/**
 * TUNA FRAMEWORK
 * 
 * @file dom.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

if (!COMPILED) {
	tuna.namespace("tuna.dom");
}

tuna.dom.addEventListener = function(element, type, handler, name) {
	if (element.addEventListener !== undefined) {
		element.addEventListener(type, handler, false);
	} else if (element.attachEvent !== undefined) {
		element.attachEvent("on" + type, handler);
	}

	if (name !== undefined) {
		if (element.__listeners === undefined) {
			element.__listeners = {};
		}
		
		element.__listeners[name] = handler;
	}
};

tuna.dom.removeEventListener = function(element, type, handler) {
	var handlerFunction = null;
	if (typeof handler === "string") {
		if (element.__listeners !== undefined) {
			handlerFunction = element.__listeners[handler];
			delete element.__listeners[handler];
		}
	} else {
		handlerFunction = handler;
	}

	if (element.removeEventListener !== undefined) {
		element.removeEventListener(type, handlerFunction, false);
	} else if (element.detachEvent !== undefined) {
		element.detachEvent("on" + type, handlerFunction);
	}
};

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

tuna.dom.getChildAt = function(parent, index) {
	return parent.childNodes[index];
};

tuna.dom.getParentWithClass = function(node, className) {
	var parent = node;
	
	var re = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
	while (parent !== undefined && !re.test(parent.className)) {
		parent = parent.parentNode;
	}

	return parent;
};

tuna.dom.hasClass = function(element, className) {
	return element.className.match
		(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

tuna.dom.addClass = function(element, className) {
	if (!tuna.dom.hasClass(element, className)) {
		element.className += " " + className;
	}
};

tuna.dom.removeClass = function(element, className) {
	if (tuna.dom.hasClass(element, className)) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		element.className = element.className.replace(reg, ' ');
	}
};
