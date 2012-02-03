/**
 * TUNA FRAMEWORK
 * 
 * @file spot.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

(function() {

    /**
     * Template spot data class.
     *
     * Save nodes class name and appropriate data selection path.
     *
     * @private
     * @class
     *
     * @constructor
     */
    var Spot = function() {
        /**
         * Data nodes class name.
         *
         * @private
         * @type {string}
         */
        this.__class = null;

        /**
         * Data selection path.
         *
         * @private
         * @type {string}
         */
        this.__path = null;
    };

    /**
     * Setting data nodes class name.
     *
     * @public
     * @param {string} className Class name.
     */
    Spot.prototype.setTargetClass = function(className) {
        this.__class = className;
    };

    /**
     * Getting data nodes class name.
     *
     * @public
     * @return {string} Class name.
     */
    Spot.prototype.getTargetClass = function() {
        return this.__class;
    };

    /**
     * Setting data selection path.
     *
     * @public
     * @param {string} path Selection path.
     */
    Spot.prototype.setDataPath = function(path) {
        this.__path = path;
    };

    /**
     * Getting data selection path.
     *
     * @public
     * @return {string} Selection path.
     */
    Spot.prototype.getDataPath = function() {
        return this.__path;
    };

    tuna.tmpl.settings.Spot = Spot;
})();