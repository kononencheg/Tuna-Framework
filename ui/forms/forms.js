/**
 * @private
 * @param {Node} formElement
 * @return {Object}
 */
tuna.ui.forms.serialize = function(formElement) {
    var result = {};

    var elements = formElement.elements;
    var i = 0,
        l = elements.length;

    var name = null;
    while (i < l) {
        name = elements[i].name;

        if (result[name] !== undefined) {
            if (!(result[name] instanceof Array)) {
                result[name] = [result[name]];
            }
            result[name].push(elements[i].value);
        } else {
            result[name] = elements[i].value;
        }

        i++
    }

    return result;
};
