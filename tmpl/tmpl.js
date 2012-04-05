


/**
 * @private
 * @type {tuna.tmpl.markup.MarkupTemplateBuilder}
 */
tuna.tmpl.__markupBuilder = new tuna.tmpl.markup.MarkupTemplateBuilder();


/**
 * @type {!Object.<string, tuna.tmpl.settings.TemplateSettings>}
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
 * @param {!tuna.tmpl.settings.TemplateSettings} settings
 * @return {!tuna.tmpl.units.Template}
 */
tuna.tmpl.compile = function(element, settings) {
    return tuna.tmpl.__compiler.compile(settings, element);
};

/*
 * @private
 * @param {string} type
 * @param {string} data
 * @return {tuna.tmpl.units.condition.ConditionAction}
 */
/*tuna.tmpl.compilers.ConditionCompiler.prototype.__createAction = function(type, data) {
 switch (type) {
 case 'class': return new tuna.tmpl.units.condition.ClassAction(data);
 }

 return null;
 };*/

/*
 * @private
 * @param {string} type
 * @param {string} data
 * @return {tuna.tmpl.units.condition.ConditionOperator}
 */
/*tuna.tmpl.compilers.ConditionCompiler.prototype.__createOperator = function(type, data) {
 switch (type) {
 case 'isset': return new tuna.tmpl.units.condition.IsSetOperator();
 case 'notset': return new tuna.tmpl.units.condition.NotSetOperator();
 case 'eq': return new tuna.tmpl.units.condition.EqualsOperator(data);
 case 'ne': return new tuna.tmpl.units.condition.NotEqualsOperator(data);
 }

 return null;
 };*/


