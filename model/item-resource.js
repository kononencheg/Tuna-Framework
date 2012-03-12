/**
 * @constructor
 * @implements {tuna.model.IResource}
 * @extends {tuna.events.EventDispatcher}
 */
var ItemResource = function () {
    tuna.events.EventDispatcher.call(this);

    /**
     * @type {tuna.model.Record}
     * @private
     */
    this._item = null;
};

tuna.utils.implement(ItemResource, tuna.model.IResource);
tuna.utils.extend(ItemResource, tuna.events.EventDispatcher);

/**
 * @param {tuna.model.Record} item
 */
ItemResource.prototype.set = function(item) {
    this._item = item;

    this.dispatch('update', this._item);
};

/**
 * @return {tuna.model.Record}
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

