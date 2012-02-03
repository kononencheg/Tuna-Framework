(function() {

    var StateViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this.__currentState = null;
    };

    tuna.utils.extend(StateViewController, tuna.view.ViewController);

    StateViewController.prototype._setCurrentState = function(state) {
        this.__currentState = state;
    };

    StateViewController.prototype._requireModules = function() {
        this.__currentState.requireModules(this._container);
    };

    StateViewController.prototype._initActions = function(modules) {
        this.__currentState.initActions(modules);
    };

    tuna.view.StateViewController = StateViewController;
})();