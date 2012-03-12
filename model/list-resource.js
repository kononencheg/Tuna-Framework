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
     * @type {?string}
     * @protected
     */
    this._methodName = methodName || null;

    /**
     * @type {string}
     * @protected
     */
    this._recordType = recordType || null;

    /**
     * @type {Array.<tuna.model.Record>}
     * @private
     */
    this._list = [];
};

tuna.utils.implement(ListResource, tuna.model.IResource);
tuna.utils.extend(ListResource, tuna.events.EventDispatcher);

/**
 * @param {Object} args
 */
ListResource.prototype.load = function(args) {
    var self = this;
    if (this._methodName !== null) {
        tuna.rest.call(this._methodName, args || null, function(records) {
            self.set(records);
        }, this._recordType);
    }
};

/**
 * @param {Array.<tuna.model.Record>} list
 */
ListResource.prototype.set = function(list) {
    this._list = list;

    this.dispatch('update', this._list);
};

/**
 * @return {Array.<tuna.model.Record>}
 */
ListResource.prototype.get = function() {
    return this._list;
};

/**
 * @override
 */
ListResource.prototype.clear = function() {
    this._list.length = 0;

    this.dispatch('update', this._list);
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
 * @constructor
 * @extends {ListResource}
 */
tuna.model.ListResource = ListResource;

