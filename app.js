import Grid from './Grid.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const grid = new Grid(10, 10);

setInterval(grid.draw(ctx, canvas.innerWidth, canvas.innerHeight), 1000 / 60);

canvas.addEventListener('click', (event) => {
    const indexes = handleGridClick(event, rows, columns);
    const rowIndex = indexes[0],
        columnIndex = indexes[1];
    console.log(rowIndex, columnIndex);
});
