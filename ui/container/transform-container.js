/**
 * @constructor
 * @extends {tuna.ui.container.Container}
 * @param {!Node} target
 */
var TransformContainer = function(target) {
    tuna.ui.container.Container.call(this, target);

    /**
     * @private
     * @type tuna.view.ViewController
     */
    this.__controller = null;

    /**
     * @private
     * @type tuna.tmpl.ITransformer
     */
    this.__transformer = null;

    this._setDefaultOption('template-id', null);
    this._setDefaultOption('init-event', null);
};

tuna.utils.extend(TransformContainer, tuna.ui.container.Container);

/**
 * @param {tuna.tmpl.ITransformer} transformer
 */
TransformContainer.prototype.setTransformer = function(transformer) {
    this.__transformer = transformer;
};

/**
 * @override
 */
TransformContainer.prototype.render = function(element) {
    tuna.ui.container.Container.prototype.render.call(this, element);

    if (this.__controller !== null) {
        this.__controller.init();
    }
};

/**
 * @override
 */
TransformContainer.prototype.clear = function() {
    tuna.ui.container.Container.prototype.clear.call(this);

    if (this.__controller !== null) {
        this.__controller.destroy();
    }
};

/**
 * @override
 */
TransformContainer.prototype.init = function() {
    var initEvent = this.getOption('init-event');
    if (initEvent !== null) {
        var self = this;
        tuna.dom.addOneEventListener(this._target, initEvent, function(event) {
            self.__initContainer();
        });
    } else {
        this.__initContainer();
    }
};

/**
 * @private
 */
TransformContainer.prototype.__initContainer = function() {
    this.__controller = tuna.view.getController(this._target);

    if (this.__controller !== null) {
        if (this.__transformer !== null) {
            this.__transformer.setTransformHandler(this.__controller);
        }

        this.__controller.setContainer(this);
        this.__controller.bootstrap();
    }
};

/**
 * @param {Object} data
 */
TransformContainer.prototype.applyData = function(data) {
    if (this.__transformer !== null) {
        this.__transformer.applyTransform(data);
    }
};

tuna.ui.container.TransformContainer = TransformContainer;
