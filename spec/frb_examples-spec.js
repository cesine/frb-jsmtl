var bind = require("frb/bind");
var model = {
	content: "Hello, World!"
};
var cancelBinding = bind(document, "body.innerHTML", {
	"<-": "content",
	"source": model
});
model.content = "Farewell.";
expect(document.body.innerHTML).toBe("Farewell.");
