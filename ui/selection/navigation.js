(function() {

    var Navigation = function(target) {
        tuna.ui.selection.SelectionGroup.call
            (this, target, false, 'id', '.j-navigation-page', 'current');

        this.__openArgs = null;

        this.__history = [];
    };

    tuna.utils.extend(Navigation, tuna.ui.selection.SelectionGroup);

    Navigation.prototype.init = function() {
        var self = this;

        this.addEventListener('deselected', function(event, index) {
            self.dispatch('close', index);
        });

        this.addEventListener('selected', function(event, index) {
            self.dispatch('open', { args: self.__openArgs, index: index });
        });

        tuna.ui.selection.SelectionGroup.prototype.init.call(this);
    };

    Navigation.prototype.navigate = function(index, args) {
        var currentIndex = this.getLastSelectedIndex()
        if (currentIndex !== null) {
            this.__history.push(currentIndex);
        }

        this.__openArgs = args;
        this.selectIndex(index);
        this.__openArgs = null;

    };

    Navigation.prototype.back = function() {
        this.selectIndex(this.__history.pop());
    };


    tuna.ui.selection.Navigation = Navigation;
})();