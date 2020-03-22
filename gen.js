var fs = require("fs");
var files = fs.readdirSync("images/");
function removeElement(array, elem) {
	var index = array.indexOf(elem);
	if (index > -1) {
		array.splice(index, 1);
	}
}
removeElement(files, ".DS_Store");
console.log("const data =" + JSON.stringify(files));
