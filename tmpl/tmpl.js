

/**
 * Компилирование шаблона с настройками <code>settings</code> для элемента
 * <code>element</code>.
 *
 * @param {!Node} element Элемент шшаблона трансформации.
 * @param {!tuna.tmpl.settings.TemplateSettings} settings Настройки шаблона.
 * @return {!tuna.tmpl.units.Template} Созданный шаблон.
 */
tuna.tmpl.compile = function(element, settings) {
    return tuna.tmpl.getCompiler().compile(settings, element);
};


/**
 * Получение экземпляра компилятора шаблона.
 *
 * @return {!tuna.tmpl.compilers.TemplateCompiler} Компилятор шаблона.
 */
tuna.tmpl.getCompiler = function() {
    if (tuna.tmpl.__compiler === null) {
        tuna.tmpl.__compiler = new tuna.tmpl.compilers.TemplateCompiler();

        tuna.tmpl.__compiler.registerCompiler(
            tuna.tmpl.units.Spot.NAME,
            new tuna.tmpl.compilers.SpotCompiler()
        );

        tuna.tmpl.__compiler.registerCompiler(
            tuna.tmpl.units.Attribute.NAME,
            new tuna.tmpl.compilers.AttributeCompiler()
        );

        tuna.tmpl.__compiler.registerCompiler(
            tuna.tmpl.units.Checkbox.NAME,
            new tuna.tmpl.compilers.CheckboxCompiler()
        );

        tuna.tmpl.__compiler.registerCompiler(
            tuna.tmpl.units.List.NAME,
            new tuna.tmpl.compilers.ListCompiler(tuna.tmpl.__compiler)
        );

        var conditionCompiler = new tuna.tmpl.compilers.ConditionCompiler();
        conditionCompiler.registerAction(
            tuna.tmpl.units.condition.ClassAction.NAME,
            new tuna.tmpl.units.condition.ClassAction()
        );

        conditionCompiler.registerOperator(
            tuna.tmpl.units.condition.IsSetOperator.NAME,
            new tuna.tmpl.units.condition.IsSetOperator()
        );

        conditionCompiler.registerOperator(
            tuna.tmpl.units.condition.NotSetOperator.NAME,
            new tuna.tmpl.units.condition.NotSetOperator()
        );

        conditionCompiler.registerOperator(
            tuna.tmpl.units.condition.EqualsOperator.NAME,
            new tuna.tmpl.units.condition.EqualsOperator()
        );

        conditionCompiler.registerOperator(
            tuna.tmpl.units.condition.NotEqualsOperator.NAME,
            new tuna.tmpl.units.condition.NotEqualsOperator()
        );

        tuna.tmpl.__compiler.registerCompiler
            (tuna.tmpl.units.Condition.NAME, conditionCompiler);
    }

    return tuna.tmpl.__compiler;
};


/**
 * @private
 * @type {tuna.tmpl.compilers.TemplateCompiler}
 */
tuna.tmpl.__compiler = null;


/**
 * @return {!tuna.tmpl.markup.MarkupTemplateBuilder}
 */
tuna.tmpl.getMarkupBuilder = function() {
    if (tuna.tmpl.__markupBuilder === null) {
        tuna.tmpl.__markupBuilder =
            new tuna.tmpl.markup.MarkupTemplateBuilder();

        tuna.tmpl.__markupBuilder.addExtractor
            (new tuna.tmpl.markup.SpotExtractor());

        tuna.tmpl.__markupBuilder.addExtractor
            (new tuna.tmpl.markup.ListExtractor(tuna.tmpl.__markupBuilder));

        tuna.tmpl.__markupBuilder.addExtractor
            (new tuna.tmpl.markup.AttributeExtractor());

        tuna.tmpl.__markupBuilder.addExtractor
            (new tuna.tmpl.markup.CheckboxExtractor());

        var conditionExtractor = new tuna.tmpl.markup.ConditionExtractor();
        conditionExtractor.addActionType
            (tuna.tmpl.units.condition.ClassAction.NAME);

        conditionExtractor.addOperatorType
            (tuna.tmpl.units.condition.IsSetOperator.NAME);

        conditionExtractor.addOperatorType
            (tuna.tmpl.units.condition.NotSetOperator.NAME);

        conditionExtractor.addOperatorType
            (tuna.tmpl.units.condition.EqualsOperator.NAME);

        conditionExtractor.addOperatorType
            (tuna.tmpl.units.condition.NotEqualsOperator.NAME);

        tuna.tmpl.__markupBuilder.addExtractor(conditionExtractor);
    }

    return tuna.tmpl.__markupBuilder;
};

/**
 * @private
 * @type {tuna.tmpl.markup.MarkupTemplateBuilder}
 */
tuna.tmpl.__markupBuilder = null;


/**
 * @type {!Object.<string, tuna.tmpl.settings.TemplateSettings>}
 */
tuna.tmpl.__settingsTable = {};


/**
 * @param {string} id
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
tuna.tmpl.getTemplateSettingsById = function(id) {
    if (tuna.tmpl.__settingsTable[id] === undefined) {
        tuna.tmpl.__settingsTable[id]
            = tuna.tmpl.getMarkupBuilder().buildSettings(id);
    }

    return tuna.tmpl.__settingsTable[id];
};
