/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var Popup = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type boolean
     */
    this.__isInit = false;
};

tuna.utils.extend(Popup, tuna.ui.ModuleInstance);

/**
 * @override
 */
Popup.prototype.init = function() {
    if (!this.__isInit) {
        var self = this;

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-close', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.close();
            }
        );

        tuna.dom.addChildEventListener(
            this._target, '.j-popup-apply', 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.apply();
            }
        );
    }
};

/**
 * @return {boolean}
 */
Popup.prototype.isOpen = function() {
    return tuna.dom.hasClass(this._target, 'show');
};

/**
 *
 */
Popup.prototype.open = function() {
    if (this.dispatch('popup-open')) {
        this.__show();
    }
};

/**
 *
 */
Popup.prototype.close = function() {
    if (this.dispatch('popup-close')) {
        this.__hide();
    }
};

/**
 *
 */
Popup.prototype.apply = function() {
    if (this.dispatch('popup-apply', this.__collectData())) {
        this.__hide();
    }
};

/**
 * @private
 */
Popup.prototype.__hide = function() {
    tuna.dom.removeClass(this._target, 'show');
};

/**
 * @private
 */
Popup.prototype.__show = function() {
    tuna.dom.addClass(this._target, 'show');
};

/**
 * @private
 * @return {Object.<string, string>}
 */
Popup.prototype.__collectData = function() {
    var result = {};

    var form = tuna.dom.selectOne('form.j-popup-form', this._target);

    var elements = form.elements;
    var i = 0,
        l = elements.length;

    var name = null;
    while (i < l) {
        name = elements[i].name;

        if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
                result[name] = [result[name]];
            }
            result[name].push(elements[i].value);
        } else {
            result[name] = elements[i].value;
        }

        i++
    }

    return result;
};

/**
 * @constructor
 * @extends {Popup}
 */
tuna.ui.popups.Popup = Popup;