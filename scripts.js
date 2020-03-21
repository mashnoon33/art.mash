const grid = document.querySelector(".grid");
const rowSize = parseInt(
	getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
	10
);
const rowGap = parseInt(
	getComputedStyle(grid).getPropertyValue("grid-gap"),
	10
);
const gridItems = [];

const positionGridItems = () => {
	gridItems.forEach(({ item, content }) => {
		content.classList.remove("cover");
		const rowSpan = Math.ceil(
			(content.offsetHeight + rowGap) / (rowSize + rowGap)
		);

		item.style.setProperty("--row-span", rowSpan);
		content.classList.add("cover");
	});
};

window.addEventListener("load", positionGridItems);
window.addEventListener("resize", _.debounce(positionGridItems, 100));

// DEMO CODE

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
const generateImages = (el, count = 10) => {
	var folder = "thumbs/";

	const newImage = name => {
		const item = document.createElement("div");
		item.className = "grid__item";

		const content = document.createElement("img");

		content.src = folder + name;
		content.setAttribute("href", "images/" + name);

		item.appendChild(content);
		gridItems.push({ item, content });

		return item;
	};

	let images = document.createDocumentFragment();

	shuffleArray(data);

	for (const d in data) {
		images.appendChild(newImage(data[d]));
	}

	el.appendChild(images);
};

generateImages(grid, 40);
//# sourceURL=pen.js
