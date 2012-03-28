/**
 * @constructor
 * @extends tuna.ui.selection.rule.AbstractSelectionRule
 */
tuna.ui.selection.rule.NavigationSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(string|number)
     */
    this.__currentIndex = null;

    /**
     * @type tuna.control.ViewController
     * @private
     */
    this.__currentController = null;

    /**
     * @type {tuna.ui.selection.Navigation}
     * @private
     */
    this.__navigation = null;

    /**
     * @type {Object}
     * @private
     */
    this.__openData = null;
};

tuna.utils.extend(
    tuna.ui.selection.rule.NavigationSelectionRule,
    tuna.ui.selection.rule.AbstractSelectionRule
);

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.setNavigation
    = function(navigation) {

    this.__navigation = navigation;
};

    /**
 * @override
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.getSelectedIndexes
    = function() {

    if (this.__currentIndex !== null) {
        return [ this.__currentIndex ];
    }

    return [];
};

/**
 * @return {?(string|number)}
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.getCurrentIndex
    = function() {

    return this.__currentIndex;
};

/**
 * @return {tuna.control.ViewController}
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.getCurrentController
    = function() {

    return this.__currentController;
};

/**
 * @return {Object}
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.getOpenData
    = function() {

    return this.__openData;
};

/**
 * @param {string} index
 * @param {Object} data
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.navigate
    = function(index, data) {

    this.__openData = data;
    return this.selectIndex(index);
};

/**
 * @override
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.selectIndex
    = function(index) {

    if (this.isIndexEnabled(index) && this.__currentIndex !== index) {

        if (this.__currentIndex !== null) {
            if (this.__currentController instanceof tuna.control.PageViewController &&
                this.__currentController.canClose(index)) {

                if (this.__currentController instanceof tuna.control.PageViewController) {
                    this.__currentController.close();
                }
            }

            this._selectionView.destroySelectionAt(this.__currentIndex);
            this._eventDispatcher.dispatch('close', this.__currentIndex)
        }


        this.__currentIndex = index;

        this.__updateController();

        this._selectionView.applySelectionAt(this.__currentIndex);
        this._eventDispatcher.dispatch('open', this.__currentIndex);

        if (this.__currentController !== null &&
            this.__currentController instanceof tuna.control.PageViewController) {
            this.__currentController.open(this.__openData);
        }

        return true;
    }

    return false;
};

/**
 * @private
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.__updateController
    = function() {

    this.__currentController = null;
    if (this.__currentIndex !== null) {
        var page = this._itemsCollection.getItemAt(this.__currentIndex);
        if (page !== null) {
            this.__currentController = tuna.control.getController(page.id);

            if (this.__currentController !== null &&
                !this.__currentController.isActive()) {

                if (this.__currentController instanceof tuna.control.PageViewController) {
                    this.__currentController.setNavigation(this.__navigation);
                }

                this.__currentController.init(page);
            }
        }
    }
};

/**
 * @override
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.isSelected
    = function(index) {

    return index === this.__currentIndex;
};

/**
 * @override
 */
tuna.ui.selection.rule.NavigationSelectionRule.prototype.clearSelection
    = function() {

    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};