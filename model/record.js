(function() {

    var Record = function() {};

    Record.prototype.clone = function() {
        var clone = new this.constructor();
        for (var param in this) {
            if (this.hasOwnProperty(param)) {
                clone[param] = this[param];
            }
        }

        return clone;
    };

    tuna.model.Record = Record;

})();
