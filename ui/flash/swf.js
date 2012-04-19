/**
 * @constructor
 * @extends tuna.ui.ModuleInstance
 * @param {!Node} target
 */
tuna.ui.flash.SWF = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {?string}
     */
    this.__movieId = null;

    /**
     * @private
     * @type HTMLObjectElement
     */
    this.__movie = null;

    this._setDefaultOption('wmode', 'opaque');
    this._setDefaultOption('menu', false);
    this._setDefaultOption('allow-fullscreen', false);
    this._setDefaultOption('allow-script-access', 'always');
};

tuna.utils.extend(tuna.ui.flash.SWF, tuna.ui.ModuleInstance);

/**
 * @override
 */
tuna.ui.flash.SWF.prototype.init = function() {
    this.__movieId = 'swf_' + tuna.ui.flash.__lastId++;

    this._target.innerHTML = '<div id="' + this.__movieId + '"></div>';

    var flashvars = tuna.utils.urlDecode(this.getStringOption('flashvars'));

    swfobject.embedSWF(
        this.getStringOption('src'), this.__movieId,
        this.getStringOption('width'), this.getStringOption('height'),
        '10.0.0', null, flashvars, {
            'wmode': this.getStringOption('wmode'),
            'allowfullscreen': this.getStringOption('allow-fullscreen'),
            'allowscriptaccess': this.getStringOption('allow-script-access'),
            'menu': this.getStringOption('menu')
        }
    );
};

/**
 *
 */
tuna.ui.flash.SWF.prototype.destroy = function() {
    this._target.innerHTML = '';
    this.__movieId = null;
    this.__movie = null;
};

/**
 *
 */
tuna.ui.flash.SWF.prototype.reset = function() {
    this.destroy();
    this.init();
};

/**
 * @return {HTMLObjectElement}
 */
tuna.ui.flash.SWF.prototype.getMovie = function() {
    if (this.__movieId !== null && this.__movie === null) {
        this.__movie = swfobject.getObjectById(this.__movieId);
    }

    return this.__movie;
};