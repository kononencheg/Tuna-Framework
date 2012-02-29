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
 * @param {Array.<tuna.model.Record>} records
 * @return {Array.<Object>}
 */
tuna.model.serializeArray = function(records) {
    var result = [];

    var i = 0,
        l = records.length;
    while (i < l) {
        result.push(records[i].serialize());

        i++;
    }

    return result;
};