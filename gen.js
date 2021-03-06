const names = [
	{
		name: "To Remember",
		detail: "I am not ready to let you go yet",
		code: "toremember",
	},
	{
		name: "Specters",
		detail:
			"They say the first thing you forget about someone is their voice. I am starting to beleive that",
		code: "specter",
	},
	{
		name: "Quarentine",
		detail: "Isolation. Readjustment. Family? Family!",
		code: "q",
	},
];

var fs = require("fs");
var files = fs.readdirSync("images/");
var Jimp = require("jimp");

function removeElement(array, elem) {
	var index = array.indexOf(elem);
	if (index > -1) {
		array.splice(index, 1);
	}
}

removeElement(files, ".DS_Store");

console.log("const data =" + JSON.stringify(files));

var sorted = [];

const createDir = path => {
	!fs.existsSync(path) && fs.mkdirSync(path, { recursive: true });
};

for (const i in names) {
	const album = files.filter(item => {
		return (
			item
				.split("_")
				.slice(-1)[0]
				.split(".")[0]
				.toLowerCase()
				.trim() === names[i].code.toLowerCase().trim()
		);
	});
	sorted.push(album);
	createDir("./" + names[i].code.toLowerCase().trim());
	createDir("./" + names[i].code.toLowerCase().trim() + "/images");
	fs.copyFile(
		"./index.html",
		"./" + names[i].code.toLowerCase().trim() + "/index.html",
		err => {
			if (err) throw err;
		}
	);
	fs.copyFile(
		"./scripts.js",
		"./" + names[i].code.toLowerCase().trim() + "/scripts.js",
		err => {
			if (err) throw err;
		}
	);
	fs.copyFile(
		"./styles.css",
		"./" + names[i].code.toLowerCase().trim() + "/styles.css",
		err => {
			if (err) throw err;
		}
	);

	fs.writeFileSync(
		"./" + names[i].code.toLowerCase().trim() + "/files.js",
		"const data =" + JSON.stringify(album)
	);

	for (const f in album) {
		const fname = album[f];
		Jimp.read("./images/" + fname, (err, lenna) => {
			if (err) throw err;
			lenna
				.scaleToFit(256, 256) // resize
				.write("./" + names[i].code.toLowerCase().trim() + "/thumbs/" + fname); // save
		});
		fs.copyFile(
			"./images/" + fname,
			"./" + names[i].code.toLowerCase().trim() + "/images/" + fname,
			err => {
				if (err) throw err;
				console.log(fname + " was copied to destination.txt");
			}
		);

		console.log("const data =" + JSON.stringify(files));
	}
}

// console.log(sorted);
