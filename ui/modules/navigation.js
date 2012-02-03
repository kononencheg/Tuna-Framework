(function() {

    var Navigation = function() {
        tuna.ui.modules.Module.call(this, 'navigation', '.j-navigation');
    };

    tuna.utils.extend(Navigation, tuna.ui.modules.Module);

    Navigation.prototype.initInstance = function(target) {
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

        navigation.init();

        return navigation;
    };

    tuna.ui.modules.register(new Navigation());

})();