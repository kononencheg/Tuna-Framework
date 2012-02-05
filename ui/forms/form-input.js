/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var FormInput = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {Node}
     */
    this.__message = null;

    /**
     * @private
     * @type {string}
     */
    this.__defaultMessage = '';
};

tuna.utils.extend(FormInput, tuna.ui.ModuleInstance);

/**
 * @override
 */
FormInput.prototype.init = function() {
    this.__message = tuna.dom.selectOne('.j-message', this._target);

    if (this.__message !== null) {
        this.__defaultMessage = this.__message.innerHTML;
    }
};

/**
 * @param {string} message
 */
FormInput.prototype.showErrorMessage = function(message) {
    tuna.dom.addClass(this._target, 'error');

    if (this.__message !== null) {
        this.__message.innerHTML = message;
    }
};

/**
 *
 */
FormInput.prototype.cleanup = function() {
    tuna.dom.removeClass(this._target, 'error');
    if (this.__message !== null) {
        this.__message.innerHTML = this.__defaultMessage;
    }
};

/**
 * @constructor
 * @extends {FormInput}
 */
tuna.ui.forms.FormInput = FormInput;