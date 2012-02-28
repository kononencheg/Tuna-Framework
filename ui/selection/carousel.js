/**
 * @constructor
 * @extends {tuna.ui.selection.SelectionGroup}
 * @param {!Node} target
 */
var Carousel = function(target) {
    tuna.ui.selection.SelectionGroup.call(this, target, null);

    /**
     * @private
     * @type number
     */
    this.__shiftIndex = -1;

    this._setDefaultOption('item-selector', '.j-carousel-item');
    this._setDefaultOption('next-button-selector', '.j-carousel-next');
    this._setDefaultOption('back-button-selector', '.j-carousel-back');
};

tuna.utils.extend(Carousel, tuna.ui.selection.SelectionGroup);

/**
 * @override
 */
Carousel.prototype.init = function() {
    tuna.ui.selection.SelectionGroup.prototype.init.call(this);

    var self = this;

    this.__shiftIndex = Number(this.getLastSelectedIndex());

    var nextButtonSelector = this.getStringOption('next-button-selector');
    if (nextButtonSelector !== null) {
        tuna.dom.addChildEventListener(
            this._target, nextButtonSelector, 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.next();
            }
        );
    }

    var backButtonSelector = this.getStringOption('back-button-selector')
    if (backButtonSelector !== null) {
        tuna.dom.addChildEventListener(
            this._target, backButtonSelector, 'click',
            function(event) {
                tuna.dom.preventDefault(event);
                self.back();
            }
        );
    }
};


/**
 *
 */
Carousel.prototype.next = function() {
    this.__shiftIndex++;
    if (this.getItemAt(this.__shiftIndex) === null) {
        this.__shiftIndex = 0;
    }

    this.selectIndex(this.__shiftIndex);
};

/**
 *
 */
Carousel.prototype.back = function() {
    this.__shiftIndex--;
    if (this.getItemAt(this.__shiftIndex) === null) {
        this.__shiftIndex = this._itemsCollection.getItemsCount() - 1;
    }

    this.selectIndex(this.__shiftIndex);
};

/**
 * @constructor
 * @extends {Carousel}
 */
tuna.ui.selection.Carousel = Carousel;