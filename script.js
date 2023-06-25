'use strict'
        //declaration and assignment of variables
        const gridContainer = document.querySelector('.gridContainer');
        const gridbtn = document.getElementById('createGrid');
        const showGridBtn = document.querySelector('#showgrid');
        const slider = document.getElementById('gridSize');
        const clearall = document.getElementById('newBoard');
        const colorPicker = document.getElementById('color-picker');                
        const currentValue = document.getElementById('currentValue');
        const eraser = document.getElementById('eraser');
        const eraserLabel = document.getElementById('eraser-label');

let penColor = 'rgb(1, 1, 78)';
        
eraser.addEventListener('change', function () {
  eraserLabel.textContent = eraser.checked ? 'Eraser: On' : 'Eraser: Off';
});

//color picker event to change the color of the gridContainer (sketch board) and griditem (drawing pen)
colorPicker.addEventListener('change', function () {
    const penColor = colorPicker.value;
    gridContainer.style.border = `5px solid ${penColor}`;
})

/* range input(slider) event to clear existing griditem/cells-
in gridContainer, create user selected grid items/cells, display the selected grid number for user*/
slider.addEventListener('input', function () {
    currentValue.textContent = `${slider.value} BY ${slider.value} GRID `;
    const gridSize = parseInt(slider.value);
    let gridItem;

    // Clear previous grid
    gridContainer.innerHTML = '';

    // Create the new grid based on the input
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.append(gridItem);
            
        gridItem.addEventListener('mousein', (function (item) {
            
            item.addEventListener('mouseout', function () {
                const penColor = colorPicker.value;
                if (!eraser.checked) item.style.backgroundColor = penColor;
                if (eraser.checked) item.style.backgroundColor = 'white';
            });
        })(gridItem));    
    }
})
  
// clears the entire grid container(new sketch board for user)
clearall.addEventListener('click', function () {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function (item) {
            item.style.backgroundColor = 'white';
                
        })
    });

// shows and hides grid lines
showGridBtn.addEventListener('click', function () {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function (item) {
            item.classList.toggle('border');
        })
})
    




