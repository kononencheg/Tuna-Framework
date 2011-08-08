/**
 * TUNA FRAMEWORK
 * 
 * @file Template.js
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Template class.
 * 
 * Keeps element selection and data evaluation rules.
 * 
 * @public
 * @constructor
 */
tuna.template.Template = function() {
	
	/**
	 * Spot list.
	 * 
	 * @private
	 * @type {Array.<tuna.template.Spot>}
	 */
	this.__spots = [];
};

/**
 * Compile template into data transformer for target element. 
 * 
 * В случае списков, каждый элемент списка "компилируется" отдельно, и в ядре 
 * скомпилированного трансформера докомпилирываются новые и уничтожаются старые 
 * узлы.
 * 
 * TODO: Implement transform kernel.
 * 
 * @public
 * @param {Element} target Target element.
 * @return {tuna.template.TemplateTransformer} Data transformer special for 
 * 		element.
 */
tuna.template.Template.prototype.compile = function(target) {
	var result;
	
	var spot;
	var i = this.__spots.length - 1;
	while (i >= 0) {
		spot = this.__spots[i];
		
		target.getElementsByClassName(spot.getClassName());
		
		i--;
	}
	
	return result;
};

/**
 * Add logical data spot to template.
 * 
 * @public
 * @param {tuna.template.Spot} spot Logical data spot.
 */
tuna.template.Template.prototype.addSpot = function(spot) {
	this.__spots.push(spot);
};
