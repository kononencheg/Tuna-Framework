/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.forms.Form = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type Node
     */
    this.__formMessage = null;

    /**
     * @private
     * @type Object.<string, tuna.ui.forms.FormInput>
     */
    this.__inputTable = {};

    /**
     * @private
     * @type ?string
     */
    this.__recordName = null;
};

tuna.utils.extend(tuna.ui.forms.Form, tuna.ui.ModuleInstance);

/**
 * @override
 */
tuna.ui.forms.Form.prototype.init = function() {
    this.__recordName = this.getStringOption('record-type');
    this.__formMessage = tuna.dom.selectOne('.j-form-message', this._target);

    var callbackInput = document.createElement('input');
    callbackInput.type = 'hidden';
    callbackInput.name = '__callback';

    this._target.appendChild(callbackInput);

    var self = this;

    tuna.dom.addEventListener(this._target, 'submit', function(event) {
        if (self.isEnabled()) {
            callbackInput.value
                = 'form_callback' + (Math.random() + '').substr(2);

            window[callbackInput.value] = function(response) {
                self.__handleResponse(tuna.utils.clone(response));
                window[callbackInput.value] = undefined;
            };

            self.__prepareTo(event.type, event);
        } else {
            tuna.dom.preventDefault(event);
        }
    });

    tuna.dom.addEventListener(this._target, 'reset', function(event) {
        if (self.isEnabled()) {
            self.__prepareTo(event.type, event);
        } else {
            tuna.dom.preventDefault(event);
        }
    });
};

/**
 * @param {string} name
 * @return {?string|Array.<string>}
 */
tuna.ui.forms.Form.prototype.getValue = function(name) {
    var result = null;

    var element = this._target.elements[name];
    if (element !== undefined) {
        var isCheck = false;

        if (element.value === undefined) {
            var i = 0,
                l = element.length;

            result = [];

            while (i < l) {
                isCheck = element[i].type === 'checkbox' ||
                          element[i].type === 'radio';

                if (!isCheck || (isCheck && element[i].checked)) {
                    result.push(element[i].value);
                }

                i++;
            }

        } else {
            isCheck = element.type === 'checkbox' ||
                      element.type === 'radio';

            if (!isCheck || (isCheck && element.checked)) {
                result = element.value;
            }
        }
    }

    return result;
};

/**
 *
 * @param {string} name
 * @param {string|Array.<string>} value
 */
tuna.ui.forms.Form.prototype.setValue = function(name, value) {
    var element = this._target.elements[name];
    if (element !== undefined) {
        if (element.value === undefined) {
            var i = 0,
                l = element.length;

            var stringValue = '';
            var arrayValue = [];

            if (value instanceof Array) {
                arrayValue = tuna.utils.cloneArray(value);
                stringValue = value.join(',');
            } else {
                stringValue = value + '';
                arrayValue = [ stringValue ];
            }

            var index = -1;
            while (i < l) {
                if (element[i].type === 'radio') {
                    element[i].checked = element[i].value === stringValue;
                } else if (element[i].type === 'checkbox') {
                    index = tuna.utils.indexOf(element[i].value, arrayValue);

                    element[i].checked = index !== -1;

                    if (index !== -1) {
                        arrayValue.splice(index, 1);
                    }
                } else {
                    element.value = stringValue;
                }

                i++;
            }

        } else {
            if (element.type === 'checkbox' ||
                element.type === 'radio') {
                element.checked = element.value === value;
            } else {
                element.value = value;
            }
        }
    }
};

/**
 *
 * @param {string} name
 * @param {boolean} isEnabled
 */
tuna.ui.forms.Form.prototype.setInputEnabled = function(name, isEnabled) {
    var element = this._target.elements[name];
    if (element !== undefined) {
        if (element.value === undefined) {
            var i = 0,
                l = element.length;

            while (i < l) {
                if (isEnabled) {
                    element[i].removeAttribute('disabled');
                } else {
                    element[i].setAttribute('disabled', true);
                }

                i++;
            }
        } else {
            if (isEnabled) {
                element.removeAttribute('disabled');
            } else {
                element.setAttribute('disabled', true);
            }
        }
    }
};

/**
 * 
 */
tuna.ui.forms.Form.prototype.submit = function() {
    this.__prepareTo('submit');
    this._target.submit();
};

/**
 *
 */
tuna.ui.forms.Form.prototype.reset = function() {
    this.__prepareTo('reset');
    this._target.reset();
};

/**
 * @return {Object}
 */
tuna.ui.forms.Form.prototype.serialize = function() {
    return tuna.ui.forms.serialize(this._target);
};

/**
 * @param {string} type
 * @param {!Event=} event
 */
tuna.ui.forms.Form.prototype.__prepareTo = function(type, event) {
    if (this.dispatch(type)) {
        this.__clearMessage();
        this.__clearInputs();
    } else if (event !== undefined) {
        tuna.dom.preventDefault(event);
    }
};

/**
 * @private
 * @param {Object} data
 */
tuna.ui.forms.Form.prototype.__handleResponse = function(data) {
    var response = data['response'];
    var errors = data['errors'];

    if (response !== undefined) {
        if (this.__recordName !== null) {
            response = tuna.rest.populateRecords(response, this.__recordName);
        }

        this.dispatch('result', response);
    } else if (errors !== undefined) {
        this.__showErrors(errors);
        this.dispatch('error', errors);
    }
};

/**
 * @private
 * @param {Array.<Object>} errors
 */
tuna.ui.forms.Form.prototype.__showErrors = function(errors) {
    var i = 0,
        l = errors.length;

    var error = null;
    while (i < l) {
        error = errors[i];
        if (error['param'] !== undefined) {
            this.__showInputError(error['param'], error['message']);
        } else {
            this.__showErrorMessage(error['message']);
        }

        i++;
    }
};

/**
 * @private
 * @param {string} name
 * @return {tuna.ui.forms.FormInput}
 */
tuna.ui.forms.Form.prototype.__getFormInput = function(name) {
    var result = null;

    if (this.__inputTable[name] === undefined) {
        var inputWrapper
            = tuna.dom.selectOne('.j-' + name + '-input', this._target);

        if (inputWrapper !== null) {
            var input = new tuna.ui.forms.FormInput(inputWrapper);
            input.init();

            this.__inputTable[name] = input;
        }
    }

    if (this.__inputTable[name] !== undefined) {
        result = this.__inputTable[name];
    }

    return result;
};

/**
 * @private
 */
tuna.ui.forms.Form.prototype.__clearMessage = function() {
    if (this.__formMessage !== null) {
        this.__formMessage.innerHTML = '';
        tuna.dom.addClass(this.__formMessage, 'hide');
    }
};

/**
 * @private
 * @param {string} message
 */
tuna.ui.forms.Form.prototype.__showErrorMessage = function(message) {
    if (this.__formMessage !== null) {
        this.__formMessage.innerHTML += message + '<br />';
        tuna.dom.removeClass(this.__formMessage, 'hide');
    }
};

/**
 * @private
 * @param {string} name
 * @param {string} message
 */
tuna.ui.forms.Form.prototype.__showInputError = function(name, message) {
    var formInput = this.__getFormInput(name);
    if (formInput !== null) {
        formInput.showErrorMessage(message);
    } else {
        this.__showErrorMessage(message);
    }
};

/**
 * @private
 */
tuna.ui.forms.Form.prototype.__clearInputs = function() {
    for (var name in this.__inputTable) {
        this.__inputTable[name].cleanup();
    }
};