const container = document.querySelector('.container');

function createGrid(gridSize) {

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;


    for (let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseover", (e) => {
            e.target.classList.add('hover');
        });
    })
}

//initial grid size of 16
createGrid(16);

let btn = document.querySelector('button');
btn.addEventListener('click', gridSizeChange);

function gridSizeChange() {
    let gridSize = prompt('What grid size?');
    createGrid(gridSize);
}