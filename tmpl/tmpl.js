/**
 * @private
 * @type {tuna.tmpl.markup.MarkupTemplateBuilder}
 */
tuna.tmpl.__markupBuilder = new tuna.tmpl.markup.MarkupTemplateBuilder();

/**
 * @type Object.<string, tuna.tmpl.settings.TemplateSettings>
 */
tuna.tmpl.__settingsTable = {};

/**
 * @param {?string} id
 * @return {tuna.tmpl.settings.TemplateSettings}
 */
tuna.tmpl.getTemplateSettingsById = function(id) {
    if (id !== null) {
        if (tuna.tmpl.__settingsTable[id] === undefined) {
            tuna.tmpl.__settingsTable[id]
                = tuna.tmpl.__markupBuilder.buildSettings(id);
        }

        return tuna.tmpl.__settingsTable[id];
    }

    return null;
};

/**
 * @private
 * @type tuna.tmpl.compilers.TemplateCompiler
 */
tuna.tmpl.__compiler = new tuna.tmpl.compilers.TemplateCompiler();

/**
 *
 * @param {!Node} element
 * @param {tuna.tmpl.settings.TemplateSettings} settings
 * @return {tuna.tmpl.units.Template}
 */
tuna.tmpl.compile = function(element, settings) {
    return tuna.tmpl.__compiler.compileTemplate(settings, element, null);
};
