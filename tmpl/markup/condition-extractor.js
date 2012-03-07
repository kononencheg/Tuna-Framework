/**
 * @constructor
 * @extends {tuna.tmpl.markup.SpotExtractor}
 */
var ConditionExtractor = function() {
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

tuna.utils.extend(ConditionExtractor, tuna.tmpl.markup.SpotExtractor);

/**
 * @override
 */
ConditionExtractor.prototype._createItem = function() {
    return new tuna.tmpl.settings.ConditionSettings();
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
    settings.addCondition(item);
};

/**
 * @constructor
 * @extends {ConditionExtractor}
 */
tuna.tmpl.markup.ConditionExtractor = ConditionExtractor;