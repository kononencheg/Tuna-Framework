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

    this.__callbackName = Form.CALLBACK_PREFIX + (Math.random() + '').substr(2);
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
    this.__formMessage = tuna.dom.selectOne('.j-form-message', this._target);

    var self = this;
    tuna.dom.addEventListener(this._target, 'submit', function(event) {
        self.__prepareToSubmit(event);
    });

    var callbackInput = document.createElement('input');
    callbackInput.type = 'hidden';
    callbackInput.name = '__callback';
    callbackInput.value = this.__callbackName;

    this._target.appendChild(callbackInput);
};

/**
 * 
 */
Form.prototype.submit = function() {
    this.__prepareToSubmit();
    this._target.submit();
};

/**
 * @param {Event=} event
 */
Form.prototype.__prepareToSubmit = function(event) {
    if (this.dispatch('submit')) {
        this.__clearMessage();
        this.__clearInputs();
        
        this.__registerCallback();
    } else if (event !== undefined) {
        tuna.dom.preventDefault(event);
    }
};

/**
 * @private
 */
Form.prototype.__registerCallback = function() {
    var self = this;

    window[this.__callbackName] = function(response) {
        self.__handleResponse(response);
        
        delete window[self.__callbackName];
    };
};

/**
 * @private
 * @param {Object} data
 */
Form.prototype.__handleResponse = function(data) {
    var response = data['response'];
    var errors = data['errors'];

    if (response !== undefined) {
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
        if (error.param !== undefined) {
            this.__showInputError(error.param, error.message);
        } else {
            this.__showErrorMessage(error.message);
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
        tuna.dom.removeClass(this.__formMessage, 'error');
        tuna.dom.addClass(this.__formMessage, 'hide');
        this.__formMessage.innerHTML = '';
    }
};

/**
 * @private
 * @param {string} message
 */
Form.prototype.__showErrorMessage = function(message) {
    this.__formMessage.innerHTML += message + '<br />';

    tuna.dom.addClass(this.__formMessage, 'error');
    tuna.dom.removeClass(this.__formMessage, 'hide');
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