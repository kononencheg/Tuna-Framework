/**
 * @constructor
 * @implements {tuna.tmpl.units.IListItemRouter}
 * @param {Node} container
 */
tuna.tmpl.units.ListContainerRouter = function(container) {

    /**
     * @protected
     * @type Node
     */
    this._container = container;
};

/**
 * @override
 */
tuna.tmpl.units.ListContainerRouter.prototype.append = function(node) {
    this._container.appendChild(node);
};