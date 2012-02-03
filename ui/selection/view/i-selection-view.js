(function() {

    var ISelectionView = function() {};


    ISelectionView.prototype.applySelectionAt = function(index) {};

    ISelectionView.prototype.destroySelectionAt = function(index) {};


    ISelectionView.prototype.disableItemAt = function(index) {};

    ISelectionView.prototype.enableItemAt = function(index) {};

    ISelectionView.prototype.update = function() {};


    tuna.ui.selection.view.ISelectionView = ISelectionView;
})();