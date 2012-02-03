(function() {

    var ConditionExtractor = function() {
        tuna.tmpl.markup.SpotExtractor.call(this);

        this._tagName = 'if';

        this.__operatorAttrs = ['isset', 'eq', 'ne'];
        this.__actionAttrs = ['class'];
    };

    tuna.utils.extend(ConditionExtractor, tuna.tmpl.markup.SpotExtractor);

    ConditionExtractor.prototype._createItem = function() {
        return new tuna.tmpl.settings.Condition();
    };

    ConditionExtractor.prototype._parseElement = function(element, item) {
        tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

        this.__extractOperator(element, item);
        this.__extractAction(element, item);
    };

    ConditionExtractor.prototype.__extractAction = function(element, item) {
        var i = 0,
            l = this.__actionAttrs.length;

        var attr = null,
            value = null;
        while (i < l) {
            attr = this.__actionAttrs[i];
            value = element.getAttribute('tuna:' + attr);

            if (value !== null) {
                item.setAction(attr, value);
                break;
            }

            i++;
        }
    };

    ConditionExtractor.prototype.__extractOperator = function(element, item) {
        var i = 0,
            l = this.__operatorAttrs.length;

        var attr = null,
            value = null;
        while (i < l) {
            attr = this.__operatorAttrs[i];
            value = element.getAttribute('tuna:' + attr);

            if (value !== null) {
                item.setOperator(attr, value);
                break;
            }

            i++;
        }
    };

    ConditionExtractor.prototype._saveItem = function(item, template) {
        template.addCondition(item);
    };

    tuna.tmpl.markup.ConditionExtractor = ConditionExtractor;
})();