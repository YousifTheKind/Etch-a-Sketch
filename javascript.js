// create a ref to the container div
// create a function that takes 2 arguments rows and columns
// write for loop inside the function that takes the arguments and creates 16x16 divs

const container = document.querySelector("#container");
const newGrid = document.querySelector("#newGrid")
const gridStyle = document.querySelectorAll('.gridStyle')
newGrid.className = "buttonPos";


function createGrid(gridSize) {

    for (let i = 0; i < gridSize * gridSize; i++) {
        let newRow = document.createElement("div");
        let a = gridSize;
        const boxSize = 600 / gridSize;
        newRow.className = "gridStyle";
        newRow.style.width = boxSize + 'px';
        newRow.style.height = boxSize + 'px';        
        container.appendChild(newRow);
     }
}




// add an event listener that activates when the mouse hovers over a dive
//change the backgroundcolor of the div when mouse hovers
//
let brightnessLevel = 1;
container.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget)
    {
        e.stopPropagation()
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        brightnessLevel -= 0.1;
        e.target.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";


        //i give up
    }

});


// create a button in html with id
// get a ref to the button in js
// position the button in the top of the screen using css class
// add event listener in js to call a function when the button is clicked
// write new function
    // prompt the user when the button is clicked
    // prompt should ask the user to enter a number that represents the number of rows columns (doesn't matter)
    // take the user input and use it as input to the createGrid function
// figure out how to cram the squares in the same total space


newGrid.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Please enter the new grid size. i.e for a 16x16 grid enter '16' (Max 100)"), 10);
    
    let boxes = document.querySelectorAll('.gridStyle');

    boxes.forEach(box => {
        box.remove();
    })

    while(isNaN(gridSize) || gridSize > 100 || gridSize < 1){
        gridSize = parseInt(prompt("please enter a number between 1 & 100"), 10);
    }

    //createGrid(gridSize, gridSize);
    createGrid(gridSize);

});




// in the newGrid event listener create a ref to all the divs
// forEach box box.remove
// createGrid(gridSize, gridSize)
// in the createGrid function create new variable boxSize that takes a int(try 100) then devide it by rowNum
// set width and height property of the div based on boxSize



