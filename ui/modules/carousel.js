/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var CarouselModule = function() {
    tuna.ui.Module.call(this, '.j-carousel');
};

tuna.utils.extend(CarouselModule, tuna.ui.Module);

/**
 * @override
 */
CarouselModule.prototype.initInstance = function(target) {
    return new tuna.ui.selection.Carousel(target);
};

tuna.ui.modules.register('carousel', new CarouselModule());
