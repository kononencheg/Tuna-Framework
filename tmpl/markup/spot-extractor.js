(function() {

    var SpotExtractor = function() {
        this._tagName = 'spot';
        this._ns = 'tuna:';
    };

    tuna.utils.implement(SpotExtractor, tuna.tmpl.markup.IMarkupExtractor);

    SpotExtractor.prototype.extract = function(element, template) {
        var tagName = tuna.utils.IS_IE ? this._tagName : (this._ns + this._tagName);
        var elements = element.getElementsByTagName(tagName);

        var i = 0,
            l = elements.length;

        var item = null;
        while (i < l) {
            item = this._createItem();

            this._parseElement(elements.item(i), item);
            this._saveItem(item, template);

            i++;
        }
    };

    SpotExtractor.prototype._createItem = function() {
        return new tuna.tmpl.settings.Spot();
    };

    SpotExtractor.prototype._parseElement = function(element, item) {
        item.setTargetClass(element.getAttribute(this._ns + 'target'));
        item.setDataPath(element.getAttribute(this._ns + 'path'));
    };

    SpotExtractor.prototype._saveItem = function(item, template) {
        template.addSpot(item);
    };

    tuna.tmpl.markup.SpotExtractor = SpotExtractor;
})();