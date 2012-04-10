/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.forms.FormInput = function(target) {
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

tuna.utils.extend(tuna.ui.forms.FormInput, tuna.ui.ModuleInstance);

/**
 * @override
 */
tuna.ui.forms.FormInput.prototype.init = function() {
    this.__message = tuna.dom.selectOne('.j-message', this._target);

    if (this.__message !== null) {
        this.__defaultMessage = this.__message.innerHTML;
    }
};

/**
 * @param {string} message
 */
tuna.ui.forms.FormInput.prototype.showErrorMessage = function(message) {
    tuna.dom.addClass(this._target, 'error');

    if (this.__message !== null) {
        this.__message.innerHTML = message;
    }
};

/**
 *
 */
tuna.ui.forms.FormInput.prototype.cleanup = function() {
    tuna.dom.removeClass(this._target, 'error');
    if (this.__message !== null) {
        this.__message.innerHTML = this.__defaultMessage;
    }
};