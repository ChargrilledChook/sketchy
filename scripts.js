let gridTrack = 8;
let gridSize = gridTrack * gridTrack;
const gridContainer = document.querySelector('#gridContainer');

const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
    resetGrid();
});

function updateGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(${gridTrack}, 1fr)`   // These two lines can probably be consolidated with the right grid property - area?
    gridContainer.style.gridTemplateRows = `repeat(${gridTrack}, 1fr)`
}

function drawGrid() {
    for (let i = 0; i < gridSize; i++){
        createCell()
    }
}

function createCell() {
    const cell = document.createElement('div'); // largely taken from https://stackoverflow.com/questions/22574633/applying-css-style-to-dynamically-created-div
    cell.className = 'cell'
    gridContainer.insertBefore(cell, gridContainer.firstChild);
}

// TODO change grid cell color on hover

function clearGrid(){
    const oldGrid = document.getElementById('gridContainer')
    oldGrid.innerHTML = '';
}

function resetGrid() {
    const newGrid = prompt('Enter Grid Size: ', '8')
    gridTrack = parseInt(newGrid);
    gridSize = gridTrack * gridTrack;
    clearGrid();
    updateGrid();
    drawGrid();
}

// TODO  optional - more complex coloring

drawGrid()