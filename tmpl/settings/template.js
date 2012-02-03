/**
 * TUNA FRAMEWORK
 * 
 * @file template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {


    /**
     * Template data class.
     *
     * Save data that describe rules to transform data into appropriate app.
     *
     * @public
     * @class
     *
     * @constructor
     */
    var Template = function() {
        this.__spots = [];
        this.__lists = [];
        this.__attributes = [];
        this.__conditions = [];
    };

    Template.prototype.addCondition = function(attr) {
        this.__conditions.push(attr);
    };

    Template.prototype.getConditions = function() {
        return this.__conditions;
    };

    Template.prototype.addAttribute = function(attr) {
        this.__attributes.push(attr);
    };

    Template.prototype.getAttributes = function() {
        return this.__attributes;
    };

    Template.prototype.addList = function(list) {
        this.__lists.push(list);
    };

    Template.prototype.getLists = function() {
        return this.__lists;
    };

    Template.prototype.addSpot = function(spot) {
        this.__spots.push(spot);
    };

    Template.prototype.getSpots = function() {
        return this.__spots;
    };

    tuna.tmpl.settings.Template = Template;

})();
