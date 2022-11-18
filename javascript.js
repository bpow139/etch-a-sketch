const GRID_SIZE = 16;

//maybe for loop to create each div from the given grid size.

let container = document.querySelector('.container');

let div = document.createElement('div');
container.appendChild(div);


for (let i = 0; i < GRID_SIZE; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
}