/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
tuna.tmpl.markup.ConditionExtractor = function() {
    tuna.tmpl.markup.SpotExtractor.call(this);

    /**
     * @override
     */
    this._tagName = 'if';

    /**
     * @private
     * @type Array.<string>
     */
    this.__operatorAttrs = ['isset', 'notset','eq', 'ne'];

    /**
     * @private
     * @type Array.<string>
     */
    this.__actionAttrs = ['class'];
};

tuna.utils.extend(tuna.tmpl.markup.ConditionExtractor, tuna.tmpl.markup.SpotExtractor);


/**
 * @inheritDoc
 */
tuna.tmpl.markup.ConditionExtractor.prototype._createItem = function(element) {
    var selector = element.getAttribute(this._ns + 'target');
    var dataPath = element.getAttribute(this._ns + 'path');
    //var actionType =  l;
    //var operatorType =l;


    if (selector !== null && dataPath !== null) {
        var checkbox = new tuna.tmpl.settings.ConditionSettings
            (selector, dataPath, actionType, operatorType);

        checkbox.pattern = element.getAttribute(this._ns + 'pattern');

        return checkbox;
    }

    return null;
};


/**
 * @override
 */
ConditionExtractor.prototype._parseElement = function(element, item) {
    tuna.tmpl.markup.SpotExtractor.prototype._parseElement.call(this, element, item);

    this.__extractOperator(element, item);
    this.__extractAction(element, item);
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractAction = function(element, item) {
    var i = 0,
        l = this.__actionAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__actionAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.actionType  = attr;
            item.actionData  = value;

            break;
        }

        i++;
    }
};

/**
 * @private
 * @param {Node} element
 * @param {tuna.tmpl.settings.IItemSettings} item
 */
ConditionExtractor.prototype.__extractOperator = function(element, item) {
    var i = 0,
        l = this.__operatorAttrs.length;

    var attr = null,
        value = null;
    while (i < l) {
        attr = this.__operatorAttrs[i];
        value = element.getAttribute('tuna:' + attr);

        if (value !== null) {
            item.operatorType  = attr;
            item.operatorData  = value;

            break;
        }

        i++;
    }
};

/**
 * @param {tuna.tmpl.settings.ConditionSettings} item
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 */
ConditionExtractor.prototype._saveItem = function(item, settings) {
    settings.conditions.push(item);
};
