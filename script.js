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
