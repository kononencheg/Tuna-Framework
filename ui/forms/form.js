/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Form = function(target) {
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
     * @type string
     */
    this.__callbackName = Form.CALLBACK_PREFIX + (Math.random() + '').substr(2);

    /**
     * @private
     * @type ?string
     */
    this.__recordName = null;
};

tuna.utils.extend(Form, tuna.ui.ModuleInstance);

/**
 * @const
 * @type string
 */
Form.CALLBACK_PREFIX = 'form_callback';

/**
 * @override
 */
Form.prototype.init = function() {
    this.__recordName = this.getStringOption('record-type');
    this.__formMessage = tuna.dom.selectOne('.j-form-message', this._target);


    var callbackInput = document.createElement('input');
    callbackInput.setAttribute('type', 'hidden');
    callbackInput.setAttribute('name', '__callback');

    this._target.appendChild(callbackInput);

    var self = this;
    var prepareListener = function(event) {
        if (self._isEnabled) {
            callbackInput.setAttribute('value', self.__callbackName);
            self.__prepareTo(event.type, event);
        } else {
            tuna.dom.preventDefault(event);
        }
    };

    tuna.dom.addEventListener(this._target, 'submit', prepareListener);
    tuna.dom.addEventListener(this._target, 'reset', prepareListener);

    window[this.__callbackName] = function(response) {
        self.__handleResponse(response);
    };
};

/**
 * @param {string} name
 * @return {string|number|Object}
 */
Form.prototype.getValue = function(name) {
    var data = tuna.ui.forms.serialize(this._target);

    if (data[name] !== undefined) {
        return data[name];
    }

    return null;
};

/**
 * 
 */
Form.prototype.submit = function() {
    this.__prepareTo('submit');
    this._target.submit();
};

/**
 *
 */
Form.prototype.reset = function() {
    this.__prepareTo('reset');
    this._target.reset();
};

/**
 * @param {string} type
 * @param {Event=} event
 */
Form.prototype.__prepareTo = function(type, event) {
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
Form.prototype.__handleResponse = function(data) {
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
Form.prototype.__showErrors = function(errors) {
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
Form.prototype.__getFormInput = function(name) {
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
Form.prototype.__clearMessage = function() {
    if (this.__formMessage !== null) {
        this.__formMessage.innerHTML = '';
        tuna.dom.addClass(this.__formMessage, 'hide');
    }
};

/**
 * @private
 * @param {string} message
 */
Form.prototype.__showErrorMessage = function(message) {
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
Form.prototype.__showInputError = function(name, message) {
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
Form.prototype.__clearInputs = function() {
    for (var name in this.__inputTable) {
        this.__inputTable[name].cleanup();
    }
};

/**
 * @constructor
 * @extends {Form}
 */
tuna.ui.forms.Form = Form;