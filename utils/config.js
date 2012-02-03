(function() {

    var Config = function() {
        this.__data = null;
    };

    Config.prototype.init = function(data) {
        this.__data = data;
    };

    Config.prototype.get = function(key) {
        if (this.__data[key] !== undefined) {
            return this.__data[key];
        }

        return null;
    };

    tuna.utils.сonfig = new Config();
    
})();
