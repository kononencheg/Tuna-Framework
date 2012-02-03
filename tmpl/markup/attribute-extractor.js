(function() {

    var AttributeExtractor = function() {
        tuna.tmpl.markup.SpotExtractor.call(this);

        this._tagName = 'attr';
    };

    tuna.utils.extend(AttributeExtractor, tuna.tmpl.markup.SpotExtractor);

    AttributeExtractor.prototype._createItem = function() {
        return new tuna.tmpl.settings.Attribute();
    };

    AttributeExtractor.prototype._parseElement = function(element, item) {
        tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

        item.setAttributeName(element.getAttribute(this._ns + 'name'));
        item.setEvent(element.getAttribute(this._ns + 'event') !== null);
    };

    AttributeExtractor.prototype._saveItem = function(item, template) {
        template.addAttribute(item);
    };

    tuna.tmpl.markup.AttributeExtractor = AttributeExtractor;
})();