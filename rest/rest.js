(function() {

    tuna.rest.call = function(name, args, callback) {
        if (typeof args === 'function') {
            callback = args;
            args = null;
        }

        var method = tuna.rest.factory.createMethod(name);

        if (callback !== undefined) {
            method.addEventListener('result', function(event, result) {
                callback(result);
                method.removeEventListener('result', arguments.callee)
            });
        }

        method.call(args);
    };

})();
