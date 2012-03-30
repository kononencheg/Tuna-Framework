/**
 * TODO: Template origin in iframe (set current and origin document).
 * @constructor
 */
var MarkupTemplateBuilder = function() {
    this.__templatesTable = {};

    this.__extractors = [];

    this.__registerExtractors();
};

/**
 * @private
 */
MarkupTemplateBuilder.prototype.__registerExtractors = function() {
    this.__extractors.push(new tuna.tmpl.markup.SpotExtractor());
    this.__extractors.push(new tuna.tmpl.markup.CheckboxExtractor());
    this.__extractors.push(new tuna.tmpl.markup.AttributeExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ConditionExtractor());
    this.__extractors.push(new tuna.tmpl.markup.ListExtractor(this));
};

/**
 * @param {string} templateID
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
MarkupTemplateBuilder.prototype.buildSettings = function(templateID) {
    var template = null;

    if (this.__templatesTable[templateID] !== undefined) {
        template = this.__templatesTable[templateID];
    } else {
        var templateElement = document.getElementById(templateID);
        if (templateElement !== null) {
            this.__templatesTable[templateID] =
                template = new tuna.tmpl.settings.TemplateSettings();

            var i = 0,
                l = this.__extractors.length;

            while (i < l) {
                this.__extractors[i].extract(templateElement, template);
                i++;
            }
        }
    }

    return template;
};

/**
 * @constructor
 * @extends {MarkupTemplateBuilder}
 */
tuna.tmpl.markup.MarkupTemplateBuilder = MarkupTemplateBuilder;

