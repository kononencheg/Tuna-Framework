/**
 * @constructor
 * @implements {tuna.model.IResource}
 * @extends {tuna.events.EventDispatcher}
 */
var ItemResource = function () {
    tuna.events.EventDispatcher.call(this);

    /**
     * @type {Object|tuna.model.Record}
     * @private
     */
    this._item = null;
};


tuna.utils.extend(ItemResource, tuna.events.EventDispatcher);

/**
 * @override
 */
ItemResource.prototype.set = function(item) {
    if (this._item !== item) {
        this._item = item;
        this.dispatch('update', this._item);
    }
};

/**
 * @override
 */
ItemResource.prototype.get = function() {
    return this._item;
};

/**
 * @override
 */
ItemResource.prototype.clear = function() {
    this._item = null;

    this.dispatch('update', this._item);
};

/**
 * @constructor
 * @extends {ItemResource}
 */
tuna.model.ItemResource = ItemResource;

