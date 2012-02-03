(function() {

    var IRequest = function() {};

    tuna.utils.extend(IRequest, tuna.events.IEventDispatcher);

    IRequest.prototype.send = function(url) {};
    IRequest.prototype.abort = function() {};

    tuna.net.IRequest = IRequest;

})();
