/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';
var Bindings = require("frb/bindings");

var component = {
	inputView: document.getElementById("inputArea"),
	resultView: document.getElementById("resultText")
};

Bindings.defineBindings(component, {
	"inputView.innerHTML": {
		"<->": "resultText"
	},
	"resultView.innerHTML": {
		"<-": "resultText"
	}
});

document.getElementById("inputArea").innerHTML = "apple";
console.log(component.resultText + " should be " + document.getElementById("inputArea").innerHTML);

window.component = component;
