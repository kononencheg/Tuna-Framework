
/**
 * Установка CSS-класса DOM-элементу, в зависимости от выполеннения условия.
 *
 * В качестве данных действия передается имя класса, который необходимо
 * устанавливать.
 *
 * @constructor
 * @extends {tuna.tmpl.units.condition.ConditionAction}
 * @param {string=} opt_data Имя класса.
 */
tuna.tmpl.units.condition.ClassAction = function(opt_data) {
    tuna.tmpl.units.condition.ConditionAction.call(this, opt_data);
};

tuna.utils.extend(
    tuna.tmpl.units.condition.ClassAction,
    tuna.tmpl.units.condition.ConditionAction
);

/**
 * Имя типа действия.
 *
 * @const
 * @type {string}
 */
tuna.tmpl.units.condition.ClassAction.NAME = 'class';

/**
 * @inheritDoc
 */
tuna.tmpl.units.condition.ClassAction.prototype.apply =
    function(element, testResult, value) {

    if (this._data !== '') {
        tuna.dom.setClassExist(element, this._data, testResult);
    }
};
