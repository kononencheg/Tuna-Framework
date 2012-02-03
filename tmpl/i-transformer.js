(function() {

    var ITransformer = function() {};

    ITransformer.prototype.applyTransform = function(data) {};
    ITransformer.prototype.setTransformHandler = function(handler) {};
    ITransformer.prototype.destroy = function() {};

    tuna.tmpl.ITransformer = ITransformer;

})();