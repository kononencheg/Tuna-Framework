/**
 * TUNA FRAMEWORK
 * 
 * @file attribute.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    var Condition = function() {
        tuna.tmpl.settings.Spot.call(this);

        this.__actionType = null;
        this.__actionData = null;

        this.__operatorType = null;
        this.__operatorData = null;
    };

    tuna.utils.extend(Condition, tuna.tmpl.settings.Spot);

    Condition.prototype.setOperator = function(type, data) {
        this.__operatorType = type;
        this.__operatorData = data;
    };

    Condition.prototype.getOperatorType = function() {
        return this.__operatorType;
    };

    Condition.prototype.getOperatorData = function() {
        return this.__operatorData;
    };

    Condition.prototype.setAction = function(type, data) {
        this.__actionType = type;
        this.__actionData = data;
    };

    Condition.prototype.getActionType = function() {
        return this.__actionType;
    };

    Condition.prototype.getActionData = function() {
        return this.__actionData;
    };

    tuna.tmpl.settings.Condition = Condition;



})();