(function() {

    var TransformContainer = function(target, parent) {
        tuna.ui.container.Container.call(this, target, parent);

        this.__controller = null;
        this.__transformer = null;
    };

    tuna.utils.extend(TransformContainer, tuna.ui.container.Container);

    TransformContainer.prototype.setTransformer = function(transformer) {
        this.__transformer = transformer;
    };

    TransformContainer.prototype.render = function(element) {
        tuna.ui.container.Container.prototype.render.call(this, element);

        if (this.__controller !== null) {
            this.__controller.init();
        }
    };

    TransformContainer.prototype.clear = function() {
        tuna.ui.container.Container.prototype.clear.call(this);

        if (this.__controller !== null) {
            this.__controller.destroy();
        }
    };

    TransformContainer.prototype.init = function() {
        this.__controller = tuna.view.getController(this._target);
        
        if (this.__controller !== null) {
            if (this.__transformer !== null) {
                this.__transformer.setTransformHandler(this.__controller);
            }

            this.__controller.bindContainer(this);
        }
    };

    TransformContainer.prototype.applyData = function(data) {
        if (this.__transformer !== null) {
            this.__transformer.applyTransform(data);
        }
    };

    tuna.ui.container.TransformContainer = TransformContainer;

})();