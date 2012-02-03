(function() {

    var ListExtractor = function(templateBuilder) {
        tuna.tmpl.markup.SpotExtractor.call(this);

        this._tagName = 'list';
        
        this.__templateBuilder = templateBuilder
    };

    tuna.utils.extend(ListExtractor, tuna.tmpl.markup.SpotExtractor);

    ListExtractor.prototype._createItem = function() {
        return new tuna.tmpl.settings.List();
    };

    ListExtractor.prototype._parseElement = function(element, item) {
        tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

        item.setItemRendererID(element.getAttribute(this._ns + 'item-renderer-id'));
        item.setItemKeyDataPath(element.getAttribute(this._ns + 'key-path'));

        var templateID = element.getAttribute(this._ns + 'item-template-id');
        var template = this.__templateBuilder.buildTemplate(templateID);

        item.setItemTemplate(template);
    };

    ListExtractor.prototype._saveItem = function(item, template) {
        template.addList(item);
    };

    tuna.tmpl.markup.ListExtractor = ListExtractor;
})();