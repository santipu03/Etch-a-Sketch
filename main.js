// DOM selection
const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const resizeButton = document.querySelector(".resize-button");

// define variables
let squaresPerSide = 16
let totalSquares = squaresPerSide * squaresPerSide;



// function to get the squares per side of the new grid
const getNewGrid = () => {

    squaresPerSide = parseInt(prompt("choose the number of squares per side (max number is 100)"));
    if (isNaN(squaresPerSide) || squaresPerSide == 0 || squaresPerSide > 100) {
        return alert("Insert only numbers please (max number is 100)");
    }

    removeGrid();
    totalSquares = squaresPerSide * squaresPerSide;

    createGrid();
}

// function to create the square divs that are required
const createGrid = () => {
    for (let i = 0; i < totalSquares; i++){
        let div = document.createElement("div");
        div.classList.add("item");
        container.append(div);
    };

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, auto)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, auto)`;

    addHover();

};


// remove the actual grid
const removeGrid = () => {
    for (let i = 0; i < totalSquares; i++){
        const divToClear = document.querySelector(".item");
        divToClear.remove();
    }
}

// clear the grid
const clearGrid = () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.backgroundColor = "#ddd";
    })
}



//function to add the hover functionality
const addHover = () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("mouseover", ()=> {
            item.style.backgroundColor = "black";
        })
    });
}

// when the page loads, the first grid of 16x16 is created
window.addEventListener("load", createGrid)


//button listener to create the new grid
clearButton.addEventListener("click", clearGrid);
resizeButton.addEventListener("click", getNewGrid);
