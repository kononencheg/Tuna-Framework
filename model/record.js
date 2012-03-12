/**
 * @constructor
 * @param {Object=} data
 */
var Record = function(data) {

    /**
     * @type {string}
     */
    this.id = '';

    if (data !== undefined) {
        this.populate(data);
    }
};

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
 * @param {Object=} options
 * @return {Object}
 */
Record.prototype.serialize = function(options) {};

/**
 * @constructor
 * @extends {Record}
 */
tuna.model.Record = Record;

