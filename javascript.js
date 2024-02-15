// create a ref to the container div
// create a function that takes 2 arguments rows and columns
// write for loop inside the function that takes the arguments and creates 16x16 divs

const container = document.querySelector("#container");

function createGrid(rowsNum, columnsNum) {
    for (let i = 0; i < rowsNum; i++) {
        let newRow = document.createElement("div")
        container.appendChild(newRow);
        newRow.className = "gridStyle";
    for (let j = 1; j < columnsNum; j++) {
        let newColumn = document.createElement("div");
        container.appendChild(newColumn)
        newColumn.className = "gridStyle";
    }
        
     }
}

createGrid(16,16);


console.log(container.children.length)