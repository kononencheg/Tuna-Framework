/**
 * @constructor
 */
var Record = function() {};

/**
 * @return {tuna.model.Record}
 */
Record.prototype.clone = function() {
    var clone = new this.constructor();
    for (var param in this) {
        if (this.hasOwnProperty(param)) {
            clone[param] = this[param];
        }
    }

    return clone;
};

/**
 * @param {Object} data
 */
Record.prototype.populate = function(data) {};

/**
 * @return {Object}
 */
Record.prototype.serialize = function() {};

/**
 * @constructor
 * @extends {Record}
 */
tuna.model.Record = Record;

