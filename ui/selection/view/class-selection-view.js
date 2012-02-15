/**
 * @constructor
 * @extends {tuna.ui.selection.view.AbstractSelectionView}
 * @param {!Node} target
 */
var ClassSelectionView = function(target) {
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
    this._itemSelector = '';

    /**
     * @private
     * @type string
     */
    this._selectionClass = '';

    /**
     * @private
     * @type string
     */
    this._disabledClass = 'disabled';
};

tuna.utils.extend(ClassSelectionView, tuna.ui.selection.view.AbstractSelectionView);

/**
 * @param {string} selector
 */
ClassSelectionView.prototype.setItemSelector = function(selector) {
    this._itemSelector = selector;
};

/**
 * @param {string} className
 */
ClassSelectionView.prototype.setSelectionClass = function(className) {
    this._selectionClass = className;
};

/**
 * @param {string} className
 */
ClassSelectionView.prototype.setDisabledClass = function(className) {
    this._disabledClass = className;
};

/**
 * @override
 */
ClassSelectionView.prototype.applySelectionAt = function(index) {
    var item = this._itemsCollection.getItemAt(index)
    if (item !== null) {
        tuna.dom.addClass(item, this._selectionClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.destroySelectionAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.removeClass(item, this._selectionClass);
    }
};


/**
 * @override
 */
ClassSelectionView.prototype.disableItemAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.addClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.enableItemAt = function(index) {
    var item = this._itemsCollection.getItemAt(index);
    if (item !== null) {
        tuna.dom.removeClass(item, this._disabledClass);
    }
};

/**
 * @override
 */
ClassSelectionView.prototype.update = function() {
    if (this._itemSelector !== null) {
        this._selectionGroup.clearSelection();
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
                    tuna.dom.hasClass(item, this._selectionClass)) {
                    this._selectionGroup.selectIndex(index);
                }
            }

            i++;
        }
    }
};


tuna.ui.selection.view.ClassSelectionView = ClassSelectionView;
