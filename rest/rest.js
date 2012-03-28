/**
 * @constructor
 * @implements {tuna.rest.IMethodFactory}
 */
var MethodFactory = function() {
    /**
     * @private
     * @type Object.<string, tuna.rest.IMethod>
     */
    this.__methods = {};

    /**
     * @private
     * @type tuna.rest.IMethodFactory
     */
    this.__commonFactory = null;
};



/**
 * @param {tuna.rest.IMethodFactory} factory
 */
MethodFactory.prototype.setDefaultFactory = function(factory) {
    this.__commonFactory = factory;
};

/**
 * @override
 */
MethodFactory.prototype.createMethod = function(name) {
    if (this.__methods[name] !== undefined) {
        return this.__methods[name].clone();
    } else if (this.__commonFactory !== null) {
        return this.__commonFactory.createMethod(name);
    }

    return null;
};

/**
 * @param {string} name
 * @param {tuna.rest.IMethod} method
 */
MethodFactory.prototype.registerMethod = function(name, method) {
    this.__methods[name] = method;
};

/**
 * @type MethodFactory
 */
tuna.rest.methodFactory = new MethodFactory();

/**
 * @param {string} name
 * @param {Object} args
 * @param {function(Object)} callback
 * @param {?string=} recordName
 */
tuna.rest.call = function(name, args, callback, recordName) {

    var method = tuna.rest.methodFactory.createMethod(name);

    if (callback !== undefined) {
        var listener = function(event, data) {
            var result = data;

            if (recordName !== null && recordName !== undefined) {
                result = tuna.rest.populateRecords(data, recordName);
            }

            callback(result);

            method.removeEventListener('result', listener);
        };

        method.addEventListener('result', listener);
    }

    method.call(args);
};

/**
 * @param {Object|Array.<Object>} data
 * @param {string} name
 * @return {tuna.model.Record|Array.<tuna.model.Record>}
 */
tuna.rest.populateRecords = function(data, name) {
    if (data !== null) {
        if (data.splice !== undefined) {
            var result = [];

            var i = 0,
                l = data.length;

            while (i < l) {
                result.push(tuna.rest.__populateRecord(data[i], name));
                i++;
            }

            return result;
        } else {
            return tuna.rest.__populateRecord(data, name);
        }
    }

    return null;
};

/**
 * @param {Object} data
 * @param {string} name
 * @return {tuna.model.Record}
 */
tuna.rest.__populateRecord = function(data, name) {
    var record = tuna.model.recordFactory.createRecord(name);
    record.populate(data);
    return record;
};
