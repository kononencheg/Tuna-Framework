(function() {

    var ITransformHandler = function() {};

    ITransformHandler.prototype.handleTransformStart
        = function(target) {};

    ITransformHandler.prototype.handleTransformComplete
        = function(target, createdElements, removedElements) {};

    ITransformHandler.prototype.handleDestroy
        = function(target, removedElements) {};

    tuna.tmpl.ITransformHandler = ITransformHandler;

})();