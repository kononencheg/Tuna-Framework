(function() {

    var IItemsCollection = function() {};


    IItemsCollection.prototype.addItem = function(item) {};

    IItemsCollection.prototype.getItemIndex = function(item) {};

    IItemsCollection.prototype.getItemAt = function(index) {};

    IItemsCollection.prototype.clear = function() {};

    IItemsCollection.prototype.mapItems = function(callback) {};


    tuna.ui.selection.items.IItemsCollection = IItemsCollection;
})();