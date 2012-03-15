/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var SWF = function(target) {
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

tuna.utils.extend(SWF, tuna.ui.ModuleInstance);

/**
 * @override
 */
SWF.prototype.init = function() {
    this.__movieId = 'swf_' + tuna.ui.flash.__lastId++;

    this._target.innerHTML = '<div id="' + this.__movieId + '"></div>';

    swfobject.embedSWF(
        this.getStringOption('src'), this.__movieId,
        this.getNumberOption('width'), this.getNumberOption('height'),
        '10.0.0', null,
        this.getStringOption('flashvars'), {
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
SWF.prototype.destroy = function() {
    this._target.innerHTML = '';
    this.__movieId = null;
    this.__movie = null;
};

/**
 *
 */
SWF.prototype.reset = function() {
    this.destroy();
    this.init();
};

/**
 * @return {HTMLObjectElement}
 */
SWF.prototype.getMovie = function() {
    if (this.__movieId !== null && this.__movie === null) {
        this.__movie = swfobject.getObjectById(this.__movieId);
    }

    return this.__movie;
};


/**
 * @constructor
 * @extends {SWF}
 */
tuna.ui.flash.SWF = SWF;