(function() {

    var PageViewController = function(targetID) {
        tuna.view.ViewController.call(this, targetID);

        this._navigation = null;
    };

    tuna.utils.extend(PageViewController, tuna.view.ViewController);

    PageViewController.prototype.setNavigation = function(navigation) {
        this._navigation = navigation;
    };

    PageViewController.prototype.canClose = function(index) {
        return true;
    };

    PageViewController.prototype.close = function() {};
    
    PageViewController.prototype.open = function(args) {};

    tuna.view.PageViewController = PageViewController;
})();