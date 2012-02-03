(function() {

    var Factory = function() {
        this.__methods = {};
        this.__factory = null;
    };

    tuna.utils.implement(Factory, tuna.rest.IFactory);

    Factory.prototype.setDefaultFactory = function(factory) {
        this.__factory = factory;
    };

    Factory.prototype.createMethod = function(name) {
        if (this.__methods[name] !== undefined) {
            return this.__methods[name].clone();
        } else if (this.__factory !== null) {
            return this.__factory.createMethod(name);
        }

        return null;
    };

    Factory.prototype.addMethod = function(name, method) {
        this.__methods[name] = method;
    };

    tuna.rest.factory = new Factory();

})();
