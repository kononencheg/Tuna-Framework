/**
 * @constructor
 * @implements {tuna.model.IResource}
 * @extends {tuna.events.EventDispatcher}
 * @param {string=} methodName
 * @param {string=} recordType
 */
var ListResource = function (methodName, recordType) {
    tuna.events.EventDispatcher.call(this);

    /**
     * @type {Object}
     * @private
     */
    this.__lastArgs = null;

    /**
     * @type {?string}
     * @protected
     */
    this._methodName = methodName || null;

    /**
     * @type {?string}
     * @protected
     */
    this._recordType = recordType || null;

    /**
     * @type {Object|Array.<tuna.model.Record>}
     * @private
     */
    this._list = [];
};

tuna.utils.implement(ListResource, tuna.model.IResource);
tuna.utils.extend(ListResource, tuna.events.EventDispatcher);

/**
 * @param {Object=} args
 * @param {boolean=} isForce
 */
ListResource.prototype.load = function(args, isForce) {
    var self = this;

    if (isForce || args === undefined ||
       !tuna.utils.isObjectsEquals(this.__lastArgs, args)) {

        if (this._methodName !== null) {
            tuna.rest.call(this._methodName, args || null, function(records) {
                self.set(records);
            }, this._recordType);
        }

        this.__lastArgs = args || null;
    }
};

/**
 * @override
 */
ListResource.prototype.set = function(list) {
    if (this._list !== list) {
        this._list = list;
        this.dispatch('update', this._list);
    }
};

/**
 * @override
 */
ListResource.prototype.get = function() {
    return this._list;
};

/**
 * @override
 */
ListResource.prototype.clear = function() {
    if (this._list.length > 0) {
        this._list.length = 0;
        this.dispatch('update', this._list);
    }
};

/**
 * @param {tuna.model.Record} record
 */
ListResource.prototype.addItem = function(record) {
    var i = 0,
        l = this._list.length;

    while (i < l) {
        if (this._list[i].id === record.id) {

            break;
        }

        i++;
    }

    this._list[i] = record;

    this.dispatch('update', this._list);
};

/**
 * @param {tuna.model.Record} record
 */
ListResource.prototype.removeItem = function(record) {
    this.removeItemById(record.id);
};

/**
 * @param {string} id
 */
ListResource.prototype.removeItemById = function(id) {
    var i = 0,
        l = this._list.length;

    while (i < l) {
        if (this._list[i].id === id) {
            this._list.splice(i, 1);

            break;
        }

        i++;
    }

    this.dispatch('update', this._list);
};

/**
 * @param {string} id
 * @return {tuna.model.Record}
 */
ListResource.prototype.getItemById = function(id) {
    var i = 0,
        l = this._list.length;

    while (i < l) {
        if (this._list[i].id === id) {
            return this._list[i];
        }

        i++;
    }

    return null;
};

/**
 * @param {!function(tuna.model.Record):boolean} callback
 * @return {Array.<tuna.model.Record>}
 */
ListResource.prototype.find = function(callback) {
    var result = [];

    var i = 0,
        l = this._list.length;

    while (i < l) {
        if (callback(this._list[i])) {
            result.push(this._list[i]);
        }

        i++;
    }

    return result;
};

/**
 * @param {!function(tuna.model.Record):boolean} callback
 * @return {tuna.model.Record}
 */
ListResource.prototype.findOne = function(callback) {
    var i = 0,
        l = this._list.length;

    while (i < l) {
        if (callback(this._list[i])) {
            return this._list[i];
        }

        i++;
    }

    return null;
};

/**
 * @param {!function(tuna.model.Record):*} callback
 * @return {Array}
 */
ListResource.prototype.map = function(callback) {
    var result = [];

    var i = 0,
        l = this._list.length;

    var item = null;
    while (i < l) {
        item = callback(this._list[i]);
        if (item !== null) {
            result.push(item);
        }

        i++;
    }

    return result;
};

/**
 * @param {!function(tuna.model.Record)} callback
 */
ListResource.prototype.each = function(callback) {
    var i = 0,
        l = this._list.length;

    while (i < l) {
        callback(this._list[i]);

        i++;
    }
};


/**
 * @constructor
 * @extends {ListResource}
 */
tuna.model.ListResource = ListResource;

