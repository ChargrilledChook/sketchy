Odin homework

function updateGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(${gridTrack}, 1fr)`   // These two lines can probably be consolidated with the right grid property - area?
    gridContainer.style.gridTemplateRows = `repeat(${gridTrack}, 1fr)`
}