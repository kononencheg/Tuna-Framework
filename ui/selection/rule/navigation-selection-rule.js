/**
 * @constructor
 * @extends {tuna.ui.selection.rule.AbstractSelectionRule}
 */
var NavigationSelectionRule = function() {
    tuna.ui.selection.rule.AbstractSelectionRule.call(this);

    /**
     * @private
     * @type ?(string|number)
     */
    this.__currentIndex = null;

    /**
     * @type tuna.view.ViewController
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

tuna.utils.extend(NavigationSelectionRule,
                  tuna.ui.selection.rule.AbstractSelectionRule);

/**
 * @param {tuna.ui.selection.Navigation} navigation
 */
NavigationSelectionRule.prototype.setNavigation = function(navigation) {
    this.__navigation = navigation;
};

    /**
 * @override
 */
NavigationSelectionRule.prototype.getSelectedIndexes = function() {
    if (this.__currentIndex !== null) {
        return [ this.__currentIndex ];
    }

    return [];
};

/**
 * @return {?(string|number)}
 */
NavigationSelectionRule.prototype.getCurrentIndex = function() {
    return this.__currentIndex;
};

/**
 * @return {tuna.view.ViewController}
 */
NavigationSelectionRule.prototype.getCurrentController = function() {
    return this.__currentController;
};

/**
 * @return {Object}
 */
NavigationSelectionRule.prototype.getOpenData = function() {
    return this.__openData;
};

/**
 * @param {string} index
 * @param {Object} data
 */
NavigationSelectionRule.prototype.navigate = function(index, data) {
    this.__openData = data;
    return this.selectIndex(index);
};

/**
 * @override
 */
NavigationSelectionRule.prototype.selectIndex = function(index) {
    var result = false;

    if (this.__currentController === null ||
        (this.__currentController instanceof tuna.view.PageViewController &&
            this.__currentController.canClose(index))) {

        if (this.__currentController !== null &&
            this.__currentController instanceof tuna.view.PageViewController) {
            this.__currentController.close();
        }

        if (this.isIndexEnabled(index) &&
            this.__currentIndex !== index) {

            if (this.__currentIndex !== null) {
                this._selectionView.destroySelectionAt(this.__currentIndex);
                this._eventDispatcher.dispatch('close', this.__currentIndex)
            }

            this.__currentIndex = index;

            this.__updateController();

            this._selectionView.applySelectionAt(this.__currentIndex);
            this._eventDispatcher.dispatch('open', this.__currentIndex);

            if (this.__currentController !== null &&
                this.__currentController instanceof tuna.view.PageViewController) {
                this.__currentController.open(this.__openData);
            }

            result = true;
        }
    }

    return result;
};

/**
 * @private
 */
NavigationSelectionRule.prototype.__updateController = function() {
    this.__currentController = null;
    if (this.__currentIndex !== null) {
        var page = this._itemsCollection.getItemAt(this.__currentIndex);
        if (page !== null) {
            this.__currentController = tuna.view.getController(page.id);
        }

        if (this.__currentController !== null &&
            !this.__currentController.isActive()) {

            if (this.__currentController instanceof tuna.view.PageViewController) {
                this.__currentController.setNavigation(this.__navigation);
            }

            this.__currentController.bootstrap(page);
        }
    }
};

/**
 * @override
 */
NavigationSelectionRule.prototype.isSelected = function(index) {
    return index === this.__currentIndex;
};

/**
 * @override
 */
NavigationSelectionRule.prototype.clearSelection = function() {
    if (this.__currentIndex !== null) {
        this._selectionView.destroySelectionAt(this.__currentIndex);
        this.__currentIndex = null;
    }
};

/**
 * @constructor
 * @extends {NavigationSelectionRule}
 */
tuna.ui.selection.rule.NavigationSelectionRule = NavigationSelectionRule;