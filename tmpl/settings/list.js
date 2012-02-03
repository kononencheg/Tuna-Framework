/**
 * TUNA FRAMEWORK
 * 
 * @file List.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    var List = function() {
        tuna.tmpl.settings.Spot.call(this);

        this.__keyPath = '';

        this.__itemRendererID = null;

        this.__itemTemplate = null;
    };

    tuna.utils.extend(List, tuna.tmpl.settings.Spot);

    List.prototype.setItemKeyDataPath = function(path) {
        this.__keyPath = path;
    };

    List.prototype.getItemKeyDataPath = function() {
        return this.__keyPath;
    };

    List.prototype.setItemRendererID = function(id) {
        this.__itemRendererID = id;
    };

    List.prototype.getItemRendererID = function() {
        return this.__itemRendererID;
    };

    List.prototype.setItemTemplate = function(template) {
        this.__itemTemplate = template;
    };

    List.prototype.getItemTemplate = function() {
        return this.__itemTemplate;
    };

    tuna.tmpl.settings.List = List;

})();



