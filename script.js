const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const CELL_SIZE = 20; // Width/Height of each grid cell in pixels
const GRID_COLOR = '#000000ff'; // Light gray
const LINE_WIDTH = 1;

ctx.strokeStyle = GRID_COLOR;
ctx.lineWidth = LINE_WIDTH;
for (let x = 0; x <= canvas.width; x += CELL_SIZE) {
    ctx.beginPath();
    // Start line at the top edge (x, 0)
    ctx.moveTo(x, 0); 
    // Draw line to the bottom edge (x, canvas.height)
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}