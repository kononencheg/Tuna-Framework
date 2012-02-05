/**
 * @constructor
 * @extends {tuna.ui.Module}
 */
var NavigationModule = function() {
    tuna.ui.Module.call(this, '.j-navigation');
};

tuna.utils.extend(NavigationModule, tuna.ui.Module);

/**
 * @override
 */
NavigationModule.prototype.initInstance = function(target) {
    var navigation = new tuna.ui.selection.Navigation(target);

    navigation.addEventListener('selected', function(event, index) {
        tuna.dom.dispatchEvent(navigation.getItemAt(index), 'ui-navigate');
    });

    tuna.dom.addChildEventListener(
        target, '.j-navigation-link', 'click', function(event) {
            var index = this.getAttribute('data-href');
            if (index !== null) {
                navigation.navigate
                    (index, tuna.dom.getAttributesData(this));
            }
        }
    );

    tuna.dom.addChildEventListener(
        target, '.j-navigation-back', 'click', function(event) {
            navigation.back();
        }
    );

    return navigation;
};

tuna.ui.modules.register('navigation', new NavigationModule());
