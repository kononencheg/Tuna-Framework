(function() {

    var ConditionCompiler = function() {
        tuna.tmpl.compilers.SpotCompiler.call(this);
    };

    tuna.utils.extend(ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);

    ConditionCompiler.prototype._getItemsSettings = function(settings) {
        return settings.getConditions();
    };

    ConditionCompiler.prototype._createItem = function(rootTemplate) {
        return new tuna.tmpl.units.Condition(rootTemplate);
    };

    ConditionCompiler.prototype._compileItem = function(element, settings, item) {
        tuna.tmpl.compilers.SpotCompiler.prototype._compileItem.call
                                        (this, element, settings, item);

        var action = this.__createAction
            (settings.getActionType(), settings.getActionData());

        item.setAction(action);

        var operator = this.__createOperator
            (settings.getOperatorType(), settings.getOperatorData());

        item.setOperator(operator);
    };

    ConditionCompiler.prototype.__createAction = function(type, data) {
        switch (type) {
            case 'class': return new ClassAction(data);
        }

        return null;
    };

    ConditionCompiler.prototype.__createOperator = function(type, data) {
        switch (type) {
            case 'isset': return new IsSetOperator();
            case 'eq': return new EqualsOperator(data);
            case 'ne': return new NotEqualsOperator(data);
        }

        return null;
    };

    tuna.tmpl.compilers.ConditionCompiler = ConditionCompiler;

    ///////////////////////////////////////////////////////////////////////////
    //
    //  Operators
    //
    ///////////////////////////////////////////////////////////////////////////

    var ConditionOperator = function(data) {
        this._data = data;
    };

    ConditionOperator.prototype.test = function(value) {};


    var IsSetOperator = function() {
        ConditionOperator.call(this);
    };

    tuna.utils.extend(IsSetOperator, ConditionOperator);

    IsSetOperator.prototype.test = function(value) {
        return value !== undefined;
    };


    var EqualsOperator = function(data) {
        ConditionOperator.call(this, data);
    };

    tuna.utils.extend(EqualsOperator, ConditionOperator);

    EqualsOperator.prototype.test = function(value) {
        return value == this._data || String(value) == this._data;
    };


    var NotEqualsOperator = function(data) {
        ConditionOperator.call(this, data);
    };

    tuna.utils.extend(NotEqualsOperator, ConditionOperator);

    NotEqualsOperator.prototype.test = function(value) {
        return !(value == this._data || String(value) == this._data);
    };

    ///////////////////////////////////////////////////////////////////////////
    //
    //  Actions
    //
    ///////////////////////////////////////////////////////////////////////////

    var ConditionAction = function(data) {
        this._data = data;
    };

    ConditionAction.prototype.apply = function(node, testResult, value) {};


    var ClassAction = function(data) {
        ConditionAction.call(this, data);

        this.__lastName = null;
    };

    tuna.utils.extend(ClassAction, ConditionAction);

    ClassAction.prototype.apply = function(node, testResult, value) {
        var className = this._data;

        if (className !== '') {
            if (testResult) {
                tuna.dom.addClass(node, className);
            } else {
                tuna.dom.removeClass(node, className);
            }

        } else if (this.__lastName !== value && testResult) {
            if (this.__lastName !== null) {
                tuna.dom.removeClass(node, this.__lastName);
            }

            tuna.dom.addClass(node, value);

            this.__lastName = value;
        }

    };

})();