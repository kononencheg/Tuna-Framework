/**
 * @interface
 */
var IListItemRouter = function() {};

/**
 * @param {Node} element
 */
IListItemRouter.prototype.append = function(element) {};

/**
 * @interface
 * @extends {IListItemRouter}
 */
tuna.tmpl.units.IListItemRouter = IListItemRouter;