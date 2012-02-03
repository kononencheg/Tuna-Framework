/**
 * TUNA FRAMEWORK
 * 
 * @file markup-template-builder.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */
(function() {

    /**
     * Template transformer compiler from markup source.
     *
     * TODO: Template origin in iframe (set current and origin document).
     *
     * @public
     * @class
     * @constructor
     */
    var MarkupTemplateBuilder = function(doc) {
        this.__doc = doc;

        this.__templatesTable = {};

        this.__extractors = [];

        this.__registerExtractors();
    };

    // TODO: Make extractor class
    MarkupTemplateBuilder.prototype.__registerExtractors = function() {
        this.__extractors.push(new tuna.tmpl.markup.SpotExtractor());
        this.__extractors.push(new tuna.tmpl.markup.AttributeExtractor());
        this.__extractors.push(new tuna.tmpl.markup.ConditionExtractor());
        this.__extractors.push(new tuna.tmpl.markup.ListExtractor(this));
    };

    /**
     * Build template from markup.
     *
     * @param {Element} markupNode Element with markup inside.
     */
    MarkupTemplateBuilder.prototype.buildTemplate = function(templateID) {
        var template = null;

        if (this.__templatesTable[templateID] !== undefined) {
            template = this.__templatesTable[templateID];
        } else {
            var templateElement = this.__doc.getElementById(templateID);
            if (templateElement !== null) {
                this.__templatesTable[templateID] =
                    template = new tuna.tmpl.settings.Template();

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

    tuna.tmpl.markup.MarkupTemplateBuilder = MarkupTemplateBuilder;

})();
