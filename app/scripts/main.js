/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';
var Bindings = require("frb/bindings");

var component = {
	fruitView: document.whichFruit.chosenFruit
};

Bindings.defineBindings(component, {
	"fruitView.value": {
		"<->": "chosenFruit"
	}
});

document.whichFruit.chosenFruit.value = "apple"
console.log(component.chosenFruit + " should be " + document.whichFruit.chosenFruit.value);

window.component = component;
