/**
 * @constructor
 * @implements tuna.ui.selection.items.IItemsCollection
 * @param {string} indexAttribute
 */
tuna.ui.selection.items.NamedElementsCollection = function(indexAttribute) {
    /**
     * @private
     * @type string
     */
    this.__indexAttribute = indexAttribute;

    /**
     * @private
     * @type Object.<(string|number), Node>
     */
    this.__items = {};
};

/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.addItem
    = function(item) {

    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null) {
        this.__items[index] = item;
    }

    return index;
};

/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.getItemIndex
    = function(item) {

    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null && this.__items[index] !== undefined) {
        return index;
    }

    return null;
};

/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.getItemAt
    = function(index) {

    return this.__items[index] || null;
};

/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.clear = function() {
    this.__items = {};
};

/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.mapItems
    = function(callback) {

    for (var index in this.__items) {
        callback(index, this.__items[index]);
    }
};


/**
 * @override
 */
tuna.ui.selection.items.NamedElementsCollection.prototype.getItemsCount
    = function() {

    var i = 0;
    for (var _ in this.__items) {
        i++;
    }

    return i;
};