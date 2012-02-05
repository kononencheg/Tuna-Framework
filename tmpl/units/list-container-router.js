/**
 * @constructor
 * @implements {tuna.tmpl.units.IListItemRouter}
 * @param {Node} container
 */
var ListContainerRouter = function(container) {

    /**
     * @protected
     * @type Node
     */
    this._container = container;
};

tuna.utils.implement(ListContainerRouter, tuna.tmpl.units.IListItemRouter);

/**
 * @override
 */
ListContainerRouter.prototype.append = function(node) {
    this._container.appendChild(node);
};

/**
 * @constructor
 * @extends {ListContainerRouter}
 */
tuna.tmpl.units.ListContainerRouter = ListContainerRouter;