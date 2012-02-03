(function() {

    var NamedElementsCollection = function(indexAttribute) {
        this.__indexAttribute = indexAttribute;
        this.__items = {};
    };

    tuna.utils.implement(NamedElementsCollection, tuna.ui.selection.items.IItemsCollection);

    NamedElementsCollection.prototype.addItem = function(item) {
        var index = item.getAttribute(this.__indexAttribute);
        if (index !== null) {
            this.__items[index] = item;
        }

        return index;
    };

    NamedElementsCollection.prototype.getItemIndex = function(item) {
        var index = item.getAttribute(this.__indexAttribute);
        if (index !== null && this.__items[index] !== undefined) {
            return index;
        }

        return null;
    };

    NamedElementsCollection.prototype.getItemAt = function(index) {
        return this.__items[index] || null;
    };

    NamedElementsCollection.prototype.clear = function() {
        this.__items = {};
    };

    NamedElementsCollection.prototype.mapItems = function(callback) {
        for (var index in this.__items) {
            if (this.__items.hasOwnProperty(index)) {
                callback(index, this.__items[index]);
            }
        }
    };

    tuna.ui.selection.items.NamedElementsCollection = NamedElementsCollection;
})();