(function() {

    var ViewController = function(targetID) {
        this.__targetID = targetID;

        this._container = null;
        this._target = null;

        this._modules = null;
    };

    tuna.utils.implement(ViewController, tuna.tmpl.ITransformHandler);

    ViewController.prototype.getTargetID = function() {
        return this.__targetID;
    };

    ViewController.prototype.bindContainer = function(container) {
        this._container = container;

        this._target = container.getTarget();

        this._bootstrap(); // TODO: Implement _terminate
    };

    ViewController.prototype._bootstrap = function() {
        this.init();
    };

    ViewController.prototype.init = function() {
        this._requireModules();

        this._container.initModules();

        this._initActions();
    };

    ViewController.prototype._requireModules = function() {};
    ViewController.prototype._initActions = function() {};

    ViewController.prototype.destroy = function() {
        this._container.destroyModules();

        this._destroyActions();
    };

    ViewController.prototype._destroyActions = function() {};

    ViewController.prototype.handleTransformComplete
        = function(target, createdElements, removedElements) {

        var i = 0,
            l = createdElements.length;

        while (i < l) {
            this._container.initModules(createdElements[i]);
            i++;
        }
    };

    tuna.view.ViewController = ViewController;

    var idTable = {};
    
    var mainController = null;

    tuna.view.setMainController = function(controller) {
        mainController = controller;
    };

    tuna.view.registerController = function(controller) {
        idTable[controller.getTargetID()] = controller;
    };

    tuna.view.getController = function(target) {
        if (target === document.body) {
            return mainController;
        } else if (idTable[target.id] !== undefined) {
            return idTable[target.id];
        }

        return null;
    };

})();