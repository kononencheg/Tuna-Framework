/**
 * @constructor
 * @implements {tuna.ui.selection.items.IItemsCollection}
 * @param {string} indexAttribute
 */
var NamedElementsCollection = function(indexAttribute) {
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

tuna.utils.implement
    (NamedElementsCollection, tuna.ui.selection.items.IItemsCollection);

/**
 * @override
 */
NamedElementsCollection.prototype.addItem = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null) {
        this.__items[index] = item;
    }

    return index;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemIndex = function(item) {
    var index = item.getAttribute(this.__indexAttribute);
    if (index !== null && this.__items[index] !== undefined) {
        return index;
    }

    return null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.getItemAt = function(index) {
    return this.__items[index] || null;
};

/**
 * @override
 */
NamedElementsCollection.prototype.clear = function() {
    this.__items = {};
};

/**
 * @override
 */
NamedElementsCollection.prototype.mapItems = function(callback) {
    for (var index in this.__items) {
        callback(index, this.__items[index]);
    }
};


/**
 * @override
 */
ElementsCollection.prototype.getItemsCount = function() {
    var i = 0;
    for (var index in this.__items) {
        i++;
    }

    return i;
};


/**
 * @constructor
 * @extends {NamedElementsCollection}
 */
tuna.ui.selection.items.NamedElementsCollection = NamedElementsCollection;