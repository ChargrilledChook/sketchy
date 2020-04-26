// TODO  optional - more complex coloring
// TODO improve UI / CSS

// Global variables and event listeners
let gridTrack = 32; 
const gridContainer = document.querySelector('#gridContainer');

const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
    resetGrid();
});

function drawGrid() {
    gridContainer.style.grid = `repeat(${gridTrack}, 1fr) / repeat(${gridTrack}, 1fr)`
    const gridSize = gridTrack **2;
    for (let i = 0; i < gridSize; i++){
        createCell()
    }
}

function createCell() {
    const cell = document.createElement('div'); 
    cell.className = 'cell'
    gridContainer.insertBefore(cell, gridContainer.firstChild);
    cell.addEventListener('mouseover', function() {
       cell.style.backgroundColor = 'black';
      // cell.style.opacity = parseFloat(cell.style.opacity) + 0.1;
    })
}

// 
function resetGrid() {
    const newGrid = prompt('Enter Grid Size: ', `${gridTrack}`)
    gridTrack = parseInt(newGrid);
    clearGrid();
    drawGrid();
}

function clearGrid(){
    const oldGrid = document.getElementById('gridContainer')
    oldGrid.innerHTML = '';
}
// createCell() largely inspired from 
// https://stackoverflow.com/questions/22574633/applying-css-style-to-dynamically-created-div

drawGrid()

