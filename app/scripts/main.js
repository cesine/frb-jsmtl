/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';
var ObservableDOM = require("frb/dom");
var Bindings = require("frb/bindings");

var component = {
	inputView: document.getElementById("inputArea"),
	resultView: document.getElementById("resultArea"),
	resultText: "pear"
};

Bindings.defineBindings(component, {
	"inputView.value": {
		"<-": "resultText"
	}
});

Bindings.defineBindings(component, {
	"resultText": {
		"<->": "inputView.value"
	},
	"resultView.innerHTML": {
		"<-": "resultText"
	}
});
document.getElementById("inputArea").innerText = "apple";
console.log(component.resultText + " should be " + document.getElementById("inputArea").value);

window.component = component;
