/**
 * @constructor
 * @extends {tuna.ui.ModuleInstance}
 * @param {!Node} target
 */
var SWF = function(target) {
    tuna.ui.ModuleInstance.call(this, target);

    /**
     * @private
     * @type {string}
     */
    this.__movieId = '';

    /**
     * @private
     * @type HTMLObjectElement
     */
    this.__movie = null;

    this._setDefaultOption('wmode', 'window');
    this._setDefaultOption('menu', false);
    this._setDefaultOption('allow-fullscreen', false);
    this._setDefaultOption('allow-script-access', 'always');
};

tuna.utils.extend(SWF, tuna.ui.ModuleInstance);

/**
 * @override
 */
SWF.prototype.init = function() {
    if (this._target.id === '') {
        this._target.id = 'swf_' + tuna.ui.flash.__lastId++;
    }

    this.__movieId = this._target.id;

    swfobject.embedSWF(
        this.getOption('src'), this._target.id,
        this.getOption('width'), this.getOption('height'),
        '10.0.0', null, this.getOption('flashvars'), {
            'wmode': this.getOption('wmode'),
            'allowfullscreen': this.getOption('allow-fullscreen'),
            'allowscriptaccess': this.getOption('allow-script-access'),
            'menu': this.getOption('menu')
        }
    );
};

/**
 * @return {HTMLObjectElement}
 */
SWF.prototype.getMovie = function() {
    if (this.__movie === null) {
        this.__movie = swfobject.getObjectById(this.__movieId);
    }

    return this.__movie;
};


/**
 * @constructor
 * @extends {SWF}
 */
tuna.ui.flash.SWF = SWF;