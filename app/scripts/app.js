/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

function App() {
	console.log('app initialized');
}

module.exports = App;

App.prototype.beep = function() {
	console.log('boop');
};

var bind = require("frb/bind");
var Bindings = require("frb/bindings");

var sampleData = {
	value: "Hello, value!",
	content: "Hello, from javascript!",
	span: "Hello, span!"
};
window.testsampleData = sampleData;

// var fruit = {apples: 1, oranges: 2};
// bind(fruit, "equal", {"<-": "apples == oranges"});
// // expect(fruit.equal).toBe(false);
// fruit.orange = 1;
// // expect(fruit.equal).toBe(true);

var orangeElement = document.getElementById("orange");
orangeElement.checked = false;
var appleElement = document.getElementById("apple");
appleElement.checked = true;

var testinputElement = document.getElementById("testinput");
var testcontenteditableElement = document.getElementById("testcontenteditable");
var testspanElement = document.getElementById("testspan");

var component = {
    testinputElement: testinputElement,
    testcontenteditableElement: testcontenteditableElement,
    testspanElement: testspanElement,
    orangeElement: orangeElement,
    appleElement: appleElement,
    sampleData: sampleData
};
window.testcomponent = component;


// bind(testspan, "innerHTML", {
// 	"<-": "innerHTML",
// 	"source": sampleData
// });

// bind(testcontenteditable, "content", {
// 	"<->": "content",
// 	"source": sampleData
// });

// bind(testinput, "value", {
// 	"<-": "value",
// 	"source": sampleData
// });

// bind(sampleData, "value", {
// 	"<->": "innerHTML",
// 	"source": sampleData
// });

Bindings.defineBindings(component, {
    "orangeElement.checked": {"<->": "fruit == 'orange'"},
    "appleElement.checked": {"<->": "fruit == 'apple'"},
    "testinputElement.value": {"<->": "sampleData.value"},
    "testcontenteditableElement.innerHTML": {"<->": "sampleData.content"},
    "testspanElement.innerHTML": {"<-": "sampleData.span"},
});



component.orangeElement.checked = true;
sampleData.value = "changed value";
sampleData.innerHTML = "changed innerhtml";


// var binding = bind(discussion, "innerHTML", {
// 	"<->": "igt.discussion",
// 	"source": entryvalue
// });


// var object = {};
// bind(object, "foo", {
// 	"<->": "bar"
// });

// // <-
// object.bar = 10;

// // ->
// object.foo = 20;

// window.object = object;
// console.log(object);

// var Bindings = require("frb/bindings");
// var store = Bindings.defineBindings({}, {
// 	"clothingByColor": {
// 		"<-": "clothing.group{color}"
// 	}
// });
// store.clothing = [{
// 	type: 'shirt',
// 	color: 'blue'
// }, {
// 	type: 'pants',
// 	color: 'red'
// }, {
// 	type: 'blazer',
// 	color: 'blue'
// }, {
// 	type: 'hat',
// 	color: 'red'
// }];

// console.log(store.clothingByColor);
// // expect(store.clothingByColor).toEqual([
// //     ['blue', [
// //         {type: 'shirt', color: 'blue'},
// //         {type: 'blazer', color: 'blue'}
// //     ]],
// //     ['red', [
// //         {type: 'pants', color: 'red'},
// //         {type: 'hat', color: 'red'}
// //     ]]
// // ]);


// var SortedSet = require("collections/sorted-set");
// var controller = {
// 	index: new SortedSet([1, 2, 3, 4, 5, 6, 7, 8]),
// 	start: 2,
// 	length: 4
// };
// bind(controller, "view", {
// 	"<-": "index.view(start, length)"
// });

// // expect(controller.view).toEqual([3, 4, 5, 6]);

// // change the window length
// controller.length = 3;
// // expect(controller.view).toEqual([3, 4, 5]);

// // change the window position
// controller.start = 5;
// // expect(controller.view).toEqual([6, 7, 8]);

// // add content behind the window
// controller.index.add(0);
// // expect(controller.view).toEqual([5, 6, 7]);

// console.log(controller);

// var inuktitut = require("../data/inuktitut.json");
// console.log(inuktitut.rows);

// var morphemes = Bindings.defineBindings({}, {
// 	"morphemsByLeftSide": {
// 		"<-": "inuktitut.rows.group{key.x}"
// 	}
// });
// morphemes.inuktitut = inuktitut;
// console.log(morphemes);
