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

const generateImages = (el, count = 10) => {
	var folder = "images/";

	const newImage = name => {
		const item = document.createElement("div");
		item.className = "grid__item";

		const content = document.createElement("img");

		content.src = folder + name;

		item.appendChild(content);
		gridItems.push({ item, content });

		return item;
	};

	let images = document.createDocumentFragment();

	for (const d in data) {
		images.appendChild(newImage(data[d]));
	}

	el.appendChild(images);
};

generateImages(grid, 40);
//# sourceURL=pen.js
