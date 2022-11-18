const GRID_SIZE = 16 * 16;

//maybe for loop to create each div from the given grid size.

let container = document.querySelector('.container');


for (let i = 0; i < GRID_SIZE; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}


let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", (e) => {
        e.target.classList.add('hover');
    });
})

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseout", (e) => {
        e.target.classList.remove('hover');
    });
})


function hoverOn() {

    //document.querySelector('grid-item').classList.add('hover');
}

function hoverOff() {

    //document.querySelector('grid-item').classList.remove('hover');
}