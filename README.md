frb-jsmtl
=========



### Enumerated views

Example of binding enum models to views.


```html
<form name="whichFruit">
	Orange: <input id="orange" value="orange" type="radio" name="chosenFruit"/>
	Apple: <input id="apple" value="apple" type="radio" name="chosenFruit"/>
</form>
```


```javascript
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

```

### String views

Example of binding string models to views.


```html
	Input: <input id="inputArea"/>
	Result: <span id="resultArea"></span>
```


```javascript
'use strict';
var Bindings = require("frb/bindings");

var component = {
	inputView: document.getElementById("inputArea"),
	resultView: document.getElementById("resultText")
};

Bindings.defineBindings(component, {
	"inputView.value": {
		"<->": "resultText"
	},
	"resultView.innerHTML": {
		"<-": "resultText"
	}
});

document.getElementById("inputArea").value = "apple"
console.log(component.resultText + " should be " + document.getElementById("inputArea").value;
```
