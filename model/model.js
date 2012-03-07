/**
 * @constructor
 */
var RecordFactory = function () {
    /**
     * @private
     * @type Object.<string, tuna.model.Record>
     */
    this.__records = {};
};

/**
 *
 * @param {string} name
 * @param {tuna.model.Record} record
 */
RecordFactory.prototype.registerRecord = function(name, record) {
    this.__records[name] = record;
};

/**
 *
 * @param {string} name
 * @return {tuna.model.Record}
 */
RecordFactory.prototype.createRecord = function(name) {
    return this.__records[name].clone();
};

/**
 * @type RecordFactory
 */
tuna.model.recordFactory = new RecordFactory();

/**
 * @param {Object|tuna.model.Record|Array.<tuna.model.Record>} object
 * @return {Object}
 */
tuna.model.serialize = function(object) {
    if (object !== null) {
        if (object instanceof Array) {
            var result = [];

            var i = 0,
                l = object.length;

            while (i < l) {
                result.push(object[i].serialize());

                i++;
            }

            return result;
        } else if (object instanceof tuna.model.Record) {
            return object.serialize();
        }

        return object;
    }

    return null;
};

/**
 * @param {Date} date
 * @return {string}
 */
tuna.model.serializeDate = function(date) {
    return date.toJSON().substring(0, 16).replace('T', ' ');
};