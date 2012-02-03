(function() {

    var ListContainerRouter = function(containerElement) {
        this._container = containerElement;
    };

    tuna.utils.implement(ListContainerRouter, tuna.tmpl.units.IListItemRouter);

    ListContainerRouter.prototype.append = function(node) {
        this._container.appendChild(node);
    };

    tuna.tmpl.units.ListContainerRouter = ListContainerRouter;
})();