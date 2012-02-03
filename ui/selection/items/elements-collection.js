(function() {

    var ElementsCollection = function() {
        this.__items = [];
    };

    tuna.utils.implement(ElementsCollection, tuna.ui.selection.items.IItemsCollection);

    ElementsCollection.prototype.addItem = function(item) {
        return this.__items.push(item) - 1;
    };

    ElementsCollection.prototype.getItemIndex = function(item) {
        return tuna.utils.indexOf(item, this.__items);
    };

    ElementsCollection.prototype.getItemAt = function(index) {
        return this.__items[index] || null;
    };

    ElementsCollection.prototype.clear = function() {
        this.__items.length = 0;
    };

    ElementsCollection.prototype.mapItems = function(callback) {
        var i = 0,
            l = this.__items.length;

        while (i < l) {
            callback(i, this.__items[i]);

            i++;
        }
    };

    tuna.ui.selection.items.ElementsCollection = ElementsCollection;
})();