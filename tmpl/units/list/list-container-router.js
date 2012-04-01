/**
 * @constructor
 * @implements {tuna.tmpl.units.list.IListItemRouter}
 * @param {!Node} container
 * @param {!tuna.tmpl.units.Template} rootTemplate
 */
tuna.tmpl.units.list.ListContainerRouter = function(container, rootTemplate) {

    /**
     * @type {!Node}
     * @protected
     */
    this._container = container;

    /**
     *
     * @type {!tuna.tmpl.units.Template}
     * @protected
     */
    this._rootTemplate = rootTemplate;
};

/**
 * @override
 */
tuna.tmpl.units.list.ListContainerRouter.prototype.append = function(node) {
    this._container.appendChild(node);
    this._rootTemplate.registerChildCreation(node);
};


/**
 * @override
 */
tuna.tmpl.units.list.ListContainerRouter.prototype.remove = function(node) {
    this._container.removeChild(node);
    this._rootTemplate.registerChildRemoval(node);
};