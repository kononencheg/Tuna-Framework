/**
 * @constructor
 * @extends tuna.ui.selection.view.AbstractSelectionView
 * @param {!Node} target
 */
tuna.ui.selection.view.ClassSelectionView = function(target) {
    tuna.ui.selection.view.AbstractSelectionView.call(this);

    /**
     * @private
     * @type !Node
     */
    this._target = target;

    /**
     * @private
     * @type ?string
     */
    this._itemSelector = null;

    /**
     * @private
     * @type ?string
     */
    this._selectionClass = null;

    /**
     * @private
     * @type ?string
     */
    this._disabledClass = 'disabled';
};

tuna.utils.extend(
    tuna.ui.selection.view.ClassSelectionView,
    tuna.ui.selection.view.AbstractSelectionView
);

/**
 * @param {?string} selector
 */
tuna.ui.selection.view.ClassSelectionView.prototype.setItemSelector
    = function(selector) {

    this._itemSelector = selector;
};

/**
 * @param {?string} className
 */
tuna.ui.selection.view.ClassSelectionView.prototype.setSelectionClass
    = function(className) {

    this._selectionClass = className;
};

/**
 * @param {?string} className
 */
tuna.ui.selection.view.ClassSelectionView.prototype.setDisabledClass
    = function(className) {

    this._disabledClass = className;
};

/**
 * @override
 */
tuna.ui.selection.view.ClassSelectionView.prototype.applySelectionAt
    = function(index) {

    var item = this._itemsCollection.getItemAt(index);
    if (item !== null && this._selectionClass !== null) {
        tuna.dom.addClass(item, this._selectionClass);
    }
};

/**
 * @override
 */
tuna.ui.selection.view.ClassSelectionView.prototype.destroySelectionAt
    = function(index) {

    var item = this._itemsCollection.getItemAt(index);
    if (item !== null && this._selectionClass !== null) {
        tuna.dom.removeClass(item, this._selectionClass);
    }
};


/**
 * @override
 */
tuna.ui.selection.view.ClassSelectionView.prototype.disableItemAt
    = function(index) {

    var item = this._itemsCollection.getItemAt(index);
    if (item !== null && this._disabledClass !== null) {
        tuna.dom.addClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
tuna.ui.selection.view.ClassSelectionView.prototype.enableItemAt
    = function(index) {

    var item = this._itemsCollection.getItemAt(index);
    if (item !== null && this._disabledClass !== null) {
        tuna.dom.removeClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
tuna.ui.selection.view.ClassSelectionView.prototype.update  = function() {

    if (this._itemSelector !== null) {
        this._selectionRule.clearSelection();
        this._itemsCollection.clear();

        var possibleItems = tuna.dom.select(this._itemSelector, this._target);

        var i = 0,
            l = possibleItems.length;

        var index = null;
        var item = null;
        while (i < l) {
            item = possibleItems[i];
            if (tuna.dom.getParentMatches
                (item, this._itemSelector, this._target) === null) {

                index = this._itemsCollection.addItem(item);
                if (index !== null &&
                    this._selectionClass !== null &&
                    tuna.dom.hasClass(item, this._selectionClass)) {
                    this._selectionRule.selectIndex(index);
                }
            }

            i++;
        }
    }
};