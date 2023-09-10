const displayGrid = (columns, rows) => {

	const container = document.querySelector(".container");
	container.innerHTML = "";
  
	for (let i = 0; i < columns; i++) {  
		let column = document.createElement("div");
		column.classList.add("column");

		for (let j = 0; j < rows; j++) {  
		let row = document.createElement("div");
		row.classList.add("row");
		column.appendChild(row);
		}
	
		container.appendChild(column);
	}
  
};

const udateDimensions = () => {

	const columns = parseInt(prompt("Set Columns: (Max is 50)"));
	const rows = parseInt(prompt("Set Rows: (Max is 50)"));
  
	if (isNaN(columns) || columns < 1 || columns > 50 || isNaN(rows) || rows < 1 || rows > 50) {

		alert("Dimensions are invaid. By default dimensions wil be set to 16×16 grid size")    		      displayGrid(16, 16);

	} else displayGrid(columns, rows);

};

document.getElementById("grid-btn").addEventListener("click", updateDimensions);


const getRandomColor = () => {

	let red = Math.floor(Math.random() *256);
	let green = Math.floor(Math.random() *256);  
	let blue = Math.floor(Math.random() *256);

	return `rgb(${red}, ${green}, ${blue})`;

};

let color;
let colorSetting;

const getCustomColor = () => {

	let red = parseInt(prompt("Value for Red: (Max 255)"));  
	let green = parseInt(prompt("Value for Green: (Max 255)"));
	let blue = parseInt(prompt("Value for Blue: (Max 255)"));
  
	if (isNaN(red) || red < 0 || red > 255 || isNaN(blue) || blue < 0 || blue > 255 || isNaN(green) || green < 0 || green > 255) {

		alert("Value are invaid. By default the custom color will be set to red.");
		color = `rgb(255, 0, 0)`;
  
	} else color = `rgb(${red}, ${green}, ${blue})`;

};

document.getElementById("custom-btn").addEventListener("click", () => {
	colorSetting = "custom";
	getCustomColor();
});

document.getElementById("random-btn").addEventListener("click", () => {
	colorSetting = "random";
	getRandomColor;
});
