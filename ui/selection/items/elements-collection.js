/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 */
var ElementsCollection = function() {

    /**
     * @private
     * @type Array.<Node>
     */
    this.__items = [];
};

tuna.utils.implement
    (ElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
ElementsCollection.prototype.addItem = function(item) {
    return this.__items.push(item) - 1;
};

/**
 * @override
 */
ElementsCollection.prototype.getItemIndex = function(item) {
    return tuna.utils.indexOf(item, this.__items);
};

/**
 * @override
 */
ElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
ElementsCollection.prototype.clear = function() {
    this.__items.length = 0;
};

/**
 * @override
 */
ElementsCollection.prototype.mapItems = function(callback) {
    var i = 0,
        l = this.__items.length;

    while (i < l) {
        callback(i, this.__items[i]);

        i++;
    }
};


/**
 * @override
 */
ElementsCollection.prototype.getItemsCount = function() {
    return this.__items.length;
};


/**
 * @constructor
 * @extends {ElementsCollection}
 */
tuna.ui.selection.items.ElementsCollection = ElementsCollection;