/**
 * @constructor
 * @implements tuna.ui.selection.items.IItemsCollection
 */
tuna.ui.selection.items.ElementsCollection = function() {

    /**
     * @private
     * @type Array.<Node>
     */
    this.__items = [];
};

/**
 * @override
 */
tuna.ui.selection.items.ElementsCollection.prototype.addItem = function(item) {
    return this.__items.push(item) - 1;
};

/**
 * @override
 */
tuna.ui.selection.items.ElementsCollection.prototype.getItemIndex
    = function(item) {

    return tuna.utils.indexOf(item, this.__items);
};

/**
 * @override
 */
tuna.ui.selection.items.ElementsCollection.prototype.getItemAt
    = function(index) {

    return this.__items[index] || null;
};

/**
 * @override
 */
tuna.ui.selection.items.ElementsCollection.prototype.clear = function() {
    this.__items.length = 0;
};

/**
 * @override
 */
tuna.ui.selection.items.ElementsCollection.prototype.mapItems
    = function(callback) {

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
tuna.ui.selection.items.ElementsCollection.prototype.getItemsCount
    = function() {

    return this.__items.length;
};