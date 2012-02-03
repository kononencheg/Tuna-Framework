(function() {

    var IItemCompiler = function() {};

    IItemCompiler.prototype.compile
        = function(element, templateSettings, template) {};

    tuna.tmpl.compilers.IItemCompiler = IItemCompiler;
})();